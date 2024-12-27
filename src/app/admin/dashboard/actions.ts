'use server'

import { getDataTodo } from '@/server/data/dashboard.data'

export const dataDashboardAction = async () => {
  // TODO
  return await getDataTodo()
}
