/**
 * Post-build internal link check.
 *
 * A platform that argues from sourced evidence cannot ship dead cross-references,
 * and the content moves around often enough that a manual check will not hold.
 * Walks every built page, collects same-origin links, and fails the build on any
 * that do not resolve to a file in `dist/`.
 *
 * Usage: node scripts/check-links.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { BASE } from '../site.config.mjs';

const dist = fileURLToPath(new URL('../dist', import.meta.url));
const base = BASE.endsWith('/') ? BASE : BASE + '/';

if (!fs.existsSync(dist)) {
  console.error('check-links: dist/ not found — run the build first.');
  process.exit(1);
}

/** Every HTML file in the build, as a list of absolute paths. */
const pages = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) pages.push(full);
  }
})(dist);

/** Does a site-absolute URL path exist in the build? */
const resolves = (urlPath) => {
  if (!urlPath.startsWith(base)) return false;
  const rel = decodeURI(urlPath.slice(base.length));
  const target = path.join(dist, rel);
  if (fs.existsSync(target)) {
    return fs.statSync(target).isDirectory()
      ? fs.existsSync(path.join(target, 'index.html'))
      : true;
  }
  return fs.existsSync(target + '.html') || fs.existsSync(path.join(target, 'index.html'));
};

const broken = [];
let checked = 0;

for (const page of pages) {
  const html = fs.readFileSync(page, 'utf8');
  const from = '/' + path.relative(dist, page).replace(/\\/g, '/');
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    // Only same-origin, non-anchor links are ours to guarantee.
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const [urlPath] = href.split('#');
    if (!urlPath) continue;
    checked++;
    if (!resolves(urlPath)) broken.push({ from, href });
  }
}

if (broken.length) {
  console.error(`\ncheck-links: ${broken.length} broken internal link(s):\n`);
  for (const { from, href } of broken) console.error(`  ${from}\n    -> ${href}`);
  console.error('');
  process.exit(1);
}

console.log(`check-links: ${checked} internal links across ${pages.length} pages, all resolve.`);
