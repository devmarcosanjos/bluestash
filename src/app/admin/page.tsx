import { Calendar1Icon } from 'lucide-react'

import { ButtonNewTask, TodoList } from '@/app/admin/_components'

export default function Page() {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex pt-6'>
        <h1 className='flex-grow text-3xl font-bold'>Todo List</h1>
        <button className='btn'>
          <Calendar1Icon size={18} />
          Today
        </button>
      </div>
      <TodoList />
      <ButtonNewTask />
    </div>
  )
}
