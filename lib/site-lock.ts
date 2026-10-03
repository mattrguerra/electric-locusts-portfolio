// Site-wide password gate, one password per person.
//
// SITE_PASSWORDS holds comma-separated `name:password` pairs, e.g.
//   SITE_PASSWORDS="jane-gallery:amber-heron-41,alex:quiet-salt-77"
// Remove a pair (and redeploy) to revoke that person; everyone else keeps access.
// Unset SITE_PASSWORDS entirely to make the site public again.

export const UNLOCK_COOKIE = 'el_unlock';
export const UNLOCK_PATH = '/unlock';
export const UNLOCK_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export type SiteAccess = { name: string; password: string };

export function siteAccessList(): SiteAccess[] {
  return (process.env.SITE_PASSWORDS ?? '')
    .split(',')
    .map((entry) => {
      const i = entry.indexOf(':');
      if (i < 0) return { name: '', password: '' };
      return { name: entry.slice(0, i).trim(), password: entry.slice(i + 1).trim() };
    })
    .filter((a) => a.name && a.password);
}

// The cookie holds a hash of the person's name and password, never the password
// itself, so removing someone's entry invalidates the cookie they already have.
export async function unlockToken({ name, password }: SiteAccess): Promise<string> {
  const data = new TextEncoder().encode(`electric-locusts:${name}:${password}`);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export function safeNext(next: string | null | undefined): string {
  if (!next || !next.startsWith('/') || next.startsWith('//')) return '/';
  if (next.startsWith(UNLOCK_PATH)) return '/';
  return next;
}
