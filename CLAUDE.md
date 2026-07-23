# MK-Claude — working notes

## The content root

**All pipeline content lives under `site/src/content/docs/`.** That directory is the content
root, and every path in the `policy-development-assistant` plugin's commands and skills is
relative to it, not to the repository root:

| Plugin path | Actual location |
|-------------|-----------------|
| `testimonies/` | `site/src/content/docs/testimonies/` |
| `policy/<area>/` | `site/src/content/docs/policy/<area>/` |
| `context/` | `site/src/content/docs/context/` |
| `platform/` | `site/src/content/docs/platform/` |
| `policy/<area>/paper/` | `site/public/papers/` (flat: `<area>.typ`, `<area>.pdf`) |
| `testimonies/raw/` | `testimonies-raw/` at the repository root — gitignored |

Raw testimony material is deliberately kept **outside** the content root: anything inside it
is published to the web.

Papers are flat in `site/public/papers/` so the compiled PDF is served as a static download
at `/papers/<area>.pdf`. The Typst import path from there is unchanged:
`#import "../../../templates/policy-paper.typ": ...`.

## Frontmatter is validated

Every Markdown file under the content root is a Starlight page and its frontmatter is
schema-checked at build time:

- `title` is **required**, and Starlight renders it as the page's `<h1>`. Do not also write a
  `# Heading` at the top of the body — that produces two H1s.
- `description` is optional but wanted on index pages; it becomes the meta description.
- The pipeline's own fields (`policy-area`, `document`, `status`, `last-verified`, `date`,
  `source`, `jurisdiction`, `instrument`, `adopted`, `role`, `election`, `sources-cutoff`) are
  declared in `site/src/content.config.ts`. **Adding a new frontmatter field means adding it
  there first**, or the build fails.
- `sidebar: { label, order }` controls navigation. Research documents use `1 ·`…`5 ·` labels.

## Links

Write links as **file-relative Markdown paths** — `../../testimonies/2026-07-23-rental-market.md`,
`./research/04-data.md`. They stay correct when the file is browsed on GitHub, and
`site/plugins/resolve-doc-links.mjs` rewrites them to published URLs at build time. A link that
resolves to nothing becomes a build warning; `npm run build` then fails on it via
`scripts/check-links.mjs`.

Links pointing outside the content root (to `plugins/`, `templates/`) are rewritten to GitHub
blob URLs automatically. Don't hand-write absolute site paths — they break if the base path
changes.

## Deployment

`site/site.config.mjs` holds `SITE` and `BASE`; everything else derives from them. Moving to a
custom domain means editing those two values and nothing else.

Node 22+ is required (Astro 7). Locally: `export PATH="$HOME/.nvm/versions/node/v22.21.1/bin:$PATH"`.
Push to `main` deploys via `.github/workflows/deploy.yml`.

## Keep in step

Three places carry the status table and drift apart easily:

1. `site/src/content/docs/tasks.md` — the source of truth
2. `site/src/content/docs/policy/index.md` — the area table
3. `site/src/pages/index.astro` — the `planks` array on the landing page
4. `README.md` — the repository-level table

When an area advances a stage, update all four.
