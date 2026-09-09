from __future__ import annotations

import json
import mimetypes
import os
import threading
from datetime import datetime
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse
from zoneinfo import ZoneInfo

from connectors.stock_fund_flow import (
    DAILY_FLOW_PROVIDER,
    MANUAL_POOL_PATH,
    collect_and_store,
    dashboard_payload,
    refresh_daily_histories,
    refresh_missing_histories,
    validation_payload,
)

ROOT = Path(__file__).resolve().parent
DATA_DIR = ROOT / "data"
DB_PATH = DATA_DIR / "stock_fund_flow.db"
CHINA_TZ = ZoneInfo("Asia/Shanghai")
REFRESH_LOCK = threading.Lock()


def with_freshness(payload: dict) -> dict:
    today = datetime.now(CHINA_TZ).date().isoformat()
    data_date = str(payload.get("tradingDate") or "")
    payload["dataFreshness"] = {
        "tradingDate": data_date,
        "today": today,
        "isToday": data_date == today,
        "state": "ready" if data_date == today else "stale",
        "note": "今日数据已更新" if data_date == today else f"当前最新有效数据截至 {data_date or '上一交易日'}",
    }
    if data_date != today and payload.get("state") == "ready":
        payload["state"] = "stale"
    return payload


def read_body(handler: BaseHTTPRequestHandler) -> dict:
    length = int(handler.headers.get("Content-Length", "0") or 0)
    if length > 1_000_000:
        raise ValueError("request body too large")
    raw = handler.rfile.read(length) if length else b"{}"
    value = json.loads(raw.decode("utf-8"))
    return value if isinstance(value, dict) else {}


def add_manual_stock(payload: dict) -> dict:
    code = str(payload.get("code") or "").strip()
    if len(code) != 6 or not code.isdigit():
        raise ValueError("股票代码必须是6位数字")
    try:
        store = json.loads(MANUAL_POOL_PATH.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        store = {"updatedAt": "", "items": []}
    now = datetime.now(CHINA_TZ).isoformat(timespec="seconds")
    items = [item for item in store.get("items", []) if str(item.get("code") or "") != code]
    items.insert(0, {"code": code, "name": str(payload.get("name") or ""), "sector": str(payload.get("sector") or ""), "priority": "high", "source": "manual", "addedAt": now})
    MANUAL_POOL_PATH.parent.mkdir(parents=True, exist_ok=True)
    MANUAL_POOL_PATH.write_text(json.dumps({"updatedAt": now, "items": items[:300]}, ensure_ascii=False, indent=2), encoding="utf-8")
    return dashboard_payload(path=DB_PATH, params={"scope": ["all"], "q": [code]})


class Handler(BaseHTTPRequestHandler):
    server_version = "StockFlow/1.0"

    def log_message(self, format: str, *args: object) -> None:
        return

    def send_json(self, payload: dict, status: int = 200) -> None:
        body = json.dumps(payload, ensure_ascii=False, default=str).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        params = parse_qs(parsed.query)
        try:
            if parsed.path == "/api/stock-fund-flow":
                self.send_json(with_freshness(dashboard_payload(path=DB_PATH, params=params)))
                return
            if parsed.path == "/api/stock-fund-flow/validation":
                self.send_json(validation_payload(path=DB_PATH, params=params))
                return
            if parsed.path == "/api/health":
                self.send_json({"ok": True, "provider": DAILY_FLOW_PROVIDER})
                return
            self.send_static(parsed.path)
        except Exception as error:
            self.send_json({"error": str(error)}, 500)

    def do_POST(self) -> None:
        parsed = urlparse(self.path)
        try:
            body = read_body(self)
            if parsed.path == "/api/stock-fund-flow/refresh":
                with REFRESH_LOCK:
                    payload = collect_and_store(path=DB_PATH, history_budget=0)
                self.send_json(with_freshness({**payload, "refresh": {"ok": True, "message": "公开行情采样完成"}}))
                return
            if parsed.path == "/api/stock-fund-flow/history/refresh":
                codes = body.get("codes") if isinstance(body.get("codes"), list) else []
                result = refresh_daily_histories(codes, path=DB_PATH) if codes else refresh_missing_histories(path=DB_PATH, budget=int(body.get("budget", 48) or 48))
                self.send_json(result)
                return
            if parsed.path == "/api/stock-fund-flow/manual":
                payload = add_manual_stock(body)
                self.send_json(with_freshness(payload))
                return
            self.send_json({"error": "not found"}, 404)
        except Exception as error:
            self.send_json({"error": str(error)}, 500)

    def send_static(self, path: str) -> None:
        clean = "/index.html" if path in {"", "/"} else path
        target = (ROOT / clean.lstrip("/")).resolve()
        if ROOT not in target.parents and target != ROOT:
            self.send_json({"error": "not found"}, 404)
            return
        if not target.is_file():
            self.send_json({"error": "not found"}, 404)
            return
        body = target.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", mimetypes.guess_type(str(target))[0] or "application/octet-stream")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


if __name__ == "__main__":
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    port = int(os.environ.get("STOCK_FLOW_PORT", "4176"))
    print(f"Stock Flow open-source page: http://127.0.0.1:{port}/")
    ThreadingHTTPServer(("127.0.0.1", port), Handler).serve_forever()

