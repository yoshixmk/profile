# Implementation Plan: Next.js 15 + Nextra 4 Personal Profile and Blog Website

## Overview

This implementation plan covers the comprehensive development and enhancement of a Next.js 15 + Nextra 4 personal profile and blog website. The approach focuses on migrating from Deno/Pagic to a modern stack while maintaining existing content and adding new features. The implementation emphasizes type safety, performance, accessibility, and maintainability.

## Tasks

- [x] 1. Set up core project infrastructure and configuration

  - Configure Next.js 15 with App Router and TypeScript
  - Set up Nextra 4 integration with MDX support
  - Configure Tailwind CSS 4 with PostCSS and SASS support
  - Set up ESLint with @antfu/eslint-config
  - Configure GitHub Pages deployment with static export
  - _Requirements: 8.1, 8.4, 8.5, 9.1, 9.2_

- [x] 1.1 Write property test for project configuration

  - **Property 1: Configuration Consistency**
  - **Validates: Requirements 8.1, 8.4, 8.5**

- [ｘ]2. Implement internationalization (i18n) system

  - [ｘ] 2.1 Create language detection middleware

    - Implement Next.js middleware for language routing
    - Add browser language detection and redirection logic
    - _Requirements: 1.1, 5.4_

  - [x] 2.2 Build locale management system

    - Create useLocale and useServerLocale hooks
    - Implement translation key interpolation system
    - Set up language-specific content directory structure
    - _Requirements: 1.3, 1.4, 4.2_

  - [x] 2.3 Write property test for locale system

    - **Property 1: Locale System Consistency**
    - **Validates: Requirements 1.1, 1.2, 1.4, 1.5, 5.4**

  - [x] 2.4 Create language toggle widget
    - Implement LocaleToggle component with scroll preservation
    - Integrate with Next.js navigation system
    - _Requirements: 1.2_

- [x] 3. Develop theme management system

  - [x] 3.1 Implement theme provider and context

    - Set up next-themes integration with Nextra
    - Configure theme persistence in localStorage
    - Add system theme detection support
    - _Requirements: 3.2, 3.3, 3.5_

  - [x] 3.2 Create theme toggle widget

    - Build ThemeToggle component with immediate switching
    - Implement theme state management and persistence
    - Add visual feedback for theme changes
    - _Requirements: 3.1_

  - [ ] 3.3 Write property test for theme system
    - **Property 2: Theme System Completeness**
    - **Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5**

- [x] 4. Build content management system

  - [x] 4.1 Set up Nextra content structure

    - Configure language-specific content directories
    - Create meta configuration files for navigation
    - Set up MDX processing with React component support
    - _Requirements: 4.2, 4.3, 4.4_

  - [x] 4.2 Implement blog article system

    - Create blog index and article templates
    - Add support for both MDX and TSX article formats
    - Implement frontmatter processing for metadata
    - _Requirements: 4.1, 4.5_

  - [ ] 4.3 Write property test for content management
    - **Property 3: Content Management System Integrity**
    - **Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.5**

- [ ] 5. Checkpoint - Ensure core systems are functional

  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Develop animation and visual effects system

  - [x] 6.1 Implement particle background system

    - Create PanelParticles component with tsparticles
    - Add theme-responsive particle configuration
    - Implement mobile device detection and optimization
    - _Requirements: 2.1, 2.3, 2.5_

  - [x] 6.2 Build homepage hero components

    - Create HomepageHero with animated sections
    - Implement tech stack marquee with icons
    - Add feature showcase with hover effects
    - _Requirements: 2.4_

  - [x] 6.3 Add Framer Motion animations

    - Implement smooth hover animations for interactive elements
    - Add page transition animations
    - Create motion wrappers for component animations
    - _Requirements: 2.2_

  - [ ] 6.4 Write property test for animation system

    - **Property 4: Animation System Adaptation**
    - **Validates: Requirements 2.2, 2.3, 2.5**

  - [ ] 6.5 Write example tests for specific animations
    - **Example 1: Homepage Particle Initialization**
    - **Example 2: Tech Stack Marquee Display**
    - **Validates: Requirements 2.1, 2.4**

- [x] 7. Implement navigation and routing system

  - [x] 7.1 Create custom Nextra layout components

    - Build LangLayout with language-specific configuration
    - Implement CustomNavbar with locale and theme toggles
    - Create CustomFooter with consistent styling
    - _Requirements: 5.1, 5.2_

  - [x] 7.2 Set up page navigation structure

    - Configure breadcrumb navigation for blog articles
    - Implement table of contents for long-form content
    - Add support for profile and blog page types
    - _Requirements: 5.3, 5.5_

  - [ ] 7.3 Write property test for navigation system
    - **Property 5: Navigation System Consistency**
    - **Validates: Requirements 5.1, 5.2, 5.3, 5.5**

- [ ] 8. Build search functionality

  - [ ] 8.1 Integrate Pagefind search system

    - Configure Pagefind for static search indexing
    - Set up build-time search index generation
    - Create search interface component
    - _Requirements: 6.1, 6.5_

  - [ ] 8.2 Implement multilingual search

    - Configure search to index both Japanese and English content
    - Add search result highlighting and snippets
    - Ensure comprehensive content coverage in search
    - _Requirements: 6.2, 6.3, 6.4_

  - [ ] 8.3 Write property test for search system

    - **Property 6: Search System Completeness**
    - **Validates: Requirements 6.2, 6.3, 6.4**

  - [ ] 8.4 Write example test for search interface
    - **Example 3: Search Interface Availability**
    - **Validates: Requirements 6.1**

- [x] 9. Develop responsive UI component library

  - [x] 9.1 Create shadcn/ui component integration

    - Set up shadcn/ui components with Tailwind CSS 4
    - Configure component variants and styling
    - Implement consistent design patterns
    - _Requirements: 7.3_

  - [x] 9.2 Build responsive layout components

    - Create responsive grid and container components
    - Implement mobile-optimized navigation and interactions
    - Add support for portrait and landscape orientations
    - _Requirements: 7.1, 7.2, 7.5_

  - [x] 9.3 Implement responsive typography system

    - Configure Tailwind typography scaling
    - Add device-specific font sizing and spacing
    - Ensure optimal readability across screen sizes
    - _Requirements: 7.4_

  - [ ] 9.4 Write property test for responsive design

    - **Property 7: Responsive Design Adaptation**
    - **Validates: Requirements 7.1, 7.2, 7.4, 7.5**

  - [ ] 9.5 Write property test for component consistency
    - **Property 8: Component Library Consistency**
    - **Validates: Requirements 7.3**

- [ ] 10. Implement accessibility features

  - [ ] 10.1 Add semantic HTML structure

    - Ensure proper heading hierarchy and landmarks
    - Implement semantic navigation and content structure
    - Add appropriate HTML5 elements for content sections
    - _Requirements: 10.2_

  - [ ] 10.2 Implement keyboard navigation support

    - Add keyboard accessibility to all interactive elements
    - Implement focus management for dynamic content
    - Ensure tab order is logical and consistent
    - _Requirements: 10.4_

  - [ ] 10.3 Add ARIA labels and alt text

    - Implement comprehensive alt text for images
    - Add ARIA labels for interactive elements
    - Ensure screen reader compatibility
    - _Requirements: 10.5_

  - [ ] 10.4 Write property test for accessibility compliance
    - **Property 9: Accessibility Compliance**
    - **Validates: Requirements 10.2, 10.4, 10.5**

- [ ] 11. Content migration and enhancement

  - [ ] 11.1 Migrate existing blog articles

    - Convert Deno/Pagic articles to MDX format
    - Update image paths and asset references
    - Preserve article metadata and publication dates
    - _Requirements: 4.1, 4.2_

  - [ ] 11.2 Update profile content

    - Refresh technology stack information
    - Update career and experience sections
    - Add current company and role information
    - _Requirements: 4.3_

  - [ ] 11.3 Create interactive presentation articles
    - Convert existing TSX presentations to new format
    - Ensure React component functionality in articles
    - Test embedded component rendering
    - _Requirements: 4.5_

- [ ] 12. Final integration and testing

  - [ ] 12.1 Integration testing and bug fixes

    - Test complete user workflows across languages
    - Verify theme switching across all components
    - Test responsive behavior on various devices
    - _Requirements: All requirements integration_

  - [ ] 12.2 Write integration tests
    - Test end-to-end user workflows
    - Verify cross-component interactions
    - Test deployment and production builds

- [ ] 13. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Property tests validate universal correctness properties using fast-check
- Example tests validate specific functionality and edge cases
- Integration focuses on existing content migration and modern stack benefits
- All TypeScript implementations should maintain strict type safety
