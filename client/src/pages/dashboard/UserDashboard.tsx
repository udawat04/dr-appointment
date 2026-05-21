import { DashboardLayout } from '../../components/dashboard/DashboardLayout'
import { StatCard } from '../../components/dashboard/StatCard'
import { useAuth } from '../../context/AuthContext'

const navItems = [
  { label: 'Overview', href: '#overview', icon: '📊' },
  { label: 'Appointments', href: '#appointments', icon: '📅' },
  { label: 'Health Records', href: '#records', icon: '📋' },
  { label: 'Prescriptions', href: '#prescriptions', icon: '💊' },
]

const upcomingAppointments = [
  { doctor: 'Dr. Sarah Mitchell', specialty: 'Cardiology', date: 'May 22, 2026', time: '10:30 AM', type: 'In-person' },
  { doctor: 'Dr. James Chen', specialty: 'Dermatology', date: 'May 28, 2026', time: '2:00 PM', type: 'Video' },
]

export function UserDashboard() {
  const { user } = useAuth()

  return (
    <DashboardLayout
      title={`Hello, ${user?.name?.split(' ')[0] ?? 'there'}!`}
      subtitle="Manage your appointments and health records"
      navItems={navItems}
      roleLabel="Patient Dashboard"
      accentClass="from-sky-500 to-sky-700"
    >
      <div id="overview" className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 mb-8">
        <StatCard label="Upcoming" value="2" icon="📅" trend="Next visit in 2 days" trendUp />
        <StatCard label="Completed" value="12" icon="✅" trend="All time visits" />
        <StatCard label="Prescriptions" value="5" icon="💊" trend="2 active" trendUp />
        <StatCard label="Lab Reports" value="3" icon="🔬" trend="1 pending review" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <section id="appointments" className="lg:col-span-2 glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display font-semibold text-lg text-slate-850">Upcoming Appointments</h2>
            <button
              type="button"
              className="px-4 py-2 rounded-xl bg-primary-600 text-white text-sm font-semibold hover:bg-primary-500 transition-colors"
            >
              Book New
            </button>
          </div>
          <div className="space-y-3">
            {upcomingAppointments.map((apt) => (
              <div
                key={apt.date + apt.time}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-primary-50/80 border border-primary-100"
              >
                <div>
                  <p className="font-semibold text-slate-850">{apt.doctor}</p>
                  <p className="text-sm text-primary-700">{apt.specialty}</p>
                  <p className="text-xs text-slate-500 mt-1">
                    {apt.date} · {apt.time}
                  </p>
                </div>
                <span className="self-start sm:self-center px-3 py-1 rounded-lg bg-white text-xs font-semibold text-slate-600 border border-slate-200">
                  {apt.type}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card rounded-2xl p-6">
          <h2 className="font-display font-semibold text-lg text-slate-850 mb-4">Quick Actions</h2>
          <div className="space-y-2">
            {[
              { label: 'Find a Doctor', icon: '🔍' },
              { label: 'Video Consultation', icon: '📹' },
              { label: 'Download Records', icon: '⬇️' },
              { label: 'Contact Support', icon: '💬' },
            ].map((action) => (
              <button
                key={action.label}
                type="button"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-primary-50 transition-colors text-left"
              >
                <span>{action.icon}</span>
                {action.label}
              </button>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 text-white">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/70">Health Tip</p>
            <p className="text-sm mt-2 leading-relaxed">
              Stay hydrated and schedule your annual check-up for preventive care.
            </p>
          </div>
        </section>
      </div>
    </DashboardLayout>
  )
}
