const footerLinks = {
  Product: ['Features', 'Pricing', 'Mobile App', 'Integrations'],
  Company: ['About Us', 'Careers', 'Press', 'Contact'],
  Resources: ['Help Center', 'Blog', 'Privacy Policy', 'Terms of Service'],
  Specialties: ['Cardiology', 'Dermatology', 'Pediatrics', 'Orthopedics'],
}

export function Footer() {
  return (
    <footer className="bg-slate-925 text-white/80">
      <div className="container-app py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </span>
              <span className="font-display font-bold text-xl text-white">
                Medi<span className="text-primary-400">Book</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-xs">
              Your trusted platform for seamless doctor appointments. Quality care, just a click away.
            </p>
            <div className="flex gap-3 mt-6">
              {['twitter', 'linkedin', 'facebook'].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="h-10 w-10 flex items-center justify-center rounded-xl glass border-white/10 text-white/70 hover:text-white hover:bg-white/15 transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs font-bold uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-white text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/55 hover:text-primary-300 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">© {new Date().getFullYear()} MediBook. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-primary-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-primary-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
