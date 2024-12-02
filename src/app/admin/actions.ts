'use server'

import { revalidatePath } from 'next/cache'

import { CreateTodoModel } from '@/types/models'
import { getCurrentUser } from '@/server/functions/user.function'
import { TaskSchema } from '@/app/admin/_components/button-new-task/schema'
import {
  createTodoFunction,
  deleteTodoFunction,
  updateTodoFunction,
} from '@/server/functions/todo.function'

export const createTodoAction = async ({ date, list, notes, priority, task }: TaskSchema) => {
  const user = await getCurrentUser()

  try {
    const createdTodo = await createTodoFunction({
      start_date: date,
      categoria_id: Number(list),
      description: notes || '',
      priority,
      name: task,
      user_id: user.id,
    })

    await revalidatePath('/admin')
    return createdTodo
  } catch (error) {
    console.error('Erro ao criar a tarefa:', error)
    throw new Error('Falha ao criar a tarefa.')
  }
}
export const updateTodoAction = async (todo: CreateTodoModel) => {
  try {
    const updateTodo = await updateTodoFunction(todo)

    return updateTodo
  } catch (error) {
    console.error('Erro ao atualizar a tarefa:', error)
    throw new Error('Falha ao atualizar a tarefa.')
  }
}

export const deleteTodoAction = async (todo: CreateTodoModel) => {
  try {
    const deleteTodo = await deleteTodoFunction(todo)

    return deleteTodo
  } catch (error) {
    console.error('Erro ao deletar a tarefa', error)
    throw new Error('Falha ao deletar a tarefa')
  }
}
