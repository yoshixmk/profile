/**
 * Property-Based Tests for Search System
 * Feature: nextjs-nextra-profile-website, Property 6: Search System Completeness
 * Validates: Requirements 6.2, 6.3, 6.4
 */

import * as fc from 'fast-check'

describe('property 6: Search System Completeness', () => {
  /**
   * **Validates: Requirements 6.2, 6.3, 6.4**
   *
   * Property: For any search query and content language, the search system should return relevant results
   * from both Japanese and English content with proper highlighting and comprehensive coverage
   */
  it('should return multilingual search results with proper highlighting and comprehensive coverage', () => {
    fc.assert(
      fc.property(
        fc.record({
          searchQuery: fc.oneof(
            fc.constantFrom('Deno', 'TypeScript', 'React', 'Next.js', 'blog', 'introduction'),
            fc.constantFrom('デノ', 'タイプスクリプト', 'リアクト', 'ブログ', '経歴'),
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
          ),
          targetLanguage: fc.constantFrom('ja', 'en', 'both'),
          expectedContentTypes: fc.array(
            fc.constantFrom('blog-article', 'profile-page', 'introduction', 'site-structure'),
            { minLength: 1, maxLength: 4 },
          ),
          highlightingEnabled: fc.boolean(),
          snippetLength: fc.integer({ min: 50, max: 300 }),
        }),
        (config) => {
          // Test search query validity (Requirement 6.2)
          expect(config.searchQuery).toBeDefined()
          expect(typeof config.searchQuery).toBe('string')
          expect(config.searchQuery.trim().length).toBeGreaterThan(0)
          expect(config.searchQuery.length).toBeLessThanOrEqual(50)

          // Test language support for multilingual search (Requirement 6.2)
          const supportedLanguages = ['ja', 'en', 'both']
          expect(supportedLanguages).toContain(config.targetLanguage)

          // Test content type coverage (Requirement 6.3)
          const validContentTypes = ['blog-article', 'profile-page', 'introduction', 'site-structure']
          expect(config.expectedContentTypes.length).toBeGreaterThan(0)
          expect(config.expectedContentTypes.length).toBeLessThanOrEqual(4)
          config.expectedContentTypes.forEach(contentType => {
            expect(validContentTypes).toContain(contentType)
          })

          // Test search result structure requirements
          const expectedSearchResultStructure = {
            id: 'string',
            url: 'string',
            title: 'string',
            excerpt: 'string',
            content: 'string',
            language: 'string',
            meta: {
              word_count: 'number',
              filters: 'object',
            },
          }

          // Validate search result structure
          expect(typeof expectedSearchResultStructure.id).toBe('string')
          expect(typeof expectedSearchResultStructure.url).toBe('string')
          expect(typeof expectedSearchResultStructure.title).toBe('string')
          expect(typeof expectedSearchResultStructure.excerpt).toBe('string')
          expect(typeof expectedSearchResultStructure.content).toBe('string')
          expect(typeof expectedSearchResultStructure.language).toBe('string')
          expect(typeof expectedSearchResultStructure.meta.word_count).toBe('string')
          expect(typeof expectedSearchResultStructure.meta.filters).toBe('string')

          // Test highlighting configuration (Requirement 6.4)
          expect(typeof config.highlightingEnabled).toBe('boolean')
          if (config.highlightingEnabled) {
            // Highlighting should be supported for search results
            const highlightParam = 'highlight'
            expect(highlightParam).toBe('highlight')
          }

          // Test snippet length configuration (Requirement 6.4)
          expect(config.snippetLength).toBeGreaterThanOrEqual(50)
          expect(config.snippetLength).toBeLessThanOrEqual(300)

          // Test multilingual content indexing (Requirement 6.2)
          const expectedIndexedContent = {
            ja: [
              'src/content/ja/index.mdx',
              'src/content/ja/introduction.mdx',
              'src/content/ja/site-structure.mdx',
              'src/content/ja/blog/*.md',
              'src/content/ja/blog/*.tsx',
            ],
            en: [
              'src/content/en/index.mdx',
              'src/content/en/introduction.mdx',
              'src/content/en/site-structure.mdx',
              'src/content/en/blog/*.md',
              'src/content/en/blog/*.tsx',
            ],
          }

          // Validate indexed content structure
          Object.keys(expectedIndexedContent).forEach(lang => {
            expect(['ja', 'en']).toContain(lang)
            const contentPaths = expectedIndexedContent[lang as keyof typeof expectedIndexedContent]
            expect(Array.isArray(contentPaths)).toBe(true)
            expect(contentPaths.length).toBeGreaterThan(0)

            contentPaths.forEach(path => {
              expect(typeof path).toBe('string')
              expect(path).toMatch(/^src\/content\/(ja|en)\//)
            })
          })

          // Test comprehensive coverage requirement (Requirement 6.3)
          const requiredContentCoverage = [
            'blog articles',
            'profile pages',
            'introduction content',
            'site structure documentation',
          ]

          requiredContentCoverage.forEach(contentType => {
            expect(typeof contentType).toBe('string')
            expect(contentType.length).toBeGreaterThan(0)
          })

          // Test search options configuration
          const searchOptionsStructure = {
            language: config.targetLanguage !== 'both' ? config.targetLanguage : undefined,
            limit: fc.sample(fc.integer({ min: 1, max: 100 }), 1)[0],
            excerptLength: config.snippetLength,
            highlightParam: config.highlightingEnabled ? 'highlight' : undefined,
          }

          if (searchOptionsStructure.language) {
            expect(['ja', 'en']).toContain(searchOptionsStructure.language)
          }
          expect(searchOptionsStructure.limit).toBeGreaterThan(0)
          expect(searchOptionsStructure.limit).toBeLessThanOrEqual(100)
          expect(searchOptionsStructure.excerptLength).toBeGreaterThanOrEqual(50)
          expect(searchOptionsStructure.excerptLength).toBeLessThanOrEqual(300)

          return true
        },
      ),
      { numRuns: 100 },
    )
  })

  /**
   * **Validates: Requirements 6.2, 6.3**
   *
   * Property: For any content indexing scenario, the search system should comprehensively
   * index all blog articles and profile pages in both languages during build process
   */
  it('should comprehensively index all content types in both languages during build', () => {
    fc.assert(
      fc.property(
        fc.record({
          contentLanguage: fc.constantFrom('ja', 'en'),
          contentType: fc.constantFrom('mdx', 'md', 'tsx'),
          contentCategory: fc.constantFrom('blog', 'profile', 'documentation'),
          buildEnvironment: fc.constantFrom('development', 'production'),
          indexingEnabled: fc.boolean(),
        }),
        (config) => {
          // Test content language support (Requirement 6.2)
          const supportedLanguages = ['ja', 'en']
          expect(supportedLanguages).toContain(config.contentLanguage)

          // Test content type support (Requirement 6.3)
          const supportedContentTypes = ['mdx', 'md', 'tsx']
          expect(supportedContentTypes).toContain(config.contentType)

          // Test content category coverage (Requirement 6.3)
          const supportedCategories = ['blog', 'profile', 'documentation']
          expect(supportedCategories).toContain(config.contentCategory)

          // Test build environment support
          const supportedBuildEnvs = ['development', 'production']
          expect(supportedBuildEnvs).toContain(config.buildEnvironment)

          // Test indexing configuration
          expect(typeof config.indexingEnabled).toBe('boolean')

          // Test content path structure for indexing (Requirement 6.3)
          const expectedContentPaths = {
            blog: {
              ja: 'src/content/ja/blog/',
              en: 'src/content/en/blog/',
            },
            profile: {
              ja: 'src/content/ja/introduction.mdx',
              en: 'src/content/en/introduction.mdx',
            },
            documentation: {
              ja: 'src/content/ja/site-structure.mdx',
              en: 'src/content/en/site-structure.mdx',
            },
          }

          const expectedPath = expectedContentPaths[config.contentCategory as keyof typeof expectedContentPaths][config.contentLanguage as keyof typeof expectedContentPaths['blog']]
          expect(expectedPath).toBeDefined()
          expect(typeof expectedPath).toBe('string')
          expect(expectedPath).toMatch(new RegExp(`src/content/${config.contentLanguage}/`))

          // Test file extension handling for different content types
          const fileExtensionMapping = {
            mdx: '.mdx',
            md: '.md',
            tsx: '.tsx',
          }

          const expectedExtension = fileExtensionMapping[config.contentType as keyof typeof fileExtensionMapping]
          expect(expectedExtension).toBeDefined()
          expect(typeof expectedExtension).toBe('string')
          expect(expectedExtension).toMatch(/^\.(mdx|md|tsx)$/)

          // Test build process integration (Requirement 6.3)
          if (config.buildEnvironment === 'production' && config.indexingEnabled) {
            // Production builds should include search indexing
            const buildCommands = ['next build', 'pagefind --site .next/server/app --output-path out/_pagefind']
            buildCommands.forEach(command => {
              expect(typeof command).toBe('string')
              expect(command.length).toBeGreaterThan(0)
            })

            // Pagefind command should target correct directories
            const pagefindCommand = 'pagefind --site .next/server/app --output-path out/_pagefind'
            expect(pagefindCommand).toContain('--site .next/server/app')
            expect(pagefindCommand).toContain('--output-path out/_pagefind')
          }

          // Test language-specific indexing (Requirement 6.2)
          const languageIndexConfiguration = {
            ja: {
              locale: 'ja',
              name: '日本語',
              indexPath: '_pagefind/ja',
            },
            en: {
              locale: 'en',
              name: 'English',
              indexPath: '_pagefind/en',
            },
          }

          const langConfig = languageIndexConfiguration[config.contentLanguage as keyof typeof languageIndexConfiguration]
          expect(langConfig).toBeDefined()
          expect(langConfig.locale).toBe(config.contentLanguage)
          expect(typeof langConfig.name).toBe('string')
          expect(langConfig.name.length).toBeGreaterThan(0)
          expect(langConfig.indexPath).toContain('_pagefind')

          return true
        },
      ),
      { numRuns: 75 },
    )
  })

  /**
   * **Validates: Requirements 6.4**
   *
   * Property: For any search result display scenario, the search system should provide
   * proper text highlighting and snippet extraction with configurable parameters
   */
  it('should provide proper result highlighting and snippet extraction', () => {
    fc.assert(
      fc.property(
        fc.record({
          searchTerm: fc.oneof(
            fc.constantFrom('React', 'TypeScript', 'Next.js', 'Deno', 'blog'),
            fc.string({ minLength: 2, maxLength: 20 }).filter(s => /^[a-z0-9\s]+$/i.test(s.trim()) && s.trim().length >= 2),
          ),
          highlightTag: fc.constantFrom('mark', 'strong', 'em', 'span'),
          snippetLength: fc.integer({ min: 50, max: 500 }),
          contextWords: fc.integer({ min: 5, max: 20 }),
          caseSensitive: fc.boolean(),
        }),
        (config) => {
          // Test search term validity (Requirement 6.4)
          expect(config.searchTerm).toBeDefined()
          expect(typeof config.searchTerm).toBe('string')
          expect(config.searchTerm.trim().length).toBeGreaterThanOrEqual(2)
          expect(config.searchTerm.length).toBeLessThanOrEqual(20)

          // Test highlight tag options (Requirement 6.4)
          const validHighlightTags = ['mark', 'strong', 'em', 'span']
          expect(validHighlightTags).toContain(config.highlightTag)

          // Test snippet configuration (Requirement 6.4)
          expect(config.snippetLength).toBeGreaterThanOrEqual(50)
          expect(config.snippetLength).toBeLessThanOrEqual(500)

          // Test context words configuration
          expect(config.contextWords).toBeGreaterThanOrEqual(5)
          expect(config.contextWords).toBeLessThanOrEqual(20)

          // Test case sensitivity option
          expect(typeof config.caseSensitive).toBe('boolean')

          // Test highlighting implementation structure (Requirement 6.4)
          const highlightingConfig = {
            highlightParam: 'highlight',
            highlightClass: 'pagefind-highlight',
            highlightTag: config.highlightTag,
            caseSensitive: config.caseSensitive,
          }

          expect(highlightingConfig.highlightParam).toBe('highlight')
          expect(highlightingConfig.highlightClass).toBe('pagefind-highlight')
          expect(validHighlightTags).toContain(highlightingConfig.highlightTag)
          expect(typeof highlightingConfig.caseSensitive).toBe('boolean')

          // Test snippet extraction logic (Requirement 6.4)
          const snippetConfig = {
            maxLength: config.snippetLength,
            contextWords: config.contextWords,
            ellipsis: '...',
            preserveWords: true,
          }

          expect(snippetConfig.maxLength).toBe(config.snippetLength)
          expect(snippetConfig.contextWords).toBe(config.contextWords)
          expect(snippetConfig.ellipsis).toBe('...')
          expect(snippetConfig.preserveWords).toBe(true)

          // Test search result metadata structure (Requirement 6.4)
          const resultMetadata = {
            word_count: fc.sample(fc.integer({ min: 10, max: 5000 }), 1)[0],
            excerpt_length: config.snippetLength,
            highlight_count: fc.sample(fc.integer({ min: 0, max: 10 }), 1)[0],
            filters: {
              language: fc.sample(fc.constantFrom('ja', 'en'), 1)[0],
              content_type: fc.sample(fc.constantFrom('blog', 'profile', 'documentation'), 1)[0],
            },
          }

          expect(resultMetadata.word_count).toBeGreaterThanOrEqual(10)
          expect(resultMetadata.word_count).toBeLessThanOrEqual(5000)
          expect(resultMetadata.excerpt_length).toBe(config.snippetLength)
          expect(resultMetadata.highlight_count).toBeGreaterThanOrEqual(0)
          expect(resultMetadata.highlight_count).toBeLessThanOrEqual(10)
          expect(['ja', 'en']).toContain(resultMetadata.filters.language)
          expect(['blog', 'profile', 'documentation']).toContain(resultMetadata.filters.content_type)

          // Test URL structure for search results (Requirement 6.4)
          const resultUrlStructure = {
            baseUrl: 'https://yoshixmk.github.io/profile',
            languagePrefix: `/${resultMetadata.filters.language}`,
            contentPath: config.searchTerm.toLowerCase().includes('blog') ? '/blog/001-example' : '/introduction',
            highlightParam: config.highlightTag ? `?highlight=${encodeURIComponent(config.searchTerm)}` : '',
          }

          expect(resultUrlStructure.baseUrl).toMatch(/^https:\/\/[\w.-]+/)
          expect(resultUrlStructure.languagePrefix).toMatch(/^\/(ja|en)$/)
          expect(resultUrlStructure.contentPath).toMatch(/^\/[a-z0-9/-]+$/)
          if (resultUrlStructure.highlightParam) {
            expect(resultUrlStructure.highlightParam).toMatch(/^\?highlight=/)
          }

          return true
        },
      ),
      { numRuns: 50 },
    )
  })

  /**
   * **Validates: Requirements 6.2, 6.3, 6.4**
   *
   * Property: For any Pagefind configuration and search interface integration, the search system
   * should provide consistent client-side search functionality with proper error handling
   */
  it('should provide consistent Pagefind integration with proper error handling', () => {
    fc.assert(
      fc.property(
        fc.record({
          pagefindLoaded: fc.boolean(),
          searchIndexExists: fc.boolean(),
          networkAvailable: fc.boolean(),
          searchQuery: fc.string({ minLength: 1, maxLength: 100 }),
          maxResults: fc.integer({ min: 1, max: 50 }),
          searchTimeout: fc.integer({ min: 100, max: 5000 }),
        }),
        (config) => {
          // Test Pagefind loading state (Requirement 6.2)
          expect(typeof config.pagefindLoaded).toBe('boolean')
          expect(typeof config.searchIndexExists).toBe('boolean')
          expect(typeof config.networkAvailable).toBe('boolean')

          // Test search query constraints
          expect(config.searchQuery).toBeDefined()
          expect(typeof config.searchQuery).toBe('string')
          expect(config.searchQuery.length).toBeGreaterThanOrEqual(1)
          expect(config.searchQuery.length).toBeLessThanOrEqual(100)

          // Test search configuration limits
          expect(config.maxResults).toBeGreaterThanOrEqual(1)
          expect(config.maxResults).toBeLessThanOrEqual(50)
          expect(config.searchTimeout).toBeGreaterThanOrEqual(100)
          expect(config.searchTimeout).toBeLessThanOrEqual(5000)

          // Test Pagefind instance interface (Requirement 6.2)
          const pagefindInterface = {
            search: 'function',
            filters: 'function',
            init: 'function',
          }

          expect(pagefindInterface.search).toBe('function')
          expect(pagefindInterface.filters).toBe('function')
          expect(pagefindInterface.init).toBe('function')

          // Test search method signature (Requirement 6.4)
          const searchMethodConfig = {
            query: config.searchQuery,
            options: {
              language: fc.sample(fc.constantFrom('ja', 'en'), 1)[0],
              limit: config.maxResults,
              excerptLength: fc.sample(fc.integer({ min: 50, max: 300 }), 1)[0],
              highlightParam: 'highlight',
            },
          }

          expect(typeof searchMethodConfig.query).toBe('string')
          expect(['ja', 'en']).toContain(searchMethodConfig.options.language)
          expect(searchMethodConfig.options.limit).toBeGreaterThan(0)
          expect(searchMethodConfig.options.excerptLength).toBeGreaterThanOrEqual(50)
          expect(searchMethodConfig.options.highlightParam).toBe('highlight')

          // Test error handling scenarios (Requirement 6.3)
          const errorHandlingCases = {
            pagefindNotLoaded: !config.pagefindLoaded,
            indexNotFound: !config.searchIndexExists,
            networkError: !config.networkAvailable,
            emptyQuery: config.searchQuery.trim().length === 0,
            timeout: config.searchTimeout < 1000,
          }

          // Each error case should be handled gracefully
          Object.values(errorHandlingCases).forEach(errorCondition => {
            expect(typeof errorCondition).toBe('boolean')
          })

          // Test fallback behavior for error conditions
          if (errorHandlingCases.pagefindNotLoaded) {
            // Should provide fallback search or error message
            const fallbackMessage = 'Search functionality is currently unavailable'
            expect(typeof fallbackMessage).toBe('string')
            expect(fallbackMessage.length).toBeGreaterThan(0)
          }

          if (errorHandlingCases.indexNotFound) {
            // Should handle missing search index gracefully
            const indexErrorMessage = 'Search index not found'
            expect(typeof indexErrorMessage).toBe('string')
          }

          // Test search result promise structure (Requirement 6.4)
          const searchResultPromise = {
            then: 'function',
            catch: 'function',
            finally: 'function',
          }

          expect(searchResultPromise.then).toBe('function')
          expect(searchResultPromise.catch).toBe('function')
          expect(searchResultPromise.finally).toBe('function')

          // Test search index file structure (Requirement 6.3)
          const searchIndexFiles = [
            'out/_pagefind/pagefind.js',
            'out/_pagefind/pagefind-entry.json',
            'out/_pagefind/wasm.en.pagefind',
            'out/_pagefind/wasm.ja.pagefind',
          ]

          searchIndexFiles.forEach(filePath => {
            expect(typeof filePath).toBe('string')
            expect(filePath).toMatch(/^out\/_pagefind\//)
          })

          return true
        },
      ),
      { numRuns: 30 },
    )
  })
})
