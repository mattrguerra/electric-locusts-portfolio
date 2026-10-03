import { NextResponse, type NextRequest } from 'next/server';
import {
  UNLOCK_COOKIE,
  UNLOCK_MAX_AGE,
  UNLOCK_PATH,
  safeNext,
  siteAccessList,
  unlockToken,
} from '@/lib/site-lock';

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const attempt = String(form.get('password') ?? '').trim();
  const next = safeNext(String(form.get('next') ?? ''));
  const access = siteAccessList();

  if (access.length === 0) {
    return NextResponse.redirect(new URL(next, request.url), 303);
  }

  const match = attempt ? access.find((a) => a.password === attempt) : undefined;
  if (!match) {
    const url = new URL(UNLOCK_PATH, request.url);
    url.searchParams.set('error', '1');
    if (next !== '/') url.searchParams.set('next', next);
    return NextResponse.redirect(url, 303);
  }

  // Shows up in Vercel's runtime logs so you can see who opened the site.
  console.info(`[unlock] ${match.name}`);

  const response = NextResponse.redirect(new URL(next, request.url), 303);
  response.cookies.set(UNLOCK_COOKIE, await unlockToken(match), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: UNLOCK_MAX_AGE,
  });
  return response;
}
