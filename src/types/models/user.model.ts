export interface UserModel {
  id: number
  uid: string
  name: string
  email: string
}

export interface CreateUserModel {
  id?: number
  uid: string
  name: string | null
  email: string
}
