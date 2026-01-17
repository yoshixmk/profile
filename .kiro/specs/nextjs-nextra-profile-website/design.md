# Design Document

## Overview

This design document outlines the architecture and implementation approach for a Next.js 15 + Nextra 4 personal profile and blog website. The system leverages modern React patterns, TypeScript for type safety, and a comprehensive component-based architecture to deliver a bilingual, animated, and highly interactive user experience.

The design emphasizes performance, accessibility, and maintainability while providing rich visual effects through particle animations and smooth transitions. The content management system is built around MDX and TSX files, enabling both traditional blog posts and interactive presentation-style articles.

## Architecture

### High-Level Architecture

```mermaid
graph TB
    subgraph "Client Layer"
        A[Browser] --> B[Next.js App Router]
        B --> C[Nextra Theme Engine]
    end
    
    subgraph "Application Layer"
        C --> D[Language Middleware]
        D --> E[Page Components]
        E --> F[UI Component Library]
        F --> G[Animation System]
    end
    
    subgraph "Content Layer"
        H[MDX Content] --> I[Content Management System]
        J[TSX Interactive Articles] --> I
        I --> E
    end
    
    subgraph "Build Layer"
        K[Static Site Generation] --> L[GitHub Pages]
        M[Pagefind Indexing] --> K
        I --> K
    end
```

### Technology Stack Integration

The architecture integrates multiple modern technologies:

- **Next.js 15 App Router**: Provides the foundational routing and server-side rendering capabilities
- **Nextra 4**: Handles MDX processing and documentation-style layouts
- **Tailwind CSS 4**: Delivers utility-first styling with CSS variables for theming
- **Framer Motion**: Powers smooth animations and transitions
- **tsparticles**: Creates interactive particle background effects
- **next-themes**: Manages dark/light mode switching with system preference detection

### Deployment Architecture

The system uses a static export approach optimized for GitHub Pages:

1. **Build Process**: Next.js generates static HTML/CSS/JS files
2. **Asset Optimization**: Images and resources are optimized for production
3. **Search Indexing**: Pagefind creates search indices during build
4. **Path Configuration**: Base paths and asset prefixes are applied for GitHub Pages hosting

## Components and Interfaces

### Core Component Hierarchy

```mermaid
graph TD
    A[RootLayout] --> B[LangLayout]
    B --> C[Nextra Layout]
    C --> D[CustomNavbar]
    C --> E[Page Content]
    C --> F[CustomFooter]
    
    E --> G[HomepageHero]
    E --> H[Blog Articles]
    E --> I[Profile Pages]
    
    G --> J[PanelParticles]
    G --> K[SetupHero]
    G --> L[Feature Sections]
    
    D --> M[LocaleToggle]
    D --> N[ThemeToggle]
    D --> O[Search Component]
```

### Component Specifications

#### Layout Components

**RootLayout Component**
- Purpose: Provides the base HTML structure and metadata
- Props: `{ children: ReactNode }`
- Responsibilities: Sets up document metadata and renders child components

**LangLayout Component**
- Purpose: Handles language-specific layouts and Nextra integration
- Props: `{ children: ReactNode, params: Promise<{ lang: I18nLangKeys }> }`
- Responsibilities: 
  - Configures Nextra theme with custom navbar and footer
  - Sets up ThemeProvider for dark/light mode
  - Manages language-specific page maps and metadata

#### Interactive Components

**HomepageHero Component**
- Purpose: Renders the main landing page with animations and feature showcase
- State: Uses theme context and locale context
- Subcomponents: PanelParticles, SetupHero, Feature sections with HoverEffect
- Animation: Integrates with Framer Motion for smooth transitions

**PanelParticles Component**
- Purpose: Renders interactive particle background effects
- Configuration: Dynamic particle settings based on theme (light/dark)
- Performance: Disabled on mobile devices via CSS classes
- Integration: Uses tsparticles engine with custom configuration

#### Widget Components

**ThemeToggle Component**
- Purpose: Provides quick dark/light mode switching
- State: Integrates with nextra-theme-docs useTheme hook
- UI: Toggle button with sun/moon icons
- Persistence: Automatically saves preference to localStorage

**LocaleToggle Component**
- Purpose: Enables language switching between Japanese and English
- State: Uses custom useLocale hook and Next.js navigation
- Behavior: Preserves scroll position during language changes
- Persistence: Sets NEXT_LOCALE cookie with one-year expiration

### Interface Definitions

#### Internationalization Interfaces

```typescript
interface I18nLangKeys {
  'ja' | 'en'
}

interface I18nLangAsyncProps {
  lang: I18nLangKeys
}

interface LocaleContext {
  currentLocale: I18nLangKeys
  t: <K extends LocaleKeys>(key: K, withData?: Record<string, any>) => LocalizedValue<AllLocales, K>
}
```

#### Content Management Interfaces

```typescript
interface BlogArticle {
  title: string
  content: string
  frontMatter: {
    title: string
    author?: string
    published?: string
  }
}

interface MetaRecord {
  [key: string]: {
    type: 'page' | 'separator'
    title?: string | ReactNode
    display?: 'hidden' | 'children'
    theme?: {
      timestamp?: boolean
      layout?: 'default' | 'full'
      toc?: boolean
      navbar?: boolean
    }
  }
}
```

#### Animation System Interfaces

```typescript
interface ParticleOptions {
  fpsLimit: number
  interactivity: {
    events: {
      onHover: {
        enable: boolean
        mode: string
      }
    }
  }
  particles: {
    color: { value: string }
    links: {
      color: { value: string }
      distance: number
      enable: boolean
      opacity: number
      width: number
    }
    move: {
      direction: string
      enable: boolean
      speed: number
    }
    number: {
      density: { enable: boolean }
      value: number
    }
    opacity: { value: number }
    size: { value: { min: number, max: number } }
  }
}
```

## Data Models

### Content Structure Model

The content management system organizes files in a hierarchical structure:

```
src/content/
├── ja/                          # Japanese content
│   ├── _meta.tsx               # Navigation configuration
│   ├── index.mdx               # Homepage content
│   ├── introduction.mdx        # Profile/career page
│   ├── upgrade.mdx             # New features page
│   └── blog/                   # Blog articles
│       ├── _meta.tsx           # Blog navigation
│       ├── index.mdx           # Blog index
│       ├── *.md                # Standard blog posts
│       └── *.tsx               # Interactive presentations
└── en/                         # English content (mirrors ja structure)
```

### Configuration Data Models

#### Next.js Configuration Model

```typescript
interface NextConfig {
  images: { unoptimized: boolean }
  eslint: { ignoreDuringBuilds: boolean }
  reactStrictMode: boolean
  i18n: {
    locales: string[]
    defaultLocale: string
  }
  output?: 'export'
  assetPrefix?: string
  basePath?: string
}
```

#### Nextra Configuration Model

```typescript
interface NextraConfig {
  defaultShowCopyCode: boolean
  unstable_shouldAddLocaleToLinks: boolean
}
```

### Theme Data Model

The theme system uses a structured approach to manage color schemes and visual preferences:

```typescript
interface ThemeConfig {
  attribute: 'class'
  defaultTheme: 'system' | 'light' | 'dark'
  enableSystem: boolean
  storageKey: string
  disableTransitionOnChange: boolean
}

interface ThemeColors {
  light: {
    particles: string
    particleLinks: string
    particleOpacity: number
  }
  dark: {
    particles: string
    particleLinks: string
    particleOpacity: number
  }
}
```

### Internationalization Data Model

Language-specific content is structured as nested objects supporting interpolation:

```typescript
interface LocaleData {
  systemTitle: string
  banner: {
    title: string
    more: string
  }
  firstName: string
  lastName: string
  badgeTitle: string
  company: string
  companyName: string
  featureList: Array<{
    title: string
    description: string
  }>
  faqs: Array<{
    question: string
    answer: string
  }>
}
```

## Error Handling

### Client-Side Error Boundaries

The application implements comprehensive error handling at multiple levels:

#### Component-Level Error Handling

**Particle System Error Handling**
- Graceful degradation when WebGL is not supported
- Fallback to CSS animations if tsparticles fails to initialize
- Performance monitoring to disable particles on low-end devices

**Content Loading Error Handling**
- MDX parsing error boundaries with user-friendly error messages
- Fallback content when language-specific pages are missing
- Automatic retry mechanisms for failed content loads

#### Navigation Error Handling

**Language Switching Errors**
- Fallback to default language if target language content is unavailable
- Preservation of user context during error recovery
- Cookie handling errors with localStorage fallback

**Routing Error Handling**
- 404 page handling with language-appropriate content
- Middleware error recovery with default routing
- Search functionality error handling with graceful degradation

### Build-Time Error Handling

**Content Validation**
- MDX syntax validation during build process
- Missing translation detection and warnings
- Asset optimization error handling with fallbacks

**Deployment Error Handling**
- GitHub Pages deployment validation
- Asset path verification for production builds
- Search index generation error recovery

## Testing Strategy

### Dual Testing Approach

The testing strategy combines unit tests for specific functionality with property-based tests for comprehensive coverage across different inputs and configurations.

#### Unit Testing Focus Areas

**Component Integration Tests**
- Theme switching functionality with localStorage persistence
- Language switching with cookie management and scroll preservation
- Particle animation initialization and theme adaptation
- Content rendering for both MDX and TSX formats

**Navigation and Routing Tests**
- Middleware language detection and redirection
- URL generation for different locales
- Page metadata generation for SEO

**Error Condition Tests**
- Missing content file handling
- Invalid language parameter handling
- Theme system fallback behavior
- Search system error recovery

#### Property-Based Testing Configuration

Property tests will use **fast-check** for TypeScript/JavaScript property-based testing with minimum 100 iterations per test. Each property test will be tagged with the format:

**Feature: nextjs-nextra-profile-website, Property {number}: {property_text}**

**Property Test Areas**
- Content management system behavior across all valid content structures
- Theme system consistency across all supported themes and devices
- Internationalization system behavior across all supported locales
- Animation system performance across different device capabilities

**Testing Infrastructure**
- Jest for unit testing framework
- React Testing Library for component testing
- fast-check for property-based testing
- Playwright for end-to-end testing of deployment builds

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

Based on the prework analysis and property reflection, the following correctness properties ensure the system behaves correctly across all valid inputs and configurations:

### Property 1: Locale System Consistency
*For any* user browser configuration and website state, when the locale system processes language preferences, it should correctly detect, redirect, and persist the appropriate language while preserving user context
**Validates: Requirements 1.1, 1.2, 1.4, 1.5, 5.4**

### Property 2: Theme System Completeness  
*For any* theme mode (light, dark, system) and UI component, when theme changes occur, all visual elements should consistently reflect the new theme including particles, colors, and component styling
**Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5**

### Property 3: Content Management System Integrity
*For any* valid content file (MDX or TSX) and language directory, the content management system should correctly render the content with proper navigation structure and embedded component functionality
**Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.5**

### Property 4: Animation System Adaptation
*For any* device type and theme configuration, the animation system should provide appropriate visual effects with hover animations enabled on desktop and particles disabled on mobile devices
**Validates: Requirements 2.2, 2.3, 2.5**

### Property 5: Navigation System Consistency
*For any* page navigation and language context, the navigation system should maintain consistent header structure, proper routing, and appropriate navigation elements (breadcrumbs, TOC) based on page type
**Validates: Requirements 5.1, 5.2, 5.3, 5.5**

### Property 6: Search System Completeness
*For any* search query and content language, the search system should return relevant results from both Japanese and English content with proper highlighting and comprehensive coverage
**Validates: Requirements 6.2, 6.3, 6.4**

### Property 7: Responsive Design Adaptation
*For any* screen size and device orientation, the component library should provide appropriate layouts, typography scaling, and mobile-optimized interactions
**Validates: Requirements 7.1, 7.2, 7.4, 7.5**

### Property 8: Component Library Consistency
*For any* UI component usage, the component library should follow shadcn/ui design patterns and provide consistent visual and interaction behaviors
**Validates: Requirements 7.3**

### Property 9: Accessibility Compliance
*For any* page content and interactive element, the website should provide proper semantic HTML structure, keyboard navigation support, and appropriate ARIA labels and alt text
**Validates: Requirements 10.2, 10.4, 10.5**

### Example-Based Properties

The following properties are best validated through specific examples rather than universal quantification:

### Example 1: Homepage Particle Initialization
When a user loads the homepage, the animation system should initialize tsparticles with proper configuration and display animated background effects
**Validates: Requirements 2.1**

### Example 2: Tech Stack Marquee Display
When displaying the tech stack section, the website should render a scrolling marquee component with technology icons and proper animation
**Validates: Requirements 2.4**

### Example 3: Search Interface Availability
When accessing any page, the search system should provide a functional search interface powered by Pagefind
**Validates: Requirements 6.1**