# Development Guidelines

## Package Manager
- **pnpm** MUST be used for package management.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Content Engine**: Nextra 4 (MDX)
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Radix UI)
- **Animations**: Framer Motion
- **Language**: TypeScript

## Development Rules
- **Linting**: Follow the ESLint rules based on `@antfu/eslint-config`.
- **i18n**: Maintain multi-language support (Japanese and English). When adding new content, ensure both `src/content/ja` and `src/content/en` are updated.
- **Search**: Ensure `npm run pagefind` is executed after the build during deployment to update the static search index (Pagefind).
- **Deployment**: The project is configured for static export to the `out` directory.
