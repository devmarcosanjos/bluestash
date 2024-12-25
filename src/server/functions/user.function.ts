import { redirect } from 'next/navigation'

import { UserModel } from '@/types/models'
import { supabaseCreateClient } from '@/libs/supabase/supabase-server'
import { getAuthenticatedUser, updateUser } from '@/server/data/user.data'

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
    await supabase.auth.admin.deleteUser(userId)
  } catch (error) {
    console.error('Erro ao deletar conta', error)
  }
}
export const updateUserFunc = async (updateUSer: UserModel) => {
  const { uid } = await getCurrentUser()

  await updateUser(uid, updateUSer)
}
