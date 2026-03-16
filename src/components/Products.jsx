import { useEffect, useRef, useState } from 'react'

const categories = [
  {
    id: 'hand-tools',
    label: 'Hand Tools',
    icon: '🔧',
    images: ['/images/img30.jpg', '/images/img31.jpg', '/images/img32.jpg'],
    items: [
      'Spirit Level Vails', 'Metal Drill Bits', 'Concrete Drill Bits', 'Metal Holesaws',
      'Metal Cutting Disc', 'Cordless Drills', 'Circular Saw', 'Inflating Air Compressor',
      'Tool Box Compartments', 'Hammers', 'Pliers', 'Tube Cutter', 'Aviation Tin Snip',
      'Hex Key Wrench Set', 'Star Key Wrench Set', 'Ratchet Wrench Set', 'Mechanic Tools Set',
      'Hex Socket Set', 'Tire Inflators', 'Wood Chisel Set', 'Telescoping Loppers', 'Spray Gun Kits',
    ],
  },
  {
    id: 'power-tools',
    label: 'Power Tools',
    icon: '⚡',
    images: ['/images/img33.jpg', '/images/img34.jpg', '/images/img35.jpg'],
    items: [
      'Angle Grinders', 'Demolition Hammers', 'Jigsaws', 'Impact Wrenches',
      'Screw Drivers', 'Circular Saws', 'Welding Machines', 'Rebar Tying Machines',
      'Impact Drills', 'Electric Drills', 'Sanders', 'Electric Polishers',
      'Electric Planers', 'Electric Chain Saws', 'Marble Cutters', 'Table Saw',
      'Hot Melt Machines', 'Pressure Washers', 'Electric Blowers', 'Brad Nailers', 'Gasoline Picks',
    ],
  },
  {
    id: 'safety-gear',
    label: 'Safety Gear',
    icon: '🦺',
    images: ['/images/img36.jpg', '/images/img37.jpg', '/images/img38.jpg'],
    items: [
      'Safety Helmets', 'Safety Footwear', 'Reflective Vests', 'Safety Gloves',
      'Safety Gumboots', 'Safety Boots', 'Ear Muffs', 'Safety Harness Kits',
      'Welding Masks', 'Face Shields', 'Safety Glasses', 'Chemical Respirators',
      'Head Protection', 'Safety Eye Wear', 'Work Wear', 'Fall Protection',
      'Ear Protection', 'Road Safety Items', 'Blanket Roll', 'Lashing Belts', 'Welding Aprons',
    ],
  },
  {
    id: 'measuring',
    label: 'Measuring & Testing',
    icon: '📐',
    images: ['/images/img40.jpg', '/images/img41.jpg', '/images/img42.jpg'],
    items: [
      'Laser Distance Meters', 'Auto (Dumy) Levels', 'Digital Infrared Thermometers',
      'Digital Sound Meters', 'Digital Refractometers', 'Digital Tachometers',
      'Digital Water Quality Meters', 'Digital Clamp Meters', 'Resistance Testers',
      'Moisture Meters', 'Cable Testing', 'Circuit Breaker Testing', 'Electrical Testers',
      'Relay & Protection Tester', 'Transformer Testing', 'Insulation Testing',
      'Earth Resistance Testers', 'High Voltage Testers', 'Battery & PQ Testing',
    ],
  },
  {
    id: 'construction',
    label: 'Construction Materials',
    icon: '🏗',
    images: ['/images/img45.jpg', '/images/img46.jpg', '/images/img47.jpg'],
    items: [
      'Construction Chemicals', 'Specialized Glass', 'Ceramics', 'Waterproofing Membranes',
      'SBR Latex Emulsion', 'Soft Seal Compounds', 'Bonding Agents', 'Fire Fighting Equipment',
      'Fire Extinguishers', 'Fire Hoses', 'Smoke Detectors', 'Emergency Lighting',
      'PVC Pipes & Fittings', 'Gypsum Boards', 'Metal Studs & Tracks', 'General Building Materials',
    ],
  },
]

export default function Products() {
  const ref = useRef(null)
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 60)
            })
          }
        })
      },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % activeCategory.images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [activeCategory])

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    setActiveImg(0)
  }

  return (
    <section id="products" ref={ref} className="bg-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-brand-green" />
              <span className="font-display font-700 text-brand-green text-sm uppercase tracking-[0.25em]">
                What We Supply
              </span>
            </div>
            <h2 className="font-display font-900 text-5xl md:text-7xl uppercase leading-[0.95] text-gray-900">
              Our <span className="text-stroke text-brand-green">Products</span>
            </h2>
          </div>
          <div className="reveal flex items-end">
            <p className="font-body text-gray-700 text-sm leading-relaxed">
              We source and supply products to client specifications. From engineering hand tools to specialized construction chemicals — all at competitive prices with guaranteed quality.
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="reveal flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat)}
              className={`flex items-center gap-2 px-4 py-2.5 font-display font-700 text-xs uppercase tracking-widest transition-all duration-200 border ${
                activeCategory.id === cat.id
                  ? 'bg-brand-red border-brand-red text-white'
                  : 'bg-transparent border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-800'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Display */}
        <div className="grid lg:grid-cols-5 gap-6">
          
          {/* Image panel */}
          <div className="lg:col-span-2 space-y-3">
            {/* Main image */}
            <div className="reveal relative h-64 overflow-hidden rounded-lg">
              {activeCategory.images.map((img, i) => (
                <img
                  key={img}
                  src={img}
                  alt={activeCategory.label}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 rounded-lg"
                  style={{ opacity: activeImg === i ? 1 : 0 }}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/70 to-white/50 rounded-lg" />
              
              {/* Dot indicators */}
              <div className="absolute bottom-3 left-3 flex gap-1.5">
                {activeCategory.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      activeImg === i ? 'bg-brand-red w-4' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail row */}
            <div className="reveal grid grid-cols-3 gap-2">
              {activeCategory.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImg(i)}
                  className={`relative h-20 overflow-hidden border-2 transition-all rounded-lg ${
                    activeImg === i ? 'border-brand-red' : 'border-gray-300 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover rounded-lg" />
                </button>
              ))}
            </div>

            {/* Category description box */}
            <div className="reveal p-5 border border-gray-200 rounded-lg">
              <div className="font-display font-700 text-gray-900 text-sm uppercase tracking-wide mb-2">
                {activeCategory.icon} {activeCategory.label}
              </div>
              <div className="font-body text-gray-700 text-xs leading-relaxed">
                All products sourced to client specifications. Genuine brands. Competitive pricing. Fast delivery across Uganda.
              </div>
            </div>
          </div>

          {/* Items list */}
          <div className="lg:col-span-3">
            <div className="reveal grid grid-cols-2 md:grid-cols-3 gap-2">
              {activeCategory.items.map((item, i) => (
                <div
                  key={item}
                  className="group flex items-center gap-2 px-3 py-2.5 border border-gray-200 hover:border-brand-red/50 hover:bg-brand-red/10 transition-all duration-200 cursor-default rounded"
                >
                  <div className="w-1 h-1 bg-brand-red flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <span className="font-body text-xs text-gray-700 group-hover:text-gray-900 transition-colors leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="reveal mt-8 p-6 border border-brand-red/30 bg-brand-red/5 rounded">
              <div className="font-display font-700 text-gray-900 text-lg uppercase tracking-wide mb-2">
                Don't see what you need?
              </div>
              <p className="font-body text-gray-700 text-sm mb-4">
                We source products to your exact specifications. Contact us with your requirements.
              </p>
              <a href="#contact" className="btn-primary text-sm px-6 py-3">
                Request a Product
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}