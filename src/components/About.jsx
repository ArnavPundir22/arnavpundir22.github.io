import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { profile } from '../data'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut', delay } },
})

function SectionLabel({ children }) {
  return (
    <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">
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
    <section id="about" ref={ref}
      className="relative py-28"
      style={{ background: 'linear-gradient(180deg, #060a14 0%, #0c1220 100%)' }}>

      {/* Subtle divider line top */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}
          className="text-center mb-20">
          <SectionLabel>Who I Am</SectionLabel>
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto mt-4">
            A builder at the intersection of AI engineering and full-stack development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Bio ── */}
          <motion.div variants={fadeUp(0.1)} initial="hidden" animate={inView ? 'show' : 'hidden'} className="relative z-50">
            {profile.bio.map((para, i) => (
              <p key={i} className={`text-[#94a3b8] leading-relaxed text-[1.05rem] ${i < profile.bio.length - 1 ? 'mb-5' : ''}`}>
                {para}
              </p>
            ))}

            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a href="#contact"
                 whileHover={{ scale: 1.05, y: -2 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                 className="px-6 py-3 rounded-full text-sm font-semibold text-white
                            bg-gradient-to-r from-accent to-accent2
                            hover:opacity-90 transition-opacity shadow-[0_0_24px_rgba(99,102,241,0.3)]">
                Let's Connect
              </motion.a>
              <div className="relative" ref={dropdownRef}>
                <motion.button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-full text-sm font-semibold text-[#f1f5f9]
                             border border-[rgba(99,102,241,0.35)]
                             hover:border-accent hover:bg-[rgba(99,102,241,0.08)]
                             transition-all duration-200 inline-flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                  <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 z-50 mt-2 w-72 rounded-2xl overflow-hidden backdrop-blur-xl border border-[rgba(99,102,241,0.2)] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                      style={{ background: 'rgba(11,17,35,0.95)' }}>
                      
                      <a href="/Documents/Arnav Pundir - Resume.pdf" download onClick={() => setDropdownOpen(false)}
                         className="flex items-center gap-3 px-4 py-3 hover:bg-[rgba(99,102,241,0.1)] transition-colors border-b border-[rgba(99,102,241,0.1)]">
                        <svg className="w-5 h-5 text-[#a78bfa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-[#f1f5f9]">Comprehensive Profile</span>
                          <span className="text-xs text-[#94a3b8]">Full-Stack + AI Background</span>
                        </div>
                      </a>

                      <a href="/Documents/Arnav Pundir (Web Developer).pdf" download onClick={() => setDropdownOpen(false)}
                         className="flex items-center gap-3 px-4 py-3 hover:bg-[rgba(99,102,241,0.1)] transition-colors border-b border-[rgba(99,102,241,0.1)]">
                        <svg className="w-5 h-5 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-[#f1f5f9]">Full-Stack Developer</span>
                          <span className="text-xs text-[#94a3b8]">React.js, Node.js & UI/UX</span>
                        </div>
                      </a>

                      <a href="/Documents/Arnav_Pundir_Resume.pdf" download onClick={() => setDropdownOpen(false)}
                         className="flex items-center gap-3 px-4 py-3 hover:bg-[rgba(99,102,241,0.1)] transition-colors">
                        <svg className="w-5 h-5 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-[#f1f5f9]">AI & Computer Vision</span>
                          <span className="text-xs text-[#94a3b8]">Machine Learning & Python</span>
                        </div>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* ── Cards grid ── */}
          <motion.div variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                      initial="hidden" animate={inView ? 'show' : 'hidden'}
                      className="grid grid-cols-2 gap-4">

            {[
              { icon: '🎓', label: 'Education', value: 'COER University', sub: 'B.Tech CSE' },
              { icon: '📍', label: 'Location',  value: 'Roorkee, India',  sub: 'Open to remote' },
              { icon: '💼', label: 'Experience', value: '2+ Years',       sub: 'Building real systems' },
              { icon: '🔭', label: 'Focus Area', value: 'AI + Full-Stack', sub: 'CV & Web Systems' },
            ].map(({ icon, label, value, sub }) => (
              <motion.div key={label}
                variants={fadeUp(0)}
                whileHover={{ y: -6, scale: 1.02, borderColor: 'rgba(99,102,241,0.3)', boxShadow: '0 12px 32px rgba(99,102,241,0.12)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="glass-card p-5 cursor-pointer">
                <div className="text-2xl mb-3">{icon}</div>
                <p className="text-xs text-[#94a3b8] uppercase tracking-wide mb-1">{label}</p>
                <p className="font-semibold text-white text-sm leading-snug">{value}</p>
                <p className="text-xs text-accent mt-0.5">{sub}</p>
              </motion.div>
            ))}

            {/* What I do */}
            <motion.div variants={fadeUp(0)}
              whileHover={{ y: -4, scale: 1.01, borderColor: 'rgba(99,102,241,0.3)', boxShadow: '0 8px 32px rgba(99,102,241,0.08)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="col-span-2 glass-card p-5 cursor-pointer">
              <p className="text-xs text-[#94a3b8] uppercase tracking-wide mb-3">Core Domains</p>
              <div className="flex flex-wrap gap-2">
                {['Computer Vision', 'Face Recognition', 'YOLOv8 / Object Detection', 'Flask APIs', 'React.js', 'ML Pipelines', 'Desktop GUIs'].map(t => (
                  <motion.span key={t}
                    whileHover={{ y: -2, scale: 1.05, borderColor: 'rgba(99,102,241,0.4)', backgroundColor: 'rgba(99,102,241,0.15)' }}
                    className="px-3 py-1 rounded-full text-xs font-medium cursor-default
                               bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.2)] text-accent transition-colors">
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
