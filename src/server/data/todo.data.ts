import { prisma } from '@/libs/prisma/config'

export const getAllTodosByUserId = async (userId: number) => {
  const todos = await prisma.todo.findMany({
    select: {
      id: true,
      name: true,
      description: true,
    },
    where: {
      userId: {
        equals: userId,
      },
    },
  })

  return todos
}
