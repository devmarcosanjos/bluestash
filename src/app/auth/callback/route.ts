import {NextRequest, NextResponse} from 'next/server'

import {supabaseCreateClient} from '@/libs/supabase/supabase-server'
import {EmailOtpType} from '@supabase/supabase-js'

export const GET = async (request: NextRequest) => {
  const supabase = supabaseCreateClient()

  const {searchParams} = new URL(request.url)
  const token_hash = searchParams.get('token_hash')!
  const type = searchParams.get('type') as EmailOtpType
  //   console.log(code)

  const {data, error} = await supabase.auth.verifyOtp({token_hash, type})

  console.log(data)
  console.log(error)

  return NextResponse.json({
    banana: true,
  })
}
