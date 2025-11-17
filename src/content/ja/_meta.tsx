import type { MetaRecord } from 'nextra'
import { TitleBadge } from '@/components/TitleBadge'

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
  upgrade: {
    title: (
      <span className="flex items-center leading-[1]">
        新機能
        <TitleBadge />
      </span>
    ),
    type: 'page',
  },
} satisfies MetaRecord
