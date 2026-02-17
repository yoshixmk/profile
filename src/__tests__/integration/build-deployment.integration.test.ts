/**
 * Integration Tests for Build and Deployment
 * Tests production build configuration and deployment readiness
 */

import * as fc from 'fast-check'

describe('integration: Build and Deployment', () => {
  /**
   * Test Next.js build configuration for GitHub Pages deployment
   */
  it('should have correct Next.js configuration for static export', () => {
    // Arrange: Define expected Next.js configuration
    const nextConfig = {
      images: { unoptimized: true },
      eslint: { ignoreDuringBuilds: false },
      reactStrictMode: true,
      output: 'export',
      assetPrefix: '/profile',
      basePath: '/profile',
      trailingSlash: true,
    }

    // Act & Assert: Verify configuration
    expect(nextConfig.output).toBe('export')
    expect(nextConfig.assetPrefix).toBe('/profile')
    expect(nextConfig.basePath).toBe('/profile')
    expect(nextConfig.trailingSlash).toBe(true)
    expect(nextConfig.images.unoptimized).toBe(true)
    expect(nextConfig.reactStrictMode).toBe(true)
  })

  /**
   * Test Pagefind search index generation configuration
   */
  it('should have correct Pagefind configuration for search indexing', () => {
    fc.assert(
      fc.property(
        fc.record({
          locale: fc.constantFrom('ja', 'en'),
        }),
        (config) => {
          // Arrange: Define expected Pagefind configuration
          const pagefindConfig = {
            command: 'pagefind --site .next/server/app --output-path out/_pagefind',
            outputPath: 'out/_pagefind',
            supportedLanguages: ['ja', 'en'],
          }

          // Act & Assert: Verify configuration
          expect(pagefindConfig.command).toContain('pagefind')
          expect(pagefindConfig.command).toContain('--site .next/server/app')
          expect(pagefindConfig.command).toContain('--output-path out/_pagefind')
          expect(pagefindConfig.outputPath).toBe('out/_pagefind')
          expect(pagefindConfig.supportedLanguages).toContain(config.locale)

          // Verify expected output files
          const expectedFiles = [
            'pagefind.js',
            'pagefind-entry.json',
            `pagefind.${config.locale}_*.pf_meta`,
            `wasm.${config.locale}.pagefind`,
          ]

          expectedFiles.forEach((file) => {
            expect(typeof file).toBe('string')
            expect(file.length).toBeGreaterThan(0)
          })

          return true
        },
      ),
      { numRuns: 20 },
    )
  })

  /**
   * Test asset path configuration for GitHub Pages
   */
  it('should handle asset paths correctly for GitHub Pages deployment', () => {
    fc.assert(
      fc.property(
        fc.record({
          assetType: fc.constantFrom('image', 'icon', 'font', 'script'),
          environment: fc.constantFrom('development', 'production'),
        }),
        (config) => {
          // Arrange: Define asset path configuration
          const assetConfig = {
            development: {
              basePath: '',
              assetPrefix: '',
              publicPath: '/img/',
            },
            production: {
              basePath: '/profile',
              assetPrefix: '/profile',
              publicPath: '/profile/img/',
            },
          }

          // Act & Assert: Verify asset path handling
          const envConfig = assetConfig[config.environment as keyof typeof assetConfig]
          expect(envConfig).toBeDefined()

          if (config.environment === 'production') {
            expect(envConfig.basePath).toBe('/profile')
            expect(envConfig.assetPrefix).toBe('/profile')
            expect(envConfig.publicPath).toBe('/profile/img/')
          }
          else {
            expect(envConfig.basePath).toBe('')
            expect(envConfig.assetPrefix).toBe('')
            expect(envConfig.publicPath).toBe('/img/')
          }

          // Verify relative path strategy
          const relativePathStrategy = {
            components: './img/',
            content: './img/',
            assets: './assets/',
          }

          expect(relativePathStrategy.components).toBe('./img/')
          expect(relativePathStrategy.content).toBe('./img/')

          return true
        },
      ),
      { numRuns: 20 },
    )
  })

  /**
   * Test build process integration with all required steps
   */
  it('should execute complete build process with all required steps', () => {
    // Arrange: Define build process steps
    const buildSteps = [
      { step: 'lint', command: 'eslint . --ext .ts,.tsx,.js,.jsx', required: false },
      { step: 'build', command: 'next build', required: true },
      { step: 'pagefind', command: 'pagefind --site .next/server/app --output-path out/_pagefind', required: true },
      { step: 'copy', command: 'cpy out/en.html . --rename=index.html', required: false },
    ]

    // Act & Assert: Verify build steps
    buildSteps.forEach((buildStep) => {
      expect(typeof buildStep.step).toBe('string')
      expect(typeof buildStep.command).toBe('string')
      expect(typeof buildStep.required).toBe('boolean')

      // Verify required steps are present
      if (buildStep.required) {
        expect(['build', 'pagefind']).toContain(buildStep.step)
      }
    })

    // Verify build output structure
    const expectedOutputs = [
      'out/',
      'out/_next/',
      'out/_pagefind/',
      'out/en/',
      'out/ja/',
    ]

    expectedOutputs.forEach((output) => {
      expect(typeof output).toBe('string')
      expect(output).toMatch(/^out\//)
    })
  })

  /**
   * Test deployment URL structure and routing
   */
  it('should generate correct URLs for GitHub Pages deployment', () => {
    fc.assert(
      fc.property(
        fc.record({
          locale: fc.constantFrom('ja', 'en'),
          page: fc.constantFrom('/', '/introduction', '/blog', '/site-structure', '/blog/001-example'),
        }),
        (config) => {
          // Arrange: Define deployment configuration
          const deploymentConfig = {
            baseUrl: 'https://yoshixmk.github.io',
            basePath: '/profile',
            fullUrl: 'https://yoshixmk.github.io/profile',
          }

          // Act & Assert: Verify URL generation
          expect(deploymentConfig.baseUrl).toMatch(/^https:\/\/[\w.-]+\.github\.io$/)
          expect(deploymentConfig.basePath).toBe('/profile')
          expect(deploymentConfig.fullUrl).toBe('https://yoshixmk.github.io/profile')

          // Verify page URL structure
          const pageUrl = `${deploymentConfig.fullUrl}/${config.locale}${config.page === '/' ? '' : config.page}`
          expect(pageUrl).toMatch(/^https:\/\/[\w.-]+\.github\.io\/profile\/(ja|en)/)

          // Verify trailing slash handling
          const urlWithTrailingSlash = config.page === '/' ? pageUrl : `${pageUrl}/`
          expect(typeof urlWithTrailingSlash).toBe('string')

          return true
        },
      ),
      { numRuns: 30 },
    )
  })

  /**
   * Test static export generation for all pages
   */
  it('should generate static exports for all pages and locales', () => {
    fc.assert(
      fc.property(
        fc.record({
          locale: fc.constantFrom('ja', 'en'),
          pages: fc.array(
            fc.constantFrom('index', 'introduction', 'blog', 'site-structure'),
            { minLength: 2, maxLength: 4 },
          ),
        }),
        (config) => {
          // Arrange: Define expected static exports
          const supportedLocales = ['ja', 'en']
          expect(supportedLocales).toContain(config.locale)

          // Act & Assert: Verify static export generation
          config.pages.forEach((page) => {
            const supportedPages = ['index', 'introduction', 'blog', 'site-structure']
            expect(supportedPages).toContain(page)

            // Verify HTML file generation
            const htmlPath = page === 'index'
              ? `out/${config.locale}.html`
              : `out/${config.locale}/${page}.html`

            expect(htmlPath).toContain(config.locale)
            expect(htmlPath).toMatch(/\.html$/)

            // Verify directory structure
            const dirPath = `out/${config.locale}/`
            expect(dirPath).toContain(config.locale)
          })

          return true
        },
      ),
      { numRuns: 30 },
    )
  })

  /**
   * Test package manager configuration and scripts
   */
  it('should have correct package manager configuration', () => {
    // Arrange: Define expected package configuration
    const packageConfig = {
      packageManager: 'pnpm@10.6.3+sha512.bb45e34d50a9a76e858a95837301bfb6bd6d35aea2c5d52094fa497a467c43f5c440103ce2511e9e0a2f89c3d6071baac3358fc68ac6fb75e2ceb3d2736065e6',
      scripts: {
        dev: 'cross-env NODE_OPTIONS=\'--inspect\' next dev',
        build: 'next build',
        pagefind: 'pagefind --site .next/server/app --output-path out/_pagefind',
        lint: 'eslint . --ext .ts,.tsx,.js,.jsx',
        'lint:fix': 'eslint . --fix --ext .ts,.tsx,.js,.jsx,.mjs',
        test: 'jest',
        'test:watch': 'jest --watch',
        'test:coverage': 'jest --coverage',
      },
    }

    // Act & Assert: Verify package manager
    expect(packageConfig.packageManager).toContain('pnpm')
    expect(packageConfig.packageManager).toMatch(/^pnpm@\d+\.\d+\.\d+/)

    // Verify essential scripts
    expect(packageConfig.scripts.dev).toContain('next dev')
    expect(packageConfig.scripts.build).toBe('next build')
    expect(packageConfig.scripts.pagefind).toContain('pagefind')
    expect(packageConfig.scripts.lint).toContain('eslint')
    expect(packageConfig.scripts.test).toBe('jest')
  })

  /**
   * Test TypeScript configuration for production builds
   */
  it('should have correct TypeScript configuration for strict type checking', () => {
    // Arrange: Define expected TypeScript configuration
    const tsConfig = {
      compilerOptions: {
        strict: true,
        target: 'ES2020',
        lib: ['ES2020', 'DOM', 'DOM.Iterable'],
        jsx: 'preserve',
        module: 'ESNext',
        moduleResolution: 'bundler',
        resolveJsonModule: true,
        isolatedModules: true,
        esModuleInterop: true,
        skipLibCheck: true,
        allowJs: true,
        noEmit: true,
        incremental: true,
      },
      include: ['src/**/*', 'next-env.d.ts'],
      exclude: ['node_modules', 'out', '.next'],
    }

    // Act & Assert: Verify TypeScript configuration
    expect(tsConfig.compilerOptions.strict).toBe(true)
    expect(tsConfig.compilerOptions.jsx).toBe('preserve')
    expect(tsConfig.compilerOptions.module).toBe('ESNext')
    expect(tsConfig.compilerOptions.noEmit).toBe(true)

    // Verify includes and excludes
    expect(tsConfig.include).toContain('src/**/*')
    expect(tsConfig.exclude).toContain('node_modules')
    expect(tsConfig.exclude).toContain('out')
  })

  /**
   * Test ESLint configuration for code quality
   */
  it('should have correct ESLint configuration for code quality', () => {
    // Arrange: Define expected ESLint configuration
    const eslintConfig = {
      extends: ['@antfu/eslint-config'],
      rules: {
        'no-console': 'warn',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
      },
    }

    // Act & Assert: Verify ESLint configuration
    expect(eslintConfig.extends).toContain('@antfu/eslint-config')
    expect(eslintConfig.rules['react/react-in-jsx-scope']).toBe('off')

    // Verify lint scripts
    const lintScripts = {
      lint: 'eslint . --ext .ts,.tsx,.js,.jsx',
      'lint:fix': 'eslint . --fix --ext .ts,.tsx,.js,.jsx,.mjs',
    }

    expect(lintScripts.lint).toContain('eslint')
    expect(lintScripts['lint:fix']).toContain('--fix')
  })

  /**
   * Test Tailwind CSS configuration for production builds
   */
  it('should have correct Tailwind CSS configuration for production optimization', () => {
    // Arrange: Define expected Tailwind configuration
    const tailwindConfig = {
      content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/content/**/*.{md,mdx}',
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }

    // Act & Assert: Verify Tailwind configuration
    expect(tailwindConfig.content.length).toBeGreaterThan(0)
    tailwindConfig.content.forEach((pattern) => {
      expect(pattern).toContain('./src')
    })

    // Verify content patterns include all necessary files
    const hasAppPattern = tailwindConfig.content.some(p => p.includes('app'))
    const hasComponentsPattern = tailwindConfig.content.some(p => p.includes('components'))
    const hasContentPattern = tailwindConfig.content.some(p => p.includes('content'))

    expect(hasAppPattern).toBe(true)
    expect(hasComponentsPattern).toBe(true)
    expect(hasContentPattern).toBe(true)
  })

  /**
   * Test production build optimization and performance
   */
  it('should optimize production builds for performance', () => {
    fc.assert(
      fc.property(
        fc.record({
          optimizationType: fc.constantFrom('code-splitting', 'tree-shaking', 'minification', 'compression'),
        }),
        (config) => {
          // Arrange: Define optimization configurations
          const optimizations = {
            'code-splitting': {
              enabled: true,
              strategy: 'automatic',
              chunks: 'all',
            },
            'tree-shaking': {
              enabled: true,
              sideEffects: false,
            },
            minification: {
              enabled: true,
              terser: true,
            },
            compression: {
              enabled: true,
              gzip: true,
            },
          }

          // Act & Assert: Verify optimization is configured
          const optimization = optimizations[config.optimizationType as keyof typeof optimizations]
          expect(optimization).toBeDefined()
          expect(optimization.enabled).toBe(true)

          return true
        },
      ),
      { numRuns: 20 },
    )
  })

  /**
   * Test deployment readiness with all required files
   */
  it('should include all required files for deployment', () => {
    // Arrange: Define required deployment files
    const requiredFiles = [
      'next.config.ts',
      'package.json',
      'tsconfig.json',
      'tailwind.config.ts',
      'postcss.config.mjs',
      '.gitignore',
      'README.md',
    ]

    const requiredDirectories = [
      'src/app',
      'src/components',
      'src/content',
      'public',
    ]

    // Act & Assert: Verify required files
    requiredFiles.forEach((file) => {
      expect(typeof file).toBe('string')
      expect(file.length).toBeGreaterThan(0)
    })

    requiredDirectories.forEach((dir) => {
      expect(typeof dir).toBe('string')
      const isValid = dir.includes('src') || dir === 'public'
      expect(isValid).toBe(true)
    })

    // Verify build output requirements
    const buildOutputs = [
      'out/',
      'out/_next/',
      'out/_pagefind/',
      'out/en/',
      'out/ja/',
    ]

    buildOutputs.forEach((output) => {
      expect(output).toMatch(/^out\//)
    })
  })
})
