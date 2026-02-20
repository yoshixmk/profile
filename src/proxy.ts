import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { proxy as nextraProxy } from 'nextra/locales'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.split('/').some(segment => segment.startsWith('.'))) {
    return new NextResponse('Not Found', { status: 404 })
  }

  return nextraProxy(request)
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
