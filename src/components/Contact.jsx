import { useEffect, useRef } from 'react'

const contactInfo = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    label: 'Address',
    value: 'Prime Village Mall (Next to Total Petrol Station)\nP.O Box 260 Nateete, Kampala, Uganda',
    accent: '#C8102E',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    label: 'Phone',
    value: '+255 704 421 264\n+255 789 602 364',
    accent: '#006B3C',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    label: 'Email',
    value: 'tubroshardware2019@gmail.com\nsales@tubroshardware.com',
    accent: '#F4821F',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    label: 'Website',
    value: 'www.tubroshardware.com',
    accent: '#D4A017',
  },
]

const services = [
  'Waterproofing Works',
  'Ceiling Installation',
  'Dry Wall Partitions',
  'Plumbing Installation',
  'Flooring Solutions',
  'Building Renovation',
  'Hand Tools Supply',
  'Power Tools Supply',
  'Safety Gear',
  'Measuring Equipment',
  'Construction Materials',
  'Other / Custom Request',
]

export default function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={ref} className="relative bg-[#050505] py-28 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-brand-red/30 to-transparent" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-brand-red" />
            <span className="font-display font-700 text-brand-red text-sm uppercase tracking-[0.25em]">
              Contact Us
            </span>
            <div className="w-8 h-0.5 bg-brand-red" />
          </div>
          <h2 className="reveal font-display font-900 text-5xl md:text-7xl uppercase leading-[0.95] text-white mb-4">
            Let's <span className="text-stroke">Work</span> Together
          </h2>
          <p className="reveal font-body text-white/40 max-w-lg mx-auto text-sm leading-relaxed">
            Ready to start your project? Get in touch with us for a free consultation and competitive quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => (
              <div key={info.label} className="reveal flex gap-4 group">
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center border mt-1 transition-colors duration-200"
                  style={{ borderColor: `${info.accent}40`, color: info.accent }}
                >
                  {info.icon}
                </div>
                <div>
                  <div className="font-display font-700 text-xs uppercase tracking-[0.2em] text-white/30 mb-1">
                    {info.label}
                  </div>
                  <div className="font-body text-white/70 text-sm leading-relaxed whitespace-pre-line">
                    {info.value}
                  </div>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="reveal pt-4 border-t border-white/10">
              <div className="font-display font-700 text-xs uppercase tracking-[0.2em] text-white/30 mb-4">
                Follow Us
              </div>
              <div className="flex gap-3">
                {['Facebook', 'Twitter', 'Instagram'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/40 hover:border-brand-red hover:text-brand-red transition-all duration-200 font-display font-700 text-xs uppercase"
                  >
                    {platform[0]}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick response badge */}
            <div className="reveal p-5 border border-brand-green/30 bg-brand-green/5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
                <span className="font-display font-700 text-brand-green text-xs uppercase tracking-widest">
                  Quick Response
                </span>
              </div>
              <p className="font-body text-white/50 text-xs leading-relaxed">
                We typically respond to all enquiries within 2–4 business hours.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thank you! We will be in touch shortly.')
              }}
            >
              <div className="reveal grid grid-cols-2 gap-4">
                <div>
                  <label className="font-display font-700 text-xs uppercase tracking-widest text-white/30 block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/[0.04] border border-white/10 text-white px-4 py-3.5 font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-brand-red transition-colors"
                  />
                </div>
                <div>
                  <label className="font-display font-700 text-xs uppercase tracking-widest text-white/30 block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+256 700 000 000"
                    className="w-full bg-white/[0.04] border border-white/10 text-white px-4 py-3.5 font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-brand-red transition-colors"
                  />
                </div>
              </div>

              <div className="reveal">
                <label className="font-display font-700 text-xs uppercase tracking-widest text-white/30 block mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-white/[0.04] border border-white/10 text-white px-4 py-3.5 font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-brand-red transition-colors"
                />
              </div>

              <div className="reveal">
                <label className="font-display font-700 text-xs uppercase tracking-widest text-white/30 block mb-2">
                  Service / Product Needed *
                </label>
                <select
                  required
                  className="w-full bg-[#111] border border-white/10 text-white/60 px-4 py-3.5 font-body text-sm focus:outline-none focus:border-brand-red transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select a service or product</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="reveal">
                <label className="font-display font-700 text-xs uppercase tracking-widest text-white/30 block mb-2">
                  Project Details
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe your project, requirements, quantities, timeline..."
                  className="w-full bg-white/[0.04] border border-white/10 text-white px-4 py-3.5 font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-brand-red transition-colors resize-none"
                />
              </div>

              <div className="reveal flex items-start gap-3">
                <input type="checkbox" id="agree" className="mt-1 accent-brand-red" />
                <label htmlFor="agree" className="font-body text-xs text-white/40 leading-relaxed">
                  I agree to be contacted by Tubros Hardware regarding my enquiry. My information will not be shared with third parties.
                </label>
              </div>

              <div className="reveal">
                <button
                  type="submit"
                  className="w-full btn-primary justify-center text-base py-4"
                >
                  Send Enquiry
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
