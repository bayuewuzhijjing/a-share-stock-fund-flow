from __future__ import annotations

import json
import math
import sqlite3
import time
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime
from pathlib import Path
from typing import Any, Callable
from urllib.parse import urlencode
from zoneinfo import ZoneInfo


ROOT = Path(__file__).resolve().parents[1]
DB_PATH = ROOT / "data" / "stock_fund_flow.db"
WATCHLIST_PATH = ROOT / "data" / "a_share_watchlist.json"
THEME_POOL_PATH = ROOT / "data" / "a_share_theme_pool.json"
MANUAL_POOL_PATH = ROOT / "data" / "a_share_manual_pool.json"
CHINA_TZ = ZoneInfo("Asia/Shanghai")

EASTMONEY_TOKEN = "7eea3edcaed734bea9cbfc24409ed989"
EASTMONEY_HISTORY_TOKEN = "b2884a393a59ad64002292a3e90d46a5"
RANK_URL = "https://push2delay.eastmoney.com/api/qt/clist/get"
QUOTE_URL = "https://push2delay.eastmoney.com/api/qt/ulist.np/get"
DAILY_FLOW_URL = "https://push2his.eastmoney.com/api/qt/stock/fflow/daykline/get"
ASHARE_FILTER = "m:0+t:6,m:0+t:80,m:1+t:2,m:1+t:23"
QUOTE_FIELDS = "f2,f3,f6,f8,f12,f14,f20,f21,f62,f66,f69,f72,f75,f78,f81,f84,f87,f124,f184"
DAILY_FIELDS1 = "f1,f2,f3,f7"
DAILY_FIELDS2 = "f51,f52,f53,f54,f55,f56,f57,f58,f59,f60,f61,f62,f63,f64,f65"
DAILY_FLOW_PROVIDER = "东方财富公开资金流向"
LEGACY_SINA_FLOW_PROVIDER = "新浪财经公开资金流向"

INTRADAY_WINDOWS = (1, 5, 15, 30, 60, 120)
INTRADAY_WINDOW_KEYS = {*[str(item) for item in INTRADAY_WINDOWS], "day"}
SWING_WINDOWS = (3, 7, 14, 21)
SHORTLIST_LIMIT = 10

TextFetcher = Callable[[str], str]


class StockFundFlowError(RuntimeError):
    pass


def _number(value: Any) -> float | None:
    try:
        number = float(value)
    except (TypeError, ValueError):
        return None
    return number if math.isfinite(number) else None


def _rounded(value: Any, digits: int = 2) -> float | None:
    number = _number(value)
    return round(number, digits) if number is not None else None


def _int(value: Any) -> int:
    number = _number(value)
    return int(round(number)) if number is not None else 0


def _decode_json(value: Any, fallback: Any) -> Any:
    if value is None or value == "":
        return fallback
    if isinstance(value, (dict, list)):
        return value
    try:
        decoded = json.loads(str(value))
    except (TypeError, json.JSONDecodeError):
        return fallback
    return decoded if decoded is not None else fallback


def _row_value(row: sqlite3.Row | None, key: str, default: Any = None) -> Any:
    if row is None:
        return default
    try:
        return row[key]
    except (IndexError, KeyError):
        return default


def _first(params: dict[str, list[str]] | None, key: str, default: str = "") -> str:
    if not params:
        return default
    values = params.get(key)
    if not values:
        return default
    return str(values[0] or default).strip()


def code_to_secid(code: str) -> str:
    code = str(code).strip()
    market = "1" if code.startswith(("6", "9")) else "0"
    return f"{market}.{code}"


def rank_url(sort_field: str = "f62", sort_order: str = "1", page_size: int = 80) -> str:
    query = {
        "pn": 1,
        "pz": page_size,
        "po": sort_order,
        "np": 1,
        "fltt": 2,
        "invt": 2,
        "fid": sort_field,
        "fs": ASHARE_FILTER,
        "fields": QUOTE_FIELDS,
        "ut": EASTMONEY_TOKEN,
    }
    return f"{RANK_URL}?{urlencode(query)}"


def quote_url(codes: list[str]) -> str:
    secids = ",".join(code_to_secid(code) for code in codes)
    query = {"secids": secids, "fields": QUOTE_FIELDS, "ut": EASTMONEY_TOKEN}
    return f"{QUOTE_URL}?{urlencode(query)}"


def daily_flow_url(code: str) -> str:
    query = {
        "secid": code_to_secid(code),
        "klt": "101",
        "lmt": "120",
        "fields1": DAILY_FIELDS1,
        "fields2": DAILY_FIELDS2,
        "ut": EASTMONEY_HISTORY_TOKEN,
    }
    return f"{DAILY_FLOW_URL}?{urlencode(query)}"


def _request_text(url: str, timeout: float = 8) -> str:
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 SignalDesk"})
    with urllib.request.urlopen(request, timeout=timeout) as response:
        return response.read().decode("utf-8", errors="replace")


def parse_stock_rows(
    text: str,
    source_tag: str,
    rank_tag: str | None = None,
    *,
    quote_value_scale: float = 1,
) -> tuple[list[dict[str, Any]], int]:
    try:
        payload = json.loads(text)
    except json.JSONDecodeError as exc:
        raise StockFundFlowError(f"东方财富资金流返回无法解析: {exc}") from exc
    data = payload.get("data") or {}
    diff = data.get("diff") or []
    total = int(data.get("total") or len(diff))
    rows: list[dict[str, Any]] = []
    scale = quote_value_scale if quote_value_scale > 0 else 1
    def scaled_value(value: Any) -> float | None:
        number = _number(value)
        return number / scale if number is not None else None

    for item in diff:
        code = str(item.get("f12") or "").strip()
        if not code:
            continue
        main = _int(item.get("f62"))
        turnover = _int(item.get("f6"))
        rows.append(
            {
                "code": code,
                "name": str(item.get("f14") or code),
                "sector": "",
                "last": _rounded(scaled_value(item.get("f2")), 3),
                "changePct": _rounded(scaled_value(item.get("f3")), 3),
                "turnoverYuan": turnover,
                "turnoverRate": _rounded(scaled_value(item.get("f8")), 3),
                "totalMarketCapYuan": _int(item.get("f20")),
                "floatMarketCapYuan": _int(item.get("f21")),
                "mainNetYuan": main,
                "mainNetPct": _rounded(scaled_value(item.get("f184")), 3),
                "superLargeNetYuan": _int(item.get("f66")),
                "largeNetYuan": _int(item.get("f72")),
                "mediumNetYuan": _int(item.get("f78")),
                "smallNetYuan": _int(item.get("f84")),
                "quoteEpoch": _int(item.get("f124")),
                "sourceTags": [tag for tag in (rank_tag or source_tag, source_tag) if tag],
            }
        )
    return rows, total


def parse_daily_history(text: str, fallback_code: str = "") -> tuple[str, str, list[dict[str, Any]]]:
    payload = json.loads(text)
    if isinstance(payload, list):
        rows = []
        for item in payload:
            date = str(item.get("opendate") or item.get("date") or "")
            if not date:
                continue
            rows.append(
                {
                    "date": date,
                    "mainNetYuan": _int(item.get("r0_net")),
                    "mainNetPct": _rounded((_number(item.get("r0_ratio")) or 0) * 100, 2),
                    "close": _rounded(item.get("trade"), 3),
                    "changePct": _rounded((_number(item.get("changeratio")) or 0) * 100, 2),
                    "provider": LEGACY_SINA_FLOW_PROVIDER,
                }
            )
        return fallback_code, "", rows
    data = payload.get("data") or {}
    code = str(data.get("code") or fallback_code)
    name = str(data.get("name") or "")
    rows = []
    for line in data.get("klines") or []:
        parts = str(line).split(",")
        if len(parts) < 13:
            continue
        rows.append(
            {
                "date": parts[0],
                "mainNetYuan": _int(parts[1]),
                "smallNetYuan": _int(parts[2]),
                "mediumNetYuan": _int(parts[3]),
                "largeNetYuan": _int(parts[4]),
                "superLargeNetYuan": _int(parts[5]),
                "mainNetPct": _rounded(parts[6], 2),
                "close": _rounded(parts[11], 3),
                "changePct": _rounded(parts[12], 2),
                "provider": DAILY_FLOW_PROVIDER,
            }
        )
    return code, name, rows


def _read_json(path: Path, fallback: Any) -> Any:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return fallback


def _theme_pool_items(path: Path = THEME_POOL_PATH) -> list[dict[str, Any]]:
    payload = _read_json(path, {})
    items: list[dict[str, Any]] = []
    for theme in payload.get("themes") or []:
        theme_name = str(theme.get("theme") or "").strip()
        for branch in theme.get("branches") or []:
            branch_name = str(branch.get("branch") or "").strip()
            role = str(branch.get("role") or "").strip()
            for stock in branch.get("stocks") or []:
                code = str(stock.get("code") or "").strip()
                if not code:
                    continue
                items.append(
                    {
                        "code": code,
                        "name": str(stock.get("name") or "").strip(),
                        "sector": str(stock.get("sector") or theme_name).strip(),
                        "theme": theme_name,
                        "chain": str(stock.get("chain") or theme_name).strip(),
                        "branch": branch_name,
                        "role": role,
                        "priority": str(stock.get("priority") or "medium").strip(),
                        "source": "theme-pool",
                    }
                )
    for item in payload.get("items") or []:
        code = str(item.get("code") or "").strip()
        if code:
            items.append({**item, "code": code, "source": "theme-pool"})
    return items


def load_watchlist(path: Path = WATCHLIST_PATH) -> list[dict[str, Any]]:
    if path == THEME_POOL_PATH:
        return _theme_pool_items(path)
    payload = _read_json(path, {})
    rows: list[dict[str, Any]] = []
    for item in payload.get("items") or []:
        code = str(item.get("code") or "").strip()
        if not code:
            continue
        rows.append(
            {
                "code": code,
                "name": str(item.get("name") or "").strip(),
                "sector": str(item.get("sector") or "").strip(),
                "theme": str(item.get("theme") or "").strip(),
                "chain": str(item.get("chain") or "").strip(),
                "branch": str(item.get("branch") or "").strip(),
                "role": str(item.get("role") or "").strip(),
                "priority": str(item.get("priority") or "").strip(),
                "source": str(item.get("source") or path.stem).strip(),
            }
        )
    return rows


def load_forced_stock_pool(
    watchlist_path: Path = WATCHLIST_PATH,
    *,
    theme_path: Path = THEME_POOL_PATH,
    manual_path: Path = MANUAL_POOL_PATH,
) -> list[dict[str, Any]]:
    merged: dict[str, dict[str, Any]] = {}
    for source_path in (watchlist_path, theme_path, manual_path):
        for item in load_watchlist(source_path):
            code = item["code"]
            previous = merged.get(code, {})
            combined = {**previous, **{key: value for key, value in item.items() if value not in ("", None)}}
            sources = set(str(previous.get("source") or "").split(",")) if previous else set()
            sources.add(str(item.get("source") or source_path.stem))
            combined["source"] = ",".join(sorted(source for source in sources if source))
            merged[code] = combined
    return list(merged.values())


def theme_lookup() -> dict[str, dict[str, Any]]:
    return {item["code"]: item for item in load_forced_stock_pool()}


def theme_member_codes(theme_name: str) -> set[str]:
    normalized = str(theme_name or "").strip().lower()
    return {
        str(item.get("code") or "").strip()
        for item in _theme_pool_items()
        if str(item.get("theme") or "").strip().lower() == normalized
        and str(item.get("code") or "").strip()
    }


def _annotate_row(row: dict[str, Any], lookup: dict[str, dict[str, Any]]) -> dict[str, Any]:
    meta = lookup.get(str(row.get("code") or "")) or {}
    for key in ("name", "sector", "theme", "chain", "branch", "role", "priority"):
        if meta.get(key):
            if key == "name" and row.get("name") and not str(row.get("name")).isdigit():
                continue
            row[key] = meta[key]
        else:
            row.setdefault(key, "")
    tags = list(row.get("sourceTags") or [])
    for tag_key in ("theme", "branch", "role"):
        if row.get(tag_key):
            tags.append(f"{tag_key}:{row[tag_key]}")
    row["sourceTags"] = list(dict.fromkeys(tag for tag in tags if tag))
    return row


def _connect(path: Path = DB_PATH) -> sqlite3.Connection:
    path.parent.mkdir(parents=True, exist_ok=True)
    db = sqlite3.connect(path)
    db.row_factory = sqlite3.Row
    db.execute("PRAGMA busy_timeout=15000")
    _ensure_schema(db)
    return db


def _ensure_schema(db: sqlite3.Connection) -> None:
    db.execute(
        """
        CREATE TABLE IF NOT EXISTS stock_flow_runs(
            trading_date TEXT NOT NULL,
            slot TEXT NOT NULL,
            trading_index INTEGER DEFAULT 0,
            quote_at TEXT,
            captured_at TEXT,
            provider TEXT,
            state TEXT,
            market_total INTEGER DEFAULT 0,
            raw_count INTEGER DEFAULT 0,
            selected_count INTEGER DEFAULT 0,
            PRIMARY KEY(trading_date, slot)
        )
        """
    )
    db.execute(
        """
        CREATE TABLE IF NOT EXISTS stock_flow_selected(
            trading_date TEXT NOT NULL,
            slot TEXT NOT NULL,
            trading_index INTEGER DEFAULT 0,
            quote_at TEXT,
            code TEXT NOT NULL,
            name TEXT,
            sector TEXT,
            priority TEXT,
            is_watchlist INTEGER DEFAULT 0,
            last REAL,
            change_pct REAL,
            turnover_yuan INTEGER DEFAULT 0,
            turnover_rate REAL,
            total_market_cap_yuan INTEGER DEFAULT 0,
            float_market_cap_yuan INTEGER DEFAULT 0,
            main_net_yuan INTEGER DEFAULT 0,
            main_net_pct REAL,
            super_large_net_yuan INTEGER DEFAULT 0,
            large_net_yuan INTEGER DEFAULT 0,
            medium_net_yuan INTEGER DEFAULT 0,
            small_net_yuan INTEGER DEFAULT 0,
            source_tags_json TEXT DEFAULT '[]',
            selection_reasons_json TEXT DEFAULT '[]',
            metrics_json TEXT DEFAULT '{}',
            PRIMARY KEY(trading_date, slot, code)
        )
        """
    )
    db.execute(
        """
        CREATE TABLE IF NOT EXISTS stock_flow_daily(
            code TEXT NOT NULL,
            trading_date TEXT NOT NULL,
            name TEXT,
            main_net_yuan INTEGER DEFAULT 0,
            main_net_pct REAL,
            close REAL,
            change_pct REAL,
            provider TEXT,
            updated_at TEXT,
            PRIMARY KEY(code, trading_date, provider)
        )
        """
    )
    db.execute(
        """
        CREATE TABLE IF NOT EXISTS stock_flow_ticks(
            trading_date TEXT NOT NULL,
            slot TEXT NOT NULL,
            trading_index INTEGER DEFAULT 0,
            quote_at TEXT,
            code TEXT NOT NULL,
            name TEXT,
            last REAL,
            change_pct REAL,
            turnover_yuan INTEGER DEFAULT 0,
            main_net_yuan INTEGER DEFAULT 0,
            super_large_net_yuan INTEGER DEFAULT 0,
            large_net_yuan INTEGER DEFAULT 0,
            medium_net_yuan INTEGER DEFAULT 0,
            small_net_yuan INTEGER DEFAULT 0,
            PRIMARY KEY(trading_date, slot, code)
        )
        """
    )


def trading_minute_index(slot: str) -> int | None:
    try:
        hour, minute = [int(part) for part in str(slot).split(":", 1)]
    except ValueError:
        return None
    total = hour * 60 + minute
    morning_start, morning_end = 9 * 60 + 30, 11 * 60 + 30
    afternoon_start, afternoon_end = 13 * 60, 15 * 60
    if morning_start <= total <= morning_end:
        return total - morning_start
    if afternoon_start <= total <= afternoon_end:
        return 120 + (total - afternoon_start) + 1
    return None


def classify_flow_signal(delta_main: int, price_change_pct: float | None, intensity_pct: float | None = None) -> str:
    price = float(price_change_pct or 0)
    intensity = abs(float(intensity_pct or 0))
    if abs(delta_main) < 1_000_000 and intensity < 0.5:
        return "横盘观察"
    if delta_main > 0 and price >= 0.05:
        return "主动进攻"
    if delta_main > 0 and price <= -0.05:
        return "承接未涨"
    if delta_main < 0 and price >= 0.05:
        return "兑现背离"
    if delta_main < 0 and price <= -0.05:
        return "主动抛压"
    return "流入观察" if delta_main > 0 else "流出观察"


def _row_from_selected(row: sqlite3.Row, lookup: dict[str, dict[str, Any]]) -> dict[str, Any]:
    metrics = _decode_json(row["metrics_json"], {})
    classification = metrics.get("classification") or {}
    payload = {
        "code": str(row["code"]),
        "name": str(row["name"] or row["code"]),
        "sector": str(row["sector"] or ""),
        "theme": str(classification.get("theme") or ""),
        "chain": str(classification.get("chain") or ""),
        "branch": str(classification.get("branch") or ""),
        "role": str(classification.get("role") or ""),
        "priority": str(row["priority"] or ""),
        "isWatchlist": bool(row["is_watchlist"]),
        "last": row["last"],
        "changePct": row["change_pct"],
        "turnoverYuan": _int(row["turnover_yuan"]),
        "turnoverRate": row["turnover_rate"],
        "totalMarketCapYuan": _int(row["total_market_cap_yuan"]),
        "floatMarketCapYuan": _int(row["float_market_cap_yuan"]),
        "mainNetYuan": _int(row["main_net_yuan"]),
        "mainNetPct": row["main_net_pct"],
        "superLargeNetYuan": _int(row["super_large_net_yuan"]),
        "largeNetYuan": _int(row["large_net_yuan"]),
        "mediumNetYuan": _int(row["medium_net_yuan"]),
        "smallNetYuan": _int(row["small_net_yuan"]),
        "sourceTags": _decode_json(row["source_tags_json"], []),
        "selectionReasons": _decode_json(row["selection_reasons_json"], []),
        "intraday": metrics.get("intraday") or {},
        "periods": metrics.get("periods") or {},
        "asofPeriods": metrics.get("asofPeriods") or {},
        "opening": metrics.get("opening") or {},
        "intradayProfile": metrics.get("intradayProfile") or {},
        "shortlist": metrics.get("shortlist") or {},
    }
    return _annotate_row(payload, lookup)


def build_swing_metrics(db: sqlite3.Connection, row: dict[str, Any], trading_date: str) -> dict[str, Any]:
    current = _int(row.get("mainNetYuan"))
    history = db.execute(
        """
        SELECT trading_date, main_net_yuan, change_pct, close, provider
        FROM stock_flow_daily
        WHERE code = ? AND trading_date <= ? AND provider = ?
        ORDER BY trading_date DESC LIMIT ?
        """,
        (row["code"], trading_date, DAILY_FLOW_PROVIDER, max(SWING_WINDOWS)),
    ).fetchall()
    if not history or str(history[0]["trading_date"]) != trading_date:
        history = [{"trading_date": trading_date, "main_net_yuan": current, "change_pct": row.get("changePct"), "close": row.get("last"), "provider": DAILY_FLOW_PROVIDER}, *history]
    periods: dict[str, Any] = {}
    for window in SWING_WINDOWS:
        selected = history[:window]
        amount = sum(_int(item["main_net_yuan"]) for item in selected)
        positive = sum(1 for item in selected if _int(item["main_net_yuan"]) > 0)
        periods[str(window)] = {
            "windowDays": window,
            "availableDays": len(selected),
            "complete": len(selected) >= window,
            "periodMainNetYuan": amount,
            "averageDailyMainNetYuan": round(amount / len(selected)) if selected else 0,
            "positiveDays": positive,
            "negativeDays": sum(1 for item in selected if _int(item["main_net_yuan"]) < 0),
            "positiveDayRatioPct": round(positive / len(selected) * 100, 1) if selected else None,
            "provider": DAILY_FLOW_PROVIDER,
        }
    return periods


def build_asof_swing_metrics(db: sqlite3.Connection, trading_date: str, row: dict[str, Any]) -> dict[str, Any]:
    return build_swing_metrics(db, row, trading_date)


def build_opening_metrics(db: sqlite3.Connection, trading_date: str, index: int, row: dict[str, Any]) -> dict[str, Any]:
    first = db.execute(
        """
        SELECT slot, last, change_pct, main_net_yuan
        FROM stock_flow_ticks
        WHERE trading_date = ? AND code = ? AND trading_index <= ?
        ORDER BY trading_index LIMIT 1
        """,
        (trading_date, row["code"], index),
    ).fetchone()
    if first is None:
        return {"ready": False, "reason": "等待首个快照"}
    first_index = trading_minute_index(str(first["slot"]))
    if first_index is None or first_index > 5:
        return {
            "ready": False,
            "reason": "opening_snapshot_missing",
            "observedSlot": str(first["slot"]),
            "openingPrice": None,
            "openingChangePct": None,
            "openingMainNetYuan": None,
            "sessionPriceChangePct": None,
        }
    first_price = _number(first["last"])
    current = _number(row.get("last"))
    return {
        "ready": first_price is not None,
        "observedSlot": str(first["slot"]),
        "openingPrice": first_price,
        "openingChangePct": _rounded(first["change_pct"], 3),
        "openingMainNetYuan": _int(first["main_net_yuan"]),
        "sessionPriceChangePct": round((current / first_price - 1) * 100, 3) if current is not None and first_price else None,
    }


def build_intraday_profile(db: sqlite3.Connection, trading_date: str, index: int, row: dict[str, Any]) -> dict[str, Any]:
    ticks = db.execute(
        """
        SELECT trading_index, main_net_yuan, last
        FROM stock_flow_ticks
        WHERE trading_date = ? AND code = ? AND trading_index <= ?
        ORDER BY trading_index
        """,
        (trading_date, row["code"], index),
    ).fetchall()
    if len(ticks) < 2:
        return {"ready": False, "observedIntervals": max(0, len(ticks) - 1)}
    deltas = [_int(cur["main_net_yuan"]) - _int(prev["main_net_yuan"]) for prev, cur in zip(ticks, ticks[1:])]
    first_price = _number(ticks[0]["last"])
    current = _number(row.get("last"))
    return {
        "ready": True,
        "observedIntervals": len(deltas),
        "positiveIntervalRatioPct": round(sum(1 for item in deltas if item > 0) / len(deltas) * 100, 1),
        "sessionFlowChangeYuan": _int(ticks[-1]["main_net_yuan"]) - _int(ticks[0]["main_net_yuan"]),
        "sessionPriceChangePct": round((current / first_price - 1) * 100, 3) if current is not None and first_price else None,
    }


def _find_tick(db: sqlite3.Connection, trading_date: str, code: str, index: int) -> sqlite3.Row | None:
    return db.execute(
        """
        SELECT * FROM stock_flow_ticks
        WHERE trading_date = ? AND code = ? AND trading_index <= ?
        ORDER BY trading_index DESC LIMIT 1
        """,
        (trading_date, code, index),
    ).fetchone()


def build_intraday_metrics(db: sqlite3.Connection, trading_date: str, index: int, row: dict[str, Any]) -> dict[str, Any]:
    metrics: dict[str, Any] = {}
    for window in INTRADAY_WINDOWS:
        baseline = _find_tick(db, trading_date, row["code"], index - window)
        if baseline is None:
            metrics[str(window)] = {"windowMinutes": window, "ready": False, "reason": "baseline_missing"}
            continue
        elapsed = max(1, index - int(baseline["trading_index"] or index))
        delta = _int(row.get("mainNetYuan")) - _int(baseline["main_net_yuan"])
        delta_turnover = _int(row.get("turnoverYuan")) - _int(baseline["turnover_yuan"])
        current_price = _number(row.get("last"))
        base_price = _number(baseline["last"])
        price_change = round((current_price / base_price - 1) * 100, 3) if current_price is not None and base_price else None
        velocity = round(delta / elapsed)
        prior = _find_tick(db, trading_date, row["code"], int(baseline["trading_index"] or 0) - window)
        prior_velocity = None
        acceleration = None
        if prior is not None:
            prior_elapsed = max(1, int(baseline["trading_index"] or 0) - int(prior["trading_index"] or 0))
            prior_velocity = round((_int(baseline["main_net_yuan"]) - _int(prior["main_net_yuan"])) / prior_elapsed)
            acceleration = velocity - prior_velocity
        metrics[str(window)] = {
            "windowMinutes": window,
            "ready": True,
            "deltaMainNetYuan": delta,
            "velocityYuanPerMinute": velocity,
            "priorVelocityYuanPerMinute": prior_velocity,
            "accelerationYuanPerMinute": acceleration,
            "intensityPct": round(delta / delta_turnover * 100, 3) if delta_turnover > 0 else None,
            "priceChangePct": price_change,
            "signal": classify_flow_signal(delta, price_change, round(delta / delta_turnover * 100, 3) if delta_turnover > 0 else None),
            "breakdown": {
                "superLargeNetYuan": _int(row.get("superLargeNetYuan")) - _int(_row_value(baseline, "super_large_net_yuan", 0)),
                "largeNetYuan": _int(row.get("largeNetYuan")) - _int(_row_value(baseline, "large_net_yuan", 0)),
                "mediumNetYuan": _int(row.get("mediumNetYuan")) - _int(_row_value(baseline, "medium_net_yuan", 0)),
                "smallNetYuan": _int(row.get("smallNetYuan")) - _int(_row_value(baseline, "small_net_yuan", 0)),
            },
        }
    day_main = _int(row.get("mainNetYuan"))
    day_turnover = _int(row.get("turnoverYuan"))
    day_intensity = _number(row.get("mainNetPct"))
    if day_intensity is None and day_turnover > 0:
        day_intensity = day_main / day_turnover * 100
    day_price_change = _rounded(row.get("changePct"), 3)
    day_elapsed = max(1, index + 1)
    metrics["day"] = {
        "windowKey": "day",
        "ready": True,
        "elapsedTradingMinutes": day_elapsed,
        "deltaMainNetYuan": day_main,
        "velocityYuanPerMinute": round(day_main / day_elapsed),
        "priorVelocityYuanPerMinute": (metrics.get("30") or {}).get("priorVelocityYuanPerMinute"),
        "accelerationYuanPerMinute": (metrics.get("30") or {}).get("accelerationYuanPerMinute"),
        "intensityPct": _rounded(day_intensity, 3),
        "priceChangePct": day_price_change,
        "signal": classify_flow_signal(day_main, day_price_change, day_intensity),
        "breakdown": {
            "superLargeNetYuan": _int(row.get("superLargeNetYuan")),
            "largeNetYuan": _int(row.get("largeNetYuan")),
            "mediumNetYuan": _int(row.get("mediumNetYuan")),
            "smallNetYuan": _int(row.get("smallNetYuan")),
        },
    }
    return metrics


def build_shortlist(rows: list[dict[str, Any]]) -> list[dict[str, Any]]:
    selected: list[dict[str, Any]] = []
    for row in rows:
        name = str(row.get("name") or "")
        if name.startswith(("N", "C")) and len(name) <= 5:
            continue
        m30 = (row.get("intraday") or {}).get("30") or {}
        m15 = (row.get("intraday") or {}).get("15") or {}
        opening = row.get("opening") or {}
        daily_net = _int(row.get("mainNetYuan"))
        m30_ready = bool(m30.get("ready"))
        m15_ready = bool(m15.get("ready"))
        inflow30 = _int(m30.get("deltaMainNetYuan")) if m30_ready else 0
        inflow15 = _int(m15.get("deltaMainNetYuan")) if m15_ready else 0
        change = float(_number(row.get("changePct")) or 0)
        score = 0
        reasons: list[str] = []
        if daily_net > 100_000_000:
            score += 28
            reasons.append("all_day_leader")
        if inflow30 > 5_000_000:
            score += 22
            reasons.append("30m_persistent_inflow")
        if inflow15 > 3_000_000:
            score += 15
            reasons.append("15m_inflow")
        if change > 3:
            score += 14
            reasons.append("price_confirmed")
        if opening.get("openingChangePct") and float(opening["openingChangePct"]) > 1:
            score += 10
            reasons.append("opening_strength_candidate")
        if row.get("priority") == "high":
            score += 8
            reasons.append("core_theme_stock")
        if daily_net < 0 and inflow30 <= 0:
            continue
        if score < 52:
            continue
        candidate = dict(row)
        candidate["shortlist"] = {
            "eligible": True,
            "tier": "core" if score >= 72 else "watch",
            "score": min(99, score),
            "signal": classify_flow_signal(inflow30 or daily_net, m30.get("priceChangePct") or change),
            "reasons": reasons,
            "riskCodes": ["late_flow_reversal"] if inflow30 < 0 and daily_net > 0 else [],
            "metrics": {
                "dailyMainNetYuan": daily_net,
                "inflow15mYuan": inflow15 if m15_ready else None,
                "inflow30mYuan": inflow30 if m30_ready else None,
                "openingChangePct": opening.get("openingChangePct"),
            },
        }
        selected.append(candidate)
    selected.sort(key=lambda item: (item["shortlist"]["score"], _int(item.get("mainNetYuan"))), reverse=True)
    for rank, item in enumerate(selected[:SHORTLIST_LIMIT], start=1):
        item["shortlist"]["rank"] = rank
    return selected[:SHORTLIST_LIMIT]


def _sort_value(row: dict[str, Any], period: str, window: str, sort: str) -> float:
    if sort == "score":
        return float(_number((row.get("shortlist") or {}).get("score")) or 0)
    if sort == "daily_inflow":
        return float(_number(row.get("mainNetYuan")) or 0)
    if sort == "daily_intensity":
        return float(_number(row.get("mainNetPct")) or 0)
    if period in {str(item) for item in SWING_WINDOWS}:
        metric = (row.get("periods") or {}).get(period) or {}
        return float(_number(metric.get("periodMainNetYuan")) or 0)
    metric = (row.get("intraday") or {}).get(window) or {}
    mapping = {
        "inflow": metric.get("deltaMainNetYuan"),
        "velocity": metric.get("velocityYuanPerMinute"),
        "acceleration": metric.get("accelerationYuanPerMinute"),
        "intensity": metric.get("intensityPct"),
        "change": row.get("changePct"),
    }
    return float(_number(mapping.get(sort)) or 0)


def build_theme_strength(rows: list[dict[str, Any]], window: str = "30") -> dict[str, Any]:
    # The radar is a technology-theme view, not a fallback view of the whole
    # market. Seed every board from the curated pool first, then overlay the
    # latest snapshot. This keeps constituents visible even when a stock did
    # not make the current market ranking response.
    window = window if window in INTRADAY_WINDOW_KEYS else "30"
    window_value: int | str = window if window == "day" else int(window)
    pool_items = _theme_pool_items()
    live_by_code = {str(row.get("code") or ""): row for row in rows if row.get("code")}
    grouped: dict[str, dict[str, Any]] = {}

    for item in pool_items:
        theme = str(item.get("theme") or "").strip()
        code = str(item.get("code") or "").strip()
        if not theme or not code:
            continue
        board = grouped.setdefault(
            theme,
            {
                "name": theme,
                "mainNetYuan": 0,
                "windowMinutes": window_value,
                "windowNetYuan": 0,
                "windowReadyCount": 0,
                "inflow30mYuan": 0,
                "inflow30mReadyCount": 0,
                "averageChangePct": 0,
                "stockCount": 0,
                "liveStockCount": 0,
                "branches": {},
                "stocks": [],
            },
        )
        live = live_by_code.get(code)
        window_metric = (live or {}).get("intraday", {}).get(window, {}) if live else {}
        window_ready = bool(window_metric.get("ready"))
        window_net = _int(window_metric.get("deltaMainNetYuan")) if live and window_ready else 0
        m30 = (live or {}).get("intraday", {}).get("30", {}) if live else {}
        m30_ready = bool(m30.get("ready"))
        main = _int((live or {}).get("mainNetYuan")) if live else 0
        inflow30 = _int(m30.get("deltaMainNetYuan")) if live and m30_ready else 0
        change = _number((live or {}).get("changePct")) if live else None
        branch = str(item.get("branch") or item.get("sector") or theme).strip()
        branch_data = board["branches"].setdefault(
            branch,
            {
                "name": branch,
                "mainNetYuan": 0,
                "windowNetYuan": 0,
                "windowReadyCount": 0,
                "stockCount": 0,
                "liveStockCount": 0,
            },
        )
        board["stockCount"] += 1
        branch_data["stockCount"] += 1
        if live:
            board["liveStockCount"] += 1
            board["mainNetYuan"] += main
            if window_ready:
                board["windowNetYuan"] += window_net
                board["windowReadyCount"] += 1
            if m30_ready:
                board["inflow30mYuan"] += inflow30
                board["inflow30mReadyCount"] += 1
            board["averageChangePct"] += float(change or 0)
            branch_data["liveStockCount"] += 1
            branch_data["mainNetYuan"] += main
            if window_ready:
                branch_data["windowNetYuan"] += window_net
                branch_data["windowReadyCount"] += 1
        board["stocks"].append(
            {
                "code": code,
                "name": str(item.get("name") or (live or {}).get("name") or code),
                "sector": str(item.get("sector") or (live or {}).get("sector") or theme),
                "branch": branch,
                "mainNetYuan": main,
                "windowNetYuan": window_net if window_ready else None,
                "inflow30mYuan": inflow30,
                "changePct": change,
                "dataState": "实时快照" if live else "等待快照",
                "hasSnapshot": bool(live),
            }
        )

    boards = []
    for board in grouped.values():
        live_count = int(board["liveStockCount"])
        board["averageChangePct"] = round(float(board["averageChangePct"]) / live_count, 2) if live_count else None
        if not int(board["windowReadyCount"]):
            board["windowNetYuan"] = None
        if not int(board["inflow30mReadyCount"]):
            board["inflow30mYuan"] = None
        for branch in board["branches"].values():
            if not int(branch["windowReadyCount"]):
                branch["windowNetYuan"] = None
        board["branches"] = sorted(
            board["branches"].values(),
            key=lambda item: (
                item.get("windowNetYuan") is not None,
                _int(item.get("windowNetYuan")),
                _int(item.get("mainNetYuan")),
            ),
            reverse=True,
        )
        board["stocks"].sort(
            key=lambda item: (bool(item.get("hasSnapshot")), _int(item.get("mainNetYuan")), float(_number(item.get("changePct")) or -999)),
            reverse=True,
        )
        # Keep both names for old clients and the current UI. `stocks` is the
        # complete constituent list; `topStocks` is the compact first page.
        board["topStocks"] = board["stocks"][:10]
        active_flow = board["windowNetYuan"] if board["windowNetYuan"] is not None else board["mainNetYuan"]
        board["strengthScore"] = round(
            float(_number(active_flow) or 0) / 20_000_000
            + float(board["averageChangePct"] or 0),
            2,
        )
        boards.append(board)
    boards.sort(key=lambda item: (item["strengthScore"], item["liveStockCount"], item["stockCount"]), reverse=True)
    return {
        "boards": boards,
        "totalThemes": len(boards),
        "windowMinutes": window_value,
        "source": "tech-theme-pool",
    }


def _stock_detail(db: sqlite3.Connection, code: str, trading_date: str, slot: str = "") -> dict[str, Any]:
    ticks = [
        {
            "time": str(row["slot"]),
            "last": row["last"],
            "changePct": row["change_pct"],
            "mainNetYuan": _int(row["main_net_yuan"]),
            "turnoverYuan": _int(row["turnover_yuan"]),
        }
        for row in db.execute(
            """
            SELECT slot, last, change_pct, main_net_yuan, turnover_yuan
            FROM stock_flow_ticks
            WHERE trading_date = ? AND code = ?
            ORDER BY trading_index
            """,
            (trading_date, code),
        ).fetchall()
    ]
    daily_rows = db.execute(
        """
        WITH latest_ticks AS (
            SELECT
                trading_date, trading_index, last, change_pct, main_net_yuan, turnover_yuan,
                ROW_NUMBER() OVER (
                    PARTITION BY trading_date
                    ORDER BY trading_index DESC, slot DESC
                ) AS row_number
            FROM stock_flow_ticks
            WHERE code = :code
        ),
        daily_history AS (
            SELECT
                trading_date, main_net_yuan, main_net_pct, close, change_pct, provider,
                ROW_NUMBER() OVER (
                    PARTITION BY trading_date
                    ORDER BY CASE WHEN provider = :provider THEN 0 ELSE 1 END, updated_at DESC
                ) AS row_number
            FROM stock_flow_daily
            WHERE code = :code
        ),
        available_dates AS (
            SELECT trading_date FROM latest_ticks WHERE row_number = 1
            UNION
            SELECT trading_date FROM daily_history WHERE row_number = 1
        )
        SELECT
            dates.trading_date,
            CASE
                WHEN ticks.trading_date = :trading_date
                    OR ticks.trading_index >= 235
                    OR history.trading_date IS NULL
                THEN COALESCE(ticks.main_net_yuan, history.main_net_yuan, 0)
                ELSE COALESCE(history.main_net_yuan, ticks.main_net_yuan, 0)
            END AS main_net_yuan,
            history.main_net_pct,
            CASE
                WHEN ticks.trading_date = :trading_date OR ticks.trading_index >= 235 OR history.trading_date IS NULL
                THEN COALESCE(ticks.last, history.close)
                ELSE COALESCE(history.close, ticks.last)
            END AS close,
            CASE
                WHEN ticks.trading_date = :trading_date OR ticks.trading_index >= 235 OR history.trading_date IS NULL
                THEN COALESCE(ticks.change_pct, history.change_pct)
                ELSE COALESCE(history.change_pct, ticks.change_pct)
            END AS change_pct,
            CASE
                WHEN ticks.trading_date = :trading_date OR ticks.trading_index >= 235
                THEN NULLIF(ticks.turnover_yuan, 0)
                ELSE NULL
            END AS turnover_yuan,
            CASE
                WHEN ticks.trading_date = :trading_date OR ticks.trading_index >= 235 OR history.trading_date IS NULL
                THEN 'EastMoney intraday snapshot'
                ELSE history.provider
            END AS provider,
            CASE WHEN ticks.trading_date = :trading_date THEN 1 ELSE 0 END AS live,
            CASE
                WHEN ticks.trading_date = :trading_date OR ticks.trading_index >= 235 OR history.trading_date IS NULL
                THEN 1 ELSE 0
            END AS snapshot_available
        FROM available_dates AS dates
        LEFT JOIN latest_ticks AS ticks
            ON ticks.trading_date = dates.trading_date AND ticks.row_number = 1
        LEFT JOIN daily_history AS history
            ON history.trading_date = dates.trading_date AND history.row_number = 1
        ORDER BY dates.trading_date DESC
        LIMIT 21
        """,
        {"code": code, "provider": DAILY_FLOW_PROVIDER, "trading_date": trading_date},
    ).fetchall()
    daily = []
    for row in daily_rows:
        turnover = _number(row["turnover_yuan"])
        daily.append(
            {
                "date": str(row["trading_date"]),
                "mainNetYuan": _int(row["main_net_yuan"]),
                "mainNetPct": row["main_net_pct"],
                "turnoverYuan": int(round(turnover)) if turnover and turnover > 0 else None,
                "close": row["close"],
                "changePct": row["change_pct"],
                "provider": row["provider"],
                "live": bool(row["live"]),
                "snapshotAvailable": bool(row["snapshot_available"]),
            }
        )
    return {
        "code": code,
        "slot": slot,
        "intraday": ticks,
        "daily": daily,
        "dailySource": "EastMoney",
        "dailyCoverage": len(daily),
        "turnoverCoverage": sum(1 for item in daily if item["turnoverYuan"] is not None),
    }


def benefit_market_context(*, path: Path = DB_PATH) -> dict[str, Any]:
    """Return the latest compact market-confirmation context for the overview rail."""
    lookup = theme_lookup()
    with _connect(path) as db:
        run = db.execute(
            """
            SELECT * FROM stock_flow_runs
            ORDER BY trading_date DESC, trading_index DESC, slot DESC
            LIMIT 1
            """
        ).fetchone()
        if run is None:
            return {
                "version": 1,
                "state": "empty",
                "provider": DAILY_FLOW_PROVIDER,
                "updatedAt": datetime.now(CHINA_TZ).isoformat(timespec="seconds"),
                "tradingDate": "",
                "slot": "",
                "quoteAt": "",
                "themes": [],
                "stocks": [],
            }

        trading_date = str(run["trading_date"] or "")
        slot = str(run["slot"] or "")
        run_index = int(run["trading_index"] or 0)
        raw_rows = db.execute(
            """
            SELECT * FROM stock_flow_selected
            WHERE trading_date = ? AND slot = ?
            ORDER BY code
            """,
            (trading_date, slot),
        ).fetchall()
        rows = [_row_from_selected(row, lookup) for row in raw_rows]
        for row in rows:
            intraday = row.get("intraday") or {}
            if "30" not in intraday:
                row["intraday"] = build_intraday_metrics(db, trading_date, run_index, row)
            if not row.get("intradayProfile"):
                row["intradayProfile"] = build_intraday_profile(db, trading_date, run_index, row)

        theme_strength = build_theme_strength(rows, "30")

    stocks = []
    for row in rows:
        m30 = (row.get("intraday") or {}).get("30") or {}
        profile = row.get("intradayProfile") or {}
        stocks.append(
            {
                "code": str(row.get("code") or ""),
                "name": str(row.get("name") or row.get("code") or ""),
                "sector": str(row.get("sector") or ""),
                "theme": str(row.get("theme") or ""),
                "branch": str(row.get("branch") or ""),
                "role": str(row.get("role") or ""),
                "priority": str(row.get("priority") or ""),
                "changePct": row.get("changePct"),
                "turnoverYuan": _int(row.get("turnoverYuan")),
                "mainNetYuan": _int(row.get("mainNetYuan")),
                "mainNetPct": row.get("mainNetPct"),
                "inflow30mYuan": _int(m30.get("deltaMainNetYuan")) if m30.get("ready") else None,
                "priceChange30mPct": m30.get("priceChangePct") if m30.get("ready") else None,
                "positiveIntervalRatioPct": profile.get("positiveIntervalRatioPct") if profile.get("ready") else None,
                "dataState": "实时快照",
            }
        )

    themes = []
    for board in theme_strength.get("boards", []):
        live_stocks = [item for item in board.get("stocks", []) if item.get("hasSnapshot")]
        live_stocks.sort(
            key=lambda item: (
                _int(item.get("windowNetYuan")),
                _int(item.get("mainNetYuan")),
                float(_number(item.get("changePct")) or -999),
            ),
            reverse=True,
        )
        themes.append(
            {
                "name": str(board.get("name") or ""),
                "mainNetYuan": _int(board.get("mainNetYuan")),
                "windowNetYuan": board.get("windowNetYuan"),
                "inflow30mYuan": board.get("inflow30mYuan"),
                "averageChangePct": board.get("averageChangePct"),
                "stockCount": int(board.get("stockCount") or 0),
                "liveStockCount": int(board.get("liveStockCount") or 0),
                "strengthScore": board.get("strengthScore"),
                "topStocks": [
                    {
                        "code": str(item.get("code") or ""),
                        "name": str(item.get("name") or item.get("code") or ""),
                        "branch": str(item.get("branch") or ""),
                        "mainNetYuan": _int(item.get("mainNetYuan")),
                        "inflow30mYuan": item.get("inflow30mYuan"),
                        "changePct": item.get("changePct"),
                        "dataState": str(item.get("dataState") or ""),
                    }
                    for item in live_stocks[:5]
                ],
            }
        )

    return {
        "version": 1,
        "state": "ready" if stocks else "empty",
        "provider": DAILY_FLOW_PROVIDER,
        "updatedAt": datetime.now(CHINA_TZ).isoformat(timespec="seconds"),
        "tradingDate": trading_date,
        "slot": slot,
        "quoteAt": str(_row_value(run, "quote_at", "") or ""),
        "themes": themes,
        "stocks": stocks,
        "coverage": {
            "selectedCount": len(stocks),
            "themeCount": len(themes),
        },
    }


def dashboard_payload(*, path: Path = DB_PATH, params: dict[str, list[str]] | None = None) -> dict[str, Any]:
    scope = _first(params, "scope", "shortlist")
    window = _first(params, "window", "1")
    period = _first(params, "period", "intraday")
    sort = _first(params, "sort", "velocity" if period == "intraday" else "inflow")
    direction = _first(params, "direction", "desc")
    search = _first(params, "q", "").lower()
    branch_filter = _first(params, "branch", "").lower()
    selected_code = _first(params, "code", "")
    requested_date = _first(params, "date", "")
    requested_slot = _first(params, "slot", "")
    if window not in INTRADAY_WINDOW_KEYS:
        window = "1"
    if period not in {"intraday", *[str(item) for item in SWING_WINDOWS]}:
        period = "intraday"
    if scope not in {"shortlist", "watchlist", "dynamic", "all"}:
        scope = "shortlist"

    lookup = theme_lookup()
    with _connect(path) as db:
        days = [
            {
                "date": str(row["trading_date"]),
                "snapshotCount": int(row["snapshot_count"] or 0),
                "firstSlot": str(row["first_slot"] or ""),
                "latestSlot": str(row["latest_slot"] or ""),
            }
            for row in db.execute(
                """
                SELECT trading_date, COUNT(*) AS snapshot_count, MIN(slot) AS first_slot, MAX(slot) AS latest_slot
                FROM stock_flow_runs GROUP BY trading_date ORDER BY trading_date DESC LIMIT 30
                """
            ).fetchall()
        ]
        trading_date = requested_date or (days[0]["date"] if days else datetime.now(CHINA_TZ).strftime("%Y-%m-%d"))
        slots = [
            str(row[0])
            for row in db.execute(
                "SELECT slot FROM stock_flow_runs WHERE trading_date = ? ORDER BY trading_index",
                (trading_date,),
            ).fetchall()
        ]
        slot = requested_slot if requested_slot in slots else (slots[-1] if slots else "")
        run = db.execute(
            "SELECT * FROM stock_flow_runs WHERE trading_date = ? AND slot = ?",
            (trading_date, slot),
        ).fetchone() if slot else None
        raw_rows = db.execute(
            "SELECT * FROM stock_flow_selected WHERE trading_date = ? AND slot = ? ORDER BY code",
            (trading_date, slot),
        ).fetchall() if run else []
        rows = [_row_from_selected(row, lookup) for row in raw_rows]
        run_index = int(run["trading_index"] or 0) if run else 0
        for row in rows:
            if any(key not in (row.get("intraday") or {}) for key in INTRADAY_WINDOW_KEYS):
                row["intraday"] = build_intraday_metrics(db, trading_date, run_index, row)
            row["periods"] = row.get("periods") or build_swing_metrics(db, row, trading_date)
            row["asofPeriods"] = row.get("asofPeriods") or build_asof_swing_metrics(db, trading_date, row)
            row["opening"] = row.get("opening") or build_opening_metrics(db, trading_date, run_index, row)
            row["intradayProfile"] = row.get("intradayProfile") or build_intraday_profile(db, trading_date, run_index, row)
        theme_strength = build_theme_strength(rows, window)
        shortlist_rows = build_shortlist(rows)
        history_ready_by_period = {
            str(window): sum(
                1
                for row in rows
                if bool(((row.get("periods") or {}).get(str(window)) or {}).get("complete"))
            )
            for window in SWING_WINDOWS
        }
        shortlist_history_ready_by_period = {
            str(window): sum(
                1
                for row in shortlist_rows
                if bool(((row.get("periods") or {}).get(str(window)) or {}).get("complete"))
            )
            for window in SWING_WINDOWS
        }
        display_rows = rows
        if scope == "shortlist":
            display_rows = shortlist_rows
        elif scope == "watchlist":
            display_rows = [row for row in rows if row.get("isWatchlist")]
        elif scope == "dynamic":
            display_rows = [row for row in rows if not row.get("isWatchlist")]
        if branch_filter:
            display_rows = [
                row for row in display_rows
                if str(row.get("branch") or "").lower() == branch_filter
            ]
        if search:
            theme_names = {
                str(item.get("theme") or "").strip().lower()
                for item in _theme_pool_items()
                if item.get("theme")
            }
            if search in theme_names:
                # Clicking a radar board must select that board exactly. A
                # stock may belong to more than one curated technology theme,
                # so membership must come from the pool instead of the row's
                # single display label.
                member_codes = theme_member_codes(search)
                display_rows = [row for row in display_rows if str(row.get("code") or "") in member_codes]
            else:
                display_rows = [
                    row for row in display_rows
                    if search in str(row.get("code", "")).lower()
                    or search in str(row.get("name", "")).lower()
                    or search in str(row.get("sector", "")).lower()
                    or search in str(row.get("theme", "")).lower()
                    or search in str(row.get("branch", "")).lower()
                ]
        display_rows.sort(key=lambda item: _sort_value(item, period, window, sort), reverse=(direction != "asc"))
        for display_rank, item in enumerate(display_rows, start=1):
            item["rank"] = display_rank
        selected = selected_code or (display_rows[0]["code"] if display_rows else "")
        detail = _stock_detail(db, selected, trading_date, slot) if selected else {}

    return {
        "version": 2,
        "state": "ready" if slot else "empty",
        "provider": DAILY_FLOW_PROVIDER,
        "updatedAt": datetime.now(CHINA_TZ).isoformat(timespec="seconds"),
        "quoteAt": str(_row_value(run, "quote_at", "") or "") if run else "",
        "tradingDate": trading_date,
        "slot": slot,
        "availableDays": days,
        "availableSlots": slots,
        "scope": scope,
        "window": window,
        "period": period,
        "sort": sort,
        "direction": direction,
        "rows": display_rows[:120],
        "shortlist": shortlist_rows,
        "themeStrength": theme_strength,
        "detail": detail,
        "coverage": {
            "marketTotal": int(_row_value(run, "market_total", 0) or 0) if run else 0,
            "rawCount": int(_row_value(run, "raw_count", len(rows)) or len(rows)) if run else len(rows),
            "rankScreenCount": int(_row_value(run, "rank_screen_count", 0) or 0) if run else 0,
            "candidateCount": int(_row_value(run, "candidate_count", len(rows)) or len(rows)) if run else len(rows),
            "selectedCount": len(rows),
            "visibleCount": len(display_rows),
            "historyUniverseCount": len(rows),
            "historyReadyCount": history_ready_by_period.get(str(max(SWING_WINDOWS)), 0),
            "historyReadyByPeriod": history_ready_by_period,
            "themePoolCount": len(_theme_pool_items()),
            "manualPoolCount": len(load_watchlist(MANUAL_POOL_PATH)),
            "shortlistCount": len(shortlist_rows),
            "shortlistUniverseCount": len(shortlist_rows),
            "shortlistHistoryUniverseCount": len(shortlist_rows),
            "shortlistHistoryReadyByPeriod": shortlist_history_ready_by_period,
        },
        "methodology": "东方财富资金流历史库 + 科技题材池自动映射；手动加入只补代码，不覆盖题材池名称和产业链分支。",
        "errors": [],
    }


def _insert_ticks(
    db: sqlite3.Connection,
    rows: list[dict[str, Any]],
    trading_date: str,
    slot: str,
    index: int,
    quote_at: str,
) -> None:
    db.executemany(
        """
        INSERT OR REPLACE INTO stock_flow_ticks(
            trading_date, slot, trading_index, quote_at, code, name, last, change_pct,
            turnover_yuan, main_net_yuan, super_large_net_yuan, large_net_yuan,
            medium_net_yuan, small_net_yuan
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """,
        [
            (
                trading_date, slot, index, quote_at, row["code"], row.get("name"), row.get("last"),
                row.get("changePct"), _int(row.get("turnoverYuan")), _int(row.get("mainNetYuan")),
                _int(row.get("superLargeNetYuan")), _int(row.get("largeNetYuan")),
                _int(row.get("mediumNetYuan")), _int(row.get("smallNetYuan")),
            )
            for row in rows
        ],
    )


def _persist_candidate_events(*args: Any, **kwargs: Any) -> None:
    return None


def _table_columns(db: sqlite3.Connection, table: str) -> set[str]:
    return {str(row[1]) for row in db.execute(f"PRAGMA table_info({table})").fetchall()}


def _insert_or_replace(db: sqlite3.Connection, table: str, values: dict[str, Any]) -> None:
    allowed = _table_columns(db, table)
    values = {key: value for key, value in values.items() if key in allowed}
    columns = list(values)
    marks = ",".join("?" for _ in columns)
    db.execute(
        f"INSERT OR REPLACE INTO {table} ({','.join(columns)}) VALUES ({marks})",
        [values[column] for column in columns],
    )


def _collect_rank_rows(fetch_text: TextFetcher) -> tuple[list[dict[str, Any]], int]:
    jobs = {
        "inflow": rank_url("f62", "1", 120),
        "outflow": rank_url("f62", "0", 120),
    }
    batches: list[list[dict[str, Any]]] = []
    totals: list[int] = []
    with ThreadPoolExecutor(max_workers=2) as executor:
        futures = {executor.submit(fetch_text, url): tag for tag, url in jobs.items()}
        for future in as_completed(futures):
            tag = futures[future]
            text = future.result()
            rows, total = parse_stock_rows(text, tag, tag)
            batches.append(rows)
            totals.append(total)
    merged: dict[str, dict[str, Any]] = {}
    for batch in batches:
        for row in batch:
            merged[str(row["code"])] = row
    return list(merged.values()), max(totals or [0])


def _collect_forced_rows(fetch_text: TextFetcher, forced: list[dict[str, Any]]) -> list[dict[str, Any]]:
    codes = list(dict.fromkeys(str(item.get("code") or "") for item in forced if item.get("code")))
    rows: list[dict[str, Any]] = []
    for start in range(0, len(codes), 80):
        batch = codes[start:start + 80]
        if not batch:
            continue
        parsed, _ = parse_stock_rows(
            fetch_text(quote_url(batch)),
            "watchlist",
            "watchlist",
            quote_value_scale=100,
        )
        rows.extend(parsed)
    return rows


def collect_and_store(
    *,
    path: Path = DB_PATH,
    watchlist_path: Path = WATCHLIST_PATH,
    now: datetime | None = None,
    fetch_text: TextFetcher = _request_text,
    history_budget: int = 0,
) -> dict[str, Any]:
    captured_at = (now or datetime.now(CHINA_TZ)).astimezone(CHINA_TZ)
    if captured_at.hour > 15 or (captured_at.hour == 15 and captured_at.minute > 0):
        slot = "15:00"
    else:
        slot = captured_at.strftime("%H:%M")
    trading_date = captured_at.strftime("%Y-%m-%d")
    trading_index = trading_minute_index(slot)
    if trading_index is None:
        return dashboard_payload(path=path, params={"scope": ["all"]})

    forced = load_forced_stock_pool(watchlist_path=watchlist_path)
    lookup = theme_lookup()
    ranked_rows, market_total = _collect_rank_rows(fetch_text)
    forced_rows = _collect_forced_rows(fetch_text, forced)
    by_code: dict[str, dict[str, Any]] = {str(row["code"]): row for row in ranked_rows}
    for row in forced_rows:
        by_code[str(row["code"])] = row
    forced_codes = {str(item.get("code") or "") for item in forced}
    rows = list(by_code.values())
    rows.sort(key=lambda item: (str(item.get("code")) not in forced_codes, -abs(_int(item.get("mainNetYuan")))))
    rows = [_annotate_row(dict(row), lookup) for row in rows[:240]]
    quote_at = captured_at.isoformat(timespec="seconds")
    captured_iso = captured_at.isoformat(timespec="seconds")

    with _connect(path) as db:
        previous = {
            str(row["code"]): row
            for row in db.execute(
                "SELECT * FROM stock_flow_selected WHERE trading_date = ? ORDER BY trading_index DESC",
                (trading_date,),
            ).fetchall()
        }
        _insert_or_replace(
            db,
            "stock_flow_runs",
            {
                "trading_date": trading_date,
                "slot": slot,
                "trading_index": trading_index,
                "quote_at": quote_at,
                "captured_at": captured_iso,
                "provider": DAILY_FLOW_PROVIDER,
                "state": "ready",
                "market_total": market_total,
                "rank_screen_count": len(ranked_rows),
                "candidate_count": len(rows),
                "selected_count": len(rows),
                "history_ready_count": 0,
                "errors_json": "[]",
            },
        )
        for row in rows:
            code = str(row["code"])
            _insert_or_replace(
                db,
                "stock_flow_ticks",
                {
                    "trading_date": trading_date,
                    "slot": slot,
                    "trading_index": trading_index,
                    "quote_at": quote_at,
                    "code": code,
                    "name": row.get("name"),
                    "last": row.get("last"),
                    "change_pct": row.get("changePct"),
                    "turnover_yuan": _int(row.get("turnoverYuan")),
                    "turnover_rate": row.get("turnoverRate"),
                    "total_market_cap_yuan": _int(row.get("totalMarketCapYuan")),
                    "float_market_cap_yuan": _int(row.get("floatMarketCapYuan")),
                    "main_net_yuan": _int(row.get("mainNetYuan")),
                    "main_net_pct": row.get("mainNetPct"),
                    "super_large_net_yuan": _int(row.get("superLargeNetYuan")),
                    "large_net_yuan": _int(row.get("largeNetYuan")),
                    "medium_net_yuan": _int(row.get("mediumNetYuan")),
                    "small_net_yuan": _int(row.get("smallNetYuan")),
                    "source_tags_json": json.dumps(row.get("sourceTags") or [], ensure_ascii=False),
                },
            )

        for row in rows:
            code = str(row["code"])
            row["intraday"] = build_intraday_metrics(db, trading_date, trading_index, row)
            row["periods"] = build_swing_metrics(db, row, trading_date)
            row["asofPeriods"] = build_asof_swing_metrics(db, trading_date, row)
            row["opening"] = build_opening_metrics(db, trading_date, trading_index, row)
            row["intradayProfile"] = build_intraday_profile(db, trading_date, trading_index, row)
            row["selectionReasons"] = ["核心自选"] if code in forced_codes else ["东方财富资金流排名"]

        shortlist_by_code = {str(item["code"]): item.get("shortlist") or {} for item in build_shortlist(rows)}
        for row in rows:
            code = str(row["code"])
            row["shortlist"] = shortlist_by_code.get(code, {"eligible": False, "score": 0, "tier": "ineligible"})
            _insert_or_replace(
                db,
                "stock_flow_selected",
                {
                    "trading_date": trading_date,
                    "slot": slot,
                    "trading_index": trading_index,
                    "quote_at": quote_at,
                    "code": code,
                    "name": row.get("name"),
                    "sector": row.get("sector"),
                    "priority": row.get("priority"),
                    "is_watchlist": int(code in forced_codes),
                    "last": row.get("last"),
                    "change_pct": row.get("changePct"),
                    "turnover_yuan": _int(row.get("turnoverYuan")),
                    "turnover_rate": row.get("turnoverRate"),
                    "total_market_cap_yuan": _int(row.get("totalMarketCapYuan")),
                    "float_market_cap_yuan": _int(row.get("floatMarketCapYuan")),
                    "main_net_yuan": _int(row.get("mainNetYuan")),
                    "main_net_pct": row.get("mainNetPct"),
                    "super_large_net_yuan": _int(row.get("superLargeNetYuan")),
                    "large_net_yuan": _int(row.get("largeNetYuan")),
                    "medium_net_yuan": _int(row.get("mediumNetYuan")),
                    "small_net_yuan": _int(row.get("smallNetYuan")),
                    "source_tags_json": json.dumps(row.get("sourceTags") or [], ensure_ascii=False),
                    "selection_reasons_json": json.dumps(row.get("selectionReasons") or [], ensure_ascii=False),
                    "metrics_json": json.dumps(
                        {key: row.get(key) for key in ("intraday", "periods", "asofPeriods", "opening", "intradayProfile", "shortlist")},
                        ensure_ascii=False,
                    ),
                },
            )
        db.commit()

    return dashboard_payload(path=path, params={"scope": ["all"], "date": [trading_date], "slot": [slot]})


def refresh_daily_histories(
    codes: list[str],
    *,
    path: Path = DB_PATH,
    fetch_text: TextFetcher = _request_text,
    max_workers: int = 6,
) -> dict[str, Any]:
    requested_codes = list(dict.fromkeys(str(code).strip() for code in codes if str(code).strip()))
    fetched: list[tuple[str, str, list[dict[str, Any]]]] = []
    errors: list[dict[str, str]] = []

    def fetch_one(code: str) -> tuple[str, str, list[dict[str, Any]]]:
        parsed_code, name, rows = parse_daily_history(fetch_text(daily_flow_url(code)), code)
        if not rows:
            raise StockFundFlowError("daily history is empty")
        return parsed_code or code, name, rows

    worker_count = max(1, min(max_workers, len(requested_codes) or 1))
    with ThreadPoolExecutor(max_workers=worker_count) as executor:
        futures = {executor.submit(fetch_one, code): code for code in requested_codes}
        for future in as_completed(futures):
            code = futures[future]
            try:
                fetched.append(future.result())
            except Exception as error:
                errors.append({"code": code, "error": str(error)})

    updated_rows = 0
    updated_codes: list[str] = []
    updated_at = datetime.now(CHINA_TZ).isoformat(timespec="seconds")
    db = _connect(path)
    try:
        for code, name, rows in fetched:
            for row in rows:
                _insert_or_replace(
                    db,
                    "stock_flow_daily",
                    {
                        "code": code,
                        "trading_date": row.get("date"),
                        "name": name,
                        "main_net_yuan": _int(row.get("mainNetYuan")),
                        "main_net_pct": row.get("mainNetPct"),
                        "close": row.get("close"),
                        "change_pct": row.get("changePct"),
                        "provider": DAILY_FLOW_PROVIDER,
                        "updated_at": updated_at,
                    },
                )
                updated_rows += 1
            updated_codes.append(code)
        if updated_codes:
            placeholders = ",".join("?" for _ in updated_codes)
            db.execute(
                f"UPDATE stock_flow_selected SET metrics_json = '{{}}' WHERE code IN ({placeholders})",
                updated_codes,
            )
        db.commit()
    finally:
        db.close()

    return {
        "requested": len(requested_codes),
        "updated": len(updated_codes),
        "updatedRows": updated_rows,
        "failed": len(errors),
        "errors": errors[:10],
        "provider": DAILY_FLOW_PROVIDER,
    }


def refresh_missing_histories(
    *,
    path: Path = DB_PATH,
    budget: int = 48,
    fetch_text: TextFetcher = _request_text,
) -> dict[str, Any]:
    limit = max(1, min(int(budget or 48), 240))
    payload = dashboard_payload(path=path, params={"scope": ["all"]})
    priority_codes = [str(row.get("code") or "") for row in payload.get("shortlist") or []]
    all_codes = [str(row.get("code") or "") for row in payload.get("rows") or []]
    ordered_codes = list(dict.fromkeys(code for code in [*priority_codes, *all_codes] if code))

    db = _connect(path)
    try:
        counts = {
            str(row["code"]): int(row["history_count"] or 0)
            for row in db.execute(
                """
                SELECT code, COUNT(DISTINCT trading_date) AS history_count
                FROM stock_flow_daily
                WHERE provider = ?
                GROUP BY code
                """,
                (DAILY_FLOW_PROVIDER,),
            ).fetchall()
        }
    finally:
        db.close()
    missing = [code for code in ordered_codes if counts.get(code, 0) < max(SWING_WINDOWS)]
    result = refresh_daily_histories(missing[:limit], path=path, fetch_text=fetch_text)
    result["remaining"] = max(0, len(missing) - result["updated"])
    return result


def validation_payload(*, path: Path = DB_PATH, params: dict[str, list[str]] | None = None) -> dict[str, Any]:
    return {"version": 1, "state": "ready", "currentBatch": {"count": 0, "items": []}, "history": {"summary": {}}}

