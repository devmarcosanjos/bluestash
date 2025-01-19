import { ApiTodoModel, CreateTodoModel } from '@/types/models'
import { createTodo, deleteAllUsersTodos, deleteTodo, updateTodo } from '@/server/data/todo.data'

export const createTodoFunction = async (todo: ApiTodoModel) => {
  return await createTodo(todo)
}

export const updateTodoFunction = async (todo: CreateTodoModel) => {
  return await updateTodo(todo)
}

export const deleteTodoFunction = async (todo: CreateTodoModel) => {
  return await deleteTodo(todo)
}

export const deleteAllTodosFromUserFunction = async (userId: number) => {
  return await deleteAllUsersTodos(userId)
}
