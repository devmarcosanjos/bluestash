import 'server-only'

import { cache } from 'react'

import { prisma } from '@/libs/prisma/config'
import { CreateUserModel, UserModel } from '@/types/models'
import { getAuthenticatedSupabaseUser } from '@/server/functions/auth.function'

export const getAuthenticatedUser = cache(async () => {
  const authenticatedUser = await getAuthenticatedSupabaseUser()
  const currentUser = await prisma.users.findFirstOrThrow({
    select: {
      id: true,
      email: true,
      name: true,
      uid: true,
    },
    where: {
      uid: {
        equals: authenticatedUser.id,
      },
    },
  })

  return currentUser as UserModel
})

export const getUserByUid = async (uid: string) => {
  const user = await prisma.users.findFirst({
    select: {
      id: true,
      name: true,
      email: true,
      uid: true,
    },
    where: {
      uid: {
        equals: uid,
      },
    },
    take: 1,
  })

  return user
}

export const createUser = async (user: CreateUserModel) => {
  await prisma.users.create({
    data: user,
  })
}

export const deleteUser = async (userId: number) => {
  await prisma.users.delete({
    where: {
      id: userId,
    },
  })
}
