import { MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-slate-950 text-white pt-20 pb-10 overflow-hidden">
      {/* Vibrant Top Gradient Border - Strong Red to Blue to Red */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-blue-600 to-red-600" />
      
      {/* Background Ambient Glows - Enhanced Red Presence */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center shadow-lg shadow-red-900/30">
                <span className="text-white font-bold text-sm">C&S</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight">
                <span className="text-red-500">C & S</span> <span className="text-white">Automotive</span>
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Professional automotive care you can trust. Expert mechanics, quality service, and fair prices in Wentworthville.
            </p>
            
            {/* Back to Top Button */}
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm font-medium text-red-400 hover:text-blue-400 transition-colors duration-300"
            >
              <span>Back to top</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Column 2: Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-red-600 rounded-full" />
              Contact Us
            </h4>
            <div className="space-y-4">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-red-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium group-hover:text-red-400 transition-colors">Visit Our Workshop</p>
                  <p className="text-slate-400 text-xs mt-0.5">14 Hill Street, Wentworthville, NSW 2145</p>
                </div>
              </a>
              
              <a href="tel:0296319288" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300">
                  <Phone className="w-4 h-4 text-red-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium group-hover:text-red-400 transition-colors">Call Us</p>
                  <p className="text-slate-400 text-xs mt-0.5">(02) 9631 9288</p>
                </div>
              </a>

              <a href="mailto:automotive794@gmail.com" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300">
                  <Mail className="w-4 h-4 text-red-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium group-hover:text-red-400 transition-colors">Email Us</p>
                  <p className="text-slate-400 text-xs mt-0.5">automotive794@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Column 3: Opening Hours */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full" />
              Opening Hours
            </h4>
            <div className="bg-slate-900/80 border border-red-500/20 rounded-xl p-5 backdrop-blur-sm relative overflow-hidden group hover:border-red-500/40 transition-colors duration-300">
              {/* Subtle red accent corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-red-600/10 rounded-bl-3xl pointer-events-none" />
              
              <div className="flex items-start gap-3 mb-4 relative z-10">
                <Clock className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-white font-medium text-sm">Monday - Friday</p>
                  <p className="text-red-400 text-sm font-bold">7:30 AM - 5:00 PM</p>
                </div>
              </div>
              <div className="border-t border-slate-800 pt-4 flex items-start gap-3 relative z-10">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Saturday - Sunday</p>
                  <p className="text-red-500 text-sm font-bold">Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Social & Quick Note */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-red-600 rounded-full" />
              Connect With Us
            </h4>
            <p className="text-slate-400 text-sm">
              Stay updated with our latest services, tips, and community events.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1BGKXURTv3/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-slate-900 border border-red-500/30 rounded-xl flex items-center justify-center text-red-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-900/30"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/cnsautorepairsandservices?igsh=MXR6M2hnaDNrcDBjOQ==&utm_source=ig_contact_invite"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-slate-900 border border-red-500/30 rounded-xl flex items-center justify-center text-red-400 hover:text-white hover:bg-gradient-to-br hover:from-red-600 hover:to-blue-600 hover:border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-900/30"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="relative pt-8 border-t border-slate-800/50">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} <span className="text-red-400">C & S Automotive</span> Service & Repairs. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-red-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}