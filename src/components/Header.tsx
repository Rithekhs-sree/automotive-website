import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gradient-to-r from-blue-900 via-slate-900 to-red-900 backdrop-blur-xl shadow-2xl shadow-blue-900/50 border-b border-red-500/30'
          : 'bg-gradient-to-r from-blue-950/90 via-slate-900/80 to-red-950/90 backdrop-blur-md border-b border-blue-500/20'
      }`}
    >
      {/* Animated Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]" />
      
      {/* Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img src="/logo.png" alt="C & S Automotive logo" className="h-14 w-auto object-contain drop-shadow-lg" />
              <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/20 rounded-full blur-md transition-all duration-300" />
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-xl tracking-wide drop-shadow-lg">
                C & S <span className="text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.5)]">Automotive</span>
              </span>
              <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-red-500 to-blue-500 transition-all duration-500" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-[1rem] font-semibold tracking-wide transition-all duration-300 rounded-lg ${
                  isActive(link.path)
                    ? 'text-white bg-gradient-to-r from-red-600/30 to-blue-600/30 shadow-lg shadow-red-500/20'
                    : 'text-blue-100 hover:text-white hover:bg-white/10'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-full shadow-lg shadow-red-500/50" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gradient-to-r from-red-600/20 to-blue-600/20 border border-red-500/30 hover:from-red-600/40 hover:to-blue-600/40 transition-all"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-red-500/30 bg-gradient-to-b from-slate-900/95 to-blue-950/95 backdrop-blur-xl rounded-b-xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg text-[1rem] font-semibold tracking-wide transition-colors ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-red-600/30 to-blue-600/30 text-white border border-red-500/30'
                    : 'text-blue-100 hover:bg-white/10'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Custom animation keyframes */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </header>
  )
}