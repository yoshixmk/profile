---
inclusion: always
---

# Development Guidelines

## Package Manager

- **ALWAYS use pnpm** for all package operations (`pnpm install`, `pnpm add`, `pnpm run`)
- Never use npm or yarn commands in this project

## Tech Stack & Architecture

- **Framework**: Next.js 15 with App Router (use `src/app` directory structure)
- **Content Engine**: Nextra 4 for MDX processing
- **Styling**: Tailwind CSS 4 with custom configuration
- **UI Components**: shadcn/ui components (based on Radix UI primitives)
- **Animations**: Framer Motion for interactive animations
- **Language**: TypeScript with strict type checking

## File Structure Conventions

- **Content**: Place all content in `src/content/{lang}/` directories
- **Components**: Use `src/components/` with PascalCase folder names
- **Pages**: Follow Next.js App Router conventions in `src/app/[lang]/`
- **Assets**: Static assets go in `public/` or `src/assets/`
- **Hooks**: Custom hooks in `src/hooks/` with `use` prefix

## Code Style & Linting

- Follow ESLint rules based on `@antfu/eslint-config`
- Use TypeScript strict mode
- Prefer named exports over default exports for components
- Use consistent import ordering (external packages first, then internal)

## Internationalization (i18n)

- **CRITICAL**: When adding ANY new content, ALWAYS update BOTH languages:
  - Japanese: `src/content/ja/`
  - English: `src/content/en/`
- Use the existing i18n structure in `src/i18n/` for UI strings
- Maintain consistent navigation structure across languages via `_meta.tsx` files

## Content Management

- **MDX Files**: Use `.mdx` extension for content with React components
- **Markdown Files**: Use `.md` for simple content
- **Meta Files**: Update `_meta.tsx` files when adding new pages or sections
- **Blog Posts**: Follow existing naming convention (001-title.md, 002-title.md, etc.)

## Build & Deployment

- **Static Export**: Project builds to `out/` directory for static hosting
- **Search Index**: Run `pnpm run pagefind` after build to update search functionality
- **Build Command**: Use `pnpm run build` followed by `pnpm run pagefind`

## Component Development

- Use shadcn/ui components when possible before creating custom ones
- Follow the existing component structure with index.tsx files
- Use Tailwind classes for styling, avoid inline styles
- Implement proper TypeScript interfaces for component props

## Performance Considerations

- Optimize images using Next.js Image component
- Use dynamic imports for heavy components
- Leverage Next.js static generation capabilities
- Keep bundle size minimal by avoiding unnecessary dependencies
