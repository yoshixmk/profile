import type Ja from '../../i18n/ja'
import 'server-only'

const _dictionaries = {
  en: () => import('../../i18n/en'),
  ja: () => import('../../i18n/ja'),
} as const satisfies Record<string, () => Promise<{ default: typeof Ja }>>

export const getDirection = (locale: keyof typeof _dictionaries) => {
  switch (locale) {
    case 'en':
    case 'ja':
    default:
      return 'ltr' as const
  }
}
