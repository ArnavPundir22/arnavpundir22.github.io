import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, projectCategories } from '../data'
import { 
  ExternalLink, 
  Sparkles, 
  Search, 
  ArrowUpRight, 
  Code2, 
  Layers, 
  Globe, 
  X, 
  ChevronRight, 
  Cpu,
  Award
} from 'lucide-react'

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

// Curated flagship items for top spotlight
const FLAGSHIP_IDS = [3, 18, 2, 1, 17, 16]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFlagshipIndex, setSelectedFlagshipIndex] = useState(0)
  const [activeModalProject, setActiveModalProject] = useState(null)

  // Flagship projects
  const flagshipProjects = useMemo(() => {
    return FLAGSHIP_IDS.map(id => projects.find(p => p.id === id)).filter(Boolean)
  }, [])

  const currentFlagship = flagshipProjects[selectedFlagshipIndex] || flagshipProjects[0]

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory
      const query = searchQuery.trim().toLowerCase()
      if (!query) return matchesCategory

      const matchesSearch = 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some(t => t.toLowerCase().includes(query)) ||
        project.category.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = { All: projects.length }
    projects.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1
    })
    return counts
  }, [])

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModalProject(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModalProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [activeModalProject])

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-2/3 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineered Systems & Artifacts</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 25, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5"
          >
            Featured Software & <span className="gradient-text">AI Systems</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 25, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Production-grade distributed platforms, real-time computer vision engines, and high-performance WebGL applications.
          </motion.p>
        </div>

        {/* 1. FLAGSHIP PROJECT SPOTLIGHT */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.98, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          {/* Flagship Selector Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-300">
                Flagship Spotlight
              </span>
            </div>

            {/* Selector Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
              {flagshipProjects.map((proj, idx) => {
                const isActive = idx === selectedFlagshipIndex
                return (
                  <button
                    key={proj.id}
                    onClick={() => setSelectedFlagshipIndex(idx)}
                    className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 whitespace-nowrap flex items-center gap-1.5
                      ${isActive 
                        ? 'text-white bg-white/10 shadow-[0_0_15px_rgba(34,211,238,0.25)] border border-cyan-400/40' 
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'}`}
                  >
                    <span className={`text-[10px] ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                      0{idx + 1}
                    </span>
                    <span>{proj.title.split(':')[0].split('—')[0].trim()}</span>
                    {proj.badge && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.9)]" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Active Flagship Stage Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFlagship.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-8 md:p-10 border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] shadow-2xl relative overflow-hidden"
            >
              {/* Subtle accent backdrop */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="grid lg:grid-cols-[1.1fr_1.3fr] gap-8 md:gap-12 items-center">
                
                {/* Information Column */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {currentFlagship.category}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-yellow-500/10 text-yellow-300 border border-yellow-500/20">
                        <Sparkles className="w-3 h-3 text-yellow-400" />
                        Flagship Architecture
                      </span>
                      {currentFlagship.badge && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.35)] animate-pulse">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,1)]" />
                          <span>{currentFlagship.badge}</span>
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug mb-4">
                      {currentFlagship.title}
                    </h3>

                    {/* Prominent Pilot Run Highlight Box */}
                    {currentFlagship.pilotHighlight && (
                      <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-emerald-500/5 to-transparent border border-emerald-400/40 mb-5 shadow-[0_0_25px_rgba(16,185,129,0.15)] flex items-start gap-3">
                        <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex-shrink-0 mt-0.5">
                          <Award className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-white flex flex-wrap items-center gap-2">
                            <span>COER University Executive Pilot Deployment</span>
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-emerald-400 text-slate-950 uppercase tracking-wider">
                              Verified Pilot
                            </span>
                          </div>
                          <p className="text-xs text-emerald-200/90 mt-1 leading-relaxed">
                            {currentFlagship.pilotHighlight}
                          </p>
                        </div>
                      </div>
                    )}

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {currentFlagship.description}
                    </p>

                    {/* Tech Stack Chips */}
                    <div className="mb-8">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Core Technologies</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {currentFlagship.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.06] text-slate-200 border border-white/10 hover:border-cyan-400/30 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-4 border-t border-white/5">
                    {currentFlagship.live && (
                      <a
                        href={currentFlagship.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-200 shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:shadow-[0_0_35px_rgba(34,211,238,0.5)] hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
                      >
                        <Globe className="w-4 h-4" />
                        <span>Launch Live App</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}

                    {currentFlagship.github && (
                      <a
                        href={currentFlagship.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/15 hover:border-cyan-400/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Inspect Repository</span>
                      </a>
                    )}

                    <button
                      onClick={() => setActiveModalProject(currentFlagship)}
                      className="text-xs font-mono text-slate-400 hover:text-cyan-300 underline underline-offset-4 transition-colors py-2 text-center sm:text-left sm:ml-auto"
                    >
                      Deep Dive Specs →
                    </button>
                  </div>
                </div>

                {/* Preview Browser Mockup Column */}
                <div 
                  className="relative group cursor-pointer"
                  onClick={() => setActiveModalProject(currentFlagship)}
                >
                  <div className="rounded-2xl overflow-hidden border border-white/15 bg-slate-950/80 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group-hover:border-cyan-400/40 transition-all duration-500">
                    {/* Simulated Browser Bar */}
                    <div className="px-4 py-3 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500/80" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <span className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <div className="px-4 py-1 rounded-md bg-black/40 text-[11px] font-mono text-slate-400 truncate max-w-[200px] sm:max-w-[280px]">
                        {currentFlagship.live ? currentFlagship.live.replace('https://', '') : `localhost:3000/${currentFlagship.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:text-cyan-400 transition-colors" />
                      </div>
                    </div>

                    {/* Screenshot Frame */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                      <img 
                        src={currentFlagship.image || '/images/placeholder.jpg'}
                        alt={currentFlagship.imageAlt || currentFlagship.title}
                        width="700"
                        height="437"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                      
                      <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                        <span>Click for Full Specs</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>


        {/* 2. EXPLORE ALL PROJECTS HEADER & TOOLBAR */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  Software Repository Index
                </h3>
              </div>
              <p className="text-slate-400 text-sm">
                Filter by architecture domain or search by technology stack.
              </p>
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search React, YOLO, WebRTC..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-cyan-400/50 focus:bg-white/[0.08] text-sm text-slate-200 placeholder:text-slate-500 outline-none transition-all duration-200 font-mono text-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {projectCategories.map((category) => {
              const isActive = activeCategory === category
              const count = categoryCounts[category] || 0

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap flex items-center gap-2
                    ${isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                      : 'glass-card text-slate-400 hover:text-white hover:bg-white/10'}`}
                >
                  <span>{category}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono ${isActive ? 'bg-black/30 text-white' : 'bg-white/5 text-slate-400'}`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Active Search & Filter Indicator */}
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono pt-1">
            <span>
              Showing {filteredProjects.length} of {projects.length} systems
              {searchQuery && <span> matching <span className="text-cyan-400">"{searchQuery}"</span></span>}
            </span>
            {(searchQuery || activeCategory !== 'All') && (
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery('') }}
                className="text-cyan-400 hover:underline hover:text-cyan-300"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* 3. RESPONSIVE PROJECT GRID */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 glass-card rounded-3xl border border-white/5 my-8">
            <Code2 className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-1">No systems found</h4>
            <p className="text-slate-400 text-sm max-w-sm mx-auto mb-4">
              No projects matched your active search query or category filters.
            </p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery('') }}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-mono transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: (idx % 3) * 0.06 }}
                onClick={() => setActiveModalProject(project)}
                className="group glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                <div>
                  {/* Card Visual Header */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={project.image || '/images/placeholder.jpg'}
                      alt={project.imageAlt || project.title}
                      width="400"
                      height="250"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent" />

                    {/* Top badging */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-cyan-300 border border-white/10">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-yellow-500/20 backdrop-blur-md text-yellow-300 border border-yellow-500/30">
                          <Sparkles className="w-2.5 h-2.5 text-yellow-400" />
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Prominent Pilot Run Overlay Badge */}
                    {project.badge && (
                      <div className="absolute bottom-3 left-3 right-3 pointer-events-none z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-mono font-bold bg-slate-950/90 backdrop-blur-md text-emerald-300 border border-emerald-400/50 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,1)]" />
                          <span>{project.badge}</span>
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6">
                    <h4 className="font-display text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] text-slate-500">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div 
                  className="px-5 sm:px-6 py-3.5 border-t border-white/5 bg-white/[0.01] flex items-center justify-between"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open live demo for ${project.title}`}
                        className="p-2 rounded-lg text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors"
                        title="Open Live Application"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-mono text-slate-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        )}

      </div>

      {/* 4. MODAL QUICK VIEW DRAWER */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto glass-card rounded-2xl sm:rounded-3xl border border-white/20 bg-slate-950/95 shadow-2xl p-5 sm:p-8 text-left z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {activeModalProject.category}
                    </span>
                    {activeModalProject.featured && (
                      <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono bg-yellow-500/10 text-yellow-300 border border-yellow-500/20">
                        <Sparkles className="w-3 h-3 text-yellow-400" />
                        Featured
                      </span>
                    )}
                    {activeModalProject.badge && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.35)] animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,1)]" />
                        {activeModalProject.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                    {activeModalProject.title}
                  </h3>
                </div>

                {/* Screenshot in modal */}
                <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] bg-black">
                  <img
                    src={activeModalProject.image || '/images/placeholder.jpg'}
                    alt={activeModalProject.imageAlt || activeModalProject.title}
                    width="800"
                    height="450"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Prominent Pilot Highlight in Modal */}
                {activeModalProject.pilotHighlight && (
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-emerald-500/5 to-transparent border border-emerald-400/40 shadow-[0_0_20px_rgba(16,185,129,0.15)] flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex-shrink-0 mt-0.5">
                      <Award className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white flex flex-wrap items-center gap-2">
                        <span>COER University Executive Pilot Deployment</span>
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-emerald-400 text-slate-950 uppercase tracking-wider">
                          Verified Institutional Pilot
                        </span>
                      </div>
                      <p className="text-xs text-emerald-200/90 mt-1 leading-relaxed">
                        {activeModalProject.pilotHighlight}
                      </p>
                    </div>
                  </div>
                )}

                {/* Description */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Architecture & Implementation Details
                  </h4>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {activeModalProject.description}
                  </p>
                </div>

                {/* All Tags */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Technology & Framework Ecosystem
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-200 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Links */}
                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-4 border-t border-white/10">
                  {activeModalProject.live && (
                    <a
                      href={activeModalProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.3)] w-full sm:w-auto"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Open Live Application</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}

                  {activeModalProject.github && (
                    <a
                      href={activeModalProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-colors w-full sm:w-auto"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Inspect GitHub Repository</span>
                    </a>
                  )}

                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="py-2 text-center sm:text-right sm:ml-auto text-xs font-mono text-slate-400 hover:text-white transition-colors"
                  >
                    Close [ESC]
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
