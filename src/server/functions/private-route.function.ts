import {NextResponse} from 'next/server'

import {supabaseCreateClient} from '@/libs/supabase/supabase-server'

type CallbackProps = (...params: any) => Promise<Response>

export const privateRoute = (callback: CallbackProps) => {
  return async (...params: any) => {
    const supabase = await supabaseCreateClient()
    const {data} = await supabase.auth.getUser()
    const isAutenticated = !!data.user

    if (isAutenticated) {
      return callback(...params)
    }

    return NextResponse.json('No authorized', {status: 401})
  }
}
