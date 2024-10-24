'use client'

import {useEffect, useState} from 'react'

import {todoApi} from '@/apis/todo.api'
import {TodoModel} from '@/types/models'

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
