import {createBrowserClient} from '@supabase/ssr'

import {SUPABASE_ANON_KEY, SUPABASE_URL} from '@/config/env-client'

const createClient = () => {
  return createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY)
}

export const supabase = createClient()
