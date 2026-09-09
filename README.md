# 个股资金流速

这是 SignalDesk 中“个股资金流速”页面的独立开源版本：盘中采集公开资金流快照，计算分钟增量、短线流速、多日累计和候选后验验证，并提供股票明细回放。

## 快速开始

需要 Python 3.10+，只使用 Python 标准库。

```powershell
python server.py
```

打开 <http://127.0.0.1:4176/>，点击“立即采样”读取公开行情。数据会写入本地 `data/stock_fund_flow.db`，不会提交到 Git。

也可以用其他端口启动：

```powershell
$env:STOCK_FLOW_PORT=4177
python server.py
```

首次使用前，可编辑 `data/a_share_watchlist.json` 和 `data/a_share_theme_pool.json`，维护自选股与题材映射。页面只依赖东方财富公开接口，不需要 DeepSeek，也没有 DeepSeek 按钮或 API Key 配置。

其他人通过 GitHub Pull Request 增加公共个股和题材，规则见 [CONTRIBUTING.md](CONTRIBUTING.md)。本地页面的“手动加代码”只写入本机配置，不会修改公共库。

## API

- `GET /api/stock-fund-flow`：读取页面数据，支持 `scope`、`window`、`period`、`sort`、`date`、`slot`、`q`、`branch`、`code`
- `GET /api/stock-fund-flow/validation`：读取候选后验验证
- `POST /api/stock-fund-flow/refresh`：采集当前公开资金流快照
- `POST /api/stock-fund-flow/history/refresh`：补录日线历史
- `POST /api/stock-fund-flow/manual`：加入手动盯盘股票

## 数据与免责声明

运行数据保存在本机 `data/`，仅提交 JSON 配置和代码。公开行情接口可能限流、延迟或调整字段；页面展示的是数据事实和计算结果，不构成投资建议。
