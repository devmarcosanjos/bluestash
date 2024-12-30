'use client'

import { useEffect, useState } from 'react'

import {
  LucideCalendarCheck,
  LucideCheck,
  LucideCheckCheck,
  LucideListChecks,
  LucideLoader,
  LucideSquareStack,
  LucideTally5,
} from 'lucide-react'

import { dataDashboardAction } from '@/app/admin/dashboard/actions'
import SummaryCard from '@/app/admin/dashboard/_components/summary-card'
import { DashboardDataType } from '@/server/functions/dashboard.function'

export default function Page() {
  const [dashboardData, setDashboardData] = useState<DashboardDataType>({
    totalTodos: 0,
    completedTodos: 0,
    incompletedTodos: 0,
    todosMonth: [],
    todosWeek: [],
    todosDay: [],
  })

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await dataDashboardAction()
        setDashboardData(response)
      } catch (error) {
        console.error('Erro carregar os dados', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  const { totalTodos, completedTodos, incompletedTodos, todosMonth, todosWeek, todosDay } =
    dashboardData

  const completionRate = (completedTodos / totalTodos) * 100

  if (isLoading) {
    return <p>Carregando...</p>
  }

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-end justify-between p-6'>
        <h1 className='text-3xl font-bold leading-[1.875rem]'>Dashboard</h1>
      </div>

      <div className='grid grid-cols-2 gap-6'>
        <SummaryCard
          title='Total de Todos'
          icon={<LucideListChecks />}
          value={totalTodos.toString()}
        />
        <SummaryCard
          icon={<LucideCheckCheck />}
          value={completedTodos.toString()}
          title='Total de Todos Completados'
        />
      </div>
      <div className='grid grid-cols-3 gap-6'>
        <SummaryCard
          title='Total de Todos Mês'
          icon={<LucideCalendarCheck />}
          value={todosMonth.length.toString()}
        />
        <SummaryCard
          icon={<LucideTally5 />}
          title='Total de Todos Semana'
          value={todosWeek.length.toString()}
        />
        <SummaryCard
          title='Total de Todos Hoje'
          icon={<LucideSquareStack />}
          value={todosDay.length.toString()}
        />
      </div>
      <div className='grid grid-cols-2 gap-6'>
        <SummaryCard
          icon={<LucideLoader />}
          title='Tarefas Pendentes'
          value={incompletedTodos.toString()}
        />
        <SummaryCard
          icon={<LucideCheck />}
          title='Taxa de Conclusão'
          value={`${completionRate.toFixed(2)}%`}
        />
      </div>
    </div>
  )
}
