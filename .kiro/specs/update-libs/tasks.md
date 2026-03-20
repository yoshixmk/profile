# Tasks: Library Update Process

This is a manual workflow, not a system to build. These are the steps to follow for each update cycle.

## Update Cycle Steps

### Step 1: Preparation

- [ ] 1.1 Check current git status
  - Ensure working directory is clean
  - Commit or stash any pending changes

- [ ] 1.2 Create update branch
  - Branch naming: `update/{package-name}` or `update/{category}`
  - Example: `git checkout -b update/next` or `git checkout -b update/ui-components`

- [ ] 1.3 Identify packages to update
  - Check for available updates: `pnpm outdated`
  - Decide: High-risk (one at a time) or Low-risk (group)
  - Optional: Compare with upstream template

### Step 2: Update Package.json

- [ ] 2.1 Update package versions
  - **High-risk packages** (update ONE):
    - next
    - react + react-dom (together)
    - nextra + nextra-theme-docs (together)
    - tailwindcss + @tailwindcss/postcss (together)
    - typescript
  - **Low-risk packages** (can group by category):
    - UI Components: @radix-ui/*, lucide-react, framer-motion, motion
    - Testing: jest, @testing-library/*, fast-check
    - Linting: eslint, @antfu/eslint-config, eslint-plugin-*
    - Build Tools: @svgr/*, @iconify/*, postcss, sass
    - Utilities: clsx, tailwind-merge, qss, cross-env, cpy-cli

- [ ] 2.2 Save package.json

### Step 3: Install Dependencies

- [ ] 3.1 Run pnpm install
  - Command: `pnpm install`
  - Check for errors

- [ ] 3.2 Fix installation errors (if any)
  - Check error messages for:
    - Peer dependency conflicts
    - Breaking changes
    - Missing dependencies
  - Update package.json if needed
  - Re-run `pnpm install`
  - Repeat until successful

### Step 4: Development Server Verification

- [ ] 4.1 Start dev server
  - Command: `pnpm dev`
  - Wait for server to start on port 3000

- [ ] 4.2 Verify routes
  - Open http://localhost:3000/ja in browser
  - Open http://localhost:3000/en in browser
  - Check for errors in browser console
  - Check for errors in terminal

- [ ] 4.3 Fix dev server errors (if any)
  - Check error messages
  - Update code or configuration files
  - Stop server (Ctrl+C)
  - Re-run `pnpm dev`
  - Repeat until routes work

- [ ] 4.4 Stop dev server
  - Press Ctrl+C in terminal

### Step 5: Production Build Verification

- [ ] 5.1 Run build
  - Command: `pnpm build`
  - Check for errors

- [ ] 5.2 Fix build errors (if any)
  - Check TypeScript errors
  - Check configuration errors
  - Update code or config files
  - Re-run `pnpm build`
  - Repeat until successful

- [ ] 5.3 Run post-build commands
  - Command: `pnpm copy`
  - Command: `pnpm pagefind`
  - Verify out/ directory exists
  - Verify out/_pagefind directory exists

### Step 6: Code Quality Verification

- [ ] 6.1 Run lint
  - Command: `pnpm lint`
  - Check for errors (warnings are acceptable)

- [ ] 6.2 Fix lint errors (if any)
  - Fix code style issues
  - Update ESLint config if needed (for new rules)
  - Re-run `pnpm lint`
  - Repeat until no errors

- [ ] 6.3 Run tests
  - Command: `pnpm test`
  - Check for failures

- [ ] 6.4 Fix test errors (if any)
  - Update tests for API changes
  - Fix broken functionality
  - Re-run `pnpm test`
  - Repeat until all pass

### Step 7: Commit Changes

- [ ] 7.1 Review changes
  - Command: `git status`
  - Command: `git diff package.json`
  - Verify only intended files changed

- [ ] 7.2 Stage changes
  - Command: `git add package.json pnpm-lock.yaml`
  - Add any configuration file changes if needed

- [ ] 7.3 Commit with descriptive message
  - Format:
    ```
    chore: update {package-name} to {version}
    
    - Update {package} to {version}
    - [List any breaking changes handled]
    - [List any configuration changes]
    
    Tested:
    ✓ Dev server (ja/en routes)
    ✓ Production build
    ✓ Search index generation
    ✓ Linting
    ✓ Test suite
    ```

### Step 8: Continue or Finish

- [ ] 8.1 Decide next action
  - More packages to update? → Go to Step 2
  - All updates complete? → Continue to Step 8.2

- [ ] 8.2 Push branch
  - Command: `git push origin {branch-name}`
  - Create pull request if needed
  - Merge to main after review

## Reference Checklist: Tailwind CSS Update Example

This is how the Tailwind CSS 3 → 4 update was performed:

- [x] Created branch: `update/tailwindcss`
- [x] Updated package.json: tailwindcss@4.2.0, @tailwindcss/postcss@4.0.10
- [x] Ran `pnpm install` - Success
- [x] Updated tailwind.config.ts (new v4 syntax)
- [x] Updated postcss.config.mjs (added @tailwindcss/postcss)
- [x] Updated CSS files (@tailwind → @import)
- [x] Ran `pnpm dev` - Verified /ja and /en routes
- [x] Ran `pnpm build` - Success
- [x] Ran `pnpm copy` - Success
- [x] Ran `pnpm pagefind` - Success
- [x] Ran `pnpm lint` - No errors
- [x] Ran `pnpm test` - All passed
- [x] Committed with message documenting changes
- [x] Pushed branch

**Time**: ~2 hours (30min research + 45min implementation + 30min testing)

## Tips

- **Read migration guides** before updating major versions
- **Check changelogs** for breaking changes
- **Test both languages** (/ja and /en) every time
- **Commit frequently** after each successful update cycle
- **Document issues** encountered for future reference
- **Compare with upstream** when unsure about versions
