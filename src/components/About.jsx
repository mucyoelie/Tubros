import { useEffect, useRef } from 'react'

const values = [
  { icon: '⚡', title: 'Professionalism', desc: 'Expert team delivering world-class results every time' },
  { icon: '🛡', title: 'Integrity', desc: 'Honest, transparent dealings with every client' },
  { icon: '💡', title: 'Innovation', desc: 'Latest technology and cutting-edge solutions' },
  { icon: '★', title: 'Customer Satisfaction', desc: 'Your success is our primary measure of achievement' },
]

export default function About() {
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
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="relative bg-[#0d0d0d] py-28 overflow-hidden">
      {/* Decorative large text */}
      <div className="absolute top-8 right-0 font-display font-900 text-[14rem] text-white/[0.02] uppercase pointer-events-none select-none leading-none">
        TUBROS
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Image + accent */}
          <div className="relative reveal-left">
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10 gallery-item">
                <img
                  src="/images/img3.jpg"
                  alt="Tubros Hardware Team"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Accent image */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 z-20 border-4 border-brand-red gallery-item">
                <img
                  src="/images/img7.jpg"
                  alt="Construction Work"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Red stripe */}
              <div className="absolute -left-4 top-8 bottom-8 w-1 bg-brand-red" />
            </div>

            {/* Since tag */}
            <div className="absolute top-8 left-8 z-20 bg-brand-red px-4 py-2">
              <span className="font-display font-900 text-white text-sm uppercase tracking-widest">
                Since 2019
              </span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div className="reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brand-red" />
                <span className="font-display font-700 text-brand-red text-sm uppercase tracking-[0.25em]">
                  Who We Are
                </span>
              </div>
              <h2 className="font-display font-900 text-5xl md:text-6xl uppercase leading-[0.95] text-white mb-6">
                Building Uganda's <span className="text-brand-red">Future</span>
              </h2>
              <p className="font-body text-white/60 text-base leading-relaxed mb-4">
                Tubros Hardware Company Limited is a Ugandan privately owned B2B, B2C & BCG company, incorporated in 2019. We specialize in construction support services and supply high-quality engineering products across Uganda and the region.
              </p>
              <p className="font-body text-white/60 text-base leading-relaxed">
                Our ideology from day one: quality services and products don't have to be expensive. That philosophy has earned us the trust of hundreds of satisfied clients who rely on our affordable, reliable products and services.
              </p>
            </div>

            {/* Mission + Vision */}
            <div className="reveal grid grid-cols-2 gap-4">
              <div className="card-dark p-5">
                <div className="w-8 h-0.5 bg-brand-green mb-3" />
                <div className="font-display font-700 text-white text-sm uppercase tracking-widest mb-2">Vision</div>
                <div className="font-body text-white/50 text-sm leading-relaxed">
                  To be the leading company in quality, affordable construction support services and engineering solutions.
                </div>
              </div>
              <div className="card-dark p-5">
                <div className="w-8 h-0.5 bg-brand-orange mb-3" />
                <div className="font-display font-700 text-white text-sm uppercase tracking-widest mb-2">Mission</div>
                <div className="font-body text-white/50 text-sm leading-relaxed">
                  To offer the highest quality products and services that meet the technological demands of our customers.
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="reveal">
              <div className="font-display font-700 text-white/30 text-xs uppercase tracking-[0.3em] mb-4">Core Values</div>
              <div className="grid grid-cols-2 gap-3">
                {values.map((val) => (
                  <div key={val.title} className="flex items-start gap-3 group">
                    <span className="text-xl mt-0.5">{val.icon}</span>
                    <div>
                      <div className="font-display font-700 text-white text-sm uppercase tracking-wide group-hover:text-brand-red transition-colors">
                        {val.title}
                      </div>
                      <div className="font-body text-white/40 text-xs leading-relaxed">
                        {val.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
