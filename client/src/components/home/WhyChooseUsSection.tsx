import { SectionHeading } from '../ui/SectionHeading'

const benefits = [
  'Zero hidden fees — transparent pricing on every visit',
  'Insurance accepted from 50+ major providers',
  'Same-day and emergency appointment slots',
  'Multilingual support in 8 languages',
  'Family accounts to manage loved ones\' care',
  'Secure payments with end-to-end encryption',
]

export function WhyChooseUsSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-900 to-slate-925" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary-400/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-accent-sky/20 blur-3xl" />
      </div>

      <div className="container-app relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionHeading
              badge="Why MediBook"
              title="Healthcare That Puts You First"
              subtitle="We combine cutting-edge technology with human-centered care to deliver an experience you'll love."
              light
              centered={false}
            />
          </div>

          <div className="glass rounded-3xl p-6 sm:p-8">
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-4">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-400/30 flex items-center justify-center mt-0.5">
                    <svg className="h-3.5 w-3.5 text-primary-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white/90 text-sm sm:text-base leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
              {[
                { value: '98%', label: 'Satisfaction' },
                { value: '< 2 min', label: 'Avg. Booking' },
                { value: '100%', label: 'Secure' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-display text-xl sm:text-2xl font-bold text-white">{item.value}</p>
                  <p className="text-xs text-white/50 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
