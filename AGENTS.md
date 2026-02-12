# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/` contains route files (`index.astro`, `about.astro`), each mapping to a URL.
- `src/layouts/` holds shared page shells (`BaseLayout.astro`, `PageLayout.astro`).
- `src/components/` is for reusable UI pieces (e.g., `Header.astro`, `ThemeToggle.astro`).
- `src/styles/` contains global CSS (`global.css`).
- `src/utils/` holds small TypeScript helpers (e.g., `formatDate.ts`).
- `src/content/` stores content collections and their config.
- `public/` is for static assets served as-is.

## Build, Test, and Development Commands
Run all commands from the repo root:
- `npm install`: install dependencies.
- `npm run dev`: start the Astro dev server at `http://localhost:4321`.
- `npm run build`: generate the production site in `dist/`.
- `npm run preview`: serve the production build locally.
- `npm run astro check`: run Astro checks (types/content). Use `npm run astro -- --help` for more CLI options.

## Coding Style & Naming Conventions
- Use 2-space indentation in Astro/CSS/TS to match existing files.
- Component and layout filenames use `PascalCase` (e.g., `BaseHeader.astro`).
- Utility functions use `camelCase` in `src/utils/` (e.g., `formatDate.ts`).
- Prefer colocating styles in `src/styles/` or component-level `<style>` blocks when appropriate.

## Testing Guidelines
- No automated test framework is configured. At minimum, run `npm run build` before opening a PR.
- If you add tests, document the framework and add a matching npm script.

## Commit & Pull Request Guidelines
- Commits follow a Conventional Commit style: `feat:`, `chore:`, `ci:`, etc. Optional scopes or ticket IDs are used (e.g., `feat: (ODE-104) about page`).
- PRs should include a concise summary, list of changes, and linked issues when applicable.
- For UI changes, include before/after screenshots or a short screen recording.

## Configuration Tips
- `astro.config.mjs` and `tsconfig.json` define build and TypeScript behavior. Update them alongside any structural changes (new aliases, content collections, or integrations).
