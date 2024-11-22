'use server'

import { TaskSchema } from '@/app/admin/_components'
import { getCurrentUser } from '@/server/functions/user.function'
import { createTodoFunction } from '@/server/functions/todo.function'

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

    console.log('Deu certo')
    return createdTodo
  } catch (error) {
    console.error('Erro ao criar a tarefa:', error)
    throw new Error('Falha ao criar a tarefa.')
  }
}
