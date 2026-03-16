import { useEffect, useRef, useState } from 'react'

// ─── DATA ──────────────────────────────────────────────────────────────────────

const categories = [
  { id: 'all',    label: 'All Products'    },
  { id: 'power',  label: 'Power Tools'     },
  { id: 'hand',   label: 'Hand Tools'      },
  { id: 'safety', label: 'Safety Gear'     },
  { id: 'heavy',  label: 'Heavy Equipment' },
]

const products = [
  { id: 1,  cat: 'power',  name: 'Bosch GSH 27 VC',      sub: 'Concrete Breaker',    img: '/images/img35.jpg' },
  { id: 2,  cat: 'power',  name: 'Bosch GDX 180-LI',     sub: 'Impact Driver',       img: '/images/img45.jpg' },
  { id: 3,  cat: 'power',  name: 'YATO Circular Saw',    sub: 'Professional Grade',  img: '/images/img40.jpg' },
  { id: 4,  cat: 'power',  name: 'YATO Cordless Drills', sub: '18V Series',          img: '/images/img50.jpg' },
  { id: 5,  cat: 'power',  name: 'Bosch Breaker Pro',    sub: 'GSH Series',          img: '/images/img3.jpg'  },
  { id: 6,  cat: 'hand',   name: 'YATO Wrench Set',      sub: '8mm – 32mm Range',    img: '/images/img6.jpg'  },
  { id: 7,  cat: 'hand',   name: 'YATO Allen Keys',      sub: 'CrV 6150 Steel',      img: '/images/img47.jpg' },
  { id: 8,  cat: 'hand',   name: 'YATO Torx Bit Set',    sub: '7-Piece · 1/4"',      img: '/images/img48.jpg' },
  { id: 9,  cat: 'hand',   name: 'Cutting Disc Range',   sub: 'YATO & Bosch',        img: '/images/img10.jpg' },
  { id: 10, cat: 'safety', name: 'Portwest Boot',        sub: 'Steel Toe · Tan',     img: '/images/img15.jpg' },
  { id: 11, cat: 'safety', name: 'Vaultex Safety Boot',  sub: 'Breathable Leather',  img: '/images/img20.jpg' },
  { id: 12, cat: 'safety', name: 'Portwest Hi-Top',      sub: 'Ankle Protection',    img: '/images/img30.jpg' },
  { id: 13, cat: 'heavy',  name: 'Concrete Mixer',       sub: '450/350L · 5/6HP',    img: '/images/img1.jpg'  },
  { id: 14, cat: 'heavy',  name: 'YATO Tool Range',      sub: 'Full Range In-Store', img: '/images/img2.jpg'  },
]

const services = [
  { icon: '⚙️', title: 'Engineering Tools',       desc: 'Professional-grade tools from YATO, Bosch, and other top brands for every engineering task on site.' },
  { icon: '🦺', title: 'Safety Equipment',         desc: 'PPE, safety boots, helmets, and full protective gear to keep your team safe and compliant.' },
  { icon: '🏗️', title: 'Construction Support',    desc: 'Concrete mixers, breakers, compactors and heavy equipment for the most demanding construction work.' },
  { icon: '🔧', title: 'Hand Tools & Accessories', desc: 'Complete range of spanners, wrenches, allen keys, bit sets, and precision hand tools always in stock.' },
  { icon: '📦', title: 'Bulk Supply',              desc: 'We supply contractors, corporates and construction firms at competitive wholesale and bulk pricing.' },
  { icon: '🚚', title: 'Fast Delivery',             desc: 'Same-day delivery available across Kampala. We bring the tools directly to your site.' },
]

const whyUs = [
  { num: '01', title: 'Genuine Products Only', desc: 'Every item we sell is sourced from authorised distributors. No counterfeits, no compromises on quality.' },
  { num: '02', title: 'Expert Advice On-Site', desc: 'Our team understands construction. We help you pick exactly the right tool for the right job.' },
  { num: '03', title: 'Competitive Pricing',   desc: 'Bulk discounts, contractor pricing, and flexible payment options available for all clients.' },
]

// ─── MAIN COMPONENT ────────────────────────────────────────────────────────────

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
    <>
      {/* ══════════════════════════════════════════════════════════
          HERO  — untouched, exactly as provided
      ══════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]"
        id="hero"
      >
        {/* Background image collage — full brightness, zero opacity, zero filters */}
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

        {/* Red diagonal accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-red/20 to-transparent pointer-events-none" />

        {/* Left red stripe */}
        <div className="absolute left-0 top-0 w-1 h-full bg-brand-red" />

        {/* Subtle grid */}
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

            <div data-reveal className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-brand-red" />
              <span className="font-display font-700 text-brand-red text-sm uppercase tracking-[0.3em]">
                Est. 2019 · Kampala, Uganda
              </span>
            </div>

            <h1 data-reveal className="font-display font-900 uppercase leading-[0.9] mb-6">
              <span className="block text-7xl md:text-[9rem] text-white">Your Tech-</span>
              <span className="block text-7xl md:text-[9rem] text-stroke text-white">Savvy</span>
              <span className="block text-7xl md:text-[9rem] text-white">Partners</span>
            </h1>

            <p data-reveal className="font-body font-300 text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed text-bold">
              Uganda's trusted source for construction support services, engineering tools,
              safety equipment, and building materials.
            </p>

            <div data-reveal className="flex flex-wrap gap-4 mb-16">
              <a href="#services" className="btn-primary">
                <span>Our Services</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#contact" className="btn-outline">
                <span>Get a Quote</span>
              </a>
            </div>

            <div data-reveal className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
              {[
                { value: '2019', label: 'Founded'       },
                { value: '100+', label: 'Happy Clients'  },
                { value: '50+',  label: 'Products'       },
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


      {/* ══════════════════════════════════════════════════════════
          SERVICES  — white background
      ══════════════════════════════════════════════════════════ */}
      <section id="services" className="bg-white py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="flex items-start gap-6 mb-16">
            <div className="w-1 bg-brand-red self-stretch hidden md:block" />
            <div>
              <p className="font-display font-700 text-brand-red text-sm uppercase tracking-[0.3em] mb-3">
                What We Offer
              </p>
              <h2 className="font-display font-900 uppercase text-gray-900 text-5xl md:text-7xl leading-[0.9]">
                Our<br />
                <span className="text-stroke-dark">Services</span>
              </h2>
            </div>
          </div>

          {/* 6-card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="bg-white p-8 group hover:bg-brand-red/5 transition-colors duration-300 border border-gray-100 hover:border-brand-red/20"
              >
                <div className="text-4xl mb-5">{svc.icon}</div>
                <div className="w-8 h-0.5 bg-brand-red mb-4 group-hover:w-16 transition-all duration-300" />
                <h3 className="font-display font-700 text-gray-900 text-xl uppercase mb-3 leading-tight">
                  {svc.title}
                </h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          PRODUCTS  — white background, filterable grid
      ══════════════════════════════════════════════════════════ */}
      <ProductsSection />


      {/* ══════════════════════════════════════════════════════════
          WHY US  — very light grey (#f9f9f9)
      ══════════════════════════════════════════════════════════ */}
      <section id="why-us" className="bg-[#f9f9f9] py-24 px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: image mosaic */}
            <div className="grid grid-cols-2 gap-2">
              <div className="row-span-2 overflow-hidden aspect-[3/4]">
                <img
                  src="/images/img45.jpg"
                  alt="Bosch professional tool"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden aspect-square">
                <img
                  src="/images/img20.jpg"
                  alt="Safety boots"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden aspect-square">
                <img
                  src="/images/img35.jpg"
                  alt="Concrete breaker"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right: copy */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-brand-red" />
                <span className="font-display font-700 text-brand-red text-sm uppercase tracking-[0.3em]">
                  Why Choose Us
                </span>
              </div>

              <h2 className="font-display font-900 uppercase text-gray-900 text-5xl md:text-6xl leading-[0.9] mb-8">
                Built For<br />
                <span className="text-stroke-dark">Builders</span>
              </h2>

              <p className="font-body text-gray-500 leading-relaxed mb-10">
                Since 2019 we've been the go-to partner for contractors, engineers, and construction
                firms across Uganda. We stock only trusted brands — YATO, Bosch, Portwest — and
                back every sale with real on-the-ground expertise.
              </p>

              <div className="space-y-6">
                {whyUs.map((item) => (
                  <div key={item.num} className="flex gap-5 group">
                    <div className="font-display font-900 text-brand-red text-3xl leading-none shrink-0 w-10">
                      {item.num}
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex-1 group-hover:border-brand-red/40 transition-colors duration-300">
                      <h4 className="font-display font-700 text-gray-900 uppercase text-sm tracking-wider mb-2">
                        {item.title}
                      </h4>
                      <p className="font-body text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a href="#contact" className="btn-primary">
                  <span>Talk to Our Team</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          GALLERY STRIP  — white background
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-brand-red" />
              <span className="font-display font-700 text-brand-red text-sm uppercase tracking-[0.3em]">
                Our Store
              </span>
            </div>
            <p className="font-body text-gray-400 text-sm hidden sm:block">
              Visit us in Kampala to see the full range
            </p>
          </div>

          {/* Horizontal scrolling strip */}
          <div className="flex gap-2 overflow-x-auto pb-3" style={{ scrollbarWidth: 'none' }}>
            {[2, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 25, 26].map((n) => (
              <div key={n} className="shrink-0 w-44 h-44 overflow-hidden group border border-gray-100">
                <img
                  src={`/images/img${n}.jpg`}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          CTA BANNER  — brand-red background (kept dark intentionally
          as a visual break before footer, per standard pattern)
      ══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 px-6 lg:px-8 overflow-hidden bg-brand-red">
        {/* Background image texture */}
        <div className="absolute inset-0">
          <img src="/images/img50.jpg" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Left white stripe */}
        <div className="absolute left-0 top-0 w-1 h-full bg-white/30" />

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="font-display font-700 text-white/70 text-sm uppercase tracking-[0.3em] mb-4">
            Ready to Get Started?
          </p>
          <h2 className="font-display font-900 uppercase text-white text-5xl md:text-7xl leading-[0.9] mb-8">
            Get a Quote<br />Today
          </h2>
          <p className="font-body text-white/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Tell us what you need and we'll get back to you with the best price in Kampala.
            Bulk orders and contractor accounts welcome.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="bg-white text-brand-red font-display font-700 uppercase text-sm tracking-widest px-8 py-4 hover:bg-white/90 transition-colors inline-flex items-center gap-2"
            >
              Contact Us
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="tel:+256000000000"
              className="border-2 border-white text-white font-display font-700 uppercase text-sm tracking-widest px-8 py-4 hover:bg-white/10 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}


// ─── PRODUCTS SECTION  (separate component so useState works cleanly) ──────────

function ProductsSection() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? products
    : products.filter((p) => p.cat === active)

  return (
    <section id="products" className="bg-white py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-start gap-6 mb-12">
          <div className="w-1 bg-brand-red self-stretch hidden md:block" />
          <div>
            <p className="font-display font-700 text-brand-red text-sm uppercase tracking-[0.3em] mb-3">
              In Stock Now
            </p>
            <h2 className="font-display font-900 uppercase text-gray-900 text-5xl md:text-7xl leading-[0.9]">
              Our<br />
              <span className="text-stroke-dark">Products</span>
            </h2>
          </div>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`font-display font-700 text-xs uppercase tracking-widest px-5 py-2.5 border transition-all duration-200 ${
                active === cat.id
                  ? 'bg-brand-red border-brand-red text-white'
                  : 'border-gray-200 text-gray-400 hover:border-brand-red hover:text-gray-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-px bg-gray-100">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white overflow-hidden aspect-square cursor-pointer"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-6 h-0.5 bg-brand-red mb-2" />
                <p className="font-display font-700 text-white text-sm uppercase leading-tight">
                  {product.name}
                </p>
                <p className="font-body text-white/60 text-xs mt-1">{product.sub}</p>
              </div>

              {/* Red corner triangle */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[36px] border-r-[36px] border-t-brand-red border-r-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-gray-100 pt-10">
          <p className="font-body text-gray-400 text-sm">
            Showing {filtered.length} of {products.length} products.{' '}
            Visit our store in Kampala for the full range.
          </p>
          <a href="#contact" className="btn-primary">
            <span>Request Full Catalogue</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}