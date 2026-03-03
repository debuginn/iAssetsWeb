const SUPPORTED_LANGS = ["zh-Hans", "zh-Hant", "en", "ja", "ko"];
const THEME_KEY = "ia_theme_pref";
const USER_LANG_KEY = "ia_lang_user";
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
  navPrivacy: "隐私政策",
  navTerms: "用户条款",
  footerTag: "做您的家庭资产管理管家",
  downloadHint: "扫码后可前往 App Store 下载",

  legalHubPageTitle: "政策中心",
  legalHubEyebrow: "Legal",
  legalHubTitle: "政策中心",
  legalHubDesc: "当前分支仅保留隐私政策与用户条款页面。",
  legalHubPrivacyTitle: "隐私政策",
  legalHubPrivacyDesc: "查看 iAssets 如何处理你的数据与隐私。",
  legalHubTermsTitle: "用户条款和条件",
  legalHubTermsDesc: "查看使用 iAssets 时适用的条款。",

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
    navReviews: "評價",
    navPricing: "價格",
    navFaq: "常見問題",
    navDownload: "下載",
    navTerms: "使用條款",
    footerTag: "做您的家庭資產管理管家",
    downloadHint: "掃碼後可前往 App Store 下載",
    legalHubPageTitle: "政策中心",
    legalHubTitle: "政策中心",
    legalHubDesc: "當前分支僅保留隱私政策與使用條款頁面。",
    legalHubPrivacyDesc: "查看 iAssets 如何處理你的資料與隱私。",
    legalHubTermsTitle: "使用條款與條件",
    legalHubTermsDesc: "查看使用 iAssets 時適用的條款。",
    privacyPageTitle: "隱私政策",
    termsPageTitle: "使用條款與條件",
    legalUpdated: "最後更新：2026 年 3 月 3 日",
    privacyTitle: "隱私政策",
    privacyIntro: "歡迎使用 iAssets。我們重視您的隱私，並致力於保護您的個人資料。本隱私政策說明 iAssets 在資料處理方面的原則與方式。",
    privacyS1Title: "1. 我們收集的資料",
    privacyS1P: "iAssets 採用本地優先的資料策略。您在應用中錄入的資產、負債、帳戶與分類等資料，預設儲存在您的裝置本地。",
    privacyS1L1: "預設不會上傳到我們的伺服器。",
    privacyS1L2: "預設不建立與身份關聯的遠端使用者畫像。",
    privacyS2P: "若您主動啟用 iCloud 同步，資料將透過 Apple iCloud 進行跨裝置同步。該過程受 Apple 的服務條款與隱私政策約束。",
    privacyS3P: "我們可能使用必要的第三方基礎設施能力（如 Apple 平台能力）以提供核心功能。我們不會向第三方出售您的個人資料。",
    privacyS4Title: "4. 資料安全",
    privacyS4P: "我們建議您啟用裝置密碼、生物識別解鎖與系統級安全策略。iAssets 支援密碼保護、自動鎖定等安全機制，幫助提升資料安全性。",
    privacyS5Title: "5. 資料共享與揭露",
    privacyS5P: "除法律法規要求或為維護使用者與平台安全的必要情形外，我們不會主動向第三方揭露您的本地資料內容。",
    privacyS6P: "我們可能不定期更新本政策。更新版本發布後即生效。若涉及重大變更，我們會透過應用或網站進行提示。",
    privacyS7Title: "7. 聯絡我們",
    privacyS7P: "如果您對本政策有任何問題，請透過官方管道聯絡我們：idebuginn@gmail.com",
    termsTitle: "使用條款與條件",
    termsIntro: "歡迎使用 iAssets。在使用本應用及相關服務前，請您仔細閱讀並理解本條款。您使用 iAssets 即表示同意受本條款約束。",
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
    footerTag: "Your household asset management companion",
    downloadHint: "Scan to open App Store",
    legalHubPageTitle: "Legal Center",
    legalHubEyebrow: "Legal",
    legalHubTitle: "Legal Center",
    legalHubDesc: "This branch only keeps Privacy Policy and Terms pages.",
    legalHubPrivacyTitle: "Privacy Policy",
    legalHubPrivacyDesc: "Read how iAssets handles your data and privacy.",
    legalHubTermsTitle: "Terms and Conditions",
    legalHubTermsDesc: "Read the terms that apply to your use of iAssets.",
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
    footerTag: "家族資産管理のパートナー",
    downloadHint: "QR から App Store を開けます",
    legalHubPageTitle: "ポリシーセンター",
    legalHubEyebrow: "Legal",
    legalHubTitle: "ポリシーセンター",
    legalHubDesc: "このブランチではプライバシーポリシーと利用規約のみを公開しています。",
    legalHubPrivacyTitle: "プライバシーポリシー",
    legalHubPrivacyDesc: "iAssets におけるデータとプライバシーの取り扱いを確認できます。",
    legalHubTermsTitle: "利用規約",
    legalHubTermsDesc: "iAssets の利用に適用される規約を確認できます。",
    privacyPageTitle: "プライバシーポリシー",
    termsPageTitle: "利用規約",
    legalUpdated: "最終更新日：2026年3月3日",
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
    footerTag: "가족 자산 관리 파트너",
    downloadHint: "QR로 App Store 이동",
    legalHubPageTitle: "정책 센터",
    legalHubEyebrow: "Legal",
    legalHubTitle: "정책 센터",
    legalHubDesc: "이 브랜치에는 개인정보 처리방침과 이용약관 페이지만 유지됩니다.",
    legalHubPrivacyTitle: "개인정보 처리방침",
    legalHubPrivacyDesc: "iAssets의 데이터 및 개인정보 처리 방식을 확인하세요.",
    legalHubTermsTitle: "이용약관",
    legalHubTermsDesc: "iAssets 이용 시 적용되는 약관을 확인하세요.",
    privacyPageTitle: "개인정보 처리방침",
    termsPageTitle: "이용약관",
    legalUpdated: "최종 업데이트: 2026년 3월 3일",
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
    // Ignore storage errors in restricted contexts.
  }
}

function safeStorageRemove(key) {
  try {
    if (window.localStorage) window.localStorage.removeItem(key);
  } catch (_) {
    // Ignore storage errors in restricted contexts.
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
    if (v.startsWith("zh-tw") || v.startsWith("zh-hk") || v.includes("hant")) return "zh-Hant";
    if (v.startsWith("zh")) return "zh-Hans";
    if (v.startsWith("ja")) return "ja";
    if (v.startsWith("ko")) return "ko";
    if (v.startsWith("en")) return "en";
  }
  return null;
}

function detectLang() {
  const fromUser = safeStorageGet(USER_LANG_KEY);
  if (SUPPORTED_LANGS.includes(fromUser)) return fromUser;
  const fromPath = langFromPath();
  if (SUPPORTED_LANGS.includes(fromPath)) return fromPath;
  const fromQuery = langFromQuery();
  if (SUPPORTED_LANGS.includes(fromQuery)) return fromQuery;
  const fromBrowser = langFromBrowser();
  if (SUPPORTED_LANGS.includes(fromBrowser)) return fromBrowser;
  return "en";
}

function applyLang(lang) {
  const dict = COPY[lang] || COPY.en;
  document.documentElement.lang = lang;
  document.documentElement.setAttribute("data-lang", lang);
  if (document.body) document.body.setAttribute("data-lang", lang);
  const pageTitleKey = document.body && document.body.getAttribute("data-page-title-key");
  const pageTitle = pageTitleKey && dict[pageTitleKey] ? dict[pageTitleKey] : dict.brand;
  document.title = `${dict.brand} - ${pageTitle}`;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.getAttribute("data-i18n");
    if (dict[k] !== undefined) el.textContent = dict[k];
  });
}

function updateUrl() {
  try {
    const url = new URL(window.location.href);
    url.searchParams.delete("lang");
    history.replaceState({}, "", url);
  } catch (_) {
    // Ignore URL update failures.
  }
}

function syncInternalLangLinks() {
  // Keep clean URLs without language query params.
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
      safeStorageSet(USER_LANG_KEY, next);
      updateLangPills(next);
      updateUrl();
      syncInternalLangLinks();
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
  updateLangPills(lang);
  bindLangPills();
  bindMobileMenu(menuBtn, mobileMenu);
  bindWechatPreview();
  updateUrl();
  syncInternalLangLinks();

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
      updateUrl();
      syncInternalLangLinks();
    });
  }
})();
