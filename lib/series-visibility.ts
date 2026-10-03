import { sanityApiVersion, sanityConfigured, sanityDataset, sanityProjectId } from './sanity';

// What's switched off in the Studio: whole series, and individual photos within
// visible series. Anything not in Sanity (or any Sanity outage) counts as visible,
// so the site never goes blank because of the CMS.

export type Visibility = { hiddenSeries: string[]; hiddenPhotos: string[] };

const NOTHING_HIDDEN: Visibility = { hiddenSeries: [], hiddenPhotos: [] };
const QUERY = `{
  "hiddenSeries": *[_type == "series" && visible == false].slug.current,
  "hiddenPhotos": *[_type == "series"].photos[visible == false].url
}`;
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

async function fetchVisibility(init: RequestInit & { next?: { revalidate: number } }): Promise<Visibility> {
  const res = await fetch(queryUrl(), { ...init, headers: headers() });
  if (!res.ok) throw new Error(`Sanity query failed: ${res.status}`);
  const { result } = (await res.json()) as { result: Partial<Record<keyof Visibility, unknown>> | null };
  const strings = (value: unknown) => (Array.isArray(value) ? value.flat().filter((v): v is string => typeof v === 'string') : []);
  return { hiddenSeries: strings(result?.hiddenSeries), hiddenPhotos: strings(result?.hiddenPhotos) };
}

// For server components: cached by Next and refreshed every minute.
export async function getVisibility(): Promise<Visibility> {
  if (!sanityConfigured) return NOTHING_HIDDEN;
  try {
    return await fetchVisibility({ next: { revalidate: REVALIDATE_SECONDS } });
  } catch (error) {
    console.error('[series-visibility]', error);
    return NOTHING_HIDDEN;
  }
}

export async function getHiddenSeries(): Promise<string[]> {
  return (await getVisibility()).hiddenSeries;
}

// For the proxy, which can't use Next's data cache: a small in-memory cache that
// keeps the last good answer if Sanity is unreachable.
let proxyCache: { hiddenSeries: string[]; expires: number } | undefined;

export async function getHiddenSeriesForProxy(): Promise<string[]> {
  if (!sanityConfigured) return [];
  if (proxyCache && proxyCache.expires > Date.now()) return proxyCache.hiddenSeries;
  try {
    const { hiddenSeries } = await fetchVisibility({ cache: 'no-store' });
    proxyCache = { hiddenSeries, expires: Date.now() + REVALIDATE_SECONDS * 1000 };
    return hiddenSeries;
  } catch (error) {
    console.error('[series-visibility]', error);
    return proxyCache?.hiddenSeries ?? [];
  }
}
