import { APP_URL } from '@/config/env-client'
import { CreateTodoModel, TodoModel } from '@/types/models'
import { FetchHttpClient } from '@/libs/http/fetch-http-client'

class TodoApi {
  private httpClient: FetchHttpClient
  constructor() {
    this.httpClient = new FetchHttpClient(`${APP_URL}/api`)
  }

  async getAllTodos() {
    const { body } = await this.httpClient.get<TodoModel[]>('/todo')
    return body
  }

  async createTodo(todo: CreateTodoModel) {
    const { body } = await this.httpClient.post<TodoModel[]>('/todo', todo)
    return body
  }
}

export const todoApi = new TodoApi()
