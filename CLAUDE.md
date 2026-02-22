# odeloic.com

Personal site built with [Astro](https://astro.build).

## Development

```bash
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview the build
```

## Content

Content lives in `src/content/` across three collections:

| Collection | Directory | Description |
|---|---|---|
| `blog` | `src/content/blog/` | Blog posts |
| `projects` | `src/content/projects/` | Projects |
| `learning` | `src/content/learning/` | Learning log |

Schemas are defined in `src/content/config.ts`.

### Scaffolding new entries

```bash
npm run new -- blog       # creates src/content/blog/YYYY-MM-DD.md
npm run new -- project    # creates src/content/projects/YYYY-MM-DD.md
npm run new -- learning   # creates src/content/learning/YYYY-MM-DD.md
```

The script (`scripts/new-content.js`) writes a pre-populated frontmatter stub named after today's date. It errors if the file already exists.
