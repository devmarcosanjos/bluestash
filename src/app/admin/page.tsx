'use client'

import { useState } from 'react'

import { ButtonNewTask, TodoList } from '@/app/admin/_components'
import { TodoContextProvider } from '@/app/admin/_context/todo.context'
import { DatePickerButton } from '@/app/admin/_components/date-picker-button'

export default function Page() {
  const [date, setDate] = useState(new Date())
  const [showNewTask, setShowNewTask] = useState(new Date())

  return (
    <TodoContextProvider>
      <div className='flex flex-col gap-2'>
        <div className='flex items-end justify-between pt-6'>
          <h1 className='text-3xl font-bold leading-[1.875rem]'>TodoList</h1>
          <DatePickerButton value={date} onChange={setDate} />
        </div>
        <TodoList selectedDate={date} />

        <div className='absolute bottom-4 left-0 flex  w-full justify-center overflow-visible'>
          <ButtonNewTask showNewTask={showNewTask} setShowNewTask={setShowNewTask} />
        </div>
      </div>
    </TodoContextProvider>
  )
}
