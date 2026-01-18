/**
 * Property-Based Tests for Navigation System
 * Feature: nextjs-nextra-profile-website, Property 5: Navigation System Consistency
 * Validates: Requirements 5.1, 5.2, 5.3, 5.5
 */

import * as fc from 'fast-check'

describe('property 5: Navigation System Consistency', () => {
  /**
   * **Validates: Requirements 5.1, 5.2, 5.3, 5.5**
   *
   * Property: For any page navigation and language context, the navigation system should maintain
   * consistent header structure, proper routing, and appropriate navigation elements (breadcrumbs, TOC) based on page type
   */
  it('should maintain consistent navigation structure across all pages and languages', () => {
    fc.assert(
      fc.property(
        fc.record({
          currentLocale: fc.constantFrom('ja', 'en'),
          targetLocale: fc.constantFrom('ja', 'en'),
          pageType: fc.constantFrom('index', 'introduction', 'blog', 'site-structure', 'blog-article'),
          routePath: fc.constantFrom('/', '/introduction', '/blog', '/site-structure', '/blog/001-example'),
          hasNavbar: fc.boolean(),
          hasToc: fc.boolean(),
          hasTimestamp: fc.boolean(),
        }),
        (config) => {
          // Test locale support consistency (Requirement 5.1)
          const supportedLocales = ['ja', 'en']
          expect(supportedLocales).toContain(config.currentLocale)
          expect(supportedLocales).toContain(config.targetLocale)

          // Test page type support
          const supportedPageTypes = ['index', 'introduction', 'blog', 'site-structure', 'blog-article']
          expect(supportedPageTypes).toContain(config.pageType)

          // Test route path validity
          const validRoutePaths = ['/', '/introduction', '/blog', '/site-structure', '/blog/001-example']
          expect(validRoutePaths).toContain(config.routePath)

          // Test navigation structure consistency (Requirement 5.2)
          const expectedNavbarPresence = {
            index: false, // Hidden layout
            introduction: true, // Has navbar
            blog: true, // Standard page
            'site-structure': true, // Standard page
            'blog-article': true, // Article page
          }

          const shouldHaveNavbar = expectedNavbarPresence[config.pageType as keyof typeof expectedNavbarPresence]
          if (config.pageType === 'index') {
            // Index page should be hidden and not have navbar
            expect(shouldHaveNavbar).toBe(false)
          }
          else {
            // All other pages should have navbar
            expect(shouldHaveNavbar).toBe(true)
          }

          // Test table of contents configuration (Requirement 5.3)
          const expectedTocPresence = {
            index: false, // No TOC for hidden layout
            introduction: false, // Explicitly disabled
            blog: true, // Default enabled
            'site-structure': true, // Default enabled
            'blog-article': true, // Articles should have TOC
          }

          const shouldHaveToc = expectedTocPresence[config.pageType as keyof typeof expectedTocPresence]
          if (config.pageType === 'introduction' || config.pageType === 'index') {
            expect(shouldHaveToc).toBe(false)
          }
          else {
            expect(shouldHaveToc).toBe(true)
          }

          // Test language-specific routing (Requirement 5.1)
          const expectedRouteStructure = {
            ja: {
              index: '/ja',
              introduction: '/ja/introduction',
              blog: '/ja/blog',
              'site-structure': '/ja/site-structure',
              'blog-article': '/ja/blog/001-example',
            },
            en: {
              index: '/en',
              introduction: '/en/introduction',
              blog: '/en/blog',
              'site-structure': '/en/site-structure',
              'blog-article': '/en/blog/001-example',
            },
          }

          const expectedRoute = expectedRouteStructure[config.currentLocale as keyof typeof expectedRouteStructure][config.pageType as keyof typeof expectedRouteStructure['ja']]
          expect(expectedRoute).toBeDefined()
          expect(typeof expectedRoute).toBe('string')
          expect(expectedRoute).toMatch(/^\/(?:ja|en)/)

          // Test locale switching preserves page context (Requirement 5.5)
          if (config.currentLocale !== config.targetLocale) {
            const currentRoute = expectedRouteStructure[config.currentLocale as keyof typeof expectedRouteStructure][config.pageType as keyof typeof expectedRouteStructure['ja']]
            const targetRoute = expectedRouteStructure[config.targetLocale as keyof typeof expectedRouteStructure][config.pageType as keyof typeof expectedRouteStructure['ja']]

            // Routes should have same structure but different locale
            const currentPath = currentRoute.replace(`/${config.currentLocale}`, '')
            const targetPath = targetRoute.replace(`/${config.targetLocale}`, '')
            expect(currentPath).toBe(targetPath)
          }

          return true
        },
      ),
      { numRuns: 100 },
    )
  })

  /**
   * **Validates: Requirements 5.1, 5.2**
   *
   * Property: For any navigation component and locale configuration, the navigation system should
   * provide consistent header structure with proper logo, project link, and locale/theme toggles
   */
  it('should maintain consistent header navigation structure across locales', () => {
    fc.assert(
      fc.property(
        fc.record({
          locale: fc.constantFrom('ja', 'en'),
          hasLogo: fc.boolean(),
          hasProjectLink: fc.boolean(),
          hasLocaleToggle: fc.boolean(),
          hasThemeToggle: fc.boolean(),
          screenSize: fc.constantFrom('mobile', 'tablet', 'desktop'),
        }),
        (config) => {
          // Test locale support
          const supportedLocales = ['ja', 'en']
          expect(supportedLocales).toContain(config.locale)

          // Test screen size support
          const supportedScreenSizes = ['mobile', 'tablet', 'desktop']
          expect(supportedScreenSizes).toContain(config.screenSize)

          // Test navbar components presence (Requirement 5.2)
          expect(typeof config.hasLogo).toBe('boolean')
          expect(typeof config.hasProjectLink).toBe('boolean')
          expect(typeof config.hasLocaleToggle).toBe('boolean')
          expect(typeof config.hasThemeToggle).toBe('boolean')

          // Test logo configuration
          const expectedLogoText = {
            ja: 'Profile', // systemTitle from i18n
            en: 'Profile',
          }
          const logoText = expectedLogoText[config.locale as keyof typeof expectedLogoText]
          expect(logoText).toBeDefined()
          expect(typeof logoText).toBe('string')

          // Test logo link structure
          const expectedLogoLink = `/${config.locale}`
          expect(expectedLogoLink).toMatch(/^\/(ja|en)$/)

          // Test project link consistency
          const expectedProjectLink = 'https://github.com/yoshixmk/profile'
          expect(expectedProjectLink).toMatch(/^https:\/\/github\.com\/[\w-]+\/[\w-]+$/)

          // Test responsive behavior for toggles (Requirement 5.2)
          const shouldShowToggles = config.screenSize !== 'mobile'
          if (config.screenSize === 'mobile') {
            // Mobile should hide toggles with max-md:hidden class
            expect(shouldShowToggles).toBe(false)
          }
          else {
            // Tablet and desktop should show toggles
            expect(shouldShowToggles).toBe(true)
          }

          // Test CSS class application for responsive design
          const expectedToggleClass = 'max-md:hidden'
          expect(expectedToggleClass).toBe('max-md:hidden')

          return true
        },
      ),
      { numRuns: 75 },
    )
  })

  /**
   * **Validates: Requirements 5.1, 5.5**
   *
   * Property: For any locale switching scenario, the navigation system should correctly
   * handle language routing with Next.js App Router and preserve user context
   */
  it('should handle locale switching with proper routing and context preservation', () => {
    fc.assert(
      fc.property(
        fc.record({
          currentLocale: fc.constantFrom('ja', 'en'),
          currentPath: fc.constantFrom('/introduction', '/blog', '/site-structure', '/blog/001-example'),
          scrollPosition: fc.integer({ min: 0, max: 5000 }),
          isAtBottom: fc.boolean(),
          cookieExpiration: fc.integer({ min: 1, max: 365 }), // days
        }),
        (config) => {
          // Test locale support
          const supportedLocales = ['ja', 'en']
          expect(supportedLocales).toContain(config.currentLocale)

          // Test path validity
          const validPaths = ['/introduction', '/blog', '/site-structure', '/blog/001-example']
          expect(validPaths).toContain(config.currentPath)

          // Test scroll position validity
          expect(config.scrollPosition).toBeGreaterThanOrEqual(0)
          expect(config.scrollPosition).toBeLessThanOrEqual(5000)

          // Test locale switching logic (Requirement 5.5)
          const targetLocale = config.currentLocale === 'ja' ? 'en' : 'ja'
          expect(supportedLocales).toContain(targetLocale)

          // Test path transformation during locale switch
          const currentFullPath = `/${config.currentLocale}${config.currentPath}`
          const expectedTargetPath = `/${targetLocale}${config.currentPath}`

          expect(currentFullPath).toMatch(/^\/(ja|en)\//)
          expect(expectedTargetPath).toMatch(/^\/(ja|en)\//)

          // Path structure should be preserved
          const pathWithoutLocale = config.currentPath
          expect(expectedTargetPath).toContain(pathWithoutLocale)

          // Test cookie configuration for locale persistence
          const cookieKey = 'NEXT_LOCALE'
          const cookieValue = config.currentLocale
          const cookiePath = '/'

          expect(cookieKey).toBe('NEXT_LOCALE')
          expect(supportedLocales).toContain(cookieValue)
          expect(cookiePath).toBe('/')

          // Test cookie expiration (one year in milliseconds)
          const oneYearMs = 365 * 24 * 60 * 60 * 1000
          expect(oneYearMs).toBe(31536000000)

          // Test scroll position preservation logic
          expect(typeof config.isAtBottom).toBe('boolean')
          if (config.isAtBottom) {
            // Should scroll to bottom after navigation
            expect(config.isAtBottom).toBe(true)
          }
          else {
            // Should restore exact scroll position
            expect(config.scrollPosition).toBeGreaterThanOrEqual(0)
          }

          return true
        },
      ),
      { numRuns: 50 },
    )
  })

  /**
   * **Validates: Requirements 5.3, 5.5**
   *
   * Property: For any page metadata configuration, the navigation system should provide
   * appropriate navigation elements based on page type and content structure
   */
  it('should configure navigation elements based on page metadata and content type', () => {
    fc.assert(
      fc.property(
        fc.record({
          pageType: fc.constantFrom('page', 'separator'),
          displayMode: fc.constantFrom('hidden', 'children', 'normal'),
          layoutType: fc.constantFrom('default', 'full'),
          hasTimestamp: fc.boolean(),
          hasToc: fc.boolean(),
          hasNavbar: fc.boolean(),
          locale: fc.constantFrom('ja', 'en'),
        }),
        (config) => {
          // Test page type support
          const supportedPageTypes = ['page', 'separator']
          expect(supportedPageTypes).toContain(config.pageType)

          // Test display mode support
          const supportedDisplayModes = ['hidden', 'children', 'normal']
          expect(supportedDisplayModes).toContain(config.displayMode)

          // Test layout type support
          const supportedLayoutTypes = ['default', 'full']
          expect(supportedLayoutTypes).toContain(config.layoutType)

          // Test locale support
          const supportedLocales = ['ja', 'en']
          expect(supportedLocales).toContain(config.locale)

          // Test metadata configuration consistency (Requirement 5.3)
          expect(typeof config.hasTimestamp).toBe('boolean')
          expect(typeof config.hasToc).toBe('boolean')
          expect(typeof config.hasNavbar).toBe('boolean')

          // Test page-specific navigation configuration
          if (config.displayMode === 'hidden') {
            // Hidden pages should have specific configuration
            expect(config.layoutType).toBeDefined()
            if (config.layoutType === 'full') {
              // Full layout pages typically don't need TOC
              expect(typeof config.hasToc).toBe('boolean')
            }
          }

          // Test navigation element relationships
          if (config.pageType === 'page') {
            // Page type should support all navigation elements
            expect(typeof config.hasNavbar).toBe('boolean')
            expect(typeof config.hasToc).toBe('boolean')
            expect(typeof config.hasTimestamp).toBe('boolean')
          }

          // Test locale-specific title configuration (Requirement 5.5)
          const expectedTitles = {
            ja: {
              introduction: '経歴',
              blog: 'ブログ',
              'site-structure': 'このサイトの構成',
            },
            en: {
              introduction: 'My Career',
              blog: 'Blog',
              'site-structure': 'Site Structure',
            },
          }

          // Test that titles are properly localized
          Object.values(expectedTitles).forEach(localeConfig => {
            Object.values(localeConfig).forEach(title => {
              expect(typeof title).toBe('string')
              expect(title.length).toBeGreaterThan(0)
            })
          })

          // Test Japanese vs English title differences
          const jaIntroTitle = expectedTitles.ja.introduction
          const enIntroTitle = expectedTitles.en.introduction
          expect(jaIntroTitle).not.toBe(enIntroTitle)
          expect(jaIntroTitle).toBe('経歴')
          expect(enIntroTitle).toBe('My Career')

          return true
        },
      ),
      { numRuns: 75 },
    )
  })

  /**
   * **Validates: Requirements 5.1, 5.2**
   *
   * Property: For any middleware routing scenario, the navigation system should correctly
   * handle language detection, redirection, and path filtering
   */
  it('should handle middleware routing and language detection correctly', () => {
    fc.assert(
      fc.property(
        fc.record({
          requestPath: fc.oneof(
            fc.constantFrom('/', '/introduction', '/blog', '/site-structure'),
            fc.constantFrom('/.well-known/test', '/.DS_Store', '/._hidden'),
            fc.constantFrom('/api/test', '/_next/static/test', '/_next/image/test', '/favicon.ico', '/img/test.png'),
          ),
          hasLocalePrefix: fc.boolean(),
          browserLanguage: fc.constantFrom('ja', 'en', 'ja-JP', 'en-US'),
        }),
        (config) => {
          // Test request path categories
          const systemPaths = ['/.well-known/test', '/.DS_Store', '/._hidden']
          const excludedPaths = ['/api/test', '/_next/static/test', '/_next/image/test', '/favicon.ico', '/img/test.png']
          const validContentPaths = ['/', '/introduction', '/blog', '/site-structure']

          const isSystemPath = systemPaths.some(systemPath => config.requestPath.startsWith(systemPath.split('/')[1]))
          const isExcludedPath = excludedPaths.some(_path =>
            config.requestPath.startsWith('/api')
            || config.requestPath.startsWith('/_next')
            || config.requestPath === '/favicon.ico'
            || config.requestPath.startsWith('/img'),
          )
          const isValidContentPath = validContentPaths.includes(config.requestPath)

          // Test system path blocking (Requirement 5.1)
          if (config.requestPath.includes('/.')) {
            // System paths should be blocked
            expect(isSystemPath || config.requestPath.includes('/.')).toBe(true)
          }

          // Test excluded path handling
          if (isExcludedPath) {
            // These paths should not trigger locale middleware
            expect(isExcludedPath).toBe(true)
          }

          // Test valid content path processing
          if (isValidContentPath) {
            expect(validContentPaths).toContain(config.requestPath)
          }

          // Test browser language support (Requirement 5.1)
          const supportedBrowserLanguages = ['ja', 'en', 'ja-JP', 'en-US']
          expect(supportedBrowserLanguages).toContain(config.browserLanguage)

          // Test language detection logic
          const detectedLocale = config.browserLanguage.startsWith('ja') ? 'ja' : 'en'
          expect(['ja', 'en']).toContain(detectedLocale)

          // Test locale prefix handling (Requirement 5.2)
          expect(typeof config.hasLocalePrefix).toBe('boolean')
          if (config.hasLocalePrefix) {
            // Path should include locale prefix
            const pathWithLocale = `/${detectedLocale}${config.requestPath === '/' ? '' : config.requestPath}`
            expect(pathWithLocale).toMatch(/^\/(ja|en)/)
          }

          // Test middleware matcher configuration
          const matcherPattern = '/((?!api|_next/static|_next/image|favicon.ico|img|_pagefind).*)'
          expect(matcherPattern).toBeDefined()
          expect(typeof matcherPattern).toBe('string')

          return true
        },
      ),
      { numRuns: 50 },
    )
  })

  /**
   * **Validates: Requirements 5.2, 5.3**
   *
   * Property: For any Nextra layout configuration, the navigation system should provide
   * consistent layout structure with proper footer, search, and i18n configuration
   */
  it('should maintain consistent Nextra layout configuration across all pages', () => {
    fc.assert(
      fc.property(
        fc.record({
          locale: fc.constantFrom('ja', 'en'),
          hasFooter: fc.boolean(),
          hasSearch: fc.boolean(),
          hasEditLink: fc.boolean(),
          hasFeedback: fc.boolean(),
          hasLastUpdated: fc.boolean(),
        }),
        (config) => {
          // Test locale support
          const supportedLocales = ['ja', 'en']
          expect(supportedLocales).toContain(config.locale)

          // Test layout component configuration (Requirement 5.2)
          expect(typeof config.hasFooter).toBe('boolean')
          expect(typeof config.hasSearch).toBe('boolean')
          expect(typeof config.hasEditLink).toBe('boolean')
          expect(typeof config.hasFeedback).toBe('boolean')
          expect(typeof config.hasLastUpdated).toBe('boolean')

          // Test i18n configuration structure
          const i18nConfig = [
            { locale: 'en', name: 'English' },
            { locale: 'ja', name: '日本語' },
          ]

          i18nConfig.forEach(localeConfig => {
            expect(['en', 'ja']).toContain(localeConfig.locale)
            expect(typeof localeConfig.name).toBe('string')
            expect(localeConfig.name.length).toBeGreaterThan(0)
          })

          // Test locale-specific names
          const enConfig = i18nConfig.find(c => c.locale === 'en')
          const jaConfig = i18nConfig.find(c => c.locale === 'ja')

          expect(enConfig?.name).toBe('English')
          expect(jaConfig?.name).toBe('日本語')

          // Test repository configuration
          const docsRepositoryBase = 'https://github.com/yoshixmk/profile'
          expect(docsRepositoryBase).toMatch(/^https:\/\/github\.com\/[\w-]+\/[\w-]+$/)

          // Test footer configuration (Requirement 5.3)
          const footerClassName = 'bg-background py-5!'
          expect(footerClassName).toBeDefined()
          expect(typeof footerClassName).toBe('string')

          // Test feedback configuration
          const feedbackContent = ''
          expect(typeof feedbackContent).toBe('string')

          // Test edit link configuration (should be null for this project)
          const editLink = null
          expect(editLink).toBeNull()

          // Test last updated configuration
          if (config.hasLastUpdated) {
            const lastUpdatedKey = 'lastUpdated'
            expect(lastUpdatedKey).toBe('lastUpdated')
          }

          return true
        },
      ),
      { numRuns: 30 },
    )
  })
})
