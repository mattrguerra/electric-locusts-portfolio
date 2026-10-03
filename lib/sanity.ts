// Sanity project used by the Studio (studio/) to switch portfolio series on and off.
// Shared by the site and the Studio, so keep this file free of Next.js imports.

export const sanityProjectId = 'yp6c0ngt';
export const sanityDataset = 'production';
export const sanityApiVersion = '2025-01-01';

export const sanityConfigured = !sanityProjectId.startsWith('REPLACE');
