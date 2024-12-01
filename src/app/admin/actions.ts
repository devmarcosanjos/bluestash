'use server'

import { revalidatePath } from 'next/cache'

import { TodoModel } from '@/types/models'
import { TaskSchema } from '@/app/admin/_components'
import { getCurrentUser } from '@/server/functions/user.function'
import { createTodoFunction, updateTodoFunction } from '@/server/functions/todo.function'

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
export const updateTodoAction = async (todo: TodoModel) => {
  try {
    const updateTodo = await updateTodoFunction(todo)

    await revalidatePath('/admin')
    return updateTodo
  } catch (error) {
    console.error('Erro ao atualizar a tarefa:', error)
    throw new Error('Falha ao atualizar a tarefa.')
  }
}
