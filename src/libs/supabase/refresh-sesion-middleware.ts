import {NextRequest, NextResponse} from 'next/server'

import {SUPABASE_URL} from '@/config/env-client'
import {SUPABASE_SERVICE_ROLE} from '@/config/env-server'
import {createServerClient} from '@supabase/ssr'

export const updateSession = async (request: NextRequest) => {
  let response = NextResponse.next({request})

  const supabase = createServerClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE, {
    cookies: {
      getAll() {
        return request.cookies.getAll()
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({name, value}) => request.cookies.set(name, value))
        response = NextResponse.next({
          request,
        })
        cookiesToSet.forEach(({name, value, options}) => response.cookies.set(name, value, options))
      },
    },
  })

  const user = await supabase.auth.getUser()

  return {
    response,
    user,
  }
}
