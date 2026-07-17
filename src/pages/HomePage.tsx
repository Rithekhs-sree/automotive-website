import { motion } from 'framer-motion'
import { ArrowRight, Wrench, BookOpen, Wind, Zap, CheckCircle, Shield, Gauge, Award, BadgeDollarSign, RefreshCw, Handshake, Star, Sparkles, ChevronRight, Zap as ZapIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const services = [
    {
      title: 'Log book services',
      pinColor: 'bg-red-500',
      rotation: '-rotate-2',
      icon: BookOpen,
      hash: '#log-book-services',
    },
    {
      title: 'Air conditioning',
      pinColor: 'bg-blue-500',
      rotation: 'rotate-1',
      icon: Wind,
      hash: '#air-conditioning',
    },
    {
      title: 'Electrical',
      pinColor: 'bg-red-500',
      rotation: '-rotate-1',
      icon: Zap,
      hash: '#electrical',
    },
    {
      title: 'Esafety check',
      pinColor: 'bg-blue-500',
      rotation: 'rotate-2',
      icon: CheckCircle,
      hash: '#esafety-check',
    },
    {
      title: 'Agent for QBE insurance',
      pinColor: 'bg-red-500',
      rotation: '-rotate-2',
      icon: Shield,
      hash: '#qbe-insurance',
    },
  ]

  const whyChooseItems = [
    {
      title: 'Diagnostic Tools',
      subtitle: 'Advanced equipment',
      icon: Gauge,
      color: 'from-red-500 to-red-600',
      rotation: '-rotate-1',
    },
    {
      title: 'QUALITY',
      subtitle: 'Premium standards',
      icon: Award,
      color: 'from-blue-500 to-blue-600',
      rotation: 'rotate-1',
    },
    {
      title: 'RELIABILITY',
      subtitle: 'Trusted service',
      icon: Shield,
      color: 'from-red-500 to-red-600',
      rotation: '-rotate-1',
    },
    {
      title: 'VALUE',
      subtitle: 'Fair pricing',
      icon: BadgeDollarSign,
      color: 'from-blue-500 to-blue-600',
      rotation: 'rotate-1',
    },
    {
      title: 'FLEXIBILITY',
      subtitle: 'Adaptable solutions',
      icon: RefreshCw,
      color: 'from-red-500 to-red-600',
      rotation: '-rotate-1',
    },
    {
      title: 'INTEGRITY',
      subtitle: 'Honest approach',
      icon: Handshake,
      color: 'from-blue-500 to-blue-600',
      rotation: 'rotate-1',
    },
  ]

  const warrantyParagraphs = [
    'At C & S Automotive Service & Repairs, we stand behind the quality of our workmanship. Every mechanical repair and service is carried out with care using quality parts and industry-approved repair practices.',
    'Where applicable, replacement parts and components are covered by the manufacturer\'s warranty. Our team is committed to ensuring that every repair meets high standards of safety, reliability, and customer satisfaction.',
    'If you have any questions regarding the warranty coverage for a repair or replacement part, our team will be happy to explain the details before any work is carried out.',
  ]

  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Blueprint Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(220, 38, 38, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37, 99, 235, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Dot Grid Pattern - Top Right */}
        <div className="absolute top-8 right-8 w-40 h-40 opacity-50 pointer-events-none hidden lg:block">
          <div className="grid grid-cols-5 gap-4 h-full">
            {Array.from({ length: 25 }, (_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, delay: i * 0.08, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-red-500"
              />
            ))}
          </div>
        </div>

        {/* Speed Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={i}
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 1200, opacity: [0, 0.7, 0] }}
              transition={{
                duration: 2.5,
                delay: i * 0.4,
                repeat: Infinity,
                repeatDelay: 4,
                ease: 'easeInOut',
              }}
              className="absolute h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent"
              style={{
                top: `${20 + i * 12}%`,
                width: `${100 + i * 15}px`,
                transform: 'rotate(-12deg)',
              }}
            />
          ))}
        </div>

        {/* RPM Dashed Circles */}
        <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[500px] h-[500px] pointer-events-none hidden lg:block">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-red-500/40"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-8 rounded-full border-2 border-blue-500/40"
          />
          {/* RPM tick marks */}
          {Array.from({ length: 16 }, (_, i) => {
            const angle = (i * 22.5) * (Math.PI / 180)
            const x = 250 + 240 * Math.cos(angle)
            const y = 250 + 240 * Math.sin(angle)
            return (
              <motion.div
                key={i}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, delay: i * 0.12, repeat: Infinity }}
                className="absolute w-1.5 h-4 bg-red-500 rounded-full"
                style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
              />
            )
          })}
        </div>

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Top badge with racing stripe */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-3"
              >
                <div className="flex gap-1">
                  <div className="w-1 h-8 bg-red-500 rounded-full" />
                  <div className="w-1 h-8 bg-blue-500 rounded-full" />
                </div>
                <div className="inline-flex items-center gap-2 text-sm text-blue-200 font-medium">
                  <Wrench size={16} className="text-red-400" />
                  Trusted local mechanic servicing the western Sydney community
                </div>
              </motion.div>

              {/* Main heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight font-serif">
                <span className="block bg-gradient-to-r from-red-500 via-blue-400 to-red-500 bg-clip-text text-transparent">
                  Reliable automotive
                </span>
                <span className="block bg-gradient-to-r from-red-500 via-blue-400 to-red-500 bg-clip-text text-transparent">
                  care for every journey.
                </span>
              </h1>

              {/* Description */}
              <p className="text-blue-100 text-base leading-relaxed max-w-md">
                From log book servicing to air conditioning and electrical repairs, we deliver expert workmanship with honest advice and fast turnaround.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-5 pt-3">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-blue-600 px-9 py-4 font-semibold text-white shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:scale-105"
                >
                  Explore Services
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={20} />
                  </motion.span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-blue-500 bg-transparent px-9 py-4 font-semibold text-blue-300 hover:bg-blue-600 hover:text-white transition-all"
                >
                  Book a Visit
                  <ChevronRight size={18} />
                </Link>
              </div>
            </motion.div>

            {/* RIGHT - Car in Dark Card Container */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative hidden lg:flex justify-center items-center"
            >
              {/* Dark card container for car */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl shadow-2xl shadow-blue-900/50 p-8 w-full max-w-xl border border-blue-700"
              >
                {/* Ground shadow under car */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black/40 rounded-full blur-xl" />

                {/* Car Image */}
                <motion.img
                  src="/car.jpeg"
                  alt="Car"
                  className="relative w-full h-auto object-contain select-none"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                />

                {/* FAST SERVICE Badge - Top Right of card */}
                <motion.div
                  initial={{ scale: 0, opacity: 0, rotate: -20 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 1.2, type: 'spring', bounce: 0.5 }}
                  className="absolute -top-3 -right-3 bg-gradient-to-br from-red-600 to-blue-600 text-white rounded-xl px-4 py-2 shadow-xl z-20 border border-red-400"
                >
                  <div className="flex items-center gap-2">
                    <ZapIcon size={18} fill="currentColor" />
                    <div className="leading-tight">
                      <div className="text-xs font-bold">FAST</div>
                      <div className="text-[10px] opacity-90">SERVICE</div>
                    </div>
                  </div>
                </motion.div>

                {/* 5.0 Star Rating Badge - Bottom Left of card */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4, type: 'spring', bounce: 0.5 }}
                  className="absolute -bottom-3 left-8 bg-blue-950 rounded-xl px-4 py-2 shadow-xl z-20 border border-blue-700"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star key={i} size={14} className="text-yellow-400" fill="currentColor" />
                      ))}
                    </div>
                    <div className="text-sm font-bold text-white">5.0</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="relative bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <motion.h2
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif leading-tight mb-10"
          >
            <span className="bg-gradient-to-r from-red-500 via-blue-400 to-red-500 bg-clip-text text-transparent">
              Welcome to C & S Automotive Service & Repairs
            </span>
            <span className="block mt-2 text-blue-200">
              – Your Trusted Local Mechanic in Wentworthville.
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-blue-100 text-base sm:text-lg leading-relaxed text-justify mb-5"
          >
            <p>
              At C & S Automotive Service & Repairs, we are committed to providing reliable, high-quality automotive servicing and repairs for all makes and models. Whether your vehicle needs routine maintenance, mechanical repairs, diagnostics, or general servicing, our experienced team works with care and attention to ensure your vehicle remains safe and roadworthy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-blue-100 text-base sm:text-lg leading-relaxed text-justify mb-5"
          >
            <p>
              Our mission is to deliver honest, professional automotive services at competitive prices while building long-lasting relationships with our customers through quality workmanship and excellent customer service.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-blue-100 text-base sm:text-lg leading-relaxed text-justify mb-5"
          >
            <p>
              We understand that unexpected vehicle repairs can be stressful. That's why we believe in transparent communication and fair pricing. Before carrying out any additional work, we'll explain the issue, discuss your options, and only proceed once you have approved the repairs—giving you complete confidence with no unexpected costs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-blue-100 text-base sm:text-lg leading-relaxed text-justify"
          >
            <p>
              Whether you need a scheduled service or assistance with a mechanical issue, you can rely on C & S Automotive Service & Repairs to keep your vehicle performing at its best.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-10"
          >
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-red-600 hover:to-blue-600 px-10 py-4 font-bold text-white uppercase tracking-wider text-sm shadow-lg shadow-blue-500/30 hover:shadow-red-500/30 transition-all duration-300 hover:scale-105"
            >
              Load More <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="relative bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/30 to-slate-900 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-4">
              <span className="bg-gradient-to-r from-red-500 via-blue-400 to-red-500 bg-clip-text text-transparent">
                We provide following services
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              let colStartClass = ""
              if (index === 3) colStartClass = "lg:col-start-2"
              if (index === 4) colStartClass = "lg:col-start-4"

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotate: 0 }}
                  whileInView={{ opacity: 1, y: 0, rotate: service.rotation === '-rotate-1' ? -1 : service.rotation === 'rotate-1' ? 1 : service.rotation === '-rotate-2' ? -2 : 2 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08, rotate: 0, y: -12, transition: { duration: 0.3 } }}
                  className={`relative lg:col-span-2 ${colStartClass} rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group ${service.rotation} overflow-hidden border border-blue-800 bg-gradient-to-br from-blue-950 to-slate-900`}
                  style={{ boxShadow: '0 15px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)' }}
                >
                  <Link to={`/services${service.hash}`} className="block h-full relative">
                    <div className="absolute top-0 left-0 w-40 h-40 bg-red-500/20 rounded-full blur-3xl -translate-x-16 -translate-y-16 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl translate-x-16 translate-y-16 pointer-events-none" />

                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <div className={`w-8 h-8 ${service.pinColor} rounded-full shadow-lg relative`}>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent" />
                        <div className="absolute top-1 left-1.5 w-2 h-2 rounded-full bg-white/60" />
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-2.5 bg-black/40 rounded-full blur-sm" />
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-xl opacity-20 pointer-events-none"
                      style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(255,255,255,0.03) 29px)' }}
                    />

                    <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[280px] px-8 py-12">
                      <div className="mb-6 p-5 rounded-full bg-blue-900/50 group-hover:bg-blue-800/50 transition-colors shadow-md border border-blue-700">
                        <Icon size={48} className="text-blue-200" />
                      </div>
                      <h3 className="text-2xl font-bold text-white leading-tight">
                        {service.title}
                      </h3>
                    </div>

                    <div className="absolute bottom-0 right-0 w-10 h-10 overflow-hidden rounded-br-xl">
                      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-red-500/20 to-transparent" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="relative bg-black py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative max-w-7xl mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-blue-600 px-6 py-2 text-white text-sm font-semibold mb-6 shadow-lg shadow-red-500/30">
              <Wrench size={16} />
              Why Choose Us
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif leading-tight">
              <span className="bg-gradient-to-r from-red-500 via-blue-400 to-red-500 bg-clip-text text-transparent">
                Choose Us For Car Mechanic,
              </span>
              <span className="block mt-2 text-white">
                Car Service & Car Repairs?
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="relative bg-blue-950 rounded-3xl shadow-2xl p-8 md:p-16 overflow-hidden border border-blue-800">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-br from-red-950/40 via-blue-950/30 to-blue-950/40 blur-2xl" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[450px] h-[450px] md:w-[600px] md:h-[600px] rounded-full border-2 border-red-600/30" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border-2 border-blue-600/30" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full border-2 border-red-600/30" />
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  {whyChooseItems.slice(0, 3).map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, x: 10 }}
                        className={`relative bg-blue-900 rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-700 ${item.rotation} max-w-sm`}
                        style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg">
                            <Icon size={28} className="text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-white leading-tight">
                              {item.title}
                            </h3>
                            <p className="text-sm text-blue-300 mt-1">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                <div className="flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative"
                  >
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-red-600 via-red-500 to-red-700 flex items-center justify-center shadow-2xl shadow-red-600/50">
                      <Wrench size={56} className="text-white md:w-14 md:h-14" strokeWidth={2.5} />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent" />
                  </motion.div>
                </div>

                <div className="space-y-6">
                  {whyChooseItems.slice(3, 6).map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: (index + 3) * 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, x: -10 }}
                        className={`relative bg-blue-900 rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-700 ${item.rotation} max-w-sm`}
                        style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg">
                            <Icon size={28} className="text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-white leading-tight">
                              {item.title}
                            </h3>
                            <p className="text-sm text-blue-300 mt-1">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WARRANTY STATEMENT SECTION */}
      <section className="relative bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative max-w-7xl mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-blue-950 to-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-blue-800"
          >
            <div className="grid lg:grid-cols-2 min-h-[600px]">
              
              {/* LEFT SIDE - Dark Blue with Car Image */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 md:p-12 flex flex-col justify-center items-center overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-600/10 rounded-full blur-3xl" />
                
                <div className="relative z-10 mb-8">
                  <motion.img
                    src="/Audi.jpeg"
                    alt="Audi"
                    className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="relative z-10 text-center"
                >
                  <div className="inline-block bg-blue-900/50 backdrop-blur-sm px-6 py-2 rounded-full mb-4 border border-blue-700">
                    <span className="text-blue-300 text-sm font-semibold uppercase tracking-wider">Our Commitment</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    WARRANTY
                    <br />
                    STATEMENT
                  </h2>
                  <div className="mt-4 w-24 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto rounded-full" />
                </motion.div>
              </motion.div>

              {/* RIGHT SIDE */}
              <div className="relative flex flex-col overflow-hidden">
                <div className="flex-1 bg-slate-900 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="space-y-6">
                    {warrantyParagraphs.map((paragraph, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 + index * 0.2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="text-blue-100 leading-relaxed text-base md:text-lg"
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>
                </div>

                <div className="flex-1 bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 p-8 md:p-12 lg:p-16 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-br from-yellow-400/10 via-red-500/10 to-blue-500/10 blur-3xl" />
                  </div>

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border-2 border-dashed border-yellow-400/10 pointer-events-none"
                  />

                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border border-blue-400/10 pointer-events-none"
                  />

                  <motion.div
                    animate={{ y: [0, -15, 0], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-12 left-16 text-blue-300/40"
                  >
                    <Sparkles size={20} />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                    className="absolute top-20 right-20 text-red-300/40"
                  >
                    <Sparkles size={16} />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -10, 0], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="absolute bottom-16 left-24 text-blue-300/40"
                  >
                    <Sparkles size={18} />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 15, 0], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                    className="absolute bottom-20 right-16 text-red-300/40"
                  >
                    <Sparkles size={14} />
                  </motion.div>

                  <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-16 right-32 text-yellow-400/50"
                  >
                    <Star size={18} fill="currentColor" />
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], rotate: [0, -15, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
                    className="absolute bottom-24 left-32 text-yellow-400/50"
                  >
                    <Star size={16} fill="currentColor" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="relative z-10 flex flex-col items-center"
                  >
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-yellow-400/20 blur-3xl" />
                    </div>

                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      className="relative"
                    >
                      <img
                        src="/g.jpg"
                        alt="Satisfaction Guarantee Badge"
                        className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
                        style={{ filter: 'drop-shadow(0 0 30px rgba(250, 204, 21, 0.3)) brightness(1.1)' }}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      viewport={{ once: true }}
                      className="text-center mt-4 md:mt-6"
                    >
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Star size={16} className="text-yellow-400" fill="currentColor" />
                        <Star size={16} className="text-yellow-400" fill="currentColor" />
                        <Star size={16} className="text-yellow-400" fill="currentColor" />
                        <Star size={16} className="text-yellow-400" fill="currentColor" />
                        <Star size={16} className="text-yellow-400" fill="currentColor" />
                      </div>
                      <p className="text-yellow-400 font-bold text-lg md:text-xl tracking-wider uppercase">
                        100% Satisfaction
                      </p>
                      <p className="text-blue-200 text-sm md:text-base tracking-widest uppercase mt-1">
                        Guaranteed
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}