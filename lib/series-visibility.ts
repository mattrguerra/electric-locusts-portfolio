import { sanityApiVersion, sanityConfigured, sanityDataset, sanityProjectId } from './sanity';

// Series switched off in the Studio. Anything not in Sanity (or any Sanity outage)
// counts as visible, so the site never goes blank because of the CMS.

const QUERY = '*[_type == "series" && visible == false].slug.current';
const REVALIDATE_SECONDS = 60;

function queryUrl() {
  const host = process.env.SANITY_READ_TOKEN ? 'api.sanity.io' : 'apicdn.sanity.io';
  const url = new URL(`https://${sanityProjectId}.${host}/v${sanityApiVersion}/data/query/${sanityDataset}`);
  url.searchParams.set('query', QUERY);
  return url;
}

function headers(): HeadersInit {
  const token = process.env.SANITY_READ_TOKEN;
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function fetchHidden(init: RequestInit & { next?: { revalidate: number } }) {
  const res = await fetch(queryUrl(), { ...init, headers: headers() });
  if (!res.ok) throw new Error(`Sanity query failed: ${res.status}`);
  const { result } = (await res.json()) as { result: string[] | null };
  return (result ?? []).filter(Boolean);
}

// For server components: cached by Next and refreshed every minute.
export async function getHiddenSeries(): Promise<string[]> {
  if (!sanityConfigured) return [];
  try {
    return await fetchHidden({ next: { revalidate: REVALIDATE_SECONDS } });
  } catch (error) {
    console.error('[series-visibility]', error);
    return [];
  }
}

// For the proxy, which can't use Next's data cache: a small in-memory cache that
// keeps the last good answer if Sanity is unreachable.
let proxyCache: { hidden: string[]; expires: number } | undefined;

export async function getHiddenSeriesForProxy(): Promise<string[]> {
  if (!sanityConfigured) return [];
  if (proxyCache && proxyCache.expires > Date.now()) return proxyCache.hidden;
  try {
    const hidden = await fetchHidden({ cache: 'no-store' });
    proxyCache = { hidden, expires: Date.now() + REVALIDATE_SECONDS * 1000 };
    return hidden;
  } catch (error) {
    console.error('[series-visibility]', error);
    return proxyCache?.hidden ?? [];
  }
}
