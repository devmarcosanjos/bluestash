import {redirect} from 'next/navigation'

import {getCurrentUser} from '@/server/data/user.data'
import {supabaseCreateClient} from '@/libs/supabase/supabase-server'

export const loadUserData = async () => {
  try {
    return await getCurrentUser()
  } catch (error) {
    const supabase = await supabaseCreateClient()
    await supabase.auth.signOut()
    return redirect('/auth')
  }
}
