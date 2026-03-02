const SUPPORTED_LANGS = ["zh-Hans", "zh-Hant", "en", "ja", "ko"];
const THEME_KEY = "ia_theme_pref";
const THEME_PREFS = ["auto", "dark", "light"];

const PATH_LANG_MAP = {
  zh: "zh-Hans",
  "zh-cn": "zh-Hans",
  "zh-hans": "zh-Hans",
  "zh-tw": "zh-Hant",
  "zh-hk": "zh-Hant",
  "zh-hant": "zh-Hant",
  en: "en",
  ja: "ja",
  ko: "ko"
};

const zhHans = {
  brand: "iAssets",
  navFeatures: "特性",
  navReviews: "评价",
  navPricing: "价格",
  navFaq: "常见问题",
  navDownload: "下载",
  heroEyebrow: "iAssets",
  heroTitle: "快速掌握你的资产全景。",
  heroDesc: "像 SparkMemos 一样清晰直接的页面体验，但针对家庭资产管理场景做了完整重构。资产、负债、结构、目标和趋势一屏可见。",
  heroCta: "下载应用",
  heroCard1Title: "秒记资产变动",
  heroCard1Desc: "账户余额变化可快速录入。",
  heroCard2Title: "合集化账本整理",
  heroCard2Desc: "按家庭、个人、目标管理账本。",
  heroCard3Title: "快速搜索筛选",
  heroCard3Desc: "几秒定位到目标账户或变更。",
  totalAssets: "总资产",
  netAssets: "净资产",
  liabilities: "总负债",
  trend: "30 天趋势",
  members: "家庭成员",
  featuresEyebrow: "特性",
  featuresTitle: "围绕家庭资产管理而设计。",
  featuresDesc: "不是泛记账，而是资产结构分析、风险感知和长期目标追踪。",
  f1t: "资产全景总览",
  f1d: "总资产、净资产、负债与占比一页看清。",
  f2t: "结构与货币分析",
  f2d: "结构卡与货币卡帮助识别配置偏差。",
  f3t: "流向与趋势",
  f3d: "观察净资产变化节奏，提前发现风险。",
  f4t: "多账本管理",
  f4d: "支持默认账本和多账本并行管理。",
  f5t: "家庭协作",
  f5d: "成员管理与共享让多人协作更顺畅。",
  f6t: "隐私与安全",
  f6d: "密码保护、生物解锁、自动锁定。",
  detailsEyebrow: "Product details",
  detailsTitle: "现在就开始长期资产复盘。",
  detailsDesc: "把分散在各处的数据聚合到同一套视图与指标。",
  d1t: "多类型账户",
  d1d: "支持资金、理财、固定、应收、应付和贷款。",
  d2t: "目标卡片",
  d2d: "自动计算还需金额，避免目标失焦。",
  d3t: "汇率支持",
  d3d: "可选本位币，跨币种资产统一衡量。",
  d4t: "账本分享",
  d4d: "家庭成员可协同维护同一组资产数据。",
  d5t: "卡片管理",
  d5d: "按个人偏好调整首页卡片顺序和显隐。",
  d6t: "本地优先",
  d6d: "数据默认本地存储，可选 iCloud 同步。",
  downloadEyebrow: "下载",
  downloadTitle: "立即开始",
  downloadDesc: "下载 iAssets，快速建立你的家庭资产体系。",
  downloadBtn: "下载应用",
  reviewsEyebrow: "评价",
  reviewsTitle: "用户正在用 iAssets 养成更好的资产习惯。",
  reviewsDesc: "从记一笔，到读懂全局资产变化。",
  r1: "终于能把家庭资产放在一个地方看全了。",
  r2: "每月复盘从一小时缩短到十分钟。",
  r3: "趋势卡片很直观，父母也能看懂。",
  r4: "多账本功能非常适合我和爱人分工维护。",
  r5: "目标卡片让长期规划更有执行力。",
  r6: "界面轻量，日常打开没有负担。",
  pricingEyebrow: "价格",
  pricingTitle: "价格低廉、持续迭代。",
  pricingDesc: "建议按年支付，共建软件的良性发展，当然也支持终身买断。",
  monthly: "按月",
  yearly: "按年",
  currency: "¥",
  planYearly: "Subscribe",
  priceYearlySuffix: "/年",
  planLifetime: "Lifetime",
  popular: "Popular",
  p2d: "按年支付，共建软件的良性发展。",
  p2f1: "全部核心功能",
  p2f2: "iCloud 同步",
  p2f3: "无限账本",
  p2cta: "立即订阅",
  p3d: "一次购买，终身更新。",
  p3f1: "全部高级功能",
  p3f2: "终身使用",
  p3f3: "优先支持",
  p3cta: "立即购买",
  faqEyebrow: "常见问题",
  faqTitle: "常见问题",
  faqDesc: "如果你有疑问，可以先看这里。",
  q1: "支持哪些语言？",
  a1: "和 iAssets 一致：简体中文、繁體中文、English、日本語、한국어。",
  q2: "支持离线使用吗？",
  a2: "支持。无网络也可新增和编辑，联网后按策略同步。",
  q3: "数据存在哪里？",
  a3: "默认本地存储，可按需开启 iCloud 同步。",
  q4: "可以多人协作吗？",
  a4: "可以。开启家庭模式即可管理成员和共享账本。",
  q5: "Android 可用吗？",
  a5: "目前主要面向 Apple 生态。",
  q6: "如何开始？",
  a6: "下载应用后创建第一个账本，即可开始记录。",
  footerTag: "做您的家庭资产管理管家",
  downloadHint: "扫码后可前往 App Store 下载",
  footerLinks: "页面",
  footerCompare: "竞品对比"
};

const COPY = {
  "zh-Hans": zhHans,
  "zh-Hant": {
    ...zhHans,
    navFeatures: "特性",
    navReviews: "評價",
    navPricing: "價格",
    navFaq: "常見問題",
    navDownload: "下載",
    heroEyebrow: "iAssets",
    heroTitle: "快速掌握你的資產全景。",
    heroDesc: "像 SparkMemos 一樣清晰直接的頁面體驗，但針對家庭資產管理場景做了完整重構。資產、負債、結構、目標和趨勢一屏可見。",
    heroCta: "下載應用",
    heroCard1Title: "秒記資產變動",
    heroCard1Desc: "帳戶餘額變化可快速錄入。",
    heroCard2Title: "合集化帳本整理",
    heroCard2Desc: "按家庭、個人、目標管理帳本。",
    heroCard3Title: "快速搜尋篩選",
    heroCard3Desc: "幾秒定位到目標帳戶或變更。",
    totalAssets: "總資產",
    netAssets: "淨資產",
    liabilities: "總負債",
    trend: "30 天趨勢",
    members: "家庭成員",
    featuresEyebrow: "特性",
    featuresTitle: "圍繞家庭資產管理而設計。",
    featuresDesc: "不是泛記帳，而是資產結構分析、風險感知和長期目標追蹤。",
    f1t: "資產全景總覽",
    f1d: "總資產、淨資產、負債與占比一頁看清。",
    f2t: "結構與貨幣分析",
    f2d: "結構卡與貨幣卡幫助識別配置偏差。",
    f3t: "流向與趨勢",
    f3d: "觀察淨資產變化節奏，提前發現風險。",
    f4t: "多帳本管理",
    f4d: "支援預設帳本和多帳本並行管理。",
    f5t: "家庭協作",
    f5d: "成員管理與共享讓多人協作更順暢。",
    f6t: "隱私與安全",
    f6d: "密碼保護、生物解鎖、自動鎖定。",
    detailsEyebrow: "產品詳情",
    detailsTitle: "現在就開始長期資產復盤。",
    detailsDesc: "把分散在各處的資料聚合到同一套視圖與指標。",
    d1t: "多類型帳戶",
    d1d: "支援資金、理財、固定、應收、應付和貸款。",
    d2t: "目標卡片",
    d2d: "自動計算還需金額，避免目標失焦。",
    d3t: "匯率支援",
    d3d: "可選本位幣，跨幣種資產統一衡量。",
    d4t: "帳本分享",
    d4d: "家庭成員可協同維護同一組資產資料。",
    d5t: "卡片管理",
    d5d: "按個人偏好調整首頁卡片順序和顯隱。",
    d6t: "本地優先",
    d6d: "資料預設本地儲存，可選 iCloud 同步。",
    downloadEyebrow: "下載",
    downloadTitle: "立即開始",
    downloadDesc: "下載 iAssets，快速建立你的家庭資產體系。",
    downloadBtn: "下載應用",
    reviewsEyebrow: "評價",
    reviewsTitle: "使用者正在用 iAssets 建立更好的資產習慣。",
    reviewsDesc: "從記一筆，到讀懂全局資產變化。",
    r1: "終於能把家庭資產放在一個地方看全了。",
    r2: "每月復盤從一小時縮短到十分鐘。",
    r3: "趨勢卡片很直觀，父母也能看懂。",
    r4: "多帳本功能非常適合我和伴侶分工維護。",
    r5: "目標卡片讓長期規劃更有執行力。",
    r6: "介面輕量，日常打開沒有負擔。",
    pricingEyebrow: "價格",
    pricingTitle: "價格低廉、持續迭代。",
    pricingDesc: "建議按年支付，共建軟體的良性發展，當然也支援終身買斷。",
    monthly: "按月",
    yearly: "按年",
    currency: "¥",
    planYearly: "Subscribe",
    priceYearlySuffix: "/年",
    planLifetime: "Lifetime",
    popular: "熱門",
    p2d: "按年支付，共建軟體的良性發展。",
    p2f1: "全部核心功能",
    p2f2: "iCloud 同步",
    p2f3: "無限帳本",
    p2cta: "立即訂閱",
    p3d: "一次購買，終身更新。",
    p3f1: "全部進階功能",
    p3f2: "終身使用",
    p3f3: "優先支援",
    p3cta: "立即購買",
    faqEyebrow: "常見問題",
    faqTitle: "常見問題",
    faqDesc: "如果你有疑問，可以先看這裡。",
    q1: "支援哪些語言？",
    a1: "與 iAssets 一致：簡體中文、繁體中文、English、日本語、한국어。",
    q2: "支援離線使用嗎？",
    a2: "支援。無網路也可新增和編輯，連網後按策略同步。",
    q3: "資料存在哪裡？",
    a3: "預設本地儲存，可按需開啟 iCloud 同步。",
    q4: "可以多人協作嗎？",
    a4: "可以。開啟家庭模式即可管理成員和共享帳本。",
    q5: "Android 可用嗎？",
    a5: "目前主要面向 Apple 生態。",
    q6: "如何開始？",
    a6: "下載應用後建立第一個帳本，即可開始記錄。",
    footerTag: "做您的家庭資產管理管家",
    downloadHint: "掃碼後可前往 App Store 下載",
    footerLinks: "頁面",
    footerCompare: "競品對比"
  },
  en: {
    ...zhHans,
    navFeatures: "Features",
    navReviews: "Reviews",
    navPricing: "Pricing",
    navFaq: "FAQ",
    navDownload: "Download",
    heroEyebrow: "iAssets",
    heroTitle: "Understand your family balance sheet at a glance.",
    heroDesc: "A SparkMemos-like clean rhythm, rebuilt for family asset management.",
    heroCta: "Download App",
    heroCard1Title: "Capture changes fast",
    heroCard1Desc: "Log account updates in seconds.",
    heroCard2Title: "Organize with books",
    heroCard2Desc: "Manage household, personal and goal books.",
    heroCard3Title: "Search and filter",
    heroCard3Desc: "Find target accounts in seconds.",
    totalAssets: "Total assets",
    netAssets: "Net assets",
    liabilities: "Liabilities",
    trend: "30-day trend",
    members: "Members",
    featuresEyebrow: "Features",
    featuresTitle: "Designed for household asset management.",
    featuresDesc: "Not generic bookkeeping. It is built for structure, risk and long-term goals.",
    f1t: "Asset overview",
    f1d: "See total assets, net assets and liabilities in one page.",
    f2t: "Structure and currency",
    f2d: "Structure and currency cards help spot allocation bias.",
    f3t: "Flow and trend",
    f3d: "Track net-worth rhythm and detect risks earlier.",
    f4t: "Multi-book management",
    f4d: "Default and multiple books can run together.",
    f5t: "Family collaboration",
    f5d: "Member management and sharing for multi-person workflows.",
    f6t: "Privacy and security",
    f6d: "Passcode, biometric unlock and auto-lock.",
    detailsTitle: "Start long-term asset review today.",
    detailsDesc: "Aggregate scattered data into one coherent view.",
    d1t: "Multi-type accounts",
    d1d: "Support cash, investments, fixed, receivable, payable, and loans.",
    d2t: "Goal card",
    d2d: "Auto-calculate remaining amount to keep goals actionable.",
    d3t: "FX support",
    d3d: "Optional base currency for multi-currency assets.",
    d4t: "Book sharing",
    d4d: "Family members can co-maintain one data set.",
    d5t: "Card management",
    d5d: "Customize card order and visibility on home screen.",
    d6t: "Local-first",
    d6d: "Data is local by default with optional iCloud sync.",
    downloadEyebrow: "Download",
    downloadTitle: "Start now",
    downloadDesc: "Install iAssets and build your family asset system.",
    downloadBtn: "Download",
    reviewsEyebrow: "Reviews",
    reviewsTitle: "People build better financial habits with iAssets.",
    reviewsDesc: "From recording one item to understanding full trends.",
    r1: "Finally we can see all household assets in one place.",
    r2: "Monthly review dropped from one hour to ten minutes.",
    r3: "Trend cards are intuitive and family-friendly.",
    r4: "Multi-book mode is perfect for couple collaboration.",
    r5: "Goal card makes long-term planning executable.",
    r6: "Light UI, easy to open every day.",
    pricingEyebrow: "Pricing",
    pricingTitle: "Affordable pricing, continuous updates.",
    pricingDesc: "Yearly payment is recommended to support sustainable development, and lifetime purchase is also available.",
    monthly: "Monthly",
    yearly: "Yearly",
    currency: "$",
    planYearly: "Subscribe",
    priceYearlySuffix: "/yr",
    planLifetime: "Lifetime",
    p2d: "Pay yearly to support the healthy growth of the software.",
    p2f1: "All core features",
    p2f2: "iCloud sync",
    p2f3: "Unlimited books",
    p2cta: "Subscribe yearly",
    p3d: "One-time purchase, lifetime updates.",
    p3f1: "All advanced features",
    p3f2: "Lifetime access",
    p3f3: "Priority support",
    p3cta: "Buy lifetime",
    faqEyebrow: "FAQ",
    faqTitle: "Frequently asked questions",
    faqDesc: "If you have questions, start here.",
    q1: "Which languages are supported?",
    a1: "Same as iAssets app: zh-Hans, zh-Hant, English, Japanese, Korean.",
    q2: "Does it work offline?",
    a2: "Yes. You can create and edit offline, then sync when online.",
    q3: "Where is data stored?",
    a3: "Local-first by default, with optional iCloud sync.",
    q4: "Can a family collaborate?",
    a4: "Yes. Family mode supports members and shared books.",
    q5: "Is Android supported?",
    a5: "Currently focused on Apple ecosystem.",
    q6: "How do I start?",
    a6: "Download the app and create your first book.",
    footerTag: "Your household asset management companion",
    downloadHint: "Scan to open App Store",
    footerLinks: "Pages",
    footerCompare: "Compare"
  },
  ja: {
    ...zhHans,
    navFeatures: "機能",
    navReviews: "評価",
    navPricing: "料金",
    navFaq: "FAQ",
    navDownload: "ダウンロード",
    heroTitle: "家族資産の全体像を、すばやく把握。",
    heroDesc: "SparkMemos の構成リズムを参考に、資産管理向けに最適化しました。",
    heroCta: "アプリを入手",
    heroCard1Title: "資産変動を即記録",
    heroCard1Desc: "口座残高の変化をすぐに入力。",
    heroCard2Title: "帳簿をコレクション整理",
    heroCard2Desc: "家庭・個人・目標で整理。",
    heroCard3Title: "検索とフィルタ",
    heroCard3Desc: "対象口座を数秒で特定。",
    totalAssets: "総資産",
    netAssets: "純資産",
    liabilities: "総負債",
    trend: "30日トレンド",
    members: "メンバー",
    featuresEyebrow: "機能",
    featuresTitle: "家族資産管理に特化した設計。",
    featuresDesc: "汎用の家計簿ではなく、構造分析と長期目標の追跡に最適化。",
    f1t: "資産サマリー",
    f1d: "総資産・純資産・負債を1ページで確認。",
    f2t: "構成と通貨",
    f2d: "構成カードと通貨カードで偏りを把握。",
    f3t: "フローと推移",
    f3d: "純資産の変化リズムを継続観測。",
    f4t: "複数帳簿管理",
    f4d: "デフォルト帳簿と複数帳簿を併用可能。",
    f5t: "家族コラボ",
    f5d: "メンバー管理と共有で共同運用。",
    f6t: "プライバシー保護",
    f6d: "パスコード、生体認証、自動ロック対応。",
    detailsTitle: "長期の資産レビューを今すぐ開始。",
    detailsDesc: "分散したデータを同じ指標系に統合します。",
    d1t: "複数タイプ口座",
    d1d: "資金、投資、固定、債権、債務、ローンに対応。",
    d2t: "目標カード",
    d2d: "残額を自動算出し、計画を継続しやすくします。",
    d3t: "為替対応",
    d3d: "基準通貨を選択して横断比較できます。",
    d4t: "帳簿共有",
    d4d: "家族で同一データを共同メンテナンス。",
    d5t: "カード管理",
    d5d: "ホームの表示順と表示可否を調整可能。",
    d6t: "ローカル優先",
    d6d: "データはローカル保存、必要時に iCloud 同期。",
    downloadTitle: "今すぐ開始",
    downloadEyebrow: "ダウンロード",
    downloadDesc: "iAssets をダウンロードして資産管理を開始。",
    downloadBtn: "ダウンロード",
    reviewsEyebrow: "評価",
    reviewsTitle: "iAssets で資産習慣が変わる。",
    reviewsDesc: "記録から全体理解まで、最短でつながる。",
    r1: "家族資産を一画面で確認できるようになりました。",
    r2: "月次レビュー時間が大幅に短縮しました。",
    r3: "トレンドカードが直感的で見やすいです。",
    r4: "複数帳簿で夫婦分担がしやすいです。",
    r5: "目標カードで計画を継続しやすくなりました。",
    r6: "軽快な UI で毎日開きやすいです。",
    pricingEyebrow: "料金",
    pricingTitle: "低価格で、継続的にアップデート。",
    pricingDesc: "ソフトウェアの健全な発展のため年額払いを推奨していますが、買い切りにも対応しています。",
    monthly: "月額",
    yearly: "年額",
    currency: "¥",
    planYearly: "Subscribe",
    priceYearlySuffix: "/年",
    planLifetime: "Lifetime",
    p2d: "年額で支払い、ソフトウェアの健全な発展を共に支えてください。",
    p2f1: "主要機能をすべて利用可能",
    p2f2: "iCloud 同期",
    p2f3: "帳簿数無制限",
    p2cta: "年額で購読",
    p3d: "買い切りで永久アップデート。",
    p3f1: "全上位機能",
    p3f2: "永久利用",
    p3f3: "優先サポート",
    p3cta: "買い切りで購入",
    faqEyebrow: "FAQ",
    faqTitle: "よくある質問",
    faqDesc: "よくある疑問を先に確認できます。",
    q1: "対応言語は？",
    a1: "iAssets と同じく、簡体字・繁体字・英語・日本語・韓国語に対応。",
    q2: "オフラインで使えますか？",
    a2: "はい。オフラインで作成・編集し、オンライン時に同期できます。",
    q3: "データはどこに保存されますか？",
    a3: "ローカル優先保存で、必要に応じて iCloud 同期。",
    q4: "家族で共同利用できますか？",
    a4: "はい。家族モードでメンバー管理と共有帳簿が可能です。",
    q5: "Android 版はありますか？",
    a5: "現在は主に Apple エコシステム向けです。",
    q6: "始め方は？",
    a6: "アプリを入手し、最初の帳簿を作成してください。",
    footerTag: "家族資産管理のパートナー",
    downloadHint: "QR から App Store を開けます",
    footerLinks: "ページ",
    footerCompare: "比較"
  },
  ko: {
    ...zhHans,
    navFeatures: "기능",
    navReviews: "후기",
    navPricing: "요금",
    navFaq: "FAQ",
    navDownload: "다운로드",
    heroTitle: "가족 자산 전경을 빠르게 파악하세요.",
    heroDesc: "SparkMemos 스타일의 리듬을 유지하고 자산관리 시나리오에 맞춰 재구성했습니다.",
    heroCta: "앱 다운로드",
    heroCard1Title: "변동 즉시 기록",
    heroCard1Desc: "계정 잔액 변화를 빠르게 입력.",
    heroCard2Title: "장부 컬렉션 정리",
    heroCard2Desc: "가정/개인/목표 단위로 정리.",
    heroCard3Title: "검색과 필터",
    heroCard3Desc: "목표 계정을 몇 초 만에 찾습니다.",
    totalAssets: "총자산",
    netAssets: "순자산",
    liabilities: "총부채",
    trend: "30일 추이",
    members: "구성원",
    featuresEyebrow: "기능",
    featuresTitle: "가족 자산 관리 중심 설계",
    featuresDesc: "일반 가계부가 아니라 구조 분석과 장기 목표 추적에 최적화했습니다.",
    f1t: "자산 요약",
    f1d: "총자산, 순자산, 부채를 한 화면에서 확인합니다.",
    f2t: "구조/통화 분석",
    f2d: "구조 카드와 통화 카드로 편중을 파악합니다.",
    f3t: "흐름/추이",
    f3d: "순자산 변화 리듬을 계속 추적합니다.",
    f4t: "멀티 장부",
    f4d: "기본 장부와 멀티 장부를 함께 운영할 수 있습니다.",
    f5t: "가족 협업",
    f5d: "구성원 관리와 공유로 협업이 쉬워집니다.",
    f6t: "보안/프라이버시",
    f6d: "암호, 생체인증, 자동 잠금을 지원합니다.",
    detailsTitle: "지금부터 장기 자산 리뷰를 시작하세요.",
    detailsDesc: "흩어진 데이터를 한 지표 체계로 통합합니다.",
    d1t: "다양한 계정 유형",
    d1d: "자금, 투자, 고정, 채권, 채무, 대출 지원.",
    d2t: "목표 카드",
    d2d: "남은 금액을 자동 계산해 실행력을 높입니다.",
    d3t: "환율 지원",
    d3d: "기준 통화를 선택해 통합 비교할 수 있습니다.",
    d4t: "장부 공유",
    d4d: "가족 구성원이 같은 데이터를 함께 관리합니다.",
    d5t: "카드 관리",
    d5d: "홈 카드 순서와 표시 여부를 조절할 수 있습니다.",
    d6t: "로컬 우선",
    d6d: "기본은 로컬 저장, 필요 시 iCloud 동기화.",
    downloadTitle: "지금 시작",
    downloadEyebrow: "다운로드",
    downloadDesc: "iAssets를 설치하고 가족 자산 체계를 시작하세요.",
    downloadBtn: "앱 다운로드",
    reviewsEyebrow: "후기",
    reviewsTitle: "iAssets로 자산 습관이 달라집니다.",
    reviewsDesc: "기록에서 전체 이해까지 빠르게 연결됩니다.",
    r1: "가족 자산을 한 화면에서 볼 수 있게 됐어요.",
    r2: "월간 점검 시간이 크게 줄었습니다.",
    r3: "추이 카드가 직관적이라 이해가 쉽습니다.",
    r4: "멀티 장부로 역할 분담이 편해졌습니다.",
    r5: "목표 카드 덕분에 계획 실행력이 올라갔습니다.",
    r6: "가벼운 UI라 매일 열어보기 좋습니다.",
    pricingEyebrow: "요금",
    pricingTitle: "합리적인 가격, 지속적인 업데이트",
    pricingDesc: "소프트웨어의 건강한 발전을 위해 연간 결제를 권장하며, 평생 구매도 지원합니다.",
    monthly: "월간",
    yearly: "연간",
    currency: "₩",
    planYearly: "Subscribe",
    priceYearlySuffix: "/년",
    planLifetime: "Lifetime",
    p2d: "연간 결제로 소프트웨어의 건강한 발전에 함께해 주세요.",
    p2f1: "모든 핵심 기능 포함",
    p2f2: "iCloud 동기화",
    p2f3: "장부 무제한",
    p2cta: "연간 구독",
    p3d: "1회 구매, 평생 업데이트.",
    p3f1: "모든 고급 기능",
    p3f2: "평생 사용",
    p3f3: "우선 지원",
    p3cta: "평생 구매",
    faqEyebrow: "자주 묻는 질문",
    faqTitle: "자주 묻는 질문",
    faqDesc: "궁금한 내용을 먼저 확인하세요.",
    q1: "어떤 언어를 지원하나요?",
    a1: "iAssets와 동일: 중국어 간체/번체, 영어, 일본어, 한국어.",
    q2: "오프라인에서 사용 가능한가요?",
    a2: "가능합니다. 오프라인에서 작성/수정 후 온라인에서 동기화됩니다.",
    q3: "데이터는 어디에 저장되나요?",
    a3: "기본은 로컬 저장이며, 선택적으로 iCloud 동기화를 사용합니다.",
    q4: "가족이 함께 사용할 수 있나요?",
    a4: "가능합니다. 가족 모드에서 구성원과 공유 장부를 관리합니다.",
    q5: "Android를 지원하나요?",
    a5: "현재는 Apple 생태계 중심입니다.",
    q6: "어떻게 시작하나요?",
    a6: "앱을 설치한 뒤 첫 장부를 생성하면 됩니다.",
    footerTag: "가족 자산 관리 파트너",
    downloadHint: "QR로 App Store 이동",
    footerLinks: "페이지",
    footerCompare: "비교"
  }
};

function normalizeLang(input) {
  if (!input) return null;
  const v = input.trim().toLowerCase().replace("_", "-");
  return PATH_LANG_MAP[v] || null;
}

function langFromPath() {
  const seg = window.location.pathname.split("/").filter(Boolean)[0];
  return normalizeLang(seg);
}

function langFromQuery() {
  const v = new URLSearchParams(window.location.search).get("lang");
  if (!v) return null;
  if (SUPPORTED_LANGS.includes(v)) return v;
  return normalizeLang(v);
}

function langFromBrowser() {
  const langs = Array.isArray(navigator.languages) && navigator.languages.length > 0
    ? navigator.languages
    : [navigator.language || "en"];
  for (const raw of langs) {
    const v = (raw || "").toLowerCase();
    const byMap = normalizeLang(v);
    if (byMap) return byMap;
    if (v.startsWith("zh-tw") || v.startsWith("zh-hk") || v.includes("hant")) return "zh-Hant";
    if (v.startsWith("zh")) return "zh-Hans";
    if (v.startsWith("ja")) return "ja";
    if (v.startsWith("ko")) return "ko";
    if (v.startsWith("en")) return "en";
  }
  return null;
}

function detectLang() {
  const fromPath = langFromPath();
  if (SUPPORTED_LANGS.includes(fromPath)) return fromPath;
  const fromQuery = langFromQuery();
  if (SUPPORTED_LANGS.includes(fromQuery)) return fromQuery;
  const fromStorage = localStorage.getItem("ia_lang");
  if (SUPPORTED_LANGS.includes(fromStorage)) return fromStorage;
  const fromBrowser = langFromBrowser();
  if (SUPPORTED_LANGS.includes(fromBrowser)) return fromBrowser;
  return "en";
}

function applyLang(lang) {
  const dict = COPY[lang] || COPY.en;
  document.documentElement.lang = lang;
  document.title = `${dict.brand} - ${dict.heroTitle}`;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.getAttribute("data-i18n");
    if (dict[k] !== undefined) el.textContent = dict[k];
  });
}

function updateUrl(lang) {
  const url = new URL(window.location.href);
  url.searchParams.delete("lang");
  history.replaceState({}, "", url);
}

function updateLangPills(activeLang) {
  document.querySelectorAll(".lang-pill").forEach((el) => {
    const on = el.getAttribute("data-lang") === activeLang;
    el.classList.toggle("active", on);
    el.setAttribute("aria-pressed", on ? "true" : "false");
  });
}

function bindLangPills() {
  document.querySelectorAll(".lang-pill").forEach((el) => {
    el.addEventListener("click", () => {
      const next = el.getAttribute("data-lang");
      if (!SUPPORTED_LANGS.includes(next)) return;
      applyLang(next);
      localStorage.setItem("ia_lang", next);
      updateLangPills(next);
      updateUrl(next);
    });
  });
}

function bindMobileMenu(menuBtn, mobileMenu) {
  if (!menuBtn || !mobileMenu) return;
  const closeMenu = () => {
    mobileMenu.classList.remove("open");
    mobileMenu.setAttribute("aria-hidden", "true");
    menuBtn.setAttribute("aria-expanded", "false");
  };
  const openMenu = () => {
    mobileMenu.classList.add("open");
    mobileMenu.setAttribute("aria-hidden", "false");
    menuBtn.setAttribute("aria-expanded", "true");
  };
  const toggleMenu = () => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    if (expanded) closeMenu();
    else openMenu();
  };
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });
  mobileMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeMenu);
  });
  document.addEventListener("click", (e) => {
    if (menuBtn.getAttribute("aria-expanded") !== "true") return;
    if (mobileMenu.contains(e.target) || menuBtn.contains(e.target)) return;
    closeMenu();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) closeMenu();
  });
}

function detectTheme() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

function readThemePref() {
  const v = localStorage.getItem(THEME_KEY);
  return THEME_PREFS.includes(v) ? v : "auto";
}

function nextThemePref(pref) {
  const idx = THEME_PREFS.indexOf(pref);
  return THEME_PREFS[(idx + 1) % THEME_PREFS.length];
}

function applyThemePref(pref) {
  applyTheme(pref === "auto" ? detectTheme() : pref);
}

function updateThemeButton(pref, btn) {
  if (!btn) return;
  const labels = {
    auto: "Theme: Auto",
    dark: "Theme: Dark",
    light: "Theme: Light"
  };
  btn.textContent = pref === "auto" ? "◐" : pref === "dark" ? "☾" : "☀";
  btn.setAttribute("aria-label", labels[pref]);
  btn.setAttribute("title", labels[pref]);
}

(function init() {
  const lang = detectLang();
  const switcher = document.getElementById("lang-switcher");
  const themeBtn = document.querySelector(".mode-btn");
  const menuBtn = document.querySelector(".menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const darkMedia = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  let themePref = readThemePref();
  applyLang(lang);
  applyThemePref(themePref);
  updateThemeButton(themePref, themeBtn);
  localStorage.setItem("ia_lang", lang);
  updateLangPills(lang);
  bindLangPills();
  bindMobileMenu(menuBtn, mobileMenu);
  updateUrl(lang);
  if (darkMedia) {
    const onChange = (e) => {
      if (themePref !== "auto") return;
      applyTheme(e.matches ? "dark" : "light");
      updateThemeButton(themePref, themeBtn);
    };
    if (typeof darkMedia.addEventListener === "function") {
      darkMedia.addEventListener("change", onChange);
    } else if (typeof darkMedia.addListener === "function") {
      darkMedia.addListener(onChange);
    }
  }
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      themePref = nextThemePref(themePref);
      localStorage.setItem(THEME_KEY, themePref);
      applyThemePref(themePref);
      updateThemeButton(themePref, themeBtn);
    });
  }
  if (switcher) {
    switcher.value = lang;
    switcher.addEventListener("change", (e) => {
      const next = e.target.value;
      if (!SUPPORTED_LANGS.includes(next)) return;
      applyLang(next);
      localStorage.setItem("ia_lang", next);
      updateUrl(next);
    });
  }
})();
