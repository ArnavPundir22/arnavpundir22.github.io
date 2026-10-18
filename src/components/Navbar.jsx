import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Code2, BrainCircuit, ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react'
import { profile } from '../data'

const links = [
  { label: 'Home',      href: '#home' },
  { label: 'About',     href: '#about' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Journey',   href: '#education' },
  { label: 'Contact',   href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [resumeOpen, setResumeOpen] = useState(false)
  const resumeRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (resumeRef.current && !resumeRef.current.contains(event.target)) {
        setResumeOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      for (let i = links.length - 1; i >= 0; i--) {
        const id = links[i].href.slice(1)
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    window.dispatchEvent(new CustomEvent('load-below-fold'))
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    } else {
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }, 120)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6">
      <nav aria-label="Main Navigation"
        className={`max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-14 rounded-full transition-all duration-300 ${
          scrolled
            ? 'glass-card border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
            : 'bg-slate-950/40 backdrop-blur-md border border-white/5'
        }`}
      >
        {/* Brand Logo & Sliding Status */}
        <div className="flex items-center gap-3">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="flex items-center gap-2 group select-none"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 p-0.5 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.3)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all">
              <span className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-xs font-bold font-mono text-cyan-400">
                AP
              </span>
            </div>
            <span className="font-display font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              Arnav Pundir
            </span>
          </a>

          {/* Smooth Slide-in Role Badge upon scrolling */}
          <AnimatePresence>
            {scrolled && (
              <motion.div
                initial={{ opacity: 0, x: -12, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -12, scale: 0.9 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="hidden lg:flex items-center gap-1.5 pl-3 border-l border-white/10 text-[11px] font-mono text-cyan-400 select-none"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                <span className="text-slate-300">AI & Full-Stack</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/5">
          {links.map(({ label, href }) => {
            const id = href.slice(1)
            const isActive = active === id

            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-400/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </a>
              </li>
            )
          })}
        </ul>

        {/* Actions Group */}
        <div className="hidden md:flex items-center gap-3">
          {/* Resume Dropdown */}
          <div className="relative" ref={resumeRef}>
            <button
              onClick={() => setResumeOpen(!resumeOpen)}
              aria-expanded={resumeOpen}
              aria-label="View and download resumes"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${resumeOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {resumeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-64 rounded-2xl glass-card border border-white/10 p-2 shadow-2xl z-50 overflow-hidden"
                >
                  <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400 px-3 py-1 font-semibold">
                    Curated Profiles
                  </p>
                  <a
                    href="/Documents/Arnav_Pundir_Comprehensive_Resume.pdf"
                    download
                    onClick={() => setResumeOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-xs text-slate-200 hover:text-cyan-300 transition-colors group"
                  >
                    <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20">
                      <FileText className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-semibold">Comprehensive Resume</div>
                      <div className="text-[10px] text-slate-400">Full Profile & Track Record</div>
                    </div>
                  </a>
                  <a
                    href="/Documents/Arnav_Pundir_FullStack_Resume.pdf"
                    download
                    onClick={() => setResumeOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-xs text-slate-200 hover:text-cyan-300 transition-colors group"
                  >
                    <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20">
                      <Code2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-semibold">Full-Stack Resume</div>
                      <div className="text-[10px] text-slate-400">React, Next.js, Node & APIs</div>
                    </div>
                  </a>
                  <a
                    href="/Documents/Arnav_Pundir_AI_Resume.pdf"
                    download
                    onClick={() => setResumeOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-xs text-slate-200 hover:text-cyan-300 transition-colors group"
                  >
                    <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20">
                      <BrainCircuit className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-semibold">AI & Computer Vision</div>
                      <div className="text-[10px] text-slate-400">YOLO, InsightFace & OpenCV</div>
                    </div>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick Connect CTA */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all hover:scale-105 active:scale-95"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="md:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 p-4 rounded-3xl glass-card border border-white/10 shadow-2xl flex flex-col gap-1.5 max-h-[82vh] overflow-y-auto"
          >
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                  active === href.slice(1)
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <span>{label}</span>
                {active === href.slice(1) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                )}
              </a>
            ))}
            
            <div className="h-px bg-white/10 my-2" />
            
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 px-2 block font-semibold">
                Download Targeted Resumes
              </span>
              <a
                href="/Documents/Arnav_Pundir_Comprehensive_Resume.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2.5 py-2 px-3 rounded-xl text-xs font-medium bg-white/[0.03] border border-white/5 text-slate-300 hover:bg-white/10"
              >
                <FileText className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                <span>Comprehensive Profile</span>
              </a>
              <a
                href="/Documents/Arnav_Pundir_FullStack_Resume.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2.5 py-2 px-3 rounded-xl text-xs font-medium bg-white/[0.03] border border-white/5 text-slate-300 hover:bg-white/10"
              >
                <Code2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>Full-Stack Specialization</span>
              </a>
              <a
                href="/Documents/Arnav_Pundir_AI_Resume.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2.5 py-2 px-3 rounded-xl text-xs font-medium bg-white/[0.03] border border-white/5 text-slate-300 hover:bg-white/10"
              >
                <BrainCircuit className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <span>AI & Vision Specialization</span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold bg-cyan-400 text-slate-950 font-bold shadow-[0_0_20px_rgba(34,211,238,0.4)] w-full active:scale-95 transition-transform"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
