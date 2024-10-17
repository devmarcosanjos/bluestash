import {SUPABASE_ANON_KEY, SUPABASE_URL} from '@/config/env-client'
import {createBrowserClient} from '@supabase/ssr'

const createClient = () => {
  createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY)
}

export const supabase = createClient()
