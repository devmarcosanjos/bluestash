import 'server-only'

import {cache} from 'react'

import {prisma} from '@/libs/prisma/config'
import {getAuthenticatedUser} from '@/server/functions/auth.function'

export const getUserExample = async () => {
  // perform some operation in the database.
  // Here it will goes prisma/drizzle queries
}

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
