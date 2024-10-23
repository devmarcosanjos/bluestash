import 'server-only'

import {cache} from 'react'

import {prisma} from '@/libs/prisma/config'
import {CreateUserModel} from '@/types/models'
import {getAuthenticatedUser} from '@/server/functions/auth.function'

export const getCurrentUser = cache(async () => {
  const authenticatedUser = await getAuthenticatedUser()

  const currentUser = await prisma.users.findFirst({
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

  return currentUser
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
