import { useEffect, useRef, useState } from 'react'

const allImages = Array.from({ length: 49 }, (_, i) => `/images/img${i + 1}.jpg`)

const filters = ['All', 'Waterproofing', 'Ceilings', 'Partitions', 'Renovation', 'Products']

// Distribute images to categories
const categoryMap = {
  'All': allImages,
  'Waterproofing': allImages.slice(0, 10),
  'Ceilings': allImages.slice(10, 20),
  'Partitions': allImages.slice(15, 22),
  'Renovation': allImages.slice(22, 30),
  'Products': allImages.slice(30, 49),
}

export default function Gallery() {
  const ref = useRef(null)
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const [visible, setVisible] = useState(12)

  const images = categoryMap[active].slice(0, visible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 40)
            })
          }
        })
      },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Keyboard nav for lightbox
  useEffect(() => {
    const onKey = (e) => {
      if (!lightbox) return
      const allImgs = categoryMap[active]
      const idx = allImgs.indexOf(lightbox)
      if (e.key === 'ArrowRight') setLightbox(allImgs[(idx + 1) % allImgs.length])
      if (e.key === 'ArrowLeft') setLightbox(allImgs[(idx - 1 + allImgs.length) % allImgs.length])
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, active])

  return (
    <section id="gallery" ref={ref} className="bg-[#080808] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-brand-orange" />
              <span className="font-display font-700 text-brand-orange text-sm uppercase tracking-[0.25em]">
                Our Work
              </span>
            </div>
            <h2 className="font-display font-900 text-5xl md:text-7xl uppercase leading-[0.95] text-white">
              Project <span className="text-stroke">Gallery</span>
            </h2>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="reveal flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => { setActive(f); setVisible(12) }}
              className={`px-5 py-2 font-display font-700 text-xs uppercase tracking-widest transition-all duration-200 ${
                active === f
                  ? 'bg-white text-black'
                  : 'text-white/50 border border-white/20 hover:text-white hover:border-white/60'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {images.map((img, i) => (
            <div
              key={img + i}
              className="reveal gallery-item break-inside-avoid cursor-pointer relative group"
              onClick={() => setLightbox(img)}
            >
              <img
                src={img}
                alt={`Project ${i + 1}`}
                className="w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <svg
                  width="32" height="32" viewBox="0 0 32 32" fill="none"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <circle cx="16" cy="16" r="15" stroke="white" strokeWidth="1.5"/>
                  <path d="M11 16h10M16 11v10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        {visible < categoryMap[active].length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisible(v => v + 12)}
              className="btn-outline"
            >
              Load More Photos
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white font-display font-700 text-sm uppercase tracking-widest"
            onClick={() => setLightbox(null)}
          >
            Close ✕
          </button>

          <img
            src={lightbox}
            alt="Gallery"
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Nav arrows */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-3"
            onClick={(e) => {
              e.stopPropagation()
              const allImgs = categoryMap[active]
              const idx = allImgs.indexOf(lightbox)
              setLightbox(allImgs[(idx - 1 + allImgs.length) % allImgs.length])
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-3"
            onClick={(e) => {
              e.stopPropagation()
              const allImgs = categoryMap[active]
              const idx = allImgs.indexOf(lightbox)
              setLightbox(allImgs[(idx + 1) % allImgs.length])
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}
