import { DashboardLayout } from '../../components/dashboard/DashboardLayout'
import { StatCard } from '../../components/dashboard/StatCard'
import { useAuth } from '../../context/AuthContext'

const navItems = [
  { label: 'Overview', href: '#overview', icon: '📊' },
  { label: 'Users', href: '#users', icon: '👥' },
  { label: 'Doctors', href: '#doctors', icon: '🩺' },
  { label: 'Appointments', href: '#appointments', icon: '📅' },
  { label: 'Settings', href: '#settings', icon: '⚙️' },
]

const recentUsers = [
  { name: 'Maria Gonzalez', email: 'maria@email.com', role: 'user', joined: 'May 18' },
  { name: 'Dr. James Chen', email: 'james@email.com', role: 'doctor', joined: 'May 17' },
  { name: 'Admin User', email: 'admin@email.com', role: 'admin', joined: 'May 15' },
]

const roleStyles: Record<string, string> = {
  user: 'bg-sky-100 text-sky-800',
  doctor: 'bg-emerald-100 text-emerald-800',
  admin: 'bg-violet-100 text-violet-800',
}

export function AdminDashboard() {
  const { user } = useAuth()

  return (
    <DashboardLayout
      title="Admin Control Panel"
      subtitle={`Welcome back, ${user?.name}`}
      navItems={navItems}
      roleLabel="Administrator"
      accentClass="from-violet-500 to-violet-700"
    >
      <div id="overview" className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 mb-8">
        <StatCard label="Total Users" value="1,248" icon="👥" trend="+48 this week" trendUp />
        <StatCard label="Doctors" value="86" icon="🩺" trend="12 pending approval" />
        <StatCard label="Appointments" value="3,420" icon="📅" trend="+156 today" trendUp />
        <StatCard label="Revenue" value="$42K" icon="💰" trend="This month" trendUp />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <section id="users" className="lg:col-span-2 glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display font-semibold text-lg text-slate-850">Recent Registrations</h2>
            <button
              type="button"
              className="px-4 py-2 rounded-xl bg-violet-600 text-white text-sm font-semibold hover:bg-violet-500 transition-colors"
            >
              View All Users
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                  <th className="pb-3 pr-4">Name</th>
                  <th className="pb-3 pr-4">Email</th>
                  <th className="pb-3 pr-4">Role</th>
                  <th className="pb-3">Joined</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentUsers.map((u) => (
                  <tr key={u.email} className="hover:bg-slate-50/80">
                    <td className="py-3.5 pr-4 font-medium text-slate-850">{u.name}</td>
                    <td className="py-3.5 pr-4 text-slate-600">{u.email}</td>
                    <td className="py-3.5 pr-4">
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold capitalize ${roleStyles[u.role]}`}>
                        {u.role}
                      </span>
                    </td>
                    <td className="py-3.5 text-slate-500">{u.joined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-6">
          <div id="doctors" className="glass-card rounded-2xl p-6">
            <h2 className="font-display font-semibold text-lg text-slate-850 mb-4">System Health</h2>
            <div className="space-y-4">
              {[
                { label: 'API Server', status: 'Online', ok: true },
                { label: 'Database', status: 'Connected', ok: true },
                { label: 'Auth Service', status: 'Active', ok: true },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">{item.label}</span>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${
                      item.ok ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h2 className="font-display font-semibold text-lg text-slate-850 mb-4">Quick Admin Actions</h2>
            <div className="space-y-2">
              {['Approve Doctors', 'Manage Users', 'View Reports', 'Platform Settings'].map((action) => (
                <button
                  key={action}
                  type="button"
                  className="w-full px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-violet-50 hover:text-violet-800 transition-colors text-left border border-slate-100"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  )
}
