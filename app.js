const fallbackConfig = {
  collector: { state: "offline", value: "本地接口未连接" },
  database: { state: "offline", value: "未连接" },
  xLocalBridge: { state: "waiting", value: "待加载本地桥接" },
  xCollector: { state: "offline", value: "静默采集未启动", running: false },
  bbBrowser: { state: "waiting", value: "待配置" },
  newsNow: { state: "offline", value: "未启动", running: false },
  xApi: { state: "offline", value: "暂不使用" },
  deepseek: { state: "waiting", value: "待配置" },
  push: { state: "offline", value: "未开启" },
  mode: "static-fallback",
};

const fallbackAccounts = [];

const fallbackPosts = [];

const fallbackReferences = [
  {
    name: "OpenBB-finance/OpenBB",
    stars: "69.6k",
    url: "https://github.com/OpenBB-finance/OpenBB",
    fit: "金融数据平台，适合借鉴研究工作流。",
  },
  {
    name: "shirosaidev/stocksight",
    stars: "2.5k",
    url: "https://github.com/shirosaidev/stocksight",
    fit: "Twitter、新闻、Elasticsearch、NLP 情绪分析，方向接近。",
  },
];

const fallbackAiIntel = {
  mode: "formal-public-sources",
  updatedAt: "",
  kpis: { items24h: 0, items7d: 0, projects: 0, sources: 0, sourcesActive: 0 },
  items: [],
  xAuthors: [],
  sources: [],
};

const aiTranslationCache = new Map();
const aiTranslationPending = new Map();
const aiXMonitorState = {
  items: [],
  tab: "posts",
  display: "table",
  workspace: "stream",
  sourceTab: "accounts",
  accountsExpanded: false,
  query: "",
  dateFrom: "",
  dateTo: "",
  sort: "heat",
  sortDirection: "desc",
  language: "all",
  authorFilter: "",
  authorQuery: "",
  dateInitialized: false,
  page: 1,
  pageSize: 20,
  selected: new Set(),
  detailId: "",
  archiveStatuses: new Map(),
  downloadJobs: [],
  archiveLoaded: false,
  archiveLoading: false,
  archivePollTimer: 0,
  archiveFilter: "all",
};

const fallbackKoreaMarket = {
  state: "waiting",
  value: "等待行情接口",
  provider: "Yahoo Finance",
  updatedAt: "",
  instruments: [],
};

const fallbackMemorySpot = {
  state: "waiting",
  provider: "加载中",
  updatedAt: "",
  note: "正在读取 DDR5 6000 C28 每日价格。",
  items: [],
};

const fallbackEastmoneyRank = {
  state: "waiting",
  count: 0,
  sourceUpdatedAt: "",
  capturedAt: "",
  intervalSeconds: 600,
  items: [],
};

const fallbackBenefitMarketContext = {
  state: "waiting",
  provider: "东方财富公开资金流向",
  updatedAt: "",
  tradingDate: "",
  slot: "",
  quoteAt: "",
  themes: [],
  stocks: [],
  dataFreshness: { state: "waiting", isToday: false, note: "等待行情确认" },
};

const fallbackTechEarnings = {
  state: "waiting",
  updatedAt: "",
  currency: "人民币",
  amountUnit: "亿元",
  percentUnit: "%",
  scope: "2026年上半年科技板块业绩预告/快报雷达",
  methodology: [],
  collection: {},
  items: [],
};

const fallbackIndexFutures = {
  state: "waiting",
  provider: "新浪财经公开期货行情",
  intervalMinutes: 30,
  updatedAt: "",
  methodology: {},
  schedule: {},
  days: [],
  latest: {},
};

const fallbackMarketPulse = {
  state: "waiting",
  provider: "同花顺公开行情；迷你纳指为备用网页报价",
  sourcePolicy: "A股与日韩台指数使用同花顺；迷你纳指保留同花顺NQ0W主连口径",
  updatedAt: "",
  count: 9,
  readyCount: 0,
  items: [],
  errors: [],
};

const fallbackUsTreasury = {
  state: "waiting",
  provider: "CNBC Quote Cache / Tradeweb",
  quoteMode: "连接中",
  updatedAt: "",
  count: 11,
  readyCount: 0,
  items: [
    ["US1M", "1M", 1],
    ["US3M", "3M", 3],
    ["US6M", "6M", 6],
    ["US1Y", "1Y", 12],
    ["US2Y", "2Y", 24],
    ["US3Y", "3Y", 36],
    ["US5Y", "5Y", 60],
    ["US7Y", "7Y", 84],
    ["US10Y", "10Y", 120],
    ["US20Y", "20Y", 240],
    ["US30Y", "30Y", 360],
  ].map(([symbol, tenor, months]) => ({ symbol, tenor, months, yield: null, status: "waiting" })),
  spreads: { twoTenBp: null, threeMonthTenBp: null },
  errors: [],
};

const fallbackAShareMarket = {
  state: "waiting",
  provider: "东方财富公开行情",
  sourcePolicy: "沪深京三市实时成交；昨同与预估锁定同一完成分钟；市场宽度剔除ST",
  updatedAt: "",
  quoteTime: "",
  turnover: { currentYuan: null, markets: [] },
  breadth: null,
  limits: { limitUpCount: null, limitDownCount: null, nonSt: true },
  errors: [],
};

const fallbackSectorFundFlow = {
  state: "waiting",
  provider: "东方财富公开行情",
  intervalSeconds: 30,
  timelineResolutionSeconds: 60,
  updatedAt: "",
  latestTradingDate: "",
  methodology: {
    boardFlow: "板块主力净额为公开行情事实值。",
    history: "系统只展示真实采样快照，未运行期间不插值、不补造。",
  },
  availableDays: [],
  days: [],
};

const fallbackStockFundFlow = {
  state: "waiting",
  provider: "东方财富资金流向（分钟快照 + 日线）",
  updatedAt: "",
  quoteAt: "",
  tradingDate: "",
  slot: "",
  availableDays: [],
  availableSlots: [],
  rows: [],
  detail: null,
  coverage: {
    marketTotal: 0,
    rankScreenCount: 0,
    candidateCount: 0,
    selectedCount: 0,
    historyReadyCount: 0,
    visibleCount: 0,
  },
  methodology: {},
  errors: [],
};

const fallbackEtfFlow = {
  state: "waiting",
  provider: "东方财富公开ETF行情",
  tradingDate: "",
  slot: "",
  updatedAt: "",
  availableDates: [],
  availableSlots: [],
  summary: {},
  groups: [],
  rows: [],
  timeline: [],
  detail: null,
  detailTimeline: [],
  peers: [],
  trend: {
    horizonDays: 21,
    mode: "all",
    sort: "score",
    coverage: { availableDays: 0, targetDays: 21, ratioPct: 0, complete: false, note: "等待首个快照" },
    rows: [],
    branches: [],
    stageSummary: [
      { key: "accumulation", label: "低位蓄力", count: 0, description: "位置偏低，量能和参与度正在改善" },
      { key: "launch", label: "趋势启动", count: 0, description: "接近阶段高点，趋势确认度提升" },
      { key: "main", label: "主升趋势", count: 0, description: "区间斜率向上，价格与广度同步" },
      { key: "risk", label: "高位风险", count: 0, description: "高位放量或趋势转弱，需要控制回撤" },
    ],
    detail: null,
    detailHistory: [],
    methodology: {},
  },
  methodology: {},
};

const state = {
  apiAvailable: false,
  config: fallbackConfig,
  accounts: fallbackAccounts,
  posts: fallbackPosts,
  mapPosts: fallbackPosts,
  references: fallbackReferences,
  aiIntel: fallbackAiIntel,
  koreaMarket: fallbackKoreaMarket,
  memorySpot: fallbackMemorySpot,
  eastmoneyRank: fallbackEastmoneyRank,
  benefitMarketContext: fallbackBenefitMarketContext,
  techEarnings: fallbackTechEarnings,
  indexFutures: fallbackIndexFutures,
  marketPulse: fallbackMarketPulse,
  usTreasury: fallbackUsTreasury,
  usTreasuryDaily: { state: "waiting", historyBySymbol: {}, errors: [] },
  usTreasuryIntraday: { state: "waiting", historyBySymbol: {}, errors: [] },
  aShareMarket: fallbackAShareMarket,
  sectorFundFlow: fallbackSectorFundFlow,
  stockFundFlow: fallbackStockFundFlow,
  etfFlow: fallbackEtfFlow,
  koreaActive: "^KS11",
  koreaMode: "intraday",
  aShareWindowHours: 24,
  aShareMapLoading: false,
  benefitStatusFilter: "confirmed",
  account: "all",
  sourceView: "active",
  filter: "all",
  query: "",
  mobileView: "feed",
  workspaceView: "overview",
  navSection: "overview",
  aiSection: "dashboard",
  earningsRank: "q2NetProfitQoQ",
  earningsFilter: "all",
  earningsTableSort: "q2NetProfitQoQ",
  earningsTableSortDirection: "desc",
  earningsTableMin: "",
  earningsTableMax: "",
  selectedEarningsCode: "",
  selectedFuturesDate: "",
  selectedSectorFlowDate: "",
  sectorFlowScope: "focus",
  sectorFlowSort: "trend",
  sectorFlowStrategy: "velocity",
  sectorFlowWindowMinutes: 1,
  sectorFlowSnapshotIndex: -1,
  sectorFlowPlaying: false,
  sectorFlowSelectedBoardCode: "",
  sectorFlowSelectedLineId: "",
  sectorFlowSelectedBoardName: "",
  sectorFlowSelectedSourceName: "",
  sectorFlowConstituentCache: {},
  selectedStockFlowDate: "",
  selectedStockFlowSlot: "",
  selectedStockFlowCode: "",
  stockFlowScope: "shortlist",
  stockFlowPeriod: "intraday",
  stockFlowWindowMinutes: 1,
  stockFlowSort: "score",
  stockFlowDirection: "desc",
  stockFlowQuery: "",
  stockFlowBranchQuery: "",
  stockFlowFollowLatest: true,
  stockFlowValidation: { state: "waiting", currentBatch: { items: [], summary: {} }, history: { summary: {} } },
  stockFlowValidationHorizon: "30m",
  selectedEtfFlowDate: "",
  selectedEtfFlowSlot: "",
  selectedEtfFlowCode: "",
  etfFlowScope: "all",
  etfFlowWindowMinutes: 5,
  etfFlowSort: "turnover",
  etfFlowQuery: "",
  etfFlowFollowLatest: true,
  etfFlowView: "intraday",
  etfTrendHorizonDays: 21,
  etfTrendMode: "all",
  etfTrendSort: "score",
  selectedEtfTrendCode: "",
  warRoomAiTab: "current",
  warRoomAnalysis: null,
  warRoomAnalysisLoading: false,
  selectedTreasurySymbol: "US10Y",
  treasuryTrendMode: "daily",
  industryObserverView: "signals",
  industryObserverNode: "watch13",
  industryObserverGrade: "all",
  industryObserverPath: "all",
  industryObserverDateSort: "score",
  industryObserverSort: "default",
  industryObserverPayload: null,
  industryPatternPayload: null,
  industryObserverLoading: false,
  feedVisibleLimit: 30,
};

const earningsTableMetrics = {
  announcementDate: { label: "公告日期", unit: "仅排序", defaultDirection: "desc", supportsRange: false },
  h1NetProfit: { label: "上半年归母净利润", unit: "亿元", defaultDirection: "desc" },
  q2NetProfit: { label: "第二季度归母净利润", unit: "亿元", defaultDirection: "desc" },
  q2NetProfitQoQ: { label: "第二季度归母净利润环比", unit: "%", defaultDirection: "desc" },
  h1Revenue: { label: "上半年营业收入", unit: "亿元", defaultDirection: "desc" },
  h1DeductedProfit: { label: "上半年扣非归母净利润", unit: "亿元", defaultDirection: "desc" },
  q2AnnualizedPe: { label: "第二季度年化市盈率", unit: "倍", defaultDirection: "asc" },
};

const earningsThemeFilters = {
  CPO: ["CPO"],
  存储: ["存储", "存储芯片"],
  封测: ["封测", "先进封装"],
  半导体设备: ["半导体设备"],
  服务器液冷: ["服务器液冷", "服务器", "AI服务器", "液冷"],
  国产半导体: ["国产半导体"],
  PCB: ["PCB"],
  算力租赁: ["算力租赁"],
  AI应用: ["AI应用"],
  游戏: ["游戏"],
};

const initialParams = new URLSearchParams(window.location.search);
const initialWorkspaceView = initialParams.get("workspace");
const initialNavSection = initialParams.get("nav");
const initialAiSection = initialParams.get("section") || "dashboard";
const standaloneWarRoom = initialParams.get("standalone") === "1";
if (standaloneWarRoom) {
  document.documentElement.classList.add("war-room-standalone");
  document.title = "大A战情局";
}
if (["tech-earnings", "index-futures", "war-room", "sector-flow", "etf-flow", "stock-flow", "treasury", "industry-observer", "ai-intel"].includes(initialWorkspaceView)) {
  state.workspaceView = initialWorkspaceView;
  state.navSection = initialWorkspaceView;
  if (initialWorkspaceView === "ai-intel") state.aiSection = initialAiSection;
  state.mobileView = initialWorkspaceView === "tech-earnings"
    ? "earnings"
    : initialWorkspaceView === "war-room"
      ? "war-room"
      : initialWorkspaceView === "sector-flow"
        ? "sector-flow"
      : initialWorkspaceView === "etf-flow"
        ? "etf-flow"
      : initialWorkspaceView === "stock-flow"
        ? "stock-flow"
      : initialWorkspaceView === "treasury"
        ? "treasury"
      : initialWorkspaceView === "industry-observer"
        ? "industry"
      : "futures";
} else if (initialNavSection) {
  state.navSection = initialNavSection;
  state.mobileView = mobileViewForNavTarget(initialNavSection);
}

const AUTO_REFRESH_MS = 30000;
const SECTOR_FLOW_VIEW_REFRESH_MS = 5000;
const ETF_FLOW_VIEW_REFRESH_MS = 5000;
const STOCK_FLOW_VIEW_REFRESH_MS = 5000;
const KOREA_REFRESH_MS = 30000;
const MEMORY_SPOT_REFRESH_MS = 60000;
const FEED_PAGE_SIZE = 30;
let koreaMarketLoadAt = 0;
let memorySpotLoadAt = 0;
let eastmoneyRankLoadSeq = 0;
let loadDataInFlight = false;
let sectorFlowPollInFlight = false;
let etfFlowPollInFlight = false;
let stockFlowPollInFlight = false;
let sourceDragId = "";
let sectorFlowPlaybackTimer = 0;
let sectorFlowConstituentLoadToken = 0;
let stockFlowSearchTimer = 0;
let etfFlowSearchTimer = 0;
let stockFlowValidationPollInFlight = false;

const priorityLabel = {
  high: "高优先级",
  medium: "中优先级",
  low: "低优先级",
};

const directionLabel = {
  positive: "偏利好",
  negative: "偏利空",
  neutral: "中性",
};

const aShareDirectionLabel = {
  positive: "利好",
  negative: "利空",
  neutral: "中性",
};

const $ = (selector) => document.querySelector(selector);

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function compactText(value, maxLength = 220) {
  const text = cleanDisplayText(value).replace(/\s+/g, " ").trim();
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1)}...`;
}

function cleanDisplayText(value) {
  return String(value || "")
    .replace(/\uFFFD+/g, "")
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, "");
}

function renderExpandableText(value, className = "", maxLength = 180, label = "文本") {
  const text = cleanDisplayText(value).trim();
  if (!text) return "";
  const compactText = text.replace(/\s+/g, " ").trim();
  const newlineCount = (text.match(/\n/g) || []).length;
  const estimatedLineCount = text
    .split(/\n+/)
    .reduce((total, line) => total + Math.max(1, Math.ceil(line.trim().length / 34)), 0);
  const isLong = compactText.length > maxLength || newlineCount >= 2 || estimatedLineCount > 4;
  const wrapperClass = className ? `expandable-${className}` : "";
  return `
    <div class="expandable-text ${escapeHtml(wrapperClass)}${isLong ? " is-collapsed" : ""}" data-long-text="${isLong ? "true" : "false"}">
      <p class="long-text-body ${escapeHtml(className)}">${escapeHtml(text)}</p>
      ${
        isLong
          ? `<button class="text-expand-toggle" type="button" data-expand-text data-expand-label="${escapeHtml(label)}" aria-expanded="false">展开${escapeHtml(label)}</button>`
          : ""
      }
    </div>
  `;
}

function hasChineseText(value) {
  return /[\u3400-\u9fff]/.test(String(value || ""));
}

function looksMostlyEnglish(value) {
  const text = String(value || "");
  const latinCount = (text.match(/[A-Za-z]/g) || []).length;
  const chineseCount = (text.match(/[\u3400-\u9fff]/g) || []).length;
  return latinCount >= 24 && latinCount > chineseCount * 2;
}

function postTranslationBlock(post) {
  if (!looksMostlyEnglish(post.original)) return "";
  const translation = cleanDisplayText(post.translation).trim();
  const analysis = cleanDisplayText(post.analysis).trim();
  const displayText = hasChineseText(translation) ? translation : hasChineseText(analysis) ? analysis : "";
  if (!displayText) return "";
  const label = hasChineseText(translation) ? "中文翻译" : "中文解读";
  return `
    <div class="post-translation">
      <div class="copyable-block-head">
        <span>${escapeHtml(label)}</span>
        <button class="copy-text-button" type="button" data-copy-text="${escapeHtml(displayText)}" title="复制${escapeHtml(label)}">复制</button>
      </div>
      ${renderExpandableText(displayText, "translation-brief", 180, "译文")}
    </div>
  `;
}

async function fetchJson(url, options) {
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `${response.status} ${response.statusText}`);
  }
  return response.json();
}

async function loadData() {
  if (loadDataInFlight) return;
  loadDataInFlight = true;
  try {
    if (state.workspaceView === "ai-intel") {
      try {
        state.aiIntel = await fetchJson("/api/ai/dashboard");
        state.apiAvailable = true;
      } catch (error) {
        state.aiIntel = { ...fallbackAiIntel, error: error.message || "AI 情报服务暂不可用" };
        state.apiAvailable = false;
      }
      renderWorkspaceView();
      renderAiIntelWorkspace();
      renderAiIntelData();
      return;
    }
    if (state.workspaceView === "war-room") {
      const analysisLoad = loadWarRoomAnalysis({ silent: true, render: false });
      const configLoad = fetchJson("/api/config")
        .then((config) => {
          state.config = config;
          state.apiAvailable = true;
        })
        .catch(() => {});
      await Promise.all([
        loadIndexFutures({ silent: true, render: false }),
        loadMarketPulse({ silent: true, render: false }),
        loadUsTreasury({ silent: true, render: false }),
        loadAShareMarketSnapshot({ silent: true, render: false }),
        analysisLoad,
        configLoad,
      ]);
      renderAiStatus();
      renderWarRoom();
      renderWorkspaceView();
      renderMobileView();
      return;
    }
    if (state.workspaceView === "treasury") {
      await loadUsTreasury({ silent: true, render: false });
      renderTreasuryWorkspace();
      loadUsTreasuryDaily({ silent: true, render: true });
      loadUsTreasuryIntraday({ silent: true, render: true });
      renderWorkspaceView();
      renderMobileView();
      return;
    }
    if (state.workspaceView === "index-futures") {
      await Promise.all([
        loadIndexFutures({ silent: true, render: false }),
        loadMarketPulse({ silent: true, render: false }),
        loadAShareMarketSnapshot({ silent: true, render: false }),
      ]);
      renderIndexFutures();
      renderMarketPulse();
      renderAShareMarketSnapshot();
      renderWorkspaceView();
      renderMobileView();
      return;
    }
    if (state.workspaceView === "sector-flow") {
      const flowLoad = sectorFlowDays().length
        ? pollSectorFundFlowLatest({ render: false })
        : loadSectorFundFlow({ silent: true, render: false });
      const breadthLoad = loadAShareMarketSnapshot({ silent: true, render: false });
      await flowLoad;
      renderSectorFundFlow();
      renderWorkspaceView();
      renderMobileView();
      await breadthLoad;
      renderSectorFundFlow();
      return;
    }
    if (state.workspaceView === "etf-flow") {
      await loadEtfFlow({ silent: true, render: false });
      renderEtfFlow();
      renderWorkspaceView();
      renderMobileView();
      return;
    }
    if (state.workspaceView === "stock-flow") {
      await loadStockFundFlow({ silent: true, render: false });
      renderStockFundFlow();
      renderWorkspaceView();
      renderMobileView();
      return;
    }
    if (state.workspaceView === "tech-earnings") {
      await loadTechEarnings({ silent: true, render: true });
      renderWorkspaceView();
      renderMobileView();
      return;
    }
    if (state.workspaceView === "industry-observer") {
      await loadIndustryObserver({ silent: true });
      renderIndustryObserver();
      renderWorkspaceView();
      renderMobileView();
      return;
    }
    const workspaceLoads = Promise.all([
      loadTechEarnings({ silent: true, render: false }),
      loadIndexFutures({ silent: true, render: false }),
      loadEastmoneyRank({ silent: true, render: false }),
      loadBenefitMarketContext({ silent: true, render: false }),
    ]);
    try {
      const selectedAccount = state.account !== "all" ? state.account : "";
      const selectedAccountPostsRequest = selectedAccount
        ? fetchJson(`/api/posts?source=${encodeURIComponent(selectedAccount)}&limit=300&skipDedupe=1`)
        : Promise.resolve([]);
      const [config, accounts, posts, selectedAccountPosts, mapPosts, references] = await Promise.all([
        fetchJson("/api/config"),
        fetchJson("/api/sources"),
        fetchJson("/api/posts?limit=300"),
        selectedAccountPostsRequest,
        fetchJson(`/api/posts?limit=1000&hours=${encodeURIComponent(state.aShareWindowHours)}&mappedOnly=1&skipDedupe=1`),
        fetchJson("/api/references"),
      ]);
      state.apiAvailable = true;
      state.config = config;
      state.accounts = accounts;
      state.posts = mergePostLists(posts, selectedAccountPosts);
      state.mapPosts = sortPosts(mapPosts);
      state.references = references;
    } catch (error) {
      state.apiAvailable = false;
      state.config = fallbackConfig;
      state.accounts = fallbackAccounts;
      state.posts = fallbackPosts;
      state.mapPosts = fallbackPosts;
      state.references = fallbackReferences;
    }
    await workspaceLoads;
    renderAll();
    if (Date.now() - koreaMarketLoadAt >= KOREA_REFRESH_MS) {
      loadKoreaMarketData({ silent: true });
    }
    if (Date.now() - memorySpotLoadAt >= MEMORY_SPOT_REFRESH_MS) {
      loadMemorySpotData({ silent: true });
    }
  } finally {
    loadDataInFlight = false;
  }
}

async function loadTechEarnings({ silent = false, render = true } = {}) {
  try {
    state.techEarnings = await fetchJson("/api/tech-earnings");
  } catch (error) {
    state.techEarnings = {
      ...fallbackTechEarnings,
      state: "offline",
      note: error.message || "科技业绩数据接口异常",
    };
    if (!silent) showToast(`科技业绩读取失败：${error.message}`);
  }
  if (render) renderTechEarnings();
}

async function refreshTechEarnings() {
  const button = $("#tech-earnings-refresh");
  const previousText = button?.textContent || "采集最新公告";
  if (button) {
    button.disabled = true;
    button.textContent = "正在扫描全市场...";
  }
  const updatedNode = $("#tech-earnings-updated");
  if (updatedNode) updatedNode.textContent = "正在采集业绩预告、第一季度财报与市值...";
  try {
    state.techEarnings = await fetchJson("/api/tech-earnings/refresh", {
      method: "POST",
      body: "{}",
    });
    renderTechEarnings();
    const count = state.techEarnings?.collection?.techCompaniesMatched ?? state.techEarnings?.items?.length ?? 0;
    showToast(`科技业绩采集完成：已匹配 ${count} 家公司`);
  } catch (error) {
    await loadTechEarnings({ silent: true });
    showToast(`科技业绩采集失败，已保留上次数据：${error.message}`);
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = previousText;
    }
  }
}

async function loadIndexFutures({ silent = false, render = true } = {}) {
  try {
    state.indexFutures = await fetchJson("/api/index-futures");
    const days = Array.isArray(state.indexFutures?.days) ? state.indexFutures.days : [];
    if (!state.selectedFuturesDate || !days.some((item) => item.date === state.selectedFuturesDate)) {
      state.selectedFuturesDate = days[0]?.date || "";
    }
  } catch (error) {
    state.indexFutures = {
      ...fallbackIndexFutures,
      state: "offline",
      note: error.message || "股指期货数据接口异常",
    };
    if (!silent) showToast(`股指期货读取失败：${error.message}`);
  }
  if (render) renderIndexFutures();
}

async function loadMarketPulse({ force = false, silent = false, render = true } = {}) {
  try {
    state.marketPulse = await fetchJson(force ? "/api/market-pulse?refresh=1" : "/api/market-pulse");
  } catch (error) {
    const previous = Array.isArray(state.marketPulse?.items) && state.marketPulse.items.length
      ? state.marketPulse
      : fallbackMarketPulse;
    state.marketPulse = {
      ...previous,
      state: "offline",
      note: error.message || "全球股指行情接口异常",
    };
    if (!silent) showToast(`全球股指行情读取失败：${error.message}`);
  }
  if (render) renderMarketPulse();
}

async function loadUsTreasury({ force = false, silent = false, render = true } = {}) {
  try {
    state.usTreasury = await fetchJson(force ? "/api/us-treasury?refresh=1" : "/api/us-treasury");
  } catch (error) {
    const previous = Array.isArray(state.usTreasury?.items) && state.usTreasury.items.some((item) => marketPulseHasNumber(item.yield))
      ? state.usTreasury
      : fallbackUsTreasury;
    state.usTreasury = {
      ...previous,
      state: previous === fallbackUsTreasury ? "offline" : "stale",
      stale: previous !== fallbackUsTreasury,
      note: error.message || "美债收益率接口异常",
    };
    if (!silent) showToast(`美债收益率读取失败：${error.message}`);
  }
  if (render) renderWarRoomTreasury();
}

async function loadUsTreasuryDaily({ force = false, silent = false, render = true } = {}) {
  try {
    state.usTreasuryDaily = await fetchJson(force ? "/api/us-treasury-daily?refresh=1" : "/api/us-treasury-daily");
  } catch (error) {
    state.usTreasuryDaily = {
      ...(state.usTreasuryDaily || {}),
      state: state.usTreasuryDaily?.historyBySymbol ? "stale" : "offline",
      errors: [error.message || "美债日线读取失败"],
    };
    if (!silent) showToast(`美债日线读取失败：${error.message}`);
  }
  if (render) renderTreasuryWorkspace();
}

async function loadUsTreasuryIntraday({ force = false, silent = false, render = true } = {}) {
  try {
    state.usTreasuryIntraday = await fetchJson(force ? "/api/us-treasury-intraday?refresh=1" : "/api/us-treasury-intraday");
  } catch (error) {
    state.usTreasuryIntraday = {
      ...(state.usTreasuryIntraday || {}),
      state: state.usTreasuryIntraday?.historyBySymbol ? "stale" : "offline",
      errors: [error.message || "美债盘中线读取失败"],
    };
    if (!silent) showToast(`美债盘中线读取失败：${error.message}`);
  }
  if (render) renderTreasuryWorkspace();
}

async function loadAShareMarketSnapshot({ force = false, silent = false, render = true } = {}) {
  try {
    state.aShareMarket = await fetchJson(
      force ? "/api/a-share-market-snapshot?refresh=1" : "/api/a-share-market-snapshot"
    );
  } catch (error) {
    const previous = marketPulseHasNumber(state.aShareMarket?.turnover?.currentYuan)
      ? state.aShareMarket
      : fallbackAShareMarket;
    state.aShareMarket = {
      ...previous,
      state: "offline",
      note: error.message || "A股市场快照接口异常",
    };
    if (!silent) showToast(`A股市场快照读取失败：${error.message}`);
  }
  if (render) renderAShareMarketSnapshot();
}

async function loadSectorFundFlow({ silent = false, render = true } = {}) {
  const previousDay = selectedSectorFlowDay();
  const previousSnapshots = Array.isArray(previousDay?.snapshots) ? previousDay.snapshots : [];
  const wasFollowingLatest =
    state.sectorFlowSnapshotIndex < 0 ||
    state.sectorFlowSnapshotIndex >= Math.max(0, previousSnapshots.length - 1);
  try {
    const dateQuery = state.selectedSectorFlowDate
      ? `?date=${encodeURIComponent(state.selectedSectorFlowDate)}`
      : "";
    state.sectorFundFlow = await fetchJson(`/api/sector-fund-flow${dateQuery}`);
    const days = Array.isArray(state.sectorFundFlow?.days) ? state.sectorFundFlow.days : [];
    if (!state.selectedSectorFlowDate || !days.some((item) => item.date === state.selectedSectorFlowDate)) {
      state.selectedSectorFlowDate = days[0]?.date || "";
      state.sectorFlowSnapshotIndex = -1;
    }
    const selectedDay = selectedSectorFlowDay();
    const snapshots = Array.isArray(selectedDay?.snapshots) ? selectedDay.snapshots : [];
    if (wasFollowingLatest || state.sectorFlowSnapshotIndex < 0) {
      state.sectorFlowSnapshotIndex = Math.max(0, snapshots.length - 1);
    } else {
      state.sectorFlowSnapshotIndex = Math.min(state.sectorFlowSnapshotIndex, Math.max(0, snapshots.length - 1));
    }
  } catch (error) {
    const previous = Array.isArray(state.sectorFundFlow?.days) && state.sectorFundFlow.days.length
      ? state.sectorFundFlow
      : fallbackSectorFundFlow;
    state.sectorFundFlow = {
      ...previous,
      state: previous === fallbackSectorFundFlow ? "offline" : "stale",
      stale: previous !== fallbackSectorFundFlow,
      note: error.message || "板块资金接口异常",
    };
    if (!silent) showToast(`板块资金读取失败：${error.message}`);
  }
  if (render) renderSectorFundFlow();
}

async function pollSectorFundFlowLatest({ render = true } = {}) {
  if (sectorFlowPollInFlight) return;
  sectorFlowPollInFlight = true;
  try {
    const latestPayload = await fetchJson("/api/sector-fund-flow?latest=1");
    const latestDate = String(latestPayload.latestTradingDate || "");
    const latestDay = Array.isArray(latestPayload.days) ? latestPayload.days[0] : null;
    const latestSnapshot = Array.isArray(latestDay?.snapshots) ? latestDay.snapshots.at(-1) : null;
    const previous = state.sectorFundFlow || fallbackSectorFundFlow;
    const merged = {
      ...previous,
      ...latestPayload,
      days: Array.isArray(previous.days) ? previous.days : [],
    };
    if (!state.selectedSectorFlowDate) state.selectedSectorFlowDate = latestDate;
    if (latestDate && state.selectedSectorFlowDate === latestDate && latestSnapshot) {
      const currentDay = merged.days.find((item) => item.date === latestDate);
      const snapshots = Array.isArray(currentDay?.snapshots) ? [...currentDay.snapshots] : [];
      const existingIndex = snapshots.findIndex((item) => item.slot === latestSnapshot.slot);
      if (existingIndex >= 0) snapshots[existingIndex] = latestSnapshot;
      else snapshots.push(latestSnapshot);
      snapshots.sort((a, b) => String(a.slot || "").localeCompare(String(b.slot || "")));
      const nextDay = {
        ...(currentDay || latestDay),
        ...(latestDay || {}),
        snapshots,
        snapshotCount: Math.max(Number(latestDay?.snapshotCount) || 0, snapshots.length),
      };
      merged.days = [
        nextDay,
        ...merged.days.filter((item) => item.date !== latestDate),
      ];
      const wasFollowingLatest =
        state.sectorFlowSnapshotIndex < 0 ||
        state.sectorFlowSnapshotIndex >= Math.max(0, snapshots.length - 2);
      if (wasFollowingLatest) state.sectorFlowSnapshotIndex = snapshots.length - 1;
    }
    state.sectorFundFlow = merged;
    if (render) renderSectorFundFlow();
  } catch (error) {
    state.sectorFundFlow = {
      ...(state.sectorFundFlow || fallbackSectorFundFlow),
      state: "stale",
      stale: true,
      note: error.message || "板块资金实时轮询异常",
    };
    if (render) renderSectorFundFlow();
  } finally {
    sectorFlowPollInFlight = false;
  }
}

async function refreshSectorFundFlow() {
  const button = $("#sector-flow-refresh");
  const previousText = button?.textContent || "立即采样";
  if (button) {
    button.disabled = true;
    button.textContent = "采样中";
  }
  try {
    const refreshed = await fetchJson("/api/sector-fund-flow/refresh", {
      method: "POST",
      body: "{}",
    });
    state.selectedSectorFlowDate = refreshed.latestTradingDate || "";
    await Promise.all([
      loadSectorFundFlow({ silent: true, render: false }),
      loadAShareMarketSnapshot({ force: true, silent: true, render: false }),
    ]);
    state.sectorFlowSnapshotIndex = Math.max(0, sectorFlowSnapshots().length - 1);
    stopSectorFlowPlayback();
    renderSectorFundFlow();
    showToast("板块主力资金快照已更新");
  } catch (error) {
    await loadSectorFundFlow({ silent: true, render: true });
    showToast(`板块资金采样失败：${error.message}`);
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = previousText;
    }
  }
}

function etfFlowApiUrl() {
  const params = new URLSearchParams();
  if (state.selectedEtfFlowDate) params.set("date", state.selectedEtfFlowDate);
  if (!state.etfFlowFollowLatest && state.selectedEtfFlowSlot) params.set("slot", state.selectedEtfFlowSlot);
  params.set("scope", state.etfFlowScope);
  params.set("window", String(state.etfFlowWindowMinutes));
  params.set("sort", state.etfFlowSort);
  if (state.etfFlowQuery) params.set("q", state.etfFlowQuery);
  if (state.selectedEtfFlowCode) params.set("code", state.selectedEtfFlowCode);
  params.set("trend_horizon", String(state.etfTrendHorizonDays));
  params.set("trend_mode", state.etfTrendMode);
  params.set("trend_sort", state.etfTrendSort);
  if (state.selectedEtfTrendCode) params.set("trend_code", state.selectedEtfTrendCode);
  return `/api/etf-flow?${params.toString()}`;
}

async function loadEtfFlow({ silent = false, render = true } = {}) {
  if (etfFlowPollInFlight) return;
  etfFlowPollInFlight = true;
  try {
    const payload = await fetchJson(etfFlowApiUrl());
    state.etfFlow = payload;
    const dates = Array.isArray(payload.availableDates) ? payload.availableDates : [];
    if (!state.selectedEtfFlowDate || !dates.includes(state.selectedEtfFlowDate)) {
      state.selectedEtfFlowDate = payload.tradingDate || dates[0] || "";
      state.etfFlowFollowLatest = true;
    }
    state.selectedEtfFlowSlot = payload.slot || state.selectedEtfFlowSlot;
    const rows = Array.isArray(payload.rows) ? payload.rows : [];
    if (!state.selectedEtfFlowCode || !rows.some((item) => item.code === state.selectedEtfFlowCode)) {
      state.selectedEtfFlowCode = payload.detail?.code || rows[0]?.code || "";
    }
    const trendRows = Array.isArray(payload.trend?.rows) ? payload.trend.rows : [];
    if (!state.selectedEtfTrendCode || !trendRows.some((item) => item.code === state.selectedEtfTrendCode)) {
      state.selectedEtfTrendCode = payload.trend?.detail?.code || trendRows[0]?.code || "";
    }
  } catch (error) {
    const previous = Array.isArray(state.etfFlow?.rows) && state.etfFlow.rows.length
      ? state.etfFlow
      : fallbackEtfFlow;
    state.etfFlow = {
      ...previous,
      state: previous === fallbackEtfFlow ? "offline" : "stale",
      note: error.message || "ETF行情接口异常",
    };
    if (!silent) showToast(`ETF数据读取失败：${error.message}`);
  } finally {
    etfFlowPollInFlight = false;
  }
  if (render) renderEtfFlow();
}

async function refreshEtfFlow() {
  const button = $("#etf-flow-refresh");
  const previousText = button?.textContent || "立即采样";
  if (button) {
    button.disabled = true;
    button.textContent = "采样中";
  }
  try {
    const payload = await fetchJson("/api/etf-flow/refresh", { method: "POST", body: "{}" });
    state.selectedEtfFlowDate = payload.tradingDate || "";
    state.selectedEtfFlowSlot = payload.slot || "";
    state.etfFlowFollowLatest = true;
    await loadEtfFlow({ silent: true, render: true });
    showToast(`ETF全市场快照已更新：${payload.count || 0}只`);
  } catch (error) {
    await loadEtfFlow({ silent: true, render: true });
    showToast(`ETF采样失败：${error.message}`);
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = previousText;
    }
  }
}

function stockFlowApiUrl() {
  const params = new URLSearchParams();
  if (state.selectedStockFlowDate) params.set("date", state.selectedStockFlowDate);
  if (!state.stockFlowFollowLatest && state.selectedStockFlowSlot) {
    params.set("slot", state.selectedStockFlowSlot);
  }
  params.set("scope", state.stockFlowScope);
  params.set("window", String(state.stockFlowWindowMinutes));
  params.set("period", state.stockFlowPeriod);
  params.set("sort", state.stockFlowSort);
  params.set("direction", state.stockFlowDirection);
  if (state.stockFlowQuery) params.set("q", state.stockFlowQuery);
  if (state.stockFlowBranchQuery) params.set("branch", state.stockFlowBranchQuery);
  if (state.selectedStockFlowCode) params.set("code", state.selectedStockFlowCode);
  return `/api/stock-fund-flow?${params.toString()}`;
}

function stockFlowValidationApiUrl() {
  const params = new URLSearchParams();
  if (state.selectedStockFlowDate) params.set("date", state.selectedStockFlowDate);
  if (!state.stockFlowFollowLatest && state.selectedStockFlowSlot) {
    params.set("slot", state.selectedStockFlowSlot);
  }
  params.set("limit", "10");
  return `/api/stock-fund-flow/validation?${params.toString()}`;
}

async function loadStockFundFlowValidation({ silent = false, render = true } = {}) {
  if (stockFlowValidationPollInFlight) return;
  stockFlowValidationPollInFlight = true;
  try {
    state.stockFlowValidation = await fetchJson(stockFlowValidationApiUrl());
  } catch (error) {
    state.stockFlowValidation = {
      ...(state.stockFlowValidation || {}),
      state: "stale",
      note: error.message || "候选验证接口暂不可用",
    };
    if (!silent) showToast(`候选验证读取失败：${error.message}`);
  } finally {
    stockFlowValidationPollInFlight = false;
  }
  if (render) renderStockFlowValidation();
}

async function loadStockFundFlow({ silent = false, render = true } = {}) {
  if (stockFlowPollInFlight) return;
  stockFlowPollInFlight = true;
  try {
    const payload = await fetchJson(stockFlowApiUrl());
    state.stockFundFlow = payload;
    const availableDays = Array.isArray(payload.availableDays) ? payload.availableDays : [];
    if (!state.selectedStockFlowDate || !availableDays.some((item) => item.date === state.selectedStockFlowDate)) {
      state.selectedStockFlowDate = payload.tradingDate || availableDays[0]?.date || "";
      state.stockFlowFollowLatest = true;
    }
    state.selectedStockFlowSlot = payload.slot || state.selectedStockFlowSlot;
    const rows = Array.isArray(payload.rows) ? payload.rows : [];
    if (!state.selectedStockFlowCode || !rows.some((item) => item.code === state.selectedStockFlowCode)) {
      state.selectedStockFlowCode = payload.detail?.code || rows[0]?.code || "";
    }
  } catch (error) {
    const previous = Array.isArray(state.stockFundFlow?.rows) && state.stockFundFlow.rows.length
      ? state.stockFundFlow
      : fallbackStockFundFlow;
    state.stockFundFlow = {
      ...previous,
      state: previous === fallbackStockFundFlow ? "offline" : "stale",
      note: error.message || "个股资金流速接口异常",
    };
    if (!silent) showToast(`个股资金读取失败：${error.message}`);
  } finally {
    stockFlowPollInFlight = false;
  }
  if (render) renderStockFundFlow();
  if (state.workspaceView === "stock-flow") {
    await loadStockFundFlowValidation({ silent: true, render: true });
  }
}

async function refreshStockFundFlow() {
  const button = $("#stock-flow-refresh");
  const previousText = button?.textContent || "立即采样";
  if (button) {
    button.disabled = true;
    button.textContent = "采样中";
  }
  try {
    const payload = await fetchJson("/api/stock-fund-flow/refresh", { method: "POST", body: "{}" });
    state.selectedStockFlowDate = payload.tradingDate || "";
    state.selectedStockFlowSlot = payload.slot || "";
    state.stockFlowFollowLatest = true;
    await loadStockFundFlow({ silent: true, render: true });
    showToast(`个股资金已采样：${payload.coverage?.candidateCount || 0}只动态候选`);
  } catch (error) {
    await loadStockFundFlow({ silent: true, render: true });
    showToast(`个股资金采样失败：${error.message}`);
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = previousText;
    }
  }
}

async function refreshStockFundFlowHistory() {
  const button = $("#stock-flow-history-refresh");
  const previousText = button?.textContent || "同步多日";
  if (button) {
    button.disabled = true;
    button.textContent = "补录中";
  }
  try {
    const result = await fetchJson("/api/stock-fund-flow/history/refresh", {
      method: "POST",
      body: JSON.stringify({ budget: 48 }),
    });
    await loadStockFundFlow({ silent: true, render: true });
    if (result.updated) {
      const failedNote = result.failed ? `，另有${result.failed}只失败` : "";
      showToast(`已同步${result.updated}只股票的多日资金序列${failedNote}`);
    } else if (result.errors?.length) {
      const firstError = result.errors[0];
      const errorText = typeof firstError === "string"
        ? firstError
        : `${firstError.code || ""} ${firstError.error || "历史资金源暂不可用"}`.trim();
      showToast(`历史资金源暂缓：${errorText}`);
    }
    else showToast(result.message || "当前候选历史已经补齐");
  } catch (error) {
    showToast(`历史资金补录失败：${error.message}`);
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = previousText;
    }
  }
}

async function refreshIndexFutures() {
  const button = $("#index-futures-refresh");
  const previousText = button?.textContent || "立即采样";
  if (button) {
    button.disabled = true;
    button.textContent = "正在采样...";
  }
  try {
    state.indexFutures = await fetchJson("/api/index-futures/refresh", {
      method: "POST",
      body: "{}",
    });
    const days = Array.isArray(state.indexFutures?.days) ? state.indexFutures.days : [];
    state.selectedFuturesDate = days[0]?.date || state.selectedFuturesDate;
    await Promise.all([
      loadMarketPulse({ force: true, silent: true, render: false }),
      loadAShareMarketSnapshot({ force: true, silent: true, render: false }),
    ]);
    renderIndexFutures();
    renderMarketPulse();
    renderAShareMarketSnapshot();
    showToast("股指多空、三市成交与全球行情已更新");
  } catch (error) {
    await loadIndexFutures({ silent: true });
    showToast(`股指期货采样失败：${error.message}`);
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = previousText;
    }
  }
}

async function loadKoreaMarketData({ force = false, silent = false } = {}) {
  koreaMarketLoadAt = Date.now();
  try {
    state.koreaMarket = await fetchJson(force ? "/api/korea-market?refresh=1" : "/api/korea-market");
  } catch (error) {
    state.koreaMarket = {
      ...fallbackKoreaMarket,
      state: "offline",
      value: error.message || "韩国行情接口异常",
    };
    if (!silent) showToast(`韩国行情刷新失败：${error.message}`);
  }
  renderKoreaMarket();
  renderMarketSummary();
}

async function loadMemorySpotData({ force = false, silent = false } = {}) {
  memorySpotLoadAt = Date.now();
  try {
    state.memorySpot = await fetchJson(force ? "/api/memory-spot?refresh=1" : "/api/memory-spot");
  } catch (error) {
    state.memorySpot = {
      ...fallbackMemorySpot,
      state: "offline",
      note: error.message || "内存套装价格接口异常",
    };
    if (!silent) showToast(`内存套装价格刷新失败：${error.message}`);
  }
  renderMemorySpot();
  renderMarketSummary();
}

async function loadEastmoneyRank({ silent = false, render = true } = {}) {
  const loadSeq = ++eastmoneyRankLoadSeq;
  if (render) {
    state.eastmoneyRank = {
      ...fallbackEastmoneyRank,
      state: "loading",
    };
    renderEastmoneyRank();
  }
  try {
    const summary = await fetchJson("/api/eastmoney-rank?limit=20");
    if (loadSeq !== eastmoneyRankLoadSeq) return;
    state.eastmoneyRank = summary;
  } catch (error) {
    if (loadSeq !== eastmoneyRankLoadSeq) return;
    state.eastmoneyRank = {
      ...fallbackEastmoneyRank,
      state: "offline",
      error: error.message || "东方财富人气榜暂时不可用",
    };
    if (!silent) showToast(`东方财富人气榜读取失败：${error.message}`);
  }
  if (render) renderEastmoneyRank();
}

async function loadBenefitMarketContext({ silent = false, render = true } = {}) {
  try {
    state.benefitMarketContext = await fetchJson("/api/benefit-market-context");
  } catch (error) {
    state.benefitMarketContext = {
      ...fallbackBenefitMarketContext,
      state: "offline",
      error: error.message || "行情确认接口暂时不可用",
    };
    if (!silent) showToast(`实际利好行情确认失败：${error.message}`);
  }
  if (render) renderMarketMap();
}

async function loadAShareWindow(hours) {
  const nextHours = Number(hours) || 24;
  state.aShareWindowHours = nextHours;
  state.aShareMapLoading = true;
  renderMarketMap();
  try {
    const posts = await fetchJson(`/api/posts?limit=1000&hours=${encodeURIComponent(nextHours)}&mappedOnly=1&skipDedupe=1`);
    state.mapPosts = sortPosts(posts);
  } catch (error) {
    showToast(`A股映射窗口读取失败：${error.message}`);
  } finally {
    state.aShareMapLoading = false;
    renderMarketMap();
  }
}

async function loadPostsForAccount(accountId) {
  if (!accountId || accountId === "all") return false;
  try {
    const posts = await fetchJson(`/api/posts?source=${encodeURIComponent(accountId)}&limit=300&skipDedupe=1`);
    state.posts = mergePostLists(state.posts, posts);
    return true;
  } catch (error) {
    showToast(`信源消息读取失败：${error.message}`);
    return false;
  }
}

async function calibrateMemoryPrice(itemId, itemName) {
  const raw = window.prompt(`请输入 ${itemName} 的真实成交价`, "");
  if (raw === null) return;
  const normalized = raw.replace(/[锟ヂ?\s]/g, "");
  const price = Number(normalized);
  if (!Number.isFinite(price) || price <= 0) {
    showToast("请输入有效价格，例如 1499 或 2399.00");
    return;
  }
  try {
    state.memorySpot = await fetchJson("/api/memory-spot/manual-price", {
      method: "POST",
      body: JSON.stringify({ id: itemId, price }),
    });
    renderMemorySpot();
    showToast(`${itemName} 价格已校准`);
  } catch (error) {
    showToast(`价格校准失败：${error.message}`);
  }
}

function sortPosts(posts) {
  return [...posts].sort((a, b) => {
    const timeA = Date.parse(a.publishedAt || "") || 0;
    const timeB = Date.parse(b.publishedAt || "") || 0;
    return timeB - timeA || Number(b.id || 0) - Number(a.id || 0);
  });
}

function mergePostLists(...lists) {
  const known = new Map();
  lists.flat().filter(Boolean).forEach((post) => {
    const key =
      post.id !== undefined && post.id !== null
        ? `id:${post.id}`
        : `fallback:${post.accountId || ""}:${post.publishedAt || ""}:${post.original || ""}`;
    known.set(key, post);
  });
  return sortPosts([...known.values()]);
}

function accountById(id) {
  return state.accounts.find((account) => account.id === id);
}

function postSource(post) {
  const account = accountById(post.accountId);
  return {
    name: post.sourceName || account?.name || "未知信源",
    handle: post.sourceHandle || account?.handle || "",
    initials: post.sourceInitials || account?.initials || "NA",
    avatarUrl: post.sourceAvatarUrl || account?.avatarUrl || "",
  };
}

function postOriginalUrl(post) {
  const url = String(post.sourceUrl || "").trim();
  if (!/^https?:\/\//i.test(url)) return "";
  return url;
}

function isXPostUrl(url) {
  return /^https?:\/\/(?:www\.)?(?:x|twitter)\.com\/[^/]+\/status\/\d+/i.test(String(url || ""));
}

function renderOriginalBlock(post) {
  const original = renderExpandableText(post.original, "post-original", 240, "原文");
  if (!original) return "";
  const url = postOriginalUrl(post);
  const linkLabel = isXPostUrl(url) ? "打开推特原文" : "打开原文";
  return `
    <div class="post-original-block">
      ${original}
      ${
        url
          ? `<a class="post-original-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(linkLabel)}</a>`
          : ""
      }
    </div>
  `;
}

function renderAvatar(entity) {
  const url = String(entity.avatarUrl || "").trim();
  const initials = String(entity.initials || "NA").trim() || "NA";
  const isImageUrl = /^(?:https?:\/\/|data:image\/)/i.test(url);
  if (isImageUrl) {
    return `<span class="avatar has-image" data-avatar-fallback="${escapeHtml(initials)}"><img src="${escapeHtml(url)}" alt="${escapeHtml(entity.name || initials)}" loading="lazy" referrerpolicy="no-referrer" /></span>`;
  }
  return `<span class="avatar">${escapeHtml(initials)}</span>`;
}

document.addEventListener(
  "error",
  (event) => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement) || !image.matches(".avatar img")) return;
    const avatar = image.closest(".avatar");
    if (!avatar) return;
    avatar.classList.remove("has-image");
    avatar.textContent = avatar.dataset.avatarFallback || "NA";
  },
  true,
);

function formatFullTime(value) {
  const date = new Date(value || "");
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

function formatKoreaPrice(value, decimals = 2) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "--";
  return new Intl.NumberFormat("zh-CN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(number);
}

function formatKoreaVolume(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) return "--";
  if (number >= 100000000) return `${(number / 100000000).toFixed(2)}亿`;
  if (number >= 10000) return `${(number / 10000).toFixed(1)}万`;
  return new Intl.NumberFormat("zh-CN").format(Math.round(number));
}

function formatKoreaChange(value, percent) {
  const change = Number(value);
  const pct = Number(percent);
  if (!Number.isFinite(change) || !Number.isFinite(pct)) return "--";
  const sign = change > 0 ? "+" : "";
  return `${sign}${change.toFixed(2)} / ${sign}${pct.toFixed(2)}%`;
}

function koreaModeLabel(mode) {
  const labels = {
    intraday: "分时",
    m5: "5分",
    m15: "15分",
    m30: "30分",
    m60: "60分",
    m120: "120分",
    candles: "K线",
  };
  return labels[mode] || "分时";
}

function koreaModeMinutes(mode) {
  const match = String(mode || "").match(/^m(\d+)$/);
  return match ? Number(match[1]) : 1;
}

function isKoreaCandleMode(mode) {
  return mode === "candles" || /^m(5|15|30|60|120)$/.test(String(mode || ""));
}

function formatKoreaPercent(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "--";
  const sign = number > 0 ? "+" : "";
  return `${sign}${number.toFixed(2)}%`;
}

function numericValue(value) {
  if (value === null || value === undefined || value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function formatAmountValue(value, decimals = 2) {
  const number = numericValue(value);
  if (number === null) return "--";
  return `${number.toFixed(decimals).replace(/\.00$/, "")}亿元`;
}

function formatPercentValue(value, decimals = 2) {
  const number = numericValue(value);
  if (number === null) return "--";
  const sign = number > 0 ? "+" : "";
  return `${sign}${number.toFixed(decimals)}%`;
}

function formatMultipleValue(value, decimals = 1) {
  const number = numericValue(value);
  if (number === null || number <= 0) return "--";
  return `${number.toFixed(decimals)}倍`;
}

function metricBounds(metric) {
  if (!metric || typeof metric !== "object") return null;
  const low = numericValue(metric.low ?? metric.value);
  const high = numericValue(metric.high ?? metric.low ?? metric.value);
  if (low === null && high === null) return null;
  const normalizedLow = low ?? high;
  const normalizedHigh = high ?? low;
  const min = Math.min(normalizedLow, normalizedHigh);
  const max = Math.max(normalizedLow, normalizedHigh);
  return {
    low: min,
    high: max,
    mid: (min + max) / 2,
    unit: metric.unit || "",
    label: metric.label || "",
    basis: metric.basis || "",
  };
}

function formatBounds(bounds, formatter = formatAmountValue) {
  if (!bounds) return "待补";
  if (Math.abs(bounds.low - bounds.high) < 0.0001) return formatter(bounds.mid);
  return `${formatter(bounds.low)}-${formatter(bounds.high)}`;
}

function formatMetricRange(metric, formatter = formatAmountValue) {
  return formatBounds(metricBounds(metric), formatter);
}

function formatMetricYoY(metric) {
  if (!metric || typeof metric !== "object") return "同比待补";
  const low = numericValue(metric.yoyLow ?? metric.yoy);
  const high = numericValue(metric.yoyHigh ?? metric.yoyLow ?? metric.yoy);
  if (low === null && high === null) return "同比待补";
  const min = Math.min(low ?? high, high ?? low);
  const max = Math.max(low ?? high, high ?? low);
  if (Math.abs(min - max) < 0.0001) return `同比${formatPercentValue(min)}`;
  return `同比${formatPercentValue(min)}-${formatPercentValue(max)}`;
}

function deriveQ2Range(h1Metric, q1Value, q1Label = "2026年第一季度实际值") {
  const h1 = metricBounds(h1Metric);
  const q1 = numericValue(q1Value);
  if (!h1 || q1 === null) return null;
  const low = h1.low - q1;
  const high = h1.high - q1;
  return {
    low: Math.min(low, high),
    high: Math.max(low, high),
    mid: (low + high) / 2,
    formula: `${h1.label || "2026年上半年累计值"} - ${q1Label} ${formatAmountValue(q1)}`,
  };
}

function growthBounds(currentBounds, baseValue) {
  const base = numericValue(baseValue);
  if (!currentBounds || base === null || Math.abs(base) < 0.000001) return null;
  const low = ((currentBounds.low - base) / Math.abs(base)) * 100;
  const high = ((currentBounds.high - base) / Math.abs(base)) * 100;
  return {
    low: Math.min(low, high),
    high: Math.max(low, high),
    mid: (low + high) / 2,
  };
}

function ratioPercent(numerator, denominator) {
  const top = numericValue(numerator);
  const bottom = numericValue(denominator);
  if (top === null || bottom === null || Math.abs(bottom) < 0.000001) return null;
  return (top / bottom) * 100;
}

function annualizedPe(marketCap, annualizedProfit) {
  const cap = numericValue(marketCap);
  const profit = numericValue(annualizedProfit);
  if (cap === null || profit === null || profit <= 0) return null;
  return cap / profit;
}

function normalizeTechEarningsItem(item) {
  const reported = item.reported || {};
  const q1 = item.q1Actual || {};
  const h1Revenue = metricBounds(reported.h1Revenue);
  const h1NetProfit = metricBounds(reported.h1NetProfitParent);
  const h1DeductedProfit = metricBounds(reported.h1DeductedNetProfit);
  const q2Revenue = deriveQ2Range(reported.h1Revenue, q1.revenue, "2026年第一季度营业收入");
  const q2NetProfit = deriveQ2Range(reported.h1NetProfitParent, q1.netProfitParent, "2026年第一季度归母净利润");
  const q2DeductedProfit = deriveQ2Range(
    reported.h1DeductedNetProfit,
    q1.deductedNetProfit,
    "2026年第一季度扣非归母净利润",
  );
  const marketCap = numericValue(item.valuation?.marketCap?.value);
  const h1AnnualizedProfit = h1NetProfit ? h1NetProfit.mid * 2 : null;
  const q2AnnualizedProfit = q2NetProfit ? q2NetProfit.mid * 4 : null;
  const h1AnnualizedDeductedProfit = h1DeductedProfit ? h1DeductedProfit.mid * 2 : null;
  const q2AnnualizedDeductedProfit = q2DeductedProfit ? q2DeductedProfit.mid * 4 : null;

  return {
    ...item,
    derived: {
      h1Revenue,
      h1NetProfit,
      h1DeductedProfit,
      q2Revenue,
      q2NetProfit,
      q2DeductedProfit,
      q2RevenueQoQ: growthBounds(q2Revenue, q1.revenue),
      q2NetProfitQoQ: growthBounds(q2NetProfit, q1.netProfitParent),
      q2DeductedProfitQoQ: growthBounds(q2DeductedProfit, q1.deductedNetProfit),
      h1NetMargin: ratioPercent(h1NetProfit?.mid, h1Revenue?.mid),
      q2NetMargin: ratioPercent(q2NetProfit?.mid, q2Revenue?.mid),
      h1DeductedRatio: ratioPercent(h1DeductedProfit?.mid, h1NetProfit?.mid),
      h1AnnualizedProfit,
      q2AnnualizedProfit,
      h1AnnualizedDeductedProfit,
      q2AnnualizedDeductedProfit,
      h1AnnualizedPe: annualizedPe(marketCap, h1AnnualizedProfit),
      q2AnnualizedPe: annualizedPe(marketCap, q2AnnualizedProfit),
      q2AnnualizedDeductedPe: annualizedPe(marketCap, q2AnnualizedDeductedProfit),
    },
  };
}

function formatSpotPrice(value, unit = "USD") {
  if (value === null || value === undefined || value === "") return "--";
  const number = Number(value);
  if (!Number.isFinite(number)) return "--";
  const decimals = Math.abs(number) >= 100 ? 2 : 4;
  if (unit === "CNY") return `楼${number.toFixed(decimals)}`;
  return `${unit === "USD" ? "$" : ""}${number.toFixed(decimals)}${unit && unit !== "USD" ? ` ${unit}` : ""}`;
}

function formatSpotChange(value) {
  if (value === null || value === undefined || value === "") return "--";
  const number = Number(value);
  if (!Number.isFinite(number)) return "--";
  const sign = number > 0 ? "+" : "";
  return `${sign}${number.toFixed(2)}%`;
}

function koreaMoveClass(value) {
  const number = Number(value);
  if (number > 0) return "up";
  if (number < 0) return "down";
  return "flat";
}

function spotMoveClass(item) {
  const number = Number(item.changePct ?? item.changeAbs);
  if (number > 0) return "up";
  if (number < 0) return "down";
  return "flat";
}

function spotHistory(item) {
  return [...(item.history || [])]
    .filter((record) => record && record.date)
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

function latestSpotRecord(item) {
  return spotHistory(item)[0] || null;
}

function memoryKitMeta(item) {
  const name = String(item.name || "");
  const capacityMatch = name.match(/(\d+)Gx2/i);
  const capacity = capacityMatch ? Number(capacityMatch[1]) : null;
  const speedMatch = name.match(/DDR(\d)\s+(\d+)/i);
  const latencyMatch = name.match(/C(\d+)/i);
  return {
    kit: capacity ? `${capacity * 2}GB 濂楄` : "濂楄",
    module: capacity ? `${capacity}GB x2` : "鍙屾潯",
    type: speedMatch ? `DDR${speedMatch[1]}` : "DDR5",
    speed: speedMatch ? `${speedMatch[2]} MT/s` : "6000 MT/s",
    latency: latencyMatch ? `CL${latencyMatch[1]}` : "CL28",
    sku: item.sku || "--",
  };
}

function formatSpotDate(value) {
  const text = String(value || "");
  const match = text.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (match) return `${match[2]}/${match[3]}`;
  const compact = text.match(/^(\d{4})(\d{2})(\d{2})/);
  if (compact) return `${compact[2]}/${compact[3]}`;
  return text || "--";
}

function isTechnicalMemoryNote(value) {
  return /urlopen|ssl|unexpected_eof|protocol|traceback|errno|exception|_ssl/i.test(String(value || ""));
}

function memorySpotNote(item, latest) {
  const status = String(item.status || "");
  if (status.includes("价格接口暂不可用")) {
    return "京东 SKU 已绑定，价格接口暂时读取失败";
  }
  if (status.includes("手动校准")) {
    return "使用手动校准价格";
  }
  const note = latest?.note || item.note || "";
  return isTechnicalMemoryNote(note) ? "" : note;
}

function renderSpotSparkline(records) {
  const usable = records
    .slice()
    .reverse()
    .map((record) => Number(record.price))
    .filter((value) => Number.isFinite(value));
  if (usable.length < 2) {
    return `<div class="memory-spot-emptyline">鏆傛棤姣忔棩瓒嬪娍</div>`;
  }
  const width = 148;
  const height = 38;
  const min = Math.min(...usable);
  const max = Math.max(...usable);
  const range = Math.max(max - min, 1);
  const points = usable
    .map((value, index) => {
      const x = usable.length === 1 ? 0 : (index / (usable.length - 1)) * width;
      const y = height - ((value - min) / range) * (height - 6) - 3;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  const moveClass = usable[usable.length - 1] >= usable[0] ? "up" : "down";
  return `
    <svg class="memory-spot-spark ${moveClass}" viewBox="0 0 ${width} ${height}" aria-hidden="true">
      <polyline points="${points}" />
    </svg>
  `;
}

function renderKoreaMiniSparkline(instrument) {
  const rawPoints = instrument.intraday || instrument.points || instrument.candles || [];
  const points = normalizeChartPoints(rawPoints, "intraday").slice(-42);
  if (points.length < 2) return `<span class="korea-mini-empty">鏆傛棤瓒嬪娍</span>`;
  const width = 92;
  const height = 28;
  const values = points.map((point) => point.close);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(max - min, 1);
  const polyline = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - ((value - min) / range) * (height - 6) - 3;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  const moveClass = koreaMoveClass(values[values.length - 1] - values[0]);
  return `
    <svg class="korea-mini-spark ${moveClass}" viewBox="0 0 ${width} ${height}" aria-hidden="true">
      <polyline points="${polyline}" />
    </svg>
  `;
}

function normalizeChartPoints(points, mode) {
  return (points || [])
    .map((point) => {
      const close = Number(point.close);
      if (!Number.isFinite(close)) return null;
      return {
        time: point.time || "",
        label: point.label || "",
        open: Number.isFinite(Number(point.open)) ? Number(point.open) : close,
        high: Number.isFinite(Number(point.high)) ? Number(point.high) : close,
        low: Number.isFinite(Number(point.low)) ? Number(point.low) : close,
        close,
        volume: Number.isFinite(Number(point.volume)) ? Number(point.volume) : 0,
      };
    })
    .filter(Boolean)
    .slice(mode === "candles" ? -48 : -180);
}

function aggregateKoreaPoints(points, minutes) {
  if (!minutes || minutes <= 1 || points.length < 2) return points;
  const buckets = new Map();
  for (const point of points) {
    const time = Date.parse(point.time || "");
    const key = Number.isFinite(time) ? Math.floor(time / (minutes * 60 * 1000)) : Math.floor(buckets.size / minutes);
    const existing = buckets.get(key);
    if (!existing) {
      buckets.set(key, { ...point });
      continue;
    }
    existing.high = Math.max(existing.high, point.high);
    existing.low = Math.min(existing.low, point.low);
    existing.close = point.close;
    existing.volume += point.volume || 0;
    existing.label = point.label || existing.label;
    existing.time = point.time || existing.time;
  }
  return Array.from(buckets.values());
}

function scaleChartValue(value, min, max, top, bottom) {
  if (max <= min) return (top + bottom) / 2;
  return bottom - ((value - min) / (max - min)) * (bottom - top);
}

function koreaChartTooltip(point, instrument, mode, basePrice) {
  const decimals = instrument.decimals || 2;
  const change = Number(point.close) - Number(basePrice || point.open || point.close);
  const pct = basePrice ? (change / basePrice) * 100 : 0;
  return [
    `${instrument.name || instrument.symbol || "韩国行情"} · ${koreaModeLabel(mode)}`,
    point.label || point.time || "",
    `开 ${formatKoreaPrice(point.open, decimals)} 高 ${formatKoreaPrice(point.high, decimals)}`,
    `低 ${formatKoreaPrice(point.low, decimals)} 收 ${formatKoreaPrice(point.close, decimals)}`,
    `涨跌 ${formatKoreaChange(change, pct)} 量 ${formatKoreaVolume(point.volume)}`,
  ]
    .filter(Boolean)
    .join("\n");
}

function renderKoreaChartSvg(instrument, mode) {
  const isDailyCandles = mode === "candles";
  const isCandleMode = isKoreaCandleMode(mode);
  const rawPoints = isDailyCandles ? instrument.candles : instrument.intraday;
  const normalizedPoints = normalizeChartPoints(rawPoints, mode);
  const points = isDailyCandles ? normalizedPoints : aggregateKoreaPoints(normalizedPoints, koreaModeMinutes(mode));
  if (points.length < 2) {
    return `<div class="empty-state">暂无${koreaModeLabel(mode)}行情。</div>`;
  }

  const width = 760;
  const height = 238;
  const left = 54;
  const right = 58;
  const top = 16;
  const priceBottom = 166;
  const volumeTop = 184;
  const bottom = 222;
  const chartWidth = width - left - right;
  const closes = points.map((point) => point.close);
  const highs = points.map((point) => point.high);
  const lows = points.map((point) => point.low);
  const maxPrice = Math.max(...highs, ...closes);
  const minPrice = Math.min(...lows, ...closes);
  const padding = Math.max((maxPrice - minPrice) * 0.08, maxPrice * 0.0008, 1);
  const yMax = maxPrice + padding;
  const yMin = minPrice - padding;
  const maxVolume = Math.max(...points.map((point) => point.volume), 1);
  const first = points[0];
  const last = points[points.length - 1];
  const basePrice =
    Number(instrument.previousClose) ||
    Number(instrument.prevClose) ||
    Number(first.open) ||
    Number(first.close);
  const xFor = (index) => left + (points.length === 1 ? 0 : (index / (points.length - 1)) * chartWidth);
  const yFor = (value) => scaleChartValue(value, yMin, yMax, top, priceBottom);
  const priceTicks = [yMax, yMin + (yMax - yMin) * 0.75, (yMax + yMin) / 2, yMin + (yMax - yMin) * 0.25, yMin];
  const axisLabels = priceTicks
    .map((value) => {
      const y = yFor(value);
      const pct = basePrice ? ((value - basePrice) / basePrice) * 100 : 0;
      return `
        <text x="8" y="${y + 4}" class="korea-chart-axis">${formatKoreaPrice(value, instrument.decimals || 2)}</text>
        <text x="${width - 8}" y="${y + 4}" text-anchor="end" class="korea-chart-axis korea-chart-percent-axis">${formatKoreaPercent(pct)}</text>
      `;
    })
    .join("");
  const grid = priceTicks
    .map((value) => `<line x1="${left}" x2="${width - right}" y1="${yFor(value)}" y2="${yFor(value)}" class="korea-chart-grid" />`)
    .join("");
  const zeroLine =
    basePrice >= yMin && basePrice <= yMax
      ? `<line x1="${left}" x2="${width - right}" y1="${yFor(basePrice)}" y2="${yFor(basePrice)}" class="korea-chart-zero-line" />`
      : "";
  const volumeBars = points
    .map((point, index) => {
      const x = xFor(index);
      const barWidth = Math.max(2, Math.min(18, (chartWidth / points.length) * 0.46));
      const barHeight = (point.volume / maxVolume) * (bottom - volumeTop);
      const color = point.close >= point.open ? "up" : "down";
      return `<rect x="${x - barWidth / 2}" y="${bottom - barHeight}" width="${barWidth}" height="${barHeight}" class="korea-volume-bar ${color}" />`;
    })
    .join("");

  let priceShape = "";
  if (isCandleMode) {
    const candleWidth = Math.max(3, Math.min(18, (chartWidth / points.length) * 0.62));
    const hitWidth = Math.max(candleWidth + 6, chartWidth / Math.max(points.length, 1));
    priceShape = points
      .map((point, index) => {
        const x = xFor(index);
        const openY = yFor(point.open);
        const closeY = yFor(point.close);
        const highY = yFor(point.high);
        const lowY = yFor(point.low);
        const bodyY = Math.min(openY, closeY);
        const bodyHeight = Math.max(2, Math.abs(closeY - openY));
        const color = point.close >= point.open ? "up" : "down";
        return `
          <g class="korea-candle ${color}">
            <title>${escapeHtml(koreaChartTooltip(point, instrument, mode, basePrice))}</title>
            <rect class="korea-candle-hit" x="${x - hitWidth / 2}" y="${top}" width="${hitWidth}" height="${bottom - top}" />
            <line class="korea-candle-wick" x1="${x}" x2="${x}" y1="${highY}" y2="${lowY}" />
            <rect class="korea-candle-body" x="${x - candleWidth / 2}" y="${bodyY}" width="${candleWidth}" height="${bodyHeight}" rx="1.5" />
          </g>
        `;
      })
      .join("");
  } else {
    const path = points.map((point, index) => `${index === 0 ? "M" : "L"} ${xFor(index).toFixed(1)} ${yFor(point.close).toFixed(1)}`).join(" ");
    const area = `${path} L ${xFor(points.length - 1).toFixed(1)} ${priceBottom} L ${xFor(0).toFixed(1)} ${priceBottom} Z`;
    const pointMarks = points
      .map((point, index) => {
        const x = xFor(index);
        const y = yFor(point.close);
        return `
          <g class="korea-line-point">
            <title>${escapeHtml(koreaChartTooltip(point, instrument, mode, basePrice))}</title>
            <circle class="korea-line-hit" cx="${x}" cy="${y}" r="8" />
            <circle class="korea-line-dot" cx="${x}" cy="${y}" r="2.2" />
          </g>
        `;
      })
      .join("");
    priceShape = `<path d="${area}" class="korea-line-area" /><path d="${path}" class="korea-line" />${pointMarks}`;
  }

  const lastY = yFor(last.close);
  const lastClass = koreaMoveClass(last.close - basePrice);
  return `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHtml(instrument.name || "韩国行情")} ${koreaModeLabel(mode)}图">
      <rect x="0" y="0" width="${width}" height="${height}" class="korea-chart-bg" />
      ${grid}
      ${zeroLine}
      ${axisLabels}
      ${volumeBars}
      ${priceShape}
      <line x1="${left}" x2="${width - right}" y1="${lastY}" y2="${lastY}" class="korea-last-line ${lastClass}" />
      <text x="${left}" y="${height - 4}" class="korea-chart-axis">${escapeHtml(first.label || "")}</text>
      <text x="${width - right}" y="${height - 4}" text-anchor="end" class="korea-chart-axis">${escapeHtml(last.label || "")}</text>
    </svg>
  `;
}

function postAgeMinutes(post) {
  const time = Date.parse(post.publishedAt || "");
  if (!time) return Number.POSITIVE_INFINITY;
  return Math.max(0, Math.floor((Date.now() - time) / 60000));
}

function freshnessInfo(post) {
  const age = postAgeMinutes(post);
  if (age <= 5) return { label: "5分钟内", className: "hot" };
  if (age <= 30) return { label: "30分钟内", className: "fresh" };
  if (age <= 120) return { label: "2小时内", className: "warm" };
  const published = new Date(post.publishedAt || "");
  const now = new Date();
  if (!Number.isNaN(published.getTime()) && published.toDateString() === now.toDateString()) {
    return { label: "今天", className: "today" };
  }
  return { label: "旧帖", className: "old" };
}

function isCnStock(stock) {
  return stock.market === "A股" || /[一-龥]/.test(stock.symbol);
}

function postCompanies(post) {
  const companies = new Map();
  (post.stocks || []).forEach((stock) => {
    const symbol = stock.symbol || "";
    if (!symbol) return;
    companies.set(`${symbol}|${stock.market || ""}`, {
      symbol,
      market: stock.market || "未知",
      segment: "",
      beneficiary: false,
    });
  });
  (post.coreBeneficiaries || []).forEach((item) => {
    const symbol = item.symbol || "";
    if (!symbol) return;
    const key = `${symbol}|${item.market || "A?"}`;
    companies.set(key, {
      symbol,
      market: item.market || "A?",
      segment: item.segment || "",
      beneficiary: true,
    });
  });
  return [...companies.values()];
}

function isActionableFeedPost(post) {
  if (post.ignoredAt) return false;
  if (isNonMarketNoisePost(post)) return false;
  if (post.marketRelated) return true;
  if (post.priority && post.priority !== "low") return true;
  if (postCompanies(post).length) return true;
  if (isRatingTargetPost(post)) return true;
  return false;
}

function aShareDirectionTag(post) {
  const direction = post.direction || "neutral";
  return {
    className: ["positive", "negative", "neutral"].includes(direction) ? direction : "neutral",
    label: aShareDirectionLabel[direction] || "中性",
  };
}

function isNonMarketNoisePost(post) {
  if (post.ignoredAt || post.marketRelated) return false;
  const text = [post.original, post.translation, post.analysis, (post.topics || []).join(" ")]
    .join(" ")
    .toLowerCase();
  if (
    /无财经|无股票|无需关注|无分析价值|与股票无关|与股市无关|非股市内容|暂未识别到股市|未涉及影响股票价格|未涉及.*市场动态/.test(text)
  ) {
    return true;
  }
  if (isRatingTargetPost(post) || postCompanies(post).length) return false;
  return ![
    "股票",
    "股市",
    "a股",
    "美股",
    "港股",
    "财报",
    "评级",
    "目标价",
    "半导体",
    "芯片",
    "pcb",
    "cpo",
    "光模块",
    "服务器",
    "存储",
    "内存",
    "英伟达",
    "nvidia",
    "nvda",
    "华为",
    "opec",
    "油价",
    "非农",
    "降息",
    "汇率",
    "出口",
    "供应链",
  ].some((keyword) => text.includes(keyword));
}

function isRatingTargetPost(post) {
  if (Object.prototype.hasOwnProperty.call(post, "ratingEvent")) return Boolean(post.ratingEvent);
  const haystack = [
    post.original,
    post.translation,
    post.analysis,
    post.typeLabel,
    (post.topics || []).join(" "),
  ]
    .join(" ")
    .toLowerCase();
  return [
    "评级/目标价",
    "目标价",
    "目标价格",
    "price target",
    "target price",
    "upgrade",
    "upgraded",
    "downgrade",
    "downgraded",
    "评级",
    "首次覆盖",
  ].some((term) => haystack.includes(term.toLowerCase()));
}

function ratingPosts() {
  const query = state.query.trim().toLowerCase();
  return state.posts
    .filter((post) => {
      if (!isRatingTargetPost(post)) return false;
      if (state.account !== "all" && post.accountId !== state.account) return false;
      if (!query) return true;
      const source = postSource(post);
      return [
        source.name,
        source.handle,
        post.original,
        post.analysis,
        (post.topics || []).join(" "),
        post.ratingEvent?.broker,
        post.ratingEvent?.action,
        (post.ratingEvent?.tickers || []).join(" "),
      ]
        .join(" ")
        .toLowerCase()
        .includes(query);
    })
    .sort((a, b) => (Date.parse(b.publishedAt || "") || 0) - (Date.parse(a.publishedAt || "") || 0));
}

function filteredPosts() {
  const query = state.query.trim().toLowerCase();
  const sourceScoped = state.account !== "all";
  const actionableOnlyFilters = ["fresh30"];
  return state.posts.filter((post) => {
    if (post.ignoredAt) return false;
    const source = postSource(post);
    const actionable = isActionableFeedPost(post);
    if (!sourceScoped && !query && actionableOnlyFilters.includes(state.filter) && !actionable) {
      return false;
    }
    const matchesAccount = state.account === "all" || post.accountId === state.account;
    const matchesFilter =
      state.filter === "all" ||
      (state.filter === "market" && post.marketRelated) ||
      (state.filter === "fresh30" && (sourceScoped || actionable) && postAgeMinutes(post) <= 30) ||
      (state.filter === "rating" && isRatingTargetPost(post)) ||
      (state.filter === "unmatched" && post.marketRelated && !postCompanies(post).length) ||
      (state.filter === "high" && post.priority === "high") ||
      post.type === state.filter;
    const haystack = [
      source.name,
      source.handle,
      post.original,
      post.translation,
      post.analysis,
      post.typeLabel,
      post.stocks.map((stock) => stock.symbol).join(" "),
      post.topics.join(" "),
      (post.media || []).map((item) => [item.type, item.url, item.altText].join(" ")).join(" "),
      (post.coreBeneficiaries || [])
        .map((item) => [item.symbol, item.market, item.segment, item.reason, item.confidence].join(" "))
        .join(" "),
    ]
      .join(" ")
      .toLowerCase();
    return matchesAccount && matchesFilter && (!query || haystack.includes(query));
  });
}

function postInAShareWindow(post) {
  const publishedMs = Date.parse(post.publishedAt || post.collectedAt || "");
  if (!publishedMs) return false;
  const cutoff = Date.now() - state.aShareWindowHours * 60 * 60 * 1000;
  return publishedMs >= cutoff;
}

function aShareWindowPosts() {
  return (state.mapPosts || state.posts)
    .filter((post) => !post.ignoredAt)
    .filter(isActionableFeedPost)
    .filter(postInAShareWindow);
}

function statusItemsFromConfig() {
  return [
    ["本地接口", state.config.collector],
    ["SQLite 数据库", state.config.database],
    ["通用 JSON 源", state.config.customJson],
    ["X 本地桥接", state.config.xLocalBridge],
    ["X 静默采集", state.config.xCollector],
    ["bb-browser 多渠道", state.config.bbBrowser],
    ["NewsNow 新闻源", state.config.newsNow],
    ["DeepSeek API", state.config.deepseek],
    ["实时推送", state.config.push],
  ];
}

function renderKoreaMarket() {
  const market = state.koreaMarket || fallbackKoreaMarket;
  const instruments = market.instruments || [];
  const list = $("#korea-instrument-list");
  if (!list) return;

  if (instruments.length && !instruments.some((item) => item.symbol === state.koreaActive)) {
    state.koreaActive = instruments[0].symbol;
  }

  const selected = instruments.find((item) => item.symbol === state.koreaActive) || instruments[0];
  $("#korea-market-state").textContent = market.value || (market.state === "ready" ? "延迟行情" : "等待行情");
  $("#korea-market-state").className = `korea-market-state ${escapeHtml(market.state || "waiting")}`;

  $("#korea-mode-tabs")
    .querySelectorAll("[data-korea-mode]")
    .forEach((button) => {
      button.classList.toggle("active", button.dataset.koreaMode === state.koreaMode);
    });

  if (!instruments.length) {
    const placeholders = [
      ["KOSPI", "韩国指数"],
      ["三星电子", "005930.KS"],
      ["SK海力士", "000660.KS"],
    ];
    list.innerHTML = placeholders
      .map(
        ([name, label]) => `
          <div class="korea-instrument placeholder">
            <span class="korea-instrument-name">
              <strong>${escapeHtml(name)}</strong>
              <small>${escapeHtml(label)}</small>
            </span>
            <span class="korea-instrument-price">
              <b>--</b>
              <em>等待行情</em>
            </span>
            <span class="korea-mini-empty">--</span>
          </div>
        `,
      )
      .join("");
    $("#korea-chart-title").textContent = "等待行情";
    $("#korea-chart-meta").textContent = market.value || "韩国指数、三星电子、SK海力士";
    $("#korea-chart").innerHTML = `<span>等待行情</span><span class="korea-mini-empty">等待接口</span>`;
    return;
  }

  list.innerHTML = instruments
    .slice(0, 3)
    .map((item) => {
      const moveClass = koreaMoveClass(item.change);
      const isActive = item.symbol === state.koreaActive;
      const decimals = item.decimals ?? 2;
      return `
        <button class="korea-instrument ${moveClass} ${isActive ? "active" : ""}" type="button" data-korea-symbol="${escapeHtml(item.symbol)}">
          <span class="korea-instrument-name">
            <strong>${escapeHtml(item.name || item.symbol)}</strong>
            <small>${escapeHtml(item.label || item.symbol)}</small>
          </span>
          <span class="korea-instrument-price">
            <b>${formatKoreaPrice(item.lastPrice, decimals)}</b>
            <em>${formatKoreaChange(item.change, item.changePercent)}</em>
          </span>
          ${renderKoreaMiniSparkline(item)}
        </button>
      `;
    })
    .join("");

  if (!selected) return;
  const modeName = state.koreaMode === "candles" ? "K线" : "分时";
  const decimals = selected.decimals ?? 2;
  const updated = selected.marketTime ? `更新 ${formatFullTime(selected.marketTime)}` : market.updatedAt ? `更新 ${formatFullTime(market.updatedAt)}` : "等待更新";
  $("#korea-chart-title").textContent = `${selected.name || selected.symbol} ? ${modeName}`;
  $("#korea-chart-meta").textContent = `${formatKoreaPrice(selected.lastPrice, decimals)} · ${formatKoreaChange(selected.change, selected.changePercent)} · 量能 ${formatKoreaVolume(selected.volume)} · ${updated}`;
  $("#korea-chart-title").textContent = `${selected.name || selected.symbol} · ${koreaModeLabel(state.koreaMode)}`;
  $("#korea-chart-meta").textContent = `${formatKoreaPrice(selected.lastPrice, decimals)} · ${formatKoreaChange(selected.change, selected.changePercent)} · 量能 ${formatKoreaVolume(selected.volume)} · ${updated}`;
  $("#korea-chart").innerHTML = `
    <div class="korea-chart-quote ${koreaMoveClass(selected.change)}">
      <strong>${formatKoreaPrice(selected.lastPrice, decimals)}</strong>
      <span>${formatKoreaChange(selected.change, selected.changePercent)}</span>
      <em>量能 ${formatKoreaVolume(selected.volume)}</em>
    </div>
    <span>查看详情</span>
    ${renderKoreaChartSvg(selected, state.koreaMode)}
  `;
}

function renderMemorySpot() {
  const spot = state.memorySpot || fallbackMemorySpot;
  const list = $("#memory-spot-list");
  if (!list) return;
  const items = (spot.items || []).filter((item) => String(item.sourceKey || item.source || "").toLowerCase().includes("jd") || String(item.source || "").includes("京东"));
  const readyItems = items.filter((item) => item.price !== null && item.price !== undefined);
  const historyCount = items.reduce((total, item) => total + spotHistory(item).length, 0);
  const stateLabel =
    spot.state === "ready" || readyItems.length || historyCount
      ? `京东 ${items.length} 个规格 · ${readyItems.length} 个有价 · ${historyCount} 条记录`
      : spot.provider || "等待接入";
  $("#memory-spot-state").textContent = stateLabel;
  $("#memory-spot-state").className = `memory-spot-state ${escapeHtml(spot.state || "waiting")}`;

  if (!items.length) {
    list.innerHTML = `<div class="empty-state">${escapeHtml(spot.note || "等待 DDR5 6000 C28 价格数据")}</div>`;
    const summary = $("#memory-spot-summary");
    if (summary) summary.textContent = spot.note || "等待价格趋势总结";
    return;
  }

  list.innerHTML = items
    .map((item) => {
      const meta = memoryKitMeta(item);
      const history = spotHistory(item);
      const latest = latestSpotRecord(item);
      const price = item.price ?? latest?.price;
      const changePct = item.changePct ?? latest?.changePct;
      const moveClass = spotMoveClass({ ...item, changePct });
      const hasPrice = price !== null && price !== undefined;
      const sourceUrl = item.sourceUrl || spot.sourceUrl || "";
      const source = sourceUrl
        ? `<a href="${escapeHtml(sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(item.source || spot.provider || "京东")}</a>`
        : escapeHtml(item.source || spot.provider || "等待接入");
      const displayNote = memorySpotNote(item, latest);
      const latestNote = isTechnicalMemoryNote(latest?.note) ? "" : latest?.note || "";
      const statusText = item.status || (hasPrice ? "已采集" : "待采集");
      const statusClass = statusText.includes("无货") || statusText.includes("缺货")
        ? "out"
        : statusText.includes("有货")
          ? "live"
          : statusText.includes("手动")
            ? "manual"
          : statusText.includes("暂不可用")
            ? "paused"
            : statusText.includes("待")
              ? "waiting"
              : "ready";
      const canCalibrate = String(item.source || "").includes("京东");
      const recent = history.slice(0, 7);
      const trendBlock = recent.length
        ? `
          <div class="memory-spot-trend">
            ${renderSpotSparkline(recent)}
          </div>
        `
        : `<div class="memory-spot-emptyline">无数据</div>`;
      return `
        <article class="memory-spot-row ${moveClass} ${hasPrice ? "ready" : "waiting"}">
          <div class="memory-spot-main">
            <div class="memory-spot-tags">
              <span>${escapeHtml(`${meta.kit.replace(" 套装", "")} ${meta.module.replace("GB x2", "Gx2")}`)}</span>
            </div>
            <strong title="${escapeHtml(item.name || "未命名套装")}">${escapeHtml(meta.module)}</strong>
          </div>
          <div class="memory-kit-specs">
            <span>${escapeHtml(meta.type)}</span>
            <span>${escapeHtml(meta.speed)}</span>
            <span>${escapeHtml(meta.latency)}</span>
          </div>
          <div class="memory-spot-price">
            <b>${formatSpotPrice(price, item.unit || "CNY")}</b>
            <em>${formatSpotChange(changePct)}</em>
          </div>
          ${trendBlock}
          <div class="memory-stock-state">
            <mark class="${escapeHtml(statusClass)}">${escapeHtml(statusText)}</mark>
          </div>
          <div class="memory-spot-actions">
            ${
              canCalibrate
                ? `<button class="memory-price-calibrate" type="button" data-memory-price-id="${escapeHtml(item.id || "")}" data-memory-price-name="${escapeHtml(item.name || "内存套装")}">校准</button>`
                : `<span class="memory-price-calibrate disabled">待采集</span>`
            }
          </div>
          <div class="memory-spot-source">
            <span>${source}</span>
            <small>SKU ${escapeHtml(meta.sku)}</small>
            <small>${escapeHtml(latest?.date || item.updatedAt || spot.updatedAt || item.status || "等待接入")}</small>
            ${displayNote ? `<small title="${escapeHtml(displayNote)}">${escapeHtml(displayNote)}</small>` : ""}
            ${latestNote ? `<small title="${escapeHtml(latestNote)}">${escapeHtml(latestNote)}</small>` : ""}
          </div>
        </article>
      `;
    })
    .join("");

  const priced = readyItems.length;
  const missing = Math.max(items.length - priced, 0);
  const summary = $("#memory-spot-summary");
  if (summary) {
    summary.textContent = priced
      ? `京东 ${priced} 个规格有价格，${missing} 个规格待采集`
      : "等待京东套装价格接入";
  }
}

function renderMarketSummary() {
  const quoteBox = $("#market-summary-quotes");
  const memoryBox = $("#market-summary-memory");
  if (quoteBox) {
    const instruments = (state.koreaMarket?.instruments || []).slice(0, 3);
    quoteBox.innerHTML = instruments.length
      ? instruments
          .map((item) => {
            const moveClass = koreaMoveClass(item.change);
            return `
              <div class="${moveClass}">
                <span>${escapeHtml(item.name || item.symbol || "韩国行情")}</span>
                <strong>${formatKoreaPrice(item.lastPrice, item.decimals ?? 2)}</strong>
                <small>${formatKoreaChange(item.change, item.changePercent)}</small>
              </div>
            `;
          })
          .join("")
      : `
          <div><span>KOSPI</span><strong>--</strong><small>等待行情</small></div>
          <div><span>三星电子</span><strong>--</strong><small>等待行情</small></div>
          <div><span>SK海力士</span><strong>--</strong><small>等待行情</small></div>
        `;
  }

  if (memoryBox) {
    const items = (state.memorySpot?.items || []).filter(
      (item) => String(item.sourceKey || item.source || "").toLowerCase().includes("jd") || String(item.source || "").includes("京东"),
    );
    const preferred = items.find((item) => /24Gx2|48GB/i.test(String(item.name || ""))) || items.find((item) => item.price != null) || items[0];
    const latest = preferred ? latestSpotRecord(preferred) : null;
    const price = preferred?.price ?? latest?.price;
    memoryBox.innerHTML = `
      <span>DDR5 6000 C28</span>
      <strong>${preferred ? `${escapeHtml(memoryKitMeta(preferred).kit)} ${formatSpotPrice(price, preferred.unit || "CNY")}` : "等待价格"}</strong>
      <small>${items.length ? `京东 ${items.length} 个规格` : "京东三规格"}</small>
    `;
  }
}

function renderConnectionStatus() {
  $("#connection-mode").textContent = state.apiAvailable ? "本地已连接" : "静态回退";
  $("#connection-status").innerHTML = statusItemsFromConfig()
    .map(
      ([name, item]) => `
        <div class="status-item">
          <span class="status-dot ${escapeHtml(item?.state || "offline")}"></span>
          <span class="status-name">${escapeHtml(name)}</span>
          <strong>${escapeHtml(item?.value || "--")}</strong>
        </div>
      `,
    )
    .join("");

  $("#api-state").textContent = state.apiAvailable ? "本地接口已连接" : "请启动本地服务后使用";
  $("#banner-title").textContent = state.apiAvailable ? "本地接口模式" : "静态回退模式";
  $("#banner-copy").textContent = state.apiAvailable
    ? "本地接口已连接，页面从 SQLite 读取数据；支持 X 本地桥接、bb-browser、Webhook 或 JSON 源推送。"
    : "当前使用静态回退数据。请启动 server.py 后接入真实 API 与 SQLite 数据。";
}

function renderCollectorControl() {
  const control = $("#x-collector-control");
  if (!control) return;
  const collector = state.config.xCollector || fallbackConfig.xCollector;
  const running = Boolean(collector.running);
  const stateName = collector.state || (running ? "ready" : "offline");
  control.classList.toggle("is-running", running);
  control.classList.toggle("is-waiting", stateName === "waiting");
  control.classList.toggle("is-offline", !running && stateName !== "waiting");
  $("#x-collector-state").textContent = running ? "静默采集中" : stateName === "waiting" ? "采集器待命" : "静默采集未启动";
  $("#x-collector-detail").textContent = collector.value || "不会自动打开前台 X 页面，不会自动刷新你的浏览器。";
  const start = $("#x-collector-start");
  const stop = $("#x-collector-stop");
  if (start) start.disabled = running || !state.apiAvailable;
  if (stop) stop.disabled = !running || !state.apiAvailable;
  renderSettingsCenter();
}

function renderNewsNowControl() {
  const control = $("#newsnow-control");
  if (!control) return;
  const collector = state.config.newsNow || fallbackConfig.newsNow;
  const running = Boolean(collector.running);
  const stateNode = $("#newsnow-state");
  const start = $("#newsnow-start");
  const stop = $("#newsnow-stop");
  control.classList.toggle("is-running", running);
  control.classList.toggle("is-offline", !running);
  if (stateNode) {
    stateNode.textContent = running ? `NewsNow 运行中 · ${collector.value || ""}` : `NewsNow ${collector.value || "未启动"}`;
  }
  if (start) start.disabled = running || !state.apiAvailable;
  if (stop) stop.disabled = !running || !state.apiAvailable;
  renderSettingsCenter();
}

function renderGroups() {
  const groups = new Map();
  state.accounts.forEach((account) => {
    groups.set(account.group, (groups.get(account.group) || 0) + 1);
  });
  $("#group-list").innerHTML = [...groups.entries()]
    .map(
      ([name, count]) => `
        <div class="group-item">
          <span>${escapeHtml(name)}</span>
          <strong>${count}</strong>
        </div>
      `,
    )
    .join("");
}

function visibleSourceAccounts() {
  if (state.sourceView === "all") return state.accounts;
  if (state.sourceView === "x") {
    return state.accounts.filter((account) => account.id.startsWith("x-"));
  }
  return state.accounts.filter((account) => account.active24h || account.id === state.account);
}

function renderAccounts() {
  const visibleAccounts = visibleSourceAccounts();
  const activeCount = state.accounts.filter((account) => account.active24h).length;
  const xCount = state.accounts.filter((account) => account.id.startsWith("x-")).length;
  document.querySelectorAll("#source-view-tabs [data-source-view]").forEach((button) => {
    const view = button.dataset.sourceView;
    button.classList.toggle("active", view === state.sourceView);
    button.textContent =
      view === "active"
        ? `24h ${activeCount}`
        : view === "x"
          ? `X监控 ${xCount}`
          : `全部 ${state.accounts.length}`;
  });
  if (!visibleAccounts.length) {
    $("#account-list").innerHTML = `<div class="source-list-empty">最近 24 小时没有采集到博主新帖，可切换“全部”查看保留信源。</div>`;
    return;
  }
  $("#account-list").innerHTML = visibleAccounts
    .map((account, index) => {
      const isFirst = index === 0;
      const isLast = index === visibleAccounts.length - 1;
      const activityLabel = account.active24h ? `24h ${Number(account.posts24h || 0)} 条` : "24h 无新帖";
      return `
        <div class="account-row ${state.account === account.id ? "active" : ""}" draggable="true" data-source-row="${escapeHtml(account.id)}" data-source-index="${index}">
          <button class="account-select" type="button" data-account="${escapeHtml(account.id)}">
            <span class="account-main">
              ${renderAvatar(account)}
              <span class="account-text">
                <span class="account-name">${escapeHtml(account.name)}</span>
                <span class="account-meta">${escapeHtml(account.handle)}</span>
                <span class="account-group ${account.active24h ? "active" : "idle"}">${escapeHtml(activityLabel)}</span>
              </span>
            </span>
            <span class="account-badge ${escapeHtml(account.badgeClass)}">${escapeHtml(account.status)}</span>
          </button>
          <span class="account-actions">
            <button class="account-backfill" type="button" data-backfill-account="${escapeHtml(account.id)}" title="补采该博主">补采</button>
          </span>
        </div>
      `;
    })
    .join("");
}

function renderMetrics() {
  const activePosts = state.posts.filter(isActionableFeedPost);
  $("#metric-sources").textContent = state.accounts.length;
  $("#metric-market").textContent = state.posts.filter((post) => post.marketRelated).length;
  $("#metric-unmatched").textContent = activePosts.filter((post) => post.marketRelated && !postCompanies(post).length).length;
  $("#metric-high").textContent = activePosts.filter((post) => post.priority === "high").length;
  const bottomSignalCount = $("#bottom-signal-count");
  if (bottomSignalCount) bottomSignalCount.textContent = String(activePosts.length);
}

function renderOverviewActionCards() {
  const setCard = (id, stateName, value, meta) => {
    const card = $(`#${id}`);
    if (!card) return;
    card.dataset.state = stateName || "waiting";
    card.querySelector("strong")?.replaceChildren(value || "--");
    card.querySelector("small")?.replaceChildren(meta || "等待数据");
  };

  const posts = sortPosts((state.posts || []).filter((post) => !post.ignoredAt));
  const latest = posts[0];
  const activeCount = (state.posts || []).filter(isActionableFeedPost).length;
  setCard(
    "overview-action-latest",
    latest ? "ready" : "waiting",
    latest?.timeLabel || formatFullTime(latest?.publishedAt || latest?.collectedAt) || "--",
    latest ? `已加载 ${state.posts.length} 条 · 可研判 ${activeCount} 条` : "等待消息接入",
  );

  const context = state.benefitMarketContext || fallbackBenefitMarketContext;
  const themes = Array.isArray(context.themes) ? context.themes.filter((theme) => theme?.name) : [];
  const topTheme = [...themes].sort((left, right) => {
    const scoreLeft = Number(left.strengthScore);
    const scoreRight = Number(right.strengthScore);
    const scoreGap = (Number.isFinite(scoreRight) ? scoreRight : -Infinity) - (Number.isFinite(scoreLeft) ? scoreLeft : -Infinity);
    return scoreGap || Number(right.mainNetYuan || 0) - Number(left.mainNetYuan || 0);
  })[0];
  const themeChange = topTheme && Number.isFinite(Number(topTheme.averageChangePct))
    ? `${Number(topTheme.averageChangePct) > 0 ? "+" : ""}${Number(topTheme.averageChangePct).toFixed(2)}%`
    : "涨幅待确认";
  const themeDate = context.dataFreshness?.tradingDate || context.tradingDate || "";
  const themeFreshness = context.state === "offline" ? "行情接口不可用" : themeDate ? `截至 ${themeDate}` : "等待行情确认";
  setCard(
    "overview-action-theme",
    topTheme ? (context.dataFreshness?.state === "stale" || context.state === "stale" ? "stale" : "ready") : "waiting",
    topTheme?.name || "--",
    topTheme ? `${formatSectorFlowMoney(topTheme.mainNetYuan)} · ${themeChange} · ${themeFreshness}` : "等待题材数据",
  );

  const popularity = state.eastmoneyRank?.items?.[0];
  const popularityTime = formatFullTime(popularity?.sourceUpdatedAt || popularity?.capturedAt);
  const popularityChange = Number(popularity?.changePercent);
  const popularityMove = Number.isFinite(popularityChange)
    ? `${popularityChange > 0 ? "+" : ""}${popularityChange.toFixed(2)}%`
    : "涨幅待确认";
  setCard(
    "overview-action-popularity",
    popularity ? "ready" : "waiting",
    popularity?.stockName || "--",
    popularity ? `${popularity.stockCode || "--"} · ${popularityMove}${popularityTime ? ` · ${popularityTime}` : ""}` : "等待人气榜",
  );

  const config = state.config || fallbackConfig;
  const collectorRunning = Boolean(config.xCollector?.running);
  const newsRunning = Boolean(config.newsNow?.running);
  const runningCount = Number(collectorRunning) + Number(newsRunning);
  setCard(
    "overview-action-health",
    state.apiAvailable ? "ready" : "waiting",
    state.apiAvailable ? "本地已连接" : "等待接口",
    state.apiAvailable ? `采集器 ${runningCount}/2 · SQLite 可读` : "服务未连接，显示回退数据",
  );
}

function renderAiStatus() {
  const deepseek = state.config.deepseek || fallbackConfig.deepseek;
  const configured = Boolean(deepseek.configured || deepseek.state === "ready");
  const enabled = Boolean(deepseek.enabled || deepseek.state === "ready");
  $("#ai-status-text")?.replaceChildren(document.createTextNode(enabled ? `已启用 ${deepseek.value}` : configured ? "API 已配置，待开启" : "本地规则可用"));
  $("#ai-readiness")?.replaceChildren(document.createTextNode(enabled ? "模型分析已开启" : "本地规则分析中"));
  const toggle = $("#deepseek-toggle");
  if (toggle) {
    toggle.textContent = enabled ? "关闭" : "开启";
    toggle.disabled = !configured;
  }
}

function renderFilters() {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === state.filter);
  });
  const active = state.account === "all" ? null : accountById(state.account);
  $("#active-source-name").textContent = active ? `${active.name} · ${active.handle}` : "全部信源";
  renderBackfillLock();
}

function lockedBackfillAccount() {
  if (state.account === "all") return null;
  const account = accountById(state.account);
  if (!account?.handle || !account.handle.startsWith("@")) return null;
  return account;
}

function renderBackfillLock() {
  const form = $("#x-backfill-form");
  const input = $("#backfill-user");
  const label = $("#backfill-lock-label");
  const submit = $("#backfill-submit");
  if (!form || !input || !label || !submit) return;
  const account = lockedBackfillAccount();
  const previousLockedValue = input.dataset.lockedValue || "";
  if (account) {
    input.value = account.handle;
    input.readOnly = true;
    input.dataset.lockedValue = account.handle;
    label.textContent = `已锁定：${account.name} · ${account.handle}`;
    submit.textContent = "补采当前博主";
    return;
  }
  if (previousLockedValue && input.value === previousLockedValue) {
    input.value = "";
  }
  input.readOnly = false;
  input.dataset.lockedValue = "";
  label.textContent = "未锁定博主，可手动输入账号";
  submit.textContent = "开始补采";
}

function resetFeedLimit() {
  state.feedVisibleLimit = FEED_PAGE_SIZE;
}

function renderFeed() {
  const items = filteredPosts();
  if (!items.length) {
    const activeFilter = document.querySelector(`[data-filter="${CSS.escape(state.filter)}"]`);
    const filterLabel = activeFilter?.textContent?.trim() || "当前筛选";
    const hasLoadedPosts = state.posts.some((post) => !post.ignoredAt);
    $("#feed-list").innerHTML = `<div class="empty-state">${
      hasLoadedPosts
        ? `“${escapeHtml(filterLabel)}”暂时没有匹配消息，请切换其他筛选查看已加载内容。`
        : "尚未采集到消息。接入数据源后，消息会自动进入这里。"
    }</div>`;
    return;
  }
  const visibleCount = Math.min(state.feedVisibleLimit || FEED_PAGE_SIZE, items.length);
  const visibleItems = items.slice(0, visibleCount);
  const remaining = items.length - visibleCount;
  $("#feed-list").innerHTML = `
    ${visibleItems.map(renderPostCard).join("")}
    <div class="feed-pagination">
      <span>已显示 ${visibleCount} / ${items.length} 条</span>
      ${remaining > 0 ? `<button id="feed-load-more" type="button">继续加载 ${Math.min(FEED_PAGE_SIZE, remaining)} 条</button>` : `<strong>已显示全部</strong>`}
    </div>
  `;
}

function renderMediaGrid(media) {
  const items = media || [];
  if (!items.length) return "";
  return `
    <div class="post-media-grid">
      ${items
        .map((item) => {
          const type = item.type || "image";
          const preview = item.previewUrl || item.url || "";
          const url = item.url || preview;
          const label = type === "video" ? "视频" : type === "gif" ? "GIF" : "图片";
          const image = preview
            ? `<img src="${escapeHtml(preview)}" alt="${escapeHtml(item.altText || label)}" loading="lazy" referrerpolicy="no-referrer" />`
            : `<span class="media-placeholder">${escapeHtml(label)}</span>`;
          if (type === "image" || type === "gif") {
            return `
              <button class="media-item media-preview-trigger ${escapeHtml(type)}" type="button" data-media-url="${escapeHtml(url)}" data-media-label="${escapeHtml(item.altText || label)}">
                ${image}
                <span>${escapeHtml(label)}</span>
              </button>
            `;
          }
          return `
            <a class="media-item ${escapeHtml(type)}" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">
              ${image}
              <span>${escapeHtml(label)}</span>
            </a>
          `;
        })
        .join("")}
    </div>
  `;
}

function ensureMediaLightbox() {
  let lightbox = $("#media-lightbox");
  if (lightbox) return lightbox;
  lightbox = document.createElement("div");
  lightbox.id = "media-lightbox";
  lightbox.className = "media-lightbox";
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.innerHTML = `
    <button class="media-lightbox__backdrop" type="button" data-media-lightbox-close aria-label="关闭预览"></button>
    <figure class="media-lightbox__frame" role="dialog" aria-modal="true" aria-label="图片预览">
      <button class="media-lightbox__close" type="button" data-media-lightbox-close aria-label="关闭">Esc</button>
      <img class="media-lightbox__image" alt="" referrerpolicy="no-referrer" />
      <figcaption class="media-lightbox__caption"></figcaption>
    </figure>
  `;
  document.body.appendChild(lightbox);
  return lightbox;
}

function openMediaLightbox(url, label) {
  if (!url) return;
  const lightbox = ensureMediaLightbox();
  const image = lightbox.querySelector(".media-lightbox__image");
  const caption = lightbox.querySelector(".media-lightbox__caption");
  image.src = url;
  image.alt = label || "media";
  caption.textContent = label || "";
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("media-lightbox-open");
}

function closeMediaLightbox() {
  const lightbox = $("#media-lightbox");
  if (!lightbox) return;
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("media-lightbox-open");
  const image = lightbox.querySelector(".media-lightbox__image");
  if (image) image.removeAttribute("src");
}

function openPostDetail(card) {
  if (!card) return;
  const layer = $("#post-detail-layer");
  const content = $("#post-detail-content");
  const title = $("#post-detail-title");
  if (!layer || !content || !title) return;

  const clone = card.cloneNode(true);
  const sourceName = clone.querySelector(".post-author strong")?.textContent?.trim() || "完整消息";
  title.textContent = `${sourceName} · 完整消息`;
  clone.classList.add("post-detail-card");
  clone.removeAttribute("data-post-id");
  clone.querySelectorAll(".post-actions").forEach((node) => node.remove());
  clone.querySelectorAll(".expandable-text").forEach((node) => {
    node.classList.remove("is-collapsed");
    node.classList.add("expanded");
  });
  clone.querySelectorAll("[data-expand-text]").forEach((node) => node.remove());
  content.replaceChildren(clone);
  layer.hidden = false;
  layer.classList.add("open");
  layer.setAttribute("aria-hidden", "false");
  document.body.classList.add("post-detail-open");
  window.requestAnimationFrame(() => layer.querySelector(".post-detail-close")?.focus());
}

function closePostDetail() {
  const layer = $("#post-detail-layer");
  if (!layer || layer.hidden) return false;
  layer.classList.remove("open");
  layer.setAttribute("aria-hidden", "true");
  layer.hidden = true;
  $("#post-detail-content")?.replaceChildren();
  document.body.classList.remove("post-detail-open");
  return true;
}

function renderPostCard(post) {
  const source = postSource(post);
  const beneficiaries = post.coreBeneficiaries || [];
  const stocks = post.stocks || [];
  const mediaGrid = renderMediaGrid(post.media);
  const translationBlock = postTranslationBlock(post);
  const publishedTitle = formatFullTime(post.publishedAt);
  const collectedTitle = formatFullTime(post.collectedAt);
  const timeTitle = [publishedTitle ? `发帖：${publishedTitle}` : "", collectedTitle ? `采集：${collectedTitle}` : ""]
    .filter(Boolean)
    .join(" · ");
  const freshness = freshnessInfo(post);
  const usStocks = stocks.filter((stock) => !isCnStock(stock)).slice(0, 4);
  const cnCandidates = beneficiaries.length
    ? beneficiaries.slice(0, 4)
    : stocks
        .filter(isCnStock)
        .slice(0, 4)
        .map((stock) => ({
          symbol: stock.symbol,
          market: stock.market,
          segment: stock.segment || post.topics?.[0] || "未分类",
          confidence: "待确认",
        }));
  const usStockTags = usStocks.length
    ? usStocks.map((stock) => `<span>${escapeHtml(stock.symbol)} · ${escapeHtml(stock.market)}</span>`).join("")
    : `<span>未命中美股</span>`;
  const aShareDirection = aShareDirectionTag(post);
  const aShareTags = cnCandidates.length
    ? cnCandidates
        .map(
          (item) =>
            `<span class="a-share-direction-tag ${escapeHtml(aShareDirection.className)}"><b>${escapeHtml(aShareDirection.label)}</b>${escapeHtml(item.symbol)} · ${escapeHtml(item.segment || item.market || "A股")}</span>`,
        )
        .join("")
    : `<span>待映射</span>`;
  const topicTags = (post.topics || []).slice(0, 5).map((topic) => `<span class="tag">${escapeHtml(topic)}</span>`).join("");
  const displayMarketRelated = isActionableFeedPost(post);
  const signalTitle = post.topics?.[0] || post.ratingEvent?.action || (displayMarketRelated ? "市场信号" : "非股市内容");
  const signalBrief = post.analysis || post.translation || post.original;
  const confidence = beneficiaries.find((item) => item.confidence)?.confidence || (post.priority === "high" ? "高可信" : displayMarketRelated ? "待确认" : "低相关");
  return `
    <article class="post-card signal-card ${escapeHtml(post.priority)}${post.readAt ? " is-read" : ""}${post.mappedAt ? " is-mapped" : ""}${post.researchAt ? " is-researched" : ""}" data-post-id="${escapeHtml(post.id)}">
      <div class="post-top">
        <div class="post-author">
          ${renderAvatar(source)}
          <span>
            <strong>${escapeHtml(source.name)}</strong>
            <span class="post-meta" title="${escapeHtml(timeTitle)}">${escapeHtml(source.handle)} · 发帖 ${escapeHtml(post.time)}</span>
          </span>
        </div>
        <div class="post-badges">
          <span class="freshness-badge ${escapeHtml(freshness.className)}">${escapeHtml(freshness.label)}</span>
          <span class="post-type">${escapeHtml(post.typeLabel)}</span>
          <span class="priority-badge ${escapeHtml(post.priority)}">${escapeHtml(priorityLabel[post.priority] || post.priority)}</span>
          <span class="market-badge ${displayMarketRelated ? "yes" : "no"}">${displayMarketRelated ? "市场相关" : "非股市内容"}</span>
        </div>
      </div>
      ${renderOriginalBlock(post)}
      ${translationBlock}
      ${mediaGrid}
      <section class="signal-extract-grid" aria-label="AI 提取信号">
        <div class="signal-extract-main">
          <span>AI 提取信号</span>
          <strong>${escapeHtml(signalTitle)}</strong>
          ${renderExpandableText(signalBrief, "signal-brief", 120, "分析")}
        </div>
        <div>
          <span>关联美股</span>
          <div class="extract-tags">${usStockTags}</div>
        </div>
        <div>
          <span>A股方向</span>
          <div class="extract-tags a-share">${aShareTags}</div>
        </div>
        <div>
          <span>优先级 / 置信度</span>
          <div class="extract-tags">
            <span>${escapeHtml(priorityLabel[post.priority] || post.priority)}</span>
            <span>${escapeHtml(confidence)}</span>
          </div>
        </div>
      </section>
      <div class="post-footer">
        <div class="tag-row">
          ${topicTags}
        </div>
        <div class="post-actions">
          <button type="button" data-post-action="map" data-post-id="${escapeHtml(post.id)}" ${post.mappedAt ? "disabled" : ""}>${post.mappedAt ? "已映射" : "加入映射"}</button>
          <button type="button" data-post-action="research" data-post-id="${escapeHtml(post.id)}" ${post.researchAt ? "disabled" : ""}>${post.researchAt ? "已研判" : "生成研判"}</button>
          <button type="button" data-post-action="read" data-post-id="${escapeHtml(post.id)}" ${post.readAt ? "disabled" : ""}>${post.readAt ? "已读" : "标记已读"}</button>
          <button type="button" data-post-action="ignore" data-post-id="${escapeHtml(post.id)}">忽略</button>
        </div>
        <div class="post-stats">
          <span>转发 ${Number(post.stats?.reposts || 0)}</span>
          <span>点赞 ${Number(post.stats?.likes || 0)}</span>
          <span>回复 ${Number(post.stats?.replies || 0)}</span>
        </div>
      </div>
    </article>
  `;
}

const benefitThemeAliasRules = {
  CPO: ["cpo", "光模块", "光通信", "硅光", "800g", "1.6t", "光芯片", "激光器"],
  PCB: ["pcb", "印制电路", "高多层板", "服务器板", "覆铜板", "铜箔"],
  存储: ["存储", "存储芯片", "dram", "nand", "hbm", "ddr", "内存", "企业级ssd"],
  高速连接: ["高速连接", "连接器", "铜连接", "dac", "高速线缆", "背板连接"],
  国产半导体: ["国产半导体", "国产芯片", "ai芯片", "gpu", "cpu", "自主芯片"],
  封测: ["封测", "先进封装", "chiplet", "cowos", "封装测试"],
  AI服务器: ["ai服务器", "服务器", "算力服务器", "整机柜", "液冷服务器"],
  半导体设备: ["半导体设备", "晶圆设备", "光刻机", "刻蚀", "薄膜沉积", "检测设备"],
  半导体材料: ["半导体材料", "光刻胶", "靶材", "电子特气", "硅片", "抛光液"],
  算力租赁: ["算力租赁", "算力服务", "智算中心", "算力调度", "云计算"],
  游戏: ["游戏", "版号", "手游", "端游", "游戏出海"],
  AI应用: ["ai应用", "人工智能应用", "智能体", "agent", "大模型应用", "ai软件"],
  机器人: ["机器人", "人形机器人", "执行器", "减速器", "丝杠", "灵巧手"],
};

function normalizeBenefitText(value) {
  return String(value || "").toLowerCase().replace(/\s+/g, "");
}

function normalizeBenefitStockCode(value) {
  const match = String(value || "").match(/\d{6}/);
  return match ? match[0] : "";
}

function benefitPostText(post) {
  return normalizeBenefitText([
    ...(post.topics || []),
    post.original,
    post.translation,
    post.analysis,
    ...(post.coreBeneficiaries || []).flatMap((item) => [item.segment, item.reason]),
  ].filter(Boolean).join(" "));
}

function benefitAliases(themeName) {
  return [...new Set([themeName, ...(benefitThemeAliasRules[themeName] || [])].map(normalizeBenefitText).filter(Boolean))]
    .sort((left, right) => right.length - left.length);
}

function benefitEventFingerprint(post) {
  return normalizeBenefitText(post.original || post.translation || post.analysis || post.externalId || post.id)
    .replace(/[^a-z0-9\u4e00-\u9fff]/g, "")
    .slice(0, 180);
}

function benefitThemePosts(theme, posts) {
  const aliases = benefitAliases(theme.name);
  const seen = new Set();
  return posts
    .filter((post) => post.marketRelated && post.direction !== "negative")
    .filter((post) => aliases.some((alias) => benefitPostText(post).includes(alias)))
    .filter((post) => {
      const key = benefitEventFingerprint(post);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((left, right) => (Date.parse(right.publishedAt || "") || 0) - (Date.parse(left.publishedAt || "") || 0));
}

function benefitScoreTheme(theme, posts, stockIndex, contextFresh) {
  const sourceNames = new Set(posts.map((post) => {
    const source = postSource(post);
    return source.handle || source.name || post.sourceId;
  }).filter(Boolean));
  const directCodes = new Set();
  posts.forEach((post) => {
    const candidates = (post.coreBeneficiaries || []).length ? post.coreBeneficiaries : (post.stocks || []);
    candidates.filter(isCnStock).forEach((item) => {
      const code = normalizeBenefitStockCode(item.symbol);
      if (code) directCodes.add(code);
    });
  });
  const directStocks = [...directCodes].map((code) => stockIndex.get(code)).filter(Boolean);
  const marketStocks = (theme.topStocks || []).map((item) => stockIndex.get(String(item.code || "")) || item).filter(Boolean);
  const selectedStocks = (directStocks.length ? directStocks : marketStocks).slice().sort((left, right) => {
    const leftFlow = Number(left.inflow30mYuan ?? left.mainNetYuan ?? 0);
    const rightFlow = Number(right.inflow30mYuan ?? right.mainNetYuan ?? 0);
    return rightFlow - leftFlow || Number(right.changePct || 0) - Number(left.changePct || 0);
  }).slice(0, 3);

  const highestPriority = posts.some((post) => post.priority === "high") ? 9 : posts.some((post) => post.priority === "medium") ? 6 : 3;
  const sourceScore = Math.min(10, highestPriority + Math.min(2, Math.max(0, sourceNames.size - 1)));
  const directnessScore = directStocks.length ? Math.min(20, 13 + directStocks.length * 3) : Math.min(13, 7 + posts.length * 2);
  const mainNet = Number(theme.mainNetYuan || 0);
  const m30 = theme.inflow30mYuan === null || theme.inflow30mYuan === undefined ? null : Number(theme.inflow30mYuan);
  const averageChange = Number(theme.averageChangePct || 0);
  let sectorScore = 0;
  if (averageChange > 0) sectorScore += 6;
  if (averageChange >= 2) sectorScore += 4;
  if (mainNet > 0) sectorScore += 7;
  if (m30 !== null && m30 > 0) sectorScore += 8;

  const confirmedStocks = selectedStocks.filter((item) => Number(item.changePct || 0) > 0 && Number(item.mainNetYuan || 0) > 0);
  const attackingStocks = selectedStocks.filter((item) => Number(item.inflow30mYuan || 0) > 0);
  let stockScore = Math.min(18, confirmedStocks.length * 6) + Math.min(9, attackingStocks.length * 3);
  if (directStocks.length && confirmedStocks.length) stockScore += 3;
  stockScore = Math.min(30, stockScore);

  const positiveRatios = selectedStocks.map((item) => Number(item.positiveIntervalRatioPct)).filter(Number.isFinite);
  const averagePositiveRatio = positiveRatios.length ? positiveRatios.reduce((sum, value) => sum + value, 0) / positiveRatios.length : null;
  let persistenceScore = 0;
  if (m30 !== null && m30 > 0) persistenceScore += 6;
  if (averagePositiveRatio !== null && averagePositiveRatio >= 55) persistenceScore += 5;
  if (averageChange > 1 && mainNet > 0) persistenceScore += 4;

  let penalty = 0;
  if (averageChange > 0 && mainNet < 0) penalty += 12;
  if (mainNet > 0 && m30 !== null && m30 < 0) penalty += 10;
  if (selectedStocks.length && !confirmedStocks.length) penalty += 8;
  const score = Math.max(0, Math.min(100, sourceScore + directnessScore + sectorScore + stockScore + persistenceScore - penalty));
  const marketPositive = averageChange > 0 && mainNet > 0;
  const marketDiverged = averageChange < 0 || (mainNet < 0 && m30 !== null && m30 <= 0);
  const status = !contextFresh
    ? "pending"
    : marketDiverged || score < 40
      ? "diverged"
      : score >= 65 && marketPositive
        ? "confirmed"
        : "pending";
  const stage = !contextFresh
    ? "待更新"
    : averageChange > 0 && mainNet > 0 && m30 !== null && m30 > 0
      ? "资金加速"
      : averageChange > 0 && mainNet > 0
        ? "趋势持续"
        : averageChange > 0 && mainNet < 0
          ? "分化承接"
          : mainNet > 0 && m30 !== null && m30 < 0
            ? "兑现回落"
            : marketDiverged
              ? "市场证伪"
              : "等待确认";

  return {
    theme,
    posts,
    sources: sourceNames,
    directStocks,
    selectedStocks,
    usesMarketFallback: !directStocks.length,
    score,
    status,
    stage,
    mainNet,
    m30,
    averageChange,
    latestPost: posts[0],
  };
}

function benefitMapRows() {
  const context = state.benefitMarketContext || fallbackBenefitMarketContext;
  const contextFresh = context.state === "ready" || context.state === "stale";
  const stockIndex = new Map();
  (context.stocks || []).forEach((stock) => {
    const code = normalizeBenefitStockCode(stock.code);
    if (code) stockIndex.set(code, stock);
  });
  return (context.themes || [])
    .map((theme) => ({ theme, posts: benefitThemePosts(theme, aShareWindowPosts()) }))
    .filter((item) => item.posts.length)
    .map((item) => benefitScoreTheme(item.theme, item.posts, stockIndex, contextFresh))
    .sort((left, right) => {
      const statusRank = { confirmed: 3, pending: 2, diverged: 1 };
      return statusRank[right.status] - statusRank[left.status] || right.score - left.score || right.mainNet - left.mainNet;
    });
}

function renderMarketMap() {
  const context = state.benefitMarketContext || fallbackBenefitMarketContext;
  const rows = benefitMapRows();
  const filteredRows = rows.filter((row) => row.status === state.benefitStatusFilter).slice(0, 5);
  const statusLabels = { confirmed: "已兑现", pending: "待兑现", diverged: "分化/证伪" };
  $("#a-share-window-tabs")?.querySelectorAll("[data-a-share-window]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.aShareWindow) === state.aShareWindowHours);
  });
  $("#benefit-status-tabs")?.querySelectorAll("[data-benefit-status]").forEach((button) => {
    const status = button.dataset.benefitStatus;
    button.classList.toggle("active", status === state.benefitStatusFilter);
    button.querySelector("em")?.replaceChildren(String(rows.filter((row) => row.status === status).length));
  });
  const countNode = $("#market-map-count");
  if (countNode) countNode.textContent = `${rows.filter((row) => row.status === "confirmed").length}/${rows.length}`;
  const freshnessNode = $("#benefit-market-freshness");
  if (freshnessNode) {
    freshnessNode.textContent = context.state === "offline"
      ? "行情确认不可用"
      : `${context.dataFreshness?.note || "等待行情确认"}${context.slot ? ` · ${context.slot}` : ""}`;
    freshnessNode.dataset.state = context.dataFreshness?.state || context.state || "waiting";
  }

  const listNode = $("#market-map-list");
  if (!listNode) return;
  if (!filteredRows.length) {
    const loading = state.aShareMapLoading || context.state === "waiting";
    listNode.innerHTML = `<div class="empty-state">${loading ? "正在合并消息催化与当日行情..." : `${statusLabels[state.benefitStatusFilter]}暂无同时满足条件的题材`}</div>`;
    return;
  }

  listNode.innerHTML = filteredRows.map((row) => {
    const statusLabel = statusLabels[row.status];
    const latest = row.latestPost || {};
    const stockRows = row.selectedStocks.map((stock) => `
      <div class="benefit-stock-row">
        <span><strong>${escapeHtml(stock.name || stock.code)}</strong><small>${escapeHtml(stock.code || "")}</small></span>
        <b class="${Number(stock.changePct || 0) >= 0 ? "positive" : "negative"}">${Number(stock.changePct || 0) >= 0 ? "+" : ""}${Number(stock.changePct || 0).toFixed(2)}%</b>
        <b class="${Number(stock.mainNetYuan || 0) >= 0 ? "positive" : "negative"}">${escapeHtml(formatSectorFlowMoney(stock.mainNetYuan || 0))}</b>
      </div>
    `).join("");
    return `
      <article class="market-map-row benefit-map-row ${escapeHtml(row.status)}">
        <div class="benefit-map-heading">
          <div>
            <strong>${escapeHtml(row.theme.name)}</strong>
            <span class="benefit-status ${escapeHtml(row.status)}">${escapeHtml(statusLabel)}</span>
          </div>
          <b class="benefit-score">兑现 ${Math.round(row.score)}</b>
        </div>
        <div class="benefit-market-metrics">
          <span><small>板块涨幅</small><strong class="${row.averageChange >= 0 ? "positive" : "negative"}">${row.averageChange >= 0 ? "+" : ""}${row.averageChange.toFixed(2)}%</strong></span>
          <span><small>当日主力</small><strong class="${row.mainNet >= 0 ? "positive" : "negative"}">${escapeHtml(formatSectorFlowMoney(row.mainNet))}</strong></span>
          <span><small>近30分钟</small><strong class="${Number(row.m30 || 0) >= 0 ? "positive" : "negative"}">${row.m30 === null ? "--" : escapeHtml(formatSectorFlowMoney(row.m30))}</strong></span>
        </div>
        <div class="benefit-catalyst">
          <span>${escapeHtml(row.stage)} · ${row.posts.length}条催化/${row.sources.size}个信源</span>
          <p>${escapeHtml(compactText(latest.original || latest.analysis || "消息催化待补", 72))}</p>
        </div>
        <div class="benefit-stock-list" data-market-fallback="${row.usesMarketFallback ? "true" : "false"}">
          <small>${row.usesMarketFallback ? "市场确认股" : "直接受益股"}</small>
          ${stockRows || `<span class="benefit-no-stock">尚无可核验的直接受益股</span>`}
        </div>
        <button class="benefit-evidence-button" type="button" data-benefit-evidence-theme="${escapeHtml(row.theme.name)}">查看证据链</button>
      </article>
    `;
  }).join("");
}

function gubaSignalClass(signal) {
  const text = String(signal || "");
  if (text.includes("多") || text.includes("看多") || text.includes("利好")) return "positive";
  if (text.includes("空") || text.includes("利空")) return "negative";
  if (text.includes("噪音")) return "noise";
  return "neutral";
}

function renderGubaRadar() {
  const summary = state.gubaSummary || fallbackGubaSummary;
  const items = summary.items || [];
  $("#guba-radar-count").textContent = summary.stockCount || items.length || 0;
  $("#guba-radar-meta").textContent =
    summary.state === "offline"
      ? summary.error || "东方财富雷达暂不可用"
      : summary.state === "loading"
        ? `近 ${summary.windowHours || state.aShareWindowHours} 小时 · 正在聚合...`
      : `近 ${summary.windowHours || state.aShareWindowHours} 小时 · ${summary.totalPosts || 0} 条帖子 · ${formatFullTime(summary.updatedAt) || "待更新"}`;

  if (!items.length) {
    $("#guba-radar-list").innerHTML =
      summary.state === "loading"
        ? `<div class="empty-state">正在读取近 ${summary.windowHours || state.aShareWindowHours} 小时股吧讨论...</div>`
        : `<div class="empty-state">近 ${summary.windowHours || state.aShareWindowHours} 小时暂无股吧讨论数据</div>`;
    return;
  }

  $("#guba-radar-list").innerHTML = items
    .slice(0, 6)
    .map((item) => {
      const signalClass = gubaSignalClass(item.signal);
      const intents = (item.intents || []).slice(0, 3);
      const topPosts = (item.topPosts || []).slice(0, 2);
      return `
        <article class="guba-radar-row ${escapeHtml(signalClass)}">
          <div class="guba-radar-head">
            <strong>${escapeHtml(item.stockName || item.stockCode)}</strong>
            <span class="signal-badge ${escapeHtml(signalClass === "noise" ? "neutral" : signalClass)}">${escapeHtml(item.signal || "中性")}</span>
          </div>
          <div class="guba-radar-stats">
            <span>${escapeHtml(item.sector || "未分类")}</span>
            <span>${Number(item.postCount || 0)}帖</span>
            <span>${formatKoreaVolume(item.readCount)}阅读</span>
            <span>${formatKoreaVolume(item.commentCount)}评</span>
          </div>
          <div class="guba-intents">
            ${
              intents.length
                ? intents.map((intent) => `<span>${escapeHtml(intent.name)} ${Number(intent.count || 0)}</span>`).join("")
                : `<span>暂无</span>`
            }
          </div>
          <div class="guba-top-posts">
            ${
              topPosts.length
                ? topPosts
                    .map((post) => {
                      const url = post.url || "";
                      const title = escapeHtml(post.title || "未命名帖子");
                      return url
                        ? `<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${title}</a>`
                        : `<span>${title}</span>`;
                    })
                    .join("")
                : `<span>暂无代表帖子</span>`
            }
          </div>
        </article>
      `;
    })
    .join("");
}

function eastmoneyRankMove(item) {
  if (item.isNew) return { label: "新进", className: "new" };
  const pollChange = Number(item.pollChange || 0);
  if (pollChange > 0) return { label: `↑${pollChange}`, className: "up" };
  if (pollChange < 0) return { label: `↓${Math.abs(pollChange)}`, className: "down" };
  const dayChange = Number(item.rankChange || 0);
  if (dayChange > 0) return { label: `较昨 ↑${dayChange}`, className: "up" };
  if (dayChange < 0) return { label: `较昨 ↓${Math.abs(dayChange)}`, className: "down" };
  return { label: "持平", className: "flat" };
}

function renderEastmoneyRank() {
  const summary = state.eastmoneyRank || fallbackEastmoneyRank;
  const items = summary.items || [];
  const countNode = $("#eastmoney-rank-count");
  const metaNode = $("#eastmoney-rank-meta");
  const listNode = $("#eastmoney-rank-list");
  if (!countNode || !metaNode || !listNode) return;
  const panelNode = listNode.closest(".eastmoney-rank-panel");
  if (panelNode) {
    panelNode.style.setProperty("height", "auto", "important");
    panelNode.style.setProperty("min-height", "820px", "important");
    panelNode.style.setProperty("max-height", "none", "important");
    panelNode.style.setProperty("overflow", "visible", "important");
  }
  listNode.style.setProperty("height", "auto", "important");
  listNode.style.setProperty("min-height", "0", "important");
  listNode.style.setProperty("max-height", "none", "important");
  listNode.style.setProperty("overflow", "visible", "important");
  countNode.textContent = Math.min(20, summary.count || items.length || 0);
  const intervalMinutes = Math.max(1, Math.round(Number(summary.intervalSeconds || 600) / 60));
  if (summary.state === "offline") {
    metaNode.textContent = summary.error || "东方财富人气榜暂时不可用";
  } else if (summary.state === "loading") {
    metaNode.textContent = "正在读取东方财富人气前 20...";
  } else {
    const freshness = summary.freshness?.note || "最新完整快照";
    metaNode.textContent = `前20 · ${freshness} · ${formatFullTime(summary.sourceUpdatedAt) || "待更新"} · ${intervalMinutes}分钟采集`;
    metaNode.dataset.state = summary.freshness?.state || summary.state || "waiting";
  }

  if (!items.length) {
    listNode.innerHTML = `<div class="empty-state">${
      summary.state === "loading" ? "首次榜单采集中..." : "暂未取得东方财富人气榜数据"
    }</div>`;
    return;
  }

  listNode.innerHTML = items
    .slice(0, 20)
    .map((item) => {
      const changePercent = Number(item.changePercent || 0);
      const trendClass = changePercent > 0 ? "positive" : changePercent < 0 ? "negative" : "neutral";
      const move = eastmoneyRankMove(item);
      const price = Number(item.price || 0);
      return `
        <article class="eastmoney-rank-row">
          <span class="eastmoney-rank-number${Number(item.rank) <= 3 ? " top" : ""}">${Number(item.rank)}</span>
          <a class="eastmoney-rank-stock" href="${escapeHtml(item.url || "https://guba.eastmoney.com/rank/")}" target="_blank" rel="noreferrer">
            <strong>${escapeHtml(item.stockName || item.stockCode)}</strong>
            <small>${escapeHtml(item.stockCode)}</small>
          </a>
          <div class="eastmoney-rank-quote ${trendClass}">
            <strong>${price ? price.toFixed(price >= 100 ? 2 : 2) : "--"}</strong>
            <span>${changePercent > 0 ? "+" : ""}${changePercent.toFixed(2)}%</span>
          </div>
          <span class="eastmoney-rank-move ${escapeHtml(move.className)}">${escapeHtml(move.label)}</span>
        </article>
      `;
    })
    .join("");
}

function techEarningsItems() {
  const payload = state.techEarnings || fallbackTechEarnings;
  return (payload.items || []).map(normalizeTechEarningsItem);
}

function techEarningsThemeTags(item) {
  return Array.isArray(item?.themes) ? item.themes.map((theme) => String(theme || "").trim()).filter(Boolean) : [];
}

function techEarningsClassificationTags(item) {
  const groups = Array.isArray(item?.classification?.themeGroups) ? item.classification.themeGroups : [];
  return [...new Set([...techEarningsThemeTags(item), ...groups].map((tag) => String(tag || "").trim()).filter(Boolean))];
}

function techEarningsThemeText(item) {
  const themes = techEarningsThemeTags(item);
  return themes.length ? themes.join(" / ") : item?.segment || "未分类";
}

function filteredTechEarningsItems() {
  const filter = state.earningsFilter || "all";
  const items = techEarningsItems();
  if (filter === "all") return items;
  const acceptedTags = earningsThemeFilters[filter] || [filter];
  return items.filter((item) => {
    const itemTags = techEarningsClassificationTags(item);
    return acceptedTags.some((tag) => itemTags.includes(tag));
  });
}

function earningsAnnouncementDateValue(item) {
  const dateText = String(item?.announcement?.date || "").trim();
  const match = dateText.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const timestamp = Date.UTC(year, month - 1, day);
  const date = new Date(timestamp);
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return null;
  return Math.floor(timestamp / 86400000);
}

function earningsTableMetricValue(item, metric = state.earningsTableSort) {
  if (metric === "announcementDate") return earningsAnnouncementDateValue(item);
  const d = item.derived || {};
  let value = null;
  if (metric === "h1NetProfit") value = d.h1NetProfit?.mid;
  if (metric === "q2NetProfit") value = d.q2NetProfit?.mid;
  if (metric === "q2NetProfitQoQ") value = d.q2NetProfitQoQ?.mid;
  if (metric === "h1Revenue") value = d.h1Revenue?.mid;
  if (metric === "h1DeductedProfit") value = d.h1DeductedProfit?.mid;
  if (metric === "q2AnnualizedPe") value = d.q2AnnualizedPe;
  const number = Number(value);
  if (!Number.isFinite(number)) return null;
  if (metric === "q2AnnualizedPe" && number <= 0) return null;
  return number;
}

function earningsTableNumericBound(value) {
  if (value === null || value === undefined || String(value).trim() === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function earningsTableBounds() {
  const first = earningsTableNumericBound(state.earningsTableMin);
  const second = earningsTableNumericBound(state.earningsTableMax);
  if (first !== null && second !== null && first > second) return { min: second, max: first };
  return { min: first, max: second };
}

function sortAndFilterTechEarningsTable(items) {
  const metric = earningsTableMetrics[state.earningsTableSort] ? state.earningsTableSort : "q2NetProfitQoQ";
  const metricConfig = earningsTableMetrics[metric];
  const direction = state.earningsTableSortDirection === "asc" ? "asc" : "desc";
  const { min, max } = earningsTableBounds();
  const hasRange = metricConfig.supportsRange !== false && (min !== null || max !== null);
  const filtered = hasRange
    ? items.filter((item) => {
        const value = earningsTableMetricValue(item, metric);
        if (value === null) return false;
        if (min !== null && value < min) return false;
        if (max !== null && value > max) return false;
        return true;
      })
    : [...items];

  return filtered.sort((a, b) => {
    const valueA = earningsTableMetricValue(a, metric);
    const valueB = earningsTableMetricValue(b, metric);
    const validA = valueA !== null;
    const validB = valueB !== null;
    if (validA !== validB) return validA ? -1 : 1;
    if (!validA && !validB) return String(a.code || "").localeCompare(String(b.code || ""));
    const difference = direction === "asc" ? valueA - valueB : valueB - valueA;
    return difference || String(a.code || "").localeCompare(String(b.code || ""));
  });
}

function setEarningsTableMetric(metric, { toggle = false } = {}) {
  const config = earningsTableMetrics[metric];
  if (!config) return;
  const changed = state.earningsTableSort !== metric;
  if (changed) {
    state.earningsTableSort = metric;
    state.earningsTableSortDirection = config.defaultDirection;
    state.earningsTableMin = "";
    state.earningsTableMax = "";
  } else if (toggle) {
    state.earningsTableSortDirection = state.earningsTableSortDirection === "asc" ? "desc" : "asc";
  }
}

function renderTechEarningsTableControls(totalCount, visibleCount) {
  const metricKey = earningsTableMetrics[state.earningsTableSort] ? state.earningsTableSort : "q2NetProfitQoQ";
  const metric = earningsTableMetrics[metricKey];
  const direction = state.earningsTableSortDirection === "asc" ? "asc" : "desc";
  const select = $("#earnings-table-sort-metric");
  const minInput = $("#earnings-table-filter-min");
  const maxInput = $("#earnings-table-filter-max");
  const unit = $("#earnings-table-filter-unit");
  const count = $("#tech-earnings-table-count");
  const toggle = $("#earnings-table-sort-toggle");
  const panel = $("#earnings-table-sort-panel");
  const supportsRange = metric.supportsRange !== false;
  const directionText = metricKey === "announcementDate"
    ? { asc: "从旧到新", desc: "从新到旧" }
    : { asc: "从低到高", desc: "从高到低" };
  if (select) select.value = metricKey;
  if (minInput && minInput.value !== String(state.earningsTableMin)) minInput.value = state.earningsTableMin;
  if (maxInput && maxInput.value !== String(state.earningsTableMax)) maxInput.value = state.earningsTableMax;
  [minInput, maxInput].forEach((input) => {
    if (!input) return;
    input.disabled = !supportsRange;
    const field = input.closest(".earnings-range-field");
    if (field) field.hidden = !supportsRange;
  });
  if (unit) {
    unit.hidden = !supportsRange;
    unit.textContent = metric.unit;
  }
  if (panel) panel.classList.toggle("sort-only", !supportsRange);
  if (count) count.textContent = visibleCount === totalCount ? String(totalCount) : `${visibleCount}/${totalCount}`;
  if (toggle) {
    const hasRange = supportsRange && (state.earningsTableMin !== "" || state.earningsTableMax !== "");
    toggle.classList.toggle("filtered", hasRange);
    toggle.title = `${metric.label} · ${directionText[direction]}`;
  }
  document.querySelectorAll("[data-earnings-sort-direction]").forEach((button) => {
    button.classList.toggle("active", button.dataset.earningsSortDirection === direction);
    button.textContent = button.dataset.earningsSortDirection === "asc" ? directionText.asc : directionText.desc;
  });
  document.querySelectorAll("[data-earnings-table-sort]").forEach((button) => {
    const active = button.dataset.earningsTableSort === metricKey;
    button.classList.toggle("active", active);
    const indicator = button.querySelector("[data-sort-indicator]");
    if (indicator) indicator.textContent = active ? (direction === "asc" ? "↑" : "↓") : "↕";
    const header = button.closest("th");
    if (header) header.setAttribute("aria-sort", active ? (direction === "asc" ? "ascending" : "descending") : "none");
  });
}

function valueForEarningsRank(item, rank = state.earningsRank) {
  const d = item.derived || {};
  if (rank === "q2NetProfitQoQ") return d.q2NetProfitQoQ?.mid ?? Number.NEGATIVE_INFINITY;
  if (rank === "quality") return d.h1DeductedRatio ?? Number.NEGATIVE_INFINITY;
  if (rank === "q2AnnualizedPe") return d.q2AnnualizedPe ?? Number.POSITIVE_INFINITY;
  if (rank === "profitScale") return d.h1NetProfit?.mid ?? Number.NEGATIVE_INFINITY;
  return d.q2NetProfitQoQ?.mid ?? Number.NEGATIVE_INFINITY;
}

function sortTechEarningsItems(items, rank = state.earningsRank) {
  return [...items].sort((a, b) => {
    const valueA = valueForEarningsRank(a, rank);
    const valueB = valueForEarningsRank(b, rank);
    if (rank === "q2AnnualizedPe") {
      const validA = Number.isFinite(valueA) && valueA > 0;
      const validB = Number.isFinite(valueB) && valueB > 0;
      if (validA !== validB) return validA ? -1 : 1;
      return valueA - valueB;
    }
    return valueB - valueA;
  });
}

function rankValueText(item, rank = state.earningsRank) {
  const d = item.derived || {};
  if (rank === "q2NetProfitQoQ") return formatBounds(d.q2NetProfitQoQ, formatPercentValue);
  if (rank === "quality") return d.h1DeductedRatio === null || d.h1DeductedRatio === undefined ? "扣非待补" : formatPercentValue(d.h1DeductedRatio);
  if (rank === "q2AnnualizedPe") return formatMultipleValue(d.q2AnnualizedPe);
  if (rank === "profitScale") return formatBounds(d.h1NetProfit, formatAmountValue);
  return "--";
}

function rankSubText(item, rank = state.earningsRank) {
  const d = item.derived || {};
  if (rank === "q2NetProfitQoQ") return `2026年第二季度归母净利润（系统倒推）：${formatBounds(d.q2NetProfit, formatAmountValue)}`;
  if (rank === "quality") return `2026年上半年扣非归母净利润：${formatBounds(d.h1DeductedProfit, formatAmountValue)}`;
  if (rank === "q2AnnualizedPe") return `第二季度归母年化利润：${formatAmountValue(d.q2AnnualizedProfit)}`;
  if (rank === "profitScale") return `2026年上半年归母同比：${formatMetricYoY(item.reported?.h1NetProfitParent)}`;
  return item.segment || "";
}

function setSelectedEarningsCode(items) {
  if (items.some((item) => item.code === state.selectedEarningsCode)) return;
  state.selectedEarningsCode = items[0]?.code || "";
}

function renderTechEarnings() {
  const payload = state.techEarnings || fallbackTechEarnings;
  const collection = payload.collection || {};
  const items = filteredTechEarningsItems();
  const rankedItems = sortTechEarningsItems(items);
  const tableItems = sortAndFilterTechEarningsTable(items);
  setSelectedEarningsCode(tableItems);

  $("#tech-earnings-updated").textContent = payload.updatedAt ? `数据更新：${payload.updatedAt}` : "等待数据";
  $("#tech-earnings-subtitle").textContent = collection.forecastCompaniesScanned
    ? `全市场扫描 ${collection.forecastCompaniesScanned} 家业绩预告公司，按科技硬件、算力租赁、AI应用与游戏覆盖池筛选。`
    : "公告原始口径、第二季度倒推值、估值重估和持续性风险分开看。";
  const collectionNode = $("#tech-earnings-collection");
  if (collectionNode) {
    collectionNode.textContent = collection.techCompaniesMatched
      ? `科技匹配 ${collection.techCompaniesMatched} 家 · 题材库归类 ${collection.themeLibraryCompaniesMatched || 0} 家 · 巨潮原公告 ${collection.officialAnnouncementMatches || 0} 家 · 市值 ${collection.marketCapMatches || 0} 家`
      : "等待采集统计";
  }
  $("#tech-earnings-count").textContent = techEarningsItems().length;
  $("#tech-earnings-rank-count").textContent = items.length;
  renderTechEarningsTableControls(items.length, tableItems.length);

  document.querySelectorAll("#tech-earnings-rank-tabs [data-earnings-rank]").forEach((button) => {
    button.classList.toggle("active", button.dataset.earningsRank === state.earningsRank);
  });
  document.querySelectorAll("#tech-earnings-filter-tabs [data-earnings-filter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.earningsFilter === state.earningsFilter);
  });

  const topQoQ = sortTechEarningsItems(items, "q2NetProfitQoQ")[0];
  const topQuality = sortTechEarningsItems(items, "quality").find((item) => Number.isFinite(item.derived?.h1DeductedRatio));
  const topPe = sortTechEarningsItems(items, "q2AnnualizedPe").find((item) => {
    const pe = item.derived?.q2AnnualizedPe;
    return Number.isFinite(pe) && pe > 0;
  });

  $("#tech-earnings-top-qoq").textContent = topQoQ ? topQoQ.name : "--";
  $("#tech-earnings-top-qoq-meta").textContent = topQoQ ? rankValueText(topQoQ, "q2NetProfitQoQ") : "等待计算";
  $("#tech-earnings-top-quality").textContent = topQuality ? topQuality.name : "--";
  $("#tech-earnings-top-quality-meta").textContent = topQuality ? `扣非净利润占归母净利润 ${rankValueText(topQuality, "quality")}` : "等待扣非数据";
  $("#tech-earnings-top-pe").textContent = topPe ? topPe.name : "--";
  $("#tech-earnings-top-pe-meta").textContent = topPe ? `第二季度年化市盈率 ${rankValueText(topPe, "q2AnnualizedPe")}` : "等待市值";

  renderTechEarningsRankList(rankedItems);
  renderTechEarningsTable(tableItems);
  renderTechEarningsDetail(tableItems);
}

function renderTechEarningsRankList(items) {
  const node = $("#tech-earnings-rank-list");
  if (!items.length) {
    node.innerHTML = `<div class="empty-state">当前筛选下暂无科技业绩数据。</div>`;
    return;
  }
  node.innerHTML = items
    .slice(0, 10)
    .map((item, index) => {
      const active = item.code === state.selectedEarningsCode ? "active" : "";
      const q2QoQ = item.derived?.q2NetProfitQoQ;
      const tone = q2QoQ?.mid > 50 ? "positive" : q2QoQ?.mid < 0 ? "negative" : "neutral";
      return `
        <button class="earnings-rank-row ${active} ${tone}" type="button" data-earnings-code="${escapeHtml(item.code)}">
          <span class="earnings-rank-number">${index + 1}</span>
          <span class="earnings-rank-main">
            <strong>${escapeHtml(item.name)}</strong>
            <small>${escapeHtml(item.code)} · ${escapeHtml(item.segment || "未分类")}</small>
          </span>
          <span class="earnings-rank-value">
            <strong>${escapeHtml(rankValueText(item))}</strong>
            <small>${escapeHtml(rankSubText(item))}</small>
          </span>
        </button>
      `;
    })
    .join("");
}

function renderTechEarningsTable(items) {
  const body = $("#tech-earnings-table-body");
  if (!items.length) {
    body.innerHTML = `<tr><td colspan="10">当前筛选下暂无数据。</td></tr>`;
    return;
  }
  body.innerHTML = items
    .map((item) => {
      const active = item.code === state.selectedEarningsCode ? "active" : "";
      const d = item.derived || {};
      const announcement = item.announcement || {};
      const sourceLabel = announcement.sourceName || "来源待补";
      const sourceHtml = announcement.sourceUrl
        ? `<a class="earnings-source-link" href="${escapeHtml(announcement.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(sourceLabel)}</a>`
        : `<span>${escapeHtml(sourceLabel)}</span>`;
      const themeText = techEarningsThemeText(item);
      const classificationSource = item.classification?.source || "分类来源待补";
      const segmentDetail = item.segment && item.segment !== themeText ? ` · ${item.segment}` : "";
      const metricValue = (metric) => earningsTableMetricValue(item, metric) ?? "";
      return `
        <tr class="${active}" data-earnings-code="${escapeHtml(item.code)}">
          <td>
            <button class="earnings-stock-button" type="button" data-earnings-code="${escapeHtml(item.code)}">
              <strong>${escapeHtml(item.name)}</strong>
              <span>${escapeHtml(item.code)}</span>
            </button>
          </td>
          <td data-earnings-metric="announcementDate" data-earnings-value="${metricValue("announcementDate")}">
            <strong>${escapeHtml(announcement.date || "待补")}</strong>
            <span>${escapeHtml(announcement.sourceStatus || "公告来源状态待补")}</span>
          </td>
          <td>
            <strong>${escapeHtml(themeText)}</strong>
            <span>${escapeHtml(`${classificationSource}${segmentDetail}`)}</span>
          </td>
          <td data-earnings-metric="h1NetProfit" data-earnings-value="${metricValue("h1NetProfit")}">
            <strong>${escapeHtml(formatBounds(d.h1NetProfit, formatAmountValue))}</strong>
            <span>${escapeHtml(formatMetricYoY(item.reported?.h1NetProfitParent))}</span>
          </td>
          <td data-earnings-metric="q2NetProfit" data-earnings-value="${metricValue("q2NetProfit")}">
            <strong>${escapeHtml(formatBounds(d.q2NetProfit, formatAmountValue))}</strong>
            <span>${escapeHtml(d.q2NetProfit?.formula || "第一季度实际值待补，暂不能倒推")}</span>
          </td>
          <td data-earnings-metric="q2NetProfitQoQ" data-earnings-value="${metricValue("q2NetProfitQoQ")}">${escapeHtml(formatBounds(d.q2NetProfitQoQ, formatPercentValue))}</td>
          <td data-earnings-metric="h1Revenue" data-earnings-value="${metricValue("h1Revenue")}">
            <strong>${escapeHtml(formatMetricRange(item.reported?.h1Revenue, formatAmountValue))}</strong>
            <span>${escapeHtml(formatMetricYoY(item.reported?.h1Revenue))}</span>
          </td>
          <td data-earnings-metric="h1DeductedProfit" data-earnings-value="${metricValue("h1DeductedProfit")}">
            <strong>${escapeHtml(formatMetricRange(item.reported?.h1DeductedNetProfit, formatAmountValue))}</strong>
            <span>扣非净利润占归母净利润 ${escapeHtml(d.h1DeductedRatio === null || d.h1DeductedRatio === undefined ? "待补" : formatPercentValue(d.h1DeductedRatio))}</span>
          </td>
          <td data-earnings-metric="q2AnnualizedPe" data-earnings-value="${metricValue("q2AnnualizedPe")}">
            <strong>${escapeHtml(formatMultipleValue(d.q2AnnualizedPe))}</strong>
            <span>市值 ${escapeHtml(formatAmountValue(item.valuation?.marketCap?.value))}</span>
          </td>
          <td>
            <strong>${escapeHtml(announcement.dataNature || item.status || "待确认")}</strong>
            ${sourceHtml}
            <span>${item.analysisMode === "manual" ? "公告自动采集 · 投资判断人工维护" : "公告与基础判断自动生成"}</span>
          </td>
        </tr>
      `;
    })
    .join("");
}

function renderTechEarningsDetail(items) {
  const node = $("#tech-earnings-detail-card");
  const selected = items.find((item) => item.code === state.selectedEarningsCode) || items[0];
  if (!selected) {
    node.innerHTML = `<div class="empty-state">请选择一家公司查看详细口径。</div>`;
    return;
  }
  const d = selected.derived || {};
  const announcement = selected.announcement || {};
  const q1 = selected.q1Actual || {};
  const marketCap = selected.valuation?.marketCap || {};
  const sourceUrl = announcement.sourceUrl || "";
  const sourceName = announcement.sourceName || "来源待补";
  const themeText = techEarningsThemeText(selected);
  const classificationSource = selected.classification?.source || "分类来源待补";
  const sourceLink = sourceUrl
    ? `<a class="earnings-source-link" href="${escapeHtml(sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(sourceName)} · 打开原公告</a>`
    : escapeHtml(sourceName);
  const copyText = [
    `${selected.name}（${selected.code}）2026年上半年科技业绩雷达`,
    `题材库归类：${themeText}`,
    `归类来源：${classificationSource}；产业链口径：${selected.segment || "未分类"}`,
    `公告日期：${announcement.date || "待补"}；公告类型：${announcement.type || "待补"}；报告期：${announcement.period || "待补"}`,
    `公告来源：${sourceName}${sourceUrl ? `；公告链接：${sourceUrl}` : ""}`,
    `2026年上半年营业收入：${formatMetricRange(selected.reported?.h1Revenue, formatAmountValue)}（${formatMetricYoY(selected.reported?.h1Revenue)}）`,
    `2026年上半年归母净利润：${formatBounds(d.h1NetProfit, formatAmountValue)}（${formatMetricYoY(selected.reported?.h1NetProfitParent)}）`,
    `2026年第二季度归母净利润（系统倒推）：${formatBounds(d.q2NetProfit, formatAmountValue)}；公式：${d.q2NetProfit?.formula || "待补"}`,
    `2026年第二季度归母净利润环比：${formatBounds(d.q2NetProfitQoQ, formatPercentValue)}`,
    `2026年上半年扣非归母净利润：${formatMetricRange(selected.reported?.h1DeductedNetProfit, formatAmountValue)}；扣非净利润占归母净利润：${d.h1DeductedRatio === null || d.h1DeductedRatio === undefined ? "待补" : formatPercentValue(d.h1DeductedRatio)}`,
    `第二季度归母年化利润：${formatAmountValue(d.q2AnnualizedProfit)}；第二季度年化市盈率：${formatMultipleValue(d.q2AnnualizedPe)}`,
  ].join("\n");

  node.innerHTML = `
    <div class="earnings-detail-head">
      <div>
        <span>${escapeHtml(selected.coverage || "科技板块")}</span>
        <h3>${escapeHtml(selected.name)} · ${escapeHtml(selected.code)}</h3>
        <p>${escapeHtml(themeText)} · ${escapeHtml(classificationSource)}</p>
      </div>
      <button class="copy-text-button" type="button" data-copy-text="${escapeHtml(copyText)}">复制口径</button>
    </div>
    <div class="earnings-detail-grid">
      <div>
        <span>公告原始口径</span>
        <strong>${escapeHtml(formatBounds(d.h1NetProfit, formatAmountValue))}</strong>
        <small>2026年上半年归母净利润 · ${escapeHtml(formatMetricYoY(selected.reported?.h1NetProfitParent))}</small>
      </div>
      <div>
        <span>系统倒推口径</span>
        <strong>${escapeHtml(formatBounds(d.q2NetProfit, formatAmountValue))}</strong>
        <small>2026年第二季度归母净利润 · ${escapeHtml(formatBounds(d.q2NetProfitQoQ, formatPercentValue))}</small>
      </div>
      <div>
        <span>扣非质量口径</span>
        <strong>${escapeHtml(formatMetricRange(selected.reported?.h1DeductedNetProfit, formatAmountValue))}</strong>
        <small>扣非净利润占归母净利润 ${escapeHtml(d.h1DeductedRatio === null || d.h1DeductedRatio === undefined ? "待补" : formatPercentValue(d.h1DeductedRatio))}</small>
      </div>
      <div>
        <span>估值重估口径</span>
        <strong>${escapeHtml(formatMultipleValue(d.q2AnnualizedPe))}</strong>
        <small>市值 ${escapeHtml(formatAmountValue(marketCap.value))} · ${escapeHtml(marketCap.asOf || "市值日期待补")}</small>
      </div>
    </div>
    <div class="earnings-detail-section">
      <strong>完整数据口径</strong>
      <dl>
        <div><dt>公告日期</dt><dd>${escapeHtml(announcement.date || "待补")}</dd></div>
        <div><dt>公告类型</dt><dd>${escapeHtml(announcement.type || "待补")}</dd></div>
        <div><dt>报告期</dt><dd>${escapeHtml(announcement.period || "待补")}</dd></div>
        <div><dt>数据性质</dt><dd>${escapeHtml(announcement.dataNature || selected.status || "待确认")}</dd></div>
        <div><dt>公告来源</dt><dd>${sourceLink}</dd></div>
        <div><dt>题材库归类</dt><dd>${escapeHtml(themeText)}</dd></div>
        <div><dt>归类来源</dt><dd>${escapeHtml(classificationSource)} · 申万行业 ${escapeHtml(selected.industry || "待补")}</dd></div>
        <div><dt>完整产业链口径</dt><dd>${escapeHtml(selected.segment || "未分类")}</dd></div>
        <div><dt>分析维护方式</dt><dd>${selected.analysisMode === "manual" ? "公告数据自动采集，投资判断由人工维护" : "公告数据与基础判断均由规则自动生成，等待人工复核"}</dd></div>
        <div><dt>2026年第一季度归母净利润</dt><dd>${escapeHtml(formatAmountValue(q1.netProfitParent))} · ${escapeHtml(q1.sourceName || "第一季度来源待补")}</dd></div>
        <div><dt>2026年第二季度归母净利润计算公式</dt><dd>${escapeHtml(d.q2NetProfit?.formula || "第一季度实际值待补，暂不能倒推")}</dd></div>
        <div><dt>2026年第二季度扣非归母净利润</dt><dd>${escapeHtml(formatBounds(d.q2DeductedProfit, formatAmountValue))}</dd></div>
        <div><dt>2026年上半年净利率</dt><dd>${escapeHtml(d.h1NetMargin === null || d.h1NetMargin === undefined ? "营收数据待补" : formatPercentValue(d.h1NetMargin))}</dd></div>
        <div><dt>2026年第二季度净利率</dt><dd>${escapeHtml(d.q2NetMargin === null || d.q2NetMargin === undefined ? "第二季度营业收入待补" : formatPercentValue(d.q2NetMargin))}</dd></div>
        <div><dt>市值快照</dt><dd>${escapeHtml(formatAmountValue(marketCap.value))} · ${escapeHtml(marketCap.source || "市值来源待补")}</dd></div>
      </dl>
    </div>
    <div class="earnings-source-evidence">
      <div>
        <strong>业绩预告原始摘要</strong>
        <p>${escapeHtml(announcement.forecastContent || "原始摘要待补")}</p>
      </div>
      <div>
        <strong>公司披露的业绩变动原因</strong>
        <p>${escapeHtml(announcement.changeReason || "业绩变动原因待补")}</p>
      </div>
    </div>
    <div class="earnings-thesis-grid">
      <div>
        <strong>核心催化</strong>
        <p>${escapeHtml(selected.analystView?.coreCatalyst || "待补")}</p>
      </div>
      <div>
        <strong>业绩质量</strong>
        <p>${escapeHtml(selected.analystView?.earningsQuality || "待补")}</p>
      </div>
      <div>
        <strong>估值重估</strong>
        <p>${escapeHtml(selected.analystView?.valuationRepricing || "待补")}</p>
      </div>
      <div>
        <strong>跟踪重点</strong>
        <p>${escapeHtml(selected.analystView?.trackingPoint || "待补")}</p>
      </div>
    </div>
    <div class="earnings-driver-risk">
      <div>
        <strong>驱动因素</strong>
        ${(selected.drivers || []).map((item) => `<span>${escapeHtml(item)}</span>`).join("") || "<span>待补</span>"}
      </div>
      <div>
        <strong>风险标签</strong>
        ${(selected.riskFlags || []).map((item) => `<span>${escapeHtml(item)}</span>`).join("") || "<span>待补</span>"}
      </div>
    </div>
  `;
}

function indexFuturesDays() {
  return Array.isArray(state.indexFutures?.days)
    ? [...state.indexFutures.days].sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")))
    : [];
}

function selectedIndexFuturesDay() {
  const days = indexFuturesDays();
  return days.find((item) => item.date === state.selectedFuturesDate) || days[0] || null;
}

function futuresProducts(snapshot) {
  return Array.isArray(snapshot?.products) ? snapshot.products : [];
}

function formatFuturesNumber(value, decimals = 1) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "--";
  return new Intl.NumberFormat("zh-CN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(number);
}

function formatFuturesSigned(value, suffix = "", decimals = 0) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "--";
  const sign = number > 0 ? "+" : "";
  return `${sign}${formatFuturesNumber(number, decimals)}${suffix}`;
}

function formatFuturesNominal(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "名义规模待计算";
  return `名义规模 ${formatFuturesSigned(number / 100000000, "亿元", 1)}`;
}

function futuresToneClass(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || Math.abs(number) < 0.0001) return "";
  return number > 0 ? "positive" : "negative";
}

function futuresFlowTone(flowType) {
  if (["new_long", "short_cover"].includes(flowType)) return "positive";
  if (["new_short", "long_exit"].includes(flowType)) return "negative";
  return "";
}

function formatIndexFuturesTime(value) {
  const date = new Date(value || "");
  if (Number.isNaN(date.getTime())) return "--";
  return new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

function marketPulseHasNumber(value) {
  return value !== null && value !== undefined && value !== "" && Number.isFinite(Number(value));
}

function formatAShareMoney(value, signed = false) {
  if (!marketPulseHasNumber(value)) return "--";
  const number = Number(value);
  const absolute = Math.abs(number);
  const sign = signed && number > 0 ? "+" : "";
  if (absolute >= 1000000000000) {
    return `${sign}${formatFuturesNumber(number / 1000000000000, 2)}万亿`;
  }
  if (absolute >= 100000000) {
    const decimals = absolute >= 10000000000 ? 0 : 1;
    return `${sign}${formatFuturesNumber(number / 100000000, decimals)}亿`;
  }
  if (absolute >= 10000) {
    return `${sign}${formatFuturesNumber(number / 10000, 1)}万`;
  }
  return `${sign}${formatFuturesNumber(number, 0)}元`;
}

function formatAShareCount(value) {
  if (!marketPulseHasNumber(value)) return "--";
  return Math.round(Number(value)).toLocaleString("zh-CN");
}

function renderAShareMarketSnapshot() {
  const tape = $("#a-share-session-tape");
  if (!tape) return;
  const payload = state.aShareMarket || fallbackAShareMarket;
  const turnover = payload.turnover || {};
  const breadth = payload.breadth || {};
  const limits = payload.limits || {};
  const markets = Array.isArray(turnover.markets) ? turnover.markets : [];
  const marketById = Object.fromEntries(markets.map((item) => [item.id, item]));

  $("#a-share-turnover-value").textContent = formatAShareMoney(turnover.currentYuan);
  $("#a-share-turnover-breakdown").textContent = [
    ["沪", marketById.shanghai?.turnoverYuan],
    ["深", marketById.shenzhen?.turnoverYuan],
    ["京", marketById.beijing?.turnoverYuan],
  ].map(([label, value]) => `${label} ${formatAShareMoney(value)}`).join(" · ");

  const sameTimeChange = $("#a-share-same-time-change");
  sameTimeChange.textContent = formatAShareMoney(turnover.changeYuan, true);
  sameTimeChange.className = marketPulseHasNumber(turnover.changeYuan)
    ? futuresToneClass(turnover.changeYuan)
    : "";
  const sameTimePercent = marketPulseHasNumber(turnover.changePercent)
    ? formatFuturesSigned(turnover.changePercent, "%", 2)
    : "--";
  $("#a-share-same-time-meta").textContent = marketPulseHasNumber(turnover.previousSameTimeYuan)
    ? `昨同 ${formatAShareMoney(turnover.previousSameTimeYuan)} · ${sameTimePercent}`
    : "等待同分钟数据";

  const closed = turnover.forecastMethod === "closed";
  $("#a-share-forecast-label").textContent = closed ? "全天成交" : "全天预估";
  $("#a-share-forecast-value").textContent = formatAShareMoney(turnover.estimatedFullDayYuan);
  const comparisonTime = turnover.comparisonAsOf ? formatIndexFuturesTime(turnover.comparisonAsOf) : "--";
  $("#a-share-forecast-meta").textContent = marketPulseHasNumber(turnover.previousCompletionRatio)
    ? `${closed ? "收盘值" : `昨同进度 ${formatFuturesNumber(turnover.previousCompletionRatio, 1)}%`} · ${comparisonTime}`
    : "按昨日同分钟成交节奏";

  $("#a-share-advance-count").textContent = formatAShareCount(breadth.advanceCount);
  $("#a-share-unchanged-count").textContent = formatAShareCount(breadth.unchangedCount);
  $("#a-share-decline-count").textContent = formatAShareCount(breadth.declineCount);
  $("#a-share-limit-up-count").textContent = formatAShareCount(limits.limitUpCount);
  $("#a-share-limit-down-count").textContent = formatAShareCount(limits.limitDownCount);
  const breadthTime = breadth.asOf ? formatIndexFuturesTime(breadth.asOf) : "--";
  $("#a-share-breadth-meta").textContent = marketPulseHasNumber(breadth.activeCount)
    ? `${formatAShareCount(breadth.activeCount)}家 · ${breadthTime}`
    : payload.state === "offline" ? "行情暂不可用" : "等待行情";

  tape.dataset.state = payload.state || "waiting";
  tape.title = [
    payload.provider,
    payload.sourcePolicy,
    marketPulseHasNumber(breadth.excludedStCount) ? `已剔除 ${formatAShareCount(breadth.excludedStCount)} 家ST有效报价` : "",
    ...(payload.errors || []),
  ].filter(Boolean).join("\n");
}

function renderMarketPulse() {
  const node = $("#market-pulse-list");
  const meta = $("#market-pulse-meta");
  if (!node || !meta) return;

  const payload = state.marketPulse || fallbackMarketPulse;
  const items = Array.isArray(payload.items) ? payload.items : [];
  if (!items.length) {
    node.innerHTML = `<div class="market-pulse-empty">等待全球股指行情...</div>`;
    meta.textContent = payload.state === "offline" ? "行情暂不可用" : "正在连接行情";
    meta.title = payload.note || payload.sourcePolicy || "";
    return;
  }

  node.innerHTML = items.map((item, index) => {
    const hasPrice = marketPulseHasNumber(item.price);
    const hasChange = marketPulseHasNumber(item.changePercent);
    const changePercent = hasChange ? Number(item.changePercent) : null;
    const tone = hasChange ? futuresToneClass(changePercent) : "offline";
    const previousGroup = items[index - 1]?.group;
    const groupStart = index > 0 && item.group !== previousGroup ? " group-start" : "";
    const time = item.marketTime ? formatIndexFuturesTime(item.marketTime) : "--";
    const price = hasPrice ? formatFuturesNumber(item.price, Number(item.decimals ?? 2)) : "--";
    const change = hasChange ? formatFuturesSigned(changePercent, "%", 2) : "--";
    const detail = [
      item.name,
      item.quoteCode ? `代码 ${item.quoteCode}` : "",
      item.provider ? `行情 ${item.provider}` : "",
      item.providerNote || "",
      item.error || "",
    ].filter(Boolean).join(" · ");
    return `
      <div class="market-pulse-item ${tone}${groupStart}" title="${escapeHtml(detail)}">
        <div class="market-pulse-item-head">
          <span>${escapeHtml(item.shortName || item.name || "--")}</span>
          <small>${escapeHtml(item.groupLabel || item.exchange || "")}</small>
        </div>
        <strong>${escapeHtml(change)}</strong>
        <small>${escapeHtml(price)} · ${escapeHtml(time)}</small>
      </div>
    `;
  }).join("");

  const readyCount = Number(payload.readyCount ?? items.filter((item) => marketPulseHasNumber(item.price)).length);
  const count = Number(payload.count ?? items.length);
  const updatedAt = payload.updatedAt ? formatIndexFuturesTime(payload.updatedAt) : "--";
  const stateLabel = payload.state === "stale" ? "缓存" : payload.state === "partial" ? "部分" : "实时";
  meta.textContent = `${readyCount}/${count} · ${stateLabel} ${updatedAt}`;
  meta.title = [payload.provider, payload.sourcePolicy, ...(payload.errors || [])].filter(Boolean).join("\n");
}

function renderIndexFuturesChart(day) {
  const node = $("#index-futures-chart");
  const snapshots = Array.isArray(day?.snapshots) ? day.snapshots : [];
  if (!node) return;
  if (!snapshots.length) {
    node.innerHTML = `<div class="index-futures-empty">当前交易日暂无快照。</div>`;
    return;
  }

  const width = Math.max(320, Math.round(node.getBoundingClientRect().width || 860));
  const compact = width < 560;
  const height = compact ? 500 : 430;
  const margin = { left: compact ? 50 : 62, right: compact ? 18 : 34, top: 8, bottom: compact ? 54 : 34 };
  const gap = compact ? 28 : 24;
  const panelHeight = (height - margin.top - margin.bottom - gap * 2) / 3;
  const chartWidth = width - margin.left - margin.right;
  const xFor = (index) => margin.left + (snapshots.length === 1 ? chartWidth / 2 : (index / (snapshots.length - 1)) * chartWidth);
  const productCodes = ["IF", "IH", "IC", "IM"];
  const productClasses = { IF: "if", IH: "ih", IC: "ic", IM: "im" };
  const productColors = { IF: "var(--blue)", IH: "var(--violet)", IC: "var(--amber)", IM: "var(--red)" };
  const productValues = Object.fromEntries(productCodes.map((code) => [
    code,
    snapshots.map((snapshot) => Number(futuresProducts(snapshot).find((item) => item.code === code)?.priceChangeFromFirstPercent || 0)),
  ]));
  const panels = [
    {
      label: "多空合成价 / 纯价格指数（首条=100）",
      format: (value) => value.toFixed(2),
      series: [
        { label: "多空合成价", values: snapshots.map((item) => Number(item.syntheticPrice || 100)), className: "synthetic", color: "var(--text)" },
        { label: "纯价格", values: snapshots.map((item) => Number(item.priceIndex || 100)), className: "price", color: "var(--cyan)" },
      ],
    },
    {
      label: "四个近月合约较首条价格变化（%）",
      format: (value) => `${value.toFixed(1)}%`,
      series: productCodes.map((code) => ({ label: code, values: productValues[code], className: productClasses[code], color: productColors[code] })),
    },
    {
      label: "16个合约总持仓较首条变化（手）",
      format: (value) => Math.round(value).toLocaleString("zh-CN"),
      series: [{
        label: "总持仓",
        values: snapshots.map((item) => Number(item.openInterestChangeFromFirst || 0)),
        className: "oi",
        color: "var(--muted-strong)",
      }],
    },
  ];

  const svg = [];
  const pathFor = (values, yFor) => values.map((value, index) => `${index ? "L" : "M"} ${xFor(index).toFixed(2)} ${yFor(value).toFixed(2)}`).join(" ");
  panels.forEach((panel, panelIndex) => {
    const top = margin.top + panelIndex * (panelHeight + gap);
    const bottom = top + panelHeight;
    const values = panel.series.flatMap((item) => item.values).filter(Number.isFinite);
    let min = Math.min(...values, panelIndex === 0 ? 100 : 0);
    let max = Math.max(...values, panelIndex === 0 ? 100 : 0);
    let spread = max - min;
    if (spread < (panelIndex === 2 ? 100 : 0.2)) spread = panelIndex === 2 ? 100 : 0.2;
    const padding = spread * 0.18;
    min -= padding;
    max += padding;
    const yFor = (value) => top + panelHeight - ((value - min) / (max - min)) * panelHeight;
    const ticks = Array.from({ length: 4 }, (_, index) => min + ((max - min) * index) / 3);

    ticks.forEach((tick) => {
      const y = yFor(tick);
      svg.push(`<line x1="${margin.left}" x2="${width - margin.right}" y1="${y}" y2="${y}" class="futures-grid-line" />`);
      svg.push(`<text x="${margin.left - 8}" y="${y + 4}" text-anchor="end" class="futures-axis">${escapeHtml(panel.format(tick))}</text>`);
    });
    if (min <= (panelIndex === 0 ? 100 : 0) && max >= (panelIndex === 0 ? 100 : 0)) {
      const baseValue = panelIndex === 0 ? 100 : 0;
      svg.push(`<line x1="${margin.left}" x2="${width - margin.right}" y1="${yFor(baseValue)}" y2="${yFor(baseValue)}" class="futures-zero-line" />`);
    }
    snapshots.forEach((_, index) => {
      svg.push(`<line x1="${xFor(index)}" x2="${xFor(index)}" y1="${top}" y2="${bottom}" class="futures-phase-line" />`);
    });
    svg.push(`<text x="${margin.left}" y="${top + 14}" class="futures-panel-label">${escapeHtml(panel.label)}</text>`);

    panel.series.forEach((series) => {
      svg.push(`<path d="${pathFor(series.values, yFor)}" class="futures-line futures-line-${series.className}" />`);
      series.values.forEach((value, index) => {
        const title = `${snapshots[index].label || "--"} · ${series.label}：${panel.format(value)}`;
        svg.push(`<circle cx="${xFor(index)}" cy="${yFor(value)}" r="${index === series.values.length - 1 ? 3.8 : 3}" fill="${series.color}" class="futures-point"><title>${escapeHtml(title)}</title></circle>`);
      });
    });

    if (panelIndex === panels.length - 1) {
      snapshots.forEach((snapshot, index) => {
        const x = xFor(index);
        const y = bottom + 20;
        if (compact) {
          svg.push(`<text x="${x}" y="${y}" text-anchor="end" transform="rotate(-38 ${x} ${y})" class="futures-time">${escapeHtml(snapshot.label || "--")}</text>`);
        } else {
          svg.push(`<text x="${x}" y="${y}" text-anchor="middle" class="futures-time">${escapeHtml(snapshot.label || "--")}</text>`);
        }
      });
    }
  });

  node.innerHTML = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="股指期货盘中价格、合成价与持仓变化曲线">${svg.join("")}</svg>`;
}

function renderIndexFuturesTimeline(day) {
  const node = $("#index-futures-timeline");
  const snapshots = Array.isArray(day?.snapshots) ? day.snapshots : [];
  if (!node) return;
  $("#index-futures-snapshot-count").textContent = `${snapshots.length}条`;
  if (!snapshots.length) {
    node.innerHTML = `<div class="index-futures-empty">等待第一条有效快照。</div>`;
    return;
  }
  node.innerHTML = snapshots
    .map((snapshot, index) => {
      const prior = snapshots[index - 1];
      const priceMove = prior ? Number(snapshot.priceIndex || 100) - Number(prior.priceIndex || 100) : 0;
      const oiMove = Number(snapshot.intervalOpenInterestChange || 0);
      const tone = futuresFlowTone(snapshot.flowType);
      return `
        <div class="index-futures-timeline-row ${tone}">
          <time>${escapeHtml(snapshot.label || "--")}</time>
          <div>
            <strong>${escapeHtml(snapshot.flowLabel || (index ? "多空均衡" : "今日基准"))}</strong>
            <small>纯价格 ${formatFuturesSigned(priceMove, "%", 2)} · 合成价 ${formatFuturesNumber(snapshot.syntheticPrice, 2)}</small>
          </div>
          <span>${index ? formatFuturesSigned(oiMove, "手") : "基准"}</span>
        </div>
      `;
    })
    .reverse()
    .join("");
}

function renderIndexFuturesTable(day) {
  const body = $("#index-futures-table-body");
  const snapshots = Array.isArray(day?.snapshots) ? day.snapshots : [];
  const latest = snapshots[snapshots.length - 1];
  if (!body) return;
  if (!latest) {
    body.innerHTML = `<tr><td colspan="10">当前交易日暂无快照。</td></tr>`;
    return;
  }
  const products = futuresProducts(latest);
  body.innerHTML = products.map((product) => {
    const priceTone = futuresToneClass(product.frontChangePercent);
    const flowTone = futuresFlowTone(product.flowType);
    const basis = Number.isFinite(Number(product.basis))
      ? `${formatFuturesSigned(product.basis, "点", 1)} / ${formatFuturesSigned(product.basisPercent, "%", 2)}`
      : "待下一次实时采样";
    return `
      <tr>
        <td><strong>${escapeHtml(product.code || "--")}</strong><span>${escapeHtml(product.name || "")}</span></td>
        <td>${escapeHtml(product.frontContract || "--")}</td>
        <td>${formatFuturesNumber(product.frontPrice, 1)}</td>
        <td class="${priceTone}">${formatFuturesSigned(product.frontChangePercent, "%", 2)}</td>
        <td>${escapeHtml(basis)}</td>
        <td>${formatFuturesNumber(product.openInterest, 0)}手</td>
        <td>${formatFuturesSigned(product.dayOpenInterestChange, "手")}</td>
        <td>${formatFuturesSigned(product.openInterestChangeFromFirst, "手")}</td>
        <td>${formatFuturesSigned(product.intervalOpenInterestChange, "手")}</td>
        <td class="${flowTone}">${escapeHtml(product.flowLabel || "多空均衡")}</td>
      </tr>
    `;
  }).join("");
  $("#index-futures-table-meta").textContent = `${latest.label || "--"} · 4个品种 / ${products.reduce((sum, item) => sum + (item.contracts?.length || 0), 0)}个合约`;
}

function renderIndexFutures() {
  const payload = state.indexFutures || fallbackIndexFutures;
  const days = indexFuturesDays();
  const day = selectedIndexFuturesDay();
  const snapshots = Array.isArray(day?.snapshots) ? day.snapshots : [];
  const latest = snapshots[snapshots.length - 1];
  const summary = day?.summary || {};
  const dateSelect = $("#index-futures-date");

  if (dateSelect) {
    dateSelect.innerHTML = days.length
      ? days.map((item) => `<option value="${escapeHtml(item.date)}"${item.date === (day?.date || "") ? " selected" : ""}>${escapeHtml(item.date)}</option>`).join("")
      : `<option value="">暂无交易日</option>`;
  }
  if (day?.date) state.selectedFuturesDate = day.date;

  $("#index-futures-subtitle").textContent = day
    ? `${day.date} · 已记录 ${snapshots.length} 个快照 · IF、IH、IC、IM全期限口径`
    : "IF、IH、IC、IM价格、持仓与贴水的30分钟快照。";
  $("#index-futures-updated").textContent = latest?.sourceAt
    ? `行情时间 ${formatIndexFuturesTime(latest.sourceAt)}`
    : "等待数据";
  $("#index-futures-updated").title = payload.provider || "新浪财经公开期货行情";
  const nextCapture = payload.schedule?.nextCaptureAt;
  const marketState = payload.schedule?.marketState;
  $("#index-futures-next").textContent = nextCapture
    ? `下一次自动采样 ${formatIndexFuturesTime(nextCapture)}`
    : marketState === "break" ? "午间休市" : "当前交易日采样已结束";

  const syntheticChange = Number(summary.syntheticChangePercent || 0);
  const priceChange = Number(summary.priceIndexChangePercent || 0);
  const syntheticNode = $("#index-futures-synthetic");
  const priceNode = $("#index-futures-price-index");
  syntheticNode.textContent = formatFuturesNumber(summary.syntheticPrice, 2);
  priceNode.textContent = formatFuturesNumber(summary.priceIndex, 2);
  syntheticNode.className = futuresToneClass(syntheticChange);
  priceNode.className = futuresToneClass(priceChange);
  $("#index-futures-synthetic-meta").textContent = `较首条 ${formatFuturesSigned(syntheticChange, "%", 2)} · 研究值非交易报价`;
  $("#index-futures-price-index-meta").textContent = `较首条 ${formatFuturesSigned(priceChange, "%", 2)} · 四个近月合约等权`;
  $("#index-futures-day-oi").textContent = formatFuturesSigned(summary.totalDayOpenInterestChange, "手");
  $("#index-futures-day-oi-meta").textContent = formatFuturesNominal(summary.totalNominalDayOpenInterestChangeYuan);
  const flowNode = $("#index-futures-flow");
  flowNode.textContent = summary.flowLabel || "等待采样";
  flowNode.className = futuresFlowTone(summary.flowType);
  $("#index-futures-flow-meta").textContent = snapshots.length > 1
    ? `最近半小时 ${formatFuturesSigned(summary.intervalOpenInterestChange, "手")} · 较首条 ${formatFuturesSigned(summary.openInterestChangeFromFirst, "手")}`
    : "第一条有效快照作为今日基准";

  const methodology = $("#index-futures-methodology");
  if (methodology) {
    const entries = Object.entries(payload.methodology || {});
    methodology.innerHTML = entries.length
      ? entries.map(([, value]) => `<p>${escapeHtml(value)}</p>`).join("")
      : `<p>等待模型口径。</p>`;
  }

  renderIndexFuturesChart(day);
  renderIndexFuturesTimeline(day);
  renderIndexFuturesTable(day);
}

const WAR_ROOM_LOGIC_VERSION = "position-pressure-v2";

const warRoomFlowLabels = {
  new_long: "多方主导增仓",
  short_cover: "空头回补主导",
  new_short: "空方主导增仓",
  long_exit: "多头撤退主导",
  balanced: "主动方向均衡",
};

function warRoomClamp(value, minimum, maximum) {
  return Math.max(minimum, Math.min(maximum, Number(value) || 0));
}

function warRoomPressureSignal(priceChangePercent, basisChangePercent = null) {
  const priceMove = Number(priceChangePercent || 0);
  const basisMove = Number(basisChangePercent);
  const priceSignal = Math.tanh(priceMove / .35);
  const hasBasis = Number.isFinite(basisMove);
  const basisSignal = hasBasis ? Math.tanh(basisMove / .18) : 0;
  const score = warRoomClamp(
    hasBasis ? priceSignal * .82 + basisSignal * .18 : priceSignal,
    -1,
    1,
  );
  const longShare = warRoomClamp(.5 + score * .35, .15, .85);
  return {
    score,
    longShare,
    shortShare: 1 - longShare,
    confidence: 50 + Math.abs(score) * 35,
  };
}

function inferWarRoomFlowFromPressure(directionScore, openInterestChange) {
  const score = Number(directionScore || 0);
  const oiMove = Number(openInterestChange || 0);
  if (Math.abs(score) < .08 || Math.abs(oiMove) < 1) return "balanced";
  if (score > 0) return oiMove > 0 ? "new_long" : "short_cover";
  return oiMove > 0 ? "new_short" : "long_exit";
}

function warRoomContractSourceDate(snapshot) {
  const dates = [];
  futuresProducts(snapshot).forEach((product) => {
    (product.contracts || []).forEach((contract) => {
      if (!contract?.sourceDate || !contract?.sourceTime) return;
      const parsed = new Date(`${contract.sourceDate}T${contract.sourceTime}+08:00`);
      if (!Number.isNaN(parsed.getTime())) dates.push(parsed);
    });
  });
  if (dates.length) return new Date(Math.max(...dates.map((item) => item.getTime())));
  const fallback = new Date(snapshot?.sourceAt || snapshot?.capturedAt || "");
  return Number.isNaN(fallback.getTime()) ? null : fallback;
}

function warRoomSnapshotQuality(snapshot) {
  const spotCount = futuresProducts(snapshot).filter((item) => item?.spot?.price != null).length;
  const basisCount = futuresProducts(snapshot).filter((item) => item?.basisPercent != null).length;
  const contractCount = futuresProducts(snapshot).reduce((sum, item) => sum + (item.contracts?.length || 0), 0);
  return spotCount * 100 + basisCount * 10 + contractCount;
}

function warRoomSnapshots(day) {
  const byTimestamp = new Map();
  (Array.isArray(day?.snapshots) ? day.snapshots : []).forEach((snapshot, sourceIndex) => {
    const effectiveAt = warRoomContractSourceDate(snapshot);
    if (!effectiveAt) return;
    const key = effectiveAt.getTime();
    const normalized = {
      ...snapshot,
      label: formatIndexFuturesTime(effectiveAt.toISOString()),
      sourceAt: effectiveAt.toISOString(),
      _warRoomSourceIndex: sourceIndex,
      _warRoomEffectiveAt: effectiveAt,
    };
    const previous = byTimestamp.get(key);
    if (!previous) {
      byTimestamp.set(key, normalized);
      return;
    }
    const currentQuality = warRoomSnapshotQuality(normalized);
    const previousQuality = warRoomSnapshotQuality(previous);
    if (currentQuality > previousQuality || (currentQuality === previousQuality && sourceIndex > previous._warRoomSourceIndex)) {
      byTimestamp.set(key, normalized);
    }
  });
  return [...byTimestamp.values()].sort((a, b) => a._warRoomEffectiveAt - b._warRoomEffectiveAt);
}

function warRoomChinaTimeParts(value) {
  const date = value instanceof Date ? value : new Date(value || "");
  if (Number.isNaN(date.getTime())) return null;
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return {
    date: `${values.year}-${values.month}-${values.day}`,
    hour: Number(values.hour),
    minute: Number(values.minute),
  };
}

function warRoomTradingMinute(value) {
  const parts = warRoomChinaTimeParts(value);
  if (!parts) return null;
  const minutes = parts.hour * 60 + parts.minute;
  if (minutes >= 9 * 60 + 30 && minutes <= 11 * 60 + 30) return minutes - (9 * 60 + 30);
  if (minutes >= 13 * 60 && minutes <= 15 * 60) return 120 + minutes - 13 * 60;
  return null;
}

function warRoomReferenceFor(snapshots, index, targetMinutes = 30) {
  const current = snapshots[index];
  const currentMinute = warRoomTradingMinute(current?._warRoomEffectiveAt || current?.sourceAt);
  if (currentMinute == null || currentMinute < targetMinutes) return null;
  const target = currentMinute - targetMinutes;
  let best = null;
  snapshots.slice(0, index).forEach((candidate, candidateIndex) => {
    const candidateMinute = warRoomTradingMinute(candidate._warRoomEffectiveAt || candidate.sourceAt);
    if (candidateMinute == null) return;
    const distance = Math.abs(candidateMinute - target);
    if (distance > 7) return;
    if (!best || distance < best.distance || (distance === best.distance && candidateIndex > best.index)) {
      best = { snapshot: candidate, index: candidateIndex, distance, minute: candidateMinute };
    }
  });
  return best;
}

function warRoomWindowMetrics(snapshots, index = snapshots.length - 1) {
  const latest = snapshots[index];
  if (!latest) return { available: false, latest: null, reference: null, products: [] };
  const referenceMatch = warRoomReferenceFor(snapshots, index, 30);
  if (!referenceMatch) return { available: false, latest, reference: null, products: [] };
  const reference = referenceMatch.snapshot;
  const previousProducts = Object.fromEntries(futuresProducts(reference).map((item) => [item.code, item]));
  const products = futuresProducts(latest).map((current) => {
    const prior = previousProducts[current.code];
    const priorPrice = Number(prior?.frontPrice);
    const currentPrice = Number(current?.frontPrice);
    const priceChangePercent = Number.isFinite(priorPrice) && priorPrice !== 0 && Number.isFinite(currentPrice)
      ? (currentPrice / priorPrice - 1) * 100
      : 0;
    const openInterestChange = Number(current?.openInterest || 0) - Number(prior?.openInterest || 0);
    const currentBasis = Number(current?.basisPercent);
    const priorBasis = Number(prior?.basisPercent);
    const basisChangePercent = Number.isFinite(currentBasis) && Number.isFinite(priorBasis)
      ? currentBasis - priorBasis
      : null;
    const priorContracts = Object.fromEntries((prior?.contracts || []).map((item) => [item.code, item]));
    const contractSignals = (current?.contracts || []).map((contract) => {
      const priorContract = priorContracts[contract.code];
      const currentContractPrice = Number(contract?.price);
      const priorContractPrice = Number(priorContract?.price);
      const contractPriceChangePercent = Number.isFinite(currentContractPrice)
        && Number.isFinite(priorContractPrice)
        && priorContractPrice !== 0
        ? (currentContractPrice / priorContractPrice - 1) * 100
        : priceChangePercent;
      const contractOpenInterestChange = Number(contract?.openInterest || 0) - Number(priorContract?.openInterest || 0);
      return {
        code: contract.code,
        openInterestChange: contractOpenInterestChange,
        ...warRoomPressureSignal(contractPriceChangePercent, basisChangePercent),
      };
    }).filter((item) => priorContracts[item.code]);
    const contractWeight = contractSignals.reduce((sum, item) => sum + Math.abs(item.openInterestChange), 0);
    const fallbackPressure = warRoomPressureSignal(priceChangePercent, basisChangePercent);
    const longShare = contractWeight > 0
      ? contractSignals.reduce((sum, item) => sum + Math.abs(item.openInterestChange) * item.longShare, 0) / contractWeight
      : fallbackPressure.longShare;
    const directionScore = contractWeight > 0
      ? contractSignals.reduce((sum, item) => sum + Math.abs(item.openInterestChange) * item.score, 0) / contractWeight
      : fallbackPressure.score;
    const shortShare = 1 - longShare;
    const directionConfidence = 50 + Math.abs(directionScore) * 35;
    const flowType = inferWarRoomFlowFromPressure(directionScore, openInterestChange);
    const positiveIncrease = Math.max(0, openInterestChange);
    return {
      code: current.code,
      name: current.name,
      priceChangePercent,
      basisChangePercent,
      openInterestChange,
      longPressurePercent: longShare * 100,
      shortPressurePercent: shortShare * 100,
      directionScore,
      directionConfidence,
      inferredLongIncrease: positiveIncrease * longShare,
      inferredShortIncrease: positiveIncrease * shortShare,
      flowType,
      flowLabel: warRoomFlowLabels[flowType],
      current,
      prior,
    };
  });
  const priceMoves = products.map((item) => item.priceChangePercent).filter(Number.isFinite);
  const priceChangePercent = priceMoves.length
    ? priceMoves.reduce((sum, value) => sum + value, 0) / priceMoves.length
    : 0;
  const openInterestChange = products.reduce((sum, item) => sum + item.openInterestChange, 0);
  const absoluteContribution = products.reduce((sum, item) => sum + Math.abs(item.openInterestChange), 0);
  const longPercent = absoluteContribution > 0
    ? products.reduce((sum, item) => sum + Math.abs(item.openInterestChange) * item.longPressurePercent, 0) / absoluteContribution
    : 50;
  const shortPercent = 100 - longPercent;
  const directionScore = absoluteContribution > 0
    ? products.reduce((sum, item) => sum + Math.abs(item.openInterestChange) * item.directionScore, 0) / absoluteContribution
    : 0;
  const directionConfidence = 50 + Math.abs(directionScore) * 35;
  const longIncrease = products.reduce((sum, item) => sum + item.inferredLongIncrease, 0);
  const shortIncrease = products.reduce((sum, item) => sum + item.inferredShortIncrease, 0);
  const ratio = absoluteContribution > 0 && shortPercent > 0 ? longPercent / shortPercent : null;
  products.forEach((item) => {
    item.contributionPercent = absoluteContribution > 0
      ? (Math.abs(item.openInterestChange) / absoluteContribution) * 100
      : 0;
  });
  const currentMinute = warRoomTradingMinute(latest._warRoomEffectiveAt || latest.sourceAt);
  const actualMinutes = currentMinute == null ? 0 : currentMinute - referenceMatch.minute;
  const flowType = inferWarRoomFlowFromPressure(directionScore, openInterestChange);
  const latestSynthetic = Number(latest.syntheticPrice || 100);
  const referenceSynthetic = Number(reference.syntheticPrice || 100);
  const syntheticChangePercent = referenceSynthetic
    ? (latestSynthetic / referenceSynthetic - 1) * 100
    : 0;
  return {
    available: true,
    latest,
    reference,
    referenceIndex: referenceMatch.index,
    actualMinutes,
    products,
    priceChangePercent,
    syntheticChangePercent,
    openInterestChange,
    longIncrease,
    shortIncrease,
    netIncrease: longIncrease - shortIncrease,
    ratio,
    longPercent,
    shortPercent,
    directionScore,
    directionConfidence,
    hasPressure: absoluteContribution > 0,
    flowType,
    flowLabel: warRoomFlowLabels[flowType],
  };
}

function selectedWarRoomDay() {
  return selectedIndexFuturesDay();
}

async function loadWarRoomAnalysis({ silent = false, render = true } = {}) {
  try {
    const date = state.selectedFuturesDate ? `?date=${encodeURIComponent(state.selectedFuturesDate)}` : "";
    state.warRoomAnalysis = await fetchJson(`/api/war-room-analysis${date}`);
  } catch (error) {
    state.warRoomAnalysis = null;
    if (!silent) showToast(`战情局研判读取失败：${error.message}`);
  }
  if (render) renderWarRoomAi();
}

async function refreshWarRoom() {
  const button = $("#war-room-refresh");
  const previousText = button?.textContent || "立即采样";
  if (button) {
    button.disabled = true;
    button.textContent = "正在采样";
  }
  try {
    state.indexFutures = await fetchJson("/api/index-futures/refresh", { method: "POST", body: "{}" });
    const days = indexFuturesDays();
    state.selectedFuturesDate = days[0]?.date || state.selectedFuturesDate;
    await Promise.all([
      loadMarketPulse({ force: true, silent: true, render: false }),
      loadUsTreasury({ force: true, silent: true, render: false }),
      loadAShareMarketSnapshot({ force: true, silent: true, render: false }),
    ]);
    renderWarRoom();
    await generateWarRoomAnalysis("manual_sample");
    showToast("大A战情局采样与研判已更新");
  } catch (error) {
    showToast(`战情局采样失败：${error.message}`);
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = previousText;
    }
  }
}

function renderWarRoomMarketPulse() {
  const node = $("#war-room-market-pulse-list");
  const meta = $("#war-room-market-pulse-meta");
  if (!node || !meta) return;
  const payload = state.marketPulse || fallbackMarketPulse;
  const items = Array.isArray(payload.items) ? payload.items : [];
  if (!items.length) {
    node.innerHTML = `<div class="war-room-empty">等待全球股指行情</div>`;
    meta.textContent = payload.state === "offline" ? "行情暂不可用" : "正在连接";
    return;
  }
  node.innerHTML = items.map((item, index) => {
    const hasPrice = marketPulseHasNumber(item.price);
    const hasChange = marketPulseHasNumber(item.changePercent);
    const change = hasChange ? Number(item.changePercent) : null;
    const tone = hasChange ? futuresToneClass(change) : "";
    const previousGroup = items[index - 1]?.group;
    const groupStart = index > 0 && item.group !== previousGroup ? " group-start" : "";
    return `
      <article class="war-room-market-pulse-item ${tone}${groupStart}">
        <header><span>${escapeHtml(item.shortName || item.name || "--")}</span><small>${escapeHtml(item.groupLabel || item.exchange || "")}</small></header>
        <strong>${hasChange ? formatFuturesSigned(change, "%", 2) : "--"}</strong>
        <small>${hasPrice ? formatFuturesNumber(item.price, Number(item.decimals ?? 2)) : "--"} · ${item.marketTime ? formatIndexFuturesTime(item.marketTime) : "--"}</small>
      </article>
    `;
  }).join("");
  const readyCount = Number(payload.readyCount ?? items.filter((item) => marketPulseHasNumber(item.price)).length);
  const updatedAt = payload.updatedAt ? formatIndexFuturesTime(payload.updatedAt) : "--";
  meta.textContent = `${readyCount}/${items.length} · ${payload.state === "stale" ? "缓存" : "实时"} ${updatedAt}`;
}

function renderWarRoomTreasury() {
  const chartNode = $("#war-room-treasury-chart");
  const tenorsNode = $("#war-room-treasury-tenors");
  const metaNode = $("#war-room-treasury-meta");
  if (!chartNode || !tenorsNode || !metaNode) return;

  const payload = state.usTreasury || fallbackUsTreasury;
  const items = Array.isArray(payload.items) && payload.items.length
    ? payload.items
    : fallbackUsTreasury.items;
  const readyItems = items.filter((item) => marketPulseHasNumber(item.yield));
  const readyCount = Number(payload.readyCount ?? readyItems.length);
  const updatedAt = payload.updatedAt ? formatIndexFuturesTime(payload.updatedAt) : "--";
  const spread = payload.spreads?.twoTenBp;
  const spreadLabel = marketPulseHasNumber(spread)
    ? `2s10s ${formatFuturesSigned(spread, "bp", 1)}`
    : "2s10s --";
  const quoteMode = payload.state === "stale" ? "缓存" : (payload.quoteMode || "实时/可能延迟");
  const metaText = `${readyCount}/${payload.count || items.length} · ${quoteMode} ${updatedAt} · ${spreadLabel}`;
  metaNode.textContent = metaText;
  metaNode.title = [
    metaText,
    `来源：${payload.provider || "CNBC Quote Cache / Tradeweb"}`,
    ...(payload.errors || []),
  ].filter(Boolean).join("\n");

  tenorsNode.innerHTML = items.map((item) => {
    const hasYield = marketPulseHasNumber(item.yield);
    const hasChange = marketPulseHasNumber(item.changeBp);
    const change = hasChange ? Number(item.changeBp) : null;
    const tone = change > 0 ? " up" : change < 0 ? " down" : "";
    const detail = [
      `${item.tenor || "--"}：${hasYield ? `${formatFuturesNumber(item.yield, 3)}%` : "暂无报价"}`,
      hasChange ? `较前收 ${formatFuturesSigned(change, "bp", 1)}` : "",
      item.marketTimeLabel || "",
      item.exchange || "",
      item.provider || "",
    ].filter(Boolean).join(" · ");
    return `
      <div class="war-room-treasury-tenor${tone}" title="${escapeHtml(detail)}">
        <span>${escapeHtml(item.tenor || "--")}</span>
        <strong>${hasYield ? `${formatFuturesNumber(item.yield, 3)}%` : "--"}</strong>
        <small>${hasChange ? formatFuturesSigned(change, "", 1) : "--"}</small>
      </div>
    `;
  }).join("");

  if (readyItems.length < 2) {
    chartNode.innerHTML = `<div class="war-room-treasury-empty">${payload.state === "offline" ? "美债行情暂不可用" : "正在连接全期限报价"}</div>`;
    return;
  }

  const width = Math.max(300, Math.round(chartNode.clientWidth || 420));
  const height = Math.max(46, Math.round(chartNode.clientHeight || 64));
  const margin = { top: 5, right: 5, bottom: 5, left: 27 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const yields = readyItems.map((item) => Number(item.yield));
  const rawMin = Math.min(...yields);
  const rawMax = Math.max(...yields);
  const padding = Math.max(0.06, (rawMax - rawMin) * 0.16);
  const minYield = rawMin - padding;
  const maxYield = rawMax + padding;
  const yieldRange = Math.max(0.01, maxYield - minYield);
  const maxMonths = Math.max(...readyItems.map((item) => Number(item.months || 1)));
  const xFor = (item) => margin.left
    + (Math.log1p(Number(item.months || 1)) / Math.log1p(maxMonths)) * plotWidth;
  const yFor = (value) => margin.top + ((maxYield - Number(value)) / yieldRange) * plotHeight;
  const points = readyItems.map((item) => ({
    item,
    x: xFor(item),
    y: yFor(item.yield),
  }));
  const path = points.map((point, index) => `${index ? "L" : "M"} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`).join(" ");
  const baseline = margin.top + plotHeight;
  const areaPath = `${path} L ${points[points.length - 1].x.toFixed(2)} ${baseline.toFixed(2)} L ${points[0].x.toFixed(2)} ${baseline.toFixed(2)} Z`;
  const gridValues = [maxYield, (maxYield + minYield) / 2, minYield];
  const grid = gridValues.map((value) => {
    const y = yFor(value);
    return `
      <line class="grid" x1="${margin.left}" y1="${y.toFixed(2)}" x2="${width - margin.right}" y2="${y.toFixed(2)}"></line>
      <text x="1" y="${Math.max(8, y + 3).toFixed(2)}">${formatFuturesNumber(value, 2)}</text>
    `;
  }).join("");
  const circles = points.map(({ item, x, y }) => `
    <circle class="point" cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="2.5">
      <title>${escapeHtml(`${item.tenor} ${formatFuturesNumber(item.yield, 3)}%，${marketPulseHasNumber(item.changeBp) ? `较前收 ${formatFuturesSigned(item.changeBp, "bp", 1)}` : "前收暂缺"}`)}</title>
    </circle>
  `).join("");

  chartNode.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="美国国债1个月至30年当日收益率曲线">
      ${grid}
      <path class="curve-area" d="${areaPath}"></path>
      <path class="curve" d="${path}"></path>
      ${circles}
    </svg>
  `;
}

function treasuryHistoryRows(payload, item) {
  const symbol = item?.symbol || state.selectedTreasurySymbol;
  const rawRows = Array.isArray(payload?.historyBySymbol?.[symbol])
    ? payload.historyBySymbol[symbol]
    : [];
  const rows = rawRows
    .map((row) => ({
      timestamp: row.timestamp || row.checkedAt || "",
      checkedAt: row.checkedAt || "",
      yield: Number(row.yield),
      changeBp: marketPulseHasNumber(row.changeBp) ? Number(row.changeBp) : null,
      marketTimeLabel: row.marketTimeLabel || "",
    }))
    .filter((row) => row.timestamp && Number.isFinite(row.yield));

  if (item && marketPulseHasNumber(item.yield)) {
    const timestamp = item.marketTime || payload?.updatedAt || payload?.checkedAt || new Date().toISOString();
    const value = Number(item.yield);
    const exists = rows.some((row) => row.timestamp === timestamp && Math.abs(row.yield - value) < 0.0001);
    if (!exists) {
      rows.push({
        timestamp,
        checkedAt: payload?.checkedAt || "",
        yield: value,
        changeBp: marketPulseHasNumber(item.changeBp) ? Number(item.changeBp) : null,
        marketTimeLabel: item.marketTimeLabel || "",
      });
    }
  }

  return rows
    .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
    .slice(-120);
}

function treasuryDailyRows(item) {
  const symbol = item?.symbol || state.selectedTreasurySymbol;
  const rawRows = Array.isArray(state.usTreasuryDaily?.historyBySymbol?.[symbol])
    ? state.usTreasuryDaily.historyBySymbol[symbol]
    : [];
  return rawRows
    .map((row) => ({
      timestamp: row.date || "",
      yield: Number(row.yield),
      source: row.source || state.usTreasuryDaily?.provider || "U.S. Treasury",
    }))
    .filter((row) => row.timestamp && Number.isFinite(row.yield))
    .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
    .slice(-120);
}

function treasuryExternalIntradayRows(item) {
  const symbol = item?.symbol || state.selectedTreasurySymbol;
  const rawRows = Array.isArray(state.usTreasuryIntraday?.historyBySymbol?.[symbol])
    ? state.usTreasuryIntraday.historyBySymbol[symbol]
    : [];
  return rawRows
    .map((row) => ({
      timestamp: row.timestamp || "",
      yield: Number(row.yield),
      source: row.source || state.usTreasuryIntraday?.provider || "Yahoo Finance",
    }))
    .filter((row) => row.timestamp && Number.isFinite(row.yield))
    .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
    .slice(-120);
}

function renderTreasurySingleChart(payload, item) {
  const titleNode = $("#treasury-single-title");
  const metaNode = $("#treasury-single-meta");
  const chartNode = $("#treasury-single-chart");
  if (!titleNode || !metaNode || !chartNode) return;

  const symbol = item?.symbol || state.selectedTreasurySymbol || "US10Y";
  const tenor = item?.tenor || symbol;
  const mode = state.treasuryTrendMode === "intraday" ? "intraday" : "daily";
  const externalIntradayRows = treasuryExternalIntradayRows(item);
  const rows = mode === "daily" ? treasuryDailyRows(item) : (externalIntradayRows.length > 1 ? externalIntradayRows : treasuryHistoryRows(payload, item));
  const intradaySource = externalIntradayRows.length > 1 ? "5分钟盘中线" : "本机盘中采样";
  titleNode.textContent = `${tenor} ${mode === "daily" ? "日线走势" : "盘中走势"}`;
  const latest = rows[rows.length - 1];
  const first = rows[0];
  const moveBp = latest && first ? (Number(latest.yield) - Number(first.yield)) * 100 : null;
  metaNode.textContent = rows.length > 1
    ? `${mode === "daily" ? "官方日线" : intradaySource} · ${rows.length} 个点 · 区间变化 ${formatFuturesSigned(moveBp, "bp", 1)}`
    : mode === "daily"
      ? "官方日线暂未取到，切到盘中可看本机采样"
      : "盘中历史点不足，刷新/自动采样后会形成走势";
  document.querySelectorAll("[data-treasury-trend-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.treasuryTrendMode === mode);
  });

  if (!rows.length) {
    chartNode.innerHTML = `<div class="treasury-empty">暂无 ${escapeHtml(tenor)} ${mode === "daily" ? "官方日线" : "盘中采样"}</div>`;
    return;
  }

  const width = Math.max(520, Math.round(chartNode.clientWidth || 720));
  const height = Math.max(210, Math.round(chartNode.clientHeight || 240));
  const margin = { top: 20, right: 22, bottom: 38, left: 54 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const values = rows.map((row) => Number(row.yield));
  const rawMin = Math.min(...values);
  const rawMax = Math.max(...values);
  const padding = Math.max(0.012, (rawMax - rawMin) * 0.2);
  const minYield = rawMin - padding;
  const maxYield = rawMax + padding;
  const range = Math.max(0.01, maxYield - minYield);
  const xFor = (index) => rows.length === 1
    ? margin.left + plotWidth / 2
    : margin.left + (index / (rows.length - 1)) * plotWidth;
  const yFor = (value) => margin.top + ((maxYield - Number(value)) / range) * plotHeight;
  const points = rows.map((row, index) => ({ row, x: xFor(index), y: yFor(row.yield) }));
  const path = points.map((point, index) => `${index ? "L" : "M"} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`).join(" ");
  const baseline = margin.top + plotHeight;
  const areaPath = rows.length > 1
    ? `${path} L ${points[points.length - 1].x.toFixed(2)} ${baseline.toFixed(2)} L ${points[0].x.toFixed(2)} ${baseline.toFixed(2)} Z`
    : "";
  const gridValues = [maxYield, (maxYield + minYield) / 2, minYield];
  const grid = gridValues.map((value) => {
    const y = yFor(value);
    return `
      <line class="grid" x1="${margin.left}" y1="${y.toFixed(2)}" x2="${width - margin.right}" y2="${y.toFixed(2)}"></line>
      <text class="axis-y" x="8" y="${Math.max(14, y + 4).toFixed(2)}">${formatFuturesNumber(value, 3)}%</text>
    `;
  }).join("");
  const labelIndexes = rows.length > 2 ? [0, Math.floor((rows.length - 1) / 2), rows.length - 1] : [0, rows.length - 1];
  const xLabels = [...new Set(labelIndexes)].map((index) => `
    <text class="axis-x" x="${xFor(index).toFixed(2)}" y="${height - 14}" text-anchor="${index === 0 ? "start" : index === rows.length - 1 ? "end" : "middle"}">${escapeHtml(mode === "daily" ? String(rows[index]?.timestamp || "").slice(5) : formatIndexFuturesTime(rows[index]?.timestamp))}</text>
  `).join("");
  const dots = points.map(({ row, x, y }, index) => {
    const isLast = index === points.length - 1;
    return `
      <circle class="${isLast ? "last-point" : "point"}" cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${isLast ? 4.8 : 3}">
        <title>${escapeHtml(`${tenor} ${formatFuturesNumber(row.yield, 3)}% · ${mode === "daily" ? row.timestamp : formatIndexFuturesTime(row.timestamp)}`)}</title>
      </circle>
    `;
  }).join("");

  chartNode.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHtml(`${tenor} 美债收益率历史走势`)}">
      ${grid}
      ${areaPath ? `<path class="curve-area" d="${areaPath}"></path>` : ""}
      <path class="curve" d="${path}"></path>
      ${dots}
      ${xLabels}
    </svg>
  `;
}

function renderTreasuryWorkspace() {
  const workspace = $("#treasury-workspace");
  if (!workspace) return;

  const payload = state.usTreasury || fallbackUsTreasury;
  const items = Array.isArray(payload.items) && payload.items.length
    ? payload.items
    : fallbackUsTreasury.items;
  const readyItems = items.filter((item) => marketPulseHasNumber(item.yield));
  const bySymbol = Object.fromEntries(items.map((item) => [item.symbol, item]));
  if (!bySymbol[state.selectedTreasurySymbol]) {
    state.selectedTreasurySymbol = readyItems[0]?.symbol || items[0]?.symbol || "US10Y";
  }
  const selectedItem = bySymbol[state.selectedTreasurySymbol] || readyItems[0] || items[0];
  const updatedAt = payload.updatedAt ? formatIndexFuturesTime(payload.updatedAt) : "--";
  const readyCount = Number(payload.readyCount ?? readyItems.length);
  const quoteMode = payload.state === "stale" ? "缓存" : (payload.quoteMode || "实时/可能延迟");
  const twoTen = payload.spreads?.twoTenBp;
  const threeMonthTen = payload.spreads?.threeMonthTenBp;

  const setQuote = (yieldId, changeId, item) => {
    const yieldNode = $(yieldId);
    const changeNode = $(changeId);
    if (!yieldNode || !changeNode) return;
    const hasYield = marketPulseHasNumber(item?.yield);
    const hasChange = marketPulseHasNumber(item?.changeBp);
    const change = hasChange ? Number(item.changeBp) : 0;
    yieldNode.textContent = hasYield ? `${formatFuturesNumber(item.yield, 3)}%` : "--";
    changeNode.textContent = hasChange ? `较前收 ${formatFuturesSigned(change, "bp", 1)}` : "前收暂缺";
    changeNode.classList.toggle("positive", hasChange && change > 0);
    changeNode.classList.toggle("negative", hasChange && change < 0);
  };

  $("#treasury-provider").textContent = payload.provider || "CNBC Quote Cache / Tradeweb";
  $("#treasury-updated").textContent = `${readyCount}/${payload.count || items.length} · ${quoteMode} · ${updatedAt}`;
  $("#treasury-chart-meta").textContent = [
    `${readyCount}/${payload.count || items.length} 个期限`,
    `2s10s ${marketPulseHasNumber(twoTen) ? formatFuturesSigned(twoTen, "bp", 1) : "--"}`,
    `3M10Y ${marketPulseHasNumber(threeMonthTen) ? formatFuturesSigned(threeMonthTen, "bp", 1) : "--"}`,
  ].join(" · ");
  setQuote("#treasury-10y", "#treasury-10y-change", bySymbol.US10Y);
  setQuote("#treasury-2y", "#treasury-2y-change", bySymbol.US2Y);
  $("#treasury-2s10s").textContent = marketPulseHasNumber(twoTen) ? formatFuturesSigned(twoTen, "bp", 1) : "--";
  $("#treasury-3m10y").textContent = marketPulseHasNumber(threeMonthTen) ? formatFuturesSigned(threeMonthTen, "bp", 1) : "--";

  const tenorsNode = $("#treasury-tenors");
  if (tenorsNode) {
    tenorsNode.innerHTML = items.map((item) => {
      const hasYield = marketPulseHasNumber(item.yield);
      const hasChange = marketPulseHasNumber(item.changeBp);
      const change = hasChange ? Number(item.changeBp) : 0;
      const tone = change > 0 ? " up" : change < 0 ? " down" : "";
      const active = item.symbol === state.selectedTreasurySymbol ? " active" : "";
      return `
        <article class="treasury-tenor-card treasury-clickable${tone}${active}" role="button" tabindex="0" data-treasury-symbol="${escapeHtml(item.symbol || "")}">
          <span>${escapeHtml(item.tenor || "--")}</span>
          <strong>${hasYield ? `${formatFuturesNumber(item.yield, 3)}%` : "--"}</strong>
          <small>${hasChange ? formatFuturesSigned(change, "bp", 1) : "前收暂缺"}</small>
        </article>
      `;
    }).join("");
  }

  const tableBody = $("#treasury-table-body");
  if (tableBody) {
    tableBody.innerHTML = items.map((item) => {
      const hasYield = marketPulseHasNumber(item.yield);
      const hasChange = marketPulseHasNumber(item.changeBp);
      const change = hasChange ? Number(item.changeBp) : 0;
      const tone = change > 0 ? "positive" : change < 0 ? "negative" : "";
      const active = item.symbol === state.selectedTreasurySymbol ? " class=\"active\"" : "";
      return `
        <tr${active} data-treasury-symbol="${escapeHtml(item.symbol || "")}">
          <td><strong>${escapeHtml(item.tenor || "--")}</strong><span>${escapeHtml(item.name || item.symbol || "")}</span></td>
          <td>${hasYield ? `${formatFuturesNumber(item.yield, 3)}%` : "--"}</td>
          <td class="${tone}">${hasChange ? formatFuturesSigned(change, "bp", 1) : "--"}</td>
          <td>${escapeHtml(item.marketTimeLabel || updatedAt || "--")}</td>
          <td>${escapeHtml(item.status || payload.state || "--")}</td>
        </tr>
      `;
    }).join("");
  }

  workspace.querySelectorAll("[data-treasury-symbol]").forEach((node) => {
    node.classList.toggle("active", node.dataset.treasurySymbol === state.selectedTreasurySymbol);
  });

  renderTreasurySingleChart(payload, selectedItem);

  const chartNode = $("#treasury-chart");
  if (!chartNode) return;
  if (readyItems.length < 2) {
    chartNode.innerHTML = `<div class="treasury-empty">${payload.state === "offline" ? "美债行情暂不可用" : "正在连接全期限报价"}</div>`;
    return;
  }

  const width = Math.max(720, Math.round(chartNode.clientWidth || 900));
  const height = Math.max(260, Math.round(chartNode.clientHeight || 320));
  const margin = { top: 18, right: 34, bottom: 42, left: 58 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const yields = readyItems.map((item) => Number(item.yield));
  const rawMin = Math.min(...yields);
  const rawMax = Math.max(...yields);
  const padding = Math.max(0.05, (rawMax - rawMin) * 0.18);
  const minYield = rawMin - padding;
  const maxYield = rawMax + padding;
  const yieldRange = Math.max(0.01, maxYield - minYield);
  const maxMonths = Math.max(...readyItems.map((item) => Number(item.months || 1)));
  const xFor = (item) => margin.left
    + (Math.log1p(Number(item.months || 1)) / Math.log1p(maxMonths)) * plotWidth;
  const yFor = (value) => margin.top + ((maxYield - Number(value)) / yieldRange) * plotHeight;
  const points = readyItems.map((item) => ({ item, x: xFor(item), y: yFor(item.yield) }));
  const path = points.map((point, index) => `${index ? "L" : "M"} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`).join(" ");
  const baseline = margin.top + plotHeight;
  const areaPath = `${path} L ${points[points.length - 1].x.toFixed(2)} ${baseline.toFixed(2)} L ${points[0].x.toFixed(2)} ${baseline.toFixed(2)} Z`;
  const gridValues = [maxYield, (maxYield + minYield) / 2, minYield];
  const grid = gridValues.map((value) => {
    const y = yFor(value);
    return `
      <line class="grid" x1="${margin.left}" y1="${y.toFixed(2)}" x2="${width - margin.right}" y2="${y.toFixed(2)}"></line>
      <text class="axis-y" x="8" y="${Math.max(14, y + 4).toFixed(2)}">${formatFuturesNumber(value, 2)}%</text>
    `;
  }).join("");
  const xLabels = points.map(({ item, x }) => `
    <text class="axis-x" x="${x.toFixed(2)}" y="${height - 14}" text-anchor="middle">${escapeHtml(item.tenor || "")}</text>
  `).join("");
  const circles = points.map(({ item, x, y }) => {
    const hasChange = marketPulseHasNumber(item.changeBp);
    const change = hasChange ? Number(item.changeBp) : 0;
    const tone = change > 0 ? " up" : change < 0 ? " down" : "";
    return `
      <g class="treasury-point${tone}">
        <circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="4.5"></circle>
        <text x="${x.toFixed(2)}" y="${Math.max(12, y - 10).toFixed(2)}" text-anchor="middle">${formatFuturesNumber(item.yield, 2)}%</text>
        <title>${escapeHtml(`${item.tenor} ${formatFuturesNumber(item.yield, 3)}%，${hasChange ? `较前收 ${formatFuturesSigned(change, "bp", 1)}` : "前收暂缺"}`)}</title>
      </g>
    `;
  }).join("");

  chartNode.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="美国国债1个月至30年收益率曲线">
      ${grid}
      <path class="curve-area" d="${areaPath}"></path>
      <path class="curve" d="${path}"></path>
      ${circles}
      ${xLabels}
    </svg>
  `;
}

function renderWarRoomAShareMarketSnapshot() {
  const tape = $("#war-room-session-strip");
  if (!tape) return;
  const payload = state.aShareMarket || fallbackAShareMarket;
  const turnover = payload.turnover || {};
  const breadth = payload.breadth || {};
  const limits = payload.limits || {};
  const markets = Array.isArray(turnover.markets) ? turnover.markets : [];
  const marketById = Object.fromEntries(markets.map((item) => [item.id, item]));

  $("#war-room-turnover-value").textContent = formatAShareMoney(turnover.currentYuan);
  $("#war-room-turnover-breakdown").textContent = [
    ["沪", marketById.shanghai?.turnoverYuan],
    ["深", marketById.shenzhen?.turnoverYuan],
    ["京", marketById.beijing?.turnoverYuan],
  ].map(([label, value]) => `${label} ${formatAShareMoney(value)}`).join(" · ");

  const sameTimeNode = $("#war-room-same-time-change");
  sameTimeNode.textContent = formatAShareMoney(turnover.changeYuan, true);
  sameTimeNode.className = marketPulseHasNumber(turnover.changeYuan) ? futuresToneClass(turnover.changeYuan) : "";
  const sameTimePercent = marketPulseHasNumber(turnover.changePercent)
    ? formatFuturesSigned(turnover.changePercent, "%", 2)
    : "--";
  $("#war-room-same-time-meta").textContent = marketPulseHasNumber(turnover.previousSameTimeYuan)
    ? `昨同 ${formatAShareMoney(turnover.previousSameTimeYuan)} · ${sameTimePercent}`
    : "等待同分钟数据";

  const closed = turnover.forecastMethod === "closed";
  $("#war-room-forecast-label").textContent = closed ? "全天成交" : "全天预估成交";
  $("#war-room-forecast-value").textContent = formatAShareMoney(turnover.estimatedFullDayYuan);
  const comparisonTime = turnover.comparisonAsOf ? formatIndexFuturesTime(turnover.comparisonAsOf) : "--";
  $("#war-room-forecast-meta").textContent = marketPulseHasNumber(turnover.previousCompletionRatio)
    ? `${closed ? "收盘值" : `昨同进度 ${formatFuturesNumber(turnover.previousCompletionRatio, 1)}%`} · ${comparisonTime}`
    : "按昨日同分钟成交节奏";

  $("#war-room-advance-count").textContent = formatAShareCount(breadth.advanceCount);
  $("#war-room-unchanged-count").textContent = formatAShareCount(breadth.unchangedCount);
  $("#war-room-decline-count").textContent = formatAShareCount(breadth.declineCount);
  $("#war-room-limit-up-count").textContent = formatAShareCount(limits.limitUpCount);
  $("#war-room-limit-down-count").textContent = formatAShareCount(limits.limitDownCount);
  const breadthTime = breadth.asOf ? formatIndexFuturesTime(breadth.asOf) : "--";
  $("#war-room-breadth-meta").textContent = marketPulseHasNumber(breadth.activeCount)
    ? `${formatAShareCount(breadth.activeCount)}家 · ${breadthTime}`
    : payload.state === "offline" ? "行情暂不可用" : "等待行情";
  tape.dataset.state = payload.state || "waiting";
}

function renderWarRoomHalfHour(metrics) {
  const available = Boolean(metrics?.available);
  $("#war-room-half-hour-window").textContent = available
    ? `${metrics.reference.label} → ${metrics.latest.label} · ${metrics.actualMinutes}分钟 · 事实值+推定方向`
    : "等待足够快照";
  const oiNode = $("#war-room-window-oi");
  oiNode.textContent = available ? formatFuturesSigned(metrics.openInterestChange, "手") : "--";
  oiNode.className = "";
  const priceNode = $("#war-room-window-price");
  priceNode.textContent = available ? formatFuturesSigned(metrics.priceChangePercent, "%", 2) : "--";
  priceNode.className = available ? futuresToneClass(metrics.priceChangePercent) : "";
  const directionNode = $("#war-room-direction");
  directionNode.textContent = available ? metrics.flowLabel : "--";
  directionNode.className = available ? futuresFlowTone(metrics.flowType) : "";
  const ratioText = !available || metrics.ratio == null
    ? "--"
    : Number.isFinite(metrics.ratio)
      ? `${formatFuturesNumber(metrics.ratio, 2)} : 1`
      : "∞ : 1";
  $("#war-room-pressure-ratio").textContent = ratioText;

  const longPercent = available ? metrics.longPercent : 50;
  const shortPercent = available ? metrics.shortPercent : 50;
  $("#war-room-long-bar").style.width = `${longPercent}%`;
  $("#war-room-short-bar").style.width = `${shortPercent}%`;
  $("#war-room-long-percent").textContent = available && metrics.hasPressure
    ? `多 ${formatFuturesNumber(longPercent, 1)}%`
    : "--";
  $("#war-room-short-percent").textContent = available && metrics.hasPressure
    ? `空 ${formatFuturesNumber(shortPercent, 1)}%`
    : "--";

  const contributionNode = $("#war-room-contributions");
  contributionNode.innerHTML = available
    ? metrics.products.map((item) => {
        const balanced = Math.abs(Number(item.directionScore || 0)) < .08;
        const sideLabel = balanced
          ? "方向均衡"
          : Number(item.directionScore || 0) > 0
            ? `偏多 ${formatFuturesNumber(item.longPressurePercent, 0)}%`
            : `偏空 ${formatFuturesNumber(item.shortPressurePercent, 0)}%`;
        return `
          <span class="war-room-contribution ${escapeHtml(String(item.code || "").toLowerCase())}">
            ${escapeHtml(item.code)} ${formatFuturesSigned(item.openInterestChange, "手")} · ${escapeHtml(sideLabel)} · 权重${formatFuturesNumber(item.contributionPercent, 1)}%
          </span>
        `;
      }).join("")
    : `<span>IF、IH、IC、IM贡献等待计算</span>`;
}

function renderWarRoomHeaderAndKpis(day, snapshots, metrics) {
  const payload = state.indexFutures || fallbackIndexFutures;
  const latest = snapshots[snapshots.length - 1];
  const summary = day?.summary || {};
  const days = indexFuturesDays();
  const dateSelect = $("#war-room-date");
  dateSelect.innerHTML = days.length
    ? days.map((item) => `<option value="${escapeHtml(item.date)}"${item.date === (day?.date || "") ? " selected" : ""}>${escapeHtml(item.date)}</option>`).join("")
    : `<option value="">暂无交易日</option>`;
  if (day?.date) state.selectedFuturesDate = day.date;

  $("#war-room-subtitle").textContent = day
    ? `${day.date} · 已记录 ${snapshots.length} 个有效快照 · IF / IH / IC / IM全期限口径`
    : "IF、IH、IC、IM全期限价格与持仓联合研判";
  $("#war-room-updated").textContent = latest?.sourceAt ? formatIndexFuturesTime(latest.sourceAt) : "--";
  const nextCapture = payload.schedule?.nextCaptureAt;
  const marketState = payload.schedule?.marketState;
  $("#war-room-next").textContent = nextCapture
    ? formatIndexFuturesTime(nextCapture)
    : marketState === "break" ? "午间休市" : "采样结束";

  const syntheticChange = Number(summary.syntheticChangePercent || 0);
  const priceChange = Number(summary.priceIndexChangePercent || 0);
  const syntheticNode = $("#war-room-synthetic");
  const priceNode = $("#war-room-price-index");
  syntheticNode.textContent = formatFuturesNumber(latest?.syntheticPrice ?? summary.syntheticPrice, 2);
  priceNode.textContent = formatFuturesNumber(latest?.priceIndex ?? summary.priceIndex, 2);
  syntheticNode.className = futuresToneClass(syntheticChange);
  priceNode.className = futuresToneClass(priceChange);
  $("#war-room-synthetic-meta").textContent = `较首条 ${formatFuturesSigned(syntheticChange, "%", 2)} · 研究值非交易报价`;
  $("#war-room-price-index-meta").textContent = `较首条 ${formatFuturesSigned(priceChange, "%", 2)} · 四个近月等权`;
  $("#war-room-day-oi").textContent = formatFuturesSigned(latest?.totalDayOpenInterestChange ?? summary.totalDayOpenInterestChange, "手");
  $("#war-room-day-oi-meta").textContent = formatFuturesNominal(latest?.totalNominalDayOpenInterestChangeYuan ?? summary.totalNominalDayOpenInterestChangeYuan);
  const flowNode = $("#war-room-flow");
  flowNode.textContent = metrics.available ? metrics.flowLabel : "等待30分钟窗口";
  flowNode.className = metrics.available ? futuresFlowTone(metrics.flowType) : "";
  $("#war-room-flow-meta").textContent = metrics.available
    ? `近${metrics.actualMinutes}分钟 ${formatFuturesSigned(metrics.openInterestChange, "手")} · 价格 ${formatFuturesSigned(metrics.priceChangePercent, "%", 2)} · 方向推定`
    : "价格与持仓联合判断";

  const dataStatus = $("#war-room-data-status");
  dataStatus.textContent = payload.state === "ready" ? "运行中" : "等待数据";
  dataStatus.className = payload.state === "ready" ? "ready" : "";
  const collectorStatus = $("#war-room-collector-status");
  collectorStatus.textContent = payload.schedule?.enabled ? "正常" : "已停用";
  collectorStatus.className = payload.schedule?.enabled ? "ready" : "";
  collectorStatus.title = payload.provider || "新浪财经公开期货行情";
  const aiStatus = $("#war-room-ai-status");
  const aiReady = Boolean(state.config?.deepseek?.configured && state.config?.deepseek?.enabled);
  aiStatus.textContent = aiReady ? "DeepSeek正常" : "本地规则可用";
  aiStatus.className = "ready";
}

function renderWarRoomChart(snapshots) {
  const node = $("#war-room-chart");
  if (!node) return;
  if (!snapshots.length) {
    node.innerHTML = `<div class="war-room-empty">当前交易日暂无有效快照</div>`;
    return;
  }

  const bounds = node.getBoundingClientRect();
  const width = Math.max(320, Math.round(bounds.width || 920));
  const compact = width < 600;
  const height = Math.max(420, Math.round(bounds.height || (compact ? 520 : 620)));
  const margin = { left: compact ? 49 : 60, right: compact ? 16 : 26, top: 8, bottom: compact ? 52 : 30 };
  const gap = compact ? 28 : 24;
  const panelHeight = (height - margin.top - margin.bottom - gap * 2) / 3;
  const chartWidth = width - margin.left - margin.right;
  const xFor = (index) => margin.left + (snapshots.length === 1 ? chartWidth / 2 : (index / (snapshots.length - 1)) * chartWidth);
  const productCodes = ["IF", "IH", "IC", "IM"];
  const productClass = { IF: "if", IH: "ih", IC: "ic", IM: "im" };
  const productColor = {
    IF: "var(--war-blue)",
    IH: "var(--war-violet)",
    IC: "var(--war-amber)",
    IM: "var(--war-red)",
  };
  const firstProducts = Object.fromEntries(futuresProducts(snapshots[0]).map((item) => [item.code, item]));
  const productValues = Object.fromEntries(productCodes.map((code) => [
    code,
    snapshots.map((snapshot) => {
      const current = futuresProducts(snapshot).find((item) => item.code === code);
      const initialPrice = Number(firstProducts[code]?.frontPrice);
      const currentPrice = Number(current?.frontPrice);
      return Number.isFinite(initialPrice) && initialPrice !== 0 && Number.isFinite(currentPrice)
        ? (currentPrice / initialPrice - 1) * 100
        : 0;
    }),
  ]));
  const firstOpenInterest = Number(snapshots[0].totalOpenInterest || 0);
  const panels = [
    {
      label: "多空合成价 / 纯价格指数（首条=100）",
      format: (value) => value.toFixed(2),
      series: [
        { label: "多空合成价", values: snapshots.map((item) => Number(item.syntheticPrice || 100)), className: "synthetic", color: "var(--war-ink)" },
        { label: "纯价格", values: snapshots.map((item) => Number(item.priceIndex || 100)), className: "price", color: "var(--war-cyan)" },
      ],
    },
    {
      label: "四个近月合约较首条价格变化（%）",
      format: (value) => `${value.toFixed(1)}%`,
      series: productCodes.map((code) => ({ label: code, values: productValues[code], className: productClass[code], color: productColor[code] })),
    },
    {
      label: "16个合约总持仓较首条变化（手）",
      format: (value) => Math.round(value).toLocaleString("zh-CN"),
      series: [{
        label: "总持仓",
        values: snapshots.map((item) => Number(item.totalOpenInterest || 0) - firstOpenInterest),
        className: "oi",
        color: "#4b5b70",
      }],
    },
  ];

  const labelStep = Math.max(1, Math.ceil(snapshots.length / (compact ? 7 : 14)));
  const labeledIndexes = new Set(snapshots.map((_, index) => index).filter((index) => index % labelStep === 0 || index === snapshots.length - 1));
  const svg = [];
  const pathFor = (values, yFor) => values.map((value, index) => `${index ? "L" : "M"} ${xFor(index).toFixed(2)} ${yFor(value).toFixed(2)}`).join(" ");
  panels.forEach((panel, panelIndex) => {
    const top = margin.top + panelIndex * (panelHeight + gap);
    const bottom = top + panelHeight;
    const values = panel.series.flatMap((item) => item.values).filter(Number.isFinite);
    let min = Math.min(...values, panelIndex === 0 ? 100 : 0);
    let max = Math.max(...values, panelIndex === 0 ? 100 : 0);
    let spread = max - min;
    if (spread < (panelIndex === 2 ? 100 : .2)) spread = panelIndex === 2 ? 100 : .2;
    min -= spread * .17;
    max += spread * .17;
    const yFor = (value) => top + panelHeight - ((value - min) / (max - min)) * panelHeight;
    const ticks = Array.from({ length: 4 }, (_, tickIndex) => min + ((max - min) * tickIndex) / 3);
    ticks.forEach((tick) => {
      const y = yFor(tick);
      svg.push(`<line x1="${margin.left}" x2="${width - margin.right}" y1="${y}" y2="${y}" class="war-grid" />`);
      svg.push(`<text x="${margin.left - 7}" y="${y + 4}" text-anchor="end" class="war-axis">${escapeHtml(panel.format(tick))}</text>`);
    });
    const base = panelIndex === 0 ? 100 : 0;
    if (min <= base && max >= base) {
      svg.push(`<line x1="${margin.left}" x2="${width - margin.right}" y1="${yFor(base)}" y2="${yFor(base)}" class="war-zero" />`);
    }
    labeledIndexes.forEach((index) => {
      svg.push(`<line x1="${xFor(index)}" x2="${xFor(index)}" y1="${top}" y2="${bottom}" class="war-phase" />`);
    });
    svg.push(`<text x="${margin.left}" y="${top + 13}" class="war-panel-label">${escapeHtml(panel.label)}</text>`);
    panel.series.forEach((series) => {
      svg.push(`<path d="${pathFor(series.values, yFor)}" class="war-line war-line-${series.className}" />`);
      series.values.forEach((value, index) => {
        const radius = index === series.values.length - 1 ? 3.4 : 2.3;
        const title = `${snapshots[index].label || "--"} · ${series.label}：${panel.format(value)}`;
        svg.push(`<circle cx="${xFor(index)}" cy="${yFor(value)}" r="${radius}" fill="${series.color}" class="war-point"><title>${escapeHtml(title)}</title></circle>`);
      });
    });
    if (panelIndex === panels.length - 1) {
      labeledIndexes.forEach((index) => {
        const x = xFor(index);
        const y = bottom + 18;
        if (compact) {
          svg.push(`<text x="${x}" y="${y}" text-anchor="end" transform="rotate(-38 ${x} ${y})" class="war-time">${escapeHtml(snapshots[index].label || "--")}</text>`);
        } else {
          svg.push(`<text x="${x}" y="${y}" text-anchor="middle" class="war-time">${escapeHtml(snapshots[index].label || "--")}</text>`);
        }
      });
    }
  });
  node.innerHTML = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="大A战情局盘中价格、合成价与持仓变化曲线">${svg.join("")}</svg>`;
}

function renderWarRoomTimeline(snapshots) {
  const node = $("#war-room-timeline");
  if (!node) return;
  $("#war-room-snapshot-count").textContent = `${snapshots.length}条`;
  const rows = snapshots.map((snapshot, index) => ({ snapshot, metrics: warRoomWindowMetrics(snapshots, index) }))
    .filter((item) => item.metrics.available);
  if (!rows.length) {
    node.innerHTML = `<div class="war-room-empty">等待形成首个30分钟窗口</div>`;
    return;
  }
  node.innerHTML = rows.reverse().map(({ snapshot, metrics }) => `
    <div class="war-room-timeline-row ${futuresFlowTone(metrics.flowType)}">
      <time>${escapeHtml(snapshot.label || "--")}</time>
      <div>
        <strong>${escapeHtml(metrics.flowLabel)}</strong>
        <small>价格 ${formatFuturesSigned(metrics.priceChangePercent, "%", 2)} · 合成价 ${formatFuturesNumber(snapshot.syntheticPrice, 2)}</small>
      </div>
      <span>${formatFuturesSigned(metrics.openInterestChange, "手")}</span>
    </div>
  `).join("");
}

function renderWarRoomTable(snapshots, metrics) {
  const body = $("#war-room-table-body");
  if (!body) return;
  const latest = snapshots[snapshots.length - 1];
  if (!latest) {
    body.innerHTML = `<tr><td colspan="10">当前交易日暂无有效快照。</td></tr>`;
    return;
  }
  const windowByCode = Object.fromEntries((metrics.products || []).map((item) => [item.code, item]));
  const products = futuresProducts(latest);
  body.innerHTML = products.map((product) => {
    const windowItem = windowByCode[product.code];
    const priceTone = futuresToneClass(product.frontChangePercent);
    const flowTone = windowItem ? futuresFlowTone(windowItem.flowType) : "";
    const basis = Number.isFinite(Number(product.basis))
      ? `${formatFuturesSigned(product.basis, "点", 1)} / ${formatFuturesSigned(product.basisPercent, "%", 2)}`
      : "待实时采样";
    return `
      <tr>
        <td><strong>${escapeHtml(product.code || "--")}</strong><span>${escapeHtml(product.name || "")}</span></td>
        <td>${escapeHtml(product.frontContract || "--")}</td>
        <td>${formatFuturesNumber(product.frontPrice, 1)}</td>
        <td class="${priceTone}">${formatFuturesSigned(product.frontChangePercent, "%", 2)}</td>
        <td>${escapeHtml(basis)}</td>
        <td>${formatFuturesNumber(product.openInterest, 0)}手</td>
        <td>${formatFuturesSigned(product.dayOpenInterestChange, "手")}</td>
        <td>${formatFuturesSigned(product.openInterestChangeFromFirst, "手")}</td>
        <td>${windowItem ? formatFuturesSigned(windowItem.openInterestChange, "手") : "--"}</td>
        <td class="${flowTone}">${escapeHtml(windowItem?.flowLabel || "窗口不足")}</td>
      </tr>
    `;
  }).join("");
  $("#war-room-table-meta").textContent = `${latest.label || "--"} · 4个品种 / ${products.reduce((sum, item) => sum + (item.contracts?.length || 0), 0)}个合约`;
}

function buildWarRoomAnalysisInput(day, snapshots, metrics) {
  const latest = snapshots[snapshots.length - 1];
  const aShare = state.aShareMarket || {};
  const turnover = aShare.turnover || {};
  const breadth = aShare.breadth || {};
  const limits = aShare.limits || {};
  const pulseItems = Array.isArray(state.marketPulse?.items) ? state.marketPulse.items : [];
  const completenessChecks = [
    Boolean(latest),
    Boolean(metrics.available),
    marketPulseHasNumber(turnover.currentYuan),
    marketPulseHasNumber(turnover.changeYuan),
    marketPulseHasNumber(breadth.advanceCount),
    marketPulseHasNumber(breadth.declineCount),
    pulseItems.filter((item) => marketPulseHasNumber(item.changePercent)).length >= 6,
  ];
  const dataCompleteness = Math.round((completenessChecks.filter(Boolean).length / completenessChecks.length) * 100);
  return {
    logicVersion: WAR_ROOM_LOGIC_VERSION,
    tradingDate: day?.date || "",
    sourceAt: latest?.sourceAt || "",
    referenceAt: metrics.reference?.sourceAt || "",
    windowMinutes: metrics.actualMinutes || 0,
    dataCompleteness,
    price: {
      syntheticPrice: Number(latest?.syntheticPrice || 100),
      priceIndex: Number(latest?.priceIndex || 100),
      windowPriceChangePercent: Number(metrics.priceChangePercent || 0),
      windowSyntheticChangePercent: Number(metrics.syntheticChangePercent || 0),
      fromFirstPercent: Number(day?.summary?.priceIndexChangePercent || 0),
    },
    position: {
      totalOpenInterest: Number(latest?.totalOpenInterest || 0),
      totalDayOpenInterestChange: Number(latest?.totalDayOpenInterestChange || 0),
      windowOpenInterestChange: Number(metrics.openInterestChange || 0),
      inferredLongIncrease: Number(metrics.longIncrease || 0),
      inferredShortIncrease: Number(metrics.shortIncrease || 0),
      inferredNetIncrease: Number(metrics.netIncrease || 0),
      inferredLongShortRatio: Number.isFinite(metrics.ratio) ? Number(metrics.ratio) : null,
      directionalLongShare: Number(metrics.longPercent || 50),
      directionalShortShare: Number(metrics.shortPercent || 50),
      directionScore: Number(metrics.directionScore || 0),
      directionConfidence: Number(metrics.directionConfidence || 50),
      inferenceMethod: "16个合约价格变化与品种基差变化连续加权，单边主动性上限85%",
      flowType: metrics.flowType || "balanced",
      flowLabel: metrics.flowLabel || "主动方向均衡",
    },
    products: (metrics.products || []).map((item) => ({
      code: item.code,
      priceChangePercent: Number(item.priceChangePercent || 0),
      openInterestChange: Number(item.openInterestChange || 0),
      contributionPercent: Number(item.contributionPercent || 0),
      longPressurePercent: Number(item.longPressurePercent || 50),
      shortPressurePercent: Number(item.shortPressurePercent || 50),
      directionScore: Number(item.directionScore || 0),
      flowType: item.flowType,
      flowLabel: item.flowLabel,
    })),
    market: {
      turnoverYuan: marketPulseHasNumber(turnover.currentYuan) ? Number(turnover.currentYuan) : null,
      turnoverChangeYuan: marketPulseHasNumber(turnover.changeYuan) ? Number(turnover.changeYuan) : null,
      turnoverChangePercent: marketPulseHasNumber(turnover.changePercent) ? Number(turnover.changePercent) : null,
      estimatedFullDayYuan: marketPulseHasNumber(turnover.estimatedFullDayYuan) ? Number(turnover.estimatedFullDayYuan) : null,
      advanceCount: marketPulseHasNumber(breadth.advanceCount) ? Number(breadth.advanceCount) : null,
      unchangedCount: marketPulseHasNumber(breadth.unchangedCount) ? Number(breadth.unchangedCount) : null,
      declineCount: marketPulseHasNumber(breadth.declineCount) ? Number(breadth.declineCount) : null,
      limitUpCount: marketPulseHasNumber(limits.limitUpCount) ? Number(limits.limitUpCount) : null,
      limitDownCount: marketPulseHasNumber(limits.limitDownCount) ? Number(limits.limitDownCount) : null,
    },
    globalIndices: pulseItems.map((item) => ({
      name: item.shortName || item.name,
      changePercent: marketPulseHasNumber(item.changePercent) ? Number(item.changePercent) : null,
      marketTime: item.marketTime || "",
    })),
  };
}

function buildWarRoomRulePreview(day, snapshots, metrics) {
  const input = buildWarRoomAnalysisInput(day, snapshots, metrics);
  const breadthNet = Number(input.market.advanceCount || 0) - Number(input.market.declineCount || 0);
  const turnoverChange = Number(input.market.turnoverChangePercent || 0);
  const priceMove = Number(input.price.windowPriceChangePercent || 0);
  const oiMove = Number(input.position.windowOpenInterestChange || 0);
  const directionScore = warRoomClamp(input.position.directionScore, -1, 1);
  const priceScore = warRoomClamp(priceMove / 1.0, -1, 1) * 16;
  const positionScore = directionScore * Math.min(Math.abs(oiMove) / 15000, 1) * 16;
  const breadthScore = warRoomClamp(breadthNet / 1800, -1, 1) * 12;
  const volumeMultiplier = 1 + Math.min(Math.abs(turnoverChange) / 10, 1) * .12;
  const score = (priceScore + positionScore + breadthScore) * volumeMultiplier;
  const stance = score > 9 ? "bullish" : score < -9 ? "bearish" : "neutral";
  const conclusion = stance === "bullish"
    ? (oiMove > 0 ? "增量持仓偏多，市场结构占优" : "价格修复延续，空头回补主导")
    : stance === "bearish"
      ? (oiMove > 0 ? "增量持仓偏空，盘面压力仍在" : "多头减仓退守，反弹强度不足")
      : "多空暂时均衡，等待增量信号确认";
  const confidence = Math.max(52, Math.min(85, Math.round(54 + Math.abs(score) * 1.15)));
  const mainProbability = Math.max(42, Math.min(68, Math.round(confidence * .72)));
  const reversalProbability = Math.max(12, Math.round((100 - mainProbability) * .38));
  const rangeProbability = 100 - mainProbability - reversalProbability;
  const currentSynthetic = Number(input.price.syntheticPrice || 100);
  const invalidationPrice = stance === "bearish" ? currentSynthetic + .22 : currentSynthetic - .22;
  const leadingProducts = [...input.products]
    .sort((a, b) => Math.abs(b.openInterestChange) - Math.abs(a.openInterestChange))
    .slice(0, 2)
    .map((item) => item.code)
    .join("/") || "IF/IC";
  return {
    id: "local-preview",
    tradingDate: input.tradingDate,
    sourceAt: input.sourceAt,
    generatedAt: "",
    provider: "本地规则预览",
    model: "SignalDesk pressure-v2",
    logicVersion: WAR_ROOM_LOGIC_VERSION,
    trigger: "preview",
    stance,
    confidence,
    conclusion,
    summary: `近${input.windowMinutes || 30}分钟价格${formatFuturesSigned(priceMove, "%", 2)}，总持仓${formatFuturesSigned(oiMove, "手")}；市场宽度净值${formatFuturesSigned(breadthNet, "家")}。`,
    evidence: [
      { label: "价格", value: formatFuturesSigned(priceMove, "%", 2) },
      { label: "总持仓", value: formatFuturesSigned(oiMove, "手") },
      { label: "主动性推定", value: `多${formatFuturesNumber(input.position.directionalLongShare, 0)}% : 空${formatFuturesNumber(input.position.directionalShortShare, 0)}%` },
      { label: `${leadingProducts}贡献`, value: `${formatFuturesNumber(input.products.filter((item) => leadingProducts.includes(item.code)).reduce((sum, item) => sum + item.contributionPercent, 0), 0)}%` },
    ],
    scenarios: stance === "bearish"
      ? [
          { name: "弱势延续", probability: mainProbability },
          { name: "低位震荡", probability: rangeProbability },
          { name: "快速修复", probability: reversalProbability },
        ]
      : [
          { name: stance === "bullish" ? "延续上行" : "方向突破", probability: mainProbability },
          { name: "区间震荡", probability: rangeProbability },
          { name: stance === "bullish" ? "冲高回落" : "反向突破", probability: reversalProbability },
        ],
    invalidation: `${stance === "bearish" ? "合成价站上" : "合成价跌破"} ${formatFuturesNumber(invalidationPrice, 2)}，且${stance === "bearish" ? "多方" : "空方"}主动性升至55%以上。`,
    dataCompleteness: input.dataCompleteness,
  };
}

function currentWarRoomAnalysis(day, snapshots, metrics) {
  const saved = state.warRoomAnalysis?.latest;
  if (
    saved
    && saved.logicVersion === WAR_ROOM_LOGIC_VERSION
    && (!day?.date || saved.tradingDate === day.date)
  ) return saved;
  return buildWarRoomRulePreview(day, snapshots, metrics);
}

function renderWarRoomAi() {
  const day = selectedWarRoomDay();
  const snapshots = warRoomSnapshots(day);
  const metrics = warRoomWindowMetrics(snapshots);
  const analysis = currentWarRoomAnalysis(day, snapshots, metrics);
  if (!$("#war-room-ai-conclusion")) return;
  const latestAt = snapshots[snapshots.length - 1]?.sourceAt || "";
  const analysisTimeValue = Date.parse(analysis.sourceAt || "");
  const latestTimeValue = Date.parse(latestAt);
  const stale = Boolean(
    analysis.provider !== "本地规则预览"
      && Number.isFinite(analysisTimeValue)
      && Number.isFinite(latestTimeValue)
      && Math.abs(analysisTimeValue - latestTimeValue) > 60000,
  );
  const stateNode = $("#war-room-ai-state");
  stateNode.textContent = state.warRoomAnalysisLoading
    ? "正在生成"
    : `${analysis.provider || "本地规则"}${stale ? " · 有新快照待复核" : ""}`;
  stateNode.className = `war-room-ai-state ${escapeHtml(analysis.stance || "neutral")}`;
  $("#war-room-ai-model").textContent = `${analysis.model || state.warRoomAnalysis?.model || "DeepSeek"} · 30分钟复核`;
  $("#war-room-ai-conclusion").textContent = analysis.conclusion || "等待生成盘中研判";
  $("#war-room-ai-summary").textContent = analysis.summary || "暂无可用研判摘要。";

  const evidence = Array.isArray(analysis.evidence) ? analysis.evidence.slice(0, 6) : [];
  $("#war-room-ai-evidence").innerHTML = (evidence.length ? evidence : [
    { label: "价格", value: "--" },
    { label: "总持仓", value: "--" },
    { label: "主动性推定", value: "--" },
    { label: "主力贡献", value: "--" },
  ]).map((item) => `<div><span>${escapeHtml(item.label || "指标")}</span><strong>${escapeHtml(item.value || "--")}</strong>${item.interpretation ? `<small title="${escapeHtml(item.interpretation)}">${escapeHtml(item.interpretation)}</small>` : ""}</div>`).join("");

  const scenarios = Array.isArray(analysis.scenarios) ? analysis.scenarios.slice(0, 3) : [];
  $("#war-room-ai-scenarios").innerHTML = scenarios.length
    ? scenarios.map((item) => {
        const probability = Math.max(0, Math.min(100, Number(item.probability || 0)));
        return `<div class="war-room-scenario"><span>${escapeHtml(item.name || "情景")}</span><strong>${formatFuturesNumber(probability, 0)}%</strong><i class="war-room-scenario-track"><span style="width:${probability}%"></span></i>${item.trigger ? `<small title="${escapeHtml(item.trigger)}">${escapeHtml(item.trigger)}</small>` : ""}</div>`;
      }).join("")
    : `<div class="war-room-scenario"><span>等待研判</span><i class="war-room-scenario-track"><span style="width:0%"></span></i><strong>--</strong></div>`;
  $("#war-room-ai-invalidation").textContent = analysis.invalidation || "等待生成后给出关键阈值";
  const analysisTime = analysis.generatedAt ? formatIndexFuturesTime(analysis.generatedAt) : "预览";
  $("#war-room-ai-output-time").textContent = analysis.generatedAt
    ? `${analysisTime} · 置信${formatFuturesNumber(analysis.confidence, 0)}% · 完整${formatFuturesNumber(analysis.dataCompleteness, 0)}%`
    : "等待生成";
  const risks = Array.isArray(analysis.risks) ? analysis.risks.slice(0, 5) : [];
  $("#war-room-ai-risks").innerHTML = risks.length
    ? risks.map((item) => `<li>${escapeHtml(item)}</li>`).join("")
    : `<li>当前研判未返回额外风险项</li>`;
  const warningNode = $("#war-room-ai-warning");
  warningNode.textContent = analysis.warning || "";
  warningNode.hidden = !analysis.warning;

  const validation = state.warRoomAnalysis?.validation || {};
  $("#war-room-validation-count").textContent = formatAShareCount(validation.count || 0);
  $("#war-room-validation-rate").textContent = marketPulseHasNumber(validation.hitRate) ? `${formatFuturesNumber(validation.hitRate, 1)}%` : "--";
  $("#war-room-validation-error").textContent = marketPulseHasNumber(validation.meanAbsoluteError) ? `${formatFuturesNumber(validation.meanAbsoluteError, 2)}%` : "--";
  const validationItems = Array.isArray(validation.items) ? validation.items : [];
  $("#war-room-validation-list").innerHTML = validationItems.length
    ? validationItems.slice(0, 6).map((item) => `
        <div class="war-room-validation-row">
          <strong>${escapeHtml(item.tradingDate || "--")} · ${escapeHtml(item.resultLabel || "待验证")}</strong>
          <span>预测 ${escapeHtml(item.stanceLabel || "--")} · 次日 ${formatFuturesSigned(item.actualChangePercent, "%", 2)}</span>
        </div>
      `).join("")
    : `<p>研判生成后，将按下一交易日首条至收盘的价格变化进行验证。</p>`;

  document.querySelectorAll("[data-war-room-ai-tab]").forEach((button) => {
    const active = button.dataset.warRoomAiTab === state.warRoomAiTab;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  document.querySelectorAll("[data-war-room-ai-view]").forEach((view) => {
    const active = view.dataset.warRoomAiView === state.warRoomAiTab;
    view.hidden = !active;
    view.classList.toggle("active", active);
  });
}

async function generateWarRoomAnalysis(trigger = "manual") {
  if (state.warRoomAnalysisLoading) return;
  const day = selectedWarRoomDay();
  const snapshots = warRoomSnapshots(day);
  const metrics = warRoomWindowMetrics(snapshots);
  if (!day || !metrics.available) {
    showToast("至少需要两个相隔约30分钟的有效快照才能生成研判");
    return;
  }
  const button = $("#war-room-ai-generate");
  const previousText = button?.textContent || "生成研判";
  state.warRoomAiTab = "current";
  state.warRoomAnalysisLoading = true;
  if (button) {
    button.disabled = true;
    button.textContent = "研判中";
  }
  renderWarRoomAi();
  try {
    state.warRoomAnalysis = await fetchJson("/api/war-room-analysis", {
      method: "POST",
      body: JSON.stringify({ trigger, metrics: buildWarRoomAnalysisInput(day, snapshots, metrics) }),
    });
    showToast(state.warRoomAnalysis?.latest?.provider === "DeepSeek" ? "DeepSeek研判已生成" : "本地规则研判已生成");
  } catch (error) {
    showToast(`研判生成失败：${error.message}`);
  } finally {
    state.warRoomAnalysisLoading = false;
    if (button) {
      button.disabled = false;
      button.textContent = previousText;
    }
    renderWarRoomAi();
    if (state.warRoomAnalysis?.latest) {
      const currentView = $("#war-room-ai-current");
      currentView?.scrollTo({ top: 0, behavior: "smooth" });
      const panel = $("#war-room-ai-panel");
      panel?.classList.add("just-updated");
      window.setTimeout(() => panel?.classList.remove("just-updated"), 1600);
    }
  }
}

function renderWarRoom() {
  if (!$("#war-room-workspace")) return;
  const day = selectedWarRoomDay();
  const snapshots = warRoomSnapshots(day);
  const metrics = warRoomWindowMetrics(snapshots);
  renderWarRoomHeaderAndKpis(day, snapshots, metrics);
  renderWarRoomAShareMarketSnapshot();
  renderWarRoomMarketPulse();
  renderWarRoomTreasury();
  renderWarRoomHalfHour(metrics);
  renderWarRoomChart(snapshots);
  renderWarRoomTimeline(snapshots);
  renderWarRoomTable(snapshots, metrics);
  renderWarRoomAi();

  const methodology = $("#war-room-methodology");
  if (methodology) {
    methodology.innerHTML = [
      "有效时间：按16个期指合约自身行情时间去重，现货指数晚于期指收盘的更新时间不会制造重复快照。",
      "近半小时：在A股上午、下午交易时段内寻找相隔30分钟、误差不超过7分钟的有效快照进行比较。",
      "主动方向：净持仓变化与价格变化是事实值；多空主动性按16个合约价格变化和品种基差变化连续加权推定，单边上限85%，不等同交易所席位真实多空持仓。",
      "AI研判：输入价格、持仓、贴水、成交额、市场宽度和全球指数，仅输出可由当前数据支持的结论、情景概率与失效条件。",
      "次日验证：用下一交易日首条至收盘的纯价格指数变化验证方向，并保留未命中记录。",
    ].map((item) => `<p>${escapeHtml(item)}</p>`).join("");
  }
}

function reviewReason(post) {
  const beneficiaries = post.coreBeneficiaries || [];
  const cnBeneficiaries = beneficiaries.filter(isCnStock);
  const companies = postCompanies(post);
  if (isRatingTargetPost(post)) return "评级/目标价";
  if (post.priority === "high" && post.marketRelated && !cnBeneficiaries.length) return "缺A股映射";
  if (post.priority === "high" && !post.researchAt) return "高优先级";
  if (post.marketRelated && !companies.length) return "缺少标的";
  if (beneficiaries.some((item) => /复核|确认|待/.test(String(item.confidence || "")))) return "待复核";
  if (post.marketRelated && !post.mappedAt) return "待加入映射";
  return "";
}

function reviewQueuePosts() {
  return state.posts
    .filter((post) => !post.ignoredAt)
    .filter((post) => isActionableFeedPost(post))
    .filter((post) => {
      const reason = reviewReason(post);
      if (!reason) return false;
      if (post.readAt && post.mappedAt && post.researchAt && !isRatingTargetPost(post)) return false;
      return true;
    })
    .sort((a, b) => {
      const score = (post) => {
        const reason = reviewReason(post);
        return (
          (reason === "缺A股映射" ? 5 : 0) +
          (isRatingTargetPost(post) ? 4 : 0) +
          (post.priority === "high" ? 3 : 0) +
          (!post.researchAt ? 2 : 0) +
          (!post.mappedAt ? 1 : 0)
        );
      };
      return score(b) - score(a) || (Date.parse(b.publishedAt || "") || 0) - (Date.parse(a.publishedAt || "") || 0);
    });
}

function dedupeReviewPosts(posts) {
  const seen = new Set();
  return posts.filter((post) => {
    const theme = String((post.topics || [])[0] || (post.coreBeneficiaries || [])[0]?.segment || "");
    const body = compactText(post.ratingEvent?.targetText || post.ratingEvent?.snippet || post.analysis || post.original, 120);
    const key = normalizeBenefitText(`${reviewReason(post)}|${theme}|${body}`).replace(/[^a-z0-9\u4e00-\u9fff]/g, "");
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function renderRatingWatch() {
  const reviewItems = dedupeReviewPosts(reviewQueuePosts());
  const items = reviewItems.slice(0, 5);
  $("#rating-count").textContent = reviewItems.length;

  if (!items.length) {
    $("#rating-list").innerHTML = `<div class="empty-state">当前没有待复核项。高优先级、缺A股映射、评级目标价会自动进入这里。</div>`;
    return;
  }

  $("#rating-list").innerHTML = items
    .map((post) => {
      const source = postSource(post);
      const event = post.ratingEvent || {};
      const targets = (post.coreBeneficiaries || []).length
        ? (post.coreBeneficiaries || []).map((item) => item.symbol)
        : (post.stocks || []).map((stock) => stock.symbol).filter(Boolean);
      const reason = reviewReason(post) || "待复核";
      const confidence = (post.coreBeneficiaries || []).find((item) => item.confidence)?.confidence || "待确认";
      return `
        <div class="rating-row review-row ${escapeHtml(event.direction || post.direction || "neutral")}">
          <div class="rating-row__head">
            <strong>${escapeHtml(reason)}</strong>
            <span class="signal-badge ${escapeHtml(event.direction || post.direction || "neutral")}">${escapeHtml(directionLabel[post.direction] || "中性")}</span>
          </div>
          <div class="rating-row__targets">
            ${(targets.length ? targets : ["暂无标的"]).slice(0, 4).map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
          </div>
          <p>${escapeHtml(compactText(event.targetText || event.snippet || post.analysis || post.original, 108))}</p>
          <div class="rating-row__source">
            <span>${escapeHtml(post.time)} · ${escapeHtml(source.handle || source.name)}</span>
            <strong>${escapeHtml(confidence)}</strong>
          </div>
          <div class="review-row__actions">
            <button type="button" data-post-action="map" data-post-id="${escapeHtml(post.id)}" ${post.mappedAt ? "disabled" : ""}>${post.mappedAt ? "已映射" : "加入映射"}</button>
            <button type="button" data-post-action="research" data-post-id="${escapeHtml(post.id)}" ${post.researchAt ? "disabled" : ""}>${post.researchAt ? "已研判" : "生成研判"}</button>
            <button type="button" data-post-action="read" data-post-id="${escapeHtml(post.id)}" ${post.readAt ? "disabled" : ""}>${post.readAt ? "已读" : "标记已读"}</button>
            <button type="button" data-post-action="ignore" data-post-id="${escapeHtml(post.id)}">忽略</button>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderSignals() {
  const aggregates = new Map();
  filteredPosts().forEach((post) => {
    postCompanies(post).forEach((stock) => {
      const key = stock.symbol;
      const previous = aggregates.get(key) || {
        symbol: stock.symbol,
        market: stock.market,
        count: 0,
        high: 0,
        direction: post.direction,
        topics: new Set(),
      };
      previous.count += 1;
      if (post.priority === "high") previous.high += 1;
      post.topics.forEach((topic) => previous.topics.add(topic));
      if (stock.segment) previous.topics.add(stock.segment);
      if (post.direction !== "neutral") previous.direction = post.direction;
      aggregates.set(key, previous);
    });
  });

  const signals = [...aggregates.values()].sort((a, b) => b.high - a.high || b.count - a.count);
  $("#signal-count").textContent = signals.length;

  if (!signals.length) {
    $("#signal-list").innerHTML = `<div class="empty-state">暂无股票信号</div>`;
    return;
  }

  $("#signal-list").innerHTML = signals
    .map(
      (signal) => `
        <div class="signal-row">
          <div class="signal-main">
            <strong>${escapeHtml(signal.symbol)}</strong>
            <span>${escapeHtml(signal.market)} · ${signal.count} 次 · ${escapeHtml([...signal.topics].slice(0, 2).join(" / "))}</span>
          </div>
          <span class="signal-badge ${escapeHtml(signal.direction)}">${escapeHtml(directionLabel[signal.direction] || "中性")}</span>
        </div>
      `,
    )
    .join("");
}

function renderTopics() {
  const scores = new Map();
  filteredPosts().forEach((post) => {
    const weight = post.priority === "high" ? 3 : post.priority === "medium" ? 2 : 1;
    post.topics.forEach((topic) => scores.set(topic, (scores.get(topic) || 0) + weight));
  });

  const topics = [...scores.entries()].sort((a, b) => b[1] - a[1]).slice(0, 7);
  const max = Math.max(...topics.map((topic) => topic[1]), 1);

  $("#topic-list").innerHTML = topics.length
    ? topics
        .map(([topic, score]) => {
          const width = Math.max(8, Math.round((score / max) * 100));
          return `
            <div class="topic-row">
              <span class="topic-name">${escapeHtml(topic)}</span>
              <span class="topic-track"><span class="topic-fill" style="width: ${width}%"></span></span>
              <strong>${score}</strong>
            </div>
          `;
        })
        .join("")
    : `<div class="empty-state">暂无主题热度</div>`;
}

function renderSummary() {
  const marketPosts = state.posts.filter((post) => post.marketRelated).length;
  const unmatched = state.posts.filter((post) => !postCompanies(post).length).length;
  const high = state.posts.filter((post) => post.priority === "high").length;
  const lines = [
    state.apiAvailable ? "本地接口正常，数据来自 SQLite。" : "请启动 server.py 以接入真实数据。",
    `已加载 ${state.posts.length} 条内容，其中 ${marketPosts} 条与市场相关。`,
    `高优先级 ${high} 条，未映射标的 ${unmatched} 条。`,
  ];
  $("#summary-list").innerHTML = lines.map((line) => `<li>${escapeHtml(line)}</li>`).join("");
}

function renderReferences() {
  $("#reference-list").innerHTML = state.references
    .map(
      (repo) => `
        <div class="reference-item">
          <a href="${escapeHtml(repo.url)}" target="_blank" rel="noreferrer">${escapeHtml(repo.name)}</a>
          <span>${escapeHtml(repo.stars)} stars</span>
          <p>${escapeHtml(repo.fit)}</p>
        </div>
      `,
    )
    .join("");
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.remove("hidden");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.add("hidden"), 3800);
}

async function copyTextToClipboard(text) {
  const value = String(text || "").trim();
  if (!value) {
    showToast("没有可复制内容");
    return;
  }
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    showToast("已复制");
  } catch (error) {
    showToast(`复制失败：${error.message || error}`);
  }
}

function clearFilters() {
  state.account = "all";
  state.filter = "all";
  state.query = "";
  resetFeedLimit();
  $("#search-input").value = "";
  renderAll();
}

function industryFormatPrice(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number.toFixed(number < 10 ? 2 : 2) : "--";
}

function industryFormatPct(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "--";
  return `${number >= 0 ? "+" : ""}${number.toFixed(2)}%`;
}

function industryChangeMarkup(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return '<span class="industry-muted">--</span>';
  return `<span class="industry-change ${number >= 0 ? "is-up" : "is-down"}">${industryFormatPct(number)}</span>`;
}

function industrySparkline(history = []) {
  const values = (history || []).map((item) => Number(item.close)).filter(Number.isFinite);
  if (values.length < 2) return '<span class="industry-muted">轨迹不足</span>';
  const width = 120;
  const height = 28;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const points = values.map((value, index) => {
    const x = (index / (values.length - 1)) * width;
    const y = height - 3 - ((value - min) / range) * (height - 6);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return `<svg class="industry-sparkline" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-label="价格轨迹"><polyline points="${points}"></polyline></svg>`;
}

function industrySignalTags(item) {
  const tags = [];
  if (item.recentDouble) tags.push(`<span class="industry-tag is-blue">命中倍量</span>`);
  if (item.bottomContinuous) tags.push(`<span class="industry-tag is-green">底部放量</span>`);
  if (item.specialFraction !== null && item.specialFraction !== undefined) tags.push(`<span class="industry-tag is-amber">.${String(item.specialFraction).padStart(2, "0")}</span>`);
  return tags.join("") || '<span class="industry-muted">未命中特征</span>';
}

function industryApiUrl(path, params = {}) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "" && value !== "all") query.set(key, value);
  });
  return `${path}${query.toString() ? `?${query.toString()}` : ""}`;
}

async function refreshIndustryObserver() {
  const button = $("#industry-observer-refresh");
  if (button?.disabled) return;
  const originalLabel = button?.textContent || "刷新本地数据";
  if (button) {
    button.disabled = true;
    button.textContent = "刷新中…";
  }
  try {
    const result = await fetchJson("/api/ths-observer/refresh", {
      method: "POST",
      body: JSON.stringify({}),
    });
    const dateNode = $("#industry-observer-date");
    if (dateNode && /^\d{8}$/.test(String(result.targetDate || ""))) {
      const target = String(result.targetDate);
      dateNode.value = `${target.slice(0, 4)}-${target.slice(4, 6)}-${target.slice(6, 8)}`;
    }
    await loadIndustryObserver();
    showToast(result.message || "行业观察数据已更新");
  } catch (error) {
    showToast(`行业量价刷新失败：${error.message || error}`);
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = originalLabel;
    }
  }
}

async function loadIndustryObserver({ silent = false } = {}) {
  state.industryObserverLoading = true;
  const rawDate = $("#industry-observer-date")?.value || "";
  const date = rawDate.replaceAll("-", "");
  const industry = $("#industry-observer-industry")?.value || "all";
  const q = $("#industry-observer-query")?.value?.trim() || "";
  try {
    const [signals, patterns] = await Promise.all([
      fetchJson(industryApiUrl("/api/ths-observer", { date, industry, q, sort: state.industryObserverSort, limit: 200 })),
      fetchJson(industryApiUrl("/api/ths-price-patterns", { date, industry, q, stage: "all", sort: state.industryObserverSort, limit: 500 })),
    ]);
    state.industryObserverPayload = signals;
    state.industryPatternPayload = patterns;
    const dateNode = $("#industry-observer-date");
    if (dateNode && !dateNode.value) {
      const selected = signals.selectedDate || patterns.asOfDate || "";
      dateNode.value = selected.length === 8 ? `${selected.slice(0, 4)}-${selected.slice(4, 6)}-${selected.slice(6)}` : selected;
    }
    const industryNode = $("#industry-observer-industry");
    if (industryNode && Array.isArray(signals.industries)) {
      const current = industryNode.value || industry;
      industryNode.innerHTML = '<option value="all">全部行业</option>' + signals.industries.map((item) => `<option value="${escapeHtml(item.name)}">${escapeHtml(item.name)} · ${Number(item.count || 0)}</option>`).join("");
      industryNode.value = signals.industries.some((item) => item.name === current) ? current : "all";
    }
    const statusNode = $("#industry-observer-status");
    if (statusNode) {
      const selectedDate = signals.selectedDate || patterns.asOfDate || "--";
      const run = signals.status || patterns.status || {};
      const coverage = `${Number(run.freshCount || 0)}/${Number(run.expectedCount || 0)}`;
      const suffix = run.state === "partial" ? ` · 部分覆盖 ${coverage}` : run.state === "ready" ? " · 已完整入库" : "";
      statusNode.textContent = `数据日 ${selectedDate}${suffix}`;
    }
  } catch (error) {
    state.industryObserverPayload = null;
    state.industryPatternPayload = null;
    if (!silent) showToast(`行业量价读取失败：${error.message || error}`);
    const statusNode = $("#industry-observer-status");
    if (statusNode) statusNode.textContent = "本地数据暂不可用";
  } finally {
    state.industryObserverLoading = false;
  }
}

function renderIndustrySignals() {
  const payload = state.industryObserverPayload || {};
  const rows = Array.isArray(payload.results) ? payload.results : [];
  const body = $("#industry-signals-body");
  if (!body) return;
  $("#industry-signals-count").textContent = Number(payload.totalMatched || rows.length).toLocaleString("zh-CN");
  $("#industry-signals-meta").textContent = `倍量 ${Number(payload.stats?.double || 0)} · 底部放量 ${Number(payload.stats?.bottom || 0)} · 特殊价格 ${Number(payload.stats?.special || 0)}`;
  body.innerHTML = rows.map((item) => `<tr>
    <td><div class="industry-stock"><strong>${escapeHtml(item.name || "待补名称")}</strong><small>${escapeHtml(item.code || "")}</small></div></td>
    <td>${escapeHtml(item.industry || "待补行业")}</td><td class="industry-number">${industryFormatPrice(item.close)}</td>
    <td class="industry-number">${industryChangeMarkup(item.changePct)}</td><td><div class="industry-tags">${industrySignalTags(item)}</div></td>
    <td>${industrySparkline(item.history)}</td><td><span class="industry-action">加入观察</span></td>
  </tr>`).join("") || '<tr><td colspan="7" class="industry-empty">当前筛选暂无信号</td></tr>';
}

function industryPatternRows() {
  const payload = state.industryPatternPayload || {};
  let rows = Array.isArray(payload.results) ? payload.results.slice() : [];
  const node = state.industryObserverNode;
  if (node === "watch13") rows = rows.filter((item) => item.watch13);
  else {
    const day = Number(node);
    rows = rows.filter((item) => Number(item.age || 0) >= day);
  }
  if (state.industryObserverGrade !== "all") {
    rows = rows.filter((item) => item.buySignals?.[String(industryScoreNode(item))]?.grade === state.industryObserverGrade);
  }
  if (state.industryObserverPath === "within8") rows = rows.filter((item) => item.limitPath?.within8);
  if (state.industryObserverPath === "threeInFour") rows = rows.filter((item) => item.limitPath?.threeInFour);
  if (state.industryObserverDateSort === "asc") {
    rows.sort((left, right) => String(left.eventDate || "").localeCompare(String(right.eventDate || "")));
  } else if (state.industryObserverDateSort === "desc") {
    rows.sort((left, right) => String(right.eventDate || "").localeCompare(String(left.eventDate || "")));
  } else {
    rows.sort((left, right) => Number(right.buySignals?.[String(industryScoreNode(right))]?.score || 0) - Number(left.buySignals?.[String(industryScoreNode(left))]?.score || 0));
  }
  return rows;
}

function industryScoreNode(item) {
  if (state.industryObserverNode !== "watch13") return Number(state.industryObserverNode);
  return Math.min(13, Math.max(8, Number(item.age || 8)));
}

function industryPatternHitFields(item) {
  const fields = Array.isArray(item.hitFields) ? item.hitFields : [];
  if (!fields.length) return '<span class="industry-muted">未识别</span>';
  return `<div class="industry-hit-fields">${fields.map((field) => `<span>${escapeHtml(field)}</span>`).join("")}</div>`;
}

function industryBuyScoreMarkup(signal = {}) {
  if (!Number.isFinite(Number(signal.score))) return '<span class="industry-muted">待计算</span>';
  const evidence = Array.isArray(signal.evidence) ? signal.evidence.join(" · ") : "";
  return `<div class="industry-score-wrap"><div class="industry-score-pill grade-${String(signal.grade || "C").toLowerCase()}" title="${escapeHtml(evidence)}"><strong>${Number(signal.score)}</strong><small>${escapeHtml(signal.grade || "C")}档</small></div><small class="industry-score-evidence">${escapeHtml(evidence || "暂无依据")}</small></div>`;
}

function renderIndustryPatterns() {
  const payload = state.industryPatternPayload || {};
  const rows = industryPatternRows();
  const body = $("#industry-pattern-body");
  if (!body) return;
  $("#industry-pattern-count").textContent = rows.length.toLocaleString("zh-CN");
  $("#industry-pattern-meta").textContent = `事件 ${Number(payload.stats?.events || 0).toLocaleString("zh-CN")} · 板块涨停 ${Number(payload.stats?.sectorHot || 0).toLocaleString("zh-CN")}`;
  const node = state.industryObserverNode === "watch13" ? 13 : Number(state.industryObserverNode);
  body.innerHTML = rows.map((item) => {
    const milestone = (item.milestones || []).find((entry) => Number(entry.day) === node);
    const detail = milestone?.status === "pending" ? "待观察" : milestone ? `${industryFormatPct(milestone.changePct)}${milestone.bigYang ? " · 大阳" : ""}` : "未到节点";
    const sector = item.sector?.stockCount ? `<span class="industry-hot">${item.sector.stockCount} 只涨停候选</span>` : '<span class="industry-muted">近期未发现</span>';
    const action = item.watch13 ? `T+${Number(item.age || 0)} · 距 T+13 ${Math.max(0, 13 - Number(item.age || 0))} 日` : (item.nextMilestone ? `下一节点 T+${item.nextMilestone}` : "周期已完成");
    const path = item.limitPath?.threeInFour ? `4日3板 · 首板T+${item.limitPath.firstLimitDay}` : item.limitPath?.within8 ? `首板T+${item.limitPath.firstLimitDay} · 次日确认` : "等待首板";
    const scoreNode = industryScoreNode(item);
    const buySignal = item.buySignals?.[String(scoreNode)] || {};
    return `<tr><td><div class="industry-stock"><strong>${escapeHtml(item.name || "待补名称")}</strong><small>${escapeHtml(item.code || "")} · ${escapeHtml(item.industry || "待补行业")} · ${escapeHtml(item.eventDate || "")}</small></div></td><td>${industryPatternHitFields(item)}</td><td><strong class="industry-cycle">T+${Number(item.age || 0)}</strong><small>${industryChangeMarkup(item.currentChangePct)}</small></td><td><span class="industry-node-result ${milestone?.bigYang ? "is-hit" : ""}">T+${node} · ${detail}</span></td><td><div class="industry-score-cell">${industryBuyScoreMarkup(buySignal)}<small>按 T+${scoreNode} 评估</small></div></td><td>${industrySparkline(item.priceHistory)}</td><td>${sector}</td><td><span class="industry-action">${escapeHtml(path)}</span><small class="industry-action-detail">${escapeHtml(action)}</small></td></tr>`;
  }).join("") || '<tr><td colspan="8" class="industry-empty">当前节点暂无可观察事件</td></tr>';
}

function renderIndustryObserver() {
  const shell = document.querySelector(".signaldesk-v2");
  const workspace = $("#industry-observer-workspace");
  if (!shell || !workspace) return;
  workspace.dataset.industryView = state.industryObserverView;
  $("#industry-signals-panel")?.toggleAttribute("hidden", state.industryObserverView !== "signals");
  $("#industry-pattern-panel")?.toggleAttribute("hidden", state.industryObserverView !== "pattern");
  document.querySelectorAll("#industry-view-tabs [data-industry-view]").forEach((button) => button.classList.toggle("active", button.dataset.industryView === state.industryObserverView));
  document.querySelectorAll("#industry-node-tabs [data-industry-node]").forEach((button) => button.classList.toggle("active", button.dataset.industryNode === state.industryObserverNode));
  document.querySelectorAll("#industry-score-tabs [data-industry-grade]").forEach((button) => button.classList.toggle("active", button.dataset.industryGrade === state.industryObserverGrade));
  document.querySelectorAll("#industry-path-tabs [data-industry-path]").forEach((button) => button.classList.toggle("active", button.dataset.industryPath === state.industryObserverPath));
  document.querySelectorAll("#industry-date-sort-tabs [data-industry-date-sort]").forEach((button) => button.classList.toggle("active", button.dataset.industryDateSort === state.industryObserverDateSort));
  document.querySelectorAll("[data-industry-sort]").forEach((button) => button.classList.toggle("active", button.dataset.industrySort === state.industryObserverSort));
  renderIndustrySignals();
  renderIndustryPatterns();
}

function bindIndustryObserverEvents() {
  $("#industry-view-tabs")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-industry-view]");
    if (!button) return;
    state.industryObserverView = button.dataset.industryView;
    renderIndustryObserver();
  });
  $("#industry-node-tabs")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-industry-node]");
    if (!button) return;
    state.industryObserverNode = button.dataset.industryNode;
    renderIndustryObserver();
  });
  $("#industry-score-tabs")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-industry-grade]");
    if (!button) return;
    state.industryObserverGrade = button.dataset.industryGrade || "all";
    renderIndustryObserver();
  });
  $("#industry-path-tabs")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-industry-path]");
    if (!button) return;
    state.industryObserverPath = button.dataset.industryPath || "all";
    renderIndustryObserver();
  });
  $("#industry-date-sort-tabs")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-industry-date-sort]");
    if (!button) return;
    state.industryObserverDateSort = button.dataset.industryDateSort || "desc";
    renderIndustryObserver();
  });
  $("#industry-observer-refresh")?.addEventListener("click", refreshIndustryObserver);
  ["#industry-observer-date", "#industry-observer-industry"].forEach((selector) => $(selector)?.addEventListener("change", async () => { await loadIndustryObserver({ silent: true }); renderIndustryObserver(); }));
  $("#industry-observer-query")?.addEventListener("keydown", async (event) => { if (event.key === "Enter") { await loadIndustryObserver({ silent: true }); renderIndustryObserver(); } });
  document.querySelector("#industry-observer-workspace")?.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-industry-sort]");
    if (!button) return;
    state.industryObserverSort = button.dataset.industrySort;
    await loadIndustryObserver({ silent: true });
    renderIndustryObserver();
  });
}

function sectorFlowDays() {
  return Array.isArray(state.sectorFundFlow?.days)
    ? [...state.sectorFundFlow.days].sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")))
    : [];
}

function sectorFlowAvailableDays() {
  const available = Array.isArray(state.sectorFundFlow?.availableDays)
    ? state.sectorFundFlow.availableDays
    : [];
  const days = available.length ? available : sectorFlowDays();
  return [...days].sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
}

function selectedSectorFlowDay() {
  const days = sectorFlowDays();
  return days.find((item) => item.date === state.selectedSectorFlowDate) || days[0] || null;
}

function sectorFlowSnapshots(day = selectedSectorFlowDay()) {
  return Array.isArray(day?.snapshots)
    ? [...day.snapshots].sort((a, b) => String(a.slot || "").localeCompare(String(b.slot || "")))
    : [];
}

function selectedSectorFlowSnapshot() {
  const snapshots = sectorFlowSnapshots();
  if (!snapshots.length) return null;
  const index = Math.min(
    Math.max(0, Number(state.sectorFlowSnapshotIndex) || 0),
    snapshots.length - 1,
  );
  return snapshots[index] || snapshots[snapshots.length - 1];
}

function sectorFlowSlotMinutes(slot) {
  const [hours, minutes] = String(slot || "").split(":").map(Number);
  return Number.isFinite(hours) && Number.isFinite(minutes) ? hours * 60 + minutes : null;
}

function sectorFlowTradingMinuteOffset(slot) {
  const minutes = sectorFlowSlotMinutes(slot);
  if (!Number.isFinite(minutes)) return null;
  const morningOpen = 9 * 60 + 30;
  const morningClose = 11 * 60 + 30;
  const afternoonOpen = 13 * 60;
  const afternoonClose = 15 * 60;
  if (minutes < morningOpen || minutes > afternoonClose) return null;
  if (minutes <= morningClose) return minutes - morningOpen;
  if (minutes < afternoonOpen) return morningClose - morningOpen;
  return (morningClose - morningOpen) + (minutes - afternoonOpen);
}

function sectorFlowTradingComparisonSnapshot(snapshots, index, minutes = 30) {
  if (!snapshots.length || index <= 0) return null;
  const currentOffset = sectorFlowTradingMinuteOffset(snapshots[index]?.slot);
  if (!Number.isFinite(currentOffset)) return null;
  const targetOffset = currentOffset - minutes;
  if (targetOffset < 0) return null;
  for (let cursor = index - 1; cursor >= 0; cursor -= 1) {
    const candidateOffset = sectorFlowTradingMinuteOffset(snapshots[cursor]?.slot);
    if (!Number.isFinite(candidateOffset) || candidateOffset > targetOffset) continue;
    if (targetOffset - candidateOffset <= 5) return snapshots[cursor];
    break;
  }
  return null;
}

function sectorFlowComparisonSnapshot(snapshots, index, minutes = 30) {
  return sectorFlowTradingComparisonSnapshot(snapshots, index, minutes);
}

function sectorFlowRouteState(delta, previousDelta, previousValue, threshold) {
  if (!Number.isFinite(delta)) return "新出现";
  if (delta > threshold) {
    if ((Number.isFinite(previousDelta) && previousDelta < -threshold)
      || (!Number.isFinite(previousDelta) && Number(previousValue) <= 0)) return "反转流入";
    if (Number.isFinite(previousDelta) && previousDelta > threshold) {
      return delta > previousDelta * 1.12 ? "流入加速" : "持续流入";
    }
    return "流入加速";
  }
  if (delta < -threshold) {
    if ((Number.isFinite(previousDelta) && previousDelta > threshold)
      || (!Number.isFinite(previousDelta) && Number(previousValue) >= 0)) return "反转流出";
    if (Number.isFinite(previousDelta) && previousDelta < -threshold) {
      return Math.abs(delta) > Math.abs(previousDelta) * 1.12 ? "流出加速" : "持续流出";
    }
    return "流出加速";
  }
  if (Number.isFinite(previousDelta) && previousDelta > threshold) return "流入收敛";
  if (Number.isFinite(previousDelta) && previousDelta < -threshold) return "流出收敛";
  return "横盘观察";
}

function sectorFlowCapitalRole(direction, netState) {
  if (direction === "inflow") {
    return netState === "净流入扩散" ? "增量承接" : netState === "净流出扩散" ? "防御承接" : "轮动承接";
  }
  if (direction === "outflow") return netState === "净流入扩散" ? "资金转出" : "轮动释放";
  return "横盘观察";
}

function sectorFlowMarketFlow(snapshots, index, requestedWindowMinutes = state.sectorFlowWindowMinutes) {
  const current = snapshots[index];
  if (!current) return { ready: false, state: "等待快照", market: {}, routes: [] };
  const comparison = sectorFlowComparisonSnapshot(snapshots, index, requestedWindowMinutes);
  if (!comparison) return { ready: false, state: `等待${requestedWindowMinutes}分钟窗口`, market: {}, routes: [] };
  const previousIndex = snapshots.indexOf(comparison);
  const previous = comparison.market || {};
  const previousFlow = previousIndex > 0
    ? sectorFlowMarketFlow(snapshots, previousIndex, requestedWindowMinutes)
    : null;
  const market = current.market || {};
  const intervalTurnoverYuan = Math.max(0, (Number(market.turnoverYuan) || 0) - (Number(previous.turnoverYuan) || 0));
  const intervalMainNetYuan = (Number(market.mainNetYuan) || 0) - (Number(previous.mainNetYuan) || 0);
  const currentOffset = sectorFlowTradingMinuteOffset(current.slot);
  const comparisonOffset = sectorFlowTradingMinuteOffset(comparison.slot);
  const windowMinutes = Math.max(1, Number(currentOffset) - Number(comparisonOffset));
  const previousWindow = previousFlow?.ready ? Number(previousFlow.windowMinutes) || null : null;
  const previousTurnoverDelta = previousFlow?.ready
    ? Number(previousFlow.market?.intervalTurnoverYuan)
    : null;
  const turnoverAccelerationPct = previousTurnoverDelta > 0
    ? (intervalTurnoverYuan / previousTurnoverDelta - 1) * 100
    : null;
  const liquidityState = turnoverAccelerationPct === null
    ? "待量能基线"
    : turnoverAccelerationPct >= 12 ? "放量" : turnoverAccelerationPct <= -12 ? "缩量" : "量能平稳";
  const netThresholdYuan = Math.max(200000000, intervalTurnoverYuan * 0.0008);
  const routeThresholdYuan = Math.max(50000000, intervalTurnoverYuan * 0.0001);
  const netState = intervalMainNetYuan >= netThresholdYuan
    ? "净流入扩散"
    : intervalMainNetYuan <= -netThresholdYuan ? "净流出扩散" : "存量轮动";
  const currentRoutes = sectorFlowRouteRows(current, { ready: false });
  const previousRoutes = sectorFlowRouteRows(comparison, { ready: false });
  const previousRouteMap = new Map(previousRoutes.map((item) => [String(item.lineId || item.family || item.code), item]));
  const previousFlowRoutes = previousFlow?.routes || [];
  const previousFlowRouteMap = new Map(previousFlowRoutes.map((item) => [String(item.lineId || item.family || item.code), item]));
  let routes = currentRoutes.map((item) => {
    const routeId = String(item.lineId || item.family || item.code);
    const previousRoute = previousRouteMap.get(routeId);
    const previousFlow = previousFlowRouteMap.get(routeId) || {};
    const currentValue = Number(item.mainNetYuan) || 0;
    const previousValue = previousRoute ? Number(previousRoute.mainNetYuan) || 0 : null;
    const delta = previousRoute ? currentValue - previousValue : null;
    const previousDelta = Number.isFinite(Number(previousFlow.intervalMainNetYuan))
      ? Number(previousFlow.intervalMainNetYuan)
      : null;
    const direction = delta > routeThresholdYuan ? "inflow" : delta < -routeThresholdYuan ? "outflow" : "flat";
    const state = sectorFlowRouteState(delta, previousDelta, previousValue, routeThresholdYuan);
    const previousStreak = Number(previousFlow.streak) || 0;
    const streak = direction === "flat" ? 0 : direction === previousFlow.direction ? previousStreak + 1 : 1;
    return {
      ...item,
      currentMainNetYuan: currentValue,
      previousMainNetYuan: previousValue,
      intervalMainNetYuan: delta,
      intervalVelocityYuanPerMinute: Number.isFinite(delta) ? delta / windowMinutes : null,
      previousIntervalMainNetYuan: previousDelta,
      velocityAccelerationPct: Number.isFinite(delta) && previousDelta ? (Math.abs(delta) / Math.abs(previousDelta) - 1) * 100 : null,
      trendWindowMinutes: windowMinutes,
      direction,
      state,
      flowState: state,
      streak,
    };
  });
  const positiveRouteCount = routes.filter((item) => item.direction === "inflow").length;
  const negativeRouteCount = routes.filter((item) => item.direction === "outflow").length;
  const activeRouteCount = positiveRouteCount + negativeRouteCount;
  const positiveRouteSharePct = activeRouteCount ? positiveRouteCount / activeRouteCount * 100 : 0;
  const positiveRouteAmountYuan = routes
    .filter((item) => item.direction === "inflow")
    .reduce((sum, item) => sum + Math.max(0, Number(item.intervalMainNetYuan) || 0), 0);
  const negativeRouteAmountYuan = routes
    .filter((item) => item.direction === "outflow")
    .reduce((sum, item) => sum + Math.abs(Math.min(0, Number(item.intervalMainNetYuan) || 0)), 0);
  const routeGrossAmountYuan = positiveRouteAmountYuan + negativeRouteAmountYuan;
  const positiveRouteAmountSharePct = routeGrossAmountYuan
    ? positiveRouteAmountYuan / routeGrossAmountYuan * 100
    : 0;
  const capitalMode = netState === "净流入扩散"
    ? positiveRouteAmountSharePct >= 60 ? "增量资金扩散" : "增量资金集中"
    : netState === "净流出扩散"
      ? positiveRouteCount ? "防御承接" : "净流出扩散"
      : "存量轮动";
  routes = routes.map((item) => ({
    ...item,
    capitalRole: sectorFlowCapitalRole(item.direction, netState),
    incrementScore: Math.abs(Number(item.intervalMainNetYuan) || 0) / Math.max(1, netThresholdYuan),
    rotationScore: ["存量轮动", "防御承接", "净流出扩散"].includes(capitalMode)
      ? Math.abs(Number(item.intervalMainNetYuan) || 0) / Math.max(1, routeThresholdYuan)
      : 0,
  }));
  return {
    ready: true,
    windowMinutes,
    state: `${liquidityState} · ${capitalMode}`,
    liquidityState,
    netState,
    capitalMode,
    marketDirection: intervalMainNetYuan >= netThresholdYuan ? "inflow" : intervalMainNetYuan <= -netThresholdYuan ? "outflow" : "flat",
    market: {
      intervalTurnoverYuan,
      intervalMainNetYuan,
      intervalVelocityYuanPerMinute: intervalMainNetYuan / windowMinutes,
      turnoverAccelerationPct,
      netThresholdYuan,
      routeThresholdYuan,
      previousWindowMinutes: previousWindow,
      netFlowRatioPct: intervalTurnoverYuan ? intervalMainNetYuan / intervalTurnoverYuan * 100 : null,
      positiveRouteCount,
      negativeRouteCount,
      activeRouteCount,
      positiveRouteSharePct,
      negativeRouteSharePct: activeRouteCount ? negativeRouteCount / activeRouteCount * 100 : 0,
      positiveRouteAmountYuan,
      negativeRouteAmountYuan,
      routeGrossAmountYuan,
      positiveRouteAmountSharePct,
      previousIntervalMainNetYuan: Number.isFinite(Number(previousFlow?.market?.intervalMainNetYuan))
        ? Number(previousFlow.market.intervalMainNetYuan)
        : null,
      velocityAccelerationPct: Number.isFinite(Number(previousFlow?.market?.intervalMainNetYuan)) && Number(previousFlow.market.intervalMainNetYuan)
        ? (Math.abs(intervalMainNetYuan) / Math.abs(Number(previousFlow.market.intervalMainNetYuan)) - 1) * 100
        : null,
      negativeRouteAmountSharePct: routeGrossAmountYuan
        ? negativeRouteAmountYuan / routeGrossAmountYuan * 100
        : 0,
    },
    routes,
  };
}

const sectorFlowLegacyRouteAliases = {
  "AI应用": { lineId: "ai-software", name: "AI软件与服务", category: "AI应用与软件", parent: "AI应用" },
  "云计算/信创": { lineId: "ai-software", name: "AI软件与服务", category: "AI应用与软件", parent: "AI应用" },
  "区块链": { lineId: "ai-software", name: "AI软件与服务", category: "AI应用与软件", parent: "AI应用" },
  "CPO/光模块": { lineId: "optical-interconnect", name: "光电互联", category: "AI基础设施", parent: "数据中心/通信" },
  "通信网络": { lineId: "optical-interconnect", name: "光电互联", category: "AI基础设施", parent: "数据中心/通信" },
  "服务器/计算机设备": { lineId: "server-cooling", name: "服务器与液冷", category: "AI基础设施", parent: "数据中心" },
  "液冷/机房配套": { lineId: "server-cooling", name: "服务器与液冷", category: "AI基础设施", parent: "数据中心" },
  "功率半导体": { lineId: "domestic-semiconductor", name: "国产半导体", category: "半导体", parent: "国产半导体" },
  "AI芯片": { lineId: "domestic-semiconductor", name: "国产半导体", category: "半导体", parent: "国产半导体" },
  "显示面板": { lineId: "consumer-electronics", name: "消费电子", category: "消费电子与汽车", parent: "消费电子" },
};

function sectorFlowCanonicalRoute(item) {
  const rawName = String(item?.name || item?.lineName || item?.sourceName || "");
  const alias = sectorFlowLegacyRouteAliases[rawName];
  if (!alias) return item;
  const sourceName = item?.routeActiveSourceName || item?.activeSourceName || item?.sourceName || rawName;
  return {
    ...item,
    lineId: alias.lineId,
    family: alias.lineId,
    name: alias.name,
    lineName: alias.name,
    routeCategory: item?.routeCategory || alias.category,
    routeParent: item?.routeParent || alias.parent,
    routeQuoteName: item?.routeQuoteName || rawName,
    routeActiveSourceName: sourceName,
    routeComponentCount: Number(item?.routeComponentCount) || 1,
    routeComponents: Array.isArray(item?.routeComponents) && item.routeComponents.length
      ? item.routeComponents
      : [{ name: sourceName, code: item?.code || "", role: "legacy" }],
    sourceKind: "route",
  };
}

function sectorFlowRouteRows(snapshot, flow) {
  const group = sectorFlowGroup(snapshot);
  const routeRows = Array.isArray(group.routeRows) && group.routeRows.length
    ? group.routeRows
    : [
      ...(group.trendInflow || []),
      ...(group.trendOutflow || []),
      ...(group.inflow || []),
      ...(group.outflow || []),
    ];
  const canonicalRows = routeRows.map(sectorFlowCanonicalRoute);
  const uniqueRouteRows = [];
  const routeById = new Map();
  canonicalRows.forEach((item) => {
    const identity = sectorFlowRowIdentity(item);
    if (routeById.has(identity)) return;
    routeById.set(identity, item);
    uniqueRouteRows.push(item);
  });
  const currentById = new Map(uniqueRouteRows.map((item) => [sectorFlowRowIdentity(item), item]));
  if (flow?.ready && Array.isArray(flow.routes) && flow.routes.length) {
    return flow.routes.map((item) => {
      const current = currentById.get(String(item.lineId)) || sectorFlowCanonicalRoute(item) || {};
      const rawDelta = item.intervalMainNetYuan;
      const delta = Number(rawDelta);
      const hasDelta = rawDelta !== null && rawDelta !== undefined && Number.isFinite(delta);
      const direction = item.direction || (delta > 0 ? "inflow" : delta < 0 ? "outflow" : "flat");
      return {
        ...current,
        ...item,
        name: item.name || current.name,
        mainNetYuan: Number(item.currentMainNetYuan ?? current.mainNetYuan) || 0,
        trendReady: hasDelta,
        trendDeltaYuan: hasDelta ? delta : null,
        trendPulseYuan: hasDelta ? delta : null,
        trendLabel: item.state || "横盘观察",
        trendMarker: direction === "inflow" ? "↗" : direction === "outflow" ? "↘" : "→",
        flowState: item.state || "横盘观察",
        capitalRole: item.capitalRole || sectorFlowCapitalRole(direction, flow?.netState || "存量轮动"),
        incrementScore: Number(item.incrementScore) || Math.abs(delta) / Math.max(1, Number(flow?.market?.netThresholdYuan) || 1),
        rotationScore: Number(item.rotationScore) || Math.abs(delta) / Math.max(1, Number(flow?.market?.routeThresholdYuan) || 1),
        streak: Number(item.streak) || 0,
        velocityAccelerationPct: item.velocityAccelerationPct,
        componentAlignment: item.componentAlignment,
        diffusionScore: current.routeComponentCount
          ? Math.max(current.routePositiveComponentCount || 0, current.routeNegativeComponentCount || 0) / current.routeComponentCount
          : 0,
        reversalScore: String(item.state || "").includes("反转") ? Math.abs(delta) : 0,
        sourceKind: "route",
      };
    });
  }
  return uniqueRouteRows.map((item) => ({ ...item, sourceKind: "route" }));
}

function sectorFlowStateWeight(item) {
  const label = String(item?.flowState || item?.trendLabel || "");
  if (/^等待\d+分钟趋势$/.test(label)) return -100;
  const weights = {
    "持续流入": 1000,
    "流入加速": 980,
    "反转流入": 900,
    "流入收敛": 600,
    "持续流出": 1000,
    "流出加速": 980,
    "反转流出": 900,
    "流出收敛": 600,
    "新出现": 520,
    "横盘观察": 120,
  };
  return weights[label] ?? 80;
}

function sectorFlowStrategyScore(item) {
  const delta = Math.abs(Number(item?.trendDeltaYuan ?? item?.mainNetYuan) || 0);
  const velocity = Math.abs(Number(item?.intervalVelocityYuanPerMinute) || 0);
  const stateWeight = sectorFlowStateWeight(item);
  if (state.sectorFlowStrategy === "diffusion") {
    return stateWeight + (Number(item?.diffusionScore) || 0) * 100 + Math.sqrt(delta / 100000000) * 10;
  }
  if (state.sectorFlowStrategy === "reversal") {
    const label = String(item?.flowState || item?.trendLabel || "");
    return stateWeight + (Number(item?.reversalScore) || 0) / 100000000 + (label.includes("反转") ? 80 : 0) + (label.includes("收敛") ? 40 : 0);
  }
  if (state.sectorFlowStrategy === "capital") {
    const roleScore = item?.capitalRole === "增量承接" ? 300 : item?.capitalRole === "防御承接" ? 180 : item?.capitalRole === "轮动承接" ? 120 : 0;
    return roleScore + stateWeight / 10 + (Number(item?.incrementScore) || 0) * 10 + velocity / 1000000;
  }
  if (state.sectorFlowStrategy === "rotation") {
    const roleScore = item?.capitalRole === "轮动承接" ? 240 : item?.capitalRole === "防御承接" ? 160 : item?.capitalRole === "轮动释放" ? 120 : 0;
    return roleScore + stateWeight / 10 + (Number(item?.rotationScore) || 0) * 10 + (Number(item?.streak) || 0);
  }
  return stateWeight + velocity / 1000000 + Math.sqrt(delta / 100000000) * 5;
}

function sectorFlowIndustrySourceRows(snapshot, snapshots, index) {
  const group = sectorFlowGroup(snapshot);
  const currentRows = Array.isArray(group.outflow) ? group.outflow : [];
  const comparison = sectorFlowComparisonSnapshot(snapshots, index, state.sectorFlowWindowMinutes);
  const previousGroup = comparison ? sectorFlowGroup(comparison) : null;
  const trendWindowMinutes = comparison
    ? Math.max(1, Number(sectorFlowTradingMinuteOffset(snapshot?.slot)) - Number(sectorFlowTradingMinuteOffset(comparison?.slot)))
    : null;
  const previousByCode = new Map((previousGroup?.outflow || []).map((item) => [String(item.code), item]));
  return currentRows.map((item) => {
    const previous = previousByCode.get(String(item.code));
    const currentValue = Number(item.mainNetYuan) || 0;
    const delta = previous ? currentValue - (Number(previous.mainNetYuan) || 0) : null;
    return {
      ...item,
      sourceKind: "industry",
      trendReady: Number.isFinite(delta),
      trendDeltaYuan: Number.isFinite(delta) ? delta : null,
      trendPulseYuan: Number.isFinite(delta) ? -delta : null,
      trendWindowMinutes,
      trendLabel: Number.isFinite(delta) && delta < 0 ? "流出加速" : Number.isFinite(delta) && delta > 0 ? "流出收敛" : "横盘观察",
      trendMarker: Number.isFinite(delta) && delta < 0 ? "↘" : Number.isFinite(delta) && delta > 0 ? "↗" : "→",
    };
  }).sort((left, right) => sectorFlowStrategyScore(right) - sectorFlowStrategyScore(left));
}

function sectorFlowRelationKey(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[\/\s·_&-]/g, "");
}

function sectorFlowRelationKeys(item) {
  return [...new Set([
    item?.name,
    item?.sourceName,
    item?.routeQuoteName,
    item?.activeSourceName,
    ...(item?.routeOriginIndustries || []),
    ...(item?.routeOverlap || []),
  ].map(sectorFlowRelationKey).filter(Boolean))];
}

function sectorFlowFlowRows(snapshot, snapshots, index) {
  const flow = sectorFlowMarketFlow(snapshots, index);
  const routes = sectorFlowRouteRows(snapshot, flow);
  const currentTargets = routes
    .filter((item) => item.trendReady ? Number(item.trendDeltaYuan) > 0 : Number(item.mainNetYuan) > 0)
    .sort((left, right) => sectorFlowStrategyScore(right) - sectorFlowStrategyScore(left));
  const routeSources = routes
    .filter((item) => item.trendReady && Number(item.trendDeltaYuan) < 0)
    .sort((left, right) => sectorFlowStrategyScore(right) - sectorFlowStrategyScore(left));
  const industrySources = sectorFlowIndustrySourceRows(snapshot, snapshots, index);
  const allSources = [
    ...routeSources,
    ...industrySources,
  ].sort((left, right) => {
    return sectorFlowStrategyScore(right) - sectorFlowStrategyScore(left);
  });
  const fallbackTargets = flow.ready
    ? []
    : routes.filter((item) => Number(item.mainNetYuan) > 0);
  const targets = (currentTargets.length ? currentTargets : fallbackTargets).map((target) => {
    const targetKeys = new Set(sectorFlowRelationKeys(target));
    const linkedSourceNames = allSources
      .filter((source) => {
        if (sectorFlowRelationKey(source.name) === sectorFlowRelationKey(target.name)) return false;
        return sectorFlowRelationKeys(source).some((key) => targetKeys.has(key));
      })
      .map((source) => source.name)
      .filter(Boolean);
    return {
      ...target,
      linkedSourceNames: [...new Set(linkedSourceNames)],
      linkStatus: linkedSourceNames.length ? "可解释关联" : "线路自身流速",
    };
  });
  return {
    flow,
    sources: allSources.slice(0, 8),
    targets: targets.slice(0, 12),
  };
}

const SECTOR_FLOW_TREND_NEUTRAL_YUAN = 20000000;

function sectorFlowRowIdentity(item) {
  return String(
    item?.lineId
      || item?.family
      || item?.code
      || `${item?.sourceScope || item?.scope || ""}:${item?.name || ""}`,
  );
}

function sectorFlowRowsByIdentity(snapshot) {
  const group = sectorFlowGroup(snapshot);
  if (state.sectorFlowScope === "focus") {
    const routeRows = sectorFlowRouteRows(snapshot, { ready: false });
    return new Map(routeRows.map((item) => [sectorFlowRowIdentity(item), item]));
  }
  const inflow = group.inflow || [];
  const outflow = group.outflow || [];
  return new Map([...inflow, ...outflow].map((item) => [sectorFlowRowIdentity(item), item]));
}

function sectorFlowTrendRows(snapshots, selectedIndex, rows, direction) {
  const sourceRows = Array.isArray(rows) ? rows : [];
  const requestedWindowMinutes = state.sectorFlowWindowMinutes;
  const comparison = sectorFlowComparisonSnapshot(snapshots, selectedIndex, requestedWindowMinutes);
  const comparisonIndex = comparison ? snapshots.indexOf(comparison) : -1;
  if (!comparison || comparisonIndex < 0) {
    return sourceRows.map((item) => ({
      ...item,
      trendReady: false,
      trendScore: Number(item.strengthScore || item.pressureScore || 0),
      trendDeltaYuan: null,
      trendStreak: 0,
      trendLabel: `等待${requestedWindowMinutes}分钟趋势`,
      trendMarker: "·",
    }));
  }

  const historyMaps = snapshots
    .slice(comparisonIndex, selectedIndex + 1)
    .map((item) => sectorFlowRowsByIdentity(item));
  const baselineMap = historyMaps[0] || new Map();
  const trendWindowMinutes = Math.max(
    1,
    Number(sectorFlowTradingMinuteOffset(snapshots[selectedIndex]?.slot))
      - Number(sectorFlowTradingMinuteOffset(comparison?.slot)),
  );
  const neutral = SECTOR_FLOW_TREND_NEUTRAL_YUAN;
  const candidates = sourceRows.map((item) => {
    const identity = sectorFlowRowIdentity(item);
    const currentValue = Number(item.mainNetYuan) || 0;
    const baseline = baselineMap.get(identity);
    const baselineValue = Number(baseline?.mainNetYuan);
    const deltas = [];
    for (let cursor = 1; cursor < historyMaps.length; cursor += 1) {
      const previous = historyMaps[cursor - 1].get(identity);
      const current = historyMaps[cursor].get(identity);
      if (!previous || !current) continue;
      const previousValue = Number(previous.mainNetYuan);
      const nextValue = Number(current.mainNetYuan);
      if (Number.isFinite(previousValue) && Number.isFinite(nextValue)) {
        deltas.push(nextValue - previousValue);
      }
    }
    const rawDelta = baseline && Number.isFinite(baselineValue)
      ? currentValue - baselineValue
      : null;
    const pulse = rawDelta === null ? null : direction === "inflow" ? rawDelta : -rawDelta;
    const directionalDeltas = deltas
      .map((delta) => direction === "inflow" ? delta : -delta)
      .filter((delta) => Math.abs(delta) >= neutral);
    const positiveIntervals = directionalDeltas.filter((delta) => delta > neutral).length;
    const consistency = directionalDeltas.length ? positiveIntervals / directionalDeltas.length : 0;
    let streak = 0;
    for (let cursor = deltas.length - 1; cursor >= 0; cursor -= 1) {
      const directionalDelta = direction === "inflow" ? deltas[cursor] : -deltas[cursor];
      if (directionalDelta <= neutral) break;
      streak += 1;
    }
    const trendReady = pulse !== null && deltas.length > 0;
    let trendLabel = "横盘观察";
    let trendMarker = "→";
    if (trendReady && pulse > neutral) {
      trendLabel = direction === "inflow"
        ? streak >= 2 ? "持续流入" : "流入加速"
        : streak >= 2 ? "持续流出" : "流出加速";
      trendMarker = direction === "inflow" ? "↗" : "↘";
    } else if (trendReady && pulse < -neutral) {
      trendLabel = direction === "inflow" ? "流入减弱" : "流出收敛";
      trendMarker = direction === "inflow" ? "↘" : "↗";
    }
    return {
      ...item,
      trendReady,
      trendDeltaYuan: rawDelta,
      trendPulseYuan: pulse,
      trendWindowMinutes,
      trendStreak: streak,
      trendConsistency: consistency,
      trendLabel,
      flowState: trendLabel,
      trendMarker,
      trendScore: 0,
    };
  });

  const maxPositivePulse = Math.max(1, ...candidates.map((item) => Math.max(0, Number(item.trendPulseYuan) || 0)));
  const maxCurrentAmount = Math.max(1, ...candidates.map((item) => Math.abs(Number(item.mainNetYuan) || 0)));
  const scored = candidates.map((item) => {
    if (!item.trendReady) return { ...item, trendScore: -1 };
    const pulseComponent = Math.min(1, Math.max(0, Number(item.trendPulseYuan) || 0) / maxPositivePulse);
    const streakComponent = Math.min(1, Number(item.trendStreak || 0) / 3);
    const amountComponent = Math.sqrt(Math.abs(Number(item.mainNetYuan) || 0) / maxCurrentAmount);
    return {
      ...item,
      trendScore: Math.round((pulseComponent * 70 + Number(item.trendConsistency || 0) * 20 + streakComponent * 10) * 10) / 10,
      currentAmountComponent: amountComponent,
    };
  });
  return scored.sort((left, right) => {
    if (sectorFlowStateWeight(right) !== sectorFlowStateWeight(left)) {
      return sectorFlowStateWeight(right) - sectorFlowStateWeight(left);
    }
    if ((Number(right.trendStreak) || 0) !== (Number(left.trendStreak) || 0)) {
      return (Number(right.trendStreak) || 0) - (Number(left.trendStreak) || 0);
    }
    if (right.trendScore !== left.trendScore) return right.trendScore - left.trendScore;
    if ((Number(right.trendPulseYuan) || 0) !== (Number(left.trendPulseYuan) || 0)) {
      return (Number(right.trendPulseYuan) || 0) - (Number(left.trendPulseYuan) || 0);
    }
    return (Number(right.strengthScore || right.pressureScore) || 0) - (Number(left.strengthScore || left.pressureScore) || 0);
  });
}

function sectorFlowDisplayGroup(snapshot, snapshots, selectedIndex) {
  const group = sectorFlowGroup(snapshot);
  const trendMode = state.sectorFlowSort === "trend";
  const focusRouteRows = state.sectorFlowScope === "focus"
    ? sectorFlowRouteRows(snapshot, { ready: false })
    : [];
  const inflowSource = focusRouteRows.length
    ? focusRouteRows.filter((item) => Number(item.mainNetYuan) > 0)
    : group.inflow || [];
  const outflowSource = focusRouteRows.length
    ? focusRouteRows.filter((item) => Number(item.mainNetYuan) < 0)
    : group.outflow || [];
  const currentRouteRows = !trendMode && state.sectorFlowScope === "focus"
    ? sectorFlowRouteRows(snapshot, { ready: false })
    : [];
  const currentInflowSource = currentRouteRows.length
    ? currentRouteRows.filter((item) => Number(item.mainNetYuan) > 0).sort((left, right) => Number(right.mainNetYuan || 0) - Number(left.mainNetYuan || 0))
    : inflowSource;
  const inflow = trendMode
    ? sectorFlowTrendRows(snapshots, selectedIndex, inflowSource, "inflow")
    : currentInflowSource;
  const outflow = trendMode
    ? sectorFlowTrendRows(snapshots, selectedIndex, outflowSource, "outflow")
    : outflowSource;
  const flowModel = trendMode && state.sectorFlowScope === "focus"
    ? sectorFlowFlowRows(snapshot, snapshots, selectedIndex)
    : { flow: { ready: false }, sources: outflow, targets: inflow };
  return {
    ...group,
    inflow,
    outflow,
    flowModel,
    trendMode,
    trendReady: [...inflow, ...outflow].some((item) => item.trendReady),
  };
}

function sectorFlowTone(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || Math.abs(number) < 0.5) return "";
  return number > 0 ? "is-positive" : "is-negative";
}

function formatSectorFlowMoney(value, signed = true) {
  if (!marketPulseHasNumber(value)) return "--";
  const number = Number(value);
  const absolute = Math.abs(number);
  const sign = signed ? (number > 0 ? "+" : number < 0 ? "-" : "") : "";
  if (absolute >= 100000000) {
    const scaled = absolute / 100000000;
    const decimals = scaled >= 100 ? 0 : scaled >= 10 ? 1 : 2;
    return `${sign}${formatFuturesNumber(scaled, decimals)}亿`;
  }
  if (absolute >= 10000) return `${sign}${formatFuturesNumber(absolute / 10000, 1)}万`;
  return `${sign}${formatFuturesNumber(absolute, 0)}元`;
}

const sectorFlowFocusBoardSpecs = [
  ["通信技术", ["通信技术"]],
  ["CPO概念", ["CPO概念"]],
  ["光通信模块", ["光通信模块"]],
  ["算力概念", ["算力概念"]],
  ["半导体", ["半导体", "半导体概念"]],
  ["存储芯片", ["存储芯片"]],
  ["人工智能", ["人工智能"]],
  ["PCB", ["PCB", "印制电路板"]],
  ["液冷概念", ["液冷概念"]],
  ["白酒", ["白酒", "白酒Ⅱ", "白酒Ⅲ"]],
  ["黄金", ["黄金"]],
  ["银行", ["银行", "银行Ⅱ"]],
  ["玻璃玻纤", ["玻璃玻纤"]],
  ["养殖业", ["养殖业"]],
  ["农林牧渔", ["农林牧渔"]],
  ["煤炭", ["煤炭"]],
];

function sectorFlowLegacyFocusGroup(groups) {
  const rows = [
    ...(groups?.industry?.inflow || []),
    ...(groups?.industry?.outflow || []),
    ...(groups?.concept?.inflow || []),
    ...(groups?.concept?.outflow || []),
  ];
  const selected = sectorFlowFocusBoardSpecs.map(([name, aliases]) => {
    const source = aliases.map((alias) => rows.find((item) => item?.name === alias)).find(Boolean);
    return source ? { ...source, name, sourceName: source.name, scope: "focus" } : null;
  }).filter(Boolean);
  return {
    inflow: selected.filter((item) => Number(item.mainNetYuan) > 0).sort((a, b) => Number(b.mainNetYuan) - Number(a.mainNetYuan)),
    outflow: selected.filter((item) => Number(item.mainNetYuan) < 0).sort((a, b) => Number(a.mainNetYuan) - Number(b.mainNetYuan)),
    inflowCount: selected.filter((item) => Number(item.mainNetYuan) > 0).length,
    outflowCount: selected.filter((item) => Number(item.mainNetYuan) < 0).length,
    boardCount: selected.length,
    taxonomy: "reference-core-legacy",
  };
}

function sectorFlowGroup(snapshot) {
  const groups = snapshot?.groups || {};
  if (state.sectorFlowScope === "hot") {
    return groups.hot || groups.focus || sectorFlowLegacyFocusGroup(groups);
  }
  if (state.sectorFlowScope === "focus") {
    return groups.focus || sectorFlowLegacyFocusGroup(groups);
  }
  return groups[state.sectorFlowScope] || groups.focus || groups.hot || groups.all || groups.industry || { inflow: [], outflow: [] };
}

function sectorFlowAggregateRows(items, visibleCount) {
  const rows = (Array.isArray(items) ? items : []).filter((item) => (
    marketPulseHasNumber(item?.mainNetYuan) && Math.abs(Number(item.mainNetYuan)) >= 0.5
  ));
  return rows.slice(0, visibleCount);
}

function sectorFlowSvg(snapshot, snapshots = [], selectedIndex = 0) {
  const group = sectorFlowDisplayGroup(snapshot, snapshots, selectedIndex);
  const mapNode = $("#sector-flow-map");
  const measuredMapWidth = Math.round(mapNode?.getBoundingClientRect().width || window.innerWidth || 1200);
  const compact = measuredMapWidth <= 900;
  const focusScope = ["hot", "focus"].includes(state.sectorFlowScope);
  const rawOutflow = Array.isArray(group.flowModel?.sources) ? group.flowModel.sources : Array.isArray(group.outflow) ? group.outflow : [];
  const rawInflow = Array.isArray(group.flowModel?.targets) ? group.flowModel.targets : Array.isArray(group.inflow) ? group.inflow : [];
  const outflow = sectorFlowAggregateRows(rawOutflow, focusScope ? (compact ? 6 : 12) : compact ? 5 : 8);
  const inflow = sectorFlowAggregateRows(rawInflow, focusScope ? (compact ? 6 : 12) : compact ? 4 : 6);
  if (!outflow.length && !inflow.length) {
    return '<div class="sector-flow-empty">当前快照没有可展示的板块资金排名。</div>';
  }

  const desktopWidth = Math.max(900, measuredMapWidth);
  const desktopHeight = 320;
  const desktopLabelTop = 32;
  const desktopLabelBottom = desktopHeight - 58;
  const desktopEdge = Math.max(28, Math.round(desktopWidth * 0.034));
  const desktopLeftName = Math.round(desktopWidth * 0.33);
  const desktopRightEnd = Math.round(desktopWidth * 0.65);
  const dims = compact
    ? { width: 720, height: 520, leftAmount: 14, leftName: 200, leftBar: 212, leftStart: 238, hubX: 414, hubY: 360, rightEnd: 518, rightBar: 526, rightName: 548, rightAmount: 706, gapX: 526, gapY: 458 }
    : {
      width: desktopWidth,
      height: desktopHeight,
      leftAmount: desktopEdge,
      leftName: desktopLeftName,
      leftBar: desktopLeftName + 18,
      leftStart: desktopLeftName + 64,
      hubX: Math.round(desktopWidth * 0.53),
      hubY: Math.round(desktopHeight * 0.7),
      rightEnd: desktopRightEnd,
      rightBar: desktopRightEnd + 16,
      rightName: desktopRightEnd + 68,
      rightAmount: desktopWidth - desktopEdge,
      gapX: desktopRightEnd + 16,
      gapY: desktopHeight - 22,
    };
  const allAmounts = [...outflow, ...inflow].map((item) => Math.abs(Number(item.trendReady ? item.trendDeltaYuan : item.mainNetYuan) || 0));
  const maxAmount = Math.max(1, ...allAmounts);
  const visualMagnitude = (item, tone) => {
    const score = group.trendMode && Number.isFinite(Number(item?.trendScore)) && Number(item?.trendScore) >= 0
      ? Number(item?.trendScore)
      : tone === "inflow" ? Number(item?.strengthScore) : Number(item?.pressureScore);
    return focusScope && Number.isFinite(score) && score > 0
      ? score
      : Math.abs(Number(item?.trendReady ? item.trendDeltaYuan : item?.mainNetYuan) || 0);
  };
  const maxVisual = Math.max(
    1,
    ...outflow.map((item) => visualMagnitude(item, "outflow")),
    ...inflow.map((item) => visualMagnitude(item, "inflow")),
  );
  const flowReady = Boolean(group.flowModel?.flow?.ready);
  const requestedWindowMinutes = Number(state.sectorFlowWindowMinutes) || 1;
  const flowWindowMinutes = Number(group.flowModel?.flow?.windowMinutes) || requestedWindowMinutes;
  const netGap = flowReady ? Number(group.flowModel?.flow?.market?.intervalMainNetYuan) || 0 : null;
  const gapTone = (netGap || 0) >= 0 ? "inflow" : "outflow";
  const gapLabel = flowReady
    ? compact ? "窗口净额" : `窗口净额（${flowWindowMinutes}分钟）`
    : compact ? `窗口净额（待${requestedWindowMinutes}分）` : `窗口净额（待${requestedWindowMinutes}分钟）`;
  const rowValueLabel = (item, tone) => {
    if (group.trendMode) {
      const trendWindowMinutes = Number(item.trendWindowMinutes) || flowWindowMinutes;
      return item.trendReady
        ? `${item.flowState || item.trendLabel || "趋势"} · ${formatSectorFlowMoney(item.trendDeltaYuan)} /${trendWindowMinutes}分`
        : `待${requestedWindowMinutes}分 · ${formatSectorFlowMoney(Math.abs(Number(item.mainNetYuan) || 0), false)}`;
    }
    return focusScope && marketPulseHasNumber(item.changePct)
      ? `${formatPercentValue(item.changePct)} · ${formatSectorFlowMoney(Math.abs(Number(item.mainNetYuan) || 0), false)}`
      : formatSectorFlowMoney(Math.abs(Number(item.mainNetYuan) || 0), false);
  };
  const rowName = (item) => `${item.name || "--"}${item.aggregatedCount ? ` (${item.aggregatedCount})` : ""}${group.trendMode && item.trendReady ? ` ${item.trendMarker}` : ""}`;
  const svgTextEstimate = (value, fontSize) => Array.from(String(value || "")).reduce(
    (total, character) => total + (/[\x00-\x7f]/.test(character) ? 0.62 : 1) * fontSize,
    0,
  );
  const svgFitTextAttrs = (value, maxWidth, fontSize) => (
    svgTextEstimate(value, fontSize) > maxWidth
      ? ` textLength="${maxWidth}" lengthAdjust="spacingAndGlyphs"`
      : ""
  );
  const rowTrendTitle = (item) => item.trendReady
    ? `${Number(item.trendWindowMinutes) || flowWindowMinutes}分钟增量 ${formatSectorFlowMoney(item.trendDeltaYuan)}，${item.flowState || item.trendLabel || "趋势观察"}，${item.routeComponentCount ? `组件${item.routePositiveComponentCount}/${item.routeComponentCount}同向` : "按代表板块口径"}${item.linkStatus ? `，${item.linkStatus}` : ""}`
    : `尚未形成${requestedWindowMinutes}分钟可比趋势`;
  const visualRatio = (item, tone) => Math.min(1, visualMagnitude(item, tone) / maxVisual);
  const scaledVisualRatio = (item, tone) => focusScope
    ? visualRatio(item, tone)
    : Math.sqrt(visualRatio(item, tone));
  const flowWidth = (item, tone) => 2.2 + scaledVisualRatio(item, tone) * (compact ? 14 : 19);
  const meterWidth = (item, tone) => 7 + scaledVisualRatio(item, tone) * (compact ? 25 : 36);
  const rowY = (index, count, top, bottom) => (
    count <= 1 ? (top + bottom) / 2 : top + (bottom - top) * index / (count - 1)
  );
  const outflowTop = compact ? 72 : desktopLabelTop;
  const outflowBottom = compact ? 350 : desktopLabelBottom;
  const inflowTop = compact ? (focusScope ? 72 : 92) : desktopLabelTop;
  const inflowBottom = compact ? (focusScope ? 350 : 288) : desktopLabelBottom;

  const particles = (pathId, tone, value, index, visualValue = null) => {
    const ratio = marketPulseHasNumber(visualValue)
      ? Math.min(1, Number(visualValue) / maxVisual)
      : Math.min(1, Math.abs(Number(value) || 0) / maxAmount);
    const count = 1 + (ratio >= 0.18 ? 1 : 0) + (ratio >= 0.52 ? 1 : 0);
    const duration = 3.8 - ratio * 1.45;
    return Array.from({ length: count }, (_, particleIndex) => `
      <circle class="sector-flow-particle ${tone}" r="${(2.2 + ratio * 1.9).toFixed(1)}">
        <animateMotion dur="${duration.toFixed(2)}s" begin="-${(particleIndex * duration / count + index * 0.13).toFixed(2)}s" repeatCount="indefinite">
          <mpath href="#${pathId}" />
        </animateMotion>
      </circle>`).join("");
  };

  const relationKey = (value) => String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[\\/\s·_&-]/g, "");
  const sourceIndexForTarget = (item) => {
    const linkedKeys = new Set((item.linkedSourceNames || []).map(relationKey).filter(Boolean));
    if (!linkedKeys.size) return -1;
    return outflow.findIndex((source) => linkedKeys.has(relationKey(source.name)) || linkedKeys.has(relationKey(source.sourceName)));
  };
  const flowPaths = flowReady ? inflow.map((item, index) => {
    const y = rowY(index, inflow.length, inflowTop, inflowBottom);
    const sourceIndex = sourceIndexForTarget(item);
    const linked = sourceIndex >= 0;
    const sourceY = linked ? rowY(sourceIndex, outflow.length, outflowTop, outflowBottom) : y;
    const id = `sector-flow-in-${index}`;
    const startX = linked ? dims.leftStart : dims.hubX + (compact ? 22 : 34);
    const controlOffset = linked ? 120 : 44;
    const d = `M ${startX} ${sourceY.toFixed(1)} C ${(startX + controlOffset).toFixed(1)} ${sourceY.toFixed(1)}, ${(dims.rightEnd - 160).toFixed(1)} ${y.toFixed(1)}, ${dims.rightEnd} ${y.toFixed(1)}`;
    const visualValue = visualMagnitude(item, "inflow");
    const width = flowWidth(item, "inflow").toFixed(2);
    return `
      <g class="sector-flow-connection ${linked ? "is-linked" : "is-self-flow"}">
        <title>${escapeHtml(`${item.name || "--"}｜${linked ? `可解释关联：${(item.linkedSourceNames || []).join("、")}` : "线路自身流速，暂无匹配来源"}`)}</title>
        <path class="sector-flow-ribbon-glow inflow" d="${d}" style="--stream-width:${width}px" />
        <path id="${id}" class="sector-flow-ribbon inflow ${linked ? "linked" : "self"}" d="${d}" style="--stream-width:${width}px" />
      </g>
      ${particles(id, "inflow", item.mainNetYuan, index, visualValue)}`;
  }).join("") : "";
  const gapPathId = "sector-flow-gap-path";
  const gapPath = `M ${dims.leftStart} ${dims.gapY} C ${(dims.leftStart + 120).toFixed(1)} ${dims.gapY}, ${(dims.gapX - 76).toFixed(1)} ${dims.gapY}, ${dims.gapX} ${dims.gapY}`;
  const gapWidth = (5 + Math.sqrt(Math.min(1, Math.abs(netGap) / maxAmount)) * 10).toFixed(2);
  const gapFlow = flowReady && Math.abs(netGap) >= 0.5 ? `
    <path class="sector-flow-ribbon-glow ${gapTone}" d="${gapPath}" style="--stream-width:${gapWidth}px" />
    <path id="${gapPathId}" class="sector-flow-ribbon gap ${gapTone}" d="${gapPath}" style="--stream-width:${gapWidth}px" />
    ${particles(gapPathId, gapTone, netGap, 9)}` : "";
  const flowTitle = flowReady
    ? `${group.flowModel?.flow?.capitalMode || "窗口流速"} · 线路关联`
    : `等待${requestedWindowMinutes}分钟真实流速`;
  const flowSubtitle = flowReady
    ? "实线=可解释关联 · 短线=线路自身流速"
    : "首张快照不绘制方向连线";

  const leftRows = outflow.map((item, index) => {
    const y = rowY(index, outflow.length, outflowTop, outflowBottom);
    const width = meterWidth(item, "outflow");
    const valueLabel = rowValueLabel(item, "outflow");
    const nameLabel = rowName(item);
    const desktopValueWidth = Math.max(
      132,
      dims.leftName - dims.leftAmount - svgTextEstimate(nameLabel, 16) - 28,
    );
    const desktopValueAttrs = compact ? "" : svgFitTextAttrs(valueLabel, desktopValueWidth, 15);
    return `
      <g class="sector-flow-svg-row outflow">
        <title>${escapeHtml(`${item.name || "--"}｜当前净额 ${formatSectorFlowMoney(item.mainNetYuan)}｜${rowTrendTitle(item)}`)}</title>
        <text x="${dims.leftAmount}" y="${(compact ? y - 8 : y).toFixed(1)}"${desktopValueAttrs} class="amount subline">${escapeHtml(valueLabel)}</text>
        <text x="${dims.leftName}" y="${(compact ? y + 10 : y).toFixed(1)}" text-anchor="end" class="name">${escapeHtml(nameLabel)}</text>
        <rect class="meter-track" x="${dims.leftBar - (compact ? 2 : 4)}" y="${(y - 5).toFixed(1)}" width="${compact ? 27 : 39}" height="10" rx="2" />
        <rect class="meter-fill" x="${dims.leftBar}" y="${(y - 5).toFixed(1)}" width="${width.toFixed(1)}" height="10" rx="2" />
      </g>`;
  }).join("");
  const rightRows = inflow.map((item, index) => {
    const y = rowY(index, inflow.length, inflowTop, inflowBottom);
    const nameY = compact ? y - 8 : y;
    const amountY = compact ? y + 12 : y;
    const width = meterWidth(item, "inflow");
    const valueLabel = rowValueLabel(item, "inflow");
    const nameLabel = rowName(item);
    const desktopValueWidth = Math.max(
      132,
      dims.rightAmount - dims.rightName - svgTextEstimate(nameLabel, 16) - 28,
    );
    const valueAttrs = compact
      ? svgFitTextAttrs(valueLabel, 150, 18)
      : svgFitTextAttrs(valueLabel, desktopValueWidth, 15);
    const quoteName = item.sourceName || item.name || "--";
    const activeName = item.activeSourceName || quoteName;
    const titleText = focusScope
      ? `${item.name || "--"}｜固定金额口径：${quoteName}｜当前活跃分支：${activeName}｜当前净额：${formatSectorFlowMoney(item.mainNetYuan)}｜${rowTrendTitle(item)}｜概念金额不可相加`
      : `${item.name || "--"}｜${valueLabel}`;
    return `
      <g class="sector-flow-svg-row inflow">
        <title>${escapeHtml(titleText)}</title>
        <rect class="meter-track" x="${dims.rightBar}" y="${(y - 5).toFixed(1)}" width="${compact ? 27 : 39}" height="10" rx="2" />
        <rect class="meter-fill" x="${dims.rightBar}" y="${(y - 5).toFixed(1)}" width="${width.toFixed(1)}" height="10" rx="2" />
        <text x="${dims.rightName}" y="${nameY.toFixed(1)}" class="name">${escapeHtml(nameLabel)}</text>
        <text x="${compact ? dims.rightName : dims.rightAmount}" y="${amountY.toFixed(1)}"${valueAttrs}${compact ? "" : ' text-anchor="end"'} class="amount subline">${escapeHtml(valueLabel)}</text>
      </g>`;
  }).join("");

  return `
    <svg class="${compact ? "is-compact" : ""}" viewBox="0 0 ${dims.width} ${dims.height}" role="img" aria-label="主流流出行业与强势热门主线分布">
      <defs>
        <linearGradient id="sector-flow-out-gradient" x1="0" x2="1">
          <stop offset="0%" stop-color="#35d399" stop-opacity="0.78" />
          <stop offset="100%" stop-color="#2aa77b" stop-opacity="0.14" />
        </linearGradient>
        <linearGradient id="sector-flow-in-gradient" x1="0" x2="1">
          <stop offset="0%" stop-color="#ef4452" stop-opacity="0.16" />
          <stop offset="100%" stop-color="#ff4254" stop-opacity="0.82" />
        </linearGradient>
      </defs>
      <g class="sector-flow-streams">${flowPaths}${gapFlow}</g>
      <g class="sector-flow-convergence">
        <text x="${dims.hubX}" y="${dims.hubY - 30}" text-anchor="middle">${escapeHtml(flowTitle)}</text>
        <text x="${dims.hubX}" y="${dims.hubY - 14}" text-anchor="middle">${escapeHtml(flowSubtitle)}</text>
      </g>
      ${leftRows}${rightRows}
      <g class="sector-flow-gap ${gapTone}">
        <rect x="${dims.gapX}" y="${dims.gapY - 6}" width="10" height="12" rx="1" />
        <text x="${dims.gapX + 20}" y="${dims.gapY}" class="gap-label">${gapLabel}</text>
        <text x="${dims.width - (compact ? 14 : 28)}" y="${dims.gapY}" text-anchor="end" class="gap-value">${escapeHtml(formatSectorFlowMoney(netGap))}</text>
      </g>
    </svg>
  `;
}

function sectorFlowOrderDeltaMarkup(snapshot, comparison, field) {
  if (!comparison) return "首张真实快照";
  const delta = Number(snapshot?.market?.[field]) - Number(comparison?.market?.[field]);
  if (!Number.isFinite(delta)) return "等待可比快照";
  return `较 ${comparison.slot || "--"} ${formatSectorFlowMoney(delta)}`;
}

function renderSectorFlowOrderStrip(snapshot, comparison) {
  const list = $("#sector-flow-order-rank-list");
  if (!list) return;
  if (!snapshot) {
    list.innerHTML = '<div class="sector-flow-empty">等待第一张真实资金快照。</div>';
    return;
  }
  const metrics = [
    { field: "mainNetYuan", label: "主力" },
    { field: "superLargeNetYuan", label: "超大单" },
    { field: "largeNetYuan", label: "大单" },
    { field: "mediumNetYuan", label: "中单" },
    { field: "smallNetYuan", label: "小单" },
  ].map((metric) => ({
    ...metric,
    value: Number(snapshot?.market?.[metric.field]) || 0,
  })).sort((a, b) => Math.abs(b.value) - Math.abs(a.value));
  const maxAmount = Math.max(1, ...metrics.map((item) => Math.abs(item.value)));
  const strongestPositive = metrics.filter((item) => item.value > 0).sort((a, b) => b.value - a.value)[0]?.field;
  const strongestNegative = metrics.filter((item) => item.value < 0).sort((a, b) => a.value - b.value)[0]?.field;
  list.innerHTML = metrics.map((metric, index) => {
    const tone = sectorFlowTone(metric.value);
    const delta = comparison
      ? metric.value - Number(comparison?.market?.[metric.field] || 0)
      : null;
    const focusClass = metric.field === strongestPositive || metric.field === strongestNegative ? " is-focus" : "";
    const width = Math.max(4, Math.abs(metric.value) / maxAmount * 100);
    return `
      <article class="${tone}${focusClass}">
        <div class="sector-flow-order-rank-head">
          <span><b>${index + 1}</b>${escapeHtml(metric.label)} <small>${metric.value > 0 ? "净流入" : metric.value < 0 ? "净流出" : "平衡"}</small></span>
          <strong>${escapeHtml(formatSectorFlowMoney(metric.value))}</strong>
        </div>
        <div class="sector-flow-order-meter"><i style="width:${width.toFixed(1)}%"></i></div>
        <p class="${marketPulseHasNumber(delta) ? sectorFlowTone(delta) : ""}">${escapeHtml(sectorFlowOrderDeltaMarkup(snapshot, comparison, metric.field))}</p>
      </article>`;
  }).join("");
}

function sectorFlowSessionState(slot) {
  const minutes = sectorFlowSlotMinutes(slot);
  if (!Number.isFinite(minutes)) return "等待快照";
  if (minutes >= 900) return "收盘";
  if (minutes >= 780) return "下午盘";
  if (minutes >= 690) return "午间休市";
  if (minutes <= 575) return "开盘";
  return "上午盘";
}

function renderSectorFlowHero(day, snapshot, comparison, snapshots, selectedIndex) {
  const date = String(day?.date || snapshot?.tradingDate || "");
  const dateParts = date.split("-");
  const dateNode = $("#sector-flow-hero-date");
  if (dateNode) dateNode.textContent = dateParts.length === 3 ? `${dateParts[1]}.${dateParts[2]}` : "--.--";
  const sessionNode = $("#sector-flow-session-state");
  if (sessionNode) sessionNode.textContent = sectorFlowSessionState(snapshot?.slot);

  const mainValue = snapshot?.market?.mainNetYuan;
  const mainNode = $("#sector-flow-main-net");
  const mainDeltaNode = $("#sector-flow-main-delta");
  if (mainNode) {
    mainNode.textContent = formatSectorFlowMoney(mainValue);
    mainNode.className = sectorFlowTone(mainValue);
  }
  if (mainDeltaNode) {
    mainDeltaNode.textContent = snapshot ? sectorFlowOrderDeltaMarkup(snapshot, comparison, "mainNetYuan") : "等待快照";
    const delta = comparison ? Number(mainValue) - Number(comparison?.market?.mainNetYuan || 0) : null;
    mainDeltaNode.className = marketPulseHasNumber(delta) ? sectorFlowTone(delta) : "";
  }

  const marketFlow = snapshot ? sectorFlowMarketFlow(snapshots, selectedIndex) : { ready: false };
  const liquidityNode = $("#sector-flow-liquidity-mode");
  const allocationNode = $("#sector-flow-allocation-mode");
  if (liquidityNode) {
    liquidityNode.textContent = marketFlow.ready
      ? `量能 ${marketFlow.liquidityState}${marketFlow.market?.intervalTurnoverYuan ? ` · ${formatSectorFlowMoney(marketFlow.market.intervalTurnoverYuan)}` : ""}`
      : "量能 待30分钟";
    liquidityNode.className = marketFlow.liquidityState === "放量" ? "is-positive" : marketFlow.liquidityState === "缩量" ? "is-negative" : "";
  }
  if (allocationNode) {
    allocationNode.textContent = marketFlow.ready
      ? `净额 ${marketFlow.netState} · ${formatSectorFlowMoney(marketFlow.market?.intervalMainNetYuan)}`
      : "净额 等待窗口";
    allocationNode.className = marketFlow.netState === "净流入扩散" ? "is-positive" : marketFlow.netState === "净流出扩散" ? "is-negative" : "";
  }

  const group = snapshot
    ? sectorFlowDisplayGroup(snapshot, snapshots, selectedIndex)
    : { inflow: [], outflow: [], trendReady: false };
  const leaderIn = group.inflow?.[0];
  const leaderOut = group.outflow?.[0];
  $("#sector-flow-leader-in").textContent = leaderIn?.name || "--";
  $("#sector-flow-leader-in-value").textContent = state.sectorFlowScope === "focus" && leaderIn
    ? `${formatPercentValue(leaderIn.changePct)} · ${formatSectorFlowMoney(leaderIn.mainNetYuan)}`
    : formatSectorFlowMoney(leaderIn?.mainNetYuan);
  $("#sector-flow-leader-out").textContent = leaderOut?.name || "--";
  $("#sector-flow-leader-out-value").textContent = state.sectorFlowScope === "focus" && leaderOut
    ? `${formatPercentValue(leaderOut.changePct)} · ${formatSectorFlowMoney(leaderOut.mainNetYuan)}`
    : formatSectorFlowMoney(leaderOut?.mainNetYuan);

  const marketPayload = state.aShareMarket || fallbackAShareMarket;
  const quoteDate = String(marketPayload.quoteTime || marketPayload.updatedAt || "").slice(0, 10);
  const isLatestSnapshot = Boolean(
    snapshot && date && date === quoteDate && selectedIndex === Math.max(0, snapshots.length - 1)
  );
  const breadth = isLatestSnapshot ? marketPayload.breadth : null;
  const advance = Number(breadth?.advanceCount);
  const decline = Number(breadth?.declineCount);
  const unchanged = Number(breadth?.unchangedCount);
  const breadthNode = $("#sector-flow-breadth-summary");
  const breadthDetail = $("#sector-flow-breadth-detail");
  if (breadthNode && Number.isFinite(advance) && Number.isFinite(decline)) {
    const rising = advance >= decline;
    breadthNode.textContent = `${formatAShareCount(rising ? advance : decline)}股${rising ? "上涨" : "下跌"}`;
    breadthNode.className = rising ? "is-positive" : "is-negative";
    breadthDetail.textContent = `上涨 ${formatAShareCount(advance)} · 下跌 ${formatAShareCount(decline)} · 平 ${formatAShareCount(unchanged)}`;
  } else if (breadthNode && breadthDetail) {
    breadthNode.textContent = "历史宽度未留档";
    breadthNode.className = "is-muted";
    breadthDetail.textContent = "资金快照仍可回放";
  }
}

function sectorFlowBoardMap(snapshot, snapshots = [], selectedIndex = 0) {
  const map = $("#sector-flow-map");
  const mobile = $("#sector-flow-mobile-lists");
  const contextNode = $("#sector-flow-context-signals");
  const displayGroup = snapshot ? sectorFlowDisplayGroup(snapshot, snapshots, selectedIndex) : null;
  const sortNode = $("#sector-flow-sort-caption");
  if (map) map.innerHTML = snapshot
    ? sectorFlowSvg(snapshot, snapshots, selectedIndex)
    : '<div class="sector-flow-empty">等待第一张真实资金快照。</div>';
  if (mobile) mobile.innerHTML = "";
  if (sortNode) {
    const windowMinutes = Number(state.sectorFlowWindowMinutes) || 1;
    const strategyLabel = state.sectorFlowStrategy === "diffusion"
      ? "扩散"
      : state.sectorFlowStrategy === "reversal"
        ? "反转"
        : state.sectorFlowStrategy === "capital"
          ? "增量"
          : state.sectorFlowStrategy === "rotation" ? "轮动" : "流速";
    sortNode.textContent = state.sectorFlowSort === "trend"
      ? `${strategyLabel}策略 · ${displayGroup?.trendReady ? `${windowMinutes}分增量` : `待${windowMinutes}分`}`
      : "当前强度";
    sortNode.title = `流速看${windowMinutes}分钟净额增量与每分钟速度；扩散看线路组件同向程度；反转看方向切换；增量看大盘放量与线路承接；轮动看存量释放、承接和连续性。当前强度只反映单个快照。`;
  }
  if (contextNode) {
    const contextSignals = state.sectorFlowScope === "focus"
      ? (sectorFlowGroup(snapshot)?.contextSignals || [])
      : [];
    const visible = contextSignals.slice(0, 4);
    const flow = displayGroup?.flowModel?.flow;
    const targetHighlights = (displayGroup?.flowModel?.targets || [])
      .slice(0, 2)
      .map((item) => `${item.name} ${item.flowState || item.trendLabel || "观察"}`)
      .join(" · ");
    const marketSummary = flow?.ready
      ? `市场：${flow.liquidityState} · ${flow.capitalMode || flow.netState}${targetHighlights ? ` · 承接 ${targetHighlights}` : ""}`
      : `市场：等待${Number(state.sectorFlowWindowMinutes) || 1}分钟真实流速窗口`;
    const backgroundSummary = visible.length
      ? `背景 ${visible.map((item) => `${item.name} ${formatPercentValue(item.changePct)}`).join(" · ")}`
      : "背景暂无显著信号";
    const summary = `${marketSummary} · ${backgroundSummary}`;
    contextNode.textContent = summary;
    contextNode.title = contextSignals.length
      ? `${contextSignals.map((item) => `${item.name} ${formatPercentValue(item.changePct)} ${formatSectorFlowMoney(item.mainNetYuan)}`).join("；")}。背景信号不占核心线路名额，金额不可相加。`
      : summary;
  }
}

function renderSectorFlowTimeline(snapshots, selectedIndex) {
  const range = $("#sector-flow-timeline");
  const selectedOffset = Math.max(0, Math.min(330, (sectorFlowSlotMinutes(snapshots[selectedIndex]?.slot) ?? 570) - 570));
  if (range) {
    range.min = "0";
    range.max = "330";
    range.value = String(selectedOffset);
    range.disabled = snapshots.length <= 1;
    const progress = selectedOffset / 330 * 100;
    range.style.setProperty("--sector-flow-progress", `${Math.max(0, Math.min(100, progress))}%`);
  }
  const labels = $("#sector-flow-timeline-labels");
  if (labels) {
    if (!snapshots.length) {
      labels.innerHTML = "<span>--</span>";
    } else {
      const labelsByTime = ["09:30", "10:30", "11:30", "13:00", "14:00", "15:00"];
      labels.innerHTML = labelsByTime.map((label) => {
        const offset = Math.max(0, Math.min(330, (sectorFlowSlotMinutes(label) || 570) - 570));
        return `<span style="left:${(offset / 330 * 100).toFixed(2)}%">${label}</span>`;
      }).join("");
    }
  }
}

function sectorFlowRowsByCode(snapshot) {
  const group = sectorFlowGroup(snapshot);
  const rows = [...(group.inflow || []), ...(group.outflow || [])];
  return new Map(rows.map((item) => [item.code, item]));
}

function sectorFlowDeltaRows(snapshot, comparison) {
  if (!snapshot || !comparison) return [];
  const currentRows = sectorFlowRowsByCode(snapshot);
  const previousRows = sectorFlowRowsByCode(comparison);
  const codes = new Set([...currentRows.keys(), ...previousRows.keys()]);
  const changes = [...codes].map((code) => {
    const current = currentRows.get(code);
    const previous = previousRows.get(code);
    const currentValue = Number(current?.mainNetYuan) || 0;
    const previousValue = Number(previous?.mainNetYuan) || 0;
    return {
      code,
      boardCode: current?.code || previous?.code || code,
      lineId: current?.lineId || previous?.lineId || current?.family || previous?.family || code,
      name: current?.name || previous?.name || code,
      sourceName: current?.sourceName || current?.routeQuoteName || previous?.sourceName || previous?.routeQuoteName || current?.name || previous?.name || code,
      value: currentValue,
      delta: currentValue - previousValue,
    };
  });
  const accelerators = changes.filter((item) => item.delta > 0).sort((a, b) => b.delta - a.delta).slice(0, 3);
  const sellers = changes.filter((item) => item.delta < 0).sort((a, b) => a.delta - b.delta).slice(0, 3);
  return [
    ...accelerators.map((item) => ({ ...item, label: "流入加速", tone: "is-positive" })),
    ...sellers.map((item) => ({ ...item, label: "流出加速", tone: "is-negative" })),
  ];
}

function sectorFlowBoardIdentity(item) {
  return String(item?.lineId || item?.boardCode || item?.code || item?.name || "");
}

function renderSectorFlowDelta(snapshot, comparison) {
  const list = $("#sector-flow-delta-list");
  const windowNode = $("#sector-flow-delta-window");
  if (!list || !windowNode) return;
  if (!snapshot || !comparison) {
    state.sectorFlowSelectedBoardCode = "";
    state.sectorFlowSelectedLineId = "";
    state.sectorFlowSelectedBoardName = "";
    state.sectorFlowSelectedSourceName = "";
    windowNode.textContent = "满30分钟后生成";
    list.innerHTML = `
      <div class="sector-flow-delta-empty">
        <strong>真实增量尚未形成</strong>
        <span>首张快照已经落盘，系统需要至少30个交易分钟的可比区间。</span>
      </div>`;
    return;
  }

  const windowMinutes = Math.max(
    1,
    Number(sectorFlowTradingMinuteOffset(snapshot?.slot)) - Number(sectorFlowTradingMinuteOffset(comparison?.slot)),
  );
  windowNode.textContent = `${comparison.slot || "--"} → ${snapshot.slot || "--"} · ${windowMinutes}交易分钟`;
  const rows = sectorFlowDeltaRows(snapshot, comparison);
  const selected = rows.find((item) => (
    item.boardCode === state.sectorFlowSelectedBoardCode
    || item.lineId === state.sectorFlowSelectedLineId
  )) || rows.find((item) => item.delta > 0) || rows[0];
  if (selected) {
    state.sectorFlowSelectedBoardCode = String(selected.boardCode || "");
    state.sectorFlowSelectedLineId = String(selected.lineId || "");
    state.sectorFlowSelectedBoardName = String(selected.name || "");
    state.sectorFlowSelectedSourceName = String(selected.sourceName || selected.name || "");
  }
  const selectedCode = state.sectorFlowSelectedBoardCode;
  const selectedLineId = state.sectorFlowSelectedLineId;
  list.innerHTML = rows.map((item) => `
    <article
      class="${item.tone} ${item.boardCode === selectedCode || item.lineId === selectedLineId ? "is-selected" : ""}"
      data-sector-flow-board-code="${escapeHtml(item.boardCode || item.code)}"
      data-sector-flow-line-id="${escapeHtml(item.lineId || item.code)}"
      data-sector-flow-board-name="${escapeHtml(item.name)}"
      data-sector-flow-source-name="${escapeHtml(item.sourceName || item.name)}"
      role="button"
      tabindex="0"
      aria-pressed="${item.boardCode === selectedCode || item.lineId === selectedLineId ? "true" : "false"}"
      title="查看${escapeHtml(item.name)}的成分股净流入排行"
    >
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.name)}</strong>
      <b>${escapeHtml(formatSectorFlowMoney(item.delta))}</b>
      <small>当前净额 ${escapeHtml(formatSectorFlowMoney(item.value))}</small>
    </article>
  `).join("") || '<div class="sector-flow-delta-empty"><strong>变化不明显</strong><span>板块排名暂未形成显著迁徙。</span></div>';
}

function sectorFlowConstituentIsLatest(day, snapshots, selectedIndex, snapshot) {
  return Boolean(
    snapshot
    && day?.date
    && String(day.date) === String(state.sectorFundFlow?.latestTradingDate || "")
    && selectedIndex === snapshots.length - 1,
  );
}

function renderSectorFlowConstituentData(data) {
  const list = $("#sector-flow-constituent-list");
  const countNode = $("#sector-flow-constituent-count");
  const statusNode = $("#sector-flow-constituent-status");
  const updatedNode = $("#sector-flow-constituent-updated");
  if (!list || !countNode || !statusNode || !updatedNode) return;
  const rows = Array.isArray(data?.rows) ? data.rows : [];
  countNode.textContent = rows.length ? `${rows.length}/10` : "0/10";
  statusNode.textContent = rows.length
    ? `${data.positiveCount || rows.length}只净流入`
    : "当前无净流入成分股";
  updatedNode.textContent = data?.quoteAt ? `行情时点 ${String(data.quoteAt).slice(11, 16)}` : "行情时点 --";
  if (!rows.length) {
    list.innerHTML = `
      <div class="sector-flow-constituent-empty is-muted">
        <strong>当前没有净流入成分股</strong>
        <span>该板块此刻所有成分股主力净额均未形成正值。</span>
      </div>`;
    return;
  }
  list.innerHTML = rows.map((item, index) => `
    <article class="sector-flow-constituent-card">
      <span class="sector-flow-constituent-rank">${String(index + 1).padStart(2, "0")}</span>
      <div>
        <strong>${escapeHtml(item.name || "--")}</strong>
        <small>${escapeHtml(item.code || "--")} · ${escapeHtml(formatPercentValue(item.changePct))}</small>
      </div>
      <b>${escapeHtml(formatSectorFlowMoney(item.mainNetYuan))}</b>
    </article>
  `).join("");
}

function loadSectorFlowConstituents(cacheKey, boardCode, boardName) {
  const cache = state.sectorFlowConstituentCache || (state.sectorFlowConstituentCache = {});
  const current = cache[cacheKey];
  if (current?.status === "loading") return;
  cache[cacheKey] = { status: "loading", loadedAt: Date.now() };
  const query = `board=${encodeURIComponent(boardCode)}&name=${encodeURIComponent(boardName || "")}`;
  fetchJson(`/api/sector-fund-flow/constituents?${query}`)
    .then((data) => {
      cache[cacheKey] = { status: "ready", data, loadedAt: Date.now() };
      if (state.workspaceView === "sector-flow") renderSectorFundFlow();
    })
    .catch((error) => {
      cache[cacheKey] = { status: "error", error: error.message || "成分股资金读取失败", loadedAt: Date.now() };
      if (state.workspaceView === "sector-flow") renderSectorFundFlow();
    });
}

function renderSectorFlowConstituentPanel(snapshot, day, snapshots, selectedIndex) {
  const titleNode = $("#sector-flow-constituent-title");
  const subtitleNode = $("#sector-flow-constituent-subtitle");
  const countNode = $("#sector-flow-constituent-count");
  const statusNode = $("#sector-flow-constituent-status");
  const sourceNode = $("#sector-flow-constituent-source");
  const updatedNode = $("#sector-flow-constituent-updated");
  const list = $("#sector-flow-constituent-list");
  if (!titleNode || !subtitleNode || !countNode || !statusNode || !sourceNode || !updatedNode || !list) return;

  const boardName = state.sectorFlowSelectedBoardName || "等待板块选择";
  const sourceName = state.sectorFlowSelectedSourceName || boardName;
  titleNode.textContent = `${boardName} · 成分股净流入前十`;
  subtitleNode.textContent = sourceName !== boardName
    ? `代表板块：${sourceName} · 按主力净额降序`
    : "按板块当前成分股主力净额降序";
  sourceNode.textContent = "数据源：东方财富公开行情 · 当前快照 · 剔除ST";

  const boardCode = String(state.sectorFlowSelectedBoardCode || "");
  if (!boardCode) {
    countNode.textContent = "--";
    statusNode.textContent = "等待选择板块";
    updatedNode.textContent = "--";
    list.innerHTML = '<div class="sector-flow-constituent-empty"><strong>等待选择板块</strong><span>点击上方轮动卡片查看成分股资金流入前十。</span></div>';
    return;
  }

  if (!sectorFlowConstituentIsLatest(day, snapshots, selectedIndex, snapshot)) {
    countNode.textContent = "历史";
    statusNode.textContent = "暂无同步快照";
    updatedNode.textContent = "仅采集最新快照";
    list.innerHTML = '<div class="sector-flow-constituent-empty is-muted"><strong>历史回放暂无成分股同步快照</strong><span>当前接口只读取最新行情，避免把现在的成分股资金冒充历史时点。</span></div>';
    return;
  }

  const cacheKey = `${day.date}|${snapshot.slot}|${boardCode}`;
  const cache = state.sectorFlowConstituentCache || (state.sectorFlowConstituentCache = {});
  let entry = cache[cacheKey];
  if (!entry || (entry.status === "ready" && Date.now() - Number(entry.loadedAt || 0) > 25000) || (entry.status === "error" && Date.now() - Number(entry.loadedAt || 0) > 25000)) {
    loadSectorFlowConstituents(cacheKey, boardCode, sourceName);
    entry = cache[cacheKey];
  }
  if (entry?.status === "ready") {
    renderSectorFlowConstituentData(entry.data);
    return;
  }
  countNode.textContent = "--";
  statusNode.textContent = entry?.status === "error" ? "读取失败" : "读取中";
  updatedNode.textContent = "等待行情返回";
  list.innerHTML = entry?.status === "error"
    ? `<div class="sector-flow-constituent-empty is-error"><strong>成分股数据读取失败</strong><span>${escapeHtml(entry.error || "接口暂不可用")}，稍后会自动重试。</span></div>`
    : '<div class="sector-flow-constituent-empty is-loading"><strong>正在读取成分股排行</strong><span>按当前板块快照请求，原有轮动采集不受影响。</span></div>';
}

function renderSectorFundFlowDateOptions(days) {
  const select = $("#sector-flow-date");
  if (!select) return;
  select.innerHTML = days.map((item) => `<option value="${escapeHtml(item.date || "")}">${escapeHtml(item.date || "--")}</option>`).join("")
    || '<option value="">暂无快照</option>';
  select.value = state.selectedSectorFlowDate || days[0]?.date || "";
}

function renderSectorFundFlow() {
  const workspace = $("#sector-flow-workspace");
  if (!workspace) return;
  const payload = state.sectorFundFlow || fallbackSectorFundFlow;
  const days = sectorFlowDays();
  renderSectorFundFlowDateOptions(sectorFlowAvailableDays());
  const day = selectedSectorFlowDay();
  const snapshots = sectorFlowSnapshots(day);
  if (state.sectorFlowSnapshotIndex < 0 || state.sectorFlowSnapshotIndex >= snapshots.length) {
    state.sectorFlowSnapshotIndex = Math.max(0, snapshots.length - 1);
  }
  const selectedIndex = Math.min(
    Math.max(0, Number(state.sectorFlowSnapshotIndex) || 0),
    Math.max(0, snapshots.length - 1),
  );
  const snapshot = snapshots[selectedIndex] || null;
  const comparison = sectorFlowComparisonSnapshot(snapshots, selectedIndex, state.sectorFlowWindowMinutes);
  const rotationComparison = sectorFlowTradingComparisonSnapshot(snapshots, selectedIndex);
  const displayGroup = snapshot ? sectorFlowDisplayGroup(snapshot, snapshots, selectedIndex) : null;

  $("#sector-flow-provider").textContent = payload.provider || "东方财富公开行情";
  $("#sector-flow-updated").textContent = snapshot ? `${day?.date || ""} ${snapshot.slot || formatIndexFuturesTime(snapshot.quoteAt)}` : "--";
  $("#sector-flow-next").textContent = payload.state === "stale"
    ? "当前显示缓存快照，采集接口暂不可用"
    : `每${Number(payload.intervalSeconds || 30)}秒读取 · 每${Math.max(1, Math.round(Number(payload.timelineResolutionSeconds || 60) / 60))}分钟留档`;
  $("#sector-flow-selected-time").textContent = snapshot?.slot || "--:--";
  $("#sector-flow-snapshot-meta").textContent = snapshot
    ? `${selectedIndex + 1}/${snapshots.length} · ${state.sectorFlowScope === "hot" ? "今日异动" : state.sectorFlowScope === "focus" ? "核心线路" : state.sectorFlowScope === "industry" ? "行业板块" : state.sectorFlowScope === "concept" ? "概念板块" : "全部板块"} · 真实采样`
    : "等待真实快照";
  $("#sector-flow-board-title").textContent = state.sectorFlowSort === "trend"
    ? "趋势主线与行业流出"
    : "强势主线与行业流出";
  const marketQuality = snapshot?.market?.quality || {};
  $("#sector-flow-data-state").textContent = payload.state === "ready"
    ? marketQuality.mainComponentsMatch === true
      ? "分项校验通过"
      : "数据就绪"
    : payload.state === "stale"
      ? "缓存可用"
      : "等待采集";
  $("#sector-flow-data-state").className = payload.state === "ready" ? "is-ready" : payload.state === "stale" ? "is-stale" : "";
  $("#sector-flow-methodology").textContent = [
    payload.methodology?.boardFlow,
    state.sectorFlowScope === "hot" ? payload.methodology?.hotBoard : "",
    state.sectorFlowScope === "focus" ? payload.methodology?.focusBoard : "",
    state.sectorFlowScope === "focus" ? payload.methodology?.trendBoard : "",
    payload.methodology?.migration,
    state.sectorFlowScope === "focus" ? payload.methodology?.flowLink : "",
    payload.methodology?.history,
    marketPulseHasNumber(marketQuality.orderBalanceResidualPctOfTurnover)
      ? `订单分项平衡残差占成交额 ${formatFuturesNumber(Math.abs(Number(marketQuality.orderBalanceResidualPctOfTurnover)), 4)}%。`
      : "",
  ].filter(Boolean).join(" ");

  document.querySelectorAll("#sector-flow-scope-tabs [data-sector-flow-scope]").forEach((button) => {
    button.classList.toggle("active", button.dataset.sectorFlowScope === state.sectorFlowScope);
  });
  document.querySelectorAll("#sector-flow-sort-tabs [data-sector-flow-sort]").forEach((button) => {
    button.classList.toggle("active", button.dataset.sectorFlowSort === state.sectorFlowSort);
  });
  document.querySelectorAll("#sector-flow-strategy-tabs [data-sector-flow-strategy]").forEach((button) => {
    button.classList.toggle("active", button.dataset.sectorFlowStrategy === state.sectorFlowStrategy);
  });
  document.querySelectorAll("#sector-flow-window-tabs [data-sector-flow-window]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.sectorFlowWindow) === Number(state.sectorFlowWindowMinutes));
  });
  const playButton = $("#sector-flow-play");
  if (playButton) {
    playButton.textContent = state.sectorFlowPlaying ? "Ⅱ" : "▶";
    playButton.disabled = snapshots.length <= 1;
    playButton.title = state.sectorFlowPlaying ? "暂停盘中回放" : "播放盘中快照";
    playButton.setAttribute("aria-label", playButton.title);
  }

  renderSectorFlowHero(day, snapshot, comparison, snapshots, selectedIndex);
  renderSectorFlowOrderStrip(snapshot, comparison);
  renderSectorFlowTimeline(snapshots, selectedIndex);
  sectorFlowBoardMap(snapshot, snapshots, selectedIndex);
  renderSectorFlowDelta(snapshot, rotationComparison);
  renderSectorFlowConstituentPanel(snapshot, day, snapshots, selectedIndex);
}

function stopSectorFlowPlayback() {
  if (sectorFlowPlaybackTimer) window.clearInterval(sectorFlowPlaybackTimer);
  sectorFlowPlaybackTimer = 0;
  state.sectorFlowPlaying = false;
}

function toggleSectorFlowPlayback() {
  const snapshots = sectorFlowSnapshots();
  if (snapshots.length <= 1) return;
  if (state.sectorFlowPlaying) {
    stopSectorFlowPlayback();
    renderSectorFundFlow();
    return;
  }
  if (state.sectorFlowSnapshotIndex >= snapshots.length - 1) state.sectorFlowSnapshotIndex = 0;
  state.sectorFlowPlaying = true;
  renderSectorFundFlow();
  sectorFlowPlaybackTimer = window.setInterval(() => {
    const currentSnapshots = sectorFlowSnapshots();
    if (state.sectorFlowSnapshotIndex >= currentSnapshots.length - 1) {
      stopSectorFlowPlayback();
      renderSectorFundFlow();
      return;
    }
    state.sectorFlowSnapshotIndex += 1;
    renderSectorFundFlow();
  }, 900);
}

function stockFlowRows() {
  return Array.isArray(state.stockFundFlow?.rows) ? state.stockFundFlow.rows : [];
}

function stockFlowIsSwing() {
  return state.stockFlowPeriod !== "intraday";
}

function stockFlowIsToday() {
  return !stockFlowIsSwing() && String(state.stockFlowWindowMinutes) === "day";
}

function stockFlowWindowLabel(value = state.stockFlowWindowMinutes) {
  return String(value) === "day" ? "当日" : `${Number(value) || 1}分钟`;
}

function stockFlowMetric(row) {
  if (stockFlowIsSwing()) return row?.periods?.[state.stockFlowPeriod] || {};
  return row?.intraday?.[String(state.stockFlowWindowMinutes)] || {};
}

function stockFlowMetricValue(row, key) {
  const metric = stockFlowMetric(row);
  const value = metric?.[key];
  return marketPulseHasNumber(value) ? Number(value) : null;
}

function stockFlowTone(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || Math.abs(number) < 0.0001) return "";
  return number > 0 ? "is-positive" : "is-negative";
}

function stockFlowSwingSignal(metric) {
  if (!metric?.complete) return "历史待补";
  const amount = Number(metric.periodMainNetYuan) || 0;
  const change = Number(metric.periodChangePct) || 0;
  if (amount > 0 && change >= 0) return "持续流入";
  if (amount > 0 && change < 0) return "资金承接";
  if (amount < 0 && change > 0) return "流出上涨";
  if (amount < 0 && change <= 0) return "资金流出";
  return "方向不明";
}

function stockFlowSignalTone(signal) {
  if (["主动进攻", "承接未涨", "持续流入", "资金承接", "流入观察", "趋势跟随", "资金先行", "回撤承接", "强势回撤"].includes(signal)) return "is-positive";
  if (["主动抛压", "兑现背离", "资金流出", "流出上涨", "流出观察", "价量背离", "流向偏弱"].includes(signal)) return "is-negative";
  return "";
}

const stockFlowShortlistReasonLabels = {
  "daily_inflow_leader": "当日主力流入",
  "daily_intensity": "当日资金强度",
  "opening_strength": "开盘强势",
  "intraday_persistence": "分时持续流入",
  "all_day_leader_override": "全天强势保留",
  "30m_inflow": "30分钟净流入",
  "15m_inflow": "15分钟净流入",
  "5m_inflow": "5分钟净流入",
  "5m_acceleration": "5分钟加速",
  "1m_trigger": "1分钟触发",
  "multi_window_alignment": "多窗口同向",
  "price_flow_aligned": "价量同向",
  "flow_leads_price": "资金先行",
  "price_absorption": "资金承接",
  "large_order_support": "大单支持",
  "large_order_dominant": "大单主导",
  "3d_asof_inflow": "近3日含当日流入",
  "7d_asof_inflow": "近7日含当日流入",
  "3d_inflow": "近3日流入",
  "7d_inflow": "近7日流入",
};

const stockFlowShortlistRiskLabels = {
  "daily_outflow": "当日主力流出",
  "new_listing_excluded": "新股异常波动已剔除",
  "opening_pending": "开盘快照待形成",
  "30m_not_ready": "30分钟窗口未形成",
  "5m_not_ready": "5分钟窗口未形成",
  "3d_pending": "近3日历史待补",
  "7d_pending": "近7日历史待补",
  "14d_pending": "近14日历史待补",
  "21d_pending": "近21日历史待补",
  "sector_unmapped": "产业标签待补",
  "5m_slowdown": "短线流速放缓",
  "large_order_outflow": "大单转为流出",
  "late_flow_reversal": "尾盘资金回撤",
  "flow_persistence_weak": "全天流入持续性偏弱",
  "price_extended": "价格短线偏高",
  "sector_concentration": "题材集中度偏高",
};

function stockFlowShortlistSignal(signal) {
  return {
    trend_follow: "趋势跟随",
    flow_leads: "资金先行",
    absorption: "回撤承接",
    strong_pullback: "强势回撤",
    divergence: "价量背离",
    weak: "流向偏弱",
    insufficient: "数据不足",
  }[signal] || "观察";
}

function stockFlowShortlistQuality(quality) {
  return {
    full: "全天+盘中完整",
    intraday: "盘中窗口完整",
    partial: "开盘/短线部分",
    insufficient: "等待有效快照",
  }[quality] || "待补数据";
}

function renderStockFlowShortlist() {
  const list = $("#stock-flow-shortlist-list");
  if (!list) return;
  const payload = state.stockFundFlow || {};
  const scopedRows = stockFlowRows();
  const candidateRows = state.stockFlowScope === "shortlist"
    ? scopedRows
    : (Array.isArray(payload.shortlist) ? payload.shortlist : []);
  const candidates = [...candidateRows].sort((left, right) => (
    Number(left.shortlist?.rank || 999) - Number(right.shortlist?.rank || 999)
  ));
  const coverage = payload.coverage || {};
  const coreCount = candidates.filter((row) => row.shortlist?.tier === "core").length;
  const watchCount = candidates.filter((row) => row.shortlist?.tier === "watch").length;
  $("#stock-flow-shortlist-count").textContent = `${formatAShareCount(candidates.length)}只`;
  $("#stock-flow-shortlist-meta").textContent = `核心${formatAShareCount(coreCount)}只 · 观察${formatAShareCount(watchCount)}只 · 候选池${formatAShareCount(coverage.shortlistUniverseCount || 0)}只`;
  $("#stock-flow-shortlist-note").textContent = candidates.length
    ? "全天综合强度前10：当日累计流入为主轴，结合开盘强度、分时持续性、价量确认和3/7/14/21日趋势；盘中异动另看短窗口。"
    : "等待首个有效快照和当日累计资金形成；数据不足时保持空白，不强行填满。";
  if (!candidates.length) {
    list.innerHTML = `
      <div class="stock-flow-shortlist-empty">
        <strong>${payload.state === "waiting" ? "等待首个有效快照" : "当前没有达到入选门槛的标的"}</strong>
        <span>候选需要当日累计主力净流入，并通过开盘、分时持续性、价量和风险检查。</span>
      </div>`;
    return;
  }
  list.innerHTML = candidates.map((row) => {
    const annotation = row.shortlist || {};
    const metrics = annotation.metrics || {};
    const reasons = (annotation.reasons || [])
      .map((code) => stockFlowShortlistReasonLabels[code] || code)
      .slice(0, 2);
    const risks = (annotation.riskCodes || [])
      .map((code) => stockFlowShortlistRiskLabels[code] || code)
      .slice(0, 1);
    const tier = annotation.tier === "core" ? "核心候选" : "观察候选";
    const priceTone = stockFlowTone(row.changePct);
    return `
      <button class="stock-flow-shortlist-card ${annotation.tier === "core" ? "is-core" : "is-watch"}"
        type="button" data-stock-flow-shortlist-code="${escapeHtml(row.code || "")}">
        <span class="stock-flow-shortlist-card-top">
          <b>#${escapeHtml(String(annotation.rank || "--"))} · ${tier}</b>
          <strong>评分 ${escapeHtml(String(annotation.score ?? "--"))}</strong>
        </span>
        <span class="stock-flow-shortlist-name">${escapeHtml(row.name || "--")}</span>
        <span class="stock-flow-shortlist-code">${escapeHtml(row.code || "--")} · ${escapeHtml(row.sector || "产业标签待补")}</span>
        <span class="stock-flow-shortlist-metrics">
          <span><small>当日主力</small><b class="${stockFlowTone(metrics.dailyMainNetYuan)}">${formatSectorFlowMoney(metrics.dailyMainNetYuan)}</b></span>
          <span><small>30分钟</small><b class="${stockFlowTone(metrics.inflow30mYuan)}">${formatSectorFlowMoney(metrics.inflow30mYuan)}</b></span>
          <span><small>15分钟</small><b class="${stockFlowTone(metrics.inflow15mYuan)}">${formatSectorFlowMoney(metrics.inflow15mYuan)}</b></span>
          <span><small>开盘/现价</small><b class="${priceTone}">${formatPercentValue(metrics.openingChangePct)} / ${formatPercentValue(row.changePct)}</b></span>
        </span>
        <span class="stock-flow-shortlist-card-foot">
          <em class="${stockFlowSignalTone(stockFlowShortlistSignal(annotation.signal))}">${stockFlowShortlistSignal(annotation.signal)}</em>
          <small title="${escapeHtml((annotation.riskCodes || []).join(" / "))}">${escapeHtml(reasons.join(" · ") || risks[0] || stockFlowShortlistQuality(annotation.dataQuality))}</small>
        </span>
      </button>`;
  }).join("");
}

function renderStockFlowThemeStrength() {
  const list = $("#stock-flow-theme-list");
  if (!list) return;
  const payload = state.stockFundFlow || {};
  const boards = Array.isArray(payload.themeStrength?.boards) ? payload.themeStrength.boards : [];
  const visible = boards.slice(0, 10);
  const themeWindow = String(payload.themeStrength?.windowMinutes || state.stockFlowWindowMinutes || 30);
  const themeWindowLabel = stockFlowWindowLabel(themeWindow);
  const themeWindowShortLabel = themeWindow === "day" ? "当日" : `${Number(themeWindow) || 30}分`;
  const nav = $("#stock-flow-theme-nav");
  if (nav) {
    nav.innerHTML = `<button type="button" class="${!state.stockFlowQuery ? "active" : ""}" data-stock-flow-theme-nav=""><span>全部题材</span><b>--</b></button>`
      + boards.map((board) => `
      <button type="button" class="${state.stockFlowQuery === board.name ? "active" : ""}"
        data-stock-flow-theme-nav="${escapeHtml(board.name || "")}">
        <span>${escapeHtml(board.name || "--")}</span>
        <b class="${stockFlowTone(board.windowNetYuan)}" title="${themeWindowLabel}资金净额">${themeWindowShortLabel} ${formatSectorFlowMoney(board.windowNetYuan)}</b>
      </button>`).join("");
  }
  const selectedBoard = boards.find((board) => board.name === state.stockFlowQuery);
  const branchNav = $("#stock-flow-branch-nav");
  if (branchNav) {
    const branches = Array.isArray(selectedBoard?.branches) ? selectedBoard.branches : [];
    branchNav.innerHTML = selectedBoard
      ? `<span>产业链分支</span><button type="button" class="${!state.stockFlowBranchQuery ? "active" : ""}" data-stock-flow-branch="">全部</button>${branches.map((branch) => `
          <button type="button" class="${state.stockFlowBranchQuery === branch.name ? "active" : ""}" data-stock-flow-branch="${escapeHtml(branch.name || "")}">
            ${escapeHtml(branch.name || "--")} <b class="${stockFlowTone(branch.windowNetYuan)}">${themeWindowShortLabel} ${formatSectorFlowMoney(branch.windowNetYuan)}</b>
          </button>`).join("")}`
      : '<span>产业链分支</span><small>点击上方板块后，可按服务器、光模块、PCB、液冷等环节筛选成分股</small>';
  }
  const meta = $("#stock-flow-theme-meta");
  if (meta) {
    meta.textContent = visible.length
      ? `按${themeWindowLabel}资金强度排序 · 主屏前${formatAShareCount(visible.length)} · 题材池共${formatAShareCount(payload.themeStrength?.totalThemes || visible.length)}个`
      : "等待题材池和资金快照形成";
  }
  if (!visible.length) {
    list.innerHTML = `
      <div class="stock-flow-theme-empty">
        <strong>等待科技题材强度聚合</strong>
        <span>需要先完成一张个股资金快照，并匹配 CPO、PCB、存储、半导体设备、AI应用等题材池。</span>
      </div>`;
    return;
  }
  list.innerHTML = visible.map((board) => {
    const stocks = Array.isArray(board.stocks) ? board.stocks : (Array.isArray(board.topStocks) ? board.topStocks : []);
    const branches = Array.isArray(board.branches) ? board.branches : [];
    const tone = stockFlowTone(board.windowNetYuan);
    return `
      <button class="stock-flow-theme-card ${state.stockFlowQuery === board.name ? "is-active" : ""}" type="button" data-stock-flow-theme="${escapeHtml(board.name || "")}" aria-label="查看${escapeHtml(board.name || "")}成分股资金排行榜">
        <span class="stock-flow-theme-card-top">
          <b>${escapeHtml(board.name || "--")}</b>
          <strong class="${tone}" title="${themeWindowLabel}资金净额">${themeWindowShortLabel} ${formatSectorFlowMoney(board.windowNetYuan)}</strong>
        </span>
        <span class="stock-flow-theme-stats">
          <span><small>当日主力净额</small><em class="${stockFlowTone(board.mainNetYuan)}">${formatSectorFlowMoney(board.mainNetYuan)}</em></span>
          <span><small>实时均涨幅</small><em class="${stockFlowTone(board.averageChangePct)}">${formatPercentValue(board.averageChangePct)}</em></span>
          <span><small>${themeWindowShortLabel}覆盖 / 成员</small><em>${formatAShareCount(board.windowReadyCount)} / ${formatAShareCount(board.stockCount)}</em></span>
        </span>
        <span class="stock-flow-theme-card-note">产业链分支 ${formatAShareCount(branches.length)} 个 · 成分股 ${formatAShareCount(stocks.length)} 只 · 已采集 ${formatAShareCount(board.liveStockCount)} 只</span>
        <small class="stock-flow-theme-foot">成员${formatAShareCount(stocks.length)}只 · 已采集${formatAShareCount(board.liveStockCount)}只 · 点击筛选成分股</small>
      </button>`;
  }).join("");
}

function stockFlowPeriodLabel() {
  return stockFlowIsSwing()
    ? `近${state.stockFlowPeriod}个交易日`
    : stockFlowIsToday()
      ? "当日累计资金"
      : `最近${state.stockFlowWindowMinutes}个交易分钟`;
}

function renderStockFlowDateOptions() {
  const select = $("#stock-flow-date");
  if (!select) return;
  const days = Array.isArray(state.stockFundFlow?.availableDays) ? state.stockFundFlow.availableDays : [];
  select.innerHTML = days.map((item) => (
    `<option value="${escapeHtml(item.date || "")}">${escapeHtml(item.date || "--")} · ${formatAShareCount(item.snapshotCount)}张</option>`
  )).join("") || '<option value="">暂无快照</option>';
  select.value = state.selectedStockFlowDate || state.stockFundFlow?.tradingDate || days[0]?.date || "";
}

function renderStockFlowControls() {
  document.querySelectorAll("#stock-flow-scope-tabs [data-stock-flow-scope]").forEach((button) => {
    button.classList.toggle("active", button.dataset.stockFlowScope === state.stockFlowScope);
  });
  document.querySelectorAll("#stock-flow-period-tabs [data-stock-flow-period]").forEach((button) => {
    const value = String(button.dataset.stockFlowPeriod || "");
    const active = value.endsWith("d")
      ? stockFlowIsSwing() && value.slice(0, -1) === state.stockFlowPeriod
      : !stockFlowIsSwing() && (
          value === "day"
            ? stockFlowIsToday()
            : Number(value) === Number(state.stockFlowWindowMinutes)
        );
    button.classList.toggle("active", active);
  });
  const sortConfig = state.stockFlowScope === "shortlist"
    ? [
        ["score", "候选评分"],
        ["daily_inflow", "当日主力"],
        ["daily_intensity", "资金强度"],
        ["change", "当日涨幅"],
      ]
    : stockFlowIsSwing()
    ? [
        ["inflow", "净流入"],
        ["average", "日均"],
        ["consistency", "连续性"],
        ["change", "区间涨跌"],
      ]
    : [
        ["velocity", "流速"],
        ["inflow", "净流入"],
        ["acceleration", "加速度"],
        ["intensity", "强度"],
      ];
  document.querySelectorAll("#stock-flow-sort-tabs button").forEach((button, index) => {
    const [value, label] = sortConfig[index] || sortConfig[0];
    button.dataset.stockFlowSort = value;
    button.textContent = label;
    button.classList.toggle("active", value === state.stockFlowSort);
  });
  const search = $("#stock-flow-search");
  if (search && search.value !== state.stockFlowQuery) search.value = state.stockFlowQuery;
}

function renderStockFlowTimeline() {
  const range = $("#stock-flow-timeline");
  const slots = Array.isArray(state.stockFundFlow?.availableSlots) ? state.stockFundFlow.availableSlots : [];
  const selectedIndex = Math.max(0, slots.indexOf(state.stockFundFlow?.slot || state.selectedStockFlowSlot));
  if (range) {
    range.min = "0";
    range.max = String(Math.max(0, slots.length - 1));
    range.value = String(selectedIndex);
    range.disabled = slots.length <= 1;
    const progress = slots.length > 1 ? selectedIndex / (slots.length - 1) * 100 : 100;
    range.style.setProperty("--stock-flow-progress", `${progress.toFixed(2)}%`);
  }
  const time = $("#stock-flow-selected-time");
  if (time) time.textContent = state.stockFundFlow?.slot || "--:--";
  const caption = $("#stock-flow-period-caption");
  if (caption) caption.textContent = `${stockFlowPeriodLabel()} · ${state.stockFlowFollowLatest ? "跟随最新" : "历史回放"}`;
}

function stockFlowTableRow(row) {
  const metric = stockFlowMetric(row);
  const swing = stockFlowIsSwing();
  const ready = swing ? Boolean(metric.complete) : Boolean(metric.ready);
  const net = ready ? Number(swing ? metric.periodMainNetYuan : metric.deltaMainNetYuan) : null;
  const speed = ready ? Number(swing ? metric.averageDailyMainNetYuan : metric.velocityYuanPerMinute) : null;
  const trend = ready
    ? swing
      ? `${formatAShareCount(metric.positiveDays)}/${formatAShareCount(metric.availableDays)}日流入`
      : formatSectorFlowMoney(metric.accelerationYuanPerMinute)
    : "--";
  const strength = ready
    ? swing
      ? formatPercentValue(metric.averageMainNetPct)
      : formatPercentValue(metric.intensityPct)
    : "--";
  const secondaryAmount = ready
    ? Number(swing ? metric.latestDayMainNetYuan : metric.breakdown?.superLargeNetYuan)
    : null;
  const priceConfirmation = ready
    ? Number(swing ? metric.periodChangePct : metric.priceChangePct)
    : null;
  const signal = swing ? stockFlowSwingSignal(metric) : ready ? metric.signal || "方向不明" : "基线未形成";
  const selected = row.code === state.selectedStockFlowCode;
  const displayRank = state.stockFlowScope === "shortlist" ? row.shortlist?.rank ?? row.rank : row.rank;
  return `
    <tr class="${selected ? "is-selected" : ""}" data-stock-flow-code="${escapeHtml(row.code)}" tabindex="0">
      <td><b class="stock-flow-rank">${marketPulseHasNumber(displayRank) ? formatAShareCount(displayRank) : "--"}</b></td>
      <td>
        <div class="stock-flow-stock-cell">
          <strong>${escapeHtml(row.name)}</strong>
          <span>${escapeHtml(row.code)}${row.isWatchlist ? " · 自选" : " · 异动"}</span>
          <small>${escapeHtml(row.sector || (row.selectionReasons || []).join(" / ") || "动态候选")}</small>
        </div>
      </td>
      <td>
        <div class="stock-flow-price-cell">
          <strong>${formatFuturesNumber(row.last, Number(row.last) >= 100 ? 2 : 3)}</strong>
          <span class="${stockFlowTone(row.changePct)}">${formatPercentValue(row.changePct)}</span>
        </div>
      </td>
      <td class="${stockFlowTone(net)}"><strong>${ready ? formatSectorFlowMoney(net) : "待基线"}</strong></td>
      <td class="${stockFlowTone(speed)}"><strong>${ready ? formatSectorFlowMoney(speed) : "--"}</strong></td>
      <td class="${swing ? "" : stockFlowTone(metric.accelerationYuanPerMinute)}"><span>${escapeHtml(trend)}</span></td>
      <td class="${stockFlowTone(swing ? metric.averageMainNetPct : metric.intensityPct)}"><span>${escapeHtml(strength)}</span></td>
      <td class="${stockFlowTone(secondaryAmount)}"><span>${ready ? formatSectorFlowMoney(secondaryAmount) : "--"}</span></td>
      <td class="${stockFlowTone(priceConfirmation)}"><span>${ready ? formatPercentValue(priceConfirmation) : "--"}</span></td>
      <td><b class="stock-flow-signal ${stockFlowSignalTone(signal)}">${escapeHtml(signal)}</b></td>
    </tr>`;
}

function renderStockFlowTable() {
  const body = $("#stock-flow-table-body");
  if (!body) return;
  const rows = stockFlowRows();
  body.innerHTML = rows.map(stockFlowTableRow).join("") || `
    <tr class="stock-flow-empty-row"><td colspan="10">
      <strong>${state.stockFundFlow?.state === "waiting" ? "等待第一张个股快照" : "当前筛选没有匹配股票"}</strong>
      <span>可切换核心自选、全市场异动或调整搜索条件。</span>
    </td></tr>`;

  const swing = stockFlowIsSwing();
  const shortlistMode = state.stockFlowScope === "shortlist";
  const themeSuffix = state.stockFlowScope === "all" && state.stockFlowQuery ? ` · ${state.stockFlowQuery}${state.stockFlowBranchQuery ? ` / ${state.stockFlowBranchQuery}` : ""}成分股` : "";
  $("#stock-flow-rank-title").textContent = shortlistMode
    ? "最终候选明细"
    : swing ? `${state.stockFlowPeriod}日主力净流入排行榜${themeSuffix}` : `${stockFlowIsToday() ? "当日" : "分钟"}资金流速排行榜${themeSuffix}`;
  $("#stock-flow-row-count").textContent = `${formatAShareCount(rows.length)}只`;
  $("#stock-flow-rank-note").textContent = shortlistMode
    ? (state.stockFlowSort === "score" ? "按候选评分排序；原始排名仍保留在全部候选" : "按当前指标重排；左侧候选编号仍按评分")
    : swing
      ? "仅完整交易日口径参与正式排名"
      : stockFlowIsToday()
        ? "按当日累计主力净额与日内平均流速排序"
        : `按${state.stockFlowWindowMinutes}分钟真实快照增量排序`;
  $("#stock-flow-col-net").textContent = swing ? `${state.stockFlowPeriod}日净流入` : stockFlowIsToday() ? "当日净流入" : "窗口净流入";
  $("#stock-flow-col-speed").textContent = swing ? "日均净流入" : stockFlowIsToday() ? "日内平均流速" : "每分钟流速";
  $("#stock-flow-col-trend").textContent = swing ? "流入天数" : "加速度";
  $("#stock-flow-col-strength").textContent = swing ? "日均净占比" : "资金强度";
  $("#stock-flow-col-secondary").textContent = swing ? "最新单日" : "超大单";
}

function stockFlowLinePath(values, x, y, width, height) {
  const valid = values.map(Number).filter(Number.isFinite);
  if (!valid.length) return "";
  let min = Math.min(...valid);
  let max = Math.max(...valid);
  if (Math.abs(max - min) < 0.000001) {
    max += 1;
    min -= 1;
  }
  const pad = (max - min) * 0.08;
  min -= pad;
  max += pad;
  return values.map((value, index) => {
    const px = x + (values.length <= 1 ? width : index / (values.length - 1) * width);
    const py = y + height - (Number(value) - min) / (max - min) * height;
    return `${index ? "L" : "M"}${px.toFixed(1)},${py.toFixed(1)}`;
  }).join(" ");
}

function stockFlowIntradayChart(points) {
  if (!Array.isArray(points) || points.length < 2) {
    return '<div class="stock-flow-detail-empty">形成两张以上真实快照后显示盘中双轨迹。</div>';
  }
  const prices = points.map((item) => Number(item.last));
  const funds = points.map((item) => Number(item.mainNetYuan));
  const pricePath = stockFlowLinePath(prices, 52, 30, 616, 76);
  const fundPath = stockFlowLinePath(funds, 52, 148, 616, 76);
  const labels = [0, Math.floor((points.length - 1) / 2), points.length - 1]
    .filter((value, index, array) => array.indexOf(value) === index)
    .map((index) => `<text x="${(52 + index / Math.max(1, points.length - 1) * 616).toFixed(1)}" y="249" text-anchor="middle">${escapeHtml(points[index]?.slot || "")}</text>`)
    .join("");
  return `
    <svg viewBox="0 0 720 260" role="img" aria-label="盘中价格和主力净额轨迹">
      <g class="stock-flow-chart-grid">
        <line x1="52" y1="30" x2="668" y2="30"/><line x1="52" y1="68" x2="668" y2="68"/><line x1="52" y1="106" x2="668" y2="106"/>
        <line x1="52" y1="148" x2="668" y2="148"/><line x1="52" y1="186" x2="668" y2="186"/><line x1="52" y1="224" x2="668" y2="224"/>
      </g>
      <text class="stock-flow-chart-label" x="10" y="42">价格</text>
      <text class="stock-flow-chart-label" x="10" y="160">资金</text>
      <path class="stock-flow-price-line" d="${pricePath}"/>
      <path class="stock-flow-fund-line" d="${fundPath}"/>
      <circle class="stock-flow-price-dot" cx="668" cy="${pricePath.split("L").at(-1)?.split(",").at(-1) || 68}" r="4"/>
      <circle class="stock-flow-fund-dot" cx="668" cy="${fundPath.split("L").at(-1)?.split(",").at(-1) || 186}" r="4"/>
      <g class="stock-flow-chart-times">${labels}</g>
    </svg>`;
}

function renderStockFlowDailyBars(detail, row) {
  const target = $("#stock-flow-daily-bars");
  const caption = $("#stock-flow-daily-caption");
  if (!target || !caption) return;
  const daily = Array.isArray(detail?.daily) ? detail.daily.slice(0, 21) : [];
  const values = daily;
  if (!values.length) {
    target.innerHTML = '<div class="stock-flow-detail-empty">历史日资金正在低频补录，盘中采样不受影响。</div>';
    caption.textContent = "等待历史补录";
    return;
  }
  const max = Math.max(...values.map((item) => Math.abs(Number(item.mainNetYuan) || 0)), 1);
  const rows = values.map((item) => {
    const amount = Number(item.mainNetYuan) || 0;
    const turnover = Number(item.turnoverYuan);
    const hasTurnover = Number.isFinite(turnover) && turnover > 0;
    const width = Math.max(2, Math.abs(amount) / max * 100);
    return `
      <div class="stock-flow-daily-row ${stockFlowTone(amount)} ${item.live ? "is-live" : ""}">
        <time>${escapeHtml(String(item.date || "").slice(5))}${item.live ? "*" : ""}</time>
        <span class="stock-flow-daily-track"><i style="width:${width.toFixed(1)}%"></i></span>
        <strong title="主力净额 ${escapeHtml(formatSectorFlowMoney(amount))}">${escapeHtml(formatSectorFlowMoney(amount))}</strong>
        <span class="stock-flow-daily-turnover" title="${hasTurnover ? `当日成交额 ${escapeHtml(formatSectorFlowMoney(turnover))}` : "该日成交额尚未落库"}">${hasTurnover ? escapeHtml(formatSectorFlowMoney(turnover)) : "--"}</span>
      </div>`;
  }).join("");
  target.innerHTML = `
    <div class="stock-flow-daily-columns" aria-hidden="true">
      <span>日期</span><span>净额强度</span><span>主力净额</span><span>成交额</span>
    </div>${rows}`;
  const turnoverCoverage = Number(detail?.turnoverCoverage) || 0;
  caption.textContent = `${values.length}/21日 · ${turnoverCoverage}日含成交额`;
}

function renderStockFlowDetail() {
  const rows = stockFlowRows();
  const row = rows.find((item) => item.code === state.selectedStockFlowCode) || rows[0] || null;
  const detail = state.stockFundFlow?.detail;
  if (!row) {
    $("#stock-flow-detail-title").textContent = "选择一只股票";
    $("#stock-flow-detail-meta").textContent = "查看价格与资金是否同向";
    $("#stock-flow-detail-signal").textContent = "--";
    $("#stock-flow-detail-stats").innerHTML = "";
    $("#stock-flow-chart").innerHTML = '<div class="stock-flow-detail-empty">当前没有可展示的个股。</div>';
    renderStockFlowDailyBars(null, null);
    return;
  }
  const metric = stockFlowMetric(row);
  const signal = stockFlowIsSwing() ? stockFlowSwingSignal(metric) : metric.signal || (metric.ready ? "方向不明" : "基线未形成");
  $("#stock-flow-detail-title").textContent = `${row.name} ${row.code}`;
  $("#stock-flow-detail-meta").textContent = `${row.sector || "动态候选"} · ${stockFlowPeriodLabel()}`;
  $("#stock-flow-detail-signal").textContent = signal;
  $("#stock-flow-detail-signal").className = stockFlowSignalTone(signal);
  const net = stockFlowIsSwing() ? metric.periodMainNetYuan : metric.deltaMainNetYuan;
  const speed = stockFlowIsSwing() ? metric.averageDailyMainNetYuan : metric.velocityYuanPerMinute;
  const consistency = stockFlowIsSwing()
    ? `${metric.positiveDays || 0}/${metric.availableDays || 0}日`
    : formatPercentValue(metric.intensityPct);
  const turnover = Number(row.turnoverYuan);
  $("#stock-flow-detail-stats").innerHTML = `
    <article><span>${stockFlowIsSwing() ? "累计净流入" : stockFlowIsToday() ? "当日主力净额" : "窗口净流入"}</span><strong class="${stockFlowTone(net)}">${marketPulseHasNumber(net) ? formatSectorFlowMoney(net) : "--"}</strong></article>
    <article><span>${stockFlowIsSwing() ? "日均净流入" : stockFlowIsToday() ? "日内平均流速" : "每分钟流速"}</span><strong class="${stockFlowTone(speed)}">${marketPulseHasNumber(speed) ? formatSectorFlowMoney(speed) : "--"}</strong></article>
    <article><span>${stockFlowIsSwing() ? "流入天数" : stockFlowIsToday() ? "当日资金强度" : "资金强度"}</span><strong>${escapeHtml(consistency)}</strong></article>
    <article><span>当日成交额</span><strong>${Number.isFinite(turnover) && turnover > 0 ? formatSectorFlowMoney(turnover) : "--"}</strong></article>`;
  $("#stock-flow-chart").innerHTML = stockFlowIntradayChart(detail?.code === row.code ? detail.intraday : []);
  renderStockFlowDailyBars(detail?.code === row.code ? detail : null, row);
}

function stockFlowValidationHorizonLabel(horizon) {
  return {
    "5m": "5分钟",
    "15m": "15分钟",
    "30m": "30分钟",
    "60m": "60分钟",
    close: "当日收盘",
    next_close: "次日收盘",
  }[horizon] || horizon || "验证结果";
}

function stockFlowValidationStateLabel(state) {
  return {
    tracking: "待完成",
    confirmed: "30分钟确认",
    invalidated: "已失效",
    closed_positive: "收盘命中",
    closed_negative: "收盘未命中",
  }[state] || "跟踪中";
}

function renderStockFlowValidation() {
  const section = $(".stock-flow-validation");
  if (!section) return;
  const payload = state.stockFlowValidation || {};
  const current = payload.currentBatch || {};
  const history = payload.history || {};
  const horizon = state.stockFlowValidationHorizon || "30m";
  const currentSummary = current.summary?.[horizon] || {};
  const historySummary = history.summary?.[horizon] || {};
  const items = Array.isArray(current.items) ? current.items : [];
  const summary = $("#stock-flow-validation-summary");
  const body = $("#stock-flow-validation-table-body");
  const count = $("#stock-flow-validation-count");
  const meta = $("#stock-flow-validation-meta-text");
  const note = $("#stock-flow-validation-note");

  document.querySelectorAll("#stock-flow-validation-horizons [data-stock-flow-validation-horizon]")
    .forEach((button) => {
      button.classList.toggle("active", button.dataset.stockFlowValidationHorizon === horizon);
    });
  if (count) count.textContent = `${formatAShareCount(current.count || 0)}个候选`;
  if (meta) meta.textContent = `当前批次 ${formatAShareCount(currentSummary.sampleCount || 0)} 个已完成 · 历史去重 ${formatAShareCount(history.uniqueCandidateCount || 0)} 个`;
  if (note) {
    note.textContent = payload.note || `当前验证窗口：${stockFlowValidationHorizonLabel(horizon)}；历史统计按交易日与股票去重。`;
  }
  if (summary) {
    const completion = Number(current.count || 0) > 0
      ? `${formatAShareCount(currentSummary.sampleCount || 0)}/${formatAShareCount(current.count || 0)}`
      : "--";
    const hitRate = marketPulseHasNumber(historySummary.hitRatePct) ? `${formatFuturesNumber(historySummary.hitRatePct, 1)}%` : "--";
    const average = marketPulseHasNumber(historySummary.averageReturnPct) ? formatPercentValue(historySummary.averageReturnPct) : "--";
    const adverse = marketPulseHasNumber(historySummary.averageMaePct) ? formatPercentValue(historySummary.averageMaePct) : "--";
    summary.innerHTML = `
      <article><span>当前批次完成</span><strong>${completion}</strong><small>${stockFlowValidationHorizonLabel(horizon)}</small></article>
      <article><span>历史命中率</span><strong class="${stockFlowTone(historySummary.hitRatePct)}">${hitRate}</strong><small>${formatAShareCount(historySummary.sampleCount || 0)}个去重样本</small></article>
      <article><span>历史平均收益</span><strong class="${stockFlowTone(historySummary.averageReturnPct)}">${average}</strong><small>中位数 ${marketPulseHasNumber(historySummary.medianReturnPct) ? formatPercentValue(historySummary.medianReturnPct) : "--"}</small></article>
      <article><span>平均最大不利</span><strong class="${stockFlowTone(historySummary.averageMaePct)}">${adverse}</strong><small>最大有利 ${marketPulseHasNumber(historySummary.averageMfePct) ? formatPercentValue(historySummary.averageMfePct) : "--"}</small></article>`;
  }
  if (!body) return;
  if (!items.length) {
    body.innerHTML = `<tr class="stock-flow-validation-empty"><td colspan="6"><strong>${payload.state === "waiting" ? "等待候选冻结" : "当前批次暂无可验证候选"}</strong><span>候选必须先通过第一阶段门槛，后续快照到达后自动补齐验证结果。</span></td></tr>`;
    return;
  }
  body.innerHTML = items.map((item) => {
    const outcome = item.outcomes?.[horizon] || {};
    const returnPct = marketPulseHasNumber(outcome.returnPct) ? Number(outcome.returnPct) : null;
    const status = outcome.complete
      ? (returnPct > 0 ? "命中" : "未命中")
      : stockFlowValidationStateLabel(item.state);
    const statusClass = outcome.complete ? stockFlowTone(returnPct) : item.state === "invalidated" ? "is-negative" : "";
    const tier = item.tier === "core" ? "核心" : "观察";
    const mfe = marketPulseHasNumber(outcome.maxFavorablePct) ? formatPercentValue(outcome.maxFavorablePct) : "--";
    const mae = marketPulseHasNumber(outcome.maxAdversePct) ? formatPercentValue(outcome.maxAdversePct) : "--";
    const observed = outcome.complete ? (outcome.observedSlot || outcome.observedDate || "已完成") : "待后续快照";
    return `
      <tr data-stock-flow-validation-code="${escapeHtml(item.code || "")}">
        <td><strong>${escapeHtml(item.name || "--")}</strong><small>${escapeHtml(item.code || "--")} · ${escapeHtml(item.sector || "产业标签待补")}</small></td>
        <td><b class="stock-flow-validation-tier ${item.tier === "core" ? "is-core" : ""}">${tier}</b><small>评分 ${escapeHtml(String(item.score ?? "--"))} · 入选 ${escapeHtml(item.slot || "--")}</small></td>
        <td class="${stockFlowTone(returnPct)}"><strong>${returnPct === null ? "--" : formatPercentValue(returnPct)}</strong><small>${stockFlowValidationHorizonLabel(horizon)}</small></td>
        <td><strong>${mfe} / ${mae}</strong><small>路径峰值 / 路径低点</small></td>
        <td><strong>${escapeHtml(observed)}</strong><small>${outcome.complete ? "真实快照" : "尚未到达"}</small></td>
        <td><b class="stock-flow-validation-state ${statusClass}">${status}</b></td>
      </tr>`;
  }).join("");
}

function etfFlowRows() {
  return Array.isArray(state.etfFlow?.rows) ? state.etfFlow.rows : [];
}

function etfFlowToneClass(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || Math.abs(number) < 0.0001) return "etf-flow-waiting";
  return number > 0 ? "etf-flow-positive" : "etf-flow-negative";
}

function formatEtfPercent(value, digits = 2) {
  if (!marketPulseHasNumber(value)) return "--";
  const number = Number(value);
  return `${number > 0 ? "+" : ""}${number.toFixed(digits)}%`;
}

function etfFlowLineSvg(points, valueKey, label, color = "#1769d2") {
  if (!Array.isArray(points) || points.length < 2) {
    return '<div class="etf-flow-chart-empty">形成两张以上真实快照后显示盘中曲线。</div>';
  }
  const values = points.map((item) => Number(item[valueKey])).filter(Number.isFinite);
  if (values.length < 2) return '<div class="etf-flow-chart-empty">当前曲线数据不足。</div>';
  const path = stockFlowLinePath(values, 52, 28, 616, 146);
  const labels = [0, Math.floor((points.length - 1) / 2), points.length - 1]
    .filter((value, index, array) => array.indexOf(value) === index)
    .map((index) => `<text x="${(52 + index / Math.max(1, points.length - 1) * 616).toFixed(1)}" y="205" text-anchor="middle">${escapeHtml(points[index]?.slot || "")}</text>`)
    .join("");
  return `
    <svg viewBox="0 0 720 218" role="img" aria-label="${escapeHtml(label)}">
      <g stroke="#dbe5ef" stroke-width="1"><line x1="52" y1="28" x2="668" y2="28"/><line x1="52" y1="77" x2="668" y2="77"/><line x1="52" y1="126" x2="668" y2="126"/><line x1="52" y1="174" x2="668" y2="174"/></g>
      <text x="10" y="40" fill="#698099" font-size="10">${escapeHtml(label)}</text>
      <path d="${path}" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <g fill="#698099" font-size="10">${labels}</g>
    </svg>`;
}

function etfFlowGroupSignalClass(signal) {
  if (["放量走强", "关注升温"].includes(signal)) return "hot";
  if (["缩量走弱", "放量承压"].includes(signal)) return "cold";
  return "";
}

function renderEtfFlowSummary() {
  const payload = state.etfFlow || fallbackEtfFlow;
  const summary = payload.summary || {};
  const total = $("#etf-flow-total");
  if (!total) return;
  total.textContent = formatAShareMoney(summary.totalTurnoverYuan);
  $("#etf-flow-total-meta").textContent = `${formatAShareCount(summary.count || 0)}只 · ${payload.slot || "等待采样"}`;
  const yoy = $("#etf-flow-yoy");
  yoy.textContent = formatEtfPercent(summary.sameTimeChangePct);
  yoy.className = etfFlowToneClass(summary.sameTimeChangePct);
  $("#etf-flow-yoy-meta").textContent = summary.previousDate
    ? `${summary.previousDate}同期 ${formatAShareMoney(summary.previousSameTimeTurnoverYuan)}`
    : "需要上一交易日快照";
  $("#etf-flow-forecast").textContent = formatAShareMoney(summary.fullDayForecastYuan);
  $("#etf-flow-forecast-meta").textContent = marketPulseHasNumber(summary.previousFullDayTurnoverYuan)
    ? `前一日全天 ${formatAShareMoney(summary.previousFullDayTurnoverYuan)}`
    : "按昨日进度曲线";
  $("#etf-flow-breadth").textContent = `${formatAShareCount(summary.upCount || 0)} / ${formatAShareCount(summary.downCount || 0)}`;
  $("#etf-flow-breadth-meta").textContent = `涨${formatAShareCount(summary.upCount || 0)} · 平${formatAShareCount(summary.flatCount || 0)} · 跌${formatAShareCount(summary.downCount || 0)}`;
  $("#etf-flow-concentration").textContent = formatEtfPercent(summary.top10ConcentrationPct);
  $("#etf-flow-share-state").textContent = summary.shareFlowState === "ready" ? "已接入" : "待接入";
  $("#etf-flow-share-note").textContent = summary.shareFlowNote || "不以成交额代替";
}

function renderEtfFlowControls() {
  const payload = state.etfFlow || fallbackEtfFlow;
  const trend = payload.trend || fallbackEtfFlow.trend;
  const isTrend = state.etfFlowView === "trend";
  const workspace = $("#etf-flow-workspace");
  workspace?.classList.toggle("is-trend-view", isTrend);
  const intradayView = $("#etf-flow-intraday-view");
  const trendView = $("#etf-flow-trend-view");
  const trendControls = $("#etf-flow-trend-controls");
  if (intradayView) intradayView.hidden = isTrend;
  if (trendView) trendView.hidden = !isTrend;
  if (trendControls) trendControls.hidden = !isTrend;
  document.querySelectorAll("[data-etf-flow-intraday-only]").forEach((element) => {
    element.hidden = isTrend;
  });
  document.querySelectorAll("#etf-flow-view-tabs [data-etf-flow-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.etfFlowView === state.etfFlowView);
    button.setAttribute("aria-selected", button.dataset.etfFlowView === state.etfFlowView ? "true" : "false");
  });
  const dates = Array.isArray(payload.availableDates) ? payload.availableDates : [];
  const select = $("#etf-flow-date");
  if (select) {
    select.innerHTML = dates.length
      ? dates.map((date) => `<option value="${escapeHtml(date)}" ${date === state.selectedEtfFlowDate ? "selected" : ""}>${escapeHtml(date)}</option>`).join("")
      : '<option value="">等待首个快照</option>';
  }
  document.querySelectorAll("#etf-flow-scope-tabs [data-etf-flow-scope]").forEach((button) => {
    button.classList.toggle("active", button.dataset.etfFlowScope === state.etfFlowScope);
  });
  document.querySelectorAll("#etf-flow-window-tabs [data-etf-flow-window]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.etfFlowWindow) === Number(state.etfFlowWindowMinutes));
  });
  document.querySelectorAll("#etf-flow-sort-tabs [data-etf-flow-sort]").forEach((button) => {
    button.classList.toggle("active", button.dataset.etfFlowSort === state.etfFlowSort);
  });
  document.querySelectorAll("#etf-trend-horizon-tabs [data-etf-trend-horizon]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.etfTrendHorizon) === Number(state.etfTrendHorizonDays));
  });
  document.querySelectorAll("#etf-trend-mode-tabs [data-etf-trend-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.etfTrendMode === state.etfTrendMode);
  });
  document.querySelectorAll("#etf-trend-sort-tabs [data-etf-trend-sort]").forEach((button) => {
    button.classList.toggle("active", button.dataset.etfTrendSort === state.etfTrendSort);
  });
  const trendPeriod = $("#etf-trend-period");
  if (trendPeriod) trendPeriod.textContent = `${trend.horizonDays || state.etfTrendHorizonDays}日`;
  const search = $("#etf-flow-search");
  if (search && search.value !== state.etfFlowQuery) search.value = state.etfFlowQuery;
  const slots = Array.isArray(payload.availableSlots) ? payload.availableSlots : [];
  const selectedIndex = Math.max(0, slots.indexOf(payload.slot));
  const timeline = $("#etf-flow-timeline");
  if (timeline) {
    timeline.max = String(Math.max(0, slots.length - 1));
    timeline.value = String(selectedIndex);
    timeline.disabled = slots.length < 2;
  }
  $("#etf-flow-selected-time").textContent = payload.slot || "--:--";
  $("#etf-flow-window-caption").textContent = `最近${state.etfFlowWindowMinutes}个交易分钟${state.etfFlowFollowLatest ? " · 跟随最新" : " · 历史回放"}`;
  $("#etf-flow-group-window-head").textContent = `${state.etfFlowWindowMinutes}分增量`;
  $("#etf-flow-rank-window-head").textContent = `${state.etfFlowWindowMinutes}分成交`;
}

function renderEtfFlowGroups() {
  const groups = Array.isArray(state.etfFlow?.groups) ? state.etfFlow.groups : [];
  const body = $("#etf-flow-group-body");
  if (!body) return;
  $("#etf-flow-group-count").textContent = `${formatAShareCount(groups.length)}个分支`;
  if (!groups.length) {
    body.innerHTML = '<tr><td colspan="9"><span class="etf-flow-sub">当前范围暂无可展示分支。</span></td></tr>';
    return;
  }
  body.innerHTML = groups.map((group) => `
    <tr data-etf-flow-branch="${escapeHtml(group.branch || "")}" title="查看${escapeHtml(group.branch || "分支")}ETF">
      <td><strong class="etf-flow-name">${escapeHtml(group.branch || "其他主题")}</strong><span class="etf-flow-sub">${escapeHtml(group.assetClass || "其他权益")} · ${formatAShareCount(group.count || 0)}只</span></td>
      <td><strong>${formatAShareMoney(group.turnoverYuan)}</strong></td>
      <td>${formatAShareMoney(group.previousSameTimeTurnoverYuan)}</td>
      <td class="${etfFlowToneClass(group.sameTimeChangePct)}">${formatEtfPercent(group.sameTimeChangePct)}</td>
      <td>${formatAShareMoney(group.windowTurnoverYuan)}</td>
      <td>${formatEtfPercent(group.marketSharePct)}</td>
      <td class="${etfFlowToneClass(group.medianChangePct)}">${formatEtfPercent(group.medianChangePct)}</td>
      <td>${formatAShareCount(group.upCount || 0)} / ${formatAShareCount(group.downCount || 0)}</td>
      <td><em class="etf-flow-signal ${etfFlowGroupSignalClass(group.signal)}">${escapeHtml(group.signal || "横向观察")}</em></td>
    </tr>`).join("");
}

function renderEtfFlowMarketChart() {
  const payload = state.etfFlow || fallbackEtfFlow;
  const timeline = Array.isArray(payload.timeline) ? payload.timeline : [];
  const target = $("#etf-flow-chart");
  if (!target) return;
  target.innerHTML = etfFlowLineSvg(timeline, "totalTurnoverYuan", "累计成交额", "#0c8bad");
  $("#etf-flow-market-meta").textContent = timeline.length ? `${timeline.length}张真实快照` : "等待快照";
  $("#etf-flow-methodology").textContent = payload.methodology?.turnover || "成交额反映交易活跃度，不等同于ETF净申购。";
}

function renderEtfFlowRanking() {
  const rows = etfFlowRows();
  const body = $("#etf-flow-rank-body");
  if (!body) return;
  const labels = { turnover: "按当日成交额排序", velocity: "按每分钟成交增量排序", sameTime: "按昨日同期活跃变化排序", change: "按当日涨幅排序" };
  $("#etf-flow-row-count").textContent = `${formatAShareCount(rows.length)}只`;
  $("#etf-flow-rank-note").textContent = labels[state.etfFlowSort] || labels.turnover;
  if (!rows.length) {
    body.innerHTML = '<tr><td colspan="9"><span class="etf-flow-sub">当前筛选没有匹配ETF。</span></td></tr>';
    return;
  }
  body.innerHTML = rows.map((row, index) => `
    <tr class="${row.code === state.selectedEtfFlowCode ? "is-selected" : ""}" data-etf-flow-code="${escapeHtml(row.code || "")}" tabindex="0">
      <td><b class="etf-flow-rank">${index + 1}</b></td>
      <td><strong class="etf-flow-name">${escapeHtml(row.name || row.code || "--")}</strong><span class="etf-flow-sub">${escapeHtml(row.code || "--")} · ${escapeHtml(row.branch || "其他主题")}</span></td>
      <td><strong>${marketPulseHasNumber(row.last) ? formatFuturesNumber(row.last, 3) : "--"}</strong><span class="etf-flow-sub ${etfFlowToneClass(row.changePct)}">${formatEtfPercent(row.changePct)}</span></td>
      <td><strong>${formatAShareMoney(row.turnoverYuan)}</strong></td>
      <td>${formatAShareMoney(row.previousSameTimeTurnoverYuan)}</td>
      <td class="${etfFlowToneClass(row.sameTimeChangePct)}">${formatEtfPercent(row.sameTimeChangePct)}</td>
      <td>${formatAShareMoney(row.windowTurnoverYuan)}</td>
      <td>${formatAShareMoney(row.turnoverSpeedYuanPerMinute)}</td>
      <td>${marketPulseHasNumber(row.volumeRatio) ? `${formatFuturesNumber(row.volumeRatio, 2)}倍` : "--"}</td>
    </tr>`).join("");
}

function renderEtfFlowDetail() {
  const payload = state.etfFlow || fallbackEtfFlow;
  const rows = etfFlowRows();
  const row = payload.detail?.code === state.selectedEtfFlowCode
    ? payload.detail
    : rows.find((item) => item.code === state.selectedEtfFlowCode) || rows[0] || null;
  if (!row) {
    $("#etf-flow-detail-title").textContent = "选择一只ETF";
    $("#etf-flow-detail-meta").textContent = "查看成交热度和同分支排名";
    $("#etf-flow-detail-signal").textContent = "--";
    $("#etf-flow-detail-stats").innerHTML = "";
    $("#etf-flow-detail-chart").innerHTML = '<div class="etf-flow-chart-empty">当前没有可展示ETF。</div>';
    $("#etf-flow-peer-list").innerHTML = "";
    return;
  }
  const signal = Number(row.changePct || 0) > 0 && Number(row.turnoverSpeedYuanPerMinute || 0) > 0
    ? "价格与成交同步"
    : Number(row.changePct || 0) < 0 && Number(row.turnoverSpeedYuanPerMinute || 0) > 0
      ? "放量承压"
      : "横向观察";
  $("#etf-flow-detail-title").textContent = `${row.name} ${row.code}`;
  $("#etf-flow-detail-meta").textContent = `${row.assetClass || "其他权益"} · ${row.branch || "其他主题"}`;
  $("#etf-flow-detail-signal").textContent = signal;
  $("#etf-flow-detail-signal").className = etfFlowGroupSignalClass(signal);
  $("#etf-flow-detail-stats").innerHTML = `
    <article><span>当日成交</span><strong>${formatAShareMoney(row.turnoverYuan)}</strong></article>
    <article><span>${state.etfFlowWindowMinutes}分成交</span><strong>${formatAShareMoney(row.windowTurnoverYuan)}</strong></article>
    <article><span>较昨日同期</span><strong class="${etfFlowToneClass(row.sameTimeChangePct)}">${formatEtfPercent(row.sameTimeChangePct)}</strong></article>
    <article><span>当日涨跌</span><strong class="${etfFlowToneClass(row.changePct)}">${formatEtfPercent(row.changePct)}</strong></article>`;
  const detailPoints = payload.detail?.code === row.code && Array.isArray(payload.detailTimeline) ? payload.detailTimeline : [];
  $("#etf-flow-detail-chart").innerHTML = etfFlowLineSvg(detailPoints, "turnoverYuan", "累计成交", "#1769d2");
  $("#etf-flow-detail-branch-name").textContent = row.branch || "其他主题";
  const peers = payload.detail?.code === row.code && Array.isArray(payload.peers)
    ? payload.peers
    : rows.filter((item) => item.branch === row.branch).slice(0, 12);
  $("#etf-flow-peer-list").innerHTML = peers.map((item, index) => `
    <button type="button" data-etf-flow-code="${escapeHtml(item.code || "")}">
      <span>${index + 1}. ${escapeHtml(item.name || item.code || "--")}</span>
      <b>${formatAShareMoney(item.turnoverYuan)}</b>
      <em class="${etfFlowToneClass(item.changePct)}">${formatEtfPercent(item.changePct)}</em>
    </button>`).join("");
}

function etfTrendStageLabel(stage) {
  return {
    "低位蓄力": "低位蓄力",
    "趋势启动": "趋势启动",
    "主升趋势": "主升趋势",
    "高位加速": "高位加速",
    "底部下行": "底部下行",
    "数据不足": "数据不足",
  }[stage] || "观察";
}

function etfTrendStageClass(stage) {
  if (stage === "低位蓄力") return "is-accumulation";
  if (stage === "趋势启动") return "is-launch";
  if (stage === "主升趋势") return "is-main";
  if (["高位加速", "底部下行"].includes(stage)) return "is-risk";
  return "is-neutral";
}

function etfTrendChartSvg(points) {
  if (!Array.isArray(points) || points.length < 2) {
    return '<div class="etf-trend-chart-empty">形成两个以上真实交易日快照后显示趋势曲线。</div>';
  }
  const normalized = points.map((item) => Number(item.normalizedPct)).filter(Number.isFinite);
  const drawdowns = points.map((item) => Number(item.drawdownPct)).filter(Number.isFinite);
  if (normalized.length < 2 || drawdowns.length < 2) {
    return '<div class="etf-trend-chart-empty">当前历史数据不足，暂不生成趋势曲线。</div>';
  }
  const normalizedPath = stockFlowLinePath(normalized, 58, 26, 598, 88);
  const drawdownPath = stockFlowLinePath(drawdowns, 58, 140, 598, 42);
  const labelIndexes = [0, Math.floor((points.length - 1) / 2), points.length - 1]
    .filter((value, index, array) => array.indexOf(value) === index);
  const labels = labelIndexes.map((index) => `
    <text x="${(58 + index / Math.max(1, points.length - 1) * 598).toFixed(1)}" y="201" text-anchor="middle">${escapeHtml(points[index]?.date || "")}</text>`).join("");
  return `
    <svg viewBox="0 0 700 214" role="img" aria-label="ETF趋势与回撤曲线">
      <g stroke="#dbe5ef" stroke-width="1">
        <line x1="58" y1="26" x2="656" y2="26"/><line x1="58" y1="70" x2="656" y2="70"/><line x1="58" y1="114" x2="656" y2="114"/>
        <line x1="58" y1="140" x2="656" y2="140"/><line x1="58" y1="182" x2="656" y2="182"/>
      </g>
      <text x="10" y="39" fill="#496887" font-size="11">累计涨幅</text>
      <text x="10" y="157" fill="#496887" font-size="11">回撤</text>
      <path d="${normalizedPath}" fill="none" stroke="#1769d2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="${drawdownPath}" fill="none" stroke="#ed4353" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <g fill="#698099" font-size="10">${labels}</g>
    </svg>`;
}

function renderEtfTrend() {
  const payload = state.etfFlow?.trend || fallbackEtfFlow.trend;
  const rows = Array.isArray(payload.rows) ? payload.rows : [];
  const coverage = payload.coverage || {};
  const body = $("#etf-trend-rank-body");
  const branchBody = $("#etf-trend-branch-body");
  $("#etf-trend-coverage").textContent = `${coverage.availableDays || 0}/${coverage.targetDays || state.etfTrendHorizonDays}日`;
  $("#etf-trend-coverage-note").textContent = coverage.note || "按真实交易日统计，历史不足会明确标注。";
  $("#etf-trend-benchmark").textContent = payload.benchmarkLabel || "--";
  $("#etf-trend-ranking-count").textContent = `${formatAShareCount(rows.length)}只`;
  const sortLabels = { score: "综合趋势评分", return: "区间涨幅", position: "位置分位", participation: "参与度", risk: "回撤风险" };
  $("#etf-trend-rank-note").textContent = sortLabels[state.etfTrendSort] || sortLabels.score;
  const modeCopy = {
    all: ["ETF趋势总览", "按阶段、位置、参与度和相对强弱筛选真实交易日趋势。"],
    accumulation: ["低位趋势候选", "优先观察位置偏低、量能改善且尚未明显脱离成本区的ETF。"],
    launch: ["趋势启动候选", "优先观察接近阶段高点、相对基准转强的ETF。"],
    main: ["主升趋势候选", "优先观察区间斜率向上、上涨日占比和趋势评分同步改善的ETF。"],
    risk: ["高位风险观察", "集中查看高位加速或底部转弱的ETF，重点控制回撤。"],
  }[payload.mode || state.etfTrendMode] || ["ETF趋势总览", "按阶段、位置、参与度和相对强弱筛选真实交易日趋势。"];
  $("#etf-trend-title").textContent = modeCopy[0];
  $("#etf-trend-subtitle").textContent = modeCopy[1];

  const stageCards = $("#etf-trend-stage-cards");
  const stageSummary = Array.isArray(payload.stageSummary) ? payload.stageSummary : [];
  if (stageCards) {
    const fallbackStages = [
      { key: "accumulation", label: "低位蓄力", count: 0, description: "位置偏低，量能和参与度正在改善" },
      { key: "launch", label: "趋势启动", count: 0, description: "接近阶段高点，趋势确认度提升" },
      { key: "main", label: "主升趋势", count: 0, description: "区间斜率向上，价格与广度同步" },
      { key: "risk", label: "高位风险", count: 0, description: "高位放量或趋势转弱，需要控制回撤" },
    ];
    const cardRows = fallbackStages.map((fallback) => stageSummary.find((item) => item.key === fallback.key) || fallback);
    stageCards.innerHTML = cardRows.map((stage) => `
      <article class="etf-trend-stage-card ${etfTrendStageClass(stage.key === "risk" ? "高位加速" : stage.label)}">
        <i aria-hidden="true"></i>
        <div>
          <header><strong>${escapeHtml(stage.label)}</strong><em>${formatAShareCount(stage.count || 0)}只</em></header>
          <p>${escapeHtml(stage.description || "按当前范围统计")}</p>
          <b class="${Number(stage.returnPct) >= 0 ? "is-positive" : "is-negative"}">${formatEtfPercent(stage.returnPct)} <small>均值</small></b>
        </div>
      </article>`).join("");
  }
  if (body) {
    body.innerHTML = rows.length
      ? rows.map((row, index) => `
        <tr class="${row.code === state.selectedEtfTrendCode ? "is-selected" : ""}" data-etf-trend-code="${escapeHtml(row.code || "")}" tabindex="0">
          <td><b class="etf-flow-rank">${index + 1}</b></td>
          <td><strong class="etf-flow-name">${escapeHtml(row.name || row.code || "--")}</strong><span class="etf-flow-sub">${escapeHtml(row.code || "--")} · ${escapeHtml(row.branch || "其他主题")}</span></td>
          <td class="${etfFlowToneClass(row.returnPct)}"><strong>${formatEtfPercent(row.returnPct)}</strong></td>
          <td class="${etfFlowToneClass(row.recentReturnPct)}">${formatEtfPercent(row.recentReturnPct)}</td>
          <td class="${etfFlowToneClass(row.relativeReturnPct)}">${formatEtfPercent(row.relativeReturnPct)}</td>
          <td>${marketPulseHasNumber(row.positionPct) ? `${Number(row.positionPct).toFixed(1)}%` : "--"}</td>
          <td class="${etfFlowToneClass(row.distanceTo20dHighPct)}">${formatEtfPercent(row.distanceTo20dHighPct)}</td>
          <td class="${etfFlowToneClass(row.maxDrawdownPct)}">${formatEtfPercent(row.maxDrawdownPct)}</td>
          <td>${marketPulseHasNumber(row.participationRatio) ? `${Number(row.participationRatio).toFixed(2)}倍` : "--"}</td>
          <td><em class="etf-trend-stage ${etfTrendStageClass(row.stage)}">${escapeHtml(etfTrendStageLabel(row.stage))}</em></td>
          <td><strong>${marketPulseHasNumber(row.trendScore) ? Number(row.trendScore).toFixed(1) : "--"}</strong></td>
        </tr>`).join("")
      : '<tr><td colspan="11"><span class="etf-flow-sub">当前周期或筛选条件下没有足够的真实历史数据。</span></td></tr>';
  }
  const branches = Array.isArray(payload.branches) ? payload.branches : [];
  const branchCards = $("#etf-trend-branch-cards");
  if (branchCards) {
    branchCards.innerHTML = branches.length
      ? branches.slice(0, 4).map((branch) => `
        <article class="etf-trend-branch-card" data-etf-trend-branch="${escapeHtml(branch.branch || "")}" title="查看${escapeHtml(branch.branch || "分支")}相关ETF">
          <header><strong>${escapeHtml(branch.branch || "其他主题")}</strong><em>${formatAShareCount(branch.count || 0)}只</em></header>
          <p><span>区间涨幅</span><b class="${etfFlowToneClass(branch.returnPct)}">${formatEtfPercent(branch.returnPct)}</b></p>
          <p><span>趋势评分</span><b>${marketPulseHasNumber(branch.trendScore) ? Number(branch.trendScore).toFixed(1) : "--"} · ${marketPulseHasNumber(branch.breadthPct) ? `${Number(branch.breadthPct).toFixed(0)}%上涨` : "--"}</b></p>
          <em class="etf-trend-stage ${etfTrendStageClass(branch.stage)}">${escapeHtml(etfTrendStageLabel(branch.stage))}</em>
        </article>`).join("")
      : '<div class="etf-trend-detail-empty">当前筛选没有可统计的分支。</div>';
  }
  if (branchBody) {
    branchBody.innerHTML = branches.length
      ? branches.map((branch) => `
        <tr data-etf-trend-branch="${escapeHtml(branch.branch || "")}" title="查看${escapeHtml(branch.branch || "分支")}相关ETF">
          <td><strong class="etf-flow-name">${escapeHtml(branch.branch || "其他主题")}</strong><span class="etf-flow-sub">${escapeHtml(branch.assetClass || "其他权益")}</span></td>
          <td>${formatAShareCount(branch.count || 0)}只</td>
          <td class="${etfFlowToneClass(branch.returnPct)}">${formatEtfPercent(branch.returnPct)}</td>
          <td><strong>${marketPulseHasNumber(branch.trendScore) ? Number(branch.trendScore).toFixed(1) : "--"}</strong></td>
          <td>${marketPulseHasNumber(branch.positionPct) ? `${Number(branch.positionPct).toFixed(1)}%` : "--"}</td>
          <td>${marketPulseHasNumber(branch.breadthPct) ? `${Number(branch.breadthPct).toFixed(1)}%` : "--"}</td>
          <td><em class="etf-trend-stage ${etfTrendStageClass(branch.stage)}">${escapeHtml(etfTrendStageLabel(branch.stage))}</em></td>
        </tr>`).join("")
      : '<tr><td colspan="7"><span class="etf-flow-sub">当前筛选没有可统计的分支。</span></td></tr>';
  }

  const detail = payload.detail && rows.some((row) => row.code === payload.detail.code)
    ? payload.detail
    : rows[0] || null;
  const detailTitle = $("#etf-trend-detail-title");
  const detailMeta = $("#etf-trend-detail-meta");
  const detailStage = $("#etf-trend-detail-stage");
  const detailStats = $("#etf-trend-detail-stats");
  const detailChart = $("#etf-trend-detail-chart");
  const reasons = $("#etf-trend-reasons");
  if (!detail) {
    if (detailTitle) detailTitle.textContent = "等待足够历史数据";
    if (detailMeta) detailMeta.textContent = "趋势曲线与阶段判断将在真实交易日快照积累后显示";
    if (detailStage) detailStage.textContent = "数据不足";
    if (detailStats) detailStats.innerHTML = '<div class="etf-trend-detail-empty">当前没有满足条件的ETF。</div>';
    if (detailChart) detailChart.innerHTML = '<div class="etf-trend-chart-empty">选择周期或继续采样后再观察趋势。</div>';
    if (reasons) reasons.innerHTML = "";
    $("#etf-trend-detail-quality").textContent = "--";
    return;
  }
  if (detailTitle) detailTitle.textContent = `${detail.name || detail.code} ${detail.code || ""}`;
  if (detailMeta) detailMeta.textContent = `${detail.assetClass || "其他权益"} · ${detail.branch || "其他主题"} · ${detail.signal || "等待确认"}`;
  if (detailStage) {
    detailStage.textContent = etfTrendStageLabel(detail.stage);
    detailStage.className = `etf-trend-stage ${etfTrendStageClass(detail.stage)}`;
  }
  if (detailStats) {
    detailStats.innerHTML = `
      <article><span>${payload.horizonDays || state.etfTrendHorizonDays}日涨幅</span><strong class="${etfFlowToneClass(detail.returnPct)}">${formatEtfPercent(detail.returnPct)}</strong></article>
      <article><span>近5日涨幅</span><strong class="${etfFlowToneClass(detail.recentReturnPct)}">${formatEtfPercent(detail.recentReturnPct)}</strong></article>
      <article><span>相对基准</span><strong class="${etfFlowToneClass(detail.relativeReturnPct)}">${formatEtfPercent(detail.relativeReturnPct)}</strong></article>
      <article><span>当前位置</span><strong>${marketPulseHasNumber(detail.positionPct) ? `${Number(detail.positionPct).toFixed(1)}%` : "--"}</strong></article>
      <article><span>距20日高点</span><strong class="${etfFlowToneClass(detail.distanceTo20dHighPct)}">${formatEtfPercent(detail.distanceTo20dHighPct)}</strong></article>
      <article><span>最大回撤</span><strong class="${etfFlowToneClass(detail.maxDrawdownPct)}">${formatEtfPercent(detail.maxDrawdownPct)}</strong></article>`;
  }
  if (detailChart) detailChart.innerHTML = etfTrendChartSvg(payload.detailHistory || []);
  $("#etf-trend-detail-quality").textContent = `${detail.coverageDays || 0}/${detail.targetDays || payload.horizonDays || state.etfTrendHorizonDays}日 · ${detail.dataQuality || "部分覆盖"}`;
  if (reasons) {
    reasons.innerHTML = [
      `阶段：${etfTrendStageLabel(detail.stage)} · ${detail.signal || "等待确认"}`,
      `区间涨幅 ${formatEtfPercent(detail.returnPct)}，相对${payload.benchmarkLabel || "基准"} ${formatEtfPercent(detail.relativeReturnPct)}。`,
      `当前位置 ${marketPulseHasNumber(detail.positionPct) ? `${Number(detail.positionPct).toFixed(1)}%` : "--"}，距20日高点 ${formatEtfPercent(detail.distanceTo20dHighPct)}。`,
      `参与度 ${marketPulseHasNumber(detail.participationRatio) ? `${Number(detail.participationRatio).toFixed(2)}倍` : "--"}，上涨日占比 ${marketPulseHasNumber(detail.positiveDaysRatio) ? `${Number(detail.positiveDaysRatio).toFixed(1)}%` : "--"}。`,
    ].map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  }
  $("#etf-trend-methodology").textContent = payload.methodology?.trend || fallbackEtfFlow.trend.methodology?.trend || "趋势指标基于真实交易日快照计算。";
}

function renderEtfFlow() {
  const workspace = $("#etf-flow-workspace");
  if (!workspace) return;
  renderEtfFlowSummary();
  renderEtfFlowControls();
  renderEtfFlowGroups();
  renderEtfFlowMarketChart();
  renderEtfFlowRanking();
  renderEtfFlowDetail();
  renderEtfTrend();
  const payload = state.etfFlow || fallbackEtfFlow;
  $("#etf-flow-provider").textContent = payload.provider || fallbackEtfFlow.provider;
  $("#etf-flow-updated").textContent = payload.quoteAt || payload.updatedAt || "--";
}

function renderStockFundFlow() {
  const workspace = $("#stock-flow-workspace");
  if (!workspace) return;
  const payload = state.stockFundFlow || fallbackStockFundFlow;
  const rows = stockFlowRows();
  const coverage = payload.coverage || {};
  renderStockFlowDateOptions();
  renderStockFlowControls();
  renderStockFlowTimeline();

  $("#stock-flow-coverage").textContent = `${formatAShareCount(coverage.candidateCount)}只`;
  $("#stock-flow-coverage-detail").textContent = `榜单${formatAShareCount(coverage.rankScreenCount)}只 · 市场${formatAShareCount(coverage.marketTotal)}只`;
  const ranked = rows.filter((row) => {
    const metric = stockFlowMetric(row);
    return stockFlowIsSwing() ? metric.complete : metric.ready;
  });
  const amountKey = stockFlowIsSwing() ? "periodMainNetYuan" : "velocityYuanPerMinute";
  const leaders = [...ranked].sort((left, right) => Number(stockFlowMetric(right)?.[amountKey] || 0) - Number(stockFlowMetric(left)?.[amountKey] || 0));
  const inflow = leaders[0];
  const outflow = leaders.at(-1);
  $("#stock-flow-fastest-in").textContent = inflow?.name || "--";
  $("#stock-flow-fastest-in-value").textContent = inflow ? formatSectorFlowMoney(stockFlowMetric(inflow)?.[amountKey]) : "--";
  $("#stock-flow-fastest-out").textContent = outflow?.name || "--";
  $("#stock-flow-fastest-out-value").textContent = outflow ? formatSectorFlowMoney(stockFlowMetric(outflow)?.[amountKey]) : "--";
  const readinessPeriod = stockFlowIsSwing() ? state.stockFlowPeriod : "21";
  const shortlistReadiness = state.stockFlowScope === "shortlist";
  const readinessByPeriod = shortlistReadiness
    ? (coverage.shortlistHistoryReadyByPeriod || coverage.historyReadyByPeriod)
    : coverage.historyReadyByPeriod;
  const readyCount = readinessByPeriod?.[readinessPeriod] ?? coverage.historyReadyCount;
  const readinessUniverse = shortlistReadiness
    ? (coverage.shortlistHistoryUniverseCount ?? coverage.shortlistCount ?? coverage.visibleCount)
    : (coverage.historyUniverseCount ?? coverage.visibleCount ?? coverage.selectedCount);
  $("#stock-flow-history-ready").textContent = `${formatAShareCount(readyCount)}/${formatAShareCount(readinessUniverse)}`;
  $("#stock-flow-history-ready-period").textContent = shortlistReadiness
    ? `${readinessPeriod}日候选回看口径`
    : `${readinessPeriod}个交易日同源口径`;
  $("#stock-flow-provider").textContent = payload.provider || "东方财富资金流向（分钟快照 + 日线）";
  $("#stock-flow-updated").textContent = payload.tradingDate && payload.slot ? `${payload.tradingDate} ${payload.slot}` : "--";
  $("#stock-flow-methodology").textContent = [
    payload.methodology?.universe,
    stockFlowIsSwing() ? payload.methodology?.swing : payload.methodology?.intraday,
    payload.methodology?.signal,
  ].filter(Boolean).join(" ");
  workspace.dataset.state = payload.state || "waiting";

  renderStockFlowThemeStrength();
  renderStockFlowShortlist();
  renderStockFlowTable();
  renderStockFlowDetail();
  renderStockFlowValidation();
}


function updateAiIntelUrl() {
  const url = new URL(window.location.href);
  url.searchParams.set("workspace", "ai-intel");
  url.searchParams.set("section", state.aiSection || "dashboard");
  url.searchParams.delete("nav");
  window.history.replaceState({}, "", url);
}

function aiIntelSourceMark(item) {
  const kind = String(item?.sourceKind || item?.sourceId || "").toLowerCase();
  if (kind.includes("github") || kind.includes("opencompass")) return { cls: "is-github", text: "GH" };
  if (kind.includes("huggingface")) return { cls: "is-hf", text: "HF" };
  if (kind.includes("arxiv")) return { cls: "is-arxiv", text: "A" };
  if (kind === "x" || kind.includes("x-local") || kind.includes("x-ai")) return { cls: "is-x", text: "X" };
  if (kind.includes("model") || kind.includes("qwen") || kind.includes("deepseek")) return { cls: "is-model", text: "AI" };
  return { cls: "is-rss", text: "R" };
}

function aiIntelRelativeTime(value) {
  const text = String(value || "").trim();
  if (!text) return "刚刚采集";
  return text.replace("T", " ").replace("+00:00", " UTC").slice(0, 19);
}

function aiIntelDateLabel(value) {
  const date = new Date(value || "");
  if (Number.isNaN(date.getTime())) return "日期未知";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function aiIntelCoreTitle(item) {
  return String(item?.coreTitle || item?.title || item?.summary || "").replace(/\s+/g, " ").trim();
}

function aiXMonitorDate(item) {
  return String(item?.publishedAt || item?.collectedAt || "").slice(0, 10);
}

function aiXMonitorLanguage(item) {
  // Detect the script used by the original post instead of relying on a
  // fixed Chinese-character threshold (which misclassified short Chinese
  // posts and mixed-language posts). URLs, mentions and hashtags are noise
  // for language detection, so remove them before counting letters.
  const original = String(item?.summary || item?.title || "")
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/[@#][\w_]+/g, " ");
  const chineseCount = (original.match(/[\u3400-\u9fff]/g) || []).length;
  const latinCount = (original.match(/[A-Za-z]/g) || []).length;
  if (!chineseCount && latinCount) return "en";
  if (chineseCount && !latinCount) return "zh";
  if (!chineseCount && !latinCount) return "other";
  return chineseCount / (chineseCount + latinCount) >= 0.35 ? "zh" : "en";
}

function aiXMonitorAuthors(items) {
  if (Array.isArray(items) && items.some((item) => Number.isFinite(Number(item?.itemCount)))) {
    return items.map((item) => ({
      key: String(item?.key || item?.handle || item?.name || "x-author"),
      name: String(item?.name || "X 作者"),
      handle: String(item?.handle || ""),
      avatarUrl: String(item?.avatarUrl || ""),
      count: Number(item?.itemCount || 0),
      likes: Number(item?.likes || 0),
      heat: Number(item?.heatScore || 0),
      latest: String(item?.latest || ""),
    })).sort((a, b) => b.count - a.count || b.heat - a.heat || b.latest.localeCompare(a.latest));
  }
  const groups = new Map();
  (Array.isArray(items) ? items : []).forEach((item) => {
    const handle = String(item?.authorHandle || "").trim();
    const name = String(item?.author || item?.sourceName || "X 作者").trim();
    const key = handle || name || String(item?.sourceId || "x-author");
    const current = groups.get(key) || { key, name, handle, avatarUrl: String(item?.avatarUrl || ""), count: 0, likes: 0, heat: 0, latest: "" };
    current.count += 1;
    current.likes += Number(item?.likes || 0);
    current.heat += Number(item?.heatScore || 0);
    current.latest = aiXMonitorDate(item) > current.latest ? aiXMonitorDate(item) : current.latest;
    if (!current.avatarUrl && item?.avatarUrl) current.avatarUrl = String(item.avatarUrl);
    groups.set(key, current);
  });
  return [...groups.values()].sort((a, b) => b.count - a.count || b.heat - a.heat || b.latest.localeCompare(a.latest));
}

function renderAiXMonitorAuthors(items) {
  const page = document.querySelector("#ai-x-monitor-page");
  const list = page?.querySelector("#ai-x-collected-users");
  if (!list) return;
  const authorQuery = aiXMonitorState.authorQuery.trim().toLocaleLowerCase("zh-CN");
  const authors = aiXMonitorAuthors(items).filter((author) => !authorQuery || `${author.name} ${author.handle}`.toLocaleLowerCase("zh-CN").includes(authorQuery));
  const count = page.querySelector("#ai-x-collected-count");
  if (count) count.textContent = String(authors.length);
  if (!authors.length) return;
  const limit = aiXMonitorState.accountsExpanded ? 50 : 10;
  list.innerHTML = authors.slice(0, limit).map((author) => {
    const initials = escapeHtml(author.name.slice(0, 2).toUpperCase());
    const avatar = author.avatarUrl ? `${initials}<img src="${escapeHtml(author.avatarUrl)}" alt="" loading="lazy" onerror="this.style.display='none'" />` : initials;
    const handle = author.handle || "@未标注";
    return `<button type="button" data-ai-x-side="collected-user" data-ai-x-author="${escapeHtml(author.key)}"><i class="ai-x-collected-avatar">${avatar}</i><span><strong>${escapeHtml(author.name)}</strong><small>${escapeHtml(handle)} · ${author.count} 条</small></span><em data-ai-x-recollect="${escapeHtml(author.key)}">补采</em></button>`;
  }).join("");
  const expand = page.querySelector("[data-ai-x-expand-accounts]");
  if (expand) {
    expand.textContent = aiXMonitorState.accountsExpanded ? "收起账户列表" : `展开全部账户（${authors.length}）`;
    expand.hidden = authors.length <= 10;
  }
}

function aiXArchiveStatus(item) {
  const key = String(item?.id || item?.url || "");
  const entry = aiXMonitorState.archiveStatuses.get(key);
  return entry?.status || "unarchived";
}

function aiXArchiveStatusLabel(status) {
  return {
    complete: "已完整",
    downloading: "下载中",
    pending: "待下载",
    partial: "部分内容",
    retry: "等待重试",
    queued: "待处理",
    paused: "已暂停",
    failed: "失败",
    blocked: "受限",
    canceled: "已取消",
    unarchived: "未归档",
  }[status] || "未归档";
}

function aiXArchiveStatusClass(status) {
  return {
    complete: "is-complete",
    downloading: "is-progress",
    partial: "is-warning",
    retry: "is-danger",
    failed: "is-danger",
    blocked: "is-danger",
    paused: "is-warning",
  }[status] || "is-pending";
}

function aiXSetArchiveStatus(item, status) {
  const key = String(item?.id || item?.url || "");
  if (key) aiXMonitorState.archiveStatuses.set(key, typeof status === "string" ? { status } : status);
}

function refreshAiXArchiveJobs() {
  if (aiXMonitorState.archiveLoading) return Promise.resolve();
  aiXMonitorState.archiveLoading = true;
  return fetchJson("/api/ai/x/archive/jobs")
    .then((payload) => {
      aiXMonitorState.archiveStatuses.clear();
      aiXMonitorState.downloadJobs = Array.isArray(payload?.jobs) ? payload.jobs : [];
      aiXMonitorState.downloadJobs.forEach((job) => aiXMonitorState.archiveStatuses.set(String(job.itemId), job));
      aiXMonitorState.archiveLoaded = true;
      renderAiXMonitorPage(state.aiIntel?.xItems || []);
      const active = aiXMonitorState.downloadJobs.some((job) => ["queued", "running"].includes(job.status));
      if (active && !aiXMonitorState.archivePollTimer) {
        aiXMonitorState.archivePollTimer = window.setTimeout(() => {
          aiXMonitorState.archivePollTimer = 0;
          refreshAiXArchiveJobs();
        }, 1200);
      }
    })
    .catch(() => {
      aiXMonitorState.archiveLoaded = true;
    })
    .finally(() => { aiXMonitorState.archiveLoading = false; });
}

function renderAiXWorkspaceViews(filtered) {
  const page = document.querySelector("#ai-x-monitor-page");
  if (!page) return;
  const rows = Array.isArray(filtered) ? filtered : [];
  const archiveView = page.querySelector("#ai-x-archive-view");
  const downloadView = page.querySelector("#ai-x-download-view");
  const corpusView = page.querySelector("#ai-x-corpus-view");
  const visible = rows.slice(0, Math.max(aiXMonitorState.pageSize, 20));
  const statusRows = visible.map((item) => {
    const job = aiXMonitorState.archiveStatuses.get(String(item.id)) || {};
    return { item, job, status: job.status || "unarchived", progress: Number(job.progress || 0) };
  });
  const archiveRows = aiXMonitorState.archiveFilter === "all"
    ? statusRows
    : statusRows.filter(({ status }) => aiXMonitorState.archiveFilter === "pending" ? ["unarchived", "queued"].includes(status) : status === aiXMonitorState.archiveFilter);
  const complete = aiXMonitorState.downloadJobs.filter((job) => job.status === "complete").length;
  const inProgress = aiXMonitorState.downloadJobs.filter((job) => ["queued", "running"].includes(job.status)).length;
  const pending = rows.filter((item) => aiXArchiveStatus(item) === "unarchived").length;
  const jobs = aiXMonitorState.downloadJobs.filter((job) => ["queued", "running", "paused", "partial", "failed", "blocked"].includes(job.status));
  if (archiveView) {
    archiveView.innerHTML = `<div class="xobs-workspace-summary"><div><span>未归档</span><strong>${pending}</strong></div><div><span>处理中</span><strong>${inProgress}</strong></div><div><span>已完整</span><strong>${complete}</strong></div><button type="button" data-ai-x-batch-archive>下载当前筛选全文</button></div><div class="xobs-workspace-filters">${["all", "pending", "running", "complete", "partial", "failed"].map((filter) => `<button class="${aiXMonitorState.archiveFilter === filter ? "active" : ""}" type="button" data-ai-x-archive-filter="${filter}">${{ all: "全部", pending: "未归档", running: "处理中", complete: "已完整", partial: "部分内容", failed: "失败" }[filter]}</button>`).join("")}</div><div class="xobs-archive-table-wrap"><table class="xobs-archive-table"><thead><tr><th>状态</th><th>核心标题 / 摘要</th><th>作者</th><th>类型</th><th>语言</th><th>完整度</th><th>正文字数</th><th>媒体</th><th>归档时间</th></tr></thead><tbody>${archiveRows.map(({ item, job, status, progress }) => { const title = aiIntelCoreTitle(item); const cover = Array.isArray(item?.media) ? item.media.find((media) => media?.previewUrl || media?.url) : null; const date = aiXMonitorDate(item) || "日期未知"; const wordCount = Number(job?.document?.wordCount || 0) || String(item.summary || item.title || "").length; const mediaCount = Number(job?.document?.mediaCount || 0) || (cover ? 1 : 0); const mediaDone = Number(job?.document?.downloadedMediaCount || 0); return `<tr data-ai-x-row data-ai-x-id="${escapeHtml(String(item.id))}"><td><button type="button" class="xobs-status ${aiXArchiveStatusClass(status)}" data-ai-x-archive="${escapeHtml(String(item.id))}">${aiXArchiveStatusLabel(status)}${progress ? ` ${progress}%` : ""}</button></td><td><strong>${escapeHtml(title)}</strong><small>${escapeHtml(String(item.summary || item.title || "").slice(0, 110))}</small>${job?.error ? `<small class="xobs-job-error">${escapeHtml(job.error)}</small>` : ""}</td><td>${escapeHtml(item.author || "X 作者")}<small>${escapeHtml(item.authorHandle || "@未标注")}</small></td><td>${escapeHtml(cover ? "图文" : "推文")}</td><td>${aiXMonitorLanguage(item) === "zh" ? "中文" : "英文"}</td><td><i class="xobs-progress"><b style="width:${Math.min(100, progress)}%"></b></i>${progress ? `${progress}%` : "未核验"}</td><td>${wordCount || "—"}</td><td>${mediaCount ? `${mediaDone}/${mediaCount}` : "无图"}</td><td>${escapeHtml(job?.finishedAt ? String(job.finishedAt).slice(0, 16).replace("T", " ") : date)}</td></tr>`; }).join("") || `<tr><td colspan="9" class="xobs-empty-cell">当前筛选没有可展示内容</td></tr>`}</tbody></table></div>`;
  }
  if (downloadView) {
    const jobRows = jobs.map((job) => { const item = aiXMonitorState.items.find((entry) => String(entry.id) === String(job.itemId)) || job; const progress = Number(job.progress || 0); const action = job.status === "running" || job.status === "queued" ? "暂停" : job.status === "paused" ? "继续" : "重试"; return `<article class="xobs-job-row"><div><strong>${escapeHtml(aiIntelCoreTitle(item) || job.title || "X 内容")}</strong><small>${escapeHtml(item.author || job.author || "X 作者")} · ${aiXArchiveStatusLabel(job.status)}${job.stage ? ` · ${escapeHtml(job.stage)}` : ""}</small>${job.error ? `<small class="xobs-job-error">${escapeHtml(job.error)}</small>` : ""}</div><i class="xobs-progress"><b style="width:${progress}%"></b></i><span>${progress}%</span><button type="button" data-ai-x-job-action="${escapeHtml(String(job.itemId))}" data-ai-x-job-status="${escapeHtml(job.status)}">${action}</button></article>`; }).join("");
    downloadView.innerHTML = `<header class="xobs-view-title"><div><span>LOCAL DOWNLOAD QUEUE</span><h2>下载任务</h2></div><button type="button" data-ai-x-download-all>开始全部待下载</button></header><div class="xobs-job-list">${jobRows || `<div class="xobs-empty"><strong>暂无下载任务</strong><span>任务只会在你点击“下载当前筛选”或单条“下载完整内容”后出现</span></div>`}</div>`;
  }
  if (corpusView) {
    const corpus = aiXMonitorState.downloadJobs.filter((job) => job.status === "complete" && job.document?.corpusState === "ready");
    corpusView.innerHTML = `<header class="xobs-view-title"><div><span>LOCAL DISTILLATION CORPUS</span><h2>蒸馏语料库</h2></div><button type="button" data-ai-x-export-corpus>导出 JSONL</button></header><div class="xobs-corpus-pipeline"><span>已归档 <b>${complete}</b></span><i>→</i><span>已清洗 <b>${corpus.length}</b></span><i>→</i><span>已分块 <b>${corpus.length}</b></span><i>→</i><span>待审核 <b>${corpus.length}</b></span><i>→</i><span class="is-good">可导出 <b>${corpus.length}</b></span></div><div class="xobs-corpus-table"><div class="xobs-corpus-head"><span>文档标题</span><span>作者</span><span>原文语言</span><span>完整度</span><span>正文字数</span><span>媒体</span><span>状态</span></div>${corpus.map((job) => { const item = aiXMonitorState.items.find((entry) => String(entry.id) === String(job.itemId)) || job; return `<button type="button" class="xobs-corpus-row" data-ai-x-row data-ai-x-id="${escapeHtml(String(job.itemId))}"><strong>${escapeHtml(aiIntelCoreTitle(item) || job.title || "X 内容")}</strong><span>${escapeHtml(item.author || job.author || "X 作者")}</span><span>${aiXMonitorLanguage(item) === "zh" ? "中文" : "英文"}</span><span class="is-good">${escapeHtml(job.document?.completeness === "complete" ? "100%" : "部分")}</span><span>${Number(job.document?.wordCount || 0) || "—"}</span><span>${Number(job.document?.downloadedMediaCount || 0)}/${Number(job.document?.mediaCount || 0)}</span><em class="xobs-status is-complete">可导出</em></button>`; }).join("") || `<div class="xobs-empty"><strong>暂无可导出语料</strong><span>请先完成全文归档，再从详情面板加入蒸馏库</span></div>`}</div>`;
  }
  const taskStrip = page.querySelector("#ai-x-task-strip");
  if (taskStrip) {
    const active = jobs.find((job) => ["queued", "running"].includes(job.status));
    taskStrip.innerHTML = jobs.length ? `<span><b>下载队列</b> ${jobs.length} 条</span><span>进行中 <strong>${inProgress}</strong></span><span>已完整 <strong>${complete}</strong></span><span>未归档 <strong>${pending}</strong></span>${active ? `<i>${escapeHtml(String(active.title || "X 内容").slice(0, 34))}</i><em class="xobs-progress"><b style="width:${Number(active.progress || 0)}%"></b></em><small>${Number(active.progress || 0)}%</small>` : ""}<button type="button" data-ai-x-workspace="downloads">展开任务</button>` : "";
  }
  page.querySelectorAll("[data-ai-x-workspace]").forEach((button) => button.classList.toggle("active", button.dataset.aiXWorkspace === aiXMonitorState.workspace));
  page.querySelector("#xobs-feed")?.toggleAttribute("hidden", aiXMonitorState.workspace !== "stream" || aiXMonitorState.display !== "table");
  page.querySelector("#ai-x-stats-view")?.toggleAttribute("hidden", aiXMonitorState.workspace !== "trend" || aiXMonitorState.display !== "stats");
  page.querySelector("#ai-x-archive-view")?.toggleAttribute("hidden", aiXMonitorState.workspace !== "archive");
  page.querySelector("#ai-x-download-view")?.toggleAttribute("hidden", aiXMonitorState.workspace !== "downloads");
  page.querySelector("#ai-x-corpus-view")?.toggleAttribute("hidden", aiXMonitorState.workspace !== "corpus");
  const jobCount = page.querySelector("[data-ai-x-job-count]");
  if (jobCount) jobCount.textContent = String(jobs.length);
  if (!aiXMonitorState.archiveLoaded && !aiXMonitorState.archiveLoading) refreshAiXArchiveJobs();
}

function aiXMonitorFilteredItems() {
  const query = aiXMonitorState.query.trim().toLocaleLowerCase("zh-CN");
  const filtered = aiXMonitorState.items.filter((item) => {
    if (aiXMonitorState.tab === "long" && aiIntelCoreTitle(item).length < 80) return false;
    if (aiXMonitorState.tab === "following" || aiXMonitorState.tab === "followers") return false;
    const date = aiXMonitorDate(item);
    if (aiXMonitorState.authorFilter) {
      const itemAuthor = String(item?.authorHandle || item?.author || item?.sourceId || "").trim();
      if (itemAuthor !== aiXMonitorState.authorFilter) return false;
    }
    if (aiXMonitorState.dateFrom && date < aiXMonitorState.dateFrom) return false;
    if (aiXMonitorState.dateTo && date > aiXMonitorState.dateTo) return false;
    if (aiXMonitorState.language !== "all" && aiXMonitorLanguage(item) !== aiXMonitorState.language) return false;
    if (query && !`${aiIntelCoreTitle(item)} ${item.author || ""}`.toLocaleLowerCase("zh-CN").includes(query)) return false;
    return true;
  });
  const direction = aiXMonitorState.sortDirection === "asc" ? 1 : -1;
  const timestamp = (item) => {
    const value = new Date(item?.publishedAt || item?.collectedAt || "").getTime();
    return Number.isFinite(value) ? value : 0;
  };
  const authorValue = (item) => String(item?.author || item?.authorHandle || "").trim();
  filtered.sort((a, b) => {
    if (aiXMonitorState.sort === "latest") return (timestamp(a) - timestamp(b)) * direction || Number(b.heatScore || 0) - Number(a.heatScore || 0) || Number(b.likes || 0) - Number(a.likes || 0);
    if (aiXMonitorState.sort === "author") return authorValue(a).localeCompare(authorValue(b), "zh-CN", { sensitivity: "base", numeric: true }) * direction || timestamp(b) - timestamp(a);
    if (aiXMonitorState.sort === "likes") return (Number(a.likes || 0) - Number(b.likes || 0)) * direction || Number(b.heatScore || 0) - Number(a.heatScore || 0) || timestamp(b) - timestamp(a);
    return (Number(a.heatScore || 0) - Number(b.heatScore || 0)) * direction || Number(b.likes || 0) - Number(a.likes || 0) || timestamp(b) - timestamp(a);
  });
  return filtered;
}

function aiXMonitorRow(item, index) {
  const title = aiIntelCoreTitle(item);
  const summary = String(item?.summary || item?.title || "").replace(/\s+/g, " ").trim();
  const date = aiXMonitorDate(item) || "日期未知";
  const selected = aiXMonitorState.selected.has(String(item.id));
  const author = String(item?.author || "X 作者");
  const handle = String(item?.authorHandle || "");
  const initials = escapeHtml(author.slice(0, 2).toUpperCase());
  const avatar = item?.avatarUrl ? `${initials}<img src="${escapeHtml(String(item.avatarUrl))}" alt="" loading="lazy" onerror="this.style.display='none'" />` : initials;
  const heat = Number(item?.heatScore || 0);
  const likes = Number(item?.likes || 0);
  const cover = Array.isArray(item?.media) ? item.media.find((media) => media?.previewUrl || media?.url) : null;
  const coverUrl = String(cover?.previewUrl || cover?.url || "").trim();
  return `<tr data-ai-x-row data-ai-x-id="${escapeHtml(String(item.id))}">
    <td class="is-check"><input type="checkbox" data-ai-x-select="${escapeHtml(String(item.id))}" ${selected ? "checked" : ""} aria-label="选择 ${escapeHtml(title)}" /></td>
    <td class="is-index">${index + 1}</td>
    <td class="ai-x-title-cell">${aiIntelOriginalLink(item, `<strong>${escapeHtml(title)}</strong><p>${escapeHtml(summary)}</p>`)}</td>
    <td class="ai-x-author-cell"><i>${avatar}</i><span><strong>${escapeHtml(author)}</strong><small>${escapeHtml(handle || "@未标注")}</small></span></td>
    <td class="ai-x-metric-cell"><b>${summary.length}</b><small>热度 ${heat} · 赞 ${likes}</small></td>
    <td>${coverUrl ? `<a class="ai-x-cover-link" href="${escapeHtml(coverUrl)}" target="_blank" rel="noreferrer"><img class="ai-x-cover-image" src="${escapeHtml(coverUrl)}" alt="${escapeHtml(cover?.alt || "推文封面")}" loading="lazy" /></a>` : `<span class="ai-x-cover-placeholder">无图</span>`}</td>
    <td>${escapeHtml(date)}</td>
  </tr>`;
}

function aiXObservatoryCard(item, index) {
  const title = aiIntelCoreTitle(item);
  const summary = String(item?.summary || item?.title || "").replace(/\s+/g, " ").trim();
  const author = String(item?.author || "X 作者");
  const handle = String(item?.authorHandle || "");
  const initials = escapeHtml(author.slice(0, 2).toUpperCase());
  const avatar = item?.avatarUrl ? `<img src="${escapeHtml(String(item.avatarUrl))}" alt="" loading="lazy" onerror="this.remove()" />` : initials;
  const cover = Array.isArray(item?.media) ? item.media.find((media) => media?.previewUrl || media?.url) : null;
  const coverUrl = String(cover?.previewUrl || cover?.url || "").trim();
  const language = aiXMonitorLanguage(item) === "zh" ? "中文" : aiXMonitorLanguage(item) === "en" ? "英文" : "其他";
  const archiveStatus = aiXArchiveStatus(item, index);
  const archiveLabel = aiXArchiveStatusLabel(archiveStatus);
  return `<article class="xobs-post${String(item.id) === String(aiXMonitorState.detailId) ? " active" : ""}" data-ai-x-row data-ai-x-id="${escapeHtml(String(item.id))}" tabindex="0"><b class="xobs-rank">${index + 1}</b><i class="xobs-avatar">${avatar}</i><div class="xobs-post-copy"><header><strong>${escapeHtml(author)}</strong><small>${escapeHtml(handle || "@未标注")}</small><time>${escapeHtml(String(item?.publishedAt || item?.collectedAt || "").slice(0, 16).replace("T", " "))}</time><em>热度 ${Number(item?.heatScore || 0)}</em></header><h3>${escapeHtml(title)}</h3><p>${escapeHtml(summary)}</p><footer><span>${language}</span><b>赞 ${Number(item?.likes || 0)}</b><b>热度 ${Number(item?.heatScore || 0)}</b><button type="button" class="xobs-inline-archive ${aiXArchiveStatusClass(archiveStatus)}" data-ai-x-archive="${escapeHtml(String(item.id))}">${archiveLabel}</button></footer></div>${coverUrl ? `<img class="xobs-cover" src="${escapeHtml(coverUrl)}" alt="${escapeHtml(cover?.alt || "推文封面")}" loading="lazy" />` : ""}</article>`;
}

function renderAiXDetailLegacy(items) {
  const panel = document.querySelector("#ai-x-detail-panel .ai-x-detail-body");
  if (!panel) return;
  const item = items.find((entry) => String(entry.id) === String(aiXMonitorState.detailId)) || items[0];
  if (!item) { panel.innerHTML = `<p class="ai-formal-empty">当前筛选没有可查看的推文</p>`; return; }
  aiXMonitorState.detailId = String(item.id);
  const cover = Array.isArray(item.media) ? item.media.find((media) => media?.previewUrl || media?.url) : null;
  const coverUrl = String(cover?.previewUrl || cover?.url || "").trim();
  const title = aiIntelCoreTitle(item);
  const relevance = Math.max(1, Math.min(99, Math.round(55 + Number(item.heatScore || 0) * .35)));
  const archiveStatus = aiXArchiveStatus(item, 0);
  const archiveJob = aiXMonitorState.archiveStatuses.get(String(item.id)) || {};
  const archiveProgress = Number(archiveJob.progress || 0);
  const archiveCompleteness = archiveJob.document?.completeness === "complete" ? "100%" : archiveProgress ? `${archiveProgress}%` : "未核验";
  panel.innerHTML = `<div class="xobs-detail-tabs"><button class="active" type="button">原文</button><button type="button" data-ai-translate-toggle>翻译</button></div><div class="xobs-detail-author"><i>${item?.avatarUrl ? `<img src="${escapeHtml(String(item.avatarUrl))}" alt="" />` : escapeHtml(String(item.author || "X").slice(0, 2))}</i><span><strong>${escapeHtml(item.author || "X 作者")}</strong><small>${escapeHtml(item.authorHandle || "@未标注")} · ${escapeHtml(String(item?.publishedAt || item?.collectedAt || "").slice(0, 16).replace("T", " "))}</small></span></div><h3>${escapeHtml(title)}</h3><p class="xobs-original-copy">${escapeHtml(String(item.summary || item.title || ""))}</p><p class="xobs-translation-copy" data-ai-translate="${escapeHtml(String(item.summary || item.title || ""))}" hidden>${escapeHtml(String(item.summary || item.title || ""))}</p>${coverUrl ? `<img class="ai-x-detail-cover" src="${escapeHtml(coverUrl)}" alt="推文封面" loading="lazy" />` : ""}<section class="xobs-score"><span>AI 相关性评分 <b>${relevance}<small>/100</small></b></span><i style="--score:${relevance}%"></i><small>规则评分：关键词、来源与互动热度综合计算</small></section><div class="ai-x-detail-meta"><span>语言<b>${aiXMonitorLanguage(item) === "zh" ? "中文" : "英文"}</b></span><span>内容类型<b>${coverUrl ? "图文" : "文字"}</b></span><span>热度<b>${Number(item.heatScore || 0)}</b></span><span>点赞<b>${Number(item.likes || 0)}</b></span></div><section class="xobs-deposit"><header><b>内容沉淀</b><em class="xobs-status ${aiXArchiveStatusClass(archiveStatus)}">${aiXArchiveStatusLabel(archiveStatus)}</em></header><div><span>完整度<strong>${archiveStatus === "complete" ? "100%" : archiveStatus === "downloading" ? "68%" : "待检测"}</strong></span><span>媒体<strong>${coverUrl ? "已发现" : "无图"}</strong></span><span>类型<strong>${coverUrl ? "图文" : "推文"}</strong></span></div><button type="button" data-ai-x-archive="${escapeHtml(String(item.id))}">${archiveStatus === "complete" ? "查看本地证据包" : "下载完整内容"}</button><button type="button" class="is-quiet" data-ai-x-add-corpus="${escapeHtml(String(item.id))}">加入蒸馏库</button></section>${item.url ? `<a class="ai-x-detail-link" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">在 X 查看原文 ↗</a>` : ""}`;
  const trust = item.authorHandle ? 86 : 62;
  panel.querySelector(".xobs-score")?.insertAdjacentHTML("afterend", `<section class="xobs-score xobs-trust"><span>来源可信度 <b>${trust}<small>/100</small></b></span><i style="--score:${trust}%"></i><small>规则评分：账户身份、历史采集稳定性与原文完整度</small></section>`);
  translateAiIntelNodes(panel);
}

function renderAiXDetail(items) {
  renderAiXDetailLegacy(items);
  const item = (Array.isArray(items) ? items : []).find((entry) => String(entry.id) === String(aiXMonitorState.detailId));
  const panel = document.querySelector("#ai-x-detail-panel .ai-x-detail-body");
  if (!item || !panel) return;
  const job = aiXMonitorState.archiveStatuses.get(String(item.id)) || {};
  const progress = Number(job.progress || 0);
  const completeness = job.document?.completeness === "complete" ? "100%" : progress ? `${progress}%` : "未核验";
  const completenessNode = panel.querySelector(".xobs-deposit span strong");
  if (completenessNode) completenessNode.textContent = completeness;
  const mediaNode = panel.querySelectorAll(".xobs-deposit span strong")[1];
  if (mediaNode && job.document) mediaNode.textContent = `${Number(job.document.downloadedMediaCount || 0)}/${Number(job.document.mediaCount || 0)}`;
}

function renderAiXMonitorPage(items, authors = state.aiIntel?.xAuthors || []) {
  const page = document.querySelector("#ai-x-monitor-page");
  if (!page) return;
  aiXMonitorState.items = Array.isArray(items) ? items : [];
  renderAiXMonitorAuthors(Array.isArray(authors) && authors.length ? authors : aiXMonitorState.items);
  const profileItem = aiXMonitorState.authorFilter
    ? aiXMonitorState.items.find((item) => String(item?.authorHandle || item?.author || item?.sourceId || "") === aiXMonitorState.authorFilter)
    : aiXMonitorState.items[0];
  const profileName = String(profileItem?.author || "全部采集账户");
  const profileHandle = String(profileItem?.authorHandle || (aiXMonitorState.authorFilter ? "" : `${aiXMonitorState.items.length} 条内容`));
  const profile = page.querySelector(".ai-x-profile");
  if (profile) {
    const strong = profile.querySelector("strong");
    const small = profile.querySelector("small");
    if (strong) strong.textContent = profileName;
    if (small) small.textContent = profileHandle;
  }
  if (!aiXMonitorState.dateInitialized && aiXMonitorState.items.length) {
    const latestDate = aiXMonitorState.items.map(aiXMonitorDate).filter(Boolean).sort().pop() || "";
    if (latestDate) {
      aiXMonitorState.dateFrom = latestDate;
      aiXMonitorState.dateTo = latestDate;
    }
    aiXMonitorState.dateInitialized = true;
  }
  const activeSide = ["posts", "long"].includes(aiXMonitorState.tab) ? aiXMonitorState.tab : "users";
  page.querySelectorAll("[data-ai-x-view]").forEach((button) => button.classList.toggle("active", button.dataset.aiXView === aiXMonitorState.tab));
  page.querySelectorAll("[data-ai-x-side]").forEach((button) => {
    const side = button.dataset.aiXSide || "";
    const active = side === "collected-user"
      ? Boolean(aiXMonitorState.authorFilter) && button.dataset.aiXAuthor === aiXMonitorState.authorFilter
      : side === activeSide;
    button.classList.toggle("active", active);
  });
  const filtered = aiXMonitorFilteredItems();
  renderAiXDetail(filtered);
  const totalPages = Math.max(1, Math.ceil(filtered.length / aiXMonitorState.pageSize));
  aiXMonitorState.page = Math.min(Math.max(1, aiXMonitorState.page), totalPages);
  const start = (aiXMonitorState.page - 1) * aiXMonitorState.pageSize;
  const visible = filtered.slice(start, start + aiXMonitorState.pageSize);
  const observatoryFeed = page.querySelector("#xobs-feed");
  if (observatoryFeed) {
    observatoryFeed.hidden = aiXMonitorState.display !== "table";
    observatoryFeed.innerHTML = aiXMonitorState.display === "table"
      ? (visible.length ? visible.map((item, index) => aiXObservatoryCard(item, start + index)).join("") : `<div class="xobs-empty"><strong>当前范围没有可显示的 AI 推文</strong><span>可调整日期、语言或账户筛选</span><button type="button" data-ai-x-reset>清除筛选</button></div>`)
      : "";
  }
  const totalItems = page.querySelector("#xobs-total-items");
  if (totalItems) totalItems.textContent = String(filtered.length);
  const updatedAt = page.querySelector("#xobs-updated-at");
  if (updatedAt) updatedAt.textContent = String(state.aiIntel?.updatedAt || "").slice(0, 19).replace("T", " ") || "等待数据";
  const sortSelect = page.querySelector("#ai-x-sort-select");
  if (sortSelect) {
    const value = `${aiXMonitorState.sort}:${aiXMonitorState.sortDirection}`;
    if ([...sortSelect.options].some((option) => option.value === value)) sortSelect.value = value;
  }
  const body = page.querySelector("#ai-x-monitor-body");
  if (body) {
    body.innerHTML = visible.length
      ? visible.map((item, index) => aiXMonitorRow(item, start + index)).join("")
      : `<tr><td colspan="7" class="ai-formal-empty">${aiXMonitorState.tab === "long" ? "暂无符合条件的长文" : aiXMonitorState.tab === "following" || aiXMonitorState.tab === "followers" ? "该视图暂未接入真实关系数据" : "暂无符合筛选条件的 AI 内容"}</td></tr>`;
  }
  const count = page.querySelector("#ai-x-monitor-count");
  if (count) count.textContent = `${filtered.length} 条`;
  const pageNumber = page.querySelector("#ai-x-monitor-page-number");
  const pageTotal = page.querySelector("#ai-x-monitor-page-total");
  if (pageNumber) pageNumber.textContent = String(aiXMonitorState.page);
  if (pageTotal) pageTotal.textContent = String(totalPages);
  const size = page.querySelector("#ai-x-monitor-page-size-select");
  if (size) size.value = String(aiXMonitorState.pageSize);
  page.querySelectorAll("[data-ai-x-sort]").forEach((button) => {
    const active = button.dataset.aiXSort === aiXMonitorState.sort && (button.dataset.aiXDirection || "desc") === aiXMonitorState.sortDirection;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
  page.querySelectorAll("[data-ai-x-language]").forEach((button) => {
    const active = button.dataset.aiXLanguage === aiXMonitorState.language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
  const fromInput = page.querySelector("#ai-x-date-from");
  const toInput = page.querySelector("#ai-x-date-to");
  if (fromInput) fromInput.value = aiXMonitorState.dateFrom;
  if (toInput) toInput.value = aiXMonitorState.dateTo;
  const title = page.querySelector("#ai-x-monitor-title");
  if (title) title.textContent = aiXMonitorState.tab === "long" ? "长文预览" : aiXMonitorState.tab === "posts" ? "推文列表" : aiXMonitorState.tab === "following" ? "关注用户" : "粉丝用户";
  page.querySelectorAll("[data-ai-x-page]").forEach((button) => {
    const action = button.dataset.aiXPage;
    button.disabled = (action === "first" || action === "prev") ? aiXMonitorState.page <= 1 : aiXMonitorState.page >= totalPages;
  });
  const selectedCount = page.querySelector("#ai-x-monitor-selected-count");
  if (selectedCount) selectedCount.textContent = String(aiXMonitorState.selected.size);
  const selectAll = page.querySelector("[data-ai-x-select-all]");
  if (selectAll) {
    selectAll.checked = visible.length > 0 && visible.every((item) => aiXMonitorState.selected.has(String(item.id)));
    selectAll.indeterminate = visible.some((item) => aiXMonitorState.selected.has(String(item.id))) && !selectAll.checked;
  }
  const tableWrap = page.querySelector(".ai-x-table-wrap");
  const gallery = page.querySelector("#ai-x-gallery-view");
  const stats = page.querySelector("#ai-x-stats-view");
  if (tableWrap) tableWrap.hidden = aiXMonitorState.display !== "table";
  if (gallery) {
    gallery.hidden = aiXMonitorState.display !== "gallery";
    gallery.innerHTML = aiXMonitorState.display === "gallery" ? (visible.length ? visible.map((item) => `<article class="ai-x-gallery-card">${aiIntelOriginalLink(item, `<strong>${escapeHtml(aiIntelCoreTitle(item))}</strong>`)}<p>${escapeHtml(String(item.summary || "").slice(0, 180))}</p><small>${escapeHtml(item.author || "X 作者")} · ${escapeHtml(aiXMonitorDate(item))} · 热度 ${Number(item.heatScore || 0)}</small></article>`).join("") : `<div class="ai-formal-empty">暂无内容</div>`) : "";
  }
  if (stats) {
    stats.hidden = aiXMonitorState.display !== "stats";
    if (aiXMonitorState.display === "stats") {
      const totalLikes = filtered.reduce((sum, item) => sum + Number(item.likes || 0), 0);
      const totalHeat = filtered.reduce((sum, item) => sum + Number(item.heatScore || 0), 0);
      const zhCount = filtered.filter((item) => aiXMonitorLanguage(item) === "zh").length;
      const enCount = filtered.filter((item) => aiXMonitorLanguage(item) === "en").length;
      const authors = aiXMonitorAuthors(filtered).slice(0, 5);
      const maxAuthor = Math.max(1, ...authors.map((author) => author.count));
      const buckets = new Map();
      filtered.forEach((item) => {
        const date = String(item?.publishedAt || item?.collectedAt || "");
        const hour = date.length >= 13 ? `${date.slice(5, 10)} ${date.slice(11, 13)}:00` : "未知时间";
        buckets.set(hour, (buckets.get(hour) || 0) + 1);
      });
      const trend = [...buckets.entries()].slice(-12);
      const maxTrend = Math.max(1, ...trend.map(([, count]) => count));
      stats.innerHTML = `<div class="ai-x-stats-head"><div><span>当前筛选结果</span><strong>${filtered.length}</strong><small>条 AI 相关内容</small></div><div><span>综合热度</span><strong>${totalHeat}</strong><small>点赞 ${totalLikes}</small></div><div><span>语言分布</span><strong>${zhCount}<small> 中文</small> / ${enCount}<small> 英文</small></strong></div></div><div class="ai-x-trend-panel"><header><b>内容热度趋势</b><small>按发布时间聚合 · ${aiXMonitorState.dateFrom || "全部日期"}${aiXMonitorState.dateTo ? ` 至 ${aiXMonitorState.dateTo}` : ""}</small></header><div class="ai-x-trend-bars">${trend.length ? trend.map(([label, count]) => `<span style="--bar:${Math.max(8, Math.round(count / maxTrend * 100))}%" title="${escapeHtml(label)}：${count} 条"><i></i><em>${count}</em><small>${escapeHtml(label.slice(-5))}</small></span>`).join("") : `<p class="ai-formal-empty">暂无足够数据形成趋势</p>`}</div></div><div class="ai-x-author-rank"><header><b>活跃作者排行</b><small>按采集内容数</small></header>${authors.length ? authors.map((author, index) => `<div><strong>${index + 1}</strong><span>${escapeHtml(author.name)}<small>${escapeHtml(author.handle || "@未标注")}</small></span><i style="--bar:${Math.max(8, Math.round(author.count / maxAuthor * 100))}%"></i><em>${author.count}</em></div>`).join("") : `<p class="ai-formal-empty">暂无作者数据</p>`}</div>`;
    }
  }
  renderAiXWorkspaceViews(filtered);
}

function aiIntelOriginalLink(item, innerHtml) {
  const url = String(item?.url || "").trim();
  return url
    ? `<a class="ai-original-link" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${innerHtml}</a>`
    : innerHtml;
}

async function translateAiIntelNodes(root) {
  const nodes = Array.from(root?.querySelectorAll?.("[data-ai-translate]") || []);
  if (!nodes.length) return;
  const texts = nodes.map((node) => node.dataset.aiTranslate || "");
  nodes.forEach((node) => { node.textContent = aiTranslationCache.get(node.dataset.aiTranslate || "") || node.dataset.aiTranslate || ""; });
  const missing = [...new Set(texts.filter((text) => text && !aiTranslationCache.has(text)))];
  if (!missing.length) return;
  const requestKey = missing.join("\u0001");
  if (!aiTranslationPending.has(requestKey)) {
    const request = fetchJson("/api/translate", { method: "POST", body: JSON.stringify({ texts: missing }) })
      .then((result) => {
        const translations = Array.isArray(result.translations) ? result.translations : [];
        missing.forEach((text, index) => aiTranslationCache.set(text, translations[index] || text));
      })
      .catch(() => missing.forEach((text) => aiTranslationCache.set(text, text)))
      .finally(() => aiTranslationPending.delete(requestKey));
    aiTranslationPending.set(requestKey, request);
  }
  await aiTranslationPending.get(requestKey);
  document.querySelectorAll("[data-ai-translate]").forEach((node) => {
    const text = node.dataset.aiTranslate || "";
    if (aiTranslationCache.has(text)) node.textContent = aiTranslationCache.get(text);
  });
}

function renderAiIntelData() {
  const payload = state.aiIntel || fallbackAiIntel;
  const kpis = payload.kpis || fallbackAiIntel.kpis;
  const badge = document.querySelector("#ai-intel-title + p + .ai-demo-badge");
  if (badge) badge.textContent = payload.error ? "服务离线" : "正式数据 · 公开来源";
  const sideStatus = document.querySelector(".ai-side-status strong");
  const sideNote = document.querySelector(".ai-side-status p");
  if (sideStatus) sideStatus.textContent = payload.error ? "本地模式 · 服务离线" : "本地模式 · 公开来源运行";
  if (sideNote) sideNote.textContent = `${kpis.sourcesActive || 0}/${kpis.sources || 0} 个来源已采集`;

  const cards = document.querySelectorAll("#ai-intel-dashboard article");
  const cardValues = [
    ["近24小时情报", kpis.items24h || 0, "公开来源采集"],
    ["近7天新增", kpis.items7d || 0, "保留原始证据"],
    ["关注项目", kpis.projects || 0, "项目实体待识别"],
    ["已连接来源", `${kpis.sourcesActive || 0}/${kpis.sources || 0}`, "公开页面 / RSS / Atom"],
    ["待人工研判", 0, "正式版不生成虚构判断"],
  ];
  cards.forEach((card, index) => {
    const definition = cardValues[index];
    if (!definition) return;
    const small = card.querySelector("small");
    const strong = card.querySelector("strong");
    const note = card.querySelector("p");
    if (small) small.textContent = definition[0];
    if (strong) strong.textContent = definition[1];
    if (note) note.textContent = definition[2];
  });

  const items = Array.isArray(payload.items) ? payload.items : [];
  const xItems = Array.isArray(payload.xItems) ? payload.xItems : items.filter((item) => item.sourceId === "x-ai-list" || item.sourceKind === "x");
  const priorityItems = xItems;
  const eventHeader = document.querySelector("#ai-intel-events .ai-panel-header > div");
  if (eventHeader) {
    const label = eventHeader.querySelector("span");
    const title = eventHeader.querySelector("h3");
    if (label) label.textContent = "AI X LIST";
    if (title) title.textContent = "X List 实时情报";
  }
  const eventList = document.querySelector("#ai-intel-events .ai-event-list");
  if (eventList) {
    eventList.innerHTML = priorityItems.length
      ? priorityItems.slice(0, 6).map((item, index) => {
          const mark = aiIntelSourceMark(item);
          const coreTitle = aiIntelCoreTitle(item);
          const heatScore = Number(item.heatScore || 0);
          const likes = Number(item.likes || 0);
          return `<article data-ai-searchable>
            <span class="ai-source-mark ${mark.cls}">${mark.text}</span>
            <div>${aiIntelOriginalLink(item, `<strong data-ai-translate="${escapeHtml(coreTitle)}">${escapeHtml(coreTitle)}</strong>`)}<small>#${index + 1} · 热度 ${heatScore} · 赞 ${likes} · ${escapeHtml(aiIntelDateLabel(item.publishedAt || item.collectedAt))}${item.url ? " · 点击查看原文" : ""}</small></div>
            <span class="ai-tag is-blue">${escapeHtml(item.sourceCategory || "行业情报")}</span><em>证据 <b>${item.url ? "1" : "0"}</b></em>
          </article>`;
        }).join("")
      : `<div class="ai-formal-empty">暂无 AI 相关的 X List 内容。非 AI 内容已自动屏蔽。</div>`;
  }

  const xDisplayItems = xItems.slice(0, 5);
  const xPanelTitle = document.querySelector("#ai-intel-x-title");
  if (xPanelTitle) xPanelTitle.textContent = xItems.length ? "X 监控流" : "AI 行业信息流";
  const xPanelLabel = document.querySelector("#ai-intel-x-stream .ai-panel-header > div > span");
  if (xPanelLabel) xPanelLabel.textContent = xItems.length ? "AI X LIST" : "AI INTEL FEED";
  const xList = document.querySelector("#ai-intel-x-stream .ai-x-stream-list");
  if (xList) {
    xList.innerHTML = xDisplayItems.length
      ? xDisplayItems.map((item) => {
          const coreTitle = aiIntelCoreTitle(item);
          const heatScore = Number(item.heatScore || 0);
          const likes = Number(item.likes || 0);
          return `<article data-ai-searchable>
          <span class="ai-x-avatar">${escapeHtml((item.author || item.sourceName || "AI").slice(0, 2).toUpperCase())}</span>
          <div class="ai-x-content">
            <header><strong>${escapeHtml(item.author || item.sourceName || "AI 行业情报")}</strong><small>${escapeHtml(item.sourceName || "公开来源")} · ${escapeHtml(aiIntelDateLabel(item.publishedAt || item.collectedAt))}</small><em>热度 ${heatScore} · 赞 ${likes}</em></header>
            ${aiIntelOriginalLink(item, `<p class="ai-original-text">${escapeHtml(coreTitle)}</p><p class="ai-translated-text" data-ai-translate="${escapeHtml(coreTitle)}">${escapeHtml(coreTitle)}</p>`)}
            <footer><span>${escapeHtml(item.sourceCategory || "AI 行业")}</span><span>${escapeHtml(item.itemType || "情报")}</span>${item.url ? `<a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">查看原文</a>` : ""}<a href="https://translate.google.com/?sl=auto&tl=zh-CN&text=${encodeURIComponent(coreTitle)}&op=translate" target="_blank" rel="noreferrer">翻译原文</a></footer>
          </div>
        </article>`;
        }).join("")
      : `<div class="ai-formal-empty">暂无 AI 相关的 X List 内容。非 AI 内容已自动屏蔽。</div>`;
  }
  translateAiIntelNodes(document.querySelector("#ai-intel-workspace"));
  renderAiXMonitorPage(xItems);

  const projectTable = document.querySelector("#ai-intel-open-source .ai-project-table");
  if (projectTable) {
    const head = projectTable.querySelector(".is-head");
    const projects = items.filter((item) => item.projectName || item.itemType === "project" || item.itemType === "release").slice(0, 6);
    projectTable.innerHTML = `${head ? head.outerHTML : ""}${projects.length ? projects.map((item) => {
      const mark = aiIntelSourceMark(item);
      return `<div class="ai-project-row" role="row" data-ai-searchable><strong><i>${mark.text}</i>${escapeHtml(item.projectName || item.title || "未命名项目")}</strong><span class="ai-tag is-blue">${escapeHtml(item.sourceCategory || "开源项目")}</span><b>--</b><span class="ai-formal-project-status">已采集</span><em>${escapeHtml(aiIntelRelativeTime(item.publishedAt || item.collectedAt))}</em></div>`;
    }).join("") : `<div class="ai-formal-empty">等待 GitHub、Hugging Face 或 ModelScope 的项目数据。</div>`}`;
  }

  const sourceList = document.querySelector("#ai-intel-sources .ai-source-health-list");
  if (sourceList) {
    const sources = Array.isArray(payload.sources) ? payload.sources : [];
    const visibleSources = [...sources.slice(0, 6), ...sources.filter((source) => source.id === "x-ai-list")].filter((source, index, list) => list.findIndex((item) => item.id === source.id) === index);
    sourceList.innerHTML = visibleSources.length
      ? visibleSources.map((source) => {
          const mark = aiIntelSourceMark({ sourceKind: source.kind, sourceId: source.id });
          const stateLabel = source.state === "ready" ? "已连接" : source.state === "partial" ? "部分成功" : source.state === "error" ? "采集失败" : "待采集";
          return `<article><span class="ai-source-mark ${mark.cls}">${mark.text}</span><strong>${escapeHtml(source.name)}</strong><em>${stateLabel}</em><small>${escapeHtml(source.method === "local" ? "本地桥接" : source.method.toUpperCase())} · ${source.items24h || 0} 条/24h</small></article>`;
        }).join("")
      : `<div class="ai-formal-empty">来源目录尚未初始化。</div>`;
  }

  const chart = document.querySelector("#ai-intel-trends .ai-trend-chart");
  const trendPanel = document.querySelector("#ai-intel-trends");
  if (chart) {
    chart.hidden = true;
    chart.style.display = "none";
  }
  if (trendPanel && !trendPanel.querySelector(".ai-formal-trend-state")) {
    const node = document.createElement("div");
    node.className = "ai-formal-trend-state";
    node.textContent = kpis.items7d ? `已采集 ${kpis.items7d} 条近7天情报，趋势计算将在聚合层完成。` : "等待连续采集 7 天后生成真实趋势。";
    trendPanel.appendChild(node);
  }

  const judgementList = document.querySelector("#ai-intel-judgement .ai-judgement-list");
  if (judgementList) judgementList.innerHTML = `<div class="ai-formal-empty">分析层尚未生成研判结论，当前只展示公开来源原始情报。</div>`;
}

function renderAiIntelWorkspace() {
  const select = $("#project-switcher");
  if (select) select.value = state.workspaceView === "ai-intel" ? "ai-intel" : "market";
  const monitorActive = state.workspaceView === "ai-intel" && state.aiSection === "x-monitor";
  const workspace = document.querySelector("#ai-intel-workspace");
  const commandbar = document.querySelector("#ai-intel-workspace .ai-intel-commandbar");
  if (workspace) workspace.classList.toggle("is-x-monitor", monitorActive);
  if (commandbar) { commandbar.hidden = monitorActive; commandbar.style.display = monitorActive ? "none" : ""; }
  const scroll = document.querySelector("#ai-intel-workspace .ai-intel-scroll");
  const monitorPage = document.querySelector("#ai-x-monitor-page");
  if (scroll) { scroll.hidden = monitorActive; scroll.style.display = monitorActive ? "none" : ""; }
  if (monitorPage) { monitorPage.hidden = !monitorActive; monitorPage.style.display = monitorActive ? "block" : "none"; }
  if (monitorActive) renderAiXMonitorPage(state.aiIntel?.xItems || []);
  document.querySelectorAll("#ai-primary-nav [data-ai-section]").forEach((button) => {
    const active = button.dataset.aiSection === (state.aiSection || "dashboard");
    button.classList.toggle("active", active);
    button.setAttribute("aria-current", active ? "page" : "false");
  });
  if (state.workspaceView === "ai-intel" && !standaloneWarRoom) {
    document.title = "八月AI行业情报 · 八月AI实验室";
  }
}

function focusAiIntelTarget(targetId) {
  const node = document.getElementById(targetId || "ai-intel-dashboard");
  if (!node) return;
  node.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  document.querySelectorAll("#ai-intel-workspace .nav-focus-ring").forEach((item) => item.classList.remove("nav-focus-ring"));
  if (node.classList.contains("ai-intel-panel")) {
    node.classList.add("nav-focus-ring");
    window.setTimeout(() => node.classList.remove("nav-focus-ring"), 1200);
  }
}

function filterAiIntelDemo(query) {
  const normalized = String(query || "").trim().toLocaleLowerCase("zh-CN");
  document.querySelectorAll("#ai-intel-workspace [data-ai-searchable]").forEach((node) => {
    node.hidden = Boolean(normalized) && !node.textContent.toLocaleLowerCase("zh-CN").includes(normalized);
  });
}

function renderMobileView() {
  const shell = document.querySelector(".signaldesk-v2");
  if (!shell) return;
  const activeMobileView = state.workspaceView === "ai-intel"
    ? "ai-intel"
    : state.workspaceView === "tech-earnings"
    ? "earnings"
    : state.workspaceView === "index-futures"
      ? "futures"
      : state.workspaceView === "war-room"
        ? "war-room"
        : state.workspaceView === "sector-flow"
          ? "sector-flow"
        : state.workspaceView === "etf-flow"
          ? "etf-flow"
        : state.workspaceView === "stock-flow"
          ? "stock-flow"
        : state.workspaceView === "treasury"
          ? "treasury"
      : state.workspaceView === "industry-observer"
      ? "industry"
      : state.mobileView || "feed";
  shell.dataset.mobileView = activeMobileView;
  document.querySelectorAll("#mobile-view-tabs [data-mobile-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.mobileView === activeMobileView);
  });
}

function renderWorkspaceView() {
  const shell = document.querySelector(".signaldesk-v2");
  if (!shell) return;
  shell.dataset.workspaceView = state.workspaceView || "overview";
  shell.dataset.navSection = state.navSection || "overview";
  renderAiIntelWorkspace();
  if (state.workspaceView !== "ai-intel" && !standaloneWarRoom) {
    document.title = document.querySelector(".stock-flow-standalone") ? "个股资金流速" : "信源优先监控台";
  }
  document.querySelectorAll("#primary-nav [data-workspace-view]").forEach((button) => {
    const isActive =
      button.dataset.workspaceView === state.workspaceView &&
      (state.workspaceView !== "overview" || button.textContent.trim() === "总览");
    button.classList.toggle("active", isActive);
    const target = button.dataset.navTarget || button.dataset.workspaceView || "overview";
    const activeTarget = state.workspaceView !== "overview" ? state.workspaceView : state.navSection || "overview";
    const navActive = target === activeTarget;
    button.classList.toggle("active", navActive);
    button.setAttribute("aria-current", navActive ? "page" : "false");
  });
}

function mobileViewForNavTarget(target) {
  if (target === "ai-intel") return "ai-intel";
  if (target === "tech-earnings") return "earnings";
  if (target === "index-futures") return "futures";
  if (target === "war-room") return "war-room";
  if (target === "sector-flow") return "sector-flow";
  if (target === "etf-flow") return "etf-flow";
  if (target === "stock-flow") return "stock-flow";
  if (target === "treasury") return "treasury";
  if (target === "industry-observer") return "industry";
  if (target === "map") return "map";
  if (target === "review") return "review";
  return "feed";
}

function updateNavUrl(target) {
  const url = new URL(window.location.href);
  if (["tech-earnings", "index-futures", "war-room", "sector-flow", "etf-flow", "stock-flow", "treasury", "industry-observer", "ai-intel"].includes(target)) {
    url.searchParams.set("workspace", target);
    url.searchParams.delete("nav");
    if (target === "ai-intel") {
      url.searchParams.set("section", state.aiSection || "dashboard");
    } else {
      url.searchParams.delete("section");
    }
  } else {
    url.searchParams.delete("workspace");
    url.searchParams.delete("section");
    if (target && target !== "overview") {
      url.searchParams.set("nav", target);
    } else {
      url.searchParams.delete("nav");
    }
  }
  window.history.replaceState({}, "", url);
}

function focusWorkspaceTarget(target) {
  const selectors = {
    overview: "#overview-section",
    feed: "#feed-section",
    map: "#market-map-section",
    review: "#manual-review-section",
    sources: "#data-source-section",
    groups: "#group-section",
    settings: "#settings-center-workspace",
    "tech-earnings": "#tech-earnings-workspace",
    "index-futures": "#index-futures-workspace",
    "war-room": "#war-room-workspace",
    "sector-flow": "#sector-flow-workspace",
    "etf-flow": "#etf-flow-workspace",
    "stock-flow": "#stock-flow-workspace",
    treasury: "#treasury-workspace",
    "industry-observer": "#industry-observer-workspace",
    "ai-intel": "#ai-intel-workspace",
  };
  const node = document.querySelector(selectors[target] || selectors.overview);
  if (!node) return;
  node.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  document.querySelectorAll(".nav-focus-ring").forEach((item) => item.classList.remove("nav-focus-ring"));
  node.classList.add("nav-focus-ring");
  window.setTimeout(() => node.classList.remove("nav-focus-ring"), 1200);
}

function bindEvents() {
  $("#project-switcher")?.addEventListener("change", (event) => {
    const project = event.target.value;
    if (project === "ai-intel") {
      state.workspaceView = "ai-intel";
      state.navSection = "ai-intel";
      state.mobileView = "ai-intel";
      state.aiSection = state.aiSection || "dashboard";
      updateAiIntelUrl();
    } else {
      state.workspaceView = "overview";
      state.navSection = "overview";
      state.mobileView = "feed";
      updateNavUrl("overview");
    }
    renderWorkspaceView();
    renderMobileView();
    window.requestAnimationFrame(() => {
      if (state.workspaceView === "ai-intel") focusAiIntelTarget("ai-intel-dashboard");
      else focusWorkspaceTarget("overview");
    });
    loadData();
  });

  $("#ai-primary-nav")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-ai-section]");
    if (!button) return;
    state.workspaceView = "ai-intel";
    state.navSection = "ai-intel";
    state.aiSection = button.dataset.aiSection || "dashboard";
    updateAiIntelUrl();
    renderWorkspaceView();
    window.requestAnimationFrame(() => focusAiIntelTarget(button.dataset.aiTarget));
  });

  $("#ai-intel-search")?.addEventListener("input", (event) => {
    filterAiIntelDemo(event.target.value);
  });

  $("#ai-x-monitor-search")?.addEventListener("input", (event) => {
    aiXMonitorState.query = event.target.value || "";
    aiXMonitorState.page = 1;
    renderAiXMonitorPage(state.aiIntel?.xItems || []);
  });
  ["#ai-x-date-from", "#ai-x-date-to"].forEach((selector) => $(selector)?.addEventListener("change", (event) => {
    if (selector.endsWith("from")) aiXMonitorState.dateFrom = event.target.value || "";
    else aiXMonitorState.dateTo = event.target.value || "";
    aiXMonitorState.page = 1;
    renderAiXMonitorPage(state.aiIntel?.xItems || []);
  }));
  $("#ai-x-sort-select")?.addEventListener("change", (event) => {
    const [sort, direction] = String(event.target.value || "heat:desc").split(":");
    aiXMonitorState.sort = sort || "heat";
    aiXMonitorState.sortDirection = direction || "desc";
    aiXMonitorState.page = 1;
    renderAiXMonitorPage(state.aiIntel?.xItems || []);
  });
  $("#xobs-account-search")?.addEventListener("input", (event) => {
    aiXMonitorState.authorQuery = event.target.value || "";
    renderAiXMonitorAuthors(state.aiIntel?.xAuthors || aiXMonitorState.items);
  });
  $("#ai-x-monitor-page-size-select")?.addEventListener("change", (event) => {
    aiXMonitorState.pageSize = Number(event.target.value) || 50;
    aiXMonitorState.page = 1;
    renderAiXMonitorPage(state.aiIntel?.xItems || []);
  });

  $("#ai-intel-refresh")?.addEventListener("click", async () => {
    const button = $("#ai-intel-refresh");
    if (button) button.disabled = true;
    try {
      const result = await fetchJson("/api/ai/refresh", { method: "POST", body: "{}" });
      state.aiIntel = await fetchJson("/api/ai/dashboard");
      renderAiIntelData();
      showToast(`公开来源采集完成：新增 ${result.new || 0} 条，读取 ${result.fetched || 0} 条`);
    } catch (error) {
      showToast(`公开来源采集失败：${error.message || "服务不可用"}`);
    } finally {
      if (button) button.disabled = false;
    }
  });

  $(".main-area")?.addEventListener("click", (event) => {
    const xWorkspace = event.target.closest("[data-ai-x-workspace]");
    if (xWorkspace) {
      const workspace = xWorkspace.dataset.aiXWorkspace || "stream";
      aiXMonitorState.workspace = workspace;
      if (workspace === "stream") aiXMonitorState.display = "table";
      if (workspace === "trend") aiXMonitorState.display = "stats";
      renderAiXMonitorPage(state.aiIntel?.xItems || []);
      return;
    }
    const xSourceTab = event.target.closest("[data-ai-x-source-tab]");
    if (xSourceTab) {
      aiXMonitorState.sourceTab = xSourceTab.dataset.aiXSourceTab || "accounts";
      document.querySelectorAll("[data-ai-x-source-tab]").forEach((button) => button.classList.toggle("active", button === xSourceTab));
      const label = { accounts: "账户", lists: "List列表", groups: "分组", rules: "采集规则" }[aiXMonitorState.sourceTab] || "账户";
      showToast(`${label}视图已切换`);
      if (aiXMonitorState.sourceTab === "lists") window.open("https://x.com/i/lists/2091456967848120605", "_blank", "noopener,noreferrer");
      return;
    }
    const xExpandAccounts = event.target.closest("[data-ai-x-expand-accounts]");
    if (xExpandAccounts) {
      aiXMonitorState.accountsExpanded = !aiXMonitorState.accountsExpanded;
      renderAiXMonitorAuthors(state.aiIntel?.xAuthors || aiXMonitorState.items);
      return;
    }
    const xArchive = event.target.closest("[data-ai-x-archive]");
    if (xArchive) {
      event.stopPropagation();
      const id = String(xArchive.dataset.aiXArchive || "");
      const item = aiXMonitorState.items.find((entry) => String(entry.id) === id);
      if (!item) return;
      const status = aiXArchiveStatus(item);
      if (status === "complete") {
        showToast("本地证据包已存在，可从详情面板查看");
        return;
      }
      xArchive.disabled = true;
      fetchJson("/api/ai/x/archive", { method: "POST", body: JSON.stringify({ itemIds: [Number(id)] }) })
        .then((payload) => { aiXMonitorState.workspace = "downloads"; showToast(payload?.queued ? "已加入本地归档队列" : "该内容已有归档任务"); return refreshAiXArchiveJobs(); })
        .catch((error) => showToast(`归档启动失败：${error.message || "服务不可用"}`))
        .finally(() => { xArchive.disabled = false; });
      return;
    }
    const xArchiveFilter = event.target.closest("[data-ai-x-archive-filter]");
    if (xArchiveFilter) {
      aiXMonitorState.archiveFilter = xArchiveFilter.dataset.aiXArchiveFilter || "all";
      renderAiXMonitorPage(state.aiIntel?.xItems || []);
      return;
    }
    const xBatchArchive = event.target.closest("[data-ai-x-batch-archive], [data-ai-x-download-all]");
    if (xBatchArchive) {
      const targets = aiXMonitorFilteredItems().filter((item) => aiXArchiveStatus(item) === "unarchived").slice(0, 100);
      if (!targets.length) { showToast("当前筛选没有可下载内容"); return; }
      aiXMonitorState.workspace = xBatchArchive.hasAttribute("data-ai-x-download-all") ? "downloads" : aiXMonitorState.workspace;
      fetchJson("/api/ai/x/archive", { method: "POST", body: JSON.stringify({ itemIds: targets.map((item) => Number(item.id)) }) })
        .then((payload) => { showToast(`已加入 ${Number(payload?.queued || 0)} 条本地归档任务`); return refreshAiXArchiveJobs(); })
        .catch((error) => showToast(`批量归档失败：${error.message || "服务不可用"}`));
      return;
    }
    const xJobAction = event.target.closest("[data-ai-x-job-action]");
    if (xJobAction) {
      const item = aiXMonitorState.items.find((entry) => String(entry.id) === String(xJobAction.dataset.aiXJobAction || ""));
      if (!item) return;
      const current = aiXArchiveStatus(item);
      const action = ["running", "queued"].includes(current) ? "pause" : current === "paused" ? "resume" : "retry";
      fetchJson("/api/ai/x/archive/control", { method: "POST", body: JSON.stringify({ itemId: Number(item.id), action }) })
        .then(() => { showToast(action === "pause" ? "任务已暂停" : action === "resume" ? "任务已继续" : "已重新加入归档队列"); return refreshAiXArchiveJobs(); })
        .catch((error) => showToast(`任务操作失败：${error.message || "服务不可用"}`));
      return;
    }
    const xAddCorpus = event.target.closest("[data-ai-x-add-corpus]");
    if (xAddCorpus) {
      const item = aiXMonitorState.items.find((entry) => String(entry.id) === String(xAddCorpus.dataset.aiXAddCorpus || ""));
      if (!item) return;
      if (aiXArchiveStatus(item) !== "complete") { showToast("请先完成全文归档和完整性核验"); return; }
      fetchJson("/api/ai/x/corpus", { method: "POST", body: JSON.stringify({ itemIds: [Number(item.id)] }) })
        .then((payload) => { if (payload?.added?.length) { aiXMonitorState.workspace = "corpus"; showToast("已加入蒸馏语料库"); return refreshAiXArchiveJobs(); } showToast(payload?.skipped?.[0]?.reason || "加入语料库失败"); })
        .catch((error) => showToast(`加入语料库失败：${error.message || "服务不可用"}`));
      return;
    }
    const xSort = event.target.closest("[data-ai-x-sort]");
    if (xSort) {
      aiXMonitorState.sort = xSort.dataset.aiXSort || "latest";
      aiXMonitorState.sortDirection = xSort.dataset.aiXDirection || "desc";
      aiXMonitorState.page = 1;
      renderAiXMonitorPage(state.aiIntel?.xItems || []);
      return;
    }
    const xLanguage = event.target.closest("[data-ai-x-language]");
    if (xLanguage) {
      aiXMonitorState.language = xLanguage.dataset.aiXLanguage || "all";
      aiXMonitorState.page = 1;
      renderAiXMonitorPage(state.aiIntel?.xItems || []);
      return;
    }
    const xRecollect = event.target.closest("[data-ai-x-recollect]");
    if (xRecollect) {
      event.stopPropagation();
      const button = xRecollect;
      button.disabled = true;
      fetchJson("/api/collector/ai-x/start", { method: "POST", body: "{}" })
        .then(() => showToast("已发起 X List 补采，稍后会更新该账户内容"))
        .catch((error) => showToast(`补采启动失败：${error.message || "服务不可用"}`))
        .finally(() => { button.disabled = false; });
      return;
    }
    const xSide = event.target.closest("[data-ai-x-side]");
    if (xSide) {
      const sideAction = xSide.dataset.aiXSide || "";
      const monitorPage = document.querySelector("#ai-x-monitor-page");
      const layout = monitorPage?.querySelector(".ai-x-monitor-layout");
      const setSideActive = (key) => monitorPage?.querySelectorAll("[data-ai-x-side]").forEach((button) => {
        const side = button.dataset.aiXSide || "";
        const active = side === "collected-user"
          ? key === "collected-user" && button.dataset.aiXAuthor === aiXMonitorState.authorFilter
          : side === key;
        button.classList.toggle("active", active);
      });
      if (sideAction === "collapse") {
        const collapsed = layout?.classList.toggle("is-sidebar-collapsed");
        xSide.setAttribute("aria-label", collapsed ? "展开菜单" : "收起菜单");
        return;
      }
      if (["posts", "long"].includes(sideAction)) {
        aiXMonitorState.tab = sideAction;
        aiXMonitorState.page = 1;
        monitorPage?.querySelectorAll("[data-ai-x-view]").forEach((button) => button.classList.toggle("active", button.dataset.aiXView === sideAction));
        setSideActive(sideAction);
        renderAiXMonitorPage(state.aiIntel?.xItems || []);
        return;
      }
      if (sideAction === "users") {
        setSideActive(sideAction);
        showToast("用户视图已定位到当前采集用户，可从左侧继续切换列表内容");
        return;
      }
      if (sideAction === "lists") {
        setSideActive(sideAction);
        window.open("https://x.com/i/lists/2091456967848120605", "_blank", "noopener,noreferrer");
        return;
      }
      if (sideAction === "downloads") {
        setSideActive(sideAction);
        monitorPage?.querySelector("[data-ai-x-export]")?.click();
        showToast("已生成当前筛选结果下载文件");
        return;
      }
      if (sideAction === "logs") {
        setSideActive(sideAction);
        showToast("采集日志：X List 内容已按 AI 相关性过滤并按热度排序");
        return;
      }
      if (sideAction === "folder-create") {
        const folderGroup = xSide.closest(".ai-x-folder-group");
        if (folderGroup && !folderGroup.querySelector("[data-ai-x-folder]") ) {
          const folder = document.createElement("button");
          folder.type = "button";
          folder.dataset.aiXFolder = "ai-intel";
          folder.dataset.aiXSide = "folder-ai";
          folder.textContent = "AI 行业情报";
          folderGroup.appendChild(folder);
          showToast("已创建文件夹：AI 行业情报");
        } else {
          showToast("文件夹已存在，可继续使用当前文件夹");
        }
        return;
      }
      if (sideAction === "folder-ai") {
        setSideActive(sideAction);
        aiXMonitorState.query = "";
        const search = document.querySelector("#ai-x-monitor-search");
        if (search) search.value = "";
        renderAiXMonitorPage(state.aiIntel?.xItems || []);
        showToast("已打开 AI 行业情报文件夹");
        return;
      }
      if (sideAction === "collected-user") {
        aiXMonitorState.tab = "posts";
        aiXMonitorState.authorFilter = xSide.dataset.aiXAuthor || "";
        aiXMonitorState.page = 1;
        monitorPage?.querySelectorAll("[data-ai-x-view]").forEach((button) => button.classList.toggle("active", button.dataset.aiXView === "posts"));
        setSideActive(sideAction);
        renderAiXMonitorPage(state.aiIntel?.xItems || []);
        showToast("已打开采集用户 Adrian Punk 的 AI 内容");
        return;
      }
    }
    const xBack = event.target.closest("[data-ai-x-back]");
    if (xBack) {
      state.aiSection = "dashboard";
      updateAiIntelUrl();
      renderWorkspaceView();
      renderAiIntelData();
      window.requestAnimationFrame(() => focusAiIntelTarget("ai-intel-dashboard"));
      return;
    }
    const xView = event.target.closest("[data-ai-x-view]");
    if (xView) {
      aiXMonitorState.tab = xView.dataset.aiXView || "posts";
      aiXMonitorState.page = 1;
      document.querySelectorAll("[data-ai-x-view]").forEach((button) => button.classList.toggle("active", button === xView));
      const sideKey = ["posts", "long"].includes(aiXMonitorState.tab) ? aiXMonitorState.tab : aiXMonitorState.tab === "following" || aiXMonitorState.tab === "followers" ? "users" : "posts";
      document.querySelectorAll("#ai-x-monitor-page [data-ai-x-side]").forEach((button) => {
        const side = button.dataset.aiXSide || "";
        button.classList.toggle("active", side !== "collected-user" && side === sideKey);
      });
      renderAiXMonitorPage(state.aiIntel?.xItems || []);
      return;
    }
    const xDisplay = event.target.closest("[data-ai-x-display]");
    if (xDisplay) {
      aiXMonitorState.display = xDisplay.dataset.aiXDisplay || "table";
      document.querySelectorAll("[data-ai-x-display]").forEach((button) => button.classList.toggle("active", button === xDisplay));
      renderAiXMonitorPage(state.aiIntel?.xItems || []);
      return;
    }
    const xPage = event.target.closest("[data-ai-x-page]");
    if (xPage && !xPage.disabled) {
      const totalPages = Math.max(1, Math.ceil(aiXMonitorFilteredItems().length / aiXMonitorState.pageSize));
      const action = xPage.dataset.aiXPage;
      aiXMonitorState.page = action === "first" ? 1 : action === "last" ? totalPages : action === "prev" ? Math.max(1, aiXMonitorState.page - 1) : Math.min(totalPages, aiXMonitorState.page + 1);
      renderAiXMonitorPage(state.aiIntel?.xItems || []);
      return;
    }
    const xOpen = event.target.closest("[data-ai-x-open]");
    if (xOpen) { window.open("https://x.com/i/lists/2091456967848120605", "_blank", "noopener,noreferrer"); return; }
    const xToggleFilter = event.target.closest("[data-ai-x-toggle-filter]");
    if (xToggleFilter) {
      const dateFilter = document.querySelector("#ai-x-monitor-page .ai-x-date-filter");
      if (dateFilter) dateFilter.hidden = !dateFilter.hidden;
      return;
    }
    const xClear = event.target.closest("[data-ai-x-clear], [data-ai-x-reset]");
    if (xClear) {
      aiXMonitorState.query = "";
      aiXMonitorState.authorFilter = "";
      aiXMonitorState.dateFrom = "";
      aiXMonitorState.dateTo = "";
      aiXMonitorState.sort = "heat";
      aiXMonitorState.sortDirection = "desc";
      aiXMonitorState.language = "all";
      aiXMonitorState.archiveFilter = "all";
      aiXMonitorState.page = 1;
      const search = document.querySelector("#ai-x-monitor-search");
      const from = document.querySelector("#ai-x-date-from");
      const to = document.querySelector("#ai-x-date-to");
      if (search) search.value = "";
      if (from) from.value = "";
      if (to) to.value = "";
      renderAiXMonitorPage(state.aiIntel?.xItems || []);
      return;
    }
    const xExport = event.target.closest("[data-ai-x-export]");
    if (xExport) {
      const rows = aiXMonitorFilteredItems();
      const csv = [["标题", "作者", "热度", "点赞", "日期", "原文"], ...rows.map((item) => [aiIntelCoreTitle(item), item.author || "", item.heatScore || 0, item.likes || 0, aiXMonitorDate(item), item.url || ""])].map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\n");
      const link = document.createElement("a");
      link.href = URL.createObjectURL(new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" }));
      link.download = "ai-x-list.csv";
      link.click();
      URL.revokeObjectURL(link.href);
      return;
    }
    const xRow = event.target.closest("[data-ai-x-row]");
    if (xRow && !event.target.closest("input, a, button")) {
      aiXMonitorState.detailId = xRow.dataset.aiXId || "";
      renderAiXMonitorPage(state.aiIntel?.xItems || []);
      return;
    }
    const translateToggle = event.target.closest("[data-ai-translate-toggle]");
    if (translateToggle) {
      const detail = translateToggle.closest(".ai-x-detail-body");
      const original = detail?.querySelector(".xobs-original-copy");
      const translated = detail?.querySelector(".xobs-translation-copy");
      if (original && translated) {
        original.hidden = true;
        translated.hidden = false;
        detail.querySelectorAll(".xobs-detail-tabs button").forEach((button) => button.classList.toggle("active", button === translateToggle));
      }
      return;
    }
    const originalToggle = event.target.closest(".xobs-detail-tabs button:first-child");
    if (originalToggle) {
      const detail = originalToggle.closest(".ai-x-detail-body");
      const original = detail?.querySelector(".xobs-original-copy");
      const translated = detail?.querySelector(".xobs-translation-copy");
      if (original && translated) {
        original.hidden = false;
        translated.hidden = true;
        detail.querySelectorAll(".xobs-detail-tabs button").forEach((button) => button.classList.toggle("active", button === originalToggle));
      }
      return;
    }
    if (event.target.closest("[data-ai-x-detail-close]")) {
      const body = document.querySelector("#ai-x-detail-panel .ai-x-detail-body");
      if (body) body.innerHTML = `<p class="ai-formal-empty">选择一条推文查看详情</p>`;
      aiXMonitorState.detailId = "";
      return;
    }
    const xRefresh = event.target.closest("[data-ai-x-refresh]");
    if (xRefresh) {
      xRefresh.disabled = true;
      fetchJson("/api/ai/dashboard").then((payload) => { state.aiIntel = payload; renderAiIntelData(); showToast("X List 内容已刷新"); }).catch((error) => showToast(`X List 刷新失败：${error.message || "服务不可用"}`)).finally(() => { xRefresh.disabled = false; });
      return;
    }
    const filterButton = event.target.closest("[data-ai-x-filter]");
    if (filterButton) {
      document.querySelectorAll("[data-ai-x-filter]").forEach((button) => button.classList.toggle("active", button === filterButton));
      const kind = filterButton.dataset.aiXFilter || "all";
      document.querySelectorAll("#ai-intel-x-stream [data-ai-x-kind]").forEach((item) => {
        item.hidden = kind !== "all" && item.dataset.aiXKind !== kind;
      });
      return;
    }
    const action = event.target.closest("[data-ai-action]");
    if (action) {
      if (action.dataset.aiAction === "启动 AI X List") {
        action.disabled = true;
        fetchJson("/api/collector/ai-x/start", { method: "POST", body: "{}" })
          .then(() => showToast("AI 专用 X List 采集已启动"))
          .catch((error) => showToast(`AI X List 启动失败：${error.message || "服务不可用"}`))
          .finally(() => { action.disabled = false; });
      } else {
        showToast(`${action.dataset.aiAction}：首版交互入口已预留`);
      }
    }
  });
  $("#ai-x-monitor-page")?.addEventListener("change", (event) => {
    const select = event.target.closest("[data-ai-x-select]");
    if (select) {
      if (select.checked) aiXMonitorState.selected.add(select.dataset.aiXSelect);
      else aiXMonitorState.selected.delete(select.dataset.aiXSelect);
      renderAiXMonitorPage(state.aiIntel?.xItems || []);
      return;
    }
    const selectAll = event.target.closest("[data-ai-x-select-all]");
    if (selectAll) {
      aiXMonitorFilteredItems().slice((aiXMonitorState.page - 1) * aiXMonitorState.pageSize, aiXMonitorState.page * aiXMonitorState.pageSize).forEach((item) => selectAll.checked ? aiXMonitorState.selected.add(String(item.id)) : aiXMonitorState.selected.delete(String(item.id)));
      renderAiXMonitorPage(state.aiIntel?.xItems || []);
    }
  });

  $("#primary-nav")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-workspace-view]");
    if (!button) return;
    state.workspaceView = button.dataset.workspaceView || "overview";
    state.navSection = button.dataset.navTarget || state.workspaceView || "overview";
    if (["tech-earnings", "index-futures", "war-room", "sector-flow", "etf-flow", "stock-flow", "treasury", "industry-observer", "ai-intel"].includes(state.workspaceView)) {
      state.navSection = state.workspaceView;
      state.mobileView = mobileViewForNavTarget(state.workspaceView);
    } else {
      state.mobileView = mobileViewForNavTarget(state.navSection);
    }
    updateNavUrl(state.navSection);
    renderWorkspaceView();
    renderMobileView();
    renderTechEarnings();
    renderIndexFutures();
    renderMarketPulse();
    renderAShareMarketSnapshot();
    renderWarRoom();
    renderSectorFundFlow();
    renderEtfFlow();
    renderStockFundFlow();
    renderTreasuryWorkspace();
    renderIndustryObserver();
    window.requestAnimationFrame(() => focusWorkspaceTarget(state.navSection));
    loadData();
  });

  $("#account-list")?.addEventListener("click", async (event) => {
    const backfillButton = event.target.closest("[data-backfill-account]");
    if (backfillButton) {
      event.preventDefault();
      event.stopPropagation();
      startXBackfillForAccount(backfillButton.dataset.backfillAccount);
      return;
    }
    const button = event.target.closest("[data-account]");
    if (!button) return;
    state.account = button.dataset.account;
    resetFeedLimit();
    renderAll();
    await loadPostsForAccount(state.account);
    renderAll();
  });

  $("#account-list")?.addEventListener("dragstart", (event) => {
    if (event.target.closest("[data-backfill-account]")) {
      event.preventDefault();
      return;
    }
    const row = event.target.closest("[data-source-row]");
    if (!row) return;
    sourceDragId = row.dataset.sourceRow || "";
    row.classList.add("dragging");
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", sourceDragId);
  });

  $("#account-list")?.addEventListener("dragover", (event) => {
    const row = event.target.closest("[data-source-row]");
    if (!row || !sourceDragId || row.dataset.sourceRow === sourceDragId) return;
    event.preventDefault();
    row.classList.add("drag-over");
    event.dataTransfer.dropEffect = "move";
  });

  $("#account-list")?.addEventListener("dragleave", (event) => {
    const row = event.target.closest("[data-source-row]");
    if (row) row.classList.remove("drag-over");
  });

  $("#account-list")?.addEventListener("drop", async (event) => {
    const row = event.target.closest("[data-source-row]");
    if (!row || !sourceDragId || row.dataset.sourceRow === sourceDragId) return;
    event.preventDefault();
    document.querySelectorAll(".account-row.drag-over").forEach((item) => item.classList.remove("drag-over"));
    await moveSourceTo(sourceDragId, row.dataset.sourceRow);
  });

  $("#account-list")?.addEventListener("dragend", () => {
    sourceDragId = "";
    document.querySelectorAll(".account-row.dragging, .account-row.drag-over").forEach((row) => {
      row.classList.remove("dragging", "drag-over");
    });
  });

  $("#source-view-tabs")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-source-view]");
    if (!button) return;
    event.preventDefault();
    event.stopPropagation();
    state.sourceView = ["active", "x", "all"].includes(button.dataset.sourceView)
      ? button.dataset.sourceView
      : "active";
    state.account = "all";
    resetFeedLimit();
    renderAll();
  });

  $("#filter-tabs")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    state.filter = button.dataset.filter;
    resetFeedLimit();
    renderAll();
  });

  $("#search-input")?.addEventListener("input", (event) => {
    state.query = event.target.value;
    resetFeedLimit();
    renderFeed();
    renderMarketMap();
    renderSignals();
    renderTopics();
  });

  $("#korea-instrument-list")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-korea-symbol]");
    if (!button) return;
    state.koreaActive = button.dataset.koreaSymbol;
    renderKoreaMarket();
  });

  $("#korea-mode-tabs")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-korea-mode]");
    if (!button) return;
    state.koreaMode = button.dataset.koreaMode;
    renderKoreaMarket();
  });

  $("#korea-refresh")?.addEventListener("click", refreshKoreaMarket);
  $("#memory-spot-refresh")?.addEventListener("click", async () => {
    await loadMemorySpotData({ force: true });
    if (state.memorySpot?.state !== "offline") showToast("内存价格已刷新");
  });
  $("#memory-spot-list")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-memory-price-id]");
    if (!button) return;
    calibrateMemoryPrice(button.dataset.memoryPriceId, button.dataset.memoryPriceName);
  });
  $("#a-share-window-tabs")?.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-a-share-window]");
    if (!button) return;
    await loadAShareWindow(button.dataset.aShareWindow);
  });
  $("#benefit-status-tabs")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-benefit-status]");
    if (!button) return;
    state.benefitStatusFilter = button.dataset.benefitStatus || "confirmed";
    renderMarketMap();
  });
  $("#market-map-list")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-benefit-evidence-theme]");
    if (!button) return;
    const theme = button.dataset.benefitEvidenceTheme || "";
    state.query = theme;
    state.filter = "all";
    state.mobileView = "feed";
    const searchInput = $("#search-input");
    if (searchInput) searchInput.value = theme;
    renderFilters();
    resetFeedLimit();
    renderFeed();
    renderMobileView();
    $("#feed-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  $("#mobile-view-tabs")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-mobile-view]");
    if (!button) return;
    const view = button.dataset.mobileView || "feed";
    if (view === "earnings") {
      state.workspaceView = "tech-earnings";
      state.navSection = "tech-earnings";
    } else if (view === "futures") {
      state.workspaceView = "index-futures";
      state.navSection = "index-futures";
    } else if (view === "war-room") {
      state.workspaceView = "war-room";
      state.navSection = "war-room";
    } else if (view === "sector-flow") {
      state.workspaceView = "sector-flow";
      state.navSection = "sector-flow";
    } else if (view === "etf-flow") {
      state.workspaceView = "etf-flow";
      state.navSection = "etf-flow";
    } else if (view === "stock-flow") {
      state.workspaceView = "stock-flow";
      state.navSection = "stock-flow";
    } else if (view === "treasury") {
      state.workspaceView = "treasury";
      state.navSection = "treasury";
    } else if (view === "industry") {
      state.workspaceView = "industry-observer";
      state.navSection = "industry-observer";
    } else {
      state.workspaceView = "overview";
      state.mobileView = view;
      state.navSection = view === "map" ? "map" : view === "review" ? "review" : view === "popularity" ? "popularity" : "feed";
    }
    updateNavUrl(state.navSection);
    renderWorkspaceView();
    renderMobileView();
    if (view === "futures") {
      renderIndexFutures();
      renderMarketPulse();
      renderAShareMarketSnapshot();
    }
    if (view === "war-room") renderWarRoom();
    if (view === "sector-flow") renderSectorFundFlow();
    if (view === "etf-flow") renderEtfFlow();
    if (view === "stock-flow") renderStockFundFlow();
    if (view === "treasury") renderTreasuryWorkspace();
    if (view === "earnings") renderTechEarnings();
    if (view === "industry") renderIndustryObserver();
    window.requestAnimationFrame(() => focusWorkspaceTarget(state.navSection));
    loadData();
  });

  $("#tech-earnings-refresh")?.addEventListener("click", async () => {
    await refreshTechEarnings();
  });

  $("#index-futures-refresh")?.addEventListener("click", refreshIndexFutures);
  $("#index-futures-date")?.addEventListener("change", (event) => {
    state.selectedFuturesDate = event.target.value || "";
    renderIndexFutures();
  });

  $("#sector-flow-refresh")?.addEventListener("click", refreshSectorFundFlow);
  $("#sector-flow-date")?.addEventListener("change", async (event) => {
    state.selectedSectorFlowDate = event.target.value || "";
    stopSectorFlowPlayback();
    await loadSectorFundFlow({ silent: false, render: false });
    state.sectorFlowSnapshotIndex = Math.max(0, sectorFlowSnapshots().length - 1);
    renderSectorFundFlow();
  });
  $("#sector-flow-scope-tabs")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-sector-flow-scope]");
    if (!button) return;
    state.sectorFlowScope = ["hot", "focus", "industry", "concept", "all"].includes(button.dataset.sectorFlowScope)
      ? button.dataset.sectorFlowScope
      : "focus";
    renderSectorFundFlow();
  });
  $("#sector-flow-sort-tabs")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-sector-flow-sort]");
    if (!button) return;
    state.sectorFlowSort = ["trend", "current"].includes(button.dataset.sectorFlowSort)
      ? button.dataset.sectorFlowSort
      : "trend";
    renderSectorFundFlow();
  });
  $("#sector-flow-strategy-tabs")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-sector-flow-strategy]");
    if (!button) return;
    state.sectorFlowStrategy = ["velocity", "diffusion", "reversal", "capital", "rotation"].includes(button.dataset.sectorFlowStrategy)
      ? button.dataset.sectorFlowStrategy
      : "velocity";
    renderSectorFundFlow();
  });
  $("#sector-flow-window-tabs")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-sector-flow-window]");
    if (!button) return;
    const minutes = Number(button.dataset.sectorFlowWindow);
    state.sectorFlowWindowMinutes = [1, 5, 15, 30].includes(minutes) ? minutes : 1;
    renderSectorFundFlow();
  });
  $("#sector-flow-timeline")?.addEventListener("input", (event) => {
    stopSectorFlowPlayback();
    const targetOffset = Number(event.target.value) || 0;
    const snapshots = sectorFlowSnapshots();
    state.sectorFlowSnapshotIndex = snapshots.reduce((bestIndex, item, index) => {
      const offset = Math.max(0, Math.min(330, (sectorFlowSlotMinutes(item?.slot) ?? 570) - 570));
      const bestOffset = Math.max(0, Math.min(330, (sectorFlowSlotMinutes(snapshots[bestIndex]?.slot) ?? 570) - 570));
      return Math.abs(offset - targetOffset) < Math.abs(bestOffset - targetOffset) ? index : bestIndex;
    }, 0);
    renderSectorFundFlow();
  });
  $("#sector-flow-play")?.addEventListener("click", toggleSectorFlowPlayback);
  $("#sector-flow-latest")?.addEventListener("click", () => {
    stopSectorFlowPlayback();
    state.sectorFlowSnapshotIndex = Math.max(0, sectorFlowSnapshots().length - 1);
    renderSectorFundFlow();
  });
  $("#sector-flow-delta-list")?.addEventListener("click", (event) => {
    const card = event.target.closest("[data-sector-flow-board-code]");
    if (!card) return;
    state.sectorFlowSelectedBoardCode = card.dataset.sectorFlowBoardCode || "";
    state.sectorFlowSelectedLineId = card.dataset.sectorFlowLineId || "";
    state.sectorFlowSelectedBoardName = card.dataset.sectorFlowBoardName || "";
    state.sectorFlowSelectedSourceName = card.dataset.sectorFlowSourceName || state.sectorFlowSelectedBoardName;
    renderSectorFundFlow();
  });
  $("#sector-flow-delta-list")?.addEventListener("keydown", (event) => {
    if (!["Enter", " "].includes(event.key)) return;
    const card = event.target.closest("[data-sector-flow-board-code]");
    if (!card) return;
    event.preventDefault();
    card.click();
  });

  $("#etf-flow-refresh")?.addEventListener("click", refreshEtfFlow);
  $("#etf-flow-view-tabs")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-etf-flow-view]");
    if (!button) return;
    state.etfFlowView = ["intraday", "trend"].includes(button.dataset.etfFlowView)
      ? button.dataset.etfFlowView
      : "intraday";
    renderEtfFlow();
  });
  $("#etf-trend-horizon-tabs")?.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-etf-trend-horizon]");
    if (!button) return;
    const horizon = Number(button.dataset.etfTrendHorizon);
    state.etfTrendHorizonDays = [3, 7, 14, 21, 60].includes(horizon) ? horizon : 21;
    state.selectedEtfTrendCode = "";
    await loadEtfFlow({ silent: true, render: true });
  });
  $("#etf-trend-mode-tabs")?.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-etf-trend-mode]");
    if (!button) return;
    state.etfTrendMode = ["all", "accumulation", "launch", "main", "risk"].includes(button.dataset.etfTrendMode)
      ? button.dataset.etfTrendMode
      : "all";
    state.selectedEtfTrendCode = "";
    await loadEtfFlow({ silent: true, render: true });
  });
  $("#etf-trend-sort-tabs")?.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-etf-trend-sort]");
    if (!button) return;
    state.etfTrendSort = ["score", "return", "position", "participation", "risk"].includes(button.dataset.etfTrendSort)
      ? button.dataset.etfTrendSort
      : "score";
    state.selectedEtfTrendCode = "";
    await loadEtfFlow({ silent: true, render: true });
  });
  $("#etf-flow-date")?.addEventListener("change", async (event) => {
    state.selectedEtfFlowDate = event.target.value || "";
    state.selectedEtfFlowSlot = "";
    state.etfFlowFollowLatest = true;
    state.selectedEtfTrendCode = "";
    await loadEtfFlow({ silent: false, render: true });
  });
  $("#etf-flow-scope-tabs")?.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-etf-flow-scope]");
    if (!button) return;
    state.etfFlowScope = button.dataset.etfFlowScope || "all";
    state.selectedEtfFlowCode = "";
    state.selectedEtfTrendCode = "";
    await loadEtfFlow({ silent: true, render: true });
  });
  $("#etf-flow-window-tabs")?.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-etf-flow-window]");
    if (!button) return;
    const minutes = Number(button.dataset.etfFlowWindow);
    state.etfFlowWindowMinutes = [1, 5, 15, 30, 60].includes(minutes) ? minutes : 5;
    await loadEtfFlow({ silent: true, render: true });
  });
  $("#etf-flow-sort-tabs")?.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-etf-flow-sort]");
    if (!button) return;
    state.etfFlowSort = ["turnover", "velocity", "sameTime", "change"].includes(button.dataset.etfFlowSort)
      ? button.dataset.etfFlowSort
      : "turnover";
    await loadEtfFlow({ silent: true, render: true });
  });
  $("#etf-flow-search")?.addEventListener("input", (event) => {
    state.etfFlowQuery = event.target.value.trim();
    if (etfFlowSearchTimer) window.clearTimeout(etfFlowSearchTimer);
    etfFlowSearchTimer = window.setTimeout(() => {
      state.selectedEtfFlowCode = "";
      state.selectedEtfTrendCode = "";
      loadEtfFlow({ silent: true, render: true });
    }, 180);
  });
  $("#etf-flow-timeline")?.addEventListener("input", (event) => {
    const slots = Array.isArray(state.etfFlow?.availableSlots) ? state.etfFlow.availableSlots : [];
    const index = Math.max(0, Math.min(slots.length - 1, Number(event.target.value) || 0));
    state.selectedEtfFlowSlot = slots[index] || "";
    state.etfFlowFollowLatest = index >= slots.length - 1;
    $("#etf-flow-selected-time").textContent = state.selectedEtfFlowSlot || "--:--";
    if (etfFlowSearchTimer) window.clearTimeout(etfFlowSearchTimer);
    etfFlowSearchTimer = window.setTimeout(() => loadEtfFlow({ silent: true, render: true }), 120);
  });
  $("#etf-flow-latest")?.addEventListener("click", async () => {
    state.etfFlowFollowLatest = true;
    state.selectedEtfFlowSlot = "";
    await loadEtfFlow({ silent: true, render: true });
  });
  $("#etf-flow-group-body")?.addEventListener("click", async (event) => {
    const row = event.target.closest("[data-etf-flow-branch]");
    if (!row) return;
    state.etfFlowScope = "all";
    state.etfFlowQuery = row.dataset.etfFlowBranch || "";
    state.selectedEtfFlowCode = "";
    await loadEtfFlow({ silent: true, render: true });
  });
  $("#etf-flow-rank-body")?.addEventListener("click", async (event) => {
    const row = event.target.closest("[data-etf-flow-code]");
    if (!row) return;
    state.selectedEtfFlowCode = row.dataset.etfFlowCode || "";
    await loadEtfFlow({ silent: true, render: true });
  });
  $("#etf-flow-rank-body")?.addEventListener("keydown", async (event) => {
    if (!["Enter", " "].includes(event.key)) return;
    const row = event.target.closest("[data-etf-flow-code]");
    if (!row) return;
    event.preventDefault();
    state.selectedEtfFlowCode = row.dataset.etfFlowCode || "";
    await loadEtfFlow({ silent: true, render: true });
  });
  $("#etf-trend-rank-body")?.addEventListener("click", async (event) => {
    const row = event.target.closest("[data-etf-trend-code]");
    if (!row) return;
    state.selectedEtfTrendCode = row.dataset.etfTrendCode || "";
    await loadEtfFlow({ silent: true, render: true });
  });
  $("#etf-trend-rank-body")?.addEventListener("keydown", async (event) => {
    if (!["Enter", " "].includes(event.key)) return;
    const row = event.target.closest("[data-etf-trend-code]");
    if (!row) return;
    event.preventDefault();
    state.selectedEtfTrendCode = row.dataset.etfTrendCode || "";
    await loadEtfFlow({ silent: true, render: true });
  });
  $("#etf-trend-branch-body")?.addEventListener("click", async (event) => {
    const row = event.target.closest("[data-etf-trend-branch]");
    if (!row) return;
    state.etfFlowScope = "all";
    state.etfFlowQuery = row.dataset.etfTrendBranch || "";
    state.selectedEtfTrendCode = "";
    await loadEtfFlow({ silent: true, render: true });
  });
  $("#etf-trend-branch-cards")?.addEventListener("click", async (event) => {
    const card = event.target.closest("[data-etf-trend-branch]");
    if (!card) return;
    state.etfFlowScope = "all";
    state.etfFlowQuery = card.dataset.etfTrendBranch || "";
    state.selectedEtfTrendCode = "";
    await loadEtfFlow({ silent: true, render: true });
  });
  $("#etf-flow-peer-list")?.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-etf-flow-code]");
    if (!button) return;
    state.selectedEtfFlowCode = button.dataset.etfFlowCode || "";
    await loadEtfFlow({ silent: true, render: true });
  });

  $("#stock-flow-refresh")?.addEventListener("click", refreshStockFundFlow);
  $("#stock-flow-history-refresh")?.addEventListener("click", refreshStockFundFlowHistory);
  $("#stock-flow-manual-add")?.addEventListener("submit", addStockFundFlowManualStock);
  $("#stock-flow-date")?.addEventListener("change", async (event) => {
    state.selectedStockFlowDate = event.target.value || "";
    state.selectedStockFlowSlot = "";
    state.stockFlowFollowLatest = true;
    await loadStockFundFlow({ silent: false, render: true });
  });
  $("#stock-flow-scope-tabs")?.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-stock-flow-scope]");
    if (!button) return;
    state.stockFlowScope = ["shortlist", "watchlist", "dynamic", "all"].includes(button.dataset.stockFlowScope)
      ? button.dataset.stockFlowScope
      : "watchlist";
    if (state.stockFlowScope === "shortlist") state.stockFlowSort = "score";
    else if (state.stockFlowSort === "score") state.stockFlowSort = stockFlowIsSwing() ? "inflow" : "velocity";
    state.selectedStockFlowCode = "";
    await loadStockFundFlow({ silent: true, render: true });
  });
  $("#stock-flow-period-tabs")?.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-stock-flow-period]");
    if (!button) return;
    const value = String(button.dataset.stockFlowPeriod || "1");
    if (value.endsWith("d")) {
      state.stockFlowPeriod = value.slice(0, -1);
      state.stockFlowSort = "inflow";
    } else {
      state.stockFlowPeriod = "intraday";
      const minutes = Number(value);
      state.stockFlowWindowMinutes = value === "day"
        ? "day"
        : [1, 5, 15, 30, 60, 120].includes(minutes) ? minutes : 1;
      state.stockFlowSort = state.stockFlowScope === "shortlist" ? "score" : "velocity";
    }
    state.stockFlowDirection = "desc";
    await loadStockFundFlow({ silent: true, render: true });
  });
  $("#stock-flow-sort-tabs")?.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-stock-flow-sort]");
    if (!button) return;
    state.stockFlowSort = button.dataset.stockFlowSort || (stockFlowIsSwing() ? "inflow" : "velocity");
    state.stockFlowDirection = "desc";
    await loadStockFundFlow({ silent: true, render: true });
  });
  $("#stock-flow-search")?.addEventListener("input", (event) => {
    state.stockFlowQuery = event.target.value.trim();
    state.stockFlowBranchQuery = "";
    if (stockFlowSearchTimer) window.clearTimeout(stockFlowSearchTimer);
    stockFlowSearchTimer = window.setTimeout(() => {
      state.selectedStockFlowCode = "";
      loadStockFundFlow({ silent: true, render: true });
    }, 180);
  });
  $("#stock-flow-timeline")?.addEventListener("input", (event) => {
    const slots = Array.isArray(state.stockFundFlow?.availableSlots) ? state.stockFundFlow.availableSlots : [];
    const index = Math.max(0, Math.min(slots.length - 1, Number(event.target.value) || 0));
    state.selectedStockFlowSlot = slots[index] || "";
    state.stockFlowFollowLatest = index >= slots.length - 1;
    const time = $("#stock-flow-selected-time");
    if (time) time.textContent = state.selectedStockFlowSlot || "--:--";
    if (stockFlowSearchTimer) window.clearTimeout(stockFlowSearchTimer);
    stockFlowSearchTimer = window.setTimeout(() => loadStockFundFlow({ silent: true, render: true }), 140);
  });
  $("#stock-flow-latest")?.addEventListener("click", async () => {
    state.stockFlowFollowLatest = true;
    state.selectedStockFlowSlot = "";
    await loadStockFundFlow({ silent: true, render: true });
  });
  $("#stock-flow-theme-list")?.addEventListener("click", async (event) => {
    const card = event.target.closest("[data-stock-flow-theme]");
    if (!card) return;
    state.stockFlowScope = "all";
    state.stockFlowQuery = card.dataset.stockFlowTheme || "";
    state.stockFlowBranchQuery = "";
    state.selectedStockFlowCode = "";
    await loadStockFundFlow({ silent: true, render: true });
  });
  $("#stock-flow-theme-nav")?.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-stock-flow-theme-nav]");
    if (!button) return;
    state.stockFlowScope = "all";
    state.stockFlowQuery = button.dataset.stockFlowThemeNav || "";
    state.stockFlowBranchQuery = "";
    state.selectedStockFlowCode = "";
    await loadStockFundFlow({ silent: true, render: true });
  });
  $("#stock-flow-branch-nav")?.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-stock-flow-branch]");
    if (!button) return;
    state.stockFlowScope = "all";
    state.stockFlowBranchQuery = button.dataset.stockFlowBranch || "";
    state.selectedStockFlowCode = "";
    await loadStockFundFlow({ silent: true, render: true });
  });
  $("#stock-flow-table-body")?.addEventListener("click", async (event) => {
    const row = event.target.closest("[data-stock-flow-code]");
    if (!row) return;
    state.selectedStockFlowCode = row.dataset.stockFlowCode || "";
    await loadStockFundFlow({ silent: true, render: true });
  });
  $("#stock-flow-table-body")?.addEventListener("keydown", async (event) => {
    if (!["Enter", " "].includes(event.key)) return;
    const row = event.target.closest("[data-stock-flow-code]");
    if (!row) return;
    event.preventDefault();
    state.selectedStockFlowCode = row.dataset.stockFlowCode || "";
    await loadStockFundFlow({ silent: true, render: true });
  });
  $("#stock-flow-shortlist-list")?.addEventListener("click", async (event) => {
    const card = event.target.closest("[data-stock-flow-shortlist-code]");
    if (!card) return;
    const code = card.dataset.stockFlowShortlistCode || "";
    state.selectedStockFlowCode = code;
    if (state.stockFlowScope !== "shortlist" && !stockFlowRows().some((row) => row.code === code)) {
      state.stockFlowScope = "shortlist";
      await loadStockFundFlow({ silent: true, render: true });
      return;
    }
    renderStockFlowDetail();
    renderStockFlowTable();
  });
  $("#stock-flow-validation-horizons")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-stock-flow-validation-horizon]");
    if (!button) return;
    state.stockFlowValidationHorizon = button.dataset.stockFlowValidationHorizon || "30m";
    renderStockFlowValidation();
  });

  $("#war-room-refresh")?.addEventListener("click", refreshWarRoom);
  $("#treasury-workspace")?.addEventListener("click", (event) => {
    const modeButton = event.target.closest("[data-treasury-trend-mode]");
    if (modeButton) {
      state.treasuryTrendMode = modeButton.dataset.treasuryTrendMode || "daily";
      renderTreasuryWorkspace();
      if (state.treasuryTrendMode === "daily" && !state.usTreasuryDaily?.readyCount) {
        loadUsTreasuryDaily({ silent: true, render: true });
      }
      if (state.treasuryTrendMode === "intraday" && !state.usTreasuryIntraday?.readyCount) {
        loadUsTreasuryIntraday({ silent: true, render: true });
      }
      return;
    }
    const target = event.target.closest("[data-treasury-symbol]");
    if (!target) return;
    state.selectedTreasurySymbol = target.dataset.treasurySymbol || state.selectedTreasurySymbol;
    renderTreasuryWorkspace();
  });
  $("#treasury-workspace")?.addEventListener("keydown", (event) => {
    if (!["Enter", " "].includes(event.key)) return;
    const target = event.target.closest("[data-treasury-symbol]");
    if (!target) return;
    event.preventDefault();
    state.selectedTreasurySymbol = target.dataset.treasurySymbol || state.selectedTreasurySymbol;
    renderTreasuryWorkspace();
  });
  $("#treasury-refresh")?.addEventListener("click", async () => {
    const button = $("#treasury-refresh");
    if (button) {
      button.disabled = true;
      button.textContent = "刷新中";
    }
    await loadUsTreasury({ force: true, silent: false, render: false });
    await loadUsTreasuryDaily({ force: true, silent: true, render: false });
    await loadUsTreasuryIntraday({ force: true, silent: true, render: false });
    renderTreasuryWorkspace();
    renderWarRoomTreasury();
    if (button) {
      button.disabled = false;
      button.textContent = "刷新";
    }
  });
  $("#war-room-date")?.addEventListener("change", async (event) => {
    state.selectedFuturesDate = event.target.value || "";
    await loadWarRoomAnalysis({ silent: true, render: false });
    renderWarRoom();
  });
  $("#war-room-ai-generate")?.addEventListener("click", () => generateWarRoomAnalysis("manual"));
  $("#war-room-ai-settings-open")?.addEventListener("click", openWarRoomDeepSeekSettings);
  $("#war-room-settings-close")?.addEventListener("click", closeWarRoomDeepSeekSettings);
  $("#war-room-settings-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    await saveWarRoomDeepSeekSettings();
  });
  $("#war-room-deepseek-test")?.addEventListener("click", async () => {
    await saveWarRoomDeepSeekSettings({ testAfterSave: true });
  });
  $("#war-room-settings-dialog")?.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) closeWarRoomDeepSeekSettings();
  });
  $("#war-room-ai-panel")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-war-room-ai-tab]");
    if (!button) return;
    state.warRoomAiTab = button.dataset.warRoomAiTab === "validation" ? "validation" : "current";
    renderWarRoomAi();
  });

  $("#tech-earnings-rank-tabs")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-earnings-rank]");
    if (!button) return;
    state.earningsRank = button.dataset.earningsRank || "q2NetProfitQoQ";
    renderTechEarnings();
  });

  $("#tech-earnings-filter-tabs")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-earnings-filter]");
    if (!button) return;
    state.earningsFilter = button.dataset.earningsFilter || "all";
    state.selectedEarningsCode = "";
    renderTechEarnings();
  });

  const earningsSortToggle = $("#earnings-table-sort-toggle");
  const earningsSortPanel = $("#earnings-table-sort-panel");
  earningsSortToggle?.addEventListener("click", () => {
    if (!earningsSortPanel) return;
    const willOpen = earningsSortPanel.hidden;
    earningsSortPanel.hidden = !willOpen;
    earningsSortToggle.setAttribute("aria-expanded", String(willOpen));
  });

  $("#earnings-table-sort-metric")?.addEventListener("change", (event) => {
    setEarningsTableMetric(event.target.value);
    renderTechEarnings();
  });

  earningsSortPanel?.addEventListener("click", (event) => {
    const directionButton = event.target.closest("[data-earnings-sort-direction]");
    if (directionButton) {
      state.earningsTableSortDirection = directionButton.dataset.earningsSortDirection === "asc" ? "asc" : "desc";
      renderTechEarnings();
      return;
    }
    if (event.target.closest("#earnings-table-sort-reset")) {
      state.earningsTableSort = "q2NetProfitQoQ";
      state.earningsTableSortDirection = "desc";
      state.earningsTableMin = "";
      state.earningsTableMax = "";
      renderTechEarnings();
    }
  });

  $("#earnings-table-filter-min")?.addEventListener("input", (event) => {
    state.earningsTableMin = event.target.value;
    renderTechEarnings();
  });

  $("#earnings-table-filter-max")?.addEventListener("input", (event) => {
    state.earningsTableMax = event.target.value;
    renderTechEarnings();
  });

  $("#tech-earnings-table")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-earnings-table-sort]");
    if (!button) return;
    setEarningsTableMetric(button.dataset.earningsTableSort, { toggle: true });
    renderTechEarnings();
  });

  document.addEventListener("click", (event) => {
    if (!earningsSortPanel || earningsSortPanel.hidden) return;
    if (earningsSortPanel.contains(event.target) || earningsSortToggle?.contains(event.target)) return;
    earningsSortPanel.hidden = true;
    earningsSortToggle?.setAttribute("aria-expanded", "false");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !earningsSortPanel || earningsSortPanel.hidden) return;
    earningsSortPanel.hidden = true;
    earningsSortToggle?.setAttribute("aria-expanded", "false");
    earningsSortToggle?.focus();
  });

  $("#tech-earnings-workspace")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-earnings-code]");
    if (!button) return;
    state.selectedEarningsCode = button.dataset.earningsCode || "";
    renderTechEarnings();
  });

  $("#market-drawer-toggle")?.addEventListener("click", () => {
    const drawer = $("#market-detail-drawer");
    const button = $("#market-drawer-toggle");
    if (!drawer || !button) return;
    const willOpen = drawer.hidden;
    drawer.hidden = !willOpen;
    button.setAttribute("aria-expanded", String(willOpen));
    button.textContent = willOpen ? "收起行情" : "展开行情";
  });

  $("#clear-filters")?.addEventListener("click", clearFilters);
  $("#refresh-data")?.addEventListener("click", loadData);

  $("#x-collector-start")?.addEventListener("click", startQuietCollector);
  $("#x-collector-stop")?.addEventListener("click", stopQuietCollector);
  $("#newsnow-start")?.addEventListener("click", startNewsNowCollector);
  $("#newsnow-stop")?.addEventListener("click", stopNewsNowCollector);

  $("#add-source-button")?.addEventListener("click", () => {
    showToast("请在配置里接入 X 本地桥接、bb-browser、Webhook、JSON 或 RSS 源");
  });

  $("#open-settings-center")?.addEventListener("click", openSettingsCenter);

  $("#settings-center-workspace")?.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-settings-action]");
    if (!button) return;
    const action = button.dataset.settingsAction;
    if (action === "deepseek-open") {
      openWarRoomDeepSeekSettings();
      return;
    }
    if (action === "deepseek-test") {
      await testDeepSeek();
      return;
    }
    if (action === "deepseek-toggle") {
      await toggleDeepSeek();
      renderSettingsCenter();
      return;
    }
    if (action === "x-start") {
      await startQuietCollector();
      renderSettingsCenter();
      return;
    }
    if (action === "x-stop") {
      await stopQuietCollector();
      renderSettingsCenter();
      return;
    }
    if (action === "newsnow-start") {
      await startNewsNowCollector();
      renderSettingsCenter();
      return;
    }
    if (action === "newsnow-stop") {
      await stopNewsNowCollector();
      renderSettingsCenter();
      return;
    }
    if (action === "refresh" || action === "refresh-data") {
      button.disabled = true;
      await loadData();
      button.disabled = false;
      renderSettingsCenter();
      return;
    }
    if (action === "open-sources") {
      const drawer = $("#source-drawer");
      if (drawer) drawer.open = true;
      drawer?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (action === "export") {
      exportSafeSettings();
    }
  });

  $("#deepseek-toggle")?.addEventListener("click", toggleDeepSeek);
  $("#explain-ai")?.addEventListener("click", testDeepSeek);

  const backfillForm = $("#x-backfill-form");
  if (backfillForm) {
    backfillForm.addEventListener("submit", startXBackfill);
  }

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-post-detail-close]")) {
      closePostDetail();
      return;
    }

    const loadMoreButton = event.target.closest("#feed-load-more");
    if (loadMoreButton) {
      state.feedVisibleLimit += FEED_PAGE_SIZE;
      renderFeed();
      return;
    }

    const copyButton = event.target.closest("[data-copy-text]");
    if (copyButton) {
      event.preventDefault();
      copyTextToClipboard(copyButton.dataset.copyText || "");
      return;
    }

    const postActionButton = event.target.closest("[data-post-action]");
    if (postActionButton) {
      handlePostAction(postActionButton);
      return;
    }

    const expandButton = event.target.closest("[data-expand-text]");
    if (expandButton) {
      const box = expandButton.closest(".expandable-text");
      if (!box) return;
      const expanded = box.classList.toggle("expanded");
      box.classList.toggle("is-collapsed", !expanded);
      const label = expandButton.dataset.expandLabel || "内容";
      expandButton.setAttribute("aria-expanded", String(expanded));
      expandButton.textContent = expanded ? "收起" : `展开${label}`;
      if (expanded) openPostDetail(expandButton.closest(".signal-card"));
      return;
    }

    const mediaButton = event.target.closest("[data-media-url]");
    if (mediaButton) {
      openMediaLightbox(mediaButton.dataset.mediaUrl, mediaButton.dataset.mediaLabel);
      return;
    }
    if (event.target.closest("[data-media-lightbox-close]")) {
      closeMediaLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (closePostDetail()) return;
    closeMediaLightbox();
  });
}

async function handlePostAction(button) {
  const postId = Number(button.dataset.postId || 0);
  const action = button.dataset.postAction || "";
  if (!postId || !action) return;
  const labels = {
    map: "加入映射",
    research: "生成研判",
    read: "标记已读",
    ignore: "忽略",
  };
  button.disabled = true;
  const previousText = button.textContent;
  button.textContent = "处理中";
  try {
    const result = await fetchJson("/api/posts/action", {
      method: "POST",
      body: JSON.stringify({ id: postId, action }),
    });
    const post = state.posts.find((item) => Number(item.id) === postId);
    if (post) {
      const now = result.updatedAt || new Date().toISOString();
      if (action === "read") post.readAt = now;
      if (action === "map") {
        post.mappedAt = now;
        post.marketRelated = true;
      }
      if (action === "research") post.researchAt = now;
      if (action === "ignore") post.ignoredAt = now;
    }
    if (action === "research") {
      await loadData();
    } else {
      renderAll();
    }
    showToast(result.message || `${labels[action] || "操作"}成功`);
  } catch (error) {
    button.disabled = false;
    button.textContent = previousText;
    showToast(`${labels[action] || "操作"}失败：${error.message}`);
  }
}

async function addStockFundFlowManualStock(event) {
  event.preventDefault();
  const codeInput = $("#stock-flow-manual-code");
  const sectorInput = $("#stock-flow-manual-sector");
  const button = event.currentTarget?.querySelector("button[type='submit']");
  const code = String(codeInput?.value || "").trim();
  const sector = String(sectorInput?.value || "").trim();
  if (!/^\d{6}$/.test(code)) {
    showToast("请输入6位A股代码");
    codeInput?.focus();
    return;
  }
  if (button) button.disabled = true;
  try {
    const payload = await fetchJson("/api/stock-fund-flow/manual", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, sector }),
    });
    state.stockFundFlow = payload;
    state.selectedStockFlowDate = payload.tradingDate || state.selectedStockFlowDate;
    state.selectedStockFlowSlot = payload.slot || state.selectedStockFlowSlot;
    state.selectedStockFlowCode = code;
    state.stockFlowScope = "all";
    state.stockFlowQuery = code;
    if (codeInput) codeInput.value = "";
    if (sectorInput) sectorInput.value = "";
    renderStockFundFlow();
    showToast(`已加入盯盘：${code}`);
  } catch (error) {
    showToast(`手动加入失败：${error.message}`);
  } finally {
    if (button) button.disabled = false;
  }
}

async function refreshKoreaMarket() {
  await loadKoreaMarketData({ force: true });
  if (state.koreaMarket?.state === "ready") showToast("韩国行情已刷新");
}

async function startXBackfill(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const locked = lockedBackfillAccount();
  const username = (locked?.handle || form.username.value).trim();
  const hours = Number(form.hours.value || 24);
  const max = Number(form.max.value || 80);
  if (!username) {
    showToast("请先选择或输入 X 账号");
    return;
  }
  try {
    const result = await fetchJson("/api/backfill/x-profile", {
      method: "POST",
      body: JSON.stringify({ username, hours, max }),
    });
    showToast(result.message || "补采任务已启动");
  } catch (error) {
    showToast(`补采失败：${error.message}`);
  }
}

async function refreshCollectorStatus() {
  try {
    const collector = await fetchJson("/api/collector/x/status");
    state.config = {
      ...state.config,
      xCollector: collector,
    };
    renderConnectionStatus();
    renderCollectorControl();
  } catch (error) {
    showToast(`采集器状态读取失败：${error.message}`);
  }
}

async function startQuietCollector() {
  const button = $("#x-collector-start");
  if (button) button.disabled = true;
  showToast("正在启动静默采集器...");
  try {
    const result = await fetchJson("/api/collector/x/start", {
      method: "POST",
      body: JSON.stringify({ mode: "quiet" }),
    });
    if (result.collector) {
      state.config = { ...state.config, xCollector: result.collector };
    }
    renderConnectionStatus();
    renderCollectorControl();
    showToast(result.message || "静默采集器已启动");
    window.setTimeout(refreshCollectorStatus, 2500);
  } catch (error) {
    showToast(`静默采集启动失败：${error.message}`);
    await refreshCollectorStatus();
  }
}

async function stopQuietCollector() {
  const button = $("#x-collector-stop");
  if (button) button.disabled = true;
  try {
    const result = await fetchJson("/api/collector/x/stop", {
      method: "POST",
      body: "{}",
    });
    if (result.collector) {
      state.config = { ...state.config, xCollector: result.collector };
    }
    renderConnectionStatus();
    renderCollectorControl();
    showToast(result.message || "采集器已停止");
  } catch (error) {
    showToast(`停止采集失败：${error.message}`);
    await refreshCollectorStatus();
  }
}

async function refreshNewsNowStatus() {
  try {
    const collector = await fetchJson("/api/collector/newsnow/status");
    state.config = {
      ...state.config,
      newsNow: collector,
    };
    renderConnectionStatus();
    renderNewsNowControl();
  } catch (error) {
    showToast(`NewsNow 状态读取失败：${error.message}`);
  }
}

async function startNewsNowCollector() {
  const button = $("#newsnow-start");
  if (button) button.disabled = true;
  try {
    const result = await fetchJson("/api/collector/newsnow/start", {
      method: "POST",
      body: JSON.stringify({}),
    });
    if (result.collector) {
      state.config = { ...state.config, newsNow: result.collector };
    }
    renderConnectionStatus();
    renderNewsNowControl();
    showToast(result.message || "NewsNow 新闻源已启动");
    window.setTimeout(refreshNewsNowStatus, 2500);
  } catch (error) {
    showToast(`NewsNow 启动失败：${error.message}`);
    await refreshNewsNowStatus();
  }
}

async function stopNewsNowCollector() {
  const button = $("#newsnow-stop");
  if (button) button.disabled = true;
  try {
    const result = await fetchJson("/api/collector/newsnow/stop", {
      method: "POST",
      body: "{}",
    });
    if (result.collector) {
      state.config = { ...state.config, newsNow: result.collector };
    }
    renderConnectionStatus();
    renderNewsNowControl();
    showToast(result.message || "NewsNow 新闻源已停止");
  } catch (error) {
    showToast(`NewsNow 停止失败：${error.message}`);
    await refreshNewsNowStatus();
  }
}

async function startXBackfillForAccount(accountId) {
  const account = accountById(accountId);
  const username = String(account?.handle || "").trim();
  if (!username || !username.startsWith("@")) {
    showToast("该信源没有可补采的 X 账号");
    return;
  }
  state.account = account.id;
  renderAll();
  try {
    const result = await fetchJson("/api/backfill/x-profile", {
      method: "POST",
      body: JSON.stringify({ username, hours: 24, max: 80 }),
    });
    showToast(result.message || `已开始补采 ${username}`);
  } catch (error) {
    showToast(`补采失败：${error.message}`);
  }
}

async function moveSourceTo(sourceId, targetId) {
  if (!sourceId || !targetId || sourceId === targetId) return;
  const visibleIds = visibleSourceAccounts().map((account) => account.id);
  const fromIndex = visibleIds.indexOf(sourceId);
  const toIndex = visibleIds.indexOf(targetId);
  if (fromIndex < 0 || toIndex < 0 || fromIndex === toIndex) return;
  const direction = toIndex < fromIndex ? "up" : "down";
  const steps = Math.abs(toIndex - fromIndex);
  try {
    for (let step = 0; step < steps; step += 1) {
      state.accounts = await fetchJson("/api/sources/reorder", {
        method: "POST",
        body: JSON.stringify({
          id: sourceId,
          direction,
          visibleIds: visibleSourceAccounts().map((account) => account.id),
        }),
      });
    }
    renderAll();
  } catch (error) {
    showToast(`排序失败：${error.message}`);
  }
}

async function moveSource(sourceId, direction) {
  if (!sourceId || !direction) return;
  try {
    const visibleIds = visibleSourceAccounts().map((account) => account.id);
    state.accounts = await fetchJson("/api/sources/reorder", {
      method: "POST",
      body: JSON.stringify({ id: sourceId, direction, visibleIds }),
    });
    renderAll();
  } catch (error) {
    showToast(`排序失败：${error.message}`);
  }
}

function setWarRoomSettingsResult(message = "", tone = "") {
  const node = $("#war-room-settings-result");
  if (!node) return;
  node.textContent = message;
  node.className = `war-room-settings-result${tone ? ` ${tone}` : ""}`;
}

function populateWarRoomDeepSeekSettings() {
  const config = state.config?.deepseek || {};
  const key = $("#war-room-deepseek-key");
  const base = $("#war-room-deepseek-base");
  const model = $("#war-room-deepseek-model");
  const enabled = $("#war-room-deepseek-enabled");
  const keyState = $("#war-room-deepseek-key-state");
  if (key) key.value = "";
  if (base) base.value = config.apiBase || "https://api.deepseek.com";
  if (model) model.value = config.model || config.value || "deepseek-v4-flash";
  if (enabled) enabled.checked = config.configured ? config.enabled !== false : true;
  if (keyState) {
    keyState.textContent = config.configured
      ? `已安全保存 ${config.maskedKey || "API Key"}，留空则保持不变`
      : "尚未配置，请输入 API Key";
  }
  setWarRoomSettingsResult(config.storageError ? `凭据读取失败：${config.storageError}` : "", config.storageError ? "error" : "");
}

function openWarRoomDeepSeekSettings() {
  const dialog = $("#war-room-settings-dialog");
  if (!dialog) return;
  populateWarRoomDeepSeekSettings();
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
  window.setTimeout(() => $("#war-room-deepseek-key")?.focus(), 60);
}

function closeWarRoomDeepSeekSettings() {
  const dialog = $("#war-room-settings-dialog");
  if (!dialog) return;
  if (typeof dialog.close === "function") dialog.close();
  else dialog.removeAttribute("open");
}

async function saveWarRoomDeepSeekSettings({ testAfterSave = false } = {}) {
  const apiKey = String($("#war-room-deepseek-key")?.value || "").trim();
  const apiBase = String($("#war-room-deepseek-base")?.value || "").trim();
  const model = String($("#war-room-deepseek-model")?.value || "").trim();
  const enabled = Boolean($("#war-room-deepseek-enabled")?.checked);
  const saveButton = $("#war-room-deepseek-save");
  const testButton = $("#war-room-deepseek-test");
  if (!apiKey && !state.config?.deepseek?.configured) {
    setWarRoomSettingsResult("请先输入 DeepSeek API Key。", "error");
    return false;
  }
  if (!apiBase || !model) {
    setWarRoomSettingsResult("API 地址和模型名称不能为空。", "error");
    return false;
  }
  if (saveButton) saveButton.disabled = true;
  if (testButton) testButton.disabled = true;
  setWarRoomSettingsResult(testAfterSave ? "正在保存并测试连接..." : "正在安全保存...");
  try {
    const payload = { apiBase, model, enabled };
    if (apiKey) payload.apiKey = apiKey;
    state.config = await fetchJson("/api/deepseek/settings", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    renderAiStatus();
    renderSettingsCenter();
    renderWarRoom();
    populateWarRoomDeepSeekSettings();
    if (testAfterSave) {
      const result = await fetchJson("/api/deepseek/test", { method: "POST", body: "{}" });
      if (!result.ok) throw new Error(result.error || "连接测试失败");
      setWarRoomSettingsResult(`连接成功，当前模型：${result.model}`, "success");
    } else {
      setWarRoomSettingsResult("设置已保存，API Key 已由 Windows 加密保护。", "success");
    }
    return true;
  } catch (error) {
    setWarRoomSettingsResult(`保存失败：${error.message}`, "error");
    return false;
  } finally {
    if (saveButton) saveButton.disabled = false;
    if (testButton) testButton.disabled = false;
  }
}

async function toggleDeepSeek() {
  const deepseek = state.config.deepseek || {};
  const configured = Boolean(deepseek.configured || deepseek.state === "ready");
  if (!configured) {
    openWarRoomDeepSeekSettings();
    return;
  }
  const nextEnabled = !(deepseek.enabled || deepseek.state === "ready");
  try {
    state.config = await fetchJson("/api/deepseek/settings", {
      method: "POST",
      body: JSON.stringify({ enabled: nextEnabled }),
    });
    renderAll();
    showToast(nextEnabled ? "DeepSeek 已开启，后续新内容会自动分析" : "DeepSeek 已关闭，保留现有分析结果");
  } catch (error) {
    showToast(`DeepSeek 设置失败：${error.message}`);
  }
}

function openSettingsCenter() {
  state.workspaceView = "overview";
  state.navSection = "settings";
  state.mobileView = "feed";
  updateNavUrl("settings");
  renderWorkspaceView();
  renderMobileView();
  renderSettingsCenter();
  window.requestAnimationFrame(() => focusWorkspaceTarget("settings"));
}

function settingsCollectorState(collector = {}) {
  if (collector.running) return "运行中";
  if (collector.state === "waiting") return "等待启动";
  return "未启动";
}

function renderSettingsCenter() {
  const workspace = $("#settings-center-workspace");
  if (!workspace) return;
  const config = state.config || fallbackConfig;
  const deepseek = config.deepseek || fallbackConfig.deepseek;
  const xCollector = config.xCollector || fallbackConfig.xCollector;
  const newsNow = config.newsNow || fallbackConfig.newsNow;
  const configured = Boolean(deepseek.configured || deepseek.state === "ready");
  const enabled = Boolean(deepseek.enabled || deepseek.state === "ready");
  const apiReady = Boolean(state.apiAvailable);

  $("#settings-center-status").textContent = apiReady ? "本地接口已连接" : "静态回退模式";
  $("#settings-center-status").className = `settings-health-badge ${apiReady ? "is-ready" : "is-waiting"}`;
  $("#settings-ai-status").textContent = enabled ? "已启用" : configured ? "已配置" : "本地规则可用";
  $("#settings-ai-model").textContent = deepseek.model || deepseek.value || "--";
  $("#settings-ai-base").textContent = deepseek.apiBase || "--";
  $("#settings-ai-key").textContent = configured ? `已保护 ${deepseek.maskedKey || "API Key"}` : "未配置";
  $("#settings-deepseek-toggle").textContent = enabled ? "关闭" : "启用";
  $("#settings-deepseek-toggle").disabled = !configured;

  $("#settings-collector-status").textContent = xCollector.running || newsNow.running ? "有采集器运行" : "未运行";
  $("#settings-x-collector-state").textContent = settingsCollectorState(xCollector);
  $("#settings-x-collector-detail").textContent = xCollector.value || "X 静默采集";
  $("#settings-newsnow-state").textContent = settingsCollectorState(newsNow);
  $("#settings-newsnow-detail").textContent = newsNow.value || "NewsNow 新闻源";
  const xStart = workspace.querySelector('[data-settings-action="x-start"]');
  const xStop = workspace.querySelector('[data-settings-action="x-stop"]');
  const newsStart = workspace.querySelector('[data-settings-action="newsnow-start"]');
  const newsStop = workspace.querySelector('[data-settings-action="newsnow-stop"]');
  if (xStart) xStart.disabled = xCollector.running || !apiReady;
  if (xStop) xStop.disabled = !xCollector.running || !apiReady;
  if (newsStart) newsStart.disabled = newsNow.running || !apiReady;
  if (newsStop) newsStop.disabled = !newsNow.running || !apiReady;

  $("#settings-source-count").textContent = `${state.accounts.length} 个信源`;
  $("#settings-data-mode").textContent = config.mode || "--";
  $("#settings-database-name").textContent = config.database?.value || "--";
  $("#settings-api-state").textContent = apiReady ? "已连接" : "未连接";
  $("#settings-project-mode").textContent = config.mode === "local-database" ? "本地数据库" : "静态回退";
}

function exportSafeSettings() {
  const config = state.config || fallbackConfig;
  const deepseek = config.deepseek || {};
  const payload = {
    product: "SignalDesk",
    author: "八月",
    exportedAt: new Date().toISOString(),
    mode: config.mode || "local-database",
    deepseek: {
      configured: Boolean(deepseek.configured),
      enabled: Boolean(deepseek.enabled),
      apiBase: deepseek.apiBase || "",
      model: deepseek.model || deepseek.value || "",
      maskedKey: deepseek.maskedKey || "",
    },
    collectors: {
      x: { state: config.xCollector?.state || "offline", running: Boolean(config.xCollector?.running) },
      newsNow: { state: config.newsNow?.state || "offline", running: Boolean(config.newsNow?.running) },
    },
    note: "此文件为脱敏状态导出，不包含任何 API Key 或本地数据库内容。",
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `signaldesk-settings-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("已导出脱敏配置，不包含 API Key");
}

async function testDeepSeek() {
  try {
    showToast("正在测试 DeepSeek...");
    const result = await fetchJson("/api/deepseek/test", { method: "POST", body: "{}" });
    if (result.ok) {
      showToast(`DeepSeek 测试通过：${result.model}`);
    } else if (result.fallbackAvailable) {
      showToast(result.error || "远程 AI 未配置，本地规则分析可用");
    } else {
      showToast(`DeepSeek 测试失败：${result.error}`);
    }
  } catch (error) {
    showToast(`DeepSeek 测试失败：${error.message}`);
  }
}

function renderAll() {
  renderKoreaMarket();
  renderMemorySpot();
  renderMarketSummary();
  renderConnectionStatus();
  renderCollectorControl();
  renderNewsNowControl();
  renderSettingsCenter();
  renderGroups();
  renderAccounts();
  renderMetrics();
  renderOverviewActionCards();
  renderAiStatus();
  renderFilters();
  renderFeed();
  renderMarketMap();
  renderEastmoneyRank();
  renderSignals();
  renderTopics();
  renderSummary();
  renderReferences();
  renderWorkspaceView();
  renderTechEarnings();
  renderIndexFutures();
  renderMarketPulse();
  renderAShareMarketSnapshot();
  renderWarRoom();
  renderSectorFundFlow();
  renderEtfFlow();
  renderStockFundFlow();
  renderTreasuryWorkspace();
  renderIndustryObserver();
  renderMobileView();
}

bindEvents();
bindIndustryObserverEvents();
renderWorkspaceView();
renderMobileView();
if (state.workspaceView === "index-futures") {
  renderIndexFutures();
  renderMarketPulse();
  renderAShareMarketSnapshot();
}
if (state.workspaceView === "war-room") renderWarRoom();
if (state.workspaceView === "sector-flow") renderSectorFundFlow();
if (state.workspaceView === "etf-flow") renderEtfFlow();
if (state.workspaceView === "stock-flow") renderStockFundFlow();
if (state.workspaceView === "treasury") renderTreasuryWorkspace();
if (state.workspaceView === "tech-earnings") renderTechEarnings();
if (state.workspaceView === "industry-observer") renderIndustryObserver();
loadData();
window.setInterval(() => {
  if (document.hidden) return;
  loadData();
}, AUTO_REFRESH_MS);
window.setInterval(() => {
  if (document.hidden || state.workspaceView !== "sector-flow") return;
  pollSectorFundFlowLatest({ render: true });
}, SECTOR_FLOW_VIEW_REFRESH_MS);
window.setInterval(() => {
  if (document.hidden || state.workspaceView !== "etf-flow" || !state.etfFlowFollowLatest) return;
  loadEtfFlow({ silent: true, render: true });
}, ETF_FLOW_VIEW_REFRESH_MS);
window.setInterval(() => {
  if (document.hidden || state.workspaceView !== "stock-flow" || !state.stockFlowFollowLatest) return;
  loadStockFundFlow({ silent: true, render: true });
}, STOCK_FLOW_VIEW_REFRESH_MS);
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) loadData();
});
window.addEventListener("focus", loadData);
window.addEventListener("resize", () => {
  if (state.workspaceView === "index-futures") renderIndexFuturesChart(selectedIndexFuturesDay());
  if (state.workspaceView === "war-room") {
    renderWarRoomChart(warRoomSnapshots(selectedWarRoomDay()));
    renderWarRoomTreasury();
  }
  if (state.workspaceView === "sector-flow") renderSectorFundFlow();
  if (state.workspaceView === "etf-flow") renderEtfFlow();
  if (state.workspaceView === "stock-flow") renderStockFundFlow();
  if (state.workspaceView === "treasury") renderTreasuryWorkspace();
});
