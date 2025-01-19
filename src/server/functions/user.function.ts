import { redirect } from 'next/navigation'

import { UserModel } from '@/types/models'
import { supabaseCreateClient } from '@/libs/supabase/supabase-server'
import { deleteUser, getAuthenticatedUser, updateUser } from '@/server/data/user.data'

export const getCurrentUser = async () => {
  try {
    return await getAuthenticatedUser()
  } catch (error) {
    const supabase = await supabaseCreateClient()
    await supabase.auth.signOut()
    return redirect('/auth')
  }
}

export const updateUserFunc = async (updateUSer: UserModel) => {
  const { uid } = await getCurrentUser()

  await updateUser(uid, updateUSer)
}

export const deleteUserByUserId = async (userId: number) => {
  await deleteUser(userId)
}
