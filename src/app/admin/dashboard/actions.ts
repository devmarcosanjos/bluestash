'use server'

import { DashboardDataType, fetchDashboardData } from '@/server/functions/dashboard.function'

export const dataDashboardAction = async (): Promise<DashboardDataType> => {
  try {
    return await fetchDashboardData()
  } catch (error) {
    console.error('Erro ao carregar os dados no action:', error)
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
