import {APP_URL} from '@/config/env-client'
import {supabaseCreateClient} from '@/libs/supabase/supabase-server'

export const siginInWithMagicLink = async (formData: FormData) => {
  const supabase = supabaseCreateClient()

  const {error, data} = await supabase.auth.signInWithOtp({
    email: formData.get('email') as string,
    options: {
      emailRedirectTo: `${APP_URL}/auth/callback`,
    },
  })

  console.log('form-data', formData)
  console.log('data', data)

  if (error) {
    console.error('erro login', error)
    return
  }
}
