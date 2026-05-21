import { SectionHeading } from '../ui/SectionHeading'

const testimonials = [
  {
    quote: 'Booking my cardiologist appointment took less than two minutes. The video consultation was smooth and professional.',
    author: 'Maria Gonzalez',
    role: 'Patient since 2023',
    rating: 5,
  },
  {
    quote: 'Managing appointments for my entire family in one place has been a game-changer. Reminders are always on time.',
    author: 'David Thompson',
    role: 'Parent of 3',
    rating: 5,
  },
  {
    quote: 'The digital health records feature saved me during an emergency abroad. All my history was instantly accessible.',
    author: 'Priya Sharma',
    role: 'Frequent traveler',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-primary-50">
      <div className="container-app">
        <SectionHeading
          badge="Testimonials"
          title="Loved by Patients Everywhere"
          subtitle="Real stories from people who trust MediBook for their healthcare needs."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <blockquote
              key={item.author}
              className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col hover:shadow-glass-lg transition-shadow"
            >
              <div className="flex text-amber-400 text-sm mb-4">
                {'★'.repeat(item.rating)}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed flex-grow">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-6 pt-6 border-t border-slate-200/80 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-display font-bold text-sm">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <cite className="not-italic font-display font-semibold text-slate-850 text-sm">{item.author}</cite>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
