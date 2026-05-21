const stats = [
  { value: '50K+', label: 'Happy Patients' },
  { value: '200+', label: 'Expert Doctors' },
  { value: '15+', label: 'Specialties' },
  { value: '4.9', label: 'Avg. Rating' },
]

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-925 via-primary-900 to-primary-800"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl animate-pulse-soft" />
        <div className="absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-accent-sky/15 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-64 w-64 rounded-full bg-primary-400/10 blur-3xl animate-float" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative container-app pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-white/90">Trusted by 50,000+ patients nationwide</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] tracking-tight">
              Book Your Doctor
              <span className="block text-gradient mt-1">Appointment in Minutes</span>
            </h1>

            <p className="mt-6 text-lg text-white/70 max-w-lg leading-relaxed">
              Connect with certified specialists, manage your health records, and get quality care — online or in-person, on your schedule.
            </p>

            <div id="book" className="mt-8 glass rounded-2xl p-4 sm:p-5 max-w-xl">
              <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3">Quick Book</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search doctor, specialty..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary-400/50 text-sm"
                  />
                </div>
                <button
                  type="button"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold text-sm shadow-lg shadow-primary-900/40 hover:from-primary-400 hover:to-primary-500 transition-all whitespace-nowrap"
                >
                  Find & Book
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {['Cardiology', 'Dermatology', 'General'].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-white/10 text-white/70 hover:bg-white/20 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/55 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative glass rounded-3xl p-6 animate-float">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary-600/40 to-slate-800/60 flex items-end overflow-hidden">
                <div className="w-full p-6 bg-gradient-to-t from-slate-925/90 to-transparent">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-14 w-14 rounded-2xl bg-primary-500/30 flex items-center justify-center text-3xl">👨‍⚕️</div>
                    <div>
                      <p className="font-display font-semibold text-white">Dr. Sarah Mitchell</p>
                      <p className="text-sm text-white/60">Cardiologist · 12 yrs exp.</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-medium">Available Today</span>
                    <span className="px-3 py-1 rounded-lg glass text-white/80 text-xs">★ 4.9</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-8 top-1/4 glass-card rounded-2xl p-4 shadow-glass-lg max-w-[200px]">
              <p className="text-xs font-semibold text-primary-700 uppercase">Next Slot</p>
              <p className="font-display font-bold text-slate-850 text-lg mt-1">Today, 2:30 PM</p>
              <p className="text-xs text-slate-500 mt-1">Video Consultation</p>
            </div>

            <div className="absolute -right-4 bottom-1/4 glass-card rounded-2xl p-4 shadow-glass-lg">
              <div className="flex items-center gap-2">
                <span className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-sm">✓</span>
                <div>
                  <p className="text-sm font-semibold text-slate-850">Appointment Confirmed</p>
                  <p className="text-xs text-slate-500">Reminder sent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-primary-50 to-transparent" />
    </section>
  )
}
