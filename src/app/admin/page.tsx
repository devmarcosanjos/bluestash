'use client'

import { useState } from 'react'

import { ClockIcon, EllipsisVerticalIcon } from 'lucide-react'

import { ButtonNewTask, TodoList } from '@/app/admin/_components'
import { DatePickerButton } from '@/app/admin/_components/date-picker-button'

export default function Page() {
  const [date, setDate] = useState(new Date())
  return (
    <div className='flex min-h-screen flex-col gap-2'>
      <div className='flex items-end justify-between pt-6'>
        <h1 className='text-3xl font-bold leading-[1.875rem]'>TodoList</h1>

        <DatePickerButton value={date} onChange={setDate} />
      </div>
      <TodoList />

      <div className='flex items-center gap-2 rounded-lg bg-base-200 p-3'>
        <input type='checkbox' className='checkbox-primary checkbox checkbox-sm' />
        <span className='flex-grow'>Texto ....</span>
        <div className='flex items-center gap-2'>
          <ClockIcon size={18} />
          <span>08:00</span>
          <span>-</span>
          <span>09-00</span>
        </div>
        <button className='btn btn-square btn-sm bg-base-100'>
          <span>
            <EllipsisVerticalIcon size={18} className='text-base-content' />
          </span>
        </button>
      </div>

      <div className='fixed bottom-4 right-4'>
        <ButtonNewTask />
      </div>
    </div>
  )
}
