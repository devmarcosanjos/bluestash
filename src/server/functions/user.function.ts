import { redirect } from 'next/navigation'

import { getAuthenticatedUser } from '@/server/data/user.data'
import { supabaseCreateClient } from '@/libs/supabase/supabase-server'

export const getCurrentUser = async () => {
  try {
    return await getAuthenticatedUser()
  } catch (error) {
    const supabase = await supabaseCreateClient()
    await supabase.auth.signOut()
    return redirect('/auth')
  }
}

export const deleteUserAccount = async (userId: string) => {
  try {
    const supabase = await supabaseCreateClient()
    await supabase.auth.deleteUser(userId)
  } catch (error) {
    console.error('Erro ao deletar conta', error)
  }
}
