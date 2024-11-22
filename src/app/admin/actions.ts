'use server'

import { todoApi } from '@/apis/todo.api'
import { TodoModel } from '@/types/models'
import { getCurrentUser } from '@/server/functions/user.function'

export const createTodoAction = async ({
  name,
  description,
  categoria_id,
  completed,
  start_date,
  priority,
}: Omit<TodoModel, 'id' | 'end_date'>) => {
  const user = await getCurrentUser()

  try {
    const newTodo: TodoModel = {
      userId: user.id,
      name,
      description,
      categoria_id,
      completed,
      start_date,
      priority,
    }

    const createdTodo = await todoApi.createTodo(newTodo)
    console.log('Deu certo')
    return createdTodo
  } catch (error) {
    console.error('Erro ao criar a tarefa:', error)
    throw new Error('Falha ao criar a tarefa.')
  }
}
