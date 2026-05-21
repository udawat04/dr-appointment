import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type AuthLayoutProps = {
  children: ReactNode
  title: string
  subtitle: string
  footerText: string
  footerLink: string
  footerLinkLabel: string
}

export function AuthLayout({
  children,
  title,
  subtitle,
  footerText,
  footerLink,
  footerLinkLabel,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-925 via-primary-900 to-primary-800 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent-sky/15 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <Link to="/" className="flex items-center justify-center gap-2.5 mb-8">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-glow">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </span>
          <span className="font-display font-bold text-xl text-white">
            Medi<span className="text-primary-300">Book</span>
          </span>
        </Link>

        <div className="glass rounded-3xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <h1 className="font-display text-2xl font-bold text-white">{title}</h1>
            <p className="text-white/60 text-sm mt-1">{subtitle}</p>
          </div>

          {children}

          <p className="text-center text-sm text-white/60 mt-6">
            {footerText}{' '}
            <Link to={footerLink} className="text-primary-300 font-semibold hover:text-primary-200">
              {footerLinkLabel}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
