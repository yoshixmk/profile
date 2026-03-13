import type { AllLocales, I18nLangKeys, LocaleKeys, PathValue } from './index'
import { getNestedValue, i18nConfig, interpolateString } from './index'

// 型は、指定されたキーのローカライズされた値の型を取得します
type LocalizedValue<T, K extends LocaleKeys> = PathValue<T, K> extends string
  ? string
  : PathValue<T, K>

export async function getServerLocale(lang: I18nLangKeys) {
  // パラメータから現在の言語を取得
  const currentLocale = lang

  function t<K extends LocaleKeys>(
    key: K,
    withData: Record<string, any> = {},
  ): LocalizedValue<AllLocales, K> {
    const template = getNestedValue(i18nConfig[currentLocale], key)

    if (typeof template === 'string') {
      return interpolateString(template, withData) as LocalizedValue<AllLocales, K>
    }

    return template as LocalizedValue<AllLocales, K>
  }

  return {
    currentLocale,
    t,
  }
}
