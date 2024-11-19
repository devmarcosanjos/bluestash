import { TodoModel } from '@/types/models'
import { APP_URL } from '@/config/env-client'
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
}

export const todoApi = new TodoApi()
