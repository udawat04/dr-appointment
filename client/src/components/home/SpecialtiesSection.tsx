import { SectionHeading } from '../ui/SectionHeading'

const specialties = [
  { name: 'Cardiology', icon: '❤️', doctors: 24, color: 'from-rose-500/20 to-rose-600/5' },
  { name: 'Dermatology', icon: '✨', doctors: 18, color: 'from-amber-500/20 to-amber-600/5' },
  { name: 'Pediatrics', icon: '👶', doctors: 22, color: 'from-sky-500/20 to-sky-600/5' },
  { name: 'Orthopedics', icon: '🦴', doctors: 16, color: 'from-indigo-500/20 to-indigo-600/5' },
  { name: 'Neurology', icon: '🧠', doctors: 14, color: 'from-violet-500/20 to-violet-600/5' },
  { name: 'General Medicine', icon: '🩺', doctors: 35, color: 'from-primary-500/20 to-primary-600/5' },
  { name: 'Gynecology', icon: '🌸', doctors: 12, color: 'from-pink-500/20 to-pink-600/5' },
  { name: 'Ophthalmology', icon: '👁️', doctors: 10, color: 'from-cyan-500/20 to-cyan-600/5' },
]

export function SpecialtiesSection() {
  return (
    <section id="specialties" className="section-padding bg-gradient-to-b from-primary-50 to-white">
      <div className="container-app">
        <SectionHeading
          badge="Specialties"
          title="Find Care Across Every Specialty"
          subtitle="Explore our network of specialists across multiple medical disciplines."
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {specialties.map((spec) => (
            <a
              key={spec.name}
              href="#book"
              className={`group glass-card rounded-2xl p-5 sm:p-6 bg-gradient-to-br ${spec.color} hover:shadow-glass-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <span className="text-3xl sm:text-4xl block mb-3 group-hover:scale-110 transition-transform inline-block">
                {spec.icon}
              </span>
              <h3 className="font-display font-semibold text-slate-850 text-sm sm:text-base">{spec.name}</h3>
              <p className="text-xs text-slate-500 mt-1">{spec.doctors} doctors</p>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#book"
            className="inline-flex items-center gap-2 text-primary-700 font-semibold text-sm hover:text-primary-600 transition-colors"
          >
            View all specialties
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
