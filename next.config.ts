import createWithNextra from 'nextra'

const withNextra = createWithNextra({
  defaultShowCopyCode: true,
  unstable_shouldAddLocaleToLinks: true,
})


/**
 * @type {import("next").NextConfig}
 */
export default withNextra({
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  cleanDistDir: true,
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  assetPrefix: '/profile',
  basePath: '/profile',
})
