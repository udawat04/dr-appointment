import { DashboardLayout } from '../../components/dashboard/DashboardLayout'
import { StatCard } from '../../components/dashboard/StatCard'
import { useAuth } from '../../context/AuthContext'

const navItems = [
  { label: 'Overview', href: '#overview', icon: '📊' },
  { label: "Today's Schedule", href: '#schedule', icon: '📅' },
  { label: 'Patients', href: '#patients', icon: '👥' },
  { label: 'Availability', href: '#availability', icon: '⏰' },
]

const todaySchedule = [
  { patient: 'Maria Gonzalez', time: '9:00 AM', type: 'Follow-up', status: 'confirmed' },
  { patient: 'David Thompson', time: '10:30 AM', type: 'New patient', status: 'confirmed' },
  { patient: 'Priya Sharma', time: '2:00 PM', type: 'Video consult', status: 'pending' },
  { patient: 'James Wilson', time: '3:30 PM', type: 'Check-up', status: 'confirmed' },
]

export function DoctorDashboard() {
  const { user } = useAuth()

  return (
    <DashboardLayout
      title={`Dr. ${user?.name?.split(' ').slice(-1)[0] ?? user?.name}`}
      subtitle="Manage your schedule and patient consultations"
      navItems={navItems}
      roleLabel="Doctor Dashboard"
      accentClass="from-emerald-500 to-emerald-700"
    >
      <div id="overview" className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 mb-8">
        <StatCard label="Today" value="8" icon="📅" trend="4 remaining" trendUp />
        <StatCard label="Patients" value="156" icon="👥" trend="+12 this month" trendUp />
        <StatCard label="Rating" value="4.9" icon="⭐" trend="Based on 89 reviews" trendUp />
        <StatCard label="Pending" value="3" icon="⏳" trend="Awaiting confirmation" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <section id="schedule" className="lg:col-span-2 glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display font-semibold text-lg text-slate-850">Today&apos;s Schedule</h2>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
              May 20, 2026
            </span>
          </div>
          <div className="space-y-3">
            {todaySchedule.map((slot) => (
              <div
                key={slot.time + slot.patient}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-emerald-50/60 border border-emerald-100"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-emerald-600/10 flex items-center justify-center font-display font-bold text-emerald-700 text-sm">
                    {slot.time.replace(' AM', '').replace(' PM', '')}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-850">{slot.patient}</p>
                    <p className="text-sm text-slate-500">{slot.type}</p>
                  </div>
                </div>
                <span
                  className={`self-start sm:self-center px-3 py-1 rounded-lg text-xs font-semibold capitalize ${
                    slot.status === 'confirmed'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {slot.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="glass-card rounded-2xl p-6">
            <h2 className="font-display font-semibold text-lg text-slate-850 mb-4">Availability</h2>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Morning slots</span>
                <span className="font-semibold text-emerald-700">4 open</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Afternoon slots</span>
                <span className="font-semibold text-emerald-700">2 open</span>
              </div>
              <button
                type="button"
                className="w-full mt-2 py-2.5 rounded-xl border border-emerald-200 text-emerald-700 text-sm font-semibold hover:bg-emerald-50 transition-colors"
              >
                Edit Schedule
              </button>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 bg-gradient-to-br from-emerald-600 to-primary-800 text-white">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/70">Profile Status</p>
            <p className="font-display font-bold text-xl mt-2">Active & Verified</p>
            <p className="text-sm text-white/75 mt-2 leading-relaxed">
              Your profile is visible to patients. Keep availability updated.
            </p>
          </div>
        </section>
      </div>
    </DashboardLayout>
  )
}
