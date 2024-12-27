import { prisma } from '@/libs/prisma/config'

export const getDataTodo = async () => {
  const totalTodos = await prisma.todo.count()

  const completedTodos = await prisma.todo.count({
    where: {
      completed: true,
    },
  })

  const incompletedTodos = await prisma.todo.count({
    where: {
      completed: false,
    },
  })

  const todosMonth = await prisma.todo.findMany({
    where: {
      start_date: {
        gte: new Date(new Date().setDate(new Date().getDate() - 30)),
      },
    },
  })

  const todosWeek = await prisma.todo.findMany({
    where: {
      start_date: {
        gte: new Date(new Date().setDate(new Date().getDate() - 7)),
      },
    },
  })

  const todosDay = await prisma.todo.findMany({
    where: {
      start_date: {
        gte: new Date(new Date().setDate(new Date().getDate() - 1)),
      },
    },
  })

  return {
    totalTodos,
    completedTodos,
    incompletedTodos,
    todosMonth,
    todosWeek,
    todosDay,
  }
}
