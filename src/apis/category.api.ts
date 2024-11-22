import { APP_URL } from '@/config/env-client'
import { CategoryModel } from '@/types/models/category.model'
import { FetchHttpClient } from '@/libs/http/fetch-http-client'

class CategoryApi {
  private httpClient: FetchHttpClient
  constructor() {
    this.httpClient = new FetchHttpClient(`${APP_URL}/api`)
  }

  async getAllCategory() {
    const { body } = await this.httpClient.get<CategoryModel[]>('/category')
    return body
  }
}

export const categoryApi = new CategoryApi()
