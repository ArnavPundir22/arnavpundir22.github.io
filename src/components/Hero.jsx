import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { profile, roles } from '../data'

/* ---------- Floating orbs background ---------- */
function Orbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Grid dots */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(rgba(99,102,241,0.18) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      {/* Ambient blobs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }} />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #38bdf8 0%, transparent 70%)' }} />
    </div>
  )
}

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
    }, del ? 45 : 90)
    return () => clearTimeout(timer)
  }, [cIdx, del, rIdx])

  return (
    <span className="inline-flex items-center font-display text-2xl md:text-3xl font-semibold"
          style={{ color: '#a78bfa' }}>
      {display}<span className="cursor-blink" />
    </span>
  )
}

/* ---------- Social link ---------- */
function SocialLink({ href, label, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
       className="w-11 h-11 rounded-full flex items-center justify-center
                  border border-[rgba(99,102,241,0.25)] text-[#94a3b8]
                  hover:border-accent hover:text-accent hover:bg-[rgba(99,102,241,0.1)]
                  transition-all duration-200">
      {children}
    </a>
  )
}

const fadeUp   = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }
const fadeLeft = { hidden: { opacity: 0, x: 60 }, show: { opacity: 1, x: 0 } }

export default function Hero() {
  return (
    <section id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #060a14 0%, #0c1220 60%, #0a0f1e 100%)' }}>
      <Orbs />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Text ── */}
          <motion.div variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
                      initial="hidden" animate="show">

            <motion.div variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6
                         border border-[rgba(99,102,241,0.3)] bg-[rgba(99,102,241,0.08)]
                         text-accent text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1 variants={fadeUp}
              className="font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-tight mb-4">
              Hi, I'm{' '}
              <span className="gradient-text">Arnav Pundir</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="mb-6">
              <Typewriter />
            </motion.div>

            <motion.p variants={fadeUp}
              className="text-[#94a3b8] text-lg leading-relaxed mb-8 max-w-xl">
              I build end-to-end AI systems — face recognition pipelines, real-time
              computer vision apps, and full-stack web platforms using Python, Flask,
              and React.js. B.Tech CSE student at <span className="text-[#f1f5f9] font-medium">COER University, Roorkee</span>.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
              <a href="#projects"
                 onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                 className="px-7 py-3.5 rounded-full font-semibold text-white
                            bg-gradient-to-r from-accent to-accent2
                            hover:opacity-90 transition-all duration-200
                            shadow-[0_0_30px_rgba(99,102,241,0.35)]">
                View My Work
              </a>
              <a href="#contact"
                 onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                 className="px-7 py-3.5 rounded-full font-semibold text-[#f1f5f9]
                            border border-[rgba(99,102,241,0.4)]
                            hover:border-accent hover:bg-[rgba(99,102,241,0.1)]
                            transition-all duration-200">
                Get In Touch
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <SocialLink href="https://github.com/ArnavPundir22" label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/arnav-pundir128ap" label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </SocialLink>
              <SocialLink href="mailto:arnavp128@gmail.com" label="Email">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </SocialLink>
            </motion.div>
          </motion.div>

          {/* ── Photo card ── */}
          <motion.div variants={fadeLeft} initial="hidden" animate="show"
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="hidden lg:flex justify-center">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-3xl opacity-30"
                style={{ background: 'conic-gradient(from 0deg, #6366f1, #a78bfa, #38bdf8, #6366f1)', filter: 'blur(20px)' }} />
              {/* Card */}
              <div className="relative rounded-3xl overflow-hidden border border-[rgba(99,102,241,0.2)]
                              shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
                   style={{ background: 'linear-gradient(135deg, #111927 0%, #0c1220 100%)' }}>
                <img src="/images/man1.png" alt="Arnav Pundir"
                     className="w-80 xl:w-96 object-cover" />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl px-4 py-3 backdrop-blur-xl
                                  border border-[rgba(99,102,241,0.2)]"
                       style={{ background: 'rgba(11,17,35,0.8)' }}>
                    <p className="text-xs text-[#94a3b8] mb-0.5">Currently studying at</p>
                    <p className="text-sm font-semibold text-white">COER University, Roorkee</p>
                    <p className="text-xs text-accent">B.Tech CSE · 2024–2028</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── Stats strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px
                     rounded-2xl overflow-hidden border border-[rgba(99,102,241,0.15)]"
          style={{ background: 'rgba(99,102,241,0.1)' }}>
          {profile.stats.map(({ value, suffix, label }) => (
            <div key={label} className="flex flex-col items-center py-7 px-4"
                 style={{ background: '#0c1220' }}>
              <span className="gradient-text font-display text-3xl font-bold mb-1">
                {value}{suffix}
              </span>
              <span className="text-[#94a3b8] text-sm text-center">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5
                   text-[#94a3b8] text-xs opacity-60">
        <span>Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
      </motion.div>
    </section>
  )
}
