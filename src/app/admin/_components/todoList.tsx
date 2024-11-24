'use client'

import { ClockIcon, EllipsisVerticalIcon, PenIcon, Trash2Icon } from 'lucide-react'

interface TodoListProps {
  _selectedDate: Date
  _selectedCategory?: number
}

export const TodoList = ({ _selectedDate, _selectedCategory }: TodoListProps) => {
  const filteredTodos = [] as any
  // console.log('todos:', todos)

  // const isToday = (date: string) => {
  //   const taskDate = new Date(date)
  //   return (
  //     selectedDate.getDate() === taskDate.getDate() &&
  //     selectedDate.getMonth() === taskDate.getMonth() &&
  //     selectedDate.getFullYear() === taskDate.getFullYear()
  //   )
  // }

  // const filteredTodos = todos.filter(todo => {
  //   const matchDate = todo.start_date && isToday(todo.start_date)
  //   const matchCategory = !selectedCategory || todo.categoria_id === selectedCategory.toString()

  //   return matchDate && matchCategory
  // })

  return (
    <div className='mt-7 flex w-full flex-col gap-2'>
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo: any) => (
          <div key={todo.id} className='flex items-center gap-2 rounded-lg bg-base-200 p-3'>
            <input type='checkbox' className='checkbox-primary checkbox checkbox-sm' />
            <span className='flex-grow break-all'>{todo.name}</span>
            {todo.start_date && todo.end_date && (
              <div className='flex items-center gap-2'>
                <ClockIcon size={18} />
                <span>{todo.start_date}</span>
                <span>-</span>
                <span>{todo.end_date}</span>
              </div>
            )}
            <button className='btn btn-square btn-sm bg-base-100'>
              <div className='dropdown dropdown-end'>
                <div tabIndex={0} role='button' className='flex items-center hover:cursor-pointer'>
                  <EllipsisVerticalIcon size={18} className='text-base-content' />
                </div>
                <ul
                  tabIndex={0}
                  className='menu dropdown-content z-[1] w-52 rounded-box bg-base-100  p-2 shadow'>
                  <li>
                    <button className='text-base-content'>
                      <PenIcon size={18} />
                      Editar
                    </button>
                  </li>
                  <li>
                    <button className='text-error'>
                      <Trash2Icon size={18} />
                      Deletar
                    </button>
                  </li>
                </ul>
              </div>
            </button>
          </div>
        ))
      ) : (
        <p className='text-center'>No tasks for today</p>
      )}
    </div>
  )
}
