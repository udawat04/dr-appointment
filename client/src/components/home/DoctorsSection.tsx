import { SectionHeading } from '../ui/SectionHeading'

const doctors = [
  {
    name: 'Dr. Sarah Mitchell',
    specialty: 'Cardiologist',
    experience: '12 years',
    rating: 4.9,
    reviews: 324,
    available: true,
    avatar: '👩‍⚕️',
  },
  {
    name: 'Dr. James Chen',
    specialty: 'Dermatologist',
    experience: '8 years',
    rating: 4.8,
    reviews: 256,
    available: true,
    avatar: '👨‍⚕️',
  },
  {
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrician',
    experience: '15 years',
    rating: 5.0,
    reviews: 412,
    available: false,
    avatar: '👩‍⚕️',
  },
  {
    name: 'Dr. Michael Park',
    specialty: 'Orthopedic Surgeon',
    experience: '10 years',
    rating: 4.7,
    reviews: 189,
    available: true,
    avatar: '👨‍⚕️',
  },
]

export function DoctorsSection() {
  return (
    <section id="doctors" className="section-padding bg-white">
      <div className="container-app">
        <SectionHeading
          badge="Our Doctors"
          title="Meet Our Top-Rated Specialists"
          subtitle="Experienced, compassionate professionals ready to provide personalized care."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="glass-card rounded-2xl overflow-hidden hover:shadow-glass-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="h-36 bg-gradient-to-br from-primary-100 to-primary-200/50 flex items-center justify-center text-6xl relative">
                {doctor.avatar}
                {doctor.available && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-emerald-500 text-white text-xs font-semibold">
                    Available
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-slate-850">{doctor.name}</h3>
                <p className="text-sm text-primary-700 font-medium mt-0.5">{doctor.specialty}</p>
                <p className="text-xs text-slate-500 mt-1">{doctor.experience} experience</p>

                <div className="flex items-center gap-2 mt-4">
                  <div className="flex text-amber-400 text-sm">
                    {'★'.repeat(Math.floor(doctor.rating))}
                  </div>
                  <span className="text-sm font-semibold text-slate-850">{doctor.rating}</span>
                  <span className="text-xs text-slate-400">({doctor.reviews})</span>
                </div>

                <button
                  type="button"
                  className={`w-full mt-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    doctor.available
                      ? 'bg-primary-600 text-white hover:bg-primary-500 shadow-md shadow-primary-900/20'
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                  disabled={!doctor.available}
                >
                  {doctor.available ? 'Book Appointment' : 'No Slots Today'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
