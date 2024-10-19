import {APP_URL, SUPABASE_ANON_KEY} from '@/config/env-client'
import {supabaseCreateClient} from '@/libs/supabase/supabase-server'

const a = 0

export const signinInWithMagicLink = async (email: string) => {
  const supabase = await supabaseCreateClient()

  const {error} = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      emailRedirectTo: `${APP_URL}/auth/callback`,
    },
  })

  if (error) throw 'Error to send magic link email'
}
