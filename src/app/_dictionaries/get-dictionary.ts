import 'server-only'
import type Ja from '../../i18n/ja'

// We enumerate all dictionaries here for better linting and TypeScript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import('../../i18n/en'),
  ja: () => import('../../i18n/ja'),
} as const satisfies Record<string, () => Promise<{ default: typeof Ja }>>

export const getDictionary = async (
  locale: keyof typeof dictionaries,
): Promise<typeof Ja> => {
  let dictionary = dictionaries[locale] || dictionaries.ja
  return (await dictionary()).default
}

export const getDirection = (locale: keyof typeof dictionaries) => {
  switch (locale) {
    case 'en':
    case 'ja':
    default:
      return 'ltr' as const
  }
}
