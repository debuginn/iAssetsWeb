const SUPPORTED_LANGS = ["zh-Hans", "zh-Hant-TW", "zh-Hant-HK", "zh-Hant-MO", "zh-Hant-SG", "en", "ja", "ko"];
const THEME_KEY = "ia_theme_pref";
const USER_LANG_KEY = "ia_lang_user";
const THEME_PREFS = ["auto", "dark", "light"];

const PATH_LANG_MAP = {
  zh: "zh-Hans",
  "zh-cn": "zh-Hans",
  "zh-hans": "zh-Hans",
  "zh-tw": "zh-Hant-TW",
  "zh-hant-tw": "zh-Hant-TW",
  "zh-hk": "zh-Hant-HK",
  "zh-mo": "zh-Hant-MO",
  "zh-sg": "zh-Hant-SG",
  "zh-hant": "zh-Hant-HK",
  "zh-hant-hk": "zh-Hant-HK",
  "zh-hant-mo": "zh-Hant-MO",
  "zh-hant-sg": "zh-Hant-SG",
  en: "en",
  ja: "ja",
  ko: "ko"
};

const LANG_ROUTE_MAP = {
  "zh-Hans": "/zh/",
  "zh-Hant-TW": "/zh-tw/",
  "zh-Hant-HK": "/zh-hk/",
  "zh-Hant-MO": "/zh-mo/",
  "zh-Hant-SG": "/zh-sg/",
  en: "/en/",
  ja: "/ja/",
  ko: "/ko/"
};

const LANG_LOCALE_MAP = {
  "zh-Hans": "zh_CN",
  "zh-Hant-TW": "zh_TW",
  "zh-Hant-HK": "zh_HK",
  "zh-Hant-MO": "zh_MO",
  "zh-Hant-SG": "zh_SG",
  en: "en_US",
  ja: "ja_JP",
  ko: "ko_KR"
};

const LANG_META_KEYWORDS = {
  "zh-Hans": "iAssets,家庭资产管理,资产管理,财富管理,净资产,记账",
  "zh-Hant-TW": "iAssets,家庭資產管理,資產管理,財富管理,淨資產,記帳",
  "zh-Hant-HK": "iAssets,家庭資產管理,資產管理,財富管理,淨資產,記帳",
  "zh-Hant-MO": "iAssets,家庭資產管理,資產管理,財富管理,淨資產,記帳",
  "zh-Hant-SG": "iAssets,家庭資產管理,資產管理,財富管理,淨資產,記帳",
  en: "iAssets,asset management,family finance,net worth tracker,budget app",
  ja: "iAssets,家計管理,資産管理,純資産,家族資産",
  ko: "iAssets,자산관리,가계관리,순자산,가족자산"
};

const zhHans = {
  brand: "iAssets",
  navFeatures: "特性",
  navReviews: "评价",
  navPricing: "价格",
  navFaq: "常见问题",
  navDownload: "下载",
  navPrivacy: "隐私政策",
  navTerms: "用户条款",
  heroEyebrow: "iAssets",
  heroTitle: "快速掌握你的资产全景、守护你的财富",
  heroDesc: "这是一款可视化资产管理工具，同时支持家庭资产管理。资产、负债、结构、目标和趋势一屏可见。",
  heroCta: "下载应用",
  heroCard1Title: "秒记资产变动",
  heroCard1Desc: "账户余额变化可快速录入。",
  heroCard2Title: "合集化账本整理",
  heroCard2Desc: "按家庭、个人、目标管理账本。",
  heroCard3Title: "快速搜索筛选",
  heroCard3Desc: "几秒定位到目标账户或变更。",
  trustEyebrow: "TRUST",
  trustTitle: "受领先银行、金融平台信赖",
  trustDesc: "与知名银行与证券金融平台合作，做看得懂，用得起的平价软件",
  trustCtaBiz: "商务合作",
  trustCtaMore: "了解详情",
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
  r7: "自动汇总净资产后，每周复盘更有方向了。",
  r8: "分类结构很清楚，终于知道钱主要放在哪。",
  r9: "共享账本很好用，家人一起维护也不混乱。",
  r10: "目标进度可视化后，储蓄执行率明显提升。",
  r11: "离线记录很稳定，通勤路上也能随手更新。",
  r12: "切换多个账本很顺滑，工作和家庭终于分开了。",
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
  a1: "和 iAssets 一致：中文简体、中文繁体台湾、中文繁体香港、中文繁体澳门、中文繁体新加坡、English、日本語、한국어。",
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
  footerCompare: "竞品对比",
  socialTitle: "媒体",
  socialWechat: "微信",
  socialWeibo: "微博",
  socialXiaohongshu: "小红书",
  socialZhihu: "知乎",
  privacyPageTitle: "隐私政策",
  termsPageTitle: "用户条款和条件",
  legalUpdated: "最后更新：2026 年 3 月 3 日",
  privacyEyebrow: "Policy",
  privacyTitle: "隐私政策",
  privacyIntro: "欢迎使用 iAssets。我们重视您的隐私，并致力于保护您的个人数据。本隐私政策说明 iAssets 在数据处理方面的原则与方式。",
  privacyS1Title: "1. 我们收集的数据",
  privacyS1P: "iAssets 采用本地优先的数据策略。您在应用中录入的资产、负债、账户与分类等数据，默认存储在您的设备本地。",
  privacyS1L1: "默认不上传到我们的服务器。",
  privacyS1L2: "默认不建立与身份关联的远程用户画像。",
  privacyS2Title: "2. 同步与备份",
  privacyS2P: "若您主动启用 iCloud 同步，数据将通过 Apple iCloud 进行跨设备同步。该过程受 Apple 的服务条款与隐私政策约束。",
  privacyS3Title: "3. 第三方服务",
  privacyS3P: "我们可能使用必要的第三方基础设施能力（如 Apple 平台能力）以提供核心功能。我们不会向第三方出售您的个人数据。",
  privacyS4Title: "4. 数据安全",
  privacyS4P: "我们建议您启用设备密码、生物识别解锁和系统级安全策略。iAssets 支持密码保护、自动锁定等安全机制，帮助提升数据安全性。",
  privacyS5Title: "5. 数据共享与披露",
  privacyS5P: "除法律法规要求或为维护用户与平台安全的必要情形外，我们不会主动向第三方披露您的本地数据内容。",
  privacyS6Title: "6. 政策更新",
  privacyS6P: "我们可能不定期更新本政策。更新版本发布后即生效。若涉及重大变更，我们会通过应用或网站进行提示。",
  privacyS7Title: "7. 联系我们",
  privacyS7P: "如果您对本政策有任何问题，请通过官方渠道联系我们：idebuginn@gmail.com",
  termsEyebrow: "Terms",
  termsTitle: "用户条款和条件",
  termsIntro: "欢迎使用 iAssets。在使用本应用及相关服务前，请您仔细阅读并理解本条款。您使用 iAssets 即表示同意受本条款约束。",
  termsS1Title: "1. 服务内容",
  termsS1P: "iAssets 提供家庭资产管理相关功能，包括但不限于资产记录、负债管理、统计分析、目标追踪与多账本协作能力。",
  termsS2Title: "2. 账户与数据责任",
  termsS2P: "您应对自行录入的数据真实性与合法性负责。请妥善保管设备及账户安全信息，避免数据丢失或泄露风险。",
  termsS3Title: "3. 使用规范",
  termsS3L1: "不得利用 iAssets 从事违法违规活动。",
  termsS3L2: "不得以技术手段干扰、攻击或破坏应用正常运行。",
  termsS3L3: "不得未经授权复制、反编译或传播应用受保护内容。",
  termsS4Title: "4. 订阅与买断",
  termsS4P: "iAssets 可能提供按年订阅与终身买断等购买方式。具体权益、价格与可用功能以应用内展示为准。",
  termsS5Title: "5. 知识产权",
  termsS5P: "iAssets 及其相关设计、代码、商标和内容受知识产权法律保护。未经许可，不得擅自使用。",
  termsS6Title: "6. 免责声明",
  termsS6P: "iAssets 仅作为信息管理工具，不构成投资、税务、法律或财务建议。您应基于自身判断承担决策风险。",
  termsS7Title: "7. 条款变更与终止",
  termsS7P: "我们可能根据业务需要更新本条款。更新后继续使用服务视为接受新条款。若您不同意，应停止使用。",
  termsS8Title: "8. 联系方式",
  termsS8P: "如对本条款有疑问，请联系：idebuginn@gmail.com"
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
    navPrivacy: "隱私政策",
    navTerms: "使用條款",
    heroEyebrow: "iAssets",
    heroTitle: "快速掌握你的資產全景、守護你的財富",
    heroDesc: "這是一款可視化資產管理工具，同時支援家庭資產管理。資產、負債、結構、目標和趨勢一屏可見。",
    heroCta: "下載應用",
    heroCard1Title: "秒記資產變動",
    heroCard1Desc: "帳戶餘額變化可快速錄入。",
    heroCard2Title: "合集化帳本整理",
    heroCard2Desc: "按家庭、個人、目標管理帳本。",
    heroCard3Title: "快速搜尋篩選",
    heroCard3Desc: "幾秒定位到目標帳戶或變更。",
    trustEyebrow: "TRUST",
    trustTitle: "受領先銀行、金融平台信賴",
    trustDesc: "與知名銀行與證券金融平台合作，做看得懂、用得起的平價軟體",
    trustCtaBiz: "商務合作",
    trustCtaMore: "了解詳情",
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
    r7: "自動彙總淨資產後，每週復盤更有方向。",
    r8: "分類結構很清楚，終於知道資金主要放在哪裡。",
    r9: "共享帳本很好用，家人一起維護也不混亂。",
    r10: "目標進度可視化後，儲蓄執行率明顯提升。",
    r11: "離線記錄很穩定，通勤路上也能隨手更新。",
    r12: "切換多個帳本很順暢，工作和家庭終於分開了。",
    pricingEyebrow: "價格",
    pricingTitle: "價格低廉、持續迭代。",
    pricingDesc: "建議按年支付，共建軟體的良性發展，當然也支援終身買斷。",
    monthly: "按月",
    yearly: "按年",
    currency: "HK$",
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
    a1: "與 iAssets 一致：中文簡體、中文繁體台灣、中文繁體香港、中文繁體澳門、中文繁體新加坡、English、日本語、한국어。",
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
    footerCompare: "競品對比",
    socialTitle: "媒體",
    socialWechat: "微信",
    socialWeibo: "微博",
    socialXiaohongshu: "小紅書",
    socialZhihu: "知乎",
    privacyPageTitle: "隱私政策",
    termsPageTitle: "使用條款與條件",
    legalUpdated: "最後更新：2026 年 3 月 3 日",
    privacyEyebrow: "Policy",
    privacyTitle: "隱私政策",
    privacyIntro: "歡迎使用 iAssets。我們重視您的隱私，並致力於保護您的個人資料。本隱私政策說明 iAssets 在資料處理方面的原則與方式。",
    privacyS1Title: "1. 我們收集的資料",
    privacyS1P: "iAssets 採用本地優先的資料策略。您在應用中錄入的資產、負債、帳戶與分類等資料，預設儲存在您的裝置本地。",
    privacyS1L1: "預設不會上傳到我們的伺服器。",
    privacyS1L2: "預設不建立與身份關聯的遠端使用者畫像。",
    privacyS2Title: "2. 同步與備份",
    privacyS2P: "若您主動啟用 iCloud 同步，資料將透過 Apple iCloud 進行跨裝置同步。該過程受 Apple 的服務條款與隱私政策約束。",
    privacyS3Title: "3. 第三方服務",
    privacyS3P: "我們可能使用必要的第三方基礎設施能力（如 Apple 平台能力）以提供核心功能。我們不會向第三方出售您的個人資料。",
    privacyS4Title: "4. 資料安全",
    privacyS4P: "我們建議您啟用裝置密碼、生物識別解鎖與系統級安全策略。iAssets 支援密碼保護、自動鎖定等安全機制，幫助提升資料安全性。",
    privacyS5Title: "5. 資料共享與揭露",
    privacyS5P: "除法律法規要求或為維護使用者與平台安全的必要情形外，我們不會主動向第三方揭露您的本地資料內容。",
    privacyS6Title: "6. 政策更新",
    privacyS6P: "我們可能不定期更新本政策。更新版本發布後即生效。若涉及重大變更，我們會透過應用或網站進行提示。",
    privacyS7Title: "7. 聯絡我們",
    privacyS7P: "如果您對本政策有任何問題，請透過官方管道聯絡我們：idebuginn@gmail.com",
    termsEyebrow: "Terms",
    termsTitle: "使用條款與條件",
    termsIntro: "歡迎使用 iAssets。在使用本應用及相關服務前，請您仔細閱讀並理解本條款。您使用 iAssets 即表示同意受本條款約束。",
    termsS1Title: "1. 服務內容",
    termsS1P: "iAssets 提供家庭資產管理相關功能，包括但不限於資產記錄、負債管理、統計分析、目標追蹤與多帳本協作能力。",
    termsS2Title: "2. 帳戶與資料責任",
    termsS2P: "您應對自行錄入的資料真實性與合法性負責。請妥善保管裝置及帳戶安全資訊，避免資料遺失或洩露風險。",
    termsS3Title: "3. 使用規範",
    termsS3L1: "不得利用 iAssets 從事違法違規活動。",
    termsS3L2: "不得以技術手段干擾、攻擊或破壞應用正常運行。",
    termsS3L3: "不得未經授權複製、反編譯或傳播應用受保護內容。",
    termsS4Title: "4. 訂閱與買斷",
    termsS4P: "iAssets 可能提供按年訂閱與終身買斷等購買方式。具體權益、價格與可用功能以應用內展示為準。",
    termsS5Title: "5. 知識產權",
    termsS5P: "iAssets 及其相關設計、代碼、商標和內容受知識產權法律保護。未經許可，不得擅自使用。",
    termsS6Title: "6. 免責聲明",
    termsS6P: "iAssets 僅作為資訊管理工具，不構成投資、稅務、法律或財務建議。您應基於自身判斷承擔決策風險。",
    termsS7Title: "7. 條款變更與終止",
    termsS7P: "我們可能根據業務需要更新本條款。更新後繼續使用服務視為接受新條款。若您不同意，應停止使用。",
    termsS8Title: "8. 聯絡方式",
    termsS8P: "如對本條款有疑問，請聯絡：idebuginn@gmail.com"
  },
  en: {
    ...zhHans,
    navFeatures: "Features",
    navReviews: "Reviews",
    navPricing: "Pricing",
    navFaq: "FAQ",
    navDownload: "Download",
    navPrivacy: "Privacy",
    navTerms: "Terms",
    heroEyebrow: "iAssets",
    heroTitle: "Understand your family balance sheet at a glance.",
    heroDesc: "A visual asset management tool that also supports family asset management. Assets, liabilities, structure, goals, and trends are visible on one screen.",
    heroCta: "Download App",
    heroCard1Title: "Capture changes fast",
    heroCard1Desc: "Log account updates in seconds.",
    heroCard2Title: "Organize with books",
    heroCard2Desc: "Manage household, personal and goal books.",
    heroCard3Title: "Search and filter",
    heroCard3Desc: "Find target accounts in seconds.",
    trustEyebrow: "TRUST",
    trustTitle: "Trusted by leading banks and finance platforms",
    trustDesc: "Partnering with well-known banks and securities platforms to build affordable software that is easy to understand and use.",
    trustCtaBiz: "Business cooperation",
    trustCtaMore: "Learn more",
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
    r7: "Weekly reviews got much easier after auto net-worth summaries.",
    r8: "Allocation categories are clear, I finally know where money sits.",
    r9: "Shared books work great, the whole family can update without chaos.",
    r10: "Visual goal progress noticeably improved my saving consistency.",
    r11: "Offline logging is reliable, I can update during commute.",
    r12: "Switching between books is smooth, work and home are clearly separated.",
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
    a1: "Same as iAssets app: zh-Hans, zh-Hant-TW, zh-Hant-HK, zh-Hant-MO, zh-Hant-SG, English, Japanese, Korean.",
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
    footerCompare: "Compare",
    privacyPageTitle: "Privacy Policy",
    termsPageTitle: "Terms and Conditions",
    legalUpdated: "Last updated: March 3, 2026",
    privacyEyebrow: "Policy",
    privacyTitle: "Privacy Policy",
    privacyIntro: "Welcome to iAssets. We value your privacy and are committed to protecting your personal data. This policy explains how iAssets handles data.",
    privacyS1Title: "1. Data We Collect",
    privacyS1P: "iAssets follows a local-first data model. Asset, liability, account, and category data you enter is stored on your device by default.",
    privacyS1L1: "By default, data is not uploaded to our servers.",
    privacyS1L2: "By default, we do not build identity-linked remote profiles.",
    privacyS2Title: "2. Sync and Backup",
    privacyS2P: "If you enable iCloud sync, your data is synced across devices via Apple iCloud, subject to Apple's terms and privacy policy.",
    privacyS3Title: "3. Third-Party Services",
    privacyS3P: "We may rely on required third-party infrastructure (such as Apple platform capabilities) for core functions. We do not sell your personal data.",
    privacyS4Title: "4. Data Security",
    privacyS4P: "We recommend enabling device passcode, biometric unlock, and system security settings. iAssets supports passcode protection and auto-lock.",
    privacyS5Title: "5. Data Sharing and Disclosure",
    privacyS5P: "Except where required by law or necessary for safety, we do not proactively disclose your local data content to third parties.",
    privacyS6Title: "6. Policy Updates",
    privacyS6P: "We may update this policy from time to time. Updated versions take effect when published. Material changes will be announced in app or on site.",
    privacyS7Title: "7. Contact",
    privacyS7P: "If you have questions about this policy, contact us at: idebuginn@gmail.com",
    termsEyebrow: "Terms",
    termsTitle: "Terms and Conditions",
    termsIntro: "Welcome to iAssets. Please read these terms carefully before using the app and related services. By using iAssets, you agree to these terms.",
    termsS1Title: "1. Service Scope",
    termsS1P: "iAssets provides household asset management features, including asset records, liability management, analytics, goal tracking, and multi-book collaboration.",
    termsS2Title: "2. Account and Data Responsibility",
    termsS2P: "You are responsible for the authenticity and legality of data you enter. Please keep your device and account credentials secure.",
    termsS3Title: "3. Acceptable Use",
    termsS3L1: "Do not use iAssets for illegal activities.",
    termsS3L2: "Do not interfere with or attack normal app operation.",
    termsS3L3: "Do not copy, reverse-engineer, or distribute protected content without authorization.",
    termsS4Title: "4. Subscription and Lifetime Purchase",
    termsS4P: "iAssets may offer yearly subscription and lifetime purchase options. Actual pricing and features are subject to in-app display.",
    termsS5Title: "5. Intellectual Property",
    termsS5P: "iAssets and related design, code, trademarks, and content are protected by intellectual property laws.",
    termsS6Title: "6. Disclaimer",
    termsS6P: "iAssets is an information management tool and does not constitute investment, tax, legal, or financial advice.",
    termsS7Title: "7. Changes and Termination",
    termsS7P: "We may update these terms as needed. Continued use after updates means acceptance. If you disagree, stop using the service.",
    termsS8Title: "8. Contact",
    termsS8P: "If you have questions about these terms, contact: idebuginn@gmail.com"
  },
  ja: {
    ...zhHans,
    navFeatures: "機能",
    navReviews: "評価",
    navPricing: "料金",
    navFaq: "FAQ",
    navDownload: "ダウンロード",
    navPrivacy: "プライバシー",
    navTerms: "利用規約",
    heroTitle: "家族資産の全体像を、すばやく把握。",
    heroDesc: "視覚的に使える資産管理ツールで、家族の資産管理にも対応しています。資産・負債・構成・目標・推移を1画面で確認できます。",
    heroCta: "アプリを入手",
    heroCard1Title: "資産変動を即記録",
    heroCard1Desc: "口座残高の変化をすぐに入力。",
    heroCard2Title: "帳簿をコレクション整理",
    heroCard2Desc: "家庭・個人・目標で整理。",
    heroCard3Title: "検索とフィルタ",
    heroCard3Desc: "対象口座を数秒で特定。",
    trustEyebrow: "TRUST",
    trustTitle: "主要な銀行・金融プラットフォームに信頼されています",
    trustDesc: "著名な銀行・証券金融プラットフォームと連携し、わかりやすく手頃に使えるソフトを提供します。",
    trustCtaBiz: "ビジネス提携",
    trustCtaMore: "詳細を見る",
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
    r7: "純資産の自動集計で週次レビューが楽になりました。",
    r8: "構成分類が明確で、資金の置き場所が把握しやすいです。",
    r9: "共有帳簿が便利で、家族で更新しても混乱しません。",
    r10: "目標進捗の可視化で貯蓄の継続率が上がりました。",
    r11: "オフライン記録が安定していて通勤中でも更新できます。",
    r12: "帳簿切替が滑らかで、仕事用と家庭用を分けやすいです。",
    pricingEyebrow: "料金",
    pricingTitle: "低価格で、継続的にアップデート。",
    pricingDesc: "ソフトウェアの健全な発展のため年額払いを推奨していますが、買い切りにも対応しています。",
    monthly: "月額",
    yearly: "年額",
    currency: "￥",
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
    a1: "iAssets と同じく、簡体字・繁体字（台湾/香港/マカオ/シンガポール）・英語・日本語・韓国語に対応。",
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
    footerCompare: "比較",
    privacyPageTitle: "プライバシーポリシー",
    termsPageTitle: "利用規約",
    legalUpdated: "最終更新日：2026年3月3日",
    privacyEyebrow: "Policy",
    privacyTitle: "プライバシーポリシー",
    privacyIntro: "iAssets をご利用いただきありがとうございます。私たちはユーザーのプライバシーを重視し、個人データの保護に努めます。本ポリシーではデータ取扱いの方針を説明します。",
    privacyS1Title: "1. 収集するデータ",
    privacyS1P: "iAssets はローカル優先です。入力した資産・負債・口座・分類データは、原則として端末内に保存されます。",
    privacyS1L1: "初期設定では当社サーバーへアップロードしません。",
    privacyS1L2: "初期設定では本人特定に紐づく遠隔プロファイルを作成しません。",
    privacyS2Title: "2. 同期とバックアップ",
    privacyS2P: "iCloud 同期を有効化した場合、データは Apple iCloud を通じて同期されます。この処理は Apple の規約とポリシーに従います。",
    privacyS3Title: "3. 第三者サービス",
    privacyS3P: "コア機能提供のために必要な第三者基盤（例：Apple プラットフォーム機能）を利用する場合があります。個人データを販売することはありません。",
    privacyS4Title: "4. データ安全性",
    privacyS4P: "端末パスコード、生体認証、OS のセキュリティ設定の有効化を推奨します。iAssets はパスコード保護や自動ロックをサポートします。",
    privacyS5Title: "5. 共有と開示",
    privacyS5P: "法令上の要請または安全確保のために必要な場合を除き、ローカルデータ内容を第三者へ積極的に開示しません。",
    privacyS6Title: "6. 政策の更新",
    privacyS6P: "本ポリシーは必要に応じて更新されます。更新版は公開時点で有効となり、重要な変更はアプリまたはサイトで通知します。",
    privacyS7Title: "7. お問い合わせ",
    privacyS7P: "本ポリシーに関するお問い合わせ：idebuginn@gmail.com",
    termsEyebrow: "Terms",
    termsTitle: "利用規約",
    termsIntro: "iAssets をご利用いただく前に、本規約をよくお読みください。利用を開始した時点で本規約に同意したものとみなされます。",
    termsS1Title: "1. サービス内容",
    termsS1P: "iAssets は家庭資産管理機能（資産記録、負債管理、分析、目標追跡、複数帳簿協業）を提供します。",
    termsS2Title: "2. アカウントとデータ責任",
    termsS2P: "入力データの正確性・適法性はユーザーの責任です。端末およびアカウント情報は適切に管理してください。",
    termsS3Title: "3. 利用ルール",
    termsS3L1: "違法・不正目的で iAssets を利用しないこと。",
    termsS3L2: "アプリの正常動作を妨害・攻撃しないこと。",
    termsS3L3: "許可なく保護対象コンテンツを複製・解析・配布しないこと。",
    termsS4Title: "4. サブスクと買い切り",
    termsS4P: "iAssets は年額サブスクと買い切りを提供する場合があります。価格・機能はアプリ内表示に従います。",
    termsS5Title: "5. 知的財産権",
    termsS5P: "iAssets のデザイン、コード、商標、コンテンツは知的財産権法により保護されています。",
    termsS6Title: "6. 免責事項",
    termsS6P: "iAssets は情報管理ツールであり、投資・税務・法律・財務アドバイスを提供するものではありません。",
    termsS7Title: "7. 規約変更と終了",
    termsS7P: "当社は必要に応じて規約を更新します。更新後の継続利用は同意とみなされます。",
    termsS8Title: "8. 連絡先",
    termsS8P: "本規約に関するお問い合わせ：idebuginn@gmail.com"
  },
  ko: {
    ...zhHans,
    navFeatures: "기능",
    navReviews: "후기",
    navPricing: "요금",
    navFaq: "FAQ",
    navDownload: "다운로드",
    navPrivacy: "개인정보 처리방침",
    navTerms: "이용약관",
    heroTitle: "가족 자산 전경을 빠르게 파악하세요.",
    heroDesc: "시각화된 자산 관리 도구이며, 가족 자산 관리도 지원합니다. 자산, 부채, 구조, 목표, 추이를 한 화면에서 확인할 수 있습니다.",
    heroCta: "앱 다운로드",
    heroCard1Title: "변동 즉시 기록",
    heroCard1Desc: "계정 잔액 변화를 빠르게 입력.",
    heroCard2Title: "장부 컬렉션 정리",
    heroCard2Desc: "가정/개인/목표 단위로 정리.",
    heroCard3Title: "검색과 필터",
    heroCard3Desc: "목표 계정을 몇 초 만에 찾습니다.",
    trustEyebrow: "TRUST",
    trustTitle: "선도적인 은행 및 금융 플랫폼이 신뢰합니다",
    trustDesc: "유명 은행 및 증권 금융 플랫폼과 협력해, 이해하기 쉽고 부담 없이 쓸 수 있는 소프트웨어를 만듭니다.",
    trustCtaBiz: "비즈니스 제휴",
    trustCtaMore: "자세히 보기",
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
    r7: "순자산 자동 요약 덕분에 주간 점검이 쉬워졌어요.",
    r8: "구성 분류가 명확해서 자금 위치를 바로 파악할 수 있어요.",
    r9: "공유 장부가 편해서 가족이 같이 써도 헷갈리지 않아요.",
    r10: "목표 진행이 시각화돼 저축 실행률이 높아졌습니다.",
    r11: "오프라인 기록이 안정적이라 이동 중에도 업데이트돼요.",
    r12: "여러 장부 전환이 부드러워 업무/가계를 분리하기 좋습니다.",
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
    a1: "iAssets와 동일: 중국어 간체, 중국어 번체(대만/홍콩/마카오/싱가포르), 영어, 일본어, 한국어.",
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
    footerCompare: "비교",
    privacyPageTitle: "개인정보 처리방침",
    termsPageTitle: "이용약관",
    legalUpdated: "최종 업데이트: 2026년 3월 3일",
    privacyEyebrow: "Policy",
    privacyTitle: "개인정보 처리방침",
    privacyIntro: "iAssets를 이용해 주셔서 감사합니다. 우리는 사용자의 개인정보를 중요하게 여기며 개인 데이터 보호에 최선을 다합니다.",
    privacyS1Title: "1. 수집하는 데이터",
    privacyS1P: "iAssets는 로컬 우선 모델을 따릅니다. 입력한 자산, 부채, 계정, 분류 데이터는 기본적으로 기기에 저장됩니다.",
    privacyS1L1: "기본 설정에서 서버로 업로드하지 않습니다.",
    privacyS1L2: "기본 설정에서 신원 연계 원격 프로파일을 만들지 않습니다.",
    privacyS2Title: "2. 동기화 및 백업",
    privacyS2P: "iCloud 동기화를 활성화하면 데이터는 Apple iCloud를 통해 기기 간 동기화되며, Apple 정책이 적용됩니다.",
    privacyS3Title: "3. 제3자 서비스",
    privacyS3P: "핵심 기능 제공을 위해 필요한 제3자 인프라(예: Apple 플랫폼 기능)를 사용할 수 있으며, 개인정보를 판매하지 않습니다.",
    privacyS4Title: "4. 데이터 보안",
    privacyS4P: "기기 암호, 생체인증, 시스템 보안 설정 활성화를 권장합니다. iAssets는 암호 보호와 자동 잠금을 지원합니다.",
    privacyS5Title: "5. 공유 및 공개",
    privacyS5P: "법적 의무 또는 안전 확보가 필요한 경우를 제외하고, 로컬 데이터 내용을 제3자에게 적극적으로 공개하지 않습니다.",
    privacyS6Title: "6. 정책 업데이트",
    privacyS6P: "본 정책은 수시로 업데이트될 수 있으며, 중요 변경 시 앱 또는 웹사이트에서 안내합니다.",
    privacyS7Title: "7. 문의",
    privacyS7P: "본 정책 관련 문의: idebuginn@gmail.com",
    termsEyebrow: "Terms",
    termsTitle: "이용약관",
    termsIntro: "iAssets를 사용하기 전에 본 약관을 주의 깊게 읽어주세요. 서비스를 사용하면 약관에 동의한 것으로 간주됩니다.",
    termsS1Title: "1. 서비스 범위",
    termsS1P: "iAssets는 가계 자산 관리 기능(자산 기록, 부채 관리, 분석, 목표 추적, 다중 장부 협업)을 제공합니다.",
    termsS2Title: "2. 계정 및 데이터 책임",
    termsS2P: "입력 데이터의 정확성과 적법성은 사용자 책임입니다. 기기 및 계정 정보를 안전하게 관리해 주세요.",
    termsS3Title: "3. 사용 규칙",
    termsS3L1: "불법 또는 부정한 목적으로 iAssets를 사용하지 마세요.",
    termsS3L2: "앱의 정상 동작을 방해하거나 공격하지 마세요.",
    termsS3L3: "허가 없이 보호 콘텐츠를 복제·역공학·배포하지 마세요.",
    termsS4Title: "4. 구독 및 평생 구매",
    termsS4P: "iAssets는 연간 구독 또는 평생 구매를 제공할 수 있으며, 실제 가격/기능은 앱 내 표시 기준입니다.",
    termsS5Title: "5. 지식재산권",
    termsS5P: "iAssets의 디자인, 코드, 상표, 콘텐츠는 관련 지식재산권법의 보호를 받습니다.",
    termsS6Title: "6. 면책",
    termsS6P: "iAssets는 정보 관리 도구이며 투자·세무·법률·재무 자문을 제공하지 않습니다.",
    termsS7Title: "7. 약관 변경 및 종료",
    termsS7P: "당사는 필요 시 약관을 업데이트할 수 있으며, 업데이트 후 계속 사용하면 동의한 것으로 간주됩니다.",
    termsS8Title: "8. 연락처",
    termsS8P: "약관 관련 문의: idebuginn@gmail.com"
  }
};

COPY["zh-Hant-TW"] = {
  ...COPY["zh-Hant"],
  currency: "NT$"
};

COPY["zh-Hant-HK"] = {
  ...COPY["zh-Hant"],
  navTerms: "條款及細則",
  privacyPageTitle: "私隱政策",
  privacyTitle: "私隱政策",
  termsPageTitle: "條款及細則",
  termsTitle: "條款及細則"
};

COPY["zh-Hant-MO"] = {
  ...COPY["zh-Hant"],
  navTerms: "使用條款及細則",
  termsPageTitle: "使用條款及細則",
  termsTitle: "使用條款及細則"
};

COPY["zh-Hant-SG"] = {
  ...COPY["zh-Hant"],
  currency: "S$",
  pricingDesc: "建議按年支付，共建軟體的良性發展，亦支援終身買斷。"
};

function safeStorageGet(key) {
  try {
    return window.localStorage ? window.localStorage.getItem(key) : null;
  } catch (_) {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    if (window.localStorage) window.localStorage.setItem(key, value);
  } catch (_) {
    // Ignore storage errors in sandboxed previews/private contexts.
  }
}

function safeStorageRemove(key) {
  try {
    if (window.localStorage) window.localStorage.removeItem(key);
  } catch (_) {
    // Ignore storage errors in sandboxed previews/private contexts.
  }
}

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
    if (v.startsWith("zh-tw")) return "zh-Hant-TW";
    if (v.startsWith("zh-hk")) return "zh-Hant-HK";
    if (v.startsWith("zh-mo")) return "zh-Hant-MO";
    if (v.startsWith("zh-sg")) return "zh-Hant-SG";
    if (v.includes("hant")) return "zh-Hant-TW";
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
  const fromUser = safeStorageGet(USER_LANG_KEY);
  if (SUPPORTED_LANGS.includes(fromUser)) return fromUser;
  const fromBrowser = langFromBrowser();
  if (SUPPORTED_LANGS.includes(fromBrowser)) return fromBrowser;
  return "en";
}

function applyLang(lang) {
  const dict = COPY[lang] || COPY.en;
  const htmlLang =
    lang === "zh-Hans"
      ? "zh-CN"
      : lang === "zh-Hant-TW"
        ? "zh-TW"
      : lang === "zh-Hant-HK"
        ? "zh-HK"
        : lang === "zh-Hant-MO"
          ? "zh-MO"
          : lang === "zh-Hant-SG"
            ? "zh-SG"
            : lang === "zh-Hant"
              ? "zh-Hant"
              : lang;
  document.documentElement.lang = htmlLang;
  document.documentElement.setAttribute("data-lang", lang);
  if (document.body) document.body.setAttribute("data-lang", lang);
  const pageTitleKey = document.body && document.body.getAttribute("data-page-title-key");
  const pageTitle = pageTitleKey && dict[pageTitleKey] ? dict[pageTitleKey] : dict.heroTitle;
  document.title = `${dict.brand} - ${pageTitle}`;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.getAttribute("data-i18n");
    if (dict[k] !== undefined) el.textContent = dict[k];
  });
  applySeoMeta(lang, dict, pageTitle);
  updateHeaderLangDropdown(lang);
  updateFooterLangDropdown(lang);
}

function applySeoMeta(lang, dict, pageTitle) {
  const desc = dict.heroDesc || "";
  const isLegalPage = !!(document.body && document.body.classList.contains("legal-page"));
  const canonicalPath = isLegalPage ? window.location.pathname : (LANG_ROUTE_MAP[lang] || "/");
  const locale = LANG_LOCALE_MAP[lang] || "en_US";
  const absoluteCanonical = `${window.location.origin}${canonicalPath}`;

  const setMeta = (name, value, attr = "name") => {
    const el = document.querySelector(`meta[${attr}="${name}"]`);
    if (el && value) el.setAttribute("content", value);
  };

  setMeta("description", desc);
  setMeta("keywords", LANG_META_KEYWORDS[lang] || LANG_META_KEYWORDS.en);
  setMeta("og:title", `${dict.brand} - ${pageTitle}`, "property");
  setMeta("og:description", desc, "property");
  setMeta("og:url", absoluteCanonical, "property");
  setMeta("og:locale", locale, "property");
  setMeta("twitter:title", `${dict.brand} - ${pageTitle}`);
  setMeta("twitter:description", desc);

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", absoluteCanonical);

  const jsonLd = document.getElementById("seo-jsonld");
  if (jsonLd) {
    jsonLd.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "iAssets",
      applicationCategory: "FinanceApplication",
      operatingSystem: "iOS, iPadOS, macOS",
      description: desc,
      url: absoluteCanonical,
      inLanguage: lang
    });
  }
}

function updateUrl(lang) {
  try {
    const url = new URL(window.location.href);
    const isLegalPath = url.pathname.startsWith("/privacy") || url.pathname.startsWith("/terms");
    const targetPath = isLegalPath ? url.pathname : (LANG_ROUTE_MAP[lang] || "/");
    if (!isLegalPath && url.pathname !== targetPath) url.pathname = targetPath;
    url.searchParams.delete("lang");
    history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  } catch (_) {
    // Ignore URL update failures in restricted preview environments.
  }
}

function syncInternalLangLinks(lang) {
  // Keep clean URLs without language query params.
}

function updateLangPills(activeLang) {
  document.querySelectorAll(".lang-pill").forEach((el) => {
    const on = el.getAttribute("data-lang") === activeLang;
    el.classList.toggle("active", on);
    el.setAttribute("aria-pressed", on ? "true" : "false");
  });
}

function updateFooterLangDropdown(activeLang) {
  document.querySelectorAll(".footer-lang-dropdown").forEach((dropdown) => {
    const current = dropdown.querySelector(".footer-lang-current");
    const options = dropdown.querySelectorAll("[data-footer-lang-option]");
    let activeText = "EN";
    options.forEach((btn) => {
      const on = btn.getAttribute("data-footer-lang-option") === activeLang;
      btn.classList.toggle("active", on);
      if (on) activeText = (btn.textContent || "").trim();
    });
    if (current) current.textContent = activeText;
  });
}

function bindLangPills() {
  document.querySelectorAll(".lang-pill").forEach((el) => {
    el.addEventListener("click", () => {
      const next = el.getAttribute("data-lang");
      if (!SUPPORTED_LANGS.includes(next)) return;
      applyLang(next);
      safeStorageSet(USER_LANG_KEY, next);
      updateLangPills(next);
      updateUrl(next);
      syncInternalLangLinks(next);
    });
  });
}

function bindFooterLangDropdown() {
  document.querySelectorAll(".footer-lang-dropdown").forEach((dropdown) => {
    const trigger = dropdown.querySelector(".footer-lang-trigger");
    const options = dropdown.querySelectorAll("[data-footer-lang-option]");
    if (!trigger || !options.length) return;

    const close = () => {
      dropdown.classList.remove("open");
      trigger.setAttribute("aria-expanded", "false");
    };

    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const nextOpen = !dropdown.classList.contains("open");
      dropdown.classList.toggle("open", nextOpen);
      trigger.setAttribute("aria-expanded", nextOpen ? "true" : "false");
    });

    options.forEach((btn) => {
      btn.addEventListener("click", () => {
        const next = btn.getAttribute("data-footer-lang-option");
        if (!SUPPORTED_LANGS.includes(next)) return;
        applyLang(next);
        safeStorageSet(USER_LANG_KEY, next);
        updateLangPills(next);
        updateUrl(next);
        syncInternalLangLinks(next);
        close();
      });
    });

    document.addEventListener("click", (e) => {
      if (e.target instanceof Element && e.target.closest(".footer-lang-dropdown")) return;
      close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  });
}

function updateHeaderLangDropdown(activeLang) {
  const dropdown = document.querySelector(".header-lang-dropdown");
  if (!dropdown) return;
  const current = dropdown.querySelector(".header-lang-current");
  const options = dropdown.querySelectorAll("[data-lang-option]");
  let activeText = "EN";
  options.forEach((btn) => {
    const on = btn.getAttribute("data-lang-option") === activeLang;
    btn.classList.toggle("active", on);
    if (on) activeText = (btn.textContent || "").trim();
  });
  if (current) current.textContent = activeText;
}

function bindHeaderLangDropdown() {
  const dropdown = document.querySelector(".header-lang-dropdown");
  if (!dropdown) return;
  const trigger = dropdown.querySelector(".header-lang-trigger");
  const options = dropdown.querySelectorAll("[data-lang-option]");
  if (!trigger || !options.length) return;

  const close = () => {
    dropdown.classList.remove("open");
    trigger.setAttribute("aria-expanded", "false");
  };

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    const nextOpen = !dropdown.classList.contains("open");
    dropdown.classList.toggle("open", nextOpen);
    trigger.setAttribute("aria-expanded", nextOpen ? "true" : "false");
  });

  options.forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = btn.getAttribute("data-lang-option");
      if (!SUPPORTED_LANGS.includes(next)) return;
      applyLang(next);
      safeStorageSet(USER_LANG_KEY, next);
      updateLangPills(next);
      updateUrl(next);
      syncInternalLangLinks(next);
      close();
    });
  });

  document.addEventListener("click", (e) => {
    if (e.target instanceof Element && e.target.closest(".header-lang-dropdown")) return;
    close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
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

function bindWechatPreview() {
  const wechatLinks = document.querySelectorAll('.social-link[data-social="wechat"]');
  if (!wechatLinks.length) return;
  const closeAll = () => {
    document.querySelectorAll(".wechat-popover.open").forEach((el) => el.classList.remove("open"));
  };

  wechatLinks.forEach((link) => {
    const pop = document.createElement("span");
    pop.className = "wechat-popover";
    pop.setAttribute("aria-hidden", "true");
    const qrSrc = `/assets/wechat-qr.jpg?v=20260303d`;
    pop.innerHTML = `<img src="${qrSrc}" alt="WeChat QR code" />`;
    link.appendChild(pop);

    const open = () => {
      closeAll();
      pop.classList.add("open");
      pop.setAttribute("aria-hidden", "false");
    };
    const close = () => {
      pop.classList.remove("open");
      pop.setAttribute("aria-hidden", "true");
    };

    link.addEventListener("mouseenter", open);
    link.addEventListener("focus", open);
    link.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (pop.classList.contains("open")) close();
      else open();
    });
  });

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (target instanceof Element && target.closest('.social-link[data-social="wechat"]')) return;
    closeAll();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });
}

function fillTrustTrack() {
  const tracks = document.querySelectorAll(".trust-track");
  if (!tracks.length) return;
  tracks.forEach((track) => {
    if (!track.dataset.baseHtml) track.dataset.baseHtml = track.innerHTML;
    track.innerHTML = track.dataset.baseHtml;
    const minWidth = window.innerWidth * 2;
    let guard = 0;
    while (track.scrollWidth < minWidth && guard < 20) {
      track.insertAdjacentHTML("beforeend", track.dataset.baseHtml);
      guard += 1;
    }
  });
}

function fillReviewTrack() {
  const tracks = document.querySelectorAll(".review-track");
  if (!tracks.length) return;
  tracks.forEach((track) => {
    if (!track.dataset.baseHtml) track.dataset.baseHtml = track.innerHTML;
    track.innerHTML = track.dataset.baseHtml;
    const minWidth = window.innerWidth * 2;
    let guard = 0;
    while (track.scrollWidth < minWidth && guard < 20) {
      track.insertAdjacentHTML("beforeend", track.dataset.baseHtml);
      guard += 1;
    }
  });
}

function ensureReviewTwoLines() {
  const quotes = document.querySelectorAll(".review blockquote");
  if (!quotes.length) return;
  quotes.forEach((quote) => {
    quote.style.maxWidth = "";
    const style = window.getComputedStyle(quote);
    const lineHeight = Number.parseFloat(style.lineHeight);
    if (!Number.isFinite(lineHeight) || lineHeight <= 0) return;
    const isSingleLine = quote.scrollHeight <= lineHeight * 1.35;
    if (!isSingleLine) return;
    const textLen = (quote.textContent || "").trim().length;
    const baseCh = Math.min(26, Math.max(14, Math.ceil(textLen * 0.58)));
    quote.style.maxWidth = `${baseCh}ch`;
    if (quote.scrollHeight <= lineHeight * 1.35) {
      quote.style.maxWidth = `${Math.max(12, baseCh - 4)}ch`;
    }
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
  const v = safeStorageGet(THEME_KEY);
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
  safeStorageRemove("ia_lang");
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
  safeStorageSet(USER_LANG_KEY, lang);
  updateLangPills(lang);
  updateFooterLangDropdown(lang);
  bindLangPills();
  bindFooterLangDropdown();
  bindHeaderLangDropdown();
  bindMobileMenu(menuBtn, mobileMenu);
  bindWechatPreview();
  fillTrustTrack();
  fillReviewTrack();
  window.requestAnimationFrame(ensureReviewTwoLines);
  updateUrl(lang);
  syncInternalLangLinks(lang);
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
      safeStorageSet(THEME_KEY, themePref);
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
      safeStorageSet(USER_LANG_KEY, next);
      updateUrl(next);
      syncInternalLangLinks(next);
    });
  }

  let trustTimer = null;
  window.addEventListener("resize", () => {
    if (trustTimer) window.clearTimeout(trustTimer);
    trustTimer = window.setTimeout(() => {
      fillTrustTrack();
      fillReviewTrack();
      window.requestAnimationFrame(ensureReviewTwoLines);
    }, 120);
  });
})();
