import { createContext, ReactNode, use, useState } from 'react'

interface Props {
  children: ReactNode
}

interface TodoContextProps {
  refetch: () => void
  refetchCount: number
}

const TodoContext = createContext<TodoContextProps>({} as TodoContextProps)

export const TodoContextProvider = ({ children }: Props) => {
  const [refetchCount, setRefetchCount] = useState(0)

  const refetch = () => {
    setRefetchCount(prev => prev + 1)
  }

  return <TodoContext.Provider value={{ refetch, refetchCount }}>{children}</TodoContext.Provider>
}

export const useTodo = () => {
  return use(TodoContext)
}
