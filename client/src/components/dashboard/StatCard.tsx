type StatCardProps = {
  label: string
  value: string
  icon: string
  trend?: string
  trendUp?: boolean
}

export function StatCard({ label, value, icon, trend, trendUp }: StatCardProps) {
  return (
    <div className="glass-card rounded-2xl p-5 sm:p-6 hover:shadow-glass-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</p>
          <p className="font-display text-2xl sm:text-3xl font-bold text-slate-850 mt-2">{value}</p>
          {trend && (
            <p className={`text-xs font-medium mt-2 ${trendUp ? 'text-emerald-600' : 'text-slate-500'}`}>
              {trend}
            </p>
          )}
        </div>
        <span className="text-2xl sm:text-3xl">{icon}</span>
      </div>
    </div>
  )
}
