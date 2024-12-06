import { prisma } from '@/libs/prisma/config'
import { ApiTodoModel, CreateTodoModel } from '@/types/models'

export const getAllTodosByUserId = async (userId: number) => {
  const todos = await prisma.todo.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      start_date: true,
      categoria_id: true,
      completed: true,
      priority: true,
    },
    where: {
      user_id: {
        equals: userId,
      },
    },
  })

  return todos
}

export const createTodo = (data: ApiTodoModel) => {
  return prisma.todo.create({
    data: data,
  })
}

export const updateTodo = (data: CreateTodoModel) => {
  try {
    return prisma.todo.update({
      where: {
        id: data.id,
      },
      data,
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteTodo = (data: CreateTodoModel) => {
  try {
    return prisma.todo.delete({
      where: {
        id: data.id,
      },
    })
  } catch (error) {
    console.log(error)
  }
}
