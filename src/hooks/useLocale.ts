'use client'

import type { AllLocales, I18nLangKeys, LocaleKeys, PathValue } from '@/i18n'
import { useParams } from 'next/navigation' // next/navigationを使用
import { useCallback } from 'react'
import { getNestedValue, i18nConfig, interpolateString } from '@/i18n'

// 型は、指定されたキーのローカライズされた値の型を取得します
type LocalizedValue<T, K extends LocaleKeys> = PathValue<T, K> extends string
  ? string
  : PathValue<T, K>

export const useLocale = () => {
  const params = useParams()

  // URLパラメータから現在の言語を取得
  const currentLocale = (
    (params?.lang as I18nLangKeys) || 'ja'
  ) as I18nLangKeys

  const t = useCallback(
    <K extends LocaleKeys>(
      key: K,
      withData: Record<string, any> = {},
    ): LocalizedValue<AllLocales, K> => {
      const template = getNestedValue(i18nConfig[currentLocale], key)

      if (typeof template === 'string') {
        return interpolateString(template, withData) as LocalizedValue<AllLocales, K>
      }

      return template as LocalizedValue<AllLocales, K>
    },
    [currentLocale],
  )

  return {
    currentLocale,
    t,
  }
}
