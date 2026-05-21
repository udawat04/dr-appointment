import { useState } from 'react'
import { SectionHeading } from '../ui/SectionHeading'

const faqs = [
  {
    question: 'How do I book an appointment?',
    answer: 'Search for a doctor by name or specialty, select an available time slot, and confirm your booking. You\'ll receive instant confirmation via email and SMS.',
  },
  {
    question: 'Can I cancel or reschedule my appointment?',
    answer: 'Yes. You can cancel or reschedule up to 24 hours before your appointment at no charge through your patient dashboard or the mobile app.',
  },
  {
    question: 'Are video consultations covered by insurance?',
    answer: 'Many insurance plans cover telehealth visits. We verify your coverage during booking and show any out-of-pocket costs before you confirm.',
  },
  {
    question: 'Is my medical information secure?',
    answer: 'Absolutely. We use bank-level encryption and are fully HIPAA compliant. Your data is never shared without your explicit consent.',
  },
  {
    question: 'What if I need urgent care?',
    answer: 'Use our same-day urgent care filter to find doctors with immediate availability. For emergencies, please call 911 or visit your nearest ER.',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-app max-w-3xl">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about booking and managing your care."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="glass-card rounded-2xl overflow-hidden transition-shadow hover:shadow-glass"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-slate-850 text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 h-8 w-8 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-2">
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
