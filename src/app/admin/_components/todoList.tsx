'use client'

import { useEffect, useState } from 'react'

import { ClockIcon, EllipsisVerticalIcon } from 'lucide-react'

import { todoApi } from '@/apis/todo.api'
import { TodoModel } from '@/types/models'

export const TodoList = () => {
  const [todos, setTodos] = useState<TodoModel[]>([])

  useEffect(() => {
    const getData = async () => {
      const todos = await todoApi.getAllTodos()
      setTodos(todos)
    }
    getData()
  }, [])

  return (
    <div className='mt-7 flex w-full flex-col gap-2'>
      {todos.map(todo => (
        <div key={todo.id} className='flex items-center gap-2 rounded-lg bg-base-200 p-3'>
          <input type='checkbox' className='checkbox-primary checkbox checkbox-sm' />
          <span className='flex-grow break-all'>{todo.description}</span>
          {todo.start_date && todo.end_date && (
            <div className='flex items-center gap-2'>
              <ClockIcon size={18} />
              <span>{todo.start_date}</span>
              <span>-</span>
              <span>{todo.end_date}</span>
            </div>
          )}
          <button className='btn btn-square btn-sm bg-base-100'>
            <span>
              <EllipsisVerticalIcon size={18} className='text-base-content' />
            </span>
          </button>
        </div>
      ))}
    </div>
  )
}
