import { useForm, UseFormReturn } from 'react-hook-form'
import { createContext, Dispatch, ReactNode, SetStateAction, use, useEffect, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'

import { TodoModel } from '@/types/models'
import {
  PriorityOptions,
  taskSchema,
  TaskSchema,
} from '@/app/admin/_components/button-new-task/schema'

interface Props {
  children: ReactNode
}

interface TodoFormContextProps {
  refetch: () => void
  refetchCount: number
  initialData: TodoModel | undefined
  setInitialData: Dispatch<SetStateAction<TodoModel | undefined>>
  setNewTaskDate: Dispatch<SetStateAction<Date>>
  formHandler: UseFormReturn<Partial<TaskSchema>, any, TaskSchema>
}

const TodoFormContext = createContext<TodoFormContextProps>({} as TodoFormContextProps)

export const TodoFormContextProvider = ({ children }: Props) => {
  const [refetchCount, setRefetchCount] = useState(0)
  const [newTaskDate, setNewTaskDate] = useState<Date>(() => new Date())

  ///
  const minhaFuncao = () => {
    console.log('fui executado BITCH')
  }
  const [_bla, _blabla] = useState<any>(minhaFuncao())
  ///
  const [initialData, setInitialData] = useState<TodoModel | undefined>()

  const mergedValues: Partial<TaskSchema> = {
    task: initialData?.name ?? '',
    list: initialData?.categoria_id.toString() ?? '',
    priority: initialData?.priority as PriorityOptions,
    date: initialData?.start_date ? new Date(initialData?.start_date) : newTaskDate,
    notes: initialData?.description,
  }

  const formHandler = useForm<Partial<TaskSchema>, any, TaskSchema>({
    resolver: zodResolver(taskSchema),
    values: mergedValues,
  })

  const refetch = () => {
    setRefetchCount(prev => prev + 1)
  }

  return (
    <TodoFormContext.Provider
      value={{ refetch, refetchCount, initialData, setInitialData, setNewTaskDate, formHandler }}>
      {children}
    </TodoFormContext.Provider>
  )
}

export const useTodoForm = (newTaskDate?: Date) => {
  const context = use(TodoFormContext)

  useEffect(() => {
    if (newTaskDate) context.setNewTaskDate(newTaskDate)
  }, [context, newTaskDate])

  return { ...context }
}
