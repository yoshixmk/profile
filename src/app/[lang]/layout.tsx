import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import type { I18nLangAsyncProps, I18nLangKeys } from '@/i18n'
import { Footer, LastUpdated, Layout, Navbar } from 'nextra-theme-docs'
import { Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { CustomFooter } from '@/components/CustomFooter'
import { useServerLocale } from '@/hooks'
import LocaleToggle from '../../widgets/locale-toggle'
import ThemeToggle from '../../widgets/theme-toggle'
import { getDirection } from '../_dictionaries/get-dictionary'

import { ThemeProvider } from './_components/ThemeProvider'
import './styles/index.css'

interface PageParams {
  lang: I18nLangKeys
}

interface Props {
  children: ReactNode
  params: Promise<{ lang: string }>
}

function validateLang(lang: string): I18nLangKeys {
  if (lang === 'ja' || lang === 'en') {
    return lang
  }
  throw new Error(`Invalid language: ${lang}. Expected 'ja' or 'en'.`)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const lang = validateLang(resolvedParams.lang)

  const { t } = await useServerLocale(lang)

  const title = t('systemTitle')
  const description = lang === 'ja'
    ? 'フルスタックWebエンジニア & Androidエンジニア'
    : 'Full-stack Web Engineer & Android Engineer'
  const repo = 'https://github.com/yoshixmk/profile'

  return {
    title,
    description,
    metadataBase: new URL('https://yoshixmk.github.io/profile'),
    icons: '/img/favicon.svg',
    openGraph: {
      title,
      description,
      url: `https://yoshixmk.github.io/profile/${lang}`,
      siteName: title,
      type: 'website',
      locale: lang === 'ja' ? 'ja_JP' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: '@yoshixmk',
      creator: '@yoshixmk',
    },
    alternates: {
      canonical: repo,
      languages: {
        ja: 'https://yoshixmk.github.io/profile/ja',
        en: 'https://yoshixmk.github.io/profile/en',
      },
    },
  }
}

const repo = 'https://github.com/yoshixmk/profile'

export async function generateStaticParams(): Promise<PageParams[]> {
  return [
    { lang: 'en' },
    { lang: 'ja' },
  ]
}

const CustomNavbar = async ({ lang }: I18nLangAsyncProps) => {
  const { t } = await useServerLocale(lang)
  return (
    <Navbar
      logo={(
        <span>{t('systemTitle')}</span>
      )}
      logoLink={`/${lang}`}
      projectLink={repo}
    >
      <>
        <LocaleToggle className="max-md:hidden" />
        <ThemeToggle className="max-md:hidden" />
      </>

    </Navbar>
  )
}

export default async function LangLayout({ children, params }: Props) {
  const resolvedParams = await params
  const lang = validateLang(resolvedParams.lang)

  const pageMap = await getPageMap(lang)
  const { t } = await useServerLocale(lang)

  return (
    <html
      lang={lang}
      dir={getDirection(lang)}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="starter-theme-provider"
          disableTransitionOnChange
        >
          <Layout
            navbar={
              <CustomNavbar lang={lang} />
            }
            lastUpdated={(
              <LastUpdated>
                {t('lastUpdated')}
              </LastUpdated>
            )}
            editLink={null}
            docsRepositoryBase={repo}
            footer={(
              <Footer className="bg-background py-5!">
                <CustomFooter />
              </Footer>
            )}
            search={<Search />}
            i18n={[
              { locale: 'en', name: 'English' },
              { locale: 'ja', name: '日本語' },
            ]}
            pageMap={pageMap}
            feedback={{ content: '' }}
          >
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}
