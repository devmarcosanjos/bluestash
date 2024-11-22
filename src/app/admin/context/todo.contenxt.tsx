'use client'

import { createContext, useEffect, useState } from 'react'

import { todoApi } from '@/apis/todo.api'
import { TodoModel } from '@/types/models'

export const TodoContext = createContext()

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState<TodoModel[]>([])

  useEffect(() => {
    const getData = async () => {
      try {
        const todos = await todoApi.getAllTodos()
        setTodos(todos)
      } catch (error) {
        return console.error('Erro ao buscar tarefas:', error)
      }
    }
    getData()
  }, [])

  return <TodoContext.Provider value={{ todos, setTodos }}>{children}</TodoContext.Provider>
}

export default TodoContextProvider
