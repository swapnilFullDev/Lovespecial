/**
 * Build the URL for a file kept in `public/`.
 *
 * Vite's `base` is relative (`./`) for this project, so plain `/file.webp`
 * paths would break after deployment. Resolving against BASE_URL keeps the
 * same file working in development and in the built gift.
 */
export function publicAsset(filename) {
  const base = import.meta.env.BASE_URL || "/";
  const prefix = base.endsWith("/") ? base : `${base}/`;

  return `${prefix}${encodeURI(filename)}`;
}
