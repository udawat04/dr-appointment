import { SectionHeading } from '../ui/SectionHeading'

const steps = [
  {
    step: '01',
    title: 'Search & Choose',
    description: 'Browse doctors by specialty, location, ratings, or availability that fits your schedule.',
  },
  {
    step: '02',
    title: 'Book Your Slot',
    description: 'Pick a convenient time for in-clinic visit or video consultation and confirm instantly.',
  },
  {
    step: '03',
    title: 'Visit & Follow Up',
    description: 'Attend your appointment, receive prescriptions digitally, and schedule follow-ups easily.',
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50/80 to-transparent pointer-events-none" />

      <div className="container-app relative">
        <SectionHeading
          badge="How It Works"
          title="Three Simple Steps to Better Care"
          subtitle="Getting the healthcare you need has never been easier."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200" />

          {steps.map((item, index) => (
            <div key={item.step} className="relative text-center">
              <div className="mx-auto h-20 w-20 rounded-2xl glass-card flex items-center justify-center font-display text-2xl font-bold text-primary-700 shadow-glow relative z-10">
                {item.step}
              </div>
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-4">
                  <svg className="h-6 w-6 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
              <h3 className="font-display font-semibold text-xl text-slate-850 mt-6">{item.title}</h3>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
