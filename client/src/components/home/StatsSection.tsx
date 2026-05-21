const stats = [
  { value: '50,000+', label: 'Patients Served', icon: '👥' },
  { value: '200+', label: 'Certified Doctors', icon: '🩺' },
  { value: '15+', label: 'Medical Specialties', icon: '🏥' },
  { value: '1M+', label: 'Appointments Booked', icon: '📅' },
]

export function StatsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-primary-100/80">
      <div className="container-app">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <span className="text-3xl sm:text-4xl block mb-3 group-hover:scale-110 transition-transform inline-block">
                {stat.icon}
              </span>
              <p className="font-display text-3xl sm:text-4xl font-bold text-gradient">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
