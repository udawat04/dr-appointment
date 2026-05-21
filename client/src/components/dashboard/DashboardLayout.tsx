import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import type { UserRole } from '../../types/auth'

type NavItem = { label: string; href: string; icon: string }

type DashboardLayoutProps = {
  children: React.ReactNode
  title: string
  subtitle?: string
  navItems: NavItem[]
  roleLabel: string
  accentClass?: string
}

export function DashboardLayout({
  children,
  title,
  subtitle,
  navItems,
  roleLabel,
  accentClass = 'from-primary-500 to-primary-700',
}: DashboardLayoutProps) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  const roleBadge: Record<UserRole, string> = {
    user: 'bg-sky-100 text-sky-800',
    doctor: 'bg-emerald-100 text-emerald-800',
    admin: 'bg-violet-100 text-violet-800',
  }

  return (
    <div className="min-h-screen bg-primary-50 flex">
      <aside className="hidden lg:flex w-64 flex-col glass-card border-r border-white/80 fixed inset-y-0 left-0 z-40">
        <div className="p-6 border-b border-slate-200/80">
          <Link to="/" className="flex items-center gap-2.5">
            <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accentClass} text-white text-sm font-bold`}>
              MB
            </span>
            <span className="font-display font-bold text-slate-850">
              Medi<span className="text-primary-600">Book</span>
            </span>
          </Link>
          <span className={`inline-block mt-3 px-2.5 py-1 rounded-lg text-xs font-semibold ${user ? roleBadge[user.role] : ''}`}>
            {roleLabel}
          </span>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-primary-50 hover:text-primary-800 transition-colors"
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-200/80">
          <div className="flex items-center gap-3 px-2 mb-3">
            <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${accentClass} flex items-center justify-center text-white font-display font-bold`}>
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-850 truncate">{user?.name}</p>
              <p className="text-xs text-slate-500 truncate">{user?.email}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="w-full py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </aside>

      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        <header className="sticky top-0 z-30 glass-card border-b border-white/80 px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-xl sm:text-2xl font-bold text-slate-850">{title}</h1>
            {subtitle && <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-slate-600 hover:text-primary-700 rounded-xl hover:bg-primary-50 transition-colors"
            >
              Home
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="lg:hidden px-4 py-2 text-sm font-medium text-red-600 rounded-xl hover:bg-red-50"
            >
              Logout
            </button>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
