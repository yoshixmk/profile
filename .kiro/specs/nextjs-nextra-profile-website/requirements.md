# Requirements Document

## Introduction

This document specifies the requirements for a comprehensive Next.js 15 + Nextra 4 personal profile and blog website. The system is a migration from Deno/Pagic to a modern Next.js stack, featuring bilingual support, rich UI/UX with animations, dark/light mode theming, and MDX-based content management.

The website serves as both a personal portfolio and technical blog, showcasing professional experience while providing valuable content to the developer community in both Japanese and English languages.

## Glossary

- **Website**: The complete Next.js 15 + Nextra 4 personal profile and blog website
- **Content_Management_System**: The MDX-based system for managing blog posts and profile pages
- **Theme_System**: The dark/light mode theming functionality using next-themes
- **Locale_System**: The bilingual (Japanese/English) internationalization system
- **Animation_System**: The particle background effects and Framer Motion animations
- **Search_System**: The static search functionality powered by Pagefind
- **Navigation_System**: The routing and navigation handling with Next.js middleware
- **Component_Library**: The UI components built with shadcn/ui and Tailwind CSS
- **Blog_Article**: Individual blog post content in MDX format
- **Interactive_Article**: Presentation-style articles with TSX support
- **User**: Website visitor who can browse content and interact with the interface

## Requirements

### Requirement 1: Multi-Language Support System

**User Story:** As a user, I want to access the website in both Japanese and English, so that I can read content in my preferred language.

#### Acceptance Criteria

1. WHEN a user visits the website, THE Locale_System SHALL detect their preferred language and redirect accordingly
2. WHEN a user switches languages, THE Navigation_System SHALL preserve their current page context and scroll position
3. THE Website SHALL support Japanese (ja) and English (en) locales with complete content translation
4. WHEN displaying content, THE Content_Management_System SHALL serve language-specific versions from the appropriate content directory

### Requirement 2: Rich User Interface and Animation System

**User Story:** As a user, I want an engaging visual experience with smooth animations and particle effects, so that the website feels modern and interactive.

#### Acceptance Criteria

1. WHEN a user loads the homepage, THE Animation_System SHALL display animated particle background effects using tsparticles
2. WHEN a user hovers over interactive elements, THE Animation_System SHALL provide smooth hover animations using Framer Motion
3. THE Animation_System SHALL adapt particle colors and opacity based on the current theme (light/dark)
4. WHEN displaying the tech stack, THE Website SHALL show a scrolling marquee with technology icons
5. THE Animation_System SHALL disable particle effects on mobile devices for performance optimization

### Requirement 3: Theme Management System

**User Story:** As a user, I want to toggle between dark and light modes, so that I can use the website comfortably in different lighting conditions.

#### Acceptance Criteria

1. WHEN a user clicks the theme toggle, THE Theme_System SHALL immediately switch between light and dark modes
2. THE Theme_System SHALL persist theme preference in localStorage with the key "starter-theme-provider"
3. WHEN the system theme changes, THE Theme_System SHALL automatically update if set to "system" mode
4. THE Theme_System SHALL apply theme changes to all UI components, particles, and content areas
5. THE Website SHALL support three theme modes: light, dark, and system (follows OS preference)

### Requirement 4: Content Management and Blog System

**User Story:** As a content creator, I want to manage blog posts and profile content using MDX, so that I can write rich content with embedded components.

#### Acceptance Criteria

1. WHEN creating blog content and user portfolio, THE Content_Management_System SHALL support both standard MDX (.mdx) and interactive TSX (.tsx) formats
2. THE Content_Management_System SHALL organize content in language-specific directories (src/content/ja/ and src/content/en/)
3. WHEN rendering blog posts, THE Website SHALL support embedded React components within MDX content
4. THE Content_Management_System SHALL use Nextra's meta configuration for navigation and page organization
5. WHEN displaying interactive articles, THE Website SHALL render TSX components with full React functionality

### Requirement 5: Navigation and Routing System

**User Story:** As a user, I want intuitive navigation between pages and sections, so that I can easily explore the website content.

#### Acceptance Criteria

1. THE Navigation_System SHALL use Next.js App Router with dynamic language routing ([lang])
2. WHEN a user navigates, THE Navigation_System SHALL maintain consistent header navigation across all pages
3. THE Website SHALL display breadcrumb navigation and table of contents for blog articles
4. WHEN accessing URLs, THE Navigation_System SHALL handle language detection and redirection via middleware
5. THE Navigation_System SHALL support both profile pages (introduction, upgrade) and blog article browsing

### Requirement 7: Search Functionality

**User Story:** As a user, I want to search through blog content, so that I can quickly find relevant articles and information.

#### Acceptance Criteria

1. THE Search_System SHALL provide static search functionality using Pagefind
2. WHEN a user performs a search, THE Search_System SHALL return results from both Japanese and English content
3. THE Search_System SHALL index all blog articles and profile pages for comprehensive search coverage
4. WHEN displaying search results, THE Search_System SHALL highlight matching text snippets
5. THE Search_System SHALL generate search indices during the build process for optimal performance

### Requirement 8: Responsive Design and Component System

**User Story:** As a user, I want the website to work seamlessly across different devices and screen sizes, so that I can access content anywhere with an optimal experience.

#### Acceptance Criteria

1. THE Component_Library SHALL provide responsive layouts using Tailwind CSS 4 breakpoints (sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px)
2. WHEN viewed on mobile devices, THE Website SHALL hide particle animations and optimize touch interactions for better performance
3. THE Component_Library SHALL use shadcn/ui components for consistent design patterns and accessibility compliance
4. WHEN displaying content, THE Website SHALL adapt typography and spacing for optimal readability on all devices with proper contrast ratios
5. THE Website SHALL support both portrait and landscape orientations on mobile devices with appropriate layout adjustments

### Requirement 8: Deployment and Build System

**User Story:** As a website owner, I want automated deployment to GitHub Pages with optimized builds, so that content updates are published automatically with optimal performance.

#### Acceptance Criteria

1. THE Website SHALL generate static exports optimized for GitHub Pages deployment using Next.js static export functionality
2. WHEN building for production, THE Website SHALL apply appropriate base path (/profile/) and asset prefix configuration for GitHub Pages hosting
3. THE Website SHALL generate Pagefind search indices as part of the build process using `pnpm run pagefind` command
4. THE Website SHALL optimize images and assets for production deployment with proper compression and caching headers
5. WHEN deployed, THE Website SHALL be accessible at https://yoshixmk.github.io/profile/ with proper routing and all assets loading correctly

### Requirement 9: Development Environment and Code Quality

**User Story:** As a developer, I want a well-configured development environment with type safety and code quality tools, so that I can maintain and extend the website efficiently.

#### Acceptance Criteria

1. THE Website SHALL use TypeScript with strict mode enabled for complete type safety across all components and utilities
2. THE Website SHALL enforce code quality using ESLint with @antfu/eslint-config configuration and consistent formatting
3. WHEN developing, THE Website SHALL provide hot reload functionality with Next.js development server and fast refresh
4. THE Website SHALL use pnpm as the package manager for all dependency management and script execution
5. THE Website SHALL support modern CSS with Tailwind CSS 4 and PostCSS for styling with proper IntelliSense support

### Requirement 10: Performance and Accessibility

**User Story:** As a user, I want fast loading times and accessible content, so that I can efficiently browse the website regardless of my abilities or connection speed.

#### Acceptance Criteria

1. THE Website SHALL achieve optimal Core Web Vitals scores for performance with LCP < 2.5s, FID < 100ms, and CLS < 0.1
2. THE Website SHALL provide proper semantic HTML structure for screen readers with appropriate heading hierarchy and landmarks
3. WHEN loading pages, THE Website SHALL implement efficient code splitting and lazy loading to minimize initial bundle size
4. THE Website SHALL support keyboard navigation for all interactive elements with visible focus indicators

### Requirement 11: Asset Path Management System

**User Story:** As a developer, I want consistent asset path management that works across development and production environments, so that images and static assets load correctly in all deployment scenarios.

#### Acceptance Criteria

1. THE Website SHALL use relative paths (./img/) for all static asset references in components and content files to ensure compatibility with GitHub Pages deployment
2. WHEN building for production, THE Website SHALL automatically handle base path prefixing through Next.js configuration without requiring manual path updates
3. THE Website SHALL maintain consistent asset loading behavior between development (localhost) and production (GitHub Pages) environments
4. WHEN referencing images in MDX/MD content files, THE Content_Management_System SHALL support relative path resolution for proper asset loading
5. THE Website SHALL optimize static assets (images, icons, fonts) with appropriate compression and caching strategies while maintaining relative path compatibility
