import {NextResponse, type NextRequest} from 'next/server'

import {updateSession} from '@/libs/supabase/refresh-sesion-middleware'

export async function middleware(request: NextRequest) {
  const privateRoutes = ['/admin']
  const authRoute = '/auth'
  const pathname = request.nextUrl.pathname
  const isPrivate = privateRoutes.some(route => pathname.startsWith(route))
  const isAuthRoute = pathname.startsWith(authRoute)

  if (isPrivate || isAuthRoute) {
    const {response, user} = await updateSession(request)
    const isAuthenticated = !!user.data.user

    if (isAuthRoute) {
      if (isAuthenticated) return NextResponse.redirect(new URL('/admin', request.url))
      return response
    }

    // PRIVATE ROUTES
    if (isAuthenticated) return response
    return NextResponse.redirect(new URL(`/auth`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/auth/:path*', '/about', '/another-page'],
}
