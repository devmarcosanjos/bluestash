import {
  LucideCalendarCheck,
  LucideCheckCheck,
  LucideListChecks,
  LucideSquareStack,
  LucideTally5,
} from 'lucide-react'

import { getDataTodo } from '@/server/data/dashboard.data'
import SummaryCard from '@/app/admin/dashboard/_components/summary-card'

export default async function Page() {
  const { totalTodos, completedTodos, todosMonth, todosWeek, todosDay } = await getDataTodo()
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-end justify-between p-6'>
        <h1 className='text-3xl font-bold leading-[1.875rem]'>Dashboard</h1>
      </div>

      <div className='grid grid-cols-2 gap-6'>
        <SummaryCard value={totalTodos} title='Total de Todos' icon={<LucideListChecks />} />
        <SummaryCard
          value={completedTodos}
          icon={<LucideCheckCheck />}
          title='Total de Todos Completados'
        />
      </div>
      <h1 className='Text-xl font-bold'>Todos Completados</h1>
      <div className='grid grid-cols-3 gap-6'>
        <SummaryCard
          value={todosMonth.length}
          title='Total de Todos Mês'
          icon={<LucideCalendarCheck />}
        />
        <SummaryCard
          icon={<LucideTally5 />}
          value={todosWeek.length}
          title='Total de Todos Semana'
        />
        <SummaryCard
          value={todosDay.length}
          title='Total de Todos Hoje'
          icon={<LucideSquareStack />}
        />
      </div>
    </div>
  )
}
