'use client'

import {useEffect} from 'react'

import {TodoModel} from '@/types/models'
import {APP_URL} from '@/config/env-client'

export const TodoList = () => {
  const todos = []

  useEffect(() => {
    const getData = async () => {
      const todosResponse = await fetch(`${APP_URL}/api/todo`)
      const todos = (await todosResponse.json()) as TodoModel[]

      console.log({todos})
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
