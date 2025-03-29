'use client'

import { Toggle } from '@/components/ui/toggle'
import { useLocale } from '@/hooks'
import clsx from 'clsx'
import { addBasePath } from 'next/dist/client/add-base-path'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useEffect } from 'react'

const ONE_YEAR = 365 * 24 * 60 * 60 * 1000

/**
 * 言語を素早く切り替えるコンポーネントで、nextraのネイティブな切り替えドロップダウンを上書きします
 */
export default function LocaleToggle({
  className,
}: {
  className?: string
}) {
  const { currentLocale } = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const forceHideBanner = useCallback(() => {
    const banner = document.querySelector('.nextra-banner')
    if (!banner) {
      return
    }

    const isBannerDismissed = localStorage.getItem('starter-banner')
    if (isBannerDismissed) {
      banner.classList.add('x:hidden')
    }
  }, [])

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        forceHideBanner()
      })
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })
    forceHideBanner()
    return () => observer.disconnect()
  }, [forceHideBanner])

  const changeLocale = useCallback(() => {
    // スクロール位置を記録
    const currentPosition = window.scrollY
    // ページの一番下までスクロールしているか確認
    const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight

    const nextHref = {
      value: '',
    }
    if (currentLocale === 'ja') {
      nextHref.value = addBasePath(pathname.replace('/profile', '').replace(`/ja`, `/en`))
    }
    else {
      nextHref.value = addBasePath(pathname.replace('/profile', '').replace(`/en`, `/ja`))
    }

    const date = new Date(Date.now() + ONE_YEAR)
    document.cookie = `NEXT_LOCALE=${currentLocale}; expires=${date.toUTCString()}; path=/`

    router.replace(nextHref.value)

    // ルート変更後にスクロール位置を復元
    requestAnimationFrame(() => {
      if (isAtBottom) {
        window.scrollTo(0, document.body.scrollHeight)
      }
      else {
        window.scrollTo(0, currentPosition)
      }
    })
  }, [currentLocale, pathname, router])

  return (
    <Toggle
      size="sm"
      className={clsx([
        'cursor-pointer',
        className,
      ])}
      onClick={changeLocale}
    >
      {
        currentLocale === 'ja'
          ? <span className="icon-[uil--letter-chinese-a]" />
          : <span className="icon-[ri--english-input]" />
      }
    </Toggle>
  )
}
