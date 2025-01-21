'use server'

import { getCurrentUser } from '@/server/functions/user.function'
import { DashboardDataType } from '@/server/functions/dashboard.function'
import { getShowAllTodosFunction } from '@/server/functions/todo.function'

export const dataDashboardAction = async (): Promise<DashboardDataType> => {
  const user = await getCurrentUser()
  try {
    // return await fetchDashboardData(user.id)
    const todos = await getShowAllTodosFunction(user.id)
    if (!todos) {
      throw new Error('Todos data is undefined')
    }
    return {
      totalTodos: todos.length,
      completedTodos: todos.filter(todo => todo.completed).length,
      incompletedTodos: todos.filter(todo => !todo.completed).length,
      todosMonth: todos, // Adjust this according to your actual data structure
      todosWeek: todos, // Adjust this according to your actual data structure
      todosDay: todos, // Adjust this according to your actual data structure
    }
  } catch (error) {
    console.error('Error fetching dashboard data:', error)
    throw error
  }
}
