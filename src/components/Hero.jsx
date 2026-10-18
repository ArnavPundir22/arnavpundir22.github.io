import { motion } from 'framer-motion'
import { profile } from '../data'
import { ArrowDown, ExternalLink, Mail, Terminal, Sparkles, ShieldCheck } from 'lucide-react'
import MagneticButton from './MagneticButton'

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

const fadeUp = { 
  hidden: { opacity: 0, y: 25 }, 
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
  } 
}

export default function Hero() {
  const scrollTo = (id) => {
    window.dispatchEvent(new CustomEvent('load-below-fold'))
    const target = document.querySelector(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    } else {
      setTimeout(() => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 120)
    }
  }

  return (
    <section id="home" className="relative min-h-[95dvh] flex items-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-8 items-center">

          {/* ── Text Content (Immediate Paint for top LCP & FCP) ── */}
          <div className="flex flex-col">
            {/* Primary Role Pill & Live Availability */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono font-semibold text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                <span>AI Engineer & Full Stack Engineer</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full glass-card border-white/10 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span>Available for High-Impact Roles</span>
              </div>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] sm:leading-[1.08] mb-6">
              Elite AI & Full-Stack <span className="gradient-text">Systems Architect</span> Building World-Class Software.
            </h1>

            {/* Subtext */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-8 font-normal">
              I am <span className="text-white font-semibold">{profile.name}</span>, an exceptional <strong className="text-cyan-300 font-semibold">AI Engineer & Full Stack Engineer</strong> celebrated for engineering high-throughput distributed systems, real-time computer vision engines, and resilient offline-first platforms. Additionally, I mentor over 200 developers in algorithms as the Competitive Coding Lead at{' '}
              <a href={profile.dcoders} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/40 font-medium">
                D-Coders Squad
              </a>.
            </p>

            {/* Key Accomplishment Pills */}
            <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-medium">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                Full-Stack & Computer Vision
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono font-medium">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                Global Rank #70 · NSoC '26
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                Lead @ D-Coders Squad
              </span>
            </div>

            {/* CTAs & Socials */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
              <MagneticButton
                href="#projects"
                onClick={(e) => { e.preventDefault(); scrollTo('#projects') }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl font-semibold text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 justify-center text-center"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl font-semibold text-sm text-white glass-card hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 justify-center text-center"
              >
                <span>Get In Touch</span>
              </MagneticButton>

              <div className="flex items-center justify-center sm:justify-start gap-2 pt-2 sm:pt-0 sm:pl-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-11 h-11 rounded-2xl flex items-center justify-center glass-card hover:bg-white/10 text-slate-300 hover:text-cyan-400 border border-white/10 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-11 h-11 rounded-2xl flex items-center justify-center glass-card hover:bg-white/10 text-slate-300 hover:text-cyan-400 border border-white/10 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email Me Directly"
                  className="w-11 h-11 rounded-2xl flex items-center justify-center glass-card hover:bg-white/10 text-slate-300 hover:text-cyan-400 border border-white/10 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* ── Visual Showcase Card (Immediate Render for instant LCP) ── */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              {/* Outer decorative ambient glow */}
              <div className="absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-tr from-cyan-500/30 via-blue-500/20 to-purple-500/30 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Main Card Shell */}
              <div className="relative rounded-[2.5rem] glass-card p-4 sm:p-5 border border-white/10 shadow-2xl overflow-hidden bg-slate-950/70">
                {/* Image Frame */}
                <div className="rounded-[2rem] overflow-hidden relative aspect-[4/4.6] bg-slate-900 border border-white/10 group">
                  <img
                    src={profile.photo}
                    alt={profile.photoAlt}
                    title={profile.photoAlt}
                    width="400"
                    height="460"
                    loading="eager"
                    decoding="async"
                    fetchpriority="high"
                    className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle bottom shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Overlaid Role Card */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-2xl glass-card border border-white/15 backdrop-blur-xl bg-slate-950/85">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                        Primary Focus
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                        AI & Web
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white leading-tight">
                      AI & Full-Stack Engineer
                    </div>
                    <div className="text-xs text-slate-300 font-medium mt-0.5 flex items-center gap-1.5">
                      <span className="text-slate-400">Competitive Coding Lead</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-cyan-300/90">D-Coders</span>
                    </div>
                  </div>
                </div>

                {/* Micro Terminal Bar below portrait */}
                <div className="mt-3 px-3 py-2.5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-slate-300">stack: python · react · webrtc · yolo</span>
                  </div>
                  <span className="text-cyan-400 font-semibold text-[11px]">v2.0</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Key Metrics Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          {profile.stats.map(({ value, suffix, label }) => (
            <div
              key={label}
              className="glass-card rounded-2xl p-3.5 sm:p-5 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 flex flex-col items-center sm:items-start text-center sm:text-left group"
            >
              <div className="font-display text-2xl sm:text-4xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1 font-mono">
                {value}{suffix}
              </div>
              <div className="text-[10px] sm:text-xs font-medium text-slate-400 tracking-wide uppercase font-mono">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
