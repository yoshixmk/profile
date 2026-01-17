import { middleware as nextraMiddleware } from 'nextra/locales'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Block system/diagnostic paths (like .well-known or .DS_Store) from triggering localized layouts
  if (pathname.split('/').some(segment => segment.startsWith('.'))) {
    return new NextResponse('Not Found', { status: 404 })
  }

  return nextraMiddleware(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - img (image files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|img|_pagefind).*)',
  ],
}
