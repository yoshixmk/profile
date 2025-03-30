import type { I18nLangAsyncProps, I18nLangKeys } from '@/i18n'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { CustomFooter } from '@/components/CustomFooter'
import { useServerLocale } from '@/hooks'
import LocaleToggle from '../../widgets/locale-toggle'
import ThemeToggle from '../../widgets/theme-toggle'
import { Footer, LastUpdated, Layout, Navbar } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { getDirection } from '../_dictionaries/get-dictionary'

import { ThemeProvider } from './_components/ThemeProvider'
import './styles/index.css'

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  metadataBase: new URL('https://yoshixmk.github.io/profile'),
  icons: '/img/favicon.svg',
} satisfies Metadata

const repo = 'https://github.com/yoshixmk/profile'

const CustomNavbar = async ({ lang }: I18nLangAsyncProps) => {
  const { t } = await useServerLocale(lang)
  return (
    <Navbar
      logo={(
        <span>{ t('systemTitle') }</span>
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

  const title = 'Profile'
  const description = 'Full-stack Web Engineer & Android Engineer'

  const { t } = await useServerLocale(lang)

  return (
    <html
      // Not required, but good for SEO
      lang={lang}
      // Required to be set
      // dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      dir={getDirection(lang)}
      suppressHydrationWarning
    >
      <Head
      >
        {/* <title>{asPath !== '/' ? `${normalizePagesResult.title} - ${title}` : title}</title> */}
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <link rel="canonical" href={repo} />
      </Head>
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
                { t('lastUpdated') }
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
          // ... Your additional layout options
          >
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}
