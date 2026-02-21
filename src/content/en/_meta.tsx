import type { MetaRecord } from 'nextra'

export default {
  index: {
    type: 'page',
    display: 'hidden',
    theme: {
      timestamp: false,
      layout: 'full',
      toc: false,
    },
  },
  introduction: {
    type: 'page',
    title: 'My Career',
    theme: {
      navbar: true,
      toc: false,
    },
  },
  blog: {
    title: 'Blog',
    type: 'page',
  },
  'site-structure': {
    title: 'Site Structure',
    type: 'page',
  },
} satisfies MetaRecord
