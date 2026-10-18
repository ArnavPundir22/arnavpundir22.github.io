import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { profile } from '../data'
import { Download, GraduationCap, MapPin, Briefcase, GitPullRequest, Code2, BrainCircuit, FileText, CheckCircle2 } from 'lucide-react'

const slideReveal = (delay = 0, y = 35, x = 0) => ({
  hidden: { 
    opacity: 0, 
    y, 
    x,
    scale: 0.98,
    filter: 'blur(5px)',
    transition: { duration: 0.35, ease: [0.32, 0, 0.67, 0] }
  },
  show: { 
    opacity: 1, 
    y: 0, 
    x: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay } 
  },
})

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-60px' })
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <section id="about" ref={ref} className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          variants={slideReveal(0, -25, 0)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            About The Engineer
          </span>
          <h2 className="section-heading">
            Architecture, Leadership & <span className="gradient-text">Philosophy</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base md:text-lg">
            Engineering at the crossroads of rigorous algorithm optimization, computer vision, and modern web systems.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-[minmax(190px,auto)]">

          {/* Large Bio & Vision Card (Spans 2x2) */}
          <motion.div
            variants={slideReveal(0.08, 20, -30)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-between border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                  Engineering Profile
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white mb-4 sm:mb-5 tracking-tight leading-snug">
                Bridging Algorithmic Depth with Modern Web Systems.
              </h3>

              <div className="space-y-4 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                <p>
                  I am a top-tier <strong className="text-white font-semibold">AI & Full-Stack Systems Engineer</strong> dedicated to building high-velocity, production-grade architectures that fuse intelligent machine learning models with resilient, low-latency user interfaces. Alongside engineering robust web systems, I serve as the Competitive Coding Lead at <strong className="text-cyan-300 font-semibold">D-Coders Squad</strong> (COER University) where I mentor over 200 developers in algorithms, complexity analysis, and system design.
                </p>
                <p>
                  From multi-camera forensic computer vision platforms (<strong className="text-cyan-300">TraceAI</strong>) and institutional biometric platforms (<strong className="text-cyan-300">BioSecure AI</strong>, selected for an official COER University pilot run) to zero-latency offline-first architectures (<strong className="text-cyan-300">ZeroLag</strong> with RxDB) and ephemeral WebRTC streaming (<strong className="text-cyan-300">AuraMeet</strong>), I engineer software with relentless craftsmanship, security at rest, and 95+ to 100 Lighthouse performance.
                </p>
              </div>
            </div>

            {/* Bottom Actions inside Main Card */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] text-center justify-center flex items-center"
              >
                Let's Connect
              </a>

              {/* Resume Selector */}
              <div className="relative w-full sm:w-auto" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-expanded={dropdownOpen}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Download Resume</span>
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 bottom-full mb-2 z-50 w-full sm:w-64 max-w-[calc(100vw-48px)] rounded-2xl glass-card border border-white/10 p-2 shadow-2xl"
                    >
                      <a
                        href="/Documents/Arnav_Pundir_Comprehensive_Resume.pdf"
                        download
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-xs text-slate-200 transition-colors"
                      >
                        <FileText className="w-4 h-4 text-purple-400" />
                        <div>
                          <div className="font-semibold">Comprehensive Profile</div>
                          <div className="text-[10px] text-slate-400">All Experience & Research</div>
                        </div>
                      </a>
                      <a
                        href="/Documents/Arnav_Pundir_FullStack_Resume.pdf"
                        download
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-xs text-slate-200 transition-colors"
                      >
                        <Code2 className="w-4 h-4 text-cyan-400" />
                        <div>
                          <div className="font-semibold">Full-Stack Specialization</div>
                          <div className="text-[10px] text-slate-400">Next.js, React, Node, WebRTC</div>
                        </div>
                      </a>
                      <a
                        href="/Documents/Arnav_Pundir_AI_Resume.pdf"
                        download
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-xs text-slate-200 transition-colors"
                      >
                        <BrainCircuit className="w-4 h-4 text-blue-400" />
                        <div>
                          <div className="font-semibold">AI & Vision Specialization</div>
                          <div className="text-[10px] text-slate-400">YOLOv8, InsightFace, OpenCV</div>
                        </div>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Leadership Card */}
          <motion.div
            variants={slideReveal(0.14, -20, 30)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="glass-card p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col justify-between group hover:border-blue-400/30 transition-all"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-semibold block mb-1">
                Community Leadership
              </span>
              <h4 className="text-lg font-bold text-white mb-2 leading-snug">
                Competitive Coding Lead
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Directing competitive coding workshops, mentoring students in algorithms and data structures at <span className="text-cyan-300">D-Coders Squad</span> (COER University).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-blue-300">
              <span>COER University</span>
              <span>·</span>
              <span>Roorkee</span>
            </div>
          </motion.div>

          {/* Card 3: Open Source Spotlight */}
          <motion.div
            variants={slideReveal(0.22, 20, 30)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="glass-card p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col justify-between group hover:border-purple-400/30 transition-all"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GitPullRequest className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-semibold block mb-1">
                Open Source Impact
              </span>
              <h4 className="text-lg font-bold text-white mb-2 leading-snug">
                Global Rank #70 · NSoC '26
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                13 merged Pull Requests across 5 repositories. Implemented Fernet cryptography, secure session management, and server-side pagination.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-purple-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
              <span>GSSoC & NSoC Contributor</span>
            </div>
          </motion.div>

          {/* Card 4: Academic Background */}
          <motion.div
            variants={slideReveal(0.3, 35, -25)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="glass-card p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col justify-between group hover:border-cyan-400/30 transition-all"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-semibold block mb-1">
                Academics
              </span>
              <h4 className="text-lg font-bold text-white mb-1 leading-snug">
                B.Tech in CSE
              </h4>
              <p className="text-xs text-cyan-300 font-medium mb-2">COER University · 2024–2028</p>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Studying core computer science, discrete math, and distributed computing while engineering production software.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Roorkee, India (Open to Remote)</span>
            </div>
          </motion.div>

          {/* Card 5: Core Engineering Focuses */}
          <motion.div
            variants={slideReveal(0.38, 35, 25)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="glass-card p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col justify-between group hover:border-emerald-400/30 transition-all"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-semibold block mb-1">
                Engineering Focus
              </span>
              <h4 className="text-lg font-bold text-white mb-2 leading-snug">
                Modern Full-Stack & AI
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Specialized in offline-first sync (RxDB), WebRTC multimedia, facial recognition (InsightFace), and YOLO object tracking.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
              {['YOLOv8', 'WebRTC', 'RxDB', 'React', 'FastAPI'].map(tag => (
                <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
