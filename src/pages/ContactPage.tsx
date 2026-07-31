import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, Wrench } from 'lucide-react'
import { type FormEvent, type KeyboardEvent, useState } from 'react'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const contactEndpoint = import.meta.env.VITE_API_URL?.trim()
    ? `${import.meta.env.VITE_API_URL.trim().replace(/\/$/, '')}/api/contact`
    : import.meta.env.DEV
      ? 'http://localhost:3001/api/contact'
      : 'https://automotive-website-z3ds.onrender.com/api/contact'

  const ownerEmail = 'automotive794@gmail.com'

  const openMailClient = (data: {
    fullName: string
    phone: string
    email: string
    vehicle: string
    service: string
    message: string
  }) => {
    const body = encodeURIComponent(`Name: ${data.fullName}\nPhone: ${data.phone}\nEmail: ${data.email}\nVehicle: ${data.vehicle || 'Not specified'}\nService: ${data.service || 'Not specified'}\nMessage: ${data.message}`)
    window.location.href = `mailto:${ownerEmail}?subject=${encodeURIComponent('Contact Form Submission from ' + data.fullName)}&body=${body}`
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    const formData = new FormData(form)
    const data = {
      fullName: formData.get('fullName') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      vehicle: formData.get('vehicle') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
    }

    try {
      console.log('Submitting to endpoint:', contactEndpoint)
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      console.log('Response status:', response.status)
      console.log('Response ok:', response.ok)

      let result: { success?: boolean; message?: string; error?: string } = {}
      const text = await response.text()
      try {
        result = JSON.parse(text)
      } catch (parseError) {
        console.warn('Failed to parse response JSON:', parseError, text)
        result = {
          success: false,
          message: `Unexpected server response: ${text.slice(0, 200)}`
        }
      }

      console.log('Response data:', result)
      console.log('Result success:', result.success)

      if (response.ok && result.success) {
        setSubmitStatus('success')
        setSubmitMessage(result.message || 'Message sent successfully! We will get back to you soon.')
        try {
          if (form && typeof form.reset === 'function') {
            form.reset()
          }
        } catch (resetError) {
          console.warn('Form reset failed:', resetError)
        }
        window.setTimeout(() => {
          setSubmitStatus('idle')
          setSubmitMessage('')
        }, 7000)
      } else {
        const message = result?.message || result?.error || 'Failed to send your message. Please try again later or email automotive794@gmail.com.'
        setSubmitStatus('error')
        setSubmitMessage(message)
        console.error('Server returned error for contact endpoint:', response.status, result)
        window.setTimeout(() => {
          setSubmitStatus('idle')
          setSubmitMessage('')
        }, 7000)
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setSubmitMessage(message || 'Network error. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    isLastField: boolean
  ) => {
    if (e.key === 'Enter' && !e.shiftKey && e.currentTarget.tagName !== 'SELECT') {
      e.preventDefault()
      if (isLastField) {
        const form = e.currentTarget.form
        if (form) form.requestSubmit()
      } else {
        const form = e.currentTarget.form
        if (form) {
          const inputs = Array.from(form.querySelectorAll('input, textarea, select')) as HTMLElement[]
          const index = inputs.indexOf(e.currentTarget)
          if (index !== -1 && inputs[index + 1]) {
            ;(inputs[index + 1] as HTMLElement).focus()
          }
        }
      }
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* HERO SECTION with Enhanced Designs */}
      {/* Increased min-h and pt-32 to ensure content sits comfortably below the fixed header */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center bg-slate-950 overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Diagonal Lines Pattern */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 1200, opacity: [0, 0.5, 0] }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 8,
                ease: "easeInOut"
              }}
              className="absolute h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent"
              style={{
                top: `${10 + i * 5}%`,
                width: `${200 + i * 30}px`,
                transform: 'rotate(-15deg)'
              }}
            />
          ))}
        </div>

        {/* Animated Glowing Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0], 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0], 
            y: [0, 50, 0], 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[120px]"
        />

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Blue Squares */}
          <motion.div
            animate={{ rotate: 360, opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-32 h-32 border-2 border-blue-500/30 rounded-lg"
          />
          <motion.div
            animate={{ rotate: -360, opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-32 left-16 w-24 h-24 border-2 border-blue-500/20"
          />
          
          {/* Red Circles */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-40 left-32 w-16 h-16 border-2 border-red-500/30 rounded-full"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, delay: 0.5 }}
            className="absolute bottom-40 right-40 w-20 h-20 border-2 border-red-500/20 rounded-full"
          />

          {/* Blue Corner Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-0 left-0 w-40 h-40 bg-blue-700"
            style={{ 
              borderRadius: '0 0 100px 0',
            }}
          />
          
          {/* Red Corner Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute bottom-0 right-0 w-32 h-32 bg-red-700"
            style={{ 
              borderRadius: '100px 0 0 0',
            }}
          />
        </div>

        {/* Content - Pushed down slightly with mt-8 to clear the header comfortably */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-6 sm:mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-950/80 to-blue-900/80 border-l-2 border-blue-500 border-r-2 border-red-500 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 backdrop-blur-md shadow-lg shadow-blue-900/30"
          >
            <Wrench size={16} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400" />
            <span className="text-blue-200 text-xs sm:text-sm font-semibold tracking-wider uppercase">We're Here to Help</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif leading-tight mb-4 sm:mb-6"
          >
            <span className="block text-white">Contact</span>
            <span className="block bg-gradient-to-r from-red-500 via-blue-400 to-red-500 bg-clip-text text-transparent">
              Us
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed"
          >
            Get in touch with our expert team for all your automotive servicing, repair, and inspection needs.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 flex items-center justify-center gap-3"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500" />
            <div className="w-3 h-3 bg-red-500 rotate-45" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-500" />
          </motion.div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-blue-950/30 to-transparent pointer-events-none" />
      </section>

      {/* CONTACT INFO & MAP SECTION */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-white mb-2">Get In Touch</h2>
                <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-red-500 to-blue-600 rounded-full" />
              </div>

              <div className="space-y-4 sm:space-y-6">
                {[
                  { icon: MapPin, title: "Address", lines: ["14 Hill Street", "Wentworthville", "NSW 2145, Australia"] },
                  { icon: Phone, title: "Phone", lines: ["(02) 1234 5678", "Mon-Fri: 7:30am - 5:00pm"] },
                  { icon: Mail, title: "Email", lines: ["info@csautomotive.com.au", "We respond within 24 hours"] },
                  { icon: Clock, title: "Opening Hours", lines: ["Monday - Friday: 7:30am - 5:00pm", "Saturday - Sunday: Closed"] }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 sm:gap-4 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:border-red-500/50 group-hover:bg-red-500/10 transition-all duration-300">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg text-white mb-1">{item.title}</h3>
                      {item.lines.map((line, i) => (
                        <p key={i} className="text-blue-200/80 text-xs sm:text-sm leading-relaxed">{line}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[300px] sm:h-[400px] lg:h-full min-h-[300px] lg:min-h-[400px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-blue-900/20"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.123456789!2d150.938!3d-33.805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743d%3A0x5017d681632a850!2s14%20Hill%20St%2C%20Wentworthville%20NSW%202145%2C%20Australia!5e0!3m2!1sen!2sau!4v1600000000000!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              {/* Map Overlay Border */}
              <div className="absolute inset-0 pointer-events-none border-2 border-slate-800 rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* MESSAGE FORM SECTION */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(37, 99, 235, 0.3) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-white mb-4">Send Us a Message</h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-red-500 to-blue-600 mx-auto rounded-full" />
            <p className="text-blue-200 mt-4 text-sm sm:text-base">Fill out the form below and we'll get back to you as soon as possible.</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-sm space-y-4 sm:space-y-6 shadow-2xl shadow-blue-900/10"
            onSubmit={handleSubmit}
          >
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-semibold text-blue-200">Full Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="John Doe"
                  onKeyDown={(e) => handleKeyDown(e, false)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-950 border border-slate-700 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-white placeholder-slate-500 text-sm sm:text-base"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-semibold text-blue-200">Phone <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(02) 1234 5678"
                  onKeyDown={(e) => handleKeyDown(e, false)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-950 border border-slate-700 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-white placeholder-slate-500 text-sm sm:text-base"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-semibold text-blue-200">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  onKeyDown={(e) => handleKeyDown(e, false)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-950 border border-slate-700 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-white placeholder-slate-500 text-sm sm:text-base"
                />
              </div>

              {/* Vehicle */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-semibold text-blue-200">Vehicle (Make & Model)</label>
                <input
                  type="text"
                  name="vehicle"
                  placeholder="e.g., 2018 Toyota Camry"
                  onKeyDown={(e) => handleKeyDown(e, false)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-950 border border-slate-700 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-white placeholder-slate-500 text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Service Required */}
            <div className="space-y-2">
              <label className="block text-xs sm:text-sm font-semibold text-blue-200">Service Required</label>
              <select
                name="service"
                onKeyDown={(e) => handleKeyDown(e, false)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-950 border border-slate-700 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-white appearance-none cursor-pointer text-sm sm:text-base"
              >
                <option value="" className="bg-slate-900">Select a service...</option>
                <option value="logbook" className="bg-slate-900">Log Book Service</option>
                <option value="aircon" className="bg-slate-900">Air Conditioning</option>
                <option value="electrical" className="bg-slate-900">Electrical</option>
                <option value="esafety" className="bg-slate-900">Esafety Check</option>
                <option value="qbe" className="bg-slate-900">Agent for QBE Insurance</option>
                <option value="other" className="bg-slate-900">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-xs sm:text-sm font-semibold text-blue-200">Message</label>
              <textarea
                name="message"
                placeholder="Tell us about your automotive needs..."
                rows={4}
                onKeyDown={(e) => handleKeyDown(e, true)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-950 border border-slate-700 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-white placeholder-slate-500 resize-none text-sm sm:text-base"
              />
            </div>

            {/* Status Messages */}
            {submitStatus !== 'idle' && submitMessage && (
              <div className={`px-4 py-3 rounded-xl text-sm ${submitStatus === 'success' ? 'bg-green-900/50 border border-green-700 text-green-200' : 'bg-red-900/50 border border-red-700 text-red-200'}`}>
                {submitMessage}
              </div>
            )}

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 sm:py-4 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white rounded-xl font-bold text-base sm:text-lg shadow-lg shadow-red-600/20 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  )
}