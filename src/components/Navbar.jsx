import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(6,10,20,0.88)] backdrop-blur-2xl border-b border-[rgba(99,102,241,0.12)] shadow-[0_4px_40px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <a href="#home" onClick={(e) => { e.preventDefault(); go('#home') }}
           className="font-display text-2xl font-bold tracking-tight select-none">
          <span className="text-accent">Ar</span><span className="text-white">nav</span>
          <span className="text-accent2">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={(e) => { e.preventDefault(); go(href) }}
                 className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                   active === href.slice(1) ? 'text-accent' : 'text-[#94a3b8] hover:text-white'
                 }`}>
                {active === href.slice(1) && (
                  <motion.span layoutId="nav-pill"
                    className="absolute inset-0 bg-[rgba(99,102,241,0.1)] rounded-lg border border-[rgba(99,102,241,0.25)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Buttons */}
        <a href="/Documents/Arnav_Pundir_Resume.pdf" download
           className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold
                       bg-gradient-to-r from-accent to-accent2 text-white hover:opacity-90 transition-opacity
                       shadow-[0_0_24px_rgba(99,102,241,0.4)]">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Resume
        </a>
        <a href="/Documents/Arnav%20Pundir%20(Web%20Developer).pdf" download
           aria-label="Download Web Development Resume PDF"
           className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold
                      border border-[rgba(99,102,241,0.35)] text-[#f1f5f9]
                      hover:border-accent hover:bg-[rgba(99,102,241,0.08)] transition-all duration-200">
          Web Development Resume
        </a>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 text-[#94a3b8] hover:text-accent transition-colors"
                aria-label="Toggle menu">
          <div className="flex flex-col gap-1.5 w-6">
            <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block h-0.5 bg-current rounded-full" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 bg-current rounded-full" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block h-0.5 bg-current rounded-full" />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[rgba(6,10,20,0.97)] backdrop-blur-xl border-t border-[rgba(99,102,241,0.1)]">
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map(({ label, href }) => (
                <a key={href} href={href} onClick={(e) => { e.preventDefault(); go(href) }}
                   className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                     active === href.slice(1) ? 'text-accent bg-[rgba(99,102,241,0.1)]' : 'text-[#94a3b8]'
                   }`}>
                  {label}
                </a>
              ))}
              <a href="/Documents/Arnav_Pundir_Resume.pdf" download
                 className="mt-2 text-center py-3 px-4 rounded-full text-sm font-semibold bg-gradient-to-r from-accent to-accent2 text-white">
                Download Resume
              </a>
              <a href="/Documents/Arnav%20Pundir%20(Web%20Developer).pdf" download
                 aria-label="Download Web Development Resume PDF"
                 className="text-center py-3 px-4 rounded-full text-sm font-semibold border border-[rgba(99,102,241,0.35)] text-[#f1f5f9] hover:border-accent hover:bg-[rgba(99,102,241,0.08)] transition-all duration-200">
                Web Development Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
  
}
