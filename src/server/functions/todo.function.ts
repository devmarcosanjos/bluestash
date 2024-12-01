import { ApiTodoModel, CreateTodoModel } from '@/types/models'
import { createTodo, updateTodo } from '@/server/data/todo.data'

export const createTodoFunction = async (todo: ApiTodoModel) => {
  return await createTodo(todo)
}

export const updateTodoFunction = async (todo: CreateTodoModel) => {
  return await updateTodo(todo)
}
