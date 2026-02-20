import type { MetaRecord } from 'nextra'

export default {
  index: {
    type: 'page',
    display: 'hidden',
    theme: {
      copyPage: false,
      timestamp: false,
      layout: 'full',
      toc: false,
    },
  },
  introduction: {
    type: 'page',
    title: '経歴',
    theme: {
      navbar: true,
      toc: false,
    },
  },
  blog: {
    title: 'ブログ',
    type: 'page',
  },
  'site-structure': {
    title: 'このサイトの構成',
    type: 'page',
  },
} satisfies MetaRecord
