# Template for React application

## Project React Setup Summary

This is a modern React 19 project with the following setup:

- **Build Tool**: Vite 7
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS 4 with CSS variables
- **UI Components**: shadcn/ui (base-mira style) with Base UI and Lucide icons
- **Routing**: TanStack Router (file-based)
- **Data Fetching**: TanStack Query (React Query)
- **Tables**: TanStack Table
- **Linting**: ESLint 9 with React hooks, React DOM, and Prettier integration
- **Formatting**: Prettier with Tailwind CSS plugin
- **React Compiler**: Babel plugin for React Compiler enabled

### Key Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production and generate route tree
- `pnpm lint` - Run ESLint
- `pnpm format --check` - Check formatting with Prettier
- `pnpm fix` - Fix linting and formatting issues
- `pnpm preview` - Preview production build
- `pnpm type-check` - Run TypeScript type checking

### Path Aliases

- `@/*` maps to `./src/*`

### File-Based Routing Pitfalls

When working with TanStack Router's file-based routing, be aware of:

1. **File naming conventions are strict** - Route files must follow exact naming patterns (`route.tsx`, `index.tsx`, `$param.tsx` for dynamic segments)
2. **Route generation requires dev server restart** - Adding new route files may require restarting the dev server for the route tree to regenerate
3. **Avoid circular imports** - Route files should not import from each other; use shared modules in `lib/` or `utils/`
4. **Layout nesting can be confusing** - Understand the difference between `_layout.tsx` (pathless layout) and regular nested routes
5. **Dynamic segments naming** - Files prefixed with `$` become dynamic route parameters (e.g., `$userId.tsx` → `/users/:userId`)
6. **Catch-all routes** - Use `$.tsx` for catch-all routes, but be careful with route priority
7. **Type generation** - The `routeTree.gen.ts` file is auto-generated; never edit it manually
8. **Colocation limitations** - Non-route files in the routes directory may interfere with route generation; use `.` prefix to exclude them (e.g., `.components/`)
