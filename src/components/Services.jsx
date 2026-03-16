import { useEffect, useRef, useState } from 'react'

const services = [
  {
    id: 1,
    number: '01',
    title: 'Waterproofing',
    desc: 'Making floor slabs, roof slabs, and retaining walls impervious to water using approved construction chemicals and membranes. We apply Soft Seal ZSP-1191, SBR-161 Latex, Water Shield and APP Modified Membranes.',
    applications: ['Concrete Roof Slab', 'Terraces & Bathrooms', 'Retaining Walls', 'Swimming Pools', 'Underground Water Tanks', 'Masonary Cracks'],
    img: '/images/img2.jpg',
    accent: '#C8102E',
  },
  {
    id: 2,
    number: '02',
    title: 'Ceilings',
    desc: 'Professional installation of Gypsum, Suspended, Metal Lathe, Timber, Plywood and Drop-in ceiling systems for both residential and commercial applications.',
    applications: ['Gypsum Ceilings', 'Suspended Systems', 'Metal Lathe', 'Drop-in Tiles', 'Custom Designs', 'Commercial Spaces'],
    img: '/images/img12.jpg',
    accent: '#006B3C',
  },
  {
    id: 3,
    number: '03',
    title: 'Dry Wall Partitions',
    desc: 'Modern interior partitioning solutions using metal stud frames and gypsum board, ideal for office fit-outs, home renovations, and commercial spaces.',
    applications: ['Office Partitions', 'Home Interiors', 'Hotel Fit-outs', 'Sound Insulation', 'Fire Rated Walls', 'Custom Configurations'],
    img: '/images/img16.jpg',
    accent: '#F4821F',
  },
  {
    id: 4,
    number: '04',
    title: 'Plumbing Installation',
    desc: 'Complete plumbing installation and rehabilitation services for residential, commercial, and industrial buildings. Supply of sanitary ware included.',
    applications: ['New Installations', 'Pipe Rehabilitation', 'Sanitary Ware', 'Water Systems', 'Drainage Solutions', 'Maintenance'],
    img: '/images/img19.jpg',
    accent: '#0A2463',
  },
  {
    id: 5,
    number: '05',
    title: 'Flooring Solutions',
    desc: 'High-quality flooring applications for all surfaces. From decorative concrete finishes to ceramic tiles for interior and exterior spaces.',
    applications: ['Stamped Concrete', 'Ceramic Tiles', 'Epoxy Floors', 'Outdoor Terraces', 'Basement Floors', 'Pool Surrounds'],
    img: '/images/img22.jpg',
    accent: '#D4A017',
  },
  {
    id: 6,
    number: '06',
    title: 'Building Renovation',
    desc: 'Complete building renovation and maintenance services. We restore and upgrade existing structures to meet modern standards and client specifications.',
    applications: ['Facade Renovation', 'Roof Restoration', 'Interior Upgrades', 'Painting Works', 'Structural Repairs', 'General Maintenance'],
    img: '/images/img26.jpg',
    accent: '#C8102E',
  },
]

export default function Services() {
  const ref = useRef(null)
  const [activeService, setActiveService] = useState(services[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80)
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
    <section id="services" ref={ref} className="bg-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-brand-red" />
              <span className="font-display font-700 text-brand-red text-sm uppercase tracking-[0.25em]">
                What We Do
              </span>
            </div>
            <h2 className="font-display font-900 text-5xl md:text-7xl uppercase leading-[0.95] text-gray-900">
              Our <span className="text-stroke text-brand-red">Services</span>
            </h2>
          </div>
          <p className="reveal font-body text-gray-700 max-w-xs text-sm leading-relaxed md:text-right">
            End-to-end construction support services delivered by experienced professionals.
          </p>
        </div>

        {/* Services Grid + Detail Panel */}
        <div className="grid lg:grid-cols-5 gap-0 border border-gray-200">

          {/* Service list */}
          <div className="lg:col-span-2 border-r border-gray-200">
            {services.map((svc) => (
              <button
                key={svc.id}
                onClick={() => setActiveService(svc)}
                className={`reveal w-full text-left px-6 py-5 border-b border-gray-200 flex items-center justify-between group transition-all duration-200 ${
                  activeService.id === svc.id
                    ? 'bg-gray-100'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="font-display font-900 text-3xl"
                    style={{ color: activeService.id === svc.id ? svc.accent : 'rgba(0,0,0,0.15)' }}
                  >
                    {svc.number}
                  </span>
                  <span className={`font-display font-700 text-base uppercase tracking-wide transition-colors ${
                    activeService.id === svc.id ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-800'
                  }`}>
                    {svc.title}
                  </span>
                </div>
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  className={`transition-all duration-200 flex-shrink-0 ${activeService.id === svc.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
                >
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-3 relative overflow-hidden min-h-[450px]">
            {/* Image */}
            <img
              key={activeService.id}
              src={activeService.img}
              alt={activeService.title}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              style={{ opacity: 0.25, filter: 'grayscale(60%)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-white/50" />

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10 flex flex-col h-full justify-end">
              <div
                className="w-12 h-1 mb-6"
                style={{ backgroundColor: activeService.accent }}
              />
              <h3 className="font-display font-900 text-4xl md:text-5xl uppercase text-gray-900 mb-4 leading-tight">
                {activeService.title}
              </h3>
              <p className="font-body text-gray-700 text-sm leading-relaxed mb-6 max-w-md">
                {activeService.desc}
              </p>
              <div>
                <div className="font-display font-700 text-gray-500 text-xs uppercase tracking-[0.3em] mb-3">
                  Applications
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeService.applications.map((app) => (
                    <span
                      key={app}
                      className="font-body text-xs text-gray-700 border border-gray-300 px-3 py-1.5 hover:border-gray-500 transition-colors"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}