# odeloic.com

Personal website built with [Astro](https://astro.build). Blog, projects, learning logs, and tags.

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |

## Adding Content

All content lives in `src/content/` as markdown files. Each content type has its own folder and schema.

### Blog Posts

Add a `.md` file to `src/content/blog/`.

**Required frontmatter:** `title`, `description`, `publishedAt`, `tags`

**Optional:** `updatedAt`, `draft` (default: false), `featured` (default: false)

- Posts with `draft: true` are excluded from the site
- Posts with `featured: true` appear on the homepage
- Tags link to `/tags/{tag}` pages automatically

See the full example: [docs/example-blog-post.md](docs/example-blog-post.md)

### Projects

Add a `.md` file to `src/content/projects/`.

**Required frontmatter:** `title`, `description`, `status`, `startedAt`, `version`

**Optional:** `tags`, `stack`, `links` (github/live/demo URLs), `featured` (default: false), `draft` (default: false)

- `status` must be one of: `active`, `maintained`, `archived`, `idea`
- Featured projects appear on the homepage
- The `stack` array renders as tech tags on the project card
- External links (GitHub, Live, Demo) render as buttons on the detail page

See the full example: [docs/example-project.md](docs/example-project.md)

### Learning Logs

Add a `.md` file to `src/content/learning/`.

**Required frontmatter:** `title`, `description`, `startedAt`, `status`

**Optional:** `updatedAt`, `tags`

- `status` must be one of: `in-progress`, `completed`, `paused`
- Use `## Date` headings (e.g. `## January 10, 2025`) as dated entries — they're styled as a timeline on the detail page
- Update `updatedAt` each time you add new entries

See the full example: [docs/example-learning-log.md](docs/example-learning-log.md)

### Tags

Tags are generated automatically. Any tag used in blog posts, projects, or learning logs appears on the `/tags` page with a count, and gets its own `/tags/{tag}` page grouping all content with that tag.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── content/
│   ├── blog/       # Blog posts (.md)
│   ├── projects/   # Projects (.md)
│   ├── learning/   # Learning logs (.md)
│   └── config.ts   # Collection schemas
├── layouts/        # Page layouts
├── pages/          # File-based routing
├── styles/         # Global CSS and design tokens
└── utils/          # Shared utilities
```
