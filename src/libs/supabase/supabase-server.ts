import {cookies} from 'next/headers'

import {SUPABASE_URL} from '@/config/env-client'
import {SUPABASE_SERVICE_ROLE} from '@/config/env-server'
import {createServerClient} from '@supabase/ssr'

export const supabaseCreateClient = () => {
  const cookieStore = cookies()

  return createServerClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({name, value, options}) => cookieStore.set(name, value, options))
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  })
}
