'use server'

import { UserModel } from '@/types/models'
import { deleteAllTodosFromUserFunction } from '@/server/functions/todo.function'
import {
  deleteUserByUserId,
  getCurrentUser,
  updateUserFunc,
} from '@/server/functions/user.function'

export const updateUserAction = async (updateUser: UserModel) => {
  await updateUserFunc(updateUser)
}

export const deleteAccountAction = async () => {
  /**
   * [x] Delete from todo table
   * [x] Delete user from from database
   * [] Delete user from supabase auth
   */
  const user = await getCurrentUser()
  await deleteAllTodosFromUserFunction(user.id)
  await deleteUserByUserId(user.id)
}
