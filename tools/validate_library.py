from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
CODE_RE = re.compile(r"^\d{6}$")
PRIORITIES = {"high", "medium", "low"}


def read_json(name: str) -> dict:
    path = DATA / name
    with path.open(encoding="utf-8") as handle:
        value = json.load(handle)
    if not isinstance(value, dict):
        raise ValueError(f"{name}: 根节点必须是对象")
    return value


def check_stock(item: dict, location: str, seen: set[str]) -> None:
    code = str(item.get("code") or "")
    if not CODE_RE.fullmatch(code):
        raise ValueError(f"{location}: code 必须是 6 位数字")
    if code in seen:
        raise ValueError(f"{location}: code 重复 {code}")
    seen.add(code)
    if not str(item.get("name") or "").strip():
        raise ValueError(f"{location}: name 不能为空")
    if str(item.get("priority") or "medium") not in PRIORITIES:
        raise ValueError(f"{location}: priority 必须是 high/medium/low")


def main() -> None:
    watchlist = read_json("a_share_watchlist.json")
    watchlist_seen: set[str] = set()
    for index, item in enumerate(watchlist.get("items") or [], start=1):
        if not isinstance(item, dict):
            raise ValueError(f"a_share_watchlist.json: items[{index}] 必须是对象")
        check_stock(item, f"a_share_watchlist.json:items[{index}]", watchlist_seen)

    themes = read_json("a_share_theme_pool.json")
    theme_names: set[str] = set()
    theme_stock_count = 0
    for theme_index, theme in enumerate(themes.get("themes") or [], start=1):
        theme_name = str(theme.get("theme") or "").strip()
        if not theme_name or theme_name in theme_names:
            raise ValueError(f"a_share_theme_pool.json: themes[{theme_index}] 的 theme 缺失或重复")
        theme_names.add(theme_name)
        branch_names: set[str] = set()
        theme_codes: set[str] = set()
        for branch_index, branch in enumerate(theme.get("branches") or [], start=1):
            branch_name = str(branch.get("branch") or "").strip()
            if not branch_name or branch_name in branch_names:
                raise ValueError(f"{theme_name}: 分支缺失或重复 {branch_name or branch_index}")
            branch_names.add(branch_name)
            if not str(branch.get("role") or "").strip():
                raise ValueError(f"{theme_name}/{branch_name}: role 不能为空")
            for stock_index, stock in enumerate(branch.get("stocks") or [], start=1):
                if not isinstance(stock, dict):
                    raise ValueError(f"{theme_name}/{branch_name}: stocks[{stock_index}] 必须是对象")
                check_stock(stock, f"{theme_name}/{branch_name}:stocks[{stock_index}]", theme_codes)
                theme_stock_count += 1

    print(f"library ok: {len(theme_names)} themes, {theme_stock_count} theme memberships, {len(watchlist_seen)} watchlist stocks")


if __name__ == "__main__":
    main()

