'use server'

import { UserModel } from '@/types/models'
import { updateUserFunc } from '@/server/functions/user.function'

export const updateUserAction = async (updateUser: UserModel) => {
  await updateUserFunc(updateUser)
}
