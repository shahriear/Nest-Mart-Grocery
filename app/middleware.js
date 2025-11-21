import { NextResponse } from 'next/server';

/** Protect /account route */
export function middleware(request) {
  const { pathname } = request.nextUrl;
  // protect any /account paths
  if (pathname.startsWith('/account')) {
    const token = request.cookies.get('token')?.value;
    if (!token) {
      const url = new URL('/login', request.url);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// apply to these paths
export const config = {
  matcher: ['/account/:path*'],
};
