import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Rewrites file-relative Markdown links to published URLs.
 *
 * The content in `src/content/docs/` is written to be read two ways: browsed as
 * plain Markdown on GitHub, and rendered as this site. Those two want different
 * links — `../policy/rental-market/index.md` on GitHub, `/MK-Claude/policy/rental-market/`
 * here — and Starlight does not resolve relative links itself. So the source
 * keeps the GitHub-correct form and this plugin translates at build time:
 *
 *   ./04-data.md                  -> <base>/policy/rental-market/research/04-data/
 *   ../../testimonies/x.md#anchor -> <base>/testimonies/x/#anchor
 *   ../../../templates/foo.typ    -> https://github.com/.../blob/main/templates/foo.typ
 *
 * A link that resolves to nothing is reported as a build warning rather than
 * silently shipping a 404.
 */
export function resolveDocLinks({ docsDir, base, repoBlob, repoRoot }) {
  const docs = path.resolve(docsDir);
  const root = path.resolve(repoRoot);
  const prefix = base.endsWith('/') ? base : base + '/';

  /** Does this path exist as a page in the docs collection? */
  const pageFor = (abs) => {
    for (const ext of ['.md', '.mdx', '']) {
      if (ext && fs.existsSync(abs + ext) && fs.statSync(abs + ext).isFile()) return abs + ext;
    }
    if (fs.existsSync(abs) && fs.statSync(abs).isDirectory()) {
      for (const ext of ['.md', '.mdx']) {
        const idx = path.join(abs, 'index' + ext);
        if (fs.existsSync(idx)) return idx;
      }
    }
    if (fs.existsSync(abs) && fs.statSync(abs).isFile()) return abs;
    return null;
  };

  /** Published URL for a source file inside the docs collection. */
  const urlFor = (file) => {
    let slug = path.relative(docs, file).replace(/\.(md|mdx)$/, '');
    slug = slug.replace(/(^|\/)index$/, '');
    slug = slug.replace(/\\/g, '/').replace(/\/$/, '');
    return slug ? `${prefix}${slug}/` : prefix;
  };

  return {
    name: 'resolve-doc-links',
    element: {
      filter: ['a'],
      visit(node, ctx) {
        const href = node.properties?.href;
        if (typeof href !== 'string' || !href) return;
        // Absolute URLs, protocol-relative, mail/tel, and bare anchors pass through.
        if (/^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(href)) return;
        // Already-absolute site paths pass through.
        if (href.startsWith('/')) return;
        if (!ctx.fileURL) return;

        const from = fileURLToPath(ctx.fileURL);
        const hashAt = href.indexOf('#');
        const target = hashAt === -1 ? href : href.slice(0, hashAt);
        const hash = hashAt === -1 ? '' : href.slice(hashAt);
        if (!target) return;

        const abs = path.resolve(path.dirname(from), decodeURI(target));

        // Inside the published tree: rewrite to the page URL.
        if (abs === docs || abs.startsWith(docs + path.sep)) {
          const file = pageFor(abs);
          if (!file) {
            ctx.report({
              node,
              severity: 'warning',
              message: `broken internal link "${href}" in ${path.relative(root, from)}`,
            });
            return;
          }
          if (/\.(md|mdx)$/.test(file)) {
            ctx.setProperty(node, 'href', urlFor(file) + hash);
          } else {
            // A non-page asset that happens to live in the tree.
            ctx.setProperty(node, 'href', prefix + path.relative(docs, file).replace(/\\/g, '/') + hash);
          }
          return;
        }

        // Outside the published tree (the plugin, templates): point at GitHub.
        if (abs.startsWith(root + path.sep)) {
          const rel = path.relative(root, abs).replace(/\\/g, '/');
          if (!fs.existsSync(abs)) {
            ctx.report({
              node,
              severity: 'warning',
              message: `link to missing repo path "${href}" in ${path.relative(root, from)}`,
            });
          }
          ctx.setProperty(node, 'href', repoBlob + rel + hash);
          return;
        }

        ctx.report({
          node,
          severity: 'warning',
          message: `link escapes the repository: "${href}" in ${path.relative(root, from)}`,
        });
      },
    },
  };
}
