import { LOCALE_META, LANGUAGE_OPTIONS, ROOT_PAGE as SHARED_ROOT_PAGE } from '../shared/locales.mjs';

const HOME_PAGE_META = {
  root: {
    title: 'iAssets',
    socialTitle: 'iAssets',
    description: 'iAssets - 快速掌握家庭资产全景。',
    keywords: 'iAssets,家庭资产管理,资产管理,财富管理,net worth tracker,budget app'
  },
  zh: {
    title: 'iAssets - 快速掌握你的资产全景、守护你的财富',
    socialTitle: 'iAssets',
    description: '这是一款可视化资产管理工具，同时支持家庭资产管理。资产、负债、结构、目标和趋势一屏可见。'
  },
  tw: {
    title: 'iAssets - 快速掌握你的資產全景',
    socialTitle: 'iAssets',
    description: '這是一款可視化資產管理工具，同時支援家庭資產管理。資產、負債、結構、目標和趨勢一屏可見。'
  },
  hk: {
    title: 'iAssets - 快速掌握你的資產全景',
    socialTitle: 'iAssets',
    description: '這是一款可視化資產管理工具，同時支援家庭資產管理。資產、負債、結構、目標和趨勢一屏可見。'
  },
  mo: {
    title: 'iAssets - 快速掌握你的資產全景',
    socialTitle: 'iAssets',
    description: '這是一款可視化資產管理工具，同時支援家庭資產管理。資產、負債、結構、目標和趨勢一屏可見。'
  },
  sg: {
    title: 'iAssets - 快速掌握你的資產全景',
    socialTitle: 'iAssets',
    description: '這是一款可視化資產管理工具，同時支援家庭資產管理。資產、負債、結構、目標和趨勢一屏可見。'
  },
  en: {
    title: 'iAssets - Understand your family balance sheet at a glance.',
    socialTitle: 'iAssets',
    description: 'A visual asset management app for households. Assets, liabilities, structure, goals, and trends in one clear view.'
  },
  ja: {
    title: 'iAssets - 家族資産の全体像を、すばやく把握。',
    socialTitle: 'iAssets',
    description: '家族資産を可視化して管理できるアプリ。資産・負債・構成・目標・推移を1画面で把握できます。'
  },
  ko: {
    title: 'iAssets - 가족 자산 전경을 빠르게 파악하세요.',
    socialTitle: 'iAssets',
    description: '가족 자산을 시각적으로 관리하는 앱입니다. 자산, 부채, 구조, 목표, 추이를 한 화면에서 확인하세요.'
  }
};

export const ROOT_PAGE = {
  ...SHARED_ROOT_PAGE,
  ...HOME_PAGE_META.root,
  keywords: HOME_PAGE_META.root.keywords
};

export const LOCALES = LOCALE_META.map((locale) => ({
  ...locale,
  ...HOME_PAGE_META[locale.key]
}));

export { LANGUAGE_OPTIONS };
