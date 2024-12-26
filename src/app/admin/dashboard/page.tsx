'use client'

import {
  LucideCalendarCheck,
  LucideCheckCheck,
  LucideListChecks,
  LucideSquareStack,
  LucideTally5,
} from 'lucide-react'

import SummaryCard from '@/app/admin/dashboard/_components/summary-card'
import { TodoFormContextProvider } from '@/app/admin/_context/todo.context'

export default function Page() {
  return (
    <TodoFormContextProvider>
      <div className='flex flex-col gap-2'>
        <div className='flex items-end justify-between p-6'>
          <h1 className='text-3xl font-bold leading-[1.875rem]'>Dashboard</h1>
        </div>

        <div className='grid grid-cols-2 gap-6'>
          <SummaryCard value='278' title='Total de Todos' icon={<LucideListChecks />} />
          <SummaryCard value='99' icon={<LucideCheckCheck />} title='Total de Todos Completados' />
        </div>
        <h1 className='Text-xl font-bold'>Todos Completados</h1>
        <div className='grid grid-cols-3 gap-6'>
          <SummaryCard value='34' title='Total de Todos Mês' icon={<LucideCalendarCheck />} />
          <SummaryCard value='10' icon={<LucideTally5 />} title='Total de Todos Semana' />
          <SummaryCard value='1' title='Total de Todos Hoje' icon={<LucideSquareStack />} />
        </div>
      </div>
    </TodoFormContextProvider>
  )
}
