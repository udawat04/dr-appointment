import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import type { UserRole } from '../../types/auth'
import { getDashboardPath } from '../../utils/auth'

type ProtectedRouteProps = {
  children: React.ReactNode
  allowedRole: UserRole
}

export function ProtectedRoute({ children, allowedRole }: ProtectedRouteProps) {
  const { user, isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary-50">
        <div className="glass-card rounded-2xl px-8 py-6 flex items-center gap-3">
          <span className="h-5 w-5 border-2 border-primary-600 border-t-transparent rounded-full animate-spin" />
          <span className="text-slate-600 font-medium">Loading...</span>
        </div>
      </div>
    )
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />
  }

  if (user.role !== allowedRole) {
    return <Navigate to={getDashboardPath(user.role)} replace />
  }

  return <>{children}</>
}
