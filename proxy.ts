import { NextResponse, type NextRequest } from 'next/server';
import { UNLOCK_COOKIE, UNLOCK_PATH, siteAccessList, unlockToken } from '@/lib/site-lock';

export async function proxy(request: NextRequest) {
  const access = siteAccessList();
  if (access.length === 0) return NextResponse.next();

  const { pathname, search } = request.nextUrl;
  if (pathname === UNLOCK_PATH || pathname === '/api/unlock') {
    return withNoIndex(NextResponse.next());
  }

  const cookie = request.cookies.get(UNLOCK_COOKIE)?.value;
  const validTokens = await Promise.all(access.map(unlockToken));
  if (cookie && validTokens.includes(cookie)) {
    return withNoIndex(NextResponse.next());
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

function withNoIndex(response: NextResponse) {
  response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  return response;
}

export const config = {
  // Everything except Next's own build assets and the favicon.
  matcher: ['/((?!_next/static|_next/image|favicon.svg).*)'],
};
