'use server'

import { UserModel } from '@/types/models'
import { deleteAuthSupabaseUser } from '@/server/functions/auth.function'
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
  const user = await getCurrentUser()

  await deleteAllTodosFromUserFunction(user.id)
  await deleteUserByUserId(user.id)
  await deleteAuthSupabaseUser(user.uid)
}

export const deleteTodosByUser = async () => {
  const user = await getCurrentUser()

  await deleteAllTodosFromUserFunction(user.id)
}
