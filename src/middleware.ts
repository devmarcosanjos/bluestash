import {NextResponse, type NextRequest} from 'next/server'

import {updateSession} from '@/libs/supabase/middleware/refresh-session.middleware'

import {verifyAuthentication} from './server/middlewares/verify-authentication.middleware'

export async function middleware(request: NextRequest) {
  const privateRoutes = ['/admin']
  const authRoute = '/auth'
  const pathname = request.nextUrl.pathname

  const isPrivate = privateRoutes.some(route => pathname.startsWith(route))
  const isAuthRoute = pathname.startsWith(authRoute)

  if (isPrivate || isAuthRoute) {
    const {response, user} = await updateSession(request)

    return verifyAuthentication({isAuthRoute, request, response, user})
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/auth/:path*'],
}
