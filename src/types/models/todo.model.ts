export interface TodoModel {
  id: number
  name: string
  description: string
  priority: string
  completed: boolean
  start_date: string
  end_date: string
  categoria_id: string
  user_id: number
}

export interface CreateTodoModel {
  id?: number
  name: string
  description: string
  priority: string
  completed?: boolean
  start_date: Date
  categoria_id: number
  user_id?: number
}

export interface ApiTodoModel {
  name: string
  description: string
  priority: string
  completed?: boolean
  start_date: Date
  categoria_id: number
  user_id: number
}
