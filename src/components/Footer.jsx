const footerLinks = {
  Services: [
    'Waterproofing',
    'Ceiling Works',
    'Dry Wall Partitions',
    'Plumbing Installation',
    'Flooring Solutions',
    'Building Renovation',
  ],
  Products: [
    'Hand Tools',
    'Power Tools',
    'Safety Gear',
    'Measuring Equipment',
    'Construction Chemicals',
    'Specialized Glass',
  ],
  Company: [
    'About Us',
    'Our Vision',
    'Core Values',
    'Gallery',
    'Contact Us',
    'Get a Quote',
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-white/10">
      {/* CTA strip */}
      <div className="bg-brand-red">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display font-900 text-white text-2xl md:text-3xl uppercase leading-tight">
              Ready to Start Your Project?
            </div>
            <div className="font-body text-white/70 text-sm mt-1">
              Contact us today for a free consultation and competitive quote.
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 bg-white text-brand-red font-display font-700 uppercase tracking-widest text-sm px-8 py-4 hover:bg-black hover:text-white transition-colors"
            >
              Get Quote
            </a>
            <a
              href="tel:+255704421264"
              className="flex items-center gap-2 border-2 border-white text-white font-display font-700 uppercase tracking-widest text-sm px-8 py-4 hover:bg-white hover:text-brand-red transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="20" cy="20" r="18" stroke="#C8102E" strokeWidth="2.5"/>
                  <circle cx="20" cy="20" r="14" stroke="#006B3C" strokeWidth="2"/>
                  <path d="M14 26 C14 20 20 14 26 14" stroke="#0A2463" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="26" cy="14" r="3" fill="#0A2463"/>
                </svg>
              </div>
              <div>
                <div className="font-display font-900 text-white text-xl leading-none uppercase tracking-tight">
                  Tubros
                </div>
                <div className="font-body text-[10px] text-brand-red uppercase tracking-[0.2em] leading-none">
                  Hardware Co. Ltd
                </div>
              </div>
            </div>

            <p className="font-body text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Your Tech-Savvy Partners in construction support services and engineering products. Serving Uganda since 2019.
            </p>

            {/* Contact mini */}
            <div className="space-y-2">
              <a
                href="tel:+255704421264"
                className="flex items-center gap-2 font-body text-sm text-white/50 hover:text-white transition-colors"
              >
                <span className="text-brand-red text-xs">📞</span>
                +255 704 421 264
              </a>
              <a
                href="mailto:sales@tubroshardware.com"
                className="flex items-center gap-2 font-body text-sm text-white/50 hover:text-white transition-colors"
              >
                <span className="text-brand-red text-xs">✉</span>
                sales@tubroshardware.com
              </a>
              <div className="flex items-start gap-2 font-body text-sm text-white/50">
                <span className="text-brand-red text-xs mt-0.5">📍</span>
                Prime Village Mall, Nateete, Kampala
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <div className="font-display font-700 text-white text-xs uppercase tracking-[0.25em] mb-5">
                {title}
              </div>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={title === 'Company' ? `#${link.toLowerCase().replace(/ /g, '-')}` : `#${title.toLowerCase()}`}
                      className="font-body text-sm text-white/40 hover:text-white transition-colors leading-none"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-body text-white/25 text-xs">
            © 2026 Tubros Hardware Co. Ltd. All rights reserved. Kampala, Uganda.
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-3">
              {['f', 'tw', 'in'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-7 h-7 border border-white/15 flex items-center justify-center text-white/30 hover:border-brand-red hover:text-brand-red transition-all font-display font-700 text-xs uppercase"
                >
                  {social}
                </a>
              ))}
            </div>
            <div className="font-body text-white/25 text-xs hidden md:block">
              Designed with ❤ for Uganda's construction industry
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
