import {APP_URL} from '@/config/env-client'
import {supabaseCreateClient} from '@/libs/supabase/supabase-server'

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
