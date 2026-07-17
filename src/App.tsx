import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Wrench } from 'lucide-react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ServicesPage from './pages/ServicesPage'
import GalleryPage from './pages/GalleryPage'

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-red-100 via-blue-100 to-blue-100"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.7),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.12),_transparent_25%)]" />
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="relative z-10 flex w-full max-w-md flex-col items-center gap-8 rounded-[2rem] border border-white/20 bg-white/80 p-10 shadow-2xl shadow-red-900/10 backdrop-blur-xl"
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-blue-400 text-white shadow-lg shadow-red-500/20"
        >
          <Wrench size={44} />
        </motion.div>

        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.45 }}
            className="hero-font text-4xl font-bold text-red-900"
          >
            C & S Automotive
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.45 }}
            className="mt-3 text-sm text-gray-600"
          >
            Loading the polished experience for your ride.
          </motion.p>
        </div>

        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.35, duration: 1.1, ease: 'easeInOut' }}
          className="relative h-2 w-full overflow-hidden rounded-full bg-red-200/60"
        >
          <motion.div
            className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-gradient-to-r from-red-500 via-blue-400 to-blue-300 shadow-lg shadow-blue-200/40"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.45 }}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-red-600"
        >
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block h-2 w-2 rounded-full bg-red-600"
          />
          loading page...
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen key="loading" />
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="min-h-screen"
        >
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Header />
              <motion.main
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="flex-grow"
              >
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/gallery" element={<GalleryPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </motion.main>
              <Footer />
            </div>
          </BrowserRouter>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App
