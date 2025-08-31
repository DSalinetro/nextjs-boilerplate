import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // --- protect /resume (but allow login and download) ---
  if (pathname.startsWith('/resume')) {
    if (pathname.startsWith('/resume/login') || pathname.startsWith('/resume/download')) {
      return NextResponse.next();
    }
    const authed = req.cookies.get('resumeAuthed')?.value === 'true';
    if (!authed) {
      const url = req.nextUrl.clone();
      url.pathname = '/resume/login';
      url.searchParams.set('next', pathname);
      return NextResponse.redirect(url);
    }
  }

  // --- keep your existing /admin block here if you have it ---

  return NextResponse.next();
}

export const config = {
  matcher: ['/resume', '/resume/:path*', '/admin', '/admin/:path*'],
};
