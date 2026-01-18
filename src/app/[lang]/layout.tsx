import type { I18nLangAsyncProps, I18nLangKeys } from '@/i18n'
import type { Metadata } from 'next'

import type { ReactNode } from 'react'
import { CustomFooter } from '@/components/CustomFooter'
import { useServerLocale } from '@/hooks'
import { Footer, LastUpdated, Layout, Navbar } from 'nextra-theme-docs'
import { Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import LocaleToggle from '../../widgets/locale-toggle'
import ThemeToggle from '../../widgets/theme-toggle'
import { getDirection } from '../_dictionaries/get-dictionary'

import { ThemeProvider } from './_components/ThemeProvider'
import './styles/index.css'

export async function generateMetadata(props: Props): Promise<Metadata> {
  const title = 'Profile'
  const description = 'Full-stack Web Engineer & Android Engineer'
  const repo = 'https://github.com/yoshixmk/profile'

  return {
    title,
    description,
    metadataBase: new URL('https://yoshixmk.github.io/profile'),
    icons: '/img/favicon.svg',
    openGraph: {
      title,
      description,
    },
    alternates: {
      canonical: repo,
    },
  }
}

const repo = 'https://github.com/yoshixmk/profile'

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

interface Props {
  children: ReactNode
  params: Promise<{ lang: I18nLangKeys }>
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params
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
