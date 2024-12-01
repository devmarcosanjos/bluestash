import { useForm, UseFormReturn } from 'react-hook-form'
import { createContext, Dispatch, ReactNode, SetStateAction, use, useEffect, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'

import { CreateTodoModel } from '@/types/models'
import { taskSchema, TaskSchema } from '@/app/admin/_components/button-new-task/schema'

interface Props {
  children: ReactNode
}

interface TodoFormContextProps {
  refetch: () => void
  refetchCount: number
  formData: CreateTodoModel | undefined
  setFormData: Dispatch<SetStateAction<CreateTodoModel | undefined>>
  setNewTaskDate: Dispatch<SetStateAction<Date | undefined>>
  formHandler: UseFormReturn<Partial<TaskSchema>, any, TaskSchema>
}

const TodoFormContext = createContext<TodoFormContextProps>({} as TodoFormContextProps)

export const TodoFormContextProvider = ({ children }: Props) => {
  const [refetchCount, setRefetchCount] = useState(0)
  const [formData, setFormData] = useState<CreateTodoModel | undefined>()
  const [newTaskDate, setNewTaskDate] = useState<Date | undefined>()

  const formHandler = useForm<Partial<TaskSchema>, any, TaskSchema>({
    resolver: zodResolver(taskSchema),
    values: {
      date: newTaskDate,
    },
  })
  const refetch = () => {
    setRefetchCount(prev => prev + 1)
  }

  return (
    <TodoFormContext.Provider
      value={{ refetch, refetchCount, formData, setFormData, setNewTaskDate, formHandler }}>
      {children}
    </TodoFormContext.Provider>
  )
}

export const useTodoForm = (newTaskDate?: Date) => {
  const context = use(TodoFormContext)

  useEffect(() => {
    context.setNewTaskDate(newTaskDate)
  }, [context, newTaskDate])

  return { ...context }
}
