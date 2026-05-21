export function CtaSection() {
  return (
    <section className="section-padding bg-primary-50">
      <div className="container-app">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-700 via-primary-800 to-slate-925" />
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary-400/40 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent-sky/30 blur-3xl" />
          </div>

          <div className="relative glass rounded-3xl m-1 p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Ready to Take Control of Your Health?
            </h2>
            <p className="mt-4 text-white/75 text-lg max-w-xl mx-auto">
              Join thousands of patients who book smarter. Your first consultation could be today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#book"
                className="inline-flex justify-center px-8 py-3.5 rounded-xl bg-white text-primary-800 font-semibold text-sm shadow-lg hover:bg-primary-50 transition-colors"
              >
                Book Appointment Now
              </a>
              <a
                href="#features"
                className="inline-flex justify-center px-8 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Learn More
              </a>
            </div>
            <p className="mt-6 text-xs text-white/50">No credit card required · Free account setup</p>
          </div>
        </div>
      </div>
    </section>
  )
}
