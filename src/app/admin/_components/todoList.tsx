'use client'

import { useEffect, useState } from 'react'

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
    <div className='flex w-full '>
      <table className='table w-full'>
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Descrição</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {todos.map(todo => (
            <tr key={todo.id} className='bg-base-100'>
              <th>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </th>
              <td className='font-bold'>{todo.name}</td>
              <td className='break-all'>{todo.description}</td>
              <th>
                <button className='btn btn-ghost btn-xs'>details</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
