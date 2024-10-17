import {NextRequest, NextResponse} from 'next/server'

import {supabaseCreateClient} from '@/libs/supabase/supabase-server'
import {EmailOtpType} from '@supabase/supabase-js'

export const GET = async (request: NextRequest) => {
  const supabase = supabaseCreateClient()

  const {searchParams} = new URL(request.url)
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType
  const redirectUrl = new URL('/auth', request.url)

  if (!token_hash && !type) {
    redirectUrl.searchParams.append('status', 'missing-params')
    return NextResponse.redirect(redirectUrl)
  }

  const {error} = await supabase.auth.verifyOtp({token_hash: token_hash!, type})

  if (error) {
    redirectUrl.searchParams.append('status', 'login-failed')
    return NextResponse.redirect(redirectUrl)
  }

  // TODO:
  // VERIFY IF USER EXISTS IN THE DATABASE
  // IF EXISTS: DO NOTHING
  // REDIRECT TO /ADMIN
  // -------------
  // IF NOT EXISTS
  // CREATE USER IN THE DATABASE
  // REDIRECT TO /ADMIN

  return NextResponse.redirect(new URL('/admin', request.url))
}
