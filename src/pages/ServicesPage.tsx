import { motion, AnimatePresence } from 'framer-motion'
import { 
  BookOpen, Wind, Zap, CheckCircle, Shield, ArrowRight, Sparkles, X, CheckCircle2, Wrench, Award, ShieldCheck, Cpu, FileText, 
  Thermometer, Droplets, Gauge, Fan, Filter, Search, KeyRound, Monitor, Radio, AlertTriangle, Car, Phone, CarFront, Cog, Users, Star,
  ListChecks, ClipboardList, DollarSign, MessageSquare, CircleDot, Lightbulb, Disc, RefreshCw, Calendar, FileCheck, ClipboardCheck,
  Handshake, Clock, ThumbsUp, UserCheck
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function ServicesPage() {
  const [isLogbookOpen, setIsLogbookOpen] = useState(false)
  const [isAirOpen, setIsAirOpen] = useState(false)
  const [isElectricalOpen, setIsElectricalOpen] = useState(false)
  const [isEsafetyOpen, setIsEsafetyOpen] = useState(false)
  const [isAgentOpen, setIsAgentOpen] = useState(false)

  const services = [
    {
      slug: "logbook",
      icon: BookOpen,
      title: "Log Book Services",
      description: "Manufacturer-scheduled maintenance carried out to dealership standards, keeping your warranty fully intact.",
      color: "from-red-500 to-red-600",
      isPopup: true,
      popupType: "logbook"
    },
    {
      slug: "air",
      icon: Wind,
      title: "Air Conditioning",
      description: "Comprehensive AC diagnostics, regassing, and repairs to keep you cool and comfortable on every journey.",
      color: "from-blue-500 to-blue-600",
      isPopup: true,
      popupType: "air"
    },
    {
      slug: "electrical",
      icon: Zap,
      title: "Electrical",
      description: "Expert diagnosis and repair of complex electrical systems, from battery issues to wiring and lighting.",
      color: "from-red-500 to-red-600",
      isPopup: true,
      popupType: "electrical"
    },
    {
      slug: "esafety",
      icon: CheckCircle,
      title: "Esafety Check",
      description: "Thorough Pink Slip and roadworthy inspections to ensure your vehicle meets all NSW safety standards.",
      color: "from-blue-500 to-blue-600",
      isPopup: true,
      popupType: "esafety"
    },
    {
      slug: "agent",
      icon: Shield,
      title: "Agent for QBE Insurance",
      description: "Trusted and authorized QBE insurance agent, providing seamless claims and repair services for your peace of mind.",
      color: "from-red-500 to-red-600",
      isPopup: true,
      popupType: "agent"
    }
  ]

  const handleLearnMore = (service: typeof services[0]) => {
    if (service.isPopup) {
      if (service.popupType === "logbook") setIsLogbookOpen(true)
      else if (service.popupType === "air") setIsAirOpen(true)
      else if (service.popupType === "electrical") setIsElectricalOpen(true)
      else if (service.popupType === "esafety") setIsEsafetyOpen(true)
      else if (service.popupType === "agent") setIsAgentOpen(true)
      document.body.style.overflow = 'hidden'
    } else {
      window.location.href = `/services/${service.slug}`
    }
  }

  const closeLogbookPopup = () => { setIsLogbookOpen(false); document.body.style.overflow = 'auto' }
  const closeAirPopup = () => { setIsAirOpen(false); document.body.style.overflow = 'auto' }
  const closeElectricalPopup = () => { setIsElectricalOpen(false); document.body.style.overflow = 'auto' }
  const closeEsafetyPopup = () => { setIsEsafetyOpen(false); document.body.style.overflow = 'auto' }
  const closeAgentPopup = () => { setIsAgentOpen(false); document.body.style.overflow = 'auto' }

  const logbookFeatures = [
    { icon: Wrench, text: "Lubrication and Filter changes" },
    { icon: CheckCircle2, text: "Retightening of noted components to specific torque settings" },
    { icon: Wrench, text: "Engine Flushes" },
    { icon: CheckCircle2, text: "Tyre pressure and wear checks" },
  ]

  const logbookReasons = [
    { icon: Award, title: "MTA Certified", text: "Safeguards the reputation of automotive traders" },
    { icon: ShieldCheck, title: "All Work Guaranteed", text: "Because the experienced mechanics handle it" },
    { icon: FileText, title: "Warranty on all new parts", text: "A transparent invoice for items is provided" },
    { icon: Cpu, title: "Latest diagnostic equipment", text: "Remains updated to serve better" },
    { icon: CheckCircle2, title: "OEM standards", text: "Ensuring you get what you have paid for as all parts comply with OEM standards" },
  ]

  const airServices = [
    { icon: Search, text: "Air conditioning diagnostics" },
    { icon: Droplets, text: "Air conditioning regassing" },
    { icon: Search, text: "Leak detection and repairs" },
    { icon: Wrench, text: "Compressor inspections" },
    { icon: Fan, text: "Condenser and evaporator checks" },
    { icon: Filter, text: "Cabin filter inspection and replacement" },
    { icon: Thermometer, text: "Heating and cooling system inspections" },
    { icon: Gauge, text: "Performance testing" },
  ]

  const airReasons = [
    { icon: Cpu, title: "Modern diagnostic equipment", text: "Advanced tools for accurate problem identification" },
    { icon: Award, title: "Experienced technicians", text: "Skilled professionals with years of expertise" },
    { icon: ShieldCheck, title: "Honest recommendations", text: "Transparent advice on what your vehicle truly needs" },
    { icon: CheckCircle2, title: "Quality workmanship", text: "High standards in every repair and service" },
    { icon: FileText, title: "Transparent pricing", text: "Clear, upfront costs with no hidden fees" },
    { icon: Shield, title: "Reliable service you can trust", text: "Consistent quality you can count on" },
  ]

  const electricalServices = [
    { icon: AlertTriangle, text: "Car alarm installation and repairs" },
    { icon: KeyRound, text: "OEM key programming" },
    { icon: Monitor, text: "Power window repairs" },
    { icon: CarFront, text: "Reverse camera installation" },
    { icon: Radio, text: "Reverse parking sensor installation" },
    { icon: Phone, text: "Mobile phone kit installation" },
    { icon: Radio, text: "In-car audio system installation (CD/DVD & multimedia systems)" },
    { icon: ShieldCheck, text: "SRS airbag diagnostics and repairs" },
    { icon: Zap, text: "Electrical fault diagnosis" },
    { icon: Search, text: "Vehicle electrical system inspections" },
  ]

  const electricalAdvantages = [
    { icon: Cpu, text: "Advanced diagnostic equipment" },
    { icon: Award, text: "Experienced automotive technicians" },
    { icon: CheckCircle2, text: "Quality workmanship" },
    { icon: ShieldCheck, text: "Honest recommendations" },
    { icon: FileText, text: "Transparent pricing" },
    { icon: Wrench, text: "Reliable repairs" },
    { icon: Cog, text: "Quality replacement parts" },
    { icon: Users, text: "Customer-focused service" },
  ]

  const vehicleBrands = [
    "Toyota", "Mazda", "Ford", "Hyundai", "Nissan",
    "Holden", "Mitsubishi", "Subaru", "Isuzu",
    "European and Japanese vehicles", "Many other makes and models"
  ]

  const esafetyConditions = [
    { icon: FileText, text: "Your registration renewal notice requires an inspection." },
    { icon: Calendar, text: "Your vehicle is five years old or older and requires registration renewal." },
    { icon: Car, text: "You are registering a light vehicle in NSW that requires an inspection." },
    { icon: CarFront, text: "You are registering certain heavy vehicles where an inspection is required." },
  ]

  const esafetyInspections = [
    { icon: CircleDot, text: "Tyre condition and tread depth" },
    { icon: CarFront, text: "Vehicle body condition" },
    { icon: Lightbulb, text: "Headlights, indicators, brake lights, dash lights and interior lights" },
    { icon: ShieldCheck, text: "Seatbelts and restraint systems" },
    { icon: Disc, text: "Brake performance and efficiency" },
    { icon: Droplets, text: "Engine and driveline fluid leaks" },
    { icon: Cog, text: "Engine, exhaust and driveline condition" },
  ]

  const esafetyWhyChoose = [
    { icon: Zap, title: "Fast and efficient inspections", text: "Get back on the road quickly with our streamlined process" },
    { icon: Users, title: "Friendly and experienced technicians", text: "Qualified professionals who make the process stress-free" },
    { icon: MessageSquare, title: "Honest advice and transparent communication", text: "Clear explanations of any issues found during inspection" },
    { icon: DollarSign, title: "Competitive pricing", text: "Fair and upfront costs with no hidden fees" },
    { icon: Wrench, title: "Professional repairs if required", text: "Seamless transition from inspection to necessary repairs" },
    { icon: Award, title: "Quality workmanship you can rely on", text: "Dependable service ensuring your vehicle's safety" },
  ]

  const esafetyServicesIncluded = [
    { icon: CheckCircle, text: "eSafety Check (Pink Slip) Inspections" },
    { icon: Shield, text: "NSW Roadworthy Inspections" },
    { icon: FileText, text: "Registration Inspections" },
    { icon: Search, text: "Safety Assessments" },
    { icon: ClipboardList, text: "Vehicle Condition Reports" },
    { icon: Wrench, text: "Mechanical Repairs (if required)" },
    { icon: RefreshCw, text: "Re-inspections (where applicable)" },
  ]

  const agentServices = [
    { icon: Shield, text: "Only agent for QBE provides CTP insurance" },
    { icon: Search, text: "Insurance repair assessments" },
    { icon: Wrench, text: "Accident damage repairs" },
    { icon: FileCheck, text: "Assistance with the insurance repair process" },
    { icon: Car, text: "Vehicle damage inspections" },
    { icon: ShieldCheck, text: "Quality mechanical and panel repairs (where applicable)" },
    { icon: CheckCircle2, text: "Genuine or insurer-approved replacement parts (where applicable)" },
    { icon: MessageSquare, text: "Communication throughout the repair process" },
  ]

  const agentWhyChoose = [
    { icon: Users, title: "Professional and friendly customer service", text: "Welcoming team dedicated to your comfort" },
    { icon: Award, title: "Quality workmanship", text: "High standards in every repair we complete" },
    { icon: MessageSquare, title: "Honest communication throughout the repair process", text: "Clear updates at every stage of your repair" },
    { icon: UserCheck, title: "Experienced automotive technicians", text: "Skilled professionals handling your vehicle" },
    { icon: Clock, title: "Timely and efficient repairs", text: "Get back on the road as quickly as possible" },
    { icon: ThumbsUp, title: "Commitment to customer satisfaction", text: "Your peace of mind is our priority" },
  ]

  return (
    <div className="min-h-screen bg-black overflow-hidden text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-red-900/20" />
        
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"
        />
        
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[120px]"
        />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[60vh]">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-full min-h-[500px] hidden lg:block"
            >
              <div className="relative w-full h-full overflow-hidden">
                <motion.img
                  src="/car-service.jpg"
                  alt="Automotive Service"
                  className="w-full h-full object-cover grayscale brightness-75"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2 }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-red-900/40 to-transparent" />
                
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-md px-8 py-6 border-l-4 border-blue-500 border-r-4 border-red-500"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wider uppercase text-center">
                    Premium Auto Care
                  </h2>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <div className="w-8 h-0.5 bg-blue-500" />
                    <p className="text-blue-300 text-sm">Excellence in Every Service</p>
                    <div className="w-8 h-0.5 bg-red-500" />
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-blue-500"
                />
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-red-500"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-full flex flex-col justify-center"
            >
              <div className="relative bg-gradient-to-br from-white/10 via-blue-950/20 to-white/5 backdrop-blur-sm rounded-sm p-8 md:p-12 lg:p-16 border border-white/10">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-red-500" />
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/30 border border-blue-500/50 backdrop-blur-sm"
                />
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute -bottom-8 -left-8 w-24 h-24 bg-red-600/30 border border-red-500/50 backdrop-blur-sm"
                />

                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute top-1/2 -right-3 w-6 h-6 bg-blue-600"
                />

                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute bottom-1/3 -left-3 w-6 h-6 bg-red-600"
                />

                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-950/80 to-blue-900/80 border-l-2 border-blue-500 border-r-2 border-red-500 rounded-full px-6 py-2 mb-8"
                  >
                    <Sparkles size={16} className="text-yellow-400" />
                    <span className="text-blue-200 text-sm font-semibold tracking-wider uppercase">Premium Automotive Care</span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif leading-tight mb-6 text-white"
                  >
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-400 to-red-500">Services</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg"
                  >
                    Comprehensive, dealership-quality automotive services designed to keep your vehicle running at peak performance.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <motion.a
                      href="#services-grid"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 via-blue-600 to-red-600 text-white px-8 py-4 rounded-sm font-bold text-lg shadow-lg shadow-blue-600/30 hover:shadow-red-600/50 transition-all bg-[length:200%_100%] hover:bg-[position:right_center]"
                    >
                      Explore Services
                      <ArrowRight size={20} />
                    </motion.a>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-8 flex gap-1"
                  >
                    <div className="h-1 flex-1 bg-blue-600 rounded-full" />
                    <div className="h-1 w-8 bg-white/50 rounded-full" />
                    <div className="h-1 flex-1 bg-red-600 rounded-full" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-blue-950/30 to-transparent pointer-events-none" />
      </section>

      {/* SERVICES SECTION */}
      <section id="services-grid" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white mb-4">
              What We <span className="text-red-500">Offer</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.3 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative w-full sm:w-[calc(50%-1rem)] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition duration-500 group-hover:duration-200" />
                  
                  <div className="relative h-full bg-slate-900 border border-slate-800 group-hover:border-slate-600 rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col overflow-hidden transition-all duration-300"
                       style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)' }}>
                    
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-red-500/10 transition-colors duration-500" />
                    
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 sm:mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon size={32} className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>

                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-blue-400 transition-all duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-8 flex-grow">
                      {service.description}
                    </p>

                    <button
                      onClick={() => handleLearnMore(service)}
                      className="relative inline-flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 px-4 sm:px-6 bg-slate-800 hover:bg-transparent border border-slate-700 hover:border-red-500 text-slate-300 hover:text-white rounded-xl font-semibold text-xs sm:text-sm tracking-wide overflow-hidden transition-all duration-300 group/btn cursor-pointer"
                    >
                      <span className="relative z-10">LEARN MORE</span>
                      <ArrowRight size={16} className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-600 transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                    </button>

                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-red-600/20 group-hover:bg-red-600/40 transition-colors" 
                         style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} 
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 px-4 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-slate-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-16 backdrop-blur-sm"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-white mb-4 sm:mb-6"
            >
              Ready to <span className="text-red-500">Service</span> Your Vehicle?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-blue-200 mb-6 sm:mb-8 max-w-2xl mx-auto"
            >
              Book an appointment today and experience the difference of professional, transparent, and reliable automotive care.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link 
                to="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-blue-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base lg:text-lg shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105 transition-all duration-300"
              >
                Book Service Now
                <ArrowRight size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* LOGBOOK SERVICE POPUP MODAL */}
      <AnimatePresence>
        {isLogbookOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8" onClick={closeLogbookPopup}>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute top-1/4 left-1/4 w-96 h-96 border border-dashed border-blue-500/20 rounded-full" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-dashed border-red-500/20 rounded-full" />
              {Array.from({ length: 15 }).map((_, i) => (<motion.div key={i} animate={{ y: [0, -80, 0], x: [0, i % 2 === 0 ? 40 : -40, 0], opacity: [0, 0.4, 0] }} transition={{ duration: 6 + i * 0.5, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }} className={`absolute w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-red-500' : 'bg-blue-500'}`} style={{ left: `${15 + (i * 5)}%`, top: `${20 + (i % 4) * 20}%` }} />))}
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 50 }} transition={{ duration: 0.4, type: "spring", bounce: 0.2 }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950/50 to-slate-900 border border-blue-800/50 shadow-2xl shadow-blue-900/50">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-blue-600 to-red-600" />
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-red-500/50 rounded-br-lg pointer-events-none" />
              <div className="overflow-y-auto max-h-[90vh] p-6 sm:p-8 lg:p-12">
                <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} onClick={closeLogbookPopup} className="absolute top-6 right-6 z-20 flex items-center gap-2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:border-red-500/50 rounded-full text-white hover:text-red-400 transition-all duration-300 group">
                  <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                  <span className="text-sm font-semibold hidden sm:block">Close</span>
                </motion.button>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8 pr-20">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/20 to-blue-600/20 border border-red-500/30 rounded-full px-4 py-1.5 mb-4">
                    <BookOpen size={14} className="text-red-400" />
                    <span className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Logbook Service</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white mb-3 leading-tight">Logbook Servicing in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">Parramatta & Seven Hills</span></h2>
                  <p className="text-lg text-blue-200/80 leading-relaxed">Professional Logbook Servicing for all Vehicles in Parramatta & Seven Hills</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500" />
                    <div className="w-2 h-2 bg-red-500 rotate-45" />
                    <div className="w-2 h-2 bg-blue-500 rotate-45" />
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-500" />
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-10">
                  <p className="text-slate-300 leading-relaxed text-base">C & S Automotive Service & Repairs logbook servicing ensures that your vehicle is operating safely and economically, just as the manufacturer intended. Along with the job roles of safety check and inspection report, the below mentioned attributes completes the logbook servicing responsibilities which are:</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-10">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Wrench size={20} className="text-red-500" />Service Includes</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {logbookFeatures.map((feature, index) => { const FeatureIcon = feature.icon; return (<motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + index * 0.1 }} className="flex items-start gap-3 p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-red-500/50 transition-all duration-300 group">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600/20 to-blue-600/20 border border-red-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"><FeatureIcon size={18} className="text-red-400" /></div>
                      <p className="text-slate-300 text-sm leading-relaxed pt-1.5">{feature.text}</p>
                    </motion.div>) })}
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mb-10 p-6 bg-gradient-to-r from-blue-950/50 to-red-950/50 border border-blue-800/30 rounded-2xl">
                  <p className="text-blue-200 leading-relaxed">For logbook service in <span className="text-white font-semibold">Kings Langley, Parramatta, Seven Hills, Toongabbie, Wentworthville</span> & surrounding suburbs, contact C & S Automotive Service & Repairs.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mb-4 leading-tight">Professional Logbook Servicing for all Vehicles in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">Parramatta & Seven Hills</span></h3>
                  <p className="text-slate-300 leading-relaxed text-base mb-8">Safety is on the bottom shelf of our servicing responsibility we have the reserved automotive experience and suitably qualified technicians who work on your vehicle ensuring that the warranty won't be hampered. As in, we strive our best to keep the gush of our esteemed clients and customers, and thus there are few reasons why should you choose the C & S Automotive Service & Repairs and they are:</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {logbookReasons.map((reason, index) => { const ReasonIcon = reason.icon; return (<motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 + index * 0.1 }} className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-red-600/20 border border-blue-500/30 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"><ReasonIcon size={22} className="text-blue-400" /></div>
                    <h4 className="text-white font-bold text-sm mb-2">{reason.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{reason.text}</p>
                  </motion.div>) })}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AIR CONDITIONING POPUP MODAL */}
      <AnimatePresence>
        {isAirOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8" onClick={closeAirPopup}>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute top-1/4 left-1/4 w-96 h-96 border border-dashed border-blue-500/20 rounded-full" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-dashed border-red-500/20 rounded-full" />
              {Array.from({ length: 15 }).map((_, i) => (<motion.div key={i} animate={{ y: [0, -80, 0], x: [0, i % 2 === 0 ? 40 : -40, 0], opacity: [0, 0.4, 0] }} transition={{ duration: 6 + i * 0.5, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }} className={`absolute w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-red-500' : 'bg-blue-500'}`} style={{ left: `${15 + (i * 5)}%`, top: `${20 + (i % 4) * 20}%` }} />))}
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 50 }} transition={{ duration: 0.4, type: "spring", bounce: 0.2 }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950/50 to-slate-900 border border-blue-800/50 shadow-2xl shadow-blue-900/50">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-blue-600 to-red-600" />
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-red-500/50 rounded-br-lg pointer-events-none" />
              <div className="overflow-y-auto max-h-[90vh] p-6 sm:p-8 lg:p-12">
                <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} onClick={closeAirPopup} className="absolute top-6 right-6 z-20 flex items-center gap-2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:border-red-500/50 rounded-full text-white hover:text-red-400 transition-all duration-300 group">
                  <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                  <span className="text-sm font-semibold hidden sm:block">Close</span>
                </motion.button>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8 pr-20">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-red-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-4">
                    <Wind size={14} className="text-blue-400" />
                    <span className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Air Conditioning</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white mb-3 leading-tight">Air <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">Conditioning</span></h2>
                  <p className="text-lg text-blue-200/80 leading-relaxed">Keep your vehicle comfortable in every season with professional air conditioning servicing and repairs</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500" />
                    <div className="w-2 h-2 bg-red-500 rotate-45" />
                    <div className="w-2 h-2 bg-blue-500 rotate-45" />
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-500" />
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-10">
                  <p className="text-slate-300 leading-relaxed text-base mb-4">Keep your vehicle comfortable in every season with professional air conditioning servicing and repairs from C & S Automotive Service & Repairs.</p>
                  <p className="text-slate-300 leading-relaxed text-base mb-4">Whether your air conditioner is blowing warm air, producing unusual noises, or simply isn't performing as it should, our experienced technicians can diagnose the problem and restore your system to peak condition. We provide comprehensive air conditioning inspections, regassing, leak detection, and repairs for a wide range of vehicle makes and models.</p>
                  <p className="text-slate-300 leading-relaxed text-base">A properly maintained air conditioning system not only keeps you comfortable but also helps maintain healthy airflow and efficient cooling throughout your vehicle.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-10">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Wind size={20} className="text-blue-500" />Our Air Conditioning Services Include</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {airServices.map((service, index) => { const ServiceIcon = service.icon; return (<motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + index * 0.1 }} className="flex items-start gap-3 p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 group">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600/20 to-red-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"><ServiceIcon size={18} className="text-blue-400" /></div>
                      <p className="text-slate-300 text-sm leading-relaxed pt-1.5">{service.text}</p>
                    </motion.div>) })}
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mb-4 leading-tight">Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">C & S Automotive Service & Repairs?</span></h3>
                  <p className="text-slate-300 leading-relaxed text-base mb-8">When it comes to your vehicle's air conditioning, you deserve service you can trust. Here's why customers choose us for all their AC needs:</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {airReasons.map((reason, index) => { const ReasonIcon = reason.icon; return (<motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 + index * 0.1 }} className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:border-red-500/50 hover:bg-slate-800/50 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/20 to-blue-600/20 border border-red-500/30 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"><ReasonIcon size={22} className="text-red-400" /></div>
                    <h4 className="text-white font-bold text-sm mb-2">{reason.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{reason.text}</p>
                  </motion.div>) })}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ELECTRICAL POPUP MODAL */}
      <AnimatePresence>
        {isElectricalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8" onClick={closeElectricalPopup}>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute top-1/4 left-1/4 w-96 h-96 border border-dashed border-blue-500/20 rounded-full" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-dashed border-red-500/20 rounded-full" />
              {Array.from({ length: 15 }).map((_, i) => (<motion.div key={i} animate={{ y: [0, -80, 0], x: [0, i % 2 === 0 ? 40 : -40, 0], opacity: [0, 0.4, 0] }} transition={{ duration: 6 + i * 0.5, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }} className={`absolute w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-red-500' : 'bg-blue-500'}`} style={{ left: `${15 + (i * 5)}%`, top: `${20 + (i % 4) * 20}%` }} />))}
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 50 }} transition={{ duration: 0.4, type: "spring", bounce: 0.2 }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950/50 to-slate-900 border border-blue-800/50 shadow-2xl shadow-blue-900/50">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-blue-600 to-red-600" />
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-red-500/50 rounded-br-lg pointer-events-none" />
              <div className="overflow-y-auto max-h-[90vh] p-6 sm:p-8 lg:p-12">
                <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} onClick={closeElectricalPopup} className="absolute top-6 right-6 z-20 flex items-center gap-2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:border-red-500/50 rounded-full text-white hover:text-red-400 transition-all duration-300 group">
                  <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                  <span className="text-sm font-semibold hidden sm:block">Close</span>
                </motion.button>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8 pr-20">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/20 to-blue-600/20 border border-red-500/30 rounded-full px-4 py-1.5 mb-4">
                    <Zap size={14} className="text-red-400" />
                    <span className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Electrical Services</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white mb-3 leading-tight">Automotive <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">Electrical Services</span></h2>
                  <p className="text-lg text-blue-200/80 leading-relaxed">Professional Automotive Electrical Repairs & Diagnostics</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-500" />
                    <div className="w-2 h-2 bg-red-500 rotate-45" />
                    <div className="w-2 h-2 bg-blue-500 rotate-45" />
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-500" />
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-10">
                  <p className="text-slate-300 leading-relaxed text-base mb-4">Modern vehicles rely on advanced electrical systems to ensure safety, comfort, and reliable performance. At C & S Automotive Service & Repairs, we provide professional automotive electrical diagnostics, repairs, and installations for a wide range of vehicle makes and models.</p>
                  <p className="text-slate-300 leading-relaxed text-base mb-4">Whether you're experiencing electrical faults, power accessory issues, or require new electrical components installed, our experienced technicians use modern diagnostic equipment to identify the problem accurately and provide reliable repair solutions.</p>
                  <p className="text-slate-300 leading-relaxed text-base">From minor electrical repairs to accessory installations, we're committed to keeping your vehicle operating safely and efficiently.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-10">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Zap size={20} className="text-red-500" />Our Automotive Electrical Services Include</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {electricalServices.map((service, index) => { const ServiceIcon = service.icon; return (<motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + index * 0.08 }} className="flex items-start gap-3 p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-red-500/50 transition-all duration-300 group">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600/20 to-blue-600/20 border border-red-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"><ServiceIcon size={18} className="text-red-400" /></div>
                      <p className="text-slate-300 text-sm leading-relaxed pt-1.5">{service.text}</p>
                    </motion.div>) })}
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mb-10">
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mb-6 leading-tight">Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">C & S Automotive Service & Repairs?</span></h3>
                  <p className="text-slate-300 leading-relaxed text-base mb-4">We understand that electrical issues can be difficult to diagnose without the right equipment and expertise. That's why we take the time to accurately identify the fault before recommending any repairs.</p>
                  <p className="text-slate-300 leading-relaxed text-base mb-4">Before carrying out any additional work, we'll explain the issue, discuss the available repair options, and only proceed once you've approved the work. Our goal is to provide honest advice, transparent pricing, and quality workmanship on every job.</p>
                  <p className="text-slate-300 leading-relaxed text-base">All repairs are completed using quality parts and professional repair practices to ensure your vehicle remains safe, reliable, and performing at its best.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mb-10">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Star size={20} className="text-blue-500" />Our Electrical Service Advantages</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {electricalAdvantages.map((advantage, index) => { const AdvIcon = advantage.icon; return (<motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 + index * 0.08 }} className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-red-600/20 border border-blue-500/30 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"><AdvIcon size={22} className="text-blue-400" /></div>
                      <p className="text-white font-semibold text-sm leading-tight">{advantage.text}</p>
                    </motion.div>) })}
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="mb-10">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Car size={20} className="text-red-500" />Vehicle Brands We Commonly Service</h3>
                  <p className="text-slate-300 leading-relaxed text-base mb-6">We work on a wide range of vehicle makes, including:</p>
                  <div className="flex flex-wrap gap-3">
                    {vehicleBrands.map((brand, index) => (<motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 + index * 0.05 }} className="px-4 py-2.5 bg-slate-800/50 border border-blue-700/30 rounded-full text-sm text-blue-200 hover:border-red-500/50 hover:text-white hover:bg-red-500/10 transition-all duration-300 cursor-default">{brand}</motion.div>))}
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} className="p-6 bg-gradient-to-r from-red-950/50 to-blue-950/50 border border-red-500/30 rounded-2xl mb-6">
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><Phone size={20} className="text-red-400" />Need Automotive Electrical Repairs?</h4>
                  <p className="text-blue-200 leading-relaxed text-sm mb-2">Whether you need an electrical fault diagnosed, reverse camera installed, power window repaired, or OEM key programmed, C & S Automotive Service & Repairs is here to help.</p>
                  <p className="text-blue-200 leading-relaxed text-sm">Contact our friendly team today to book your vehicle inspection or request a no-obligation quote.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} className="flex justify-center pt-4">
                  <Link to="/contact" onClick={closeElectricalPopup} className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105 transition-all duration-300">Book Electrical Service<ArrowRight size={18} /></Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* E-SAFETY CHECK POPUP MODAL */}
      <AnimatePresence>
        {isEsafetyOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8" onClick={closeEsafetyPopup}>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute top-1/4 left-1/4 w-96 h-96 border border-dashed border-blue-500/20 rounded-full" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-dashed border-red-500/20 rounded-full" />
              {Array.from({ length: 15 }).map((_, i) => (<motion.div key={i} animate={{ y: [0, -80, 0], x: [0, i % 2 === 0 ? 40 : -40, 0], opacity: [0, 0.4, 0] }} transition={{ duration: 6 + i * 0.5, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }} className={`absolute w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-red-500' : 'bg-blue-500'}`} style={{ left: `${15 + (i * 5)}%`, top: `${20 + (i % 4) * 20}%` }} />))}
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 50 }} transition={{ duration: 0.4, type: "spring", bounce: 0.2 }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950/50 to-slate-900 border border-blue-800/50 shadow-2xl shadow-blue-900/50">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-blue-600 to-red-600" />
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-red-500/50 rounded-br-lg pointer-events-none" />
              <div className="overflow-y-auto max-h-[90vh] p-6 sm:p-8 lg:p-12">
                <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} onClick={closeEsafetyPopup} className="absolute top-6 right-6 z-20 flex items-center gap-2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:border-red-500/50 rounded-full text-white hover:text-red-400 transition-all duration-300 group">
                  <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                  <span className="text-sm font-semibold hidden sm:block">Close</span>
                </motion.button>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8 pr-20">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-red-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-4">
                    <CheckCircle size={14} className="text-blue-400" />
                    <span className="text-xs font-semibold text-blue-200 uppercase tracking-wider">eSafety Check</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white mb-3 leading-tight">eSafety Check <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">(Pink Slip)</span> Inspections</h2>
                  <p className="text-lg text-blue-200/80 leading-relaxed">Need an eSafety Check (Pink Slip) in Wentworthville?</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500" />
                    <div className="w-2 h-2 bg-blue-500 rotate-45" />
                    <div className="w-2 h-2 bg-red-500 rotate-45" />
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-500" />
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-10">
                  <p className="text-slate-300 leading-relaxed text-base mb-4">At C & S Automotive Service & Repairs, we provide professional eSafety Check (Pink Slip) inspections to help ensure your vehicle meets the NSW roadworthiness requirements for registration.</p>
                  <p className="text-slate-300 leading-relaxed text-base mb-4">As an authorised inspection station, our experienced technicians carry out thorough vehicle inspections in accordance with NSW inspection standards. We aim to make the process simple, efficient, and hassle-free, helping you get back on the road as quickly as possible.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-10">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><ListChecks size={20} className="text-blue-500" />An eSafety Check (Pink Slip) is generally required if:</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {esafetyConditions.map((condition, index) => { const CondIcon = condition.icon; return (<motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + index * 0.1 }} className="flex items-start gap-3 p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 group">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600/20 to-red-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"><CondIcon size={18} className="text-blue-400" /></div>
                      <p className="text-slate-300 text-sm leading-relaxed pt-1.5">{condition.text}</p>
                    </motion.div>) })}
                  </div>
                  <p className="text-slate-300 leading-relaxed text-base mt-6">Our team will inspect your vehicle carefully and explain any issues that may need attention before your vehicle can meet the required roadworthy standards.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mb-10">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Search size={20} className="text-red-500" />What We Inspect During an eSafety Check</h3>
                  <p className="text-slate-300 leading-relaxed text-base mb-6">During your vehicle inspection, our qualified technicians assess a range of important safety components, including:</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {esafetyInspections.map((inspection, index) => { const InspIcon = inspection.icon; return (<motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 + index * 0.08 }} className="flex items-start gap-3 p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-red-500/50 transition-all duration-300 group">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600/20 to-blue-600/20 border border-red-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"><InspIcon size={18} className="text-red-400" /></div>
                      <p className="text-slate-300 text-sm leading-relaxed pt-1.5">{inspection.text}</p>
                    </motion.div>) })}
                  </div>
                  <p className="text-slate-300 leading-relaxed text-base mt-6">If any item does not meet the required safety standards, we'll clearly explain the issue and discuss the necessary repairs before any work is carried out.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }} className="mb-10">
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mb-6 leading-tight">Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">C & S Automotive Service & Repairs?</span></h3>
                  <p className="text-slate-300 leading-relaxed text-base mb-6">We understand that having your vehicle inspected should be straightforward and stress-free. That's why we focus on providing:</p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {esafetyWhyChoose.map((reason, index) => { const ReasonIcon = reason.icon; return (<motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1 + index * 0.08 }} className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-red-600/20 border border-blue-500/30 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"><ReasonIcon size={22} className="text-blue-400" /></div>
                      <h4 className="text-white font-bold text-sm mb-2">{reason.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{reason.text}</p>
                    </motion.div>) })}
                  </div>
                  <p className="text-slate-300 leading-relaxed text-base mt-6">Our goal is to help you complete your inspection with minimal downtime while ensuring your vehicle remains safe and roadworthy.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }} className="mb-10">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><ListChecks size={20} className="text-blue-500" />Services Included</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {esafetyServicesIncluded.map((service, index) => { const ServIcon = service.icon; return (<motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.4 + index * 0.08 }} className="flex items-center gap-3 p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-red-500/50 transition-all duration-300 group">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600/20 to-blue-600/20 border border-red-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"><ServIcon size={16} className="text-red-400" /></div>
                      <p className="text-slate-300 text-sm font-medium">{service.text}</p>
                    </motion.div>) })}
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }} className="p-6 bg-gradient-to-r from-blue-950/50 to-red-950/50 border border-blue-500/30 rounded-2xl mb-6">
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><Phone size={20} className="text-blue-400" />Book Your eSafety Check Today</h4>
                  <p className="text-blue-200 leading-relaxed text-sm mb-2">If your vehicle requires a Pink Slip (eSafety Check), trust C & S Automotive Service & Repairs to provide a professional inspection and dependable service.</p>
                  <p className="text-blue-200 leading-relaxed text-sm">Contact our team today to book your inspection or to learn more about NSW eSafety Check requirements.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.7 }} className="flex justify-center pt-4">
                  <Link to="/contact" onClick={closeEsafetyPopup} className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-red-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105 transition-all duration-300">Book eSafety Check<ArrowRight size={18} /></Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AGENT FOR QBE INSURANCE POPUP MODAL */}
      <AnimatePresence>
        {isAgentOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8" onClick={closeAgentPopup}>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute top-1/4 left-1/4 w-96 h-96 border border-dashed border-blue-500/20 rounded-full" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-dashed border-red-500/20 rounded-full" />
              {Array.from({ length: 15 }).map((_, i) => (<motion.div key={i} animate={{ y: [0, -80, 0], x: [0, i % 2 === 0 ? 40 : -40, 0], opacity: [0, 0.4, 0] }} transition={{ duration: 6 + i * 0.5, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }} className={`absolute w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-red-500' : 'bg-blue-500'}`} style={{ left: `${15 + (i * 5)}%`, top: `${20 + (i % 4) * 20}%` }} />))}
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 50 }} transition={{ duration: 0.4, type: "spring", bounce: 0.2 }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950/50 to-slate-900 border border-blue-800/50 shadow-2xl shadow-blue-900/50">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-blue-600 to-red-600" />
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-red-500/50 rounded-br-lg pointer-events-none" />
              <div className="overflow-y-auto max-h-[90vh] p-6 sm:p-8 lg:p-12">
                <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} onClick={closeAgentPopup} className="absolute top-6 right-6 z-20 flex items-center gap-2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:border-red-500/50 rounded-full text-white hover:text-red-400 transition-all duration-300 group">
                  <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                  <span className="text-sm font-semibold hidden sm:block">Close</span>
                </motion.button>

                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8 pr-20">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/20 to-blue-600/20 border border-red-500/30 rounded-full px-4 py-1.5 mb-4">
                    <Shield size={14} className="text-red-400" />
                    <span className="text-xs font-semibold text-blue-200 uppercase tracking-wider">QBE Insurance</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white mb-3 leading-tight">QBE Insurance <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">Claims Assistance</span></h2>
                  <p className="text-lg text-blue-200/80 leading-relaxed">Authorised Agent for QBE Insurance</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-500" />
                    <div className="w-2 h-2 bg-red-500 rotate-45" />
                    <div className="w-2 h-2 bg-blue-500 rotate-45" />
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-500" />
                  </div>
                </motion.div>

                {/* Introduction */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-10">
                  <p className="text-slate-300 leading-relaxed text-base mb-4">At C & S Automotive Service & Repairs, we work with QBE Insurance to help make the vehicle repair process as simple and stress-free as possible for our customers.</p>
                  <p className="text-slate-300 leading-relaxed text-base mb-4">If your vehicle has been involved in an accident and is insured through QBE, our team can assist with the repair process, working closely with the insurer to ensure your vehicle is repaired efficiently and to a high standard. QBE provides motor insurance solutions across Australia, and approved repairers help facilitate quality repairs in accordance with insurer requirements.</p>
                  <p className="text-slate-300 leading-relaxed text-base">Our experienced team understands how important it is to get you safely back on the road. From the initial vehicle assessment through to completing the repairs, we'll keep you informed every step of the way.</p>
                </motion.div>

                {/* Services Include */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-10">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><ClipboardCheck size={20} className="text-red-500" />Our QBE Insurance Services Include</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {agentServices.map((service, index) => { const ServiceIcon = service.icon; return (<motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + index * 0.08 }} className="flex items-start gap-3 p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-red-500/50 transition-all duration-300 group">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600/20 to-blue-600/20 border border-red-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"><ServiceIcon size={18} className="text-red-400" /></div>
                      <p className="text-slate-300 text-sm leading-relaxed pt-1.5">{service.text}</p>
                    </motion.div>) })}
                  </div>
                </motion.div>

                {/* Why Choose Us */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mb-10">
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mb-6 leading-tight">Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">C & S Automotive Service & Repairs?</span></h3>
                  <p className="text-slate-300 leading-relaxed text-base mb-6">When you choose C & S Automotive Service & Repairs, you can expect:</p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {agentWhyChoose.map((reason, index) => { const ReasonIcon = reason.icon; return (<motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 + index * 0.08 }} className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-red-600/20 border border-blue-500/30 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"><ReasonIcon size={22} className="text-blue-400" /></div>
                      <h4 className="text-white font-bold text-sm mb-2">{reason.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{reason.text}</p>
                    </motion.div>) })}
                  </div>
                  <p className="text-slate-300 leading-relaxed text-base mt-6">We understand that dealing with accident repairs can be stressful. Our goal is to make the repair experience as smooth as possible while ensuring your vehicle is repaired safely and professionally.</p>
                </motion.div>

                {/* Insurance Repair Support */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="mb-10">
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mb-6 leading-tight">Insurance Repair Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">You Can Trust</span></h3>
                  <p className="text-slate-300 leading-relaxed text-base mb-4">Whether your vehicle requires minor repairs or more extensive accident damage repairs, C & S Automotive Service & Repairs is here to assist. We'll work with you and your insurer to help streamline the repair process and return your vehicle to the road as quickly as possible.</p>
                  <p className="text-slate-300 leading-relaxed text-base">Contact our team today to discuss your insurance repair requirements or to arrange a vehicle assessment.</p>
                </motion.div>

                {/* CTA Box */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} className="p-6 bg-gradient-to-r from-red-950/50 to-blue-950/50 border border-red-500/30 rounded-2xl mb-6">
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><Handshake size={20} className="text-red-400" />Ready to Discuss Your Insurance Repair?</h4>
                  <p className="text-blue-200 leading-relaxed text-sm mb-2">Our team is ready to help you navigate the insurance repair process with ease and professionalism.</p>
                  <p className="text-blue-200 leading-relaxed text-sm">Contact us today to arrange a vehicle assessment or discuss your QBE insurance repair requirements.</p>
                </motion.div>

                {/* Action Button */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} className="flex justify-center pt-4">
                  <Link to="/contact" onClick={closeAgentPopup} className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105 transition-all duration-300">Contact Our Team<ArrowRight size={18} /></Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}