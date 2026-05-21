import type { UserRole } from '../types/auth'

export const TOKEN_KEY = 'medibook_token'
export const USER_KEY = 'medibook_user'

export function getDashboardPath(role: UserRole): string {
  switch (role) {
    case 'admin':
      return '/dashboard/admin'
    case 'doctor':
      return '/dashboard/doctor'
    case 'user':
    default:
      return '/dashboard/user'
  }
}
