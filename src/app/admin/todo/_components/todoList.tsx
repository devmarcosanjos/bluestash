'use client'

import {useEffect, useState} from 'react'

import {TodoModel} from '@/types/models'
import {APP_URL} from '@/config/env-client'

export const TodoList = () => {
  // component => bussiness layer (functions) => data => database
  const [todos, setTodos] = useState<TodoModel[]>([])

  useEffect(() => {
    const getData = async () => {
      const todosResponse = await fetch(`${APP_URL}/api/todo`)
      const todos = (await todosResponse.json()) as TodoModel[]
      setTodos(todos)
    }

    getData()
  }, [])

  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {todos.map(todo => (
            <tr key={todo.id} className='bg-base-200'>
              <th>{todo.id}</th>
              <td>{todo.name}</td>
              <td>{todo.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
