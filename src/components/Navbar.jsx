import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Code2, BrainCircuit, ChevronDown, Menu, X } from 'lucide-react'

const links = [
  { label: 'Home',      href: '#home' },
  { label: 'About',     href: '#about' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact',   href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active,   setActive]   = useState('home')
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false)
  const resumeDropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (resumeDropdownRef.current && !resumeDropdownRef.current.contains(event.target)) {
        setResumeDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      for (let i = links.length - 1; i >= 0; i--) {
        const id = links[i].href.slice(1)
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href) => {
    if (menuOpen) {
      setMenuOpen(false)
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3'
          : 'py-5'
      }`}
    >
      <div className={`mx-auto max-w-6xl transition-all duration-300 ${scrolled ? 'px-4' : 'px-6'}`}>
        <div className={`flex items-center justify-between h-14 px-6 rounded-2xl transition-all duration-300 ${
          scrolled 
            ? 'glass-card' 
            : 'bg-transparent'
        }`}>
          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); go('#home') }}
             className="font-display text-xl font-bold tracking-tight select-none flex items-center gap-1 group">
            <span className="text-white group-hover:text-cyan-400 transition-colors">Arnav</span>
            <span className="text-cyan-400 group-hover:text-purple-400 transition-colors">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={(e) => { e.preventDefault(); go(href) }}
                   className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 ${
                     active === href.slice(1) ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                   }`}>
                  {active === href.slice(1) && (
                    <motion.span layoutId="nav-pill"
                      className="absolute inset-0 bg-cyan-400/10 rounded-xl border border-cyan-400/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Resume Dropdown */}
          <div className="relative hidden md:block" ref={resumeDropdownRef}>
            <button 
              onClick={() => setResumeDropdownOpen(!resumeDropdownOpen)}
              className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
              <FileText className="w-4 h-4 text-purple-400" />
              <span>Resumes</span>
              <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${resumeDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {resumeDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 z-50 mt-3 w-64 rounded-2xl overflow-hidden bg-[#030712]/95 border border-white/10 backdrop-blur-xl shadow-2xl">
                  
                  <div className="p-2 flex flex-col gap-1">
                    <a href="/Documents/Arnav_Pundir_Comprehensive_Resume.pdf" download onClick={() => setResumeDropdownOpen(false)}
                       className="flex items-center gap-3 px-3 py-3 hover:bg-white/5 rounded-xl transition-colors group">
                      <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-colors">
                        <FileText className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">Comprehensive Profile</span>
                    </a>

                    <a href="/Documents/Arnav_Pundir_FullStack_Resume.pdf" download onClick={() => setResumeDropdownOpen(false)}
                       className="flex items-center gap-3 px-3 py-3 hover:bg-white/5 rounded-xl transition-colors group">
                      <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">Full-Stack Developer</span>
                    </a>

                    <a href="/Documents/Arnav_Pundir_AI_Resume.pdf" download onClick={() => setResumeDropdownOpen(false)}
                       className="flex items-center gap-3 px-3 py-3 hover:bg-white/5 rounded-xl transition-colors group">
                      <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-colors">
                        <BrainCircuit className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">AI & Computer Vision</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)}
                  className="md:hidden p-2 text-slate-400 hover:text-white transition-colors bg-white/5 rounded-xl border border-white/10"
                  aria-label="Toggle menu">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}
            className="md:hidden mt-2 px-4">
            <div className="glass-card rounded-2xl px-6 py-6 flex flex-col gap-2">
              {links.map(({ label, href }) => (
                <a key={href} href={href} onClick={(e) => { e.preventDefault(); go(href) }}
                   className={`py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                     active === href.slice(1) ? 'text-cyan-400 bg-cyan-400/10' : 'text-slate-300 hover:bg-white/5'
                   }`}>
                  {label}
                </a>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <div className="flex flex-col gap-2">
                <a href="/Documents/Arnav_Pundir_Comprehensive_Resume.pdf" download onClick={() => setMenuOpen(false)}
                   className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg">
                  <FileText className="w-4 h-4" />
                  Comprehensive Profile
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
