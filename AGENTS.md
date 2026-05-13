# IAESTE Spain Web — AGENTS.md

## What this is

WordPress static export migrated to Eleventy (11ty). Plain HTML/CSS/JS output, no server-side code. Hosted on GitHub Pages.

## Key commands

| Command | Purpose |
|---------|---------|
| `npm run build` | Build Eleventy site to `_site/` |
| `npm run dev` | Dev server with live reload |
| `npm test` | Run Playwright tests |
| `npm run check` | Build + test (pre-deploy) |

## Architecture

- **Eleventy** with Nunjucks templates in `src/`
- Output: `_site/` (flat HTML, GitHub Pages-ready)
- **Bilingual**: Spanish at root `/`, English at `/en/`
- **CSS**: `src/assets/css/iaeste-base.css` + `src/assets/css/iaeste-design.css` (untouched from original)
- **Images**: `src/assets/images/` (migrated from `wp-content/uploads/`)
- **No JS framework** — plain vanilla JS for mobile menu and contact form

## Project structure

```
src/
  _includes/
    layouts/base.njk        ← HTML shell
    partials/header.njk     ← nav, search, lang switcher
    partials/footer.njk     ← 3-column footer + social
    partials/scripts.njk    ← mobile menu JS, Astra JS
  assets/
    css/                    ← custom CSS (unchanged)
    images/                 ← all site images
  es/                       ← Spanish pages
  en/                       ← English pages
  404.njk
```

## Page template pattern

Every page is:
```njk
---
layout: layouts/base.njk
title: "Page Title"
lang: es
activeNav: "slug"
bodyClasses: "wp-singular ..."
pageInlineStyles: ".wp-elements-...{}"
permalink: "/ruta/index.html"
---
<div class="entry-content" ...>
  <!-- page-specific content -->
</div>
```

The `pageInlineStyles` front matter injects per-page WP block CSS into `<head>`. This is essential — without it some spacing/colors break.

## Special pages

| Page | Notes |
|------|-------|
| `contacto/index.njk` | Has inline mailto form JS |
| `faq/index.njk` | Largest page, accordion blocks |
| `404.njk` | Standalone error page |

## Navigation items (for `activeNav`)

- `inicio` — `home` — `/`
- `sobre-iaeste`, `mision-y-valores`
- `estudiantes`, `experiencias`, `ventajas`
- `empresas`, `entidades-patrocinadoras`
- `universidades`, `unete-a-iaeste`, `union-entre-universidades-y-extranjero`
- `contacto`, `faq`

## Testing with Playwright

Tests compare the local build against the live site at `https://iaestespain.github.io/WEB/`.

```bash
# Run all tests
npm test

# Run tests for a specific page
npx playwright test --grep "contacto"
```

Test structure in `tests/`:
- `build-and-compare.spec.js` — one spec that checks every page
- `pages.json` — list of all 38 page paths with expected content snippets
- `playwright.config.js` — config (chromium, base URLs)

Each test checks: status 200, `<title>`, key text presence, nav/footer links, critical elements.

## Deploy

Auto-deploys via GitHub Actions (`.github/workflows/deploy.yml`) on push to `new-framework`.

For the action to work, the repo must have **GitHub Pages enabled** with **"GitHub Actions"** as the source (Settings → Pages → Source → GitHub Actions).

The production build (`NODE_ENV=production`) uses a `pathPrefix: /WEB` transform that prefixes all root-relative URLs (`href="/assets/..."` → `href="/WEB/assets/..."`) for GitHub Pages project site compatibility. Local dev (`npm run dev`) omits the prefix.

## Gotchas

- **No `.gitignore`** — `node_modules/`, `_site/`, and `.playwright/` are gitignored
- **Production path transform**: the `.eleventy.js` transform `prefix-urls` automatically adds `/WEB/` prefix to all `href`/`src`/`action` root-relative paths in HTML output — do NOT hardcode `/WEB/` in templates
- **Inline WP block styles** (`core-block-supports-inline-css`) are page-specific and must be in front matter — do not merge them into global CSS
