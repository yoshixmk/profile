import en from './en'
import ja from './ja'

export const i18nConfig = Object.freeze({
  en,
  ja,
})

export type I18nLangKeys = keyof typeof i18nConfig
export interface I18nLangAsyncProps {
  lang: I18nLangKeys
}

// すべての言語オブジェクトのユニオン型を取得
export type AllLocales = typeof i18nConfig[I18nLangKeys]


// オブジェクトのネストされたキーを取得
export type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`
}[keyof ObjectType & (string | number)]

// すべての可能なキーを取得
export type LocaleKeys = NestedKeyOf<AllLocales>


// 深いオブジェクトの型
type DeepObject = Record<string, any>

// 与えられたパス上の値の型を抽出
export type PathValue<T, P extends string> =
  P extends `${infer Key}.${infer Rest}`
    ? Key extends keyof T
      ? PathValue<T[Key], Rest>
      : never
    : P extends keyof T
      ? T[P]
      : never

// ネストされた値を取得
export function getNestedValue<T extends DeepObject, K extends string>(obj: T, path: K): PathValue<T, K> {
  return path.split('.').reduce((acc, key) => acc && acc[key], obj) as PathValue<T, K>
}


// 値を挿入する式
export function interpolateString(template: string, context: Record<string, any>): string {
  return template.replace(/\{\{\s*(\w+(\.\w+)*)\s*\}\}/g, (_, path) => {
    const value = getNestedValue(context, path.trim())
    return value !== undefined ? value : `{{${path.trim()}}}`
  })
}
