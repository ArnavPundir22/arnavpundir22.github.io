import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile, roles } from '../data'
import { Mail, ArrowDown, ExternalLink } from 'lucide-react'

const GithubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const LinkedinIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

/* ---------- Typewriter ---------- */
function Typewriter() {
  const [display, setDisplay] = useState('')
  const [rIdx, setRIdx]       = useState(0)
  const [cIdx, setCIdx]       = useState(0)
  const [del,  setDel]        = useState(false)

  useEffect(() => {
    const word  = roles[rIdx]
    const timer = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, cIdx + 1)
        setDisplay(next)
        if (next === word) {
          setTimeout(() => setDel(true), 2000)
        } else {
          setCIdx(c => c + 1)
        }
      } else {
        const next = word.slice(0, cIdx - 1)
        setDisplay(next)
        if (next === '') {
          setDel(false)
          setRIdx(r => (r + 1) % roles.length)
          setCIdx(0)
        } else {
          setCIdx(c => c - 1)
        }
      }
    }, del ? 40 : 80)
    return () => clearTimeout(timer)
  }, [cIdx, del, rIdx])

  return (
    <span className="inline-flex items-center font-display text-2xl md:text-3xl font-medium text-purple-400">
      {display}<span className="cursor-blink" />
    </span>
  )
}

/* ---------- Social link ---------- */
function SocialLink({ href, label, icon: Icon }) {
  return (
    <motion.a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
       whileHover={{ y: -3, scale: 1.05 }}
       whileTap={{ scale: 0.95 }}
       className="w-12 h-12 rounded-xl flex items-center justify-center
                  glass-card text-slate-400 hover:text-cyan-400
                  transition-colors duration-300 group">
      <Icon className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all" />
    </motion.a>
  )
}

const fadeUp   = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }
const fadeLeft = { hidden: { opacity: 0, x: 60 }, show: { opacity: 1, x: 0 } }

export default function Hero() {
  return (
    <section id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      
      {/* 3D floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            y: [20, -20, 20],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Text ── */}
          <motion.div variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                      initial="hidden" animate="show">

            <motion.div variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8
                         glass-card text-cyan-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              Available for opportunities
            </motion.div>

            <motion.h1 variants={fadeUp}
              className="font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-tight mb-4 tracking-tight">
              Hi, I'm{' '}
              <br className="hidden md:block" />
              <span className="gradient-text">Arnav Pundir</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="mb-6 h-10">
              <Typewriter />
            </motion.div>

            <motion.p variants={fadeUp}
              className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl font-light">
              I build end-to-end AI systems — face recognition pipelines, real-time
              computer vision apps, and full-stack web platforms using Python, Flask,
              and React.js. B.Tech CSE student at <span className="text-white font-medium">COER University</span>.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-12">
              <motion.a href="#projects"
                 whileHover={{ scale: 1.02, y: -2 }}
                 whileTap={{ scale: 0.98 }}
                 onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                 className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white
                            bg-white/10 hover:bg-white/15 border border-white/20
                            backdrop-blur-md transition-all duration-300">
                View My Work
                <ArrowDown className="w-4 h-4" />
              </motion.a>
              <motion.a href="#contact"
                 whileHover={{ scale: 1.02, y: -2 }}
                 whileTap={{ scale: 0.98 }}
                 onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                 className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white
                            bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400
                            shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300">
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <SocialLink href="https://github.com/ArnavPundir22" label="GitHub" icon={GithubIcon} />
              <SocialLink href="https://www.linkedin.com/in/arnav-pundir128ap" label="LinkedIn" icon={LinkedinIcon} />
              <SocialLink href="mailto:arnavp128@gmail.com" label="Email" icon={Mail} />
            </motion.div>
          </motion.div>

          {/* ── Photo card ── */}
          <motion.div variants={fadeLeft} initial="hidden" animate="show"
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-3xl opacity-50 group-hover:opacity-100 blur-2xl transition-opacity duration-500
                              bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />
              
              {/* Card */}
              <motion.div className="relative rounded-[2rem] overflow-hidden glass-card p-2"
                   whileHover={{ y: -10, rotateY: 5, rotateX: 5 }}
                   transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                <div className="rounded-3xl overflow-hidden relative">
                  <img src="/images/man1.png" alt="Arnav Pundir"
                       className="w-[280px] sm:w-[320px] xl:w-[400px] object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
                  
                  {/* Overlay badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass-card rounded-2xl p-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-xs text-slate-300 mb-1">Currently studying at</p>
                      <p className="text-sm font-semibold text-white">COER University, Roorkee</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-[10px] font-bold uppercase tracking-wider">B.Tech CSE</span>
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-[10px] font-bold uppercase tracking-wider">2024–2028</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* ── Stats strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
          {profile.stats.map(({ value, suffix, label }) => (
            <div key={label} className="glass-card rounded-2xl flex flex-col items-center justify-center py-8 px-4 group glass-card-hover">
              <span className="gradient-text font-display text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                {value}{suffix}
              </span>
              <span className="text-slate-400 text-sm font-medium tracking-wide">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
