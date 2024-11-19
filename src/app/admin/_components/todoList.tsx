'use client'

import { useEffect, useState } from 'react'

import { ClockIcon, EllipsisVerticalIcon } from 'lucide-react'

import { todoApi } from '@/apis/todo.api'
import { TodoModel } from '@/types/models'

interface TodoListProps {
  selectedDate: Date
}

export const TodoList = ({ selectedDate }: TodoListProps) => {
  const [todos, setTodos] = useState<TodoModel[]>([])

  const isToday = (date: string) => {
    const taskDate = new Date(date)
    return (
      selectedDate.getDate() === taskDate.getDate() &&
      selectedDate.getMonth() === taskDate.getMonth() &&
      selectedDate.getFullYear() === taskDate.getFullYear()
    )
  }

  const filteredTodos = todos.filter(todo => todo.start_date && isToday(todo.start_date))

  useEffect(() => {
    const getData = async () => {
      const todos = await todoApi.getAllTodos()
      setTodos(todos)
    }
    getData()
  }, [])

  return (
    <div className='mt-7 flex w-full flex-col gap-2'>
      {filteredTodos.length > 0 ? (
        filteredTodos.map(todo => (
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
        ))
      ) : (
        <p className='text-center'>No tasks for today</p>
      )}
    </div>
  )
}
