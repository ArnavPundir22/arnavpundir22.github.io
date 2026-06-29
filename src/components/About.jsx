import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { profile } from '../data'
import { Download, GraduationCap, MapPin, Briefcase, Rocket, FileText, Code2, BrainCircuit } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut', delay } },
})

function SectionLabel({ children }) {
  return (
    <span className="inline-block text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
      {children}
    </span>
  )
}

export default function About() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section id="about" ref={ref} className="relative py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section header */}
        <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}
          className="text-center mb-16">
          <SectionLabel>Who I Am</SectionLabel>
          <h2 className="section-heading mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            A builder at the intersection of AI engineering and full-stack development.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          
          {/* Main Bio Card (Spans 2x2 on large screens) */}
          <motion.div 
            variants={fadeUp(0.1)} initial="hidden" animate={inView ? 'show' : 'hidden'}
            className="md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 glass-card p-8 rounded-[2rem] glass-card-hover flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-display font-semibold text-white mb-4">My Journey</h3>
              <div className="space-y-4">
                {profile.bio.map((para, i) => (
                  <p key={i} className="text-slate-400 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a href="#contact"
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                 className="px-6 py-3 rounded-xl text-sm font-semibold text-white
                            bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400
                            transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                Let's Connect
              </motion.a>

              <div className="relative" ref={dropdownRef}>
                <motion.button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-xl text-sm font-semibold text-white
                             bg-white/5 border border-white/10 hover:bg-white/10
                             transition-all inline-flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Resume
                </motion.button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 bottom-full mb-2 z-50 w-64 rounded-2xl overflow-hidden glass-card p-2 shadow-2xl">
                      
                      <div className="flex flex-col gap-1">
                        <a href="/Documents/Arnav_Pundir_Comprehensive_Resume.pdf" download onClick={() => setDropdownOpen(false)}
                           className="flex items-center gap-3 px-3 py-3 hover:bg-white/5 rounded-xl transition-colors group">
                          <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-colors">
                            <FileText className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">Comprehensive</span>
                        </a>
                        <a href="/Documents/Arnav_Pundir_FullStack_Resume.pdf" download onClick={() => setDropdownOpen(false)}
                           className="flex items-center gap-3 px-3 py-3 hover:bg-white/5 rounded-xl transition-colors group">
                          <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors">
                            <Code2 className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">Full-Stack</span>
                        </a>
                        <a href="/Documents/Arnav_Pundir_AI_Resume.pdf" download onClick={() => setDropdownOpen(false)}
                           className="flex items-center gap-3 px-3 py-3 hover:bg-white/5 rounded-xl transition-colors group">
                          <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-colors">
                            <BrainCircuit className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">AI & CV</span>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Quick Info Cards */}
          {[
            { icon: GraduationCap, label: 'Education', value: 'COER University', sub: 'B.Tech CSE', color: 'text-purple-400', bg: 'bg-purple-500/10' },
            { icon: MapPin, label: 'Location', value: 'Roorkee, India', sub: 'Open to remote', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
            { icon: Briefcase, label: 'Experience', value: '2+ Years', sub: 'Building real systems', color: 'text-blue-400', bg: 'bg-blue-500/10' },
            { icon: Rocket, label: 'Focus Area', value: 'AI + Full-Stack', sub: 'CV & Web Systems', color: 'text-pink-400', bg: 'bg-pink-500/10' },
          ].map((item, idx) => (
            <motion.div 
              key={item.label}
              variants={fadeUp(0.2 + (idx * 0.1))} initial="hidden" animate={inView ? 'show' : 'hidden'}
              className="glass-card p-6 rounded-[2rem] glass-card-hover flex flex-col justify-center items-start group"
            >
              <div className={`p-3 rounded-2xl ${item.bg} ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-6 h-6" />
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-semibold">{item.label}</p>
              <p className="font-semibold text-white text-lg leading-tight mb-1">{item.value}</p>
              <p className="text-sm text-slate-500">{item.sub}</p>
            </motion.div>
          ))}

          {/* Core Domains Marquee (Spans 2 columns) */}
          <motion.div 
            variants={fadeUp(0.6)} initial="hidden" animate={inView ? 'show' : 'hidden'}
            className="md:col-span-2 lg:col-span-2 glass-card p-6 rounded-[2rem] glass-card-hover flex flex-col justify-center"
          >
            <p className="text-xs text-slate-400 uppercase tracking-wider mb-4 font-semibold">Core Domains</p>
            <div className="flex flex-wrap gap-2">
              {['Computer Vision', 'Face Recognition', 'YOLOv8', 'Object Detection', 'Flask APIs', 'React.js', 'Next.js', 'ML Pipelines'].map(t => (
                <span key={t}
                  className="px-4 py-2 rounded-xl text-sm font-medium
                             bg-white/5 border border-white/10 text-slate-300
                             hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400
                             transition-all cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
