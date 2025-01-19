'use server'

import { UserModel } from '@/types/models'
import { getCurrentUser, updateUserFunc } from '@/server/functions/user.function'
import { deleteAllTodosFromUserFunction } from '@/server/functions/todo.function'

export const updateUserAction = async (updateUser: UserModel) => {
  await updateUserFunc(updateUser)
}

export const deleteAccountAction = async () => {
  /**
   * [x] Delete from todo table
   * [ ] Delete user from from database
   * [] Delete user from supabase auth
   */
  const user = await getCurrentUser()
  await deleteAllTodosFromUserFunction(user.id)
}
