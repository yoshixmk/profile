'use client'

import clsx from 'clsx'
import { useTheme } from 'nextra-theme-docs'
import { useCallback } from 'react'
import { Toggle } from '../components/ui/toggle'

/**
 * ダークモードを素早く切り替えるコンポーネントで、nextraのネイティブな切り替えドロップダウンを上書きします
 */
export default function ThemeToggle({
  className,
}: {
  className?: string
}) {
  const { setTheme, theme } = useTheme()

  const changeTheme = useCallback(() => {
    if (theme === 'dark') {
      setTheme('light')
    }
    else {
      setTheme('dark')
    }
  }, [setTheme, theme])

  return (
    <Toggle
      size="sm"
      className={clsx([
        'cursor-pointer',
        className,
      ])}
      onClick={changeTheme}
    >
      <span className="icon-[ri--sun-fill] dark:icon-[ri--moon-clear-fill]"></span>
    </Toggle>
  )
}
