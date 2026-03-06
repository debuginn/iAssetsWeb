export const ROOT_PAGE = {
  key: 'root',
  appLang: 'zh-Hans',
  htmlLang: 'zh-Hans',
  route: '/',
  label: '中文简体',
  hreflang: 'x-default',
  ogLocale: 'zh_CN',
  jsonLdLanguage: 'zh-Hans'
};

export const LOCALE_META = [
  {
    key: 'zh',
    label: '中文简体',
    appLang: 'zh-Hans',
    htmlLang: 'zh-CN',
    hreflang: 'zh-Hans',
    route: '/zh/',
    output: 'zh/index.html',
    ogLocale: 'zh_CN',
    jsonLdLanguage: 'zh-Hans',
    keywords: 'iAssets,家庭资产管理,资产管理,财富管理,净资产,记账'
  },
  {
    key: 'tw',
    label: '中文繁體台灣',
    appLang: 'zh-Hant-TW',
    htmlLang: 'zh-TW',
    hreflang: 'zh-TW',
    route: '/tw/',
    output: 'tw/index.html',
    ogLocale: 'zh_TW',
    jsonLdLanguage: 'zh-Hant',
    keywords: 'iAssets,家庭資產管理,資產管理,財富管理,淨資產,記帳'
  },
  {
    key: 'hk',
    label: '中文繁體香港',
    appLang: 'zh-Hant-HK',
    htmlLang: 'zh-HK',
    hreflang: 'zh-HK',
    route: '/hk/',
    output: 'hk/index.html',
    ogLocale: 'zh_HK',
    jsonLdLanguage: 'zh-Hant',
    keywords: 'iAssets,家庭資產管理,資產管理,財富管理,淨資產,記帳'
  },
  {
    key: 'mo',
    label: '中文繁體澳門',
    appLang: 'zh-Hant-MO',
    htmlLang: 'zh-MO',
    hreflang: 'zh-MO',
    route: '/mo/',
    output: 'mo/index.html',
    ogLocale: 'zh_MO',
    jsonLdLanguage: 'zh-Hant',
    keywords: 'iAssets,家庭資產管理,資產管理,財富管理,淨資產,記帳'
  },
  {
    key: 'sg',
    label: '中文繁體新加坡',
    appLang: 'zh-Hant-SG',
    htmlLang: 'zh-SG',
    hreflang: 'zh-SG',
    route: '/sg/',
    output: 'sg/index.html',
    ogLocale: 'zh_SG',
    jsonLdLanguage: 'zh-Hant',
    keywords: 'iAssets,家庭資產管理,資產管理,財富管理,淨資產,記帳'
  },
  {
    key: 'en',
    label: 'English',
    appLang: 'en',
    htmlLang: 'en',
    hreflang: 'en',
    route: '/en/',
    output: 'en/index.html',
    ogLocale: 'en_US',
    jsonLdLanguage: 'en',
    keywords: 'iAssets,asset management,family finance,net worth tracker,budget app'
  },
  {
    key: 'ja',
    label: '日本語',
    appLang: 'ja',
    htmlLang: 'ja',
    hreflang: 'ja',
    route: '/ja/',
    output: 'ja/index.html',
    ogLocale: 'ja_JP',
    jsonLdLanguage: 'ja',
    keywords: 'iAssets,家計管理,資産管理,純資産,家族資産'
  },
  {
    key: 'ko',
    label: '한국어',
    appLang: 'ko',
    htmlLang: 'ko',
    hreflang: 'ko',
    route: '/ko/',
    output: 'ko/index.html',
    ogLocale: 'ko_KR',
    jsonLdLanguage: 'ko',
    keywords: 'iAssets,자산관리,가계관리,순자산,가족자산'
  }
];

export const LANGUAGE_OPTIONS = LOCALE_META.map((locale) => ({
  appLang: locale.appLang,
  label: locale.label
}));

export const PATH_LANG_MAP = {
  zh: 'zh-Hans',
  tw: 'zh-Hant-TW',
  hk: 'zh-Hant-HK',
  mo: 'zh-Hant-MO',
  sg: 'zh-Hant-SG',
  'zh-cn': 'zh-Hans',
  'zh-hans': 'zh-Hans',
  'zh-tw': 'zh-Hant-TW',
  'zh-hant-tw': 'zh-Hant-TW',
  'zh-hk': 'zh-Hant-HK',
  'zh-mo': 'zh-Hant-MO',
  'zh-sg': 'zh-Hant-SG',
  'zh-hant': 'zh-Hant-HK',
  'zh-hant-hk': 'zh-Hant-HK',
  'zh-hant-mo': 'zh-Hant-MO',
  'zh-hant-sg': 'zh-Hant-SG',
  en: 'en',
  ja: 'ja',
  ko: 'ko'
};
