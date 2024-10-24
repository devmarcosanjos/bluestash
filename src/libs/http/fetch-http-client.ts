import {HttpMethods, HttpResponse} from './types'

export class FetchHttpClient {
  private token: string = ''

  constructor(
    private basePath: string,
    token?: string,
  ) {
    if (token) this.token = token
  }

  public setToken(token: string) {
    this.token = token
  }

  private async request<T = any>(
    path: string,
    method: HttpMethods,
    body?: any,
    headers?: any,
  ): Promise<HttpResponse<T>> {
    const response = await fetch(`${this.basePath}${path}`, {
      method: method,
      body: JSON.stringify(body),
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': this.token ? `Bearer ${this.token}` : '',
        ...headers,
      },
    })

    if (!response.ok) {
      throw await response.json()
    }

    return await this.adaptResponse<T>(response)
  }

  private async adaptResponse<T>(response: Response): Promise<HttpResponse<T>> {
    const json = await response.json()
    return {
      status: response.status,
      body: json as T,
    }
  }

  public async get<T = any>(path: string, headers?: any) {
    return await this.request<T>(path, 'GET', undefined, headers)
  }
  public async post<T = any>(path: string, body?: any, headers?: any) {
    return await this.request<T>(path, 'POST', body, headers)
  }
  public async put<T = any>(path: string, body?: any, headers?: any) {
    return await this.request<T>(path, 'PUT', body, headers)
  }
  public async patch<T = any>(path: string, body?: any, headers?: any) {
    return await this.request<T>(path, 'PATCH', body, headers)
  }
  public async delete<T = any>(path: string, headers?: any) {
    return await this.request<T>(path, 'DELETE', undefined, headers)
  }
}
