import {NextRequest, NextResponse} from 'next/server'

import {User} from '@supabase/supabase-js'

type Props = {
  isAuthRoute: boolean
  isApiRoute: boolean
  request: NextRequest
  response: NextResponse
  user: User | null
}

export const verifyAuthentication = ({isAuthRoute, isApiRoute, request, response, user}: Props) => {
  const isAuthenticated = !!user

  if (isApiRoute && !isAuthenticated) {
    console.log('ACESSO NEGADO')
  }

  if (isAuthRoute) {
    if (isAuthenticated) return NextResponse.redirect(new URL('/admin', request.url))
    return response
  }

  // PRIVATE ROUTES
  if (isAuthenticated) return response

  return NextResponse.redirect(new URL(`/auth`, request.url))
}
