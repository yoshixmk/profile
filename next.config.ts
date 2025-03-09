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
    locales: ['zh', 'en'],
    defaultLocale: 'en',
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/profile' : '',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ]
  },
})
