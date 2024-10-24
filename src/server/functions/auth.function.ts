'use server'

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

export const getAuthenticatedUser = async () => {
  const supabase = await supabaseCreateClient()

  const {data, error} = await supabase.auth.getUser()
  const authenticatedUser = data.user

  if (error || !authenticatedUser) throw 'Could not get current user'

  return authenticatedUser
}
