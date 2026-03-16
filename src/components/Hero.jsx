import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    
    const items = el.querySelectorAll('[data-reveal]')
    items.forEach((item, i) => {
      item.style.opacity = '0'
      item.style.transform = 'translateY(30px)'
      setTimeout(() => {
        item.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
        item.style.opacity = '1'
        item.style.transform = 'translateY(0)'
      }, 200 + i * 150)
    })
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]"
      id="hero"
    >
      {/* Background image collage — opacity raised, grayscale removed */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 opacity-70">
        {[1, 5, 10, 15, 20, 25].map((n) => (
          <div key={n} className="overflow-hidden relative">
            <img
              src={`/images/img${n}.jpg`}
              alt=""
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(20%) contrast(1.05)' }}
            />
            {/* Much lighter per-cell overlay so images stay bright */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
          </div>
        ))}
      </div>

      {/* Single dark vignette over the whole collage so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20 pointer-events-none" />

      {/* Red diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-red/20 to-transparent pointer-events-none" />

      {/* Left red stripe */}
      <div className="absolute left-0 top-0 w-1 h-full bg-brand-red" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-4xl">

          {/* Tag line */}
          <div data-reveal className="flex items-center gap-3 mb-8">
            <div className="w-8 h-0.5 bg-brand-red" />
            <span className="font-display font-700 text-brand-red text-sm uppercase tracking-[0.3em]">
              Est. 2019 · Kampala, Uganda
            </span>
          </div>

          {/* Main title */}
          <h1 data-reveal className="font-display font-900 uppercase leading-[0.9] mb-6">
            <span className="block text-7xl md:text-[9rem] text-white">Your Tech-</span>
            <span className="block text-7xl md:text-[9rem] text-stroke text-white">Savvy</span>
            <span className="block text-7xl md:text-[9rem] text-white">Partners</span>
          </h1>

          {/* Tagline */}
          <p data-reveal className="font-body font-300 text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed">
            Uganda's trusted source for construction support services, engineering tools, safety
            equipment, and building materials.
          </p>

          {/* CTA buttons */}
          <div data-reveal className="flex flex-wrap gap-4 mb-16">
            <a href="#services" className="btn-primary">
              <span>Our Services</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#contact" className="btn-outline">
              <span>Get a Quote</span>
            </a>
          </div>

          {/* Stats */}
          <div data-reveal className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            {[
              { value: '2019', label: 'Founded' },
              { value: '100+', label: 'Happy Clients' },
              { value: '50+', label: 'Products' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-900 text-3xl md:text-5xl text-brand-red">
                  {stat.value}
                </div>
                <div className="font-body text-xs md:text-sm text-white/40 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="font-display text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-0.5 h-8 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 w-full h-1/2 bg-brand-red animate-bounce" />
        </div>
      </div>
    </section>
  )
}
