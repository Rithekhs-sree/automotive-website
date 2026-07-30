import { motion } from 'framer-motion'
import { Award, Clock, Star, CheckCircle, Sparkles, BookOpen, FileCheck, Battery, Droplet, Settings, Thermometer, MessageSquare, Quote } from 'lucide-react'

export default function AboutPage() {
  const services = [
    {
      icon: BookOpen,
      title: "Logbook Servicing",
      description: "Manufacturer-scheduled maintenance carried out to 4S dealership standards using fully synthetic engine oil, keeping your warranty intact."
    },
    {
      icon: FileCheck,
      title: "Pink Slip (e-Safety Check)",
      description: "Comprehensive roadworthiness inspection to ensure your vehicle meets NSW registration requirements, completed efficiently and honestly."
    },
    {
      icon: Battery,
      title: "Tyre and Battery Service",
      description: "Expert tyre fitting with honest advice on the right tyres & Battery Testing and Replacement"
    },
    {
      icon: Droplet,
      title: "Oil Leak Repairs",
      description: "Professional diagnosis and repair of engine and oil leaks to help prevent damage, maintain performance, and keep your vehicle running reliably."
    },
    {
      icon: Settings,
      title: "Mechanical Repairs",
      description: "Full range of mechanical repairs carried out by experienced technicians who explain the work required before proceeding."
    },
    {
      icon: Thermometer,
      title: "Cooling System Repairs",
      description: "Expert diagnosis and repair of cooling system issues, including radiators, water pumps, thermostats, and coolant leaks to help prevent overheating and engine damage."
    }
  ]

  const whyChooseItems = [
    {
      icon: Award,
      title: "Dealership Standards, Honest Pricing",
      description: "Customers consistently describe our service quality as matching a prestige 4S dealership - with transparent, reasonable pricing and no hidden costs."
    },
    {
      icon: MessageSquare,
      title: "Clear, Honest Communication",
      description: "Our team explains every finding and every charge before work begins. Multiple reviewers specifically highlight the clarity and honesty they experienced, giving them real confidence in what they were paying for."
    },
    {
      icon: Clock,
      title: "Open 5 Days, Extended Hours",
      description: "We are open Monday to Friday from 7:30 AM to 5:00pm - making it easier to fit your service around work and family life."
    },
    {
      icon: Star,
      title: "99% Good Review in Google",
      description: "Our reputation is built on fast turnaround times, professional service, and a comfortable waiting experience."
    }
  ]

  const testimonials = [
    {
      name: "James Mitchell",
      rating: 5,
      text: "Exceptional service! The team at C&S Automotive went above and beyond. They explained everything clearly and the pricing was very reasonable. My car runs like new after their logbook service. Highly recommend!",
      date: "2 weeks ago",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Sarah Thompson",
      rating: 5,
      text: "Best mechanic in Wentworthville! I've been bringing my car here for 3 years now. Always honest, always professional. They never try to upsell unnecessary services. The staff is friendly and the waiting area is comfortable.",
      date: "1 month ago",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Had an oil leak that two other mechanics couldn't properly diagnose. C&S Automotive found the issue quickly and fixed it at a fair price. Their attention to detail is impressive. Will definitely be back!",
      date: "3 weeks ago",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    {
      name: "Emma Rodriguez",
      rating: 5,
      text: "Fantastic experience from start to finish. Booked online, got a quick confirmation, and they had my car ready on time. The pink slip inspection was thorough and they even showed me what needed attention. Great communication!",
      date: "1 week ago",
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    {
      name: "David Park",
      rating: 5,
      text: "These guys are the real deal. Professional, knowledgeable, and fair. My cooling system was acting up and they diagnosed it immediately. Fixed the radiator and thermostat same day. Car hasn't overheated since. Top notch service!",
      date: "2 months ago",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Lisa Anderson",
      rating: 5,
      text: "I was dreading getting my car serviced but C&S made it so easy. They were transparent about costs, completed the work faster than expected, and even washed my car! The level of care and professionalism is outstanding.",
      date: "3 days ago",
      avatar: "https://i.pravatar.cc/150?img=16"
    }
  ]

  return (
    <div className="pt-20 overflow-hidden bg-black">
      {/* Hero Section - Diagonal Split (Dark Blue/Black Top-Right / Red Bottom-Left) */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-slate-950 via-blue-950 to-black overflow-hidden">
        {/* Diagonal red section from bottom-left */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-800 to-red-950" 
          style={{ clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0% 100%)' }} 
        />
        
        {/* Floating geometric shapes - Dark side */}
        <div className="absolute top-20 right-20 w-64 h-64 opacity-10 pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="w-full h-full border-4 border-white rounded-full"
          />
        </div>
        <div className="absolute top-40 left-20 w-32 h-32 opacity-10 pointer-events-none">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="w-full h-full border-4 border-white"
          />
        </div>

        {/* Floating geometric shapes - Red side */}
        <div className="absolute bottom-40 right-40 w-48 h-48 opacity-10 pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="w-full h-full border-4 border-white rounded-full"
          />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            
            {/* Left Content - On dark blue/black background */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-white"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
              >
                <Sparkles size={16} className="text-yellow-400" />
                <span className="text-sm font-semibold">Trusted Since 2009</span>
              </motion.div>

              {/* Heading */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif leading-[0.9]"
                >
                  <span className="block">ABOUT</span>
                  <span className="block bg-gradient-to-r from-red-500 via-blue-400 to-red-500 bg-clip-text text-transparent">
                    US
                  </span>
                </motion.h1>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-sm sm:text-base text-blue-100 max-w-md leading-relaxed"
              >
                More than just mechanics – we're your automotive partners dedicated to keeping you safe on every journey.
              </motion.p>

              {/* Feature list */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="space-y-2 sm:space-y-3"
              >
                {['Certified Expert Mechanics', 'State-of-the-Art Equipment', 'Customer-First Approach'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle size={20} className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-blue-200">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - On red background */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Stats cards - Dark themed for red background */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-slate-900 rounded-2xl p-4 sm:p-6 shadow-xl border border-red-500/30"
                >
                  <div className="text-2xl sm:text-3xl font-bold mb-2 text-red-400">15+</div>
                  <div className="text-xs sm:text-sm text-gray-300 font-medium">Years Experience</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="bg-blue-950 rounded-2xl p-4 sm:p-6 text-white shadow-xl border border-blue-700"
                >
                  <div className="text-2xl sm:text-3xl font-bold mb-2 text-blue-400">5K+</div>
                  <div className="text-xs sm:text-sm text-gray-300">Happy Customers</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-slate-900 rounded-2xl p-4 sm:p-6 shadow-xl border border-blue-500/30"
                >
                  <div className="text-2xl sm:text-3xl font-bold mb-2 text-blue-400">100%</div>
                  <div className="text-xs sm:text-sm text-gray-300 font-medium">Satisfaction Rate</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="bg-blue-950 rounded-2xl p-4 sm:p-6 text-white shadow-xl border border-red-500/30"
                >
                  <div className="text-2xl sm:text-3xl font-bold mb-2 text-red-400">50+</div>
                  <div className="text-xs sm:text-sm text-gray-300">Expert Team</div>
                </motion.div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 1, type: 'spring' }}
                className="absolute -top-6 -right-6 bg-yellow-400 text-slate-900 rounded-2xl p-4 shadow-2xl"
              >
                <div className="flex items-center gap-2">
                  <Star size={24} fill="currentColor" />
                  <div>
                    <div className="text-2xl font-bold">4.9</div>
                    <div className="text-xs font-semibold">Rating</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom wave - Slate-950 to transition to next section */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" className="w-full h-20 fill-slate-950">
            <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
          </svg>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-24 px-4 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          {/* Topic - Slides from left to right */}
          <motion.h2
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 bg-gradient-to-r from-red-500 via-blue-400 to-red-500 bg-clip-text text-transparent font-serif text-center"
          >
            Our Story
          </motion.h2>

          {/* Paragraph 1 - Slides from right to left */}
          <motion.p
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed text-center text-blue-100"
          >
            At C & S Automotive Service & Repairs, we believe quality automotive care starts with honesty, reliability, and attention to detail.
          </motion.p>

          {/* Paragraph 2 - Slides from right to left */}
          <motion.p
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed text-center text-blue-200"
          >
            Based in Wentworthville, we provide professional servicing, diagnostics, mechanical repairs, and preventative maintenance for a wide range of vehicles. Our focus is on delivering dependable workmanship, transparent pricing, and personalised customer service that gives every driver confidence on the road.
          </motion.p>

          {/* Paragraph 3 - Slides from right to left */}
          <motion.p
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed text-center text-blue-200"
          >
            From the moment you arrive, we'll take the time to explain any recommended work, answer your questions, and ensure you're informed before any repairs begin. No hidden costs, no unnecessary repairs—just professional automotive care you can trust.
          </motion.p>

          {/* Paragraph 4 - Slides from right to left */}
          <motion.p
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-sm sm:text-base leading-relaxed text-center text-blue-200"
          >
            Whether you need a routine service or more complex mechanical repairs, our team is committed to keeping your vehicle performing safely and efficiently.
          </motion.p>
        </div>
      </section>

      {/* Our Services Section - Dark Theme with Red Icon Boxes */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-600 mx-auto rounded-full" />
          </motion.div>

          {/* Services Grid - Alternating Layout */}
          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-2xl w-full bg-gradient-to-br from-blue-950 to-slate-900 rounded-2xl border border-blue-800 backdrop-blur-sm overflow-hidden hover:border-red-500/50 transition-all duration-300 ${isEven ? '' : 'ml-auto'}`}>
                    <div className="flex items-stretch flex-col sm:flex-row">
                      {/* Icon Section - Red */}
                      <div className="bg-gradient-to-br from-red-600 to-red-800 p-6 sm:p-8 flex items-center justify-center flex-shrink-0">
                        <Icon size={48} className="w-9 h-9 sm:w-12 sm:h-12 text-white" strokeWidth={1.5} />
                      </div>
                      
                      {/* Content Section */}
                      <div className="p-6 sm:p-8 flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                          {service.title}
                        </h3>
                        <p className="text-sm sm:text-base text-blue-200 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-red-500 via-blue-400 to-red-500 bg-clip-text text-transparent font-serif mb-4">
              Why Choose Us?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-600 mx-auto rounded-full" />
          </motion.div>

          {/* Grid of Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseItems.map((item, index) => {
              const Icon = item.icon
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    type: 'spring',
                    stiffness: 100
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="relative bg-blue-900 rounded-2xl p-8 border border-blue-700 shadow-lg hover:shadow-xl hover:border-red-500/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Minimal red accent at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 to-red-800" />
                  
                  {/* Icon at top center */}
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon size={40} className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-blue-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Red & Blue Dark Theme */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif mb-4">
              What Our Clients Say
            </h2>
            <p className="text-sm sm:text-base text-blue-200 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our valued customers have to say about their experience with C & S Automotive Service & Repairs.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -5 }}
                className="bg-blue-950/50 rounded-2xl p-6 border border-blue-800 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300 group"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote Icon */}
                <Quote size={28} className="text-red-500/50 mb-4" />

                {/* Testimonial Text */}
                <p className="text-sm sm:text-base text-blue-100 leading-relaxed mb-4 sm:mb-6">
                  {testimonial.text}
                </p>

                {/* Customer Info */}
                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-blue-800">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-blue-500"
                    />
                    <div>
                      <h4 className="text-white font-semibold text-xs sm:text-sm">{testimonial.name}</h4>
                      <p className="text-gray-500 text-[10px] sm:text-xs">{testimonial.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-red-400">
                    <span className="text-xs sm:text-sm font-bold">99</span>
                    <span className="text-[10px] sm:text-xs">pts</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}