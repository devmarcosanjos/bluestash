import { getDataTodo } from '@/server/data/dashboard.data'

export type DashboardDataType = {
  totalTodos: number
  completedTodos: number
  incompletedTodos: number
  todosMonth: any[]
  todosWeek: any[]
  todosDay: any[]
}

export const fetchDashboardData = async (): Promise<DashboardDataType> => {
  try {
    const data = await getDataTodo()

    return {
      ...data,
    }
  } catch (error) {
    console.error('Erro ao processar os dados do dashboard:', error)
    throw new Error('Não foi possível carregar os dados do dashboard.')
  }
}
