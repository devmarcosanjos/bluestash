export type HttpResponse<Response = any> = {
  status: number
  body: Response
}

export type HttpMethods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
