'use server'

import { getDataTodo } from '@/server/data/dashboard.data'

export type DashboardDataType = {
  totalTodos: number
  completedTodos: number
  incompletedTodos: number
  todosMonth: any[] // Substitua 'any' por um tipo específico
  todosWeek: any[]
  todosDay: any[]
}

export const dataDashboardAction = async (): Promise<DashboardDataType> => {
  try {
    const data = await getDataTodo()
    return data
  } catch (error) {
    console.error('Erro ao carregar os dados', error)
    return {
      totalTodos: 0,
      completedTodos: 0,
      incompletedTodos: 0,
      todosMonth: [],
      todosWeek: [],
      todosDay: [],
    }
  }
}
