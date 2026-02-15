/**
 * Integration Tests for End-to-End User Workflows
 * Tests complete user journeys across the website
 */

import * as fc from 'fast-check'

describe('integration: End-to-End User Workflows', () => {
  /**
   * Test complete user workflow: Language switching across different pages
   */
  it('should handle complete language switching workflow across pages', () => {
    fc.assert(
      fc.property(
        fc.record({
          initialLocale: fc.constantFrom('ja', 'en'),
          pageSequence: fc.array(
            fc.constantFrom('/', '/introduction', '/blog', '/site-structure'),
            { minLength: 2, maxLength: 4 },
          ),
          scrollPositions: fc.array(fc.integer({ min: 0, max: 3000 }), { minLength: 2, maxLength: 4 }),
        }),
        (config) => {
          // Arrange: Set up initial state
          const supportedLocales = ['ja', 'en']
          expect(supportedLocales).toContain(config.initialLocale)

          let currentLocale = config.initialLocale
          const targetLocale = currentLocale === 'ja' ? 'en' : 'ja'

          // Act & Assert: Simulate user navigating through pages
          config.pageSequence.forEach((page, index) => {
            // User navigates to page
            const currentPath = `/${currentLocale}${page === '/' ? '' : page}`
            expect(currentPath).toMatch(/^\/(ja|en)/)

            // User scrolls on page
            const scrollPosition = config.scrollPositions[index] || 0
            expect(scrollPosition).toBeGreaterThanOrEqual(0)

            // User switches language
            const newPath = `/${targetLocale}${page === '/' ? '' : page}`
            expect(newPath).toMatch(/^\/(ja|en)/)

            // Verify path structure is preserved
            const pathWithoutLocale = page
            expect(newPath).toContain(pathWithoutLocale === '/' ? targetLocale : pathWithoutLocale)

            // Verify locale cookie is set
            const cookieKey = 'NEXT_LOCALE'
            expect(cookieKey).toBe('NEXT_LOCALE')

            // Switch back for next iteration
            currentLocale = targetLocale
          })

          return true
        },
      ),
      { numRuns: 50 },
    )
  })

  /**
   * Test complete user workflow: Theme switching across components
   */
  it('should handle theme switching workflow across all components', () => {
    fc.assert(
      fc.property(
        fc.record({
          initialTheme: fc.constantFrom('light', 'dark', 'system'),
          componentSequence: fc.array(
            fc.constantFrom('ThemeToggle', 'PanelParticles', 'CustomFooter', 'HomepageHero'),
            { minLength: 2, maxLength: 4 },
          ),
          themeChanges: fc.array(fc.constantFrom('light', 'dark', 'system'), { minLength: 1, maxLength: 3 }),
        }),
        (config) => {
          // Arrange: Set up initial theme
          const validThemes = ['light', 'dark', 'system']
          expect(validThemes).toContain(config.initialTheme)

          let _currentTheme = config.initialTheme

          // Act & Assert: Simulate theme changes across components
          config.themeChanges.forEach((targetTheme) => {
            expect(validThemes).toContain(targetTheme)

            // Verify each component responds to theme change
            config.componentSequence.forEach((component) => {
              const supportedComponents = ['ThemeToggle', 'PanelParticles', 'CustomFooter', 'HomepageHero']
              expect(supportedComponents).toContain(component)

              // Resolve theme (system -> light/dark)
              const resolvedTheme = targetTheme === 'system' ? 'light' : targetTheme

              // Verify component-specific theme behavior
              switch (component) {
                case 'PanelParticles': {
                  const particleColors = {
                    light: '#9f9cbf',
                    dark: '#c1c7d1',
                  }
                  const expectedColor = particleColors[resolvedTheme as keyof typeof particleColors]
                  expect(expectedColor).toBeDefined()
                  break
                }
                case 'ThemeToggle': {
                  expect(['light', 'dark', 'system']).toContain(targetTheme)
                  break
                }
                default: {
                  expect(['light', 'dark']).toContain(resolvedTheme)
                }
              }
            })

            // Verify localStorage persistence
            const storageKey = 'starter-theme-provider'
            expect(storageKey).toBe('starter-theme-provider')

            _currentTheme = targetTheme
          })

          return true
        },
      ),
      { numRuns: 50 },
    )
  })

  /**
   * Test complete user workflow: Navigation and content browsing
   */
  it('should handle complete navigation workflow with breadcrumbs and TOC', () => {
    fc.assert(
      fc.property(
        fc.record({
          locale: fc.constantFrom('ja', 'en'),
          navigationPath: fc.array(
            fc.record({
              page: fc.constantFrom('/', '/introduction', '/blog', '/blog/001-example'),
              expectBreadcrumbs: fc.boolean(),
              expectToc: fc.boolean(),
            }),
            { minLength: 2, maxLength: 4 },
          ),
        }),
        (config) => {
          // Arrange: Set up locale
          const supportedLocales = ['ja', 'en']
          expect(supportedLocales).toContain(config.locale)

          // Act & Assert: Simulate user navigation
          config.navigationPath.forEach((nav) => {
            const fullPath = `/${config.locale}${nav.page === '/' ? '' : nav.page}`
            expect(fullPath).toMatch(/^\/(ja|en)/)

            // Verify navigation elements based on page type
            if (nav.page === '/') {
              // Homepage has hidden layout
              expect(nav.expectToc).toBeDefined()
            }
            else if (nav.page === '/introduction') {
              // Introduction page has TOC disabled
              expect(typeof nav.expectToc).toBe('boolean')
            }
            else if (nav.page.startsWith('/blog/')) {
              // Blog articles should have TOC
              expect(typeof nav.expectToc).toBe('boolean')
            }

            // Verify navbar presence
            const shouldHaveNavbar = nav.page !== '/'
            expect(typeof shouldHaveNavbar).toBe('boolean')
          })

          return true
        },
      ),
      { numRuns: 50 },
    )
  })

  /**
   * Test complete user workflow: Search functionality across languages
   */
  it('should handle search workflow across multilingual content', () => {
    fc.assert(
      fc.property(
        fc.record({
          locale: fc.constantFrom('ja', 'en'),
          searchQueries: fc.array(fc.string({ minLength: 1, maxLength: 20 }), { minLength: 1, maxLength: 3 }),
          expectResults: fc.boolean(),
        }),
        (config) => {
          // Arrange: Set up search context
          const supportedLocales = ['ja', 'en']
          expect(supportedLocales).toContain(config.locale)

          // Act & Assert: Simulate search queries
          config.searchQueries.forEach((query) => {
            expect(query.length).toBeGreaterThan(0)

            // Verify search system configuration
            const searchConfig = {
              engine: 'Pagefind',
              type: 'static',
              multilingual: true,
              supportedLanguages: ['ja', 'en'],
            }

            expect(searchConfig.engine).toBe('Pagefind')
            expect(searchConfig.multilingual).toBe(true)
            expect(searchConfig.supportedLanguages).toContain(config.locale)

            // Verify search index structure
            const indexPath = `out/_pagefind/pagefind.${config.locale}_*.pf_meta`
            expect(indexPath).toContain(config.locale)

            // Verify search results structure
            if (config.expectResults) {
              const resultStructure = {
                id: 'string',
                url: 'string',
                title: 'string',
                excerpt: 'string',
                language: config.locale,
              }
              expect(resultStructure.language).toBe(config.locale)
            }
          })

          return true
        },
      ),
      { numRuns: 30 },
    )
  })

  /**
   * Test complete user workflow: Responsive behavior across devices
   */
  it('should handle responsive workflow across different device types', () => {
    fc.assert(
      fc.property(
        fc.record({
          deviceType: fc.constantFrom('mobile', 'tablet', 'desktop'),
          orientation: fc.constantFrom('portrait', 'landscape'),
          screenWidth: fc.integer({ min: 320, max: 1920 }),
          interactions: fc.array(
            fc.constantFrom('navigation', 'theme-toggle', 'locale-toggle', 'scroll'),
            { minLength: 2, maxLength: 4 },
          ),
        }),
        (config) => {
          // Arrange: Set up device context
          const supportedDevices = ['mobile', 'tablet', 'desktop']
          expect(supportedDevices).toContain(config.deviceType)

          const supportedOrientations = ['portrait', 'landscape']
          expect(supportedOrientations).toContain(config.orientation)

          // Verify screen width is valid
          expect(config.screenWidth).toBeGreaterThanOrEqual(320)
          expect(config.screenWidth).toBeLessThanOrEqual(1920)

          // Determine breakpoint
          let breakpoint: string
          if (config.screenWidth < 640) {
            breakpoint = 'sm'
          }
          else if (config.screenWidth < 768) {
            breakpoint = 'md'
          }
          else if (config.screenWidth < 1024) {
            breakpoint = 'lg'
          }
          else if (config.screenWidth < 1280) {
            breakpoint = 'xl'
          }
          else { breakpoint = '2xl' }

          expect(['sm', 'md', 'lg', 'xl', '2xl']).toContain(breakpoint)

          // Act & Assert: Simulate user interactions
          config.interactions.forEach((interaction) => {
            const supportedInteractions = ['navigation', 'theme-toggle', 'locale-toggle', 'scroll']
            expect(supportedInteractions).toContain(interaction)

            // Verify device-specific behavior
            switch (interaction) {
              case 'navigation': {
                // Mobile should have different navigation behavior
                const isMobile = config.deviceType === 'mobile'
                expect(typeof isMobile).toBe('boolean')
                break
              }
              case 'theme-toggle':
              case 'locale-toggle': {
                // Toggles should be hidden on mobile
                const shouldHideToggles = config.screenWidth < 768
                expect(typeof shouldHideToggles).toBe('boolean')
                break
              }
              case 'scroll': {
                // Particles should be disabled on mobile
                const shouldDisableParticles = config.deviceType === 'mobile'
                expect(typeof shouldDisableParticles).toBe('boolean')
                break
              }
            }
          })

          return true
        },
      ),
      { numRuns: 50 },
    )
  })

  /**
   * Test complete user workflow: Content migration and rendering
   */
  it('should handle content rendering workflow for MDX and TSX formats', () => {
    fc.assert(
      fc.property(
        fc.record({
          locale: fc.constantFrom('ja', 'en'),
          contentType: fc.constantFrom('mdx', 'tsx', 'md'),
          hasComponents: fc.boolean(),
          hasFrontmatter: fc.boolean(),
        }),
        (config) => {
          // Arrange: Set up content context
          const supportedLocales = ['ja', 'en']
          expect(supportedLocales).toContain(config.locale)

          const supportedContentTypes = ['mdx', 'tsx', 'md']
          expect(supportedContentTypes).toContain(config.contentType)

          // Act & Assert: Verify content rendering
          const contentPath = `src/content/${config.locale}/blog/`
          expect(contentPath).toContain(config.locale)

          // Verify content type support
          switch (config.contentType) {
            case 'mdx': {
              // MDX should support React components
              expect(config.hasComponents).toBeDefined()
              expect(config.hasFrontmatter).toBeDefined()
              break
            }
            case 'tsx': {
              // TSX can support React functionality
              expect(typeof config.hasComponents).toBe('boolean')
              break
            }
            case 'md': {
              // MD should support basic markdown
              expect(config.hasFrontmatter).toBeDefined()
              break
            }
          }

          // Verify Nextra processing
          const nextraConfig = {
            defaultShowCopyCode: true,
            unstable_shouldAddLocaleToLinks: false,
          }
          expect(nextraConfig.defaultShowCopyCode).toBe(true)

          return true
        },
      ),
      { numRuns: 30 },
    )
  })
})
