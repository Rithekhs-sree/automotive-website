import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(2)
  
  const galleryImages = [
    "/gallery1.jpeg",
    "/gallery2.webp",
    "/gallery3.webp",
    "/gallery4.jpeg",
    "/gallery5.jpeg",
    "/gallery6.jpeg",
    "/gallery7.jpeg",
    "/gallery8.jpeg",
  ]

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* HERO SECTION - Made bigger with increased height */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden pt-32 pb-20">
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-600/40 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-600/40 via-transparent to-transparent" />
        </div>

        {/* Animated Dashed Circles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-dashed border-blue-500/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-dashed border-red-500/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-dashed border-blue-500/20 rounded-full"
        />

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, i % 2 === 0 ? 50 : -50, 0],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
            className={`absolute w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-red-500' : 'bg-blue-500'}`}
            style={{
              left: `${10 + (i * 5)}%`,
              top: `${20 + (i % 5) * 15}%`,
            }}
          />
        ))}

        {/* Geometric Shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-32 w-24 h-24 border-2 border-blue-500/30"
        />
        <motion.div
          animate={{ 
            rotate: [360, 270, 180, 90, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 left-24 w-16 h-16 border-2 border-red-500/30 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-red-600/20 rounded-lg"
        />

        {/* Animated Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 1200, opacity: [0, 0.4, 0] }}
              transition={{
                duration: 4,
                delay: i * 0.5,
                repeat: Infinity,
                repeatDelay: 6,
                ease: "easeInOut",
              }}
              className="absolute h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent"
              style={{
                top: `${15 + i * 18}%`,
                width: `${300 + i * 50}px`,
              }}
            />
          ))}
        </div>

        {/* Content - Pushed down slightly with mt-8 to clear the header comfortably */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-8">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl font-bold font-serif leading-tight mb-6"
          >
            <span className="block text-white">Our</span>
            <span className="block bg-gradient-to-r from-red-500 via-blue-400 to-red-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-blue-200/80 max-w-2xl mx-auto leading-relaxed"
          >
            Explore our workshop, projects, and the quality work we deliver
          </motion.p>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-500" />
            <div className="w-2 h-2 bg-red-500 rotate-45" />
            <div className="w-2 h-2 bg-blue-500 rotate-45" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-blue-500" />
          </motion.div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-slate-950/50 to-transparent pointer-events-none" />
      </section>

      {/* GALLERY CAROUSEL SECTION */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black min-h-[80vh] flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(37, 99, 235, 0.3) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-4">
              Explore Our <span className="text-red-500">Work</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-600 mx-auto rounded-full" />
          </motion.div>

          {/* Carousel Container */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] flex items-center justify-center">
            <AnimatePresence>
              {galleryImages.map((imageSrc, index) => {
                let position = index - currentIndex
                if (position > 4) position -= galleryImages.length
                if (position < -4) position += galleryImages.length

                const isCenter = position === 0
                const absPosition = Math.abs(position)
                
                // Mobile: show only center image, Desktop: show carousel
                const isMobile = window.innerWidth < 768
                const shouldShow = isMobile ? isCenter : true
                
                if (!shouldShow) return null
                
                // Responsive sizing
                const cardWidth = isMobile ? '85vw' : '420px'
                const cardHeight = isMobile ? '50vh' : '600px'
                const xOffset = isMobile ? 0 : position * 300
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isMobile ? (isCenter ? 1 : 0) : (isCenter ? 1 : Math.max(0.2, 1 - absPosition * 0.25)),
                      x: xOffset,
                      z: isCenter ? 50 : 50 - absPosition * 10,
                      scale: isMobile ? (isCenter ? 1 : 0.8) : (isCenter ? 1 : Math.max(0.7, 1 - absPosition * 0.1)),
                      rotateY: isMobile ? 0 : position * 15,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute"
                    style={{
                      transformStyle: "preserve-3d",
                      filter: isMobile ? (isCenter ? 'none' : 'blur(8px)') : (isCenter ? 'none' : `blur(${absPosition * 2}px)`),
                    }}
                  >
                    <div 
                      className={`relative overflow-hidden rounded-2xl shadow-2xl ${isCenter ? 'border-2 border-blue-500/50' : 'border border-slate-700'}`}
                      style={{
                        width: cardWidth,
                        height: cardHeight,
                      }}
                    >
                      {/* Image */}
                      <div className="relative h-full w-full">
                        <img
                          src={imageSrc}
                          alt={`Gallery image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        {isCenter && (
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                        )}
                      </div>

                      {/* Corner Accents for Center Card */}
                      {isCenter && (
                        <>
                          <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-l-2 border-blue-500 rounded-tl-lg" />
                          <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-r-2 border-red-500 rounded-br-lg" />
                        </>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.button
              onClick={prevCard}
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-4 z-50 w-14 h-14 bg-slate-900/80 backdrop-blur-md border border-blue-700/50 rounded-full flex items-center justify-center text-white hover:border-red-500/50 hover:bg-slate-800 transition-all shadow-lg shadow-blue-900/30"
            >
              <ChevronLeft size={28} />
            </motion.button>

            <motion.button
              onClick={nextCard}
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-4 z-50 w-14 h-14 bg-slate-900/80 backdrop-blur-md border border-blue-700/50 rounded-full flex items-center justify-center text-white hover:border-red-500/50 hover:bg-slate-800 transition-all shadow-lg shadow-blue-900/30"
            >
              <ChevronRight size={28} />
            </motion.button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {galleryImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-gradient-to-r from-red-500 to-blue-500' : 'w-2 bg-slate-700 hover:bg-slate-600'}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}