export type UserRole = 'admin' | 'doctor' | 'user'

export type User = {
  _id: string
  name: string
  email: string
  role: UserRole
  createdAt?: string
  updatedAt?: string
}

export type AuthResponse = {
  message: string
  user: User
  token: string
}

export type ApiError = {
  message?: string
  error?: string
}
