// Single source of truth for the deployment target.
//
// Deploying to a custom domain later? Set BASE to '/' and SITE to the domain —
// every internal link is derived from these two values, so nothing else changes.
export const SITE = 'https://danielrosehill.github.io';
export const BASE = '/MK-Claude/';

// Used to rewrite links that point outside the published content tree
// (the plugin, the Typst template) back at the repository on GitHub.
export const REPO_BLOB = 'https://github.com/danielrosehill/MK-Claude/blob/main/';
export const REPO_TREE = 'https://github.com/danielrosehill/MK-Claude/tree/main/';
export const REPO_EDIT = 'https://github.com/danielrosehill/MK-Claude/edit/main/';
