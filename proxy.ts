import { NextResponse, type NextRequest } from 'next/server';
import { UNLOCK_COOKIE, UNLOCK_PATH, siteAccessList, unlockToken } from '@/lib/site-lock';
import { getHiddenSeriesForProxy } from '@/lib/series-visibility';

export async function proxy(request: NextRequest) {
  const access = siteAccessList();
  if (access.length === 0) return hideSwitchedOffSeries(request);

  const { pathname, search } = request.nextUrl;
  if (pathname === UNLOCK_PATH || pathname === '/api/unlock') {
    return withNoIndex(NextResponse.next());
  }

  const cookie = request.cookies.get(UNLOCK_COOKIE)?.value;
  const validTokens = await Promise.all(access.map(unlockToken));
  if (cookie && validTokens.includes(cookie)) {
    return withNoIndex(await hideSwitchedOffSeries(request));
  }

  // Non-page requests (images, video, API) get a plain 401 instead of a redirect.
  const isPage = request.method === 'GET' && request.headers.get('accept')?.includes('text/html');
  if (!isPage) {
    return withNoIndex(new NextResponse('Unauthorized', { status: 401 }));
  }

  const url = request.nextUrl.clone();
  url.pathname = UNLOCK_PATH;
  url.search = '';
  if (pathname !== '/') url.searchParams.set('next', pathname + search);
  return withNoIndex(NextResponse.redirect(url));
}

// Series switched off in the Studio render the 404 page.
async function hideSwitchedOffSeries(request: NextRequest) {
  const match = request.nextUrl.pathname.match(/^\/portfolio\/([^/]+)\/?$/);
  if (match && (await getHiddenSeriesForProxy()).includes(match[1])) {
    return NextResponse.rewrite(new URL('/portfolio/__hidden', request.url));
  }
  return NextResponse.next();
}

function withNoIndex(response: NextResponse) {
  response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  return response;
}

export const config = {
  // Everything except Next's own build assets and the favicon.
  matcher: ['/((?!_next/static|_next/image|favicon.svg).*)'],
};
