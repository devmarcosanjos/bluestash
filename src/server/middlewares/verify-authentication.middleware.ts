import {User} from '@supabase/supabase-js'
import {NextRequest, NextResponse} from 'next/server'


type Props = {
  request: NextRequest
  response: NextResponse
  user: User | null
  isAuthRoute: boolean
}

export const verifyAuthentication = ({request, response, user, isAuthRoute}: Props) => {
  const isAuthenticated = !!user

  if (isAuthRoute) {
    if (isAuthenticated) return NextResponse.redirect(new URL('/admin', request.url))
    return response
  }

  // PRIVATE ROUTES
  if (isAuthenticated) return response
  return NextResponse.redirect(new URL(`/auth`, request.url))
}
