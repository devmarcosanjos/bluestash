import { ApiTodoModel } from '@/types/models'
import { createTodo } from '@/server/data/todo.data'

export const createTodoFunction = async (todo: ApiTodoModel) => {
  return await createTodo(todo)
}
