import type { ApiError, AuthResponse, UserRole } from '../types/auth'

const AUTH_BASE = '/api/auth/user'

async function parseResponse<T>(res: Response): Promise<T> {
  const data = await res.json()
  if (!res.ok) {
    const err = data as ApiError
    throw new Error(err.message || err.error || 'Something went wrong')
  }
  return data as T
}

export async function loginUser(email: string, password: string): Promise<AuthResponse> {
  const res = await fetch(`${AUTH_BASE}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  return parseResponse<AuthResponse>(res)
}

export async function registerUser(payload: {
  name: string
  email: string
  password: string
  role: UserRole
}): Promise<AuthResponse> {
  const res = await fetch(`${AUTH_BASE}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  return parseResponse<AuthResponse>(res)
}
