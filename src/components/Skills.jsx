import { useState, useMemo, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { skillCategories } from '../data'
import { Code2, Layers, Server, BrainCircuit, Database, Wrench, Search, Sparkles } from 'lucide-react'

const categoryIcons = {
  Languages: Code2,
  'Frontend & 3D': Layers,
  'AI & Computer Vision': BrainCircuit,
  'Backend & Real-Time': Server,
  'Databases & Storage': Database,
  'Tools & Engineering': Wrench,
}

const categoryColors = {
  Languages: { text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', hover: 'hover:border-blue-400/40' },
  'Frontend & 3D': { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', hover: 'hover:border-cyan-400/40' },
  'AI & Computer Vision': { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', hover: 'hover:border-emerald-400/40' },
  'Backend & Real-Time': { text: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20', hover: 'hover:border-purple-400/40' },
  'Databases & Storage': { text: 'text-teal-400', bg: 'bg-teal-500/10', border: 'border-teal-500/20', hover: 'hover:border-teal-400/40' },
  'Tools & Engineering': { text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', hover: 'hover:border-amber-400/40' },
}

const ecosystem = [
  'InsightFace', 'YOLOv8', 'OpenCV', 'MediaPipe', 'DeepFace', 'TensorFlow',
  'Three.js', 'GSAP', 'Framer Motion', 'RxDB', 'Supabase', 'WebRTC',
  'Redis', 'Flask', 'FastAPI', 'PyQt5', 'Fernet Cryptography', 'Vite'
]

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: false, margin: '-60px' })

  const allCategories = Object.keys(skillCategories)

  const filteredCategories = useMemo(() => {
    return allCategories.filter(cat => {
      if (selectedCategory !== 'All' && cat !== selectedCategory) return false
      if (!searchQuery.trim()) return true

      const query = searchQuery.toLowerCase()
      const matchesCat = cat.toLowerCase().includes(query)
      const matchesSkills = skillCategories[cat].skills.some(
        s => s.name.toLowerCase().includes(query) || s.highlight.toLowerCase().includes(query)
      )
      return matchesCat || matchesSkills
    })
  }, [allCategories, selectedCategory, searchQuery])

  return (
    <section id="skills" ref={sectionRef} className="py-28 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-48 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30, filter: 'blur(6px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: -30, filter: 'blur(6px)' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Technical Competence
          </span>
          <h2 className="section-heading">
            Engineering & <span className="gradient-text">Architecture Matrix</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base md:text-lg">
            Production-tested frameworks, low-level languages, and specialized computer vision tools.
          </p>
        </motion.div>

        {/* Search & Category Filter Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 25, filter: 'blur(4px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 25, filter: 'blur(4px)' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 sm:mb-12"
        >
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-2 md:pb-0 hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                selectedCategory === 'All'
                  ? 'bg-cyan-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                  : 'glass-card text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              All Domains
            </button>
            {allCategories.map(cat => {
              const isSelected = selectedCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 sm:px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                    isSelected
                      ? 'bg-cyan-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                      : 'glass-card text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64 flex-shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech stack..."
              className="w-full pl-9 pr-8 py-2.5 rounded-xl text-xs bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:bg-white/[0.07] transition-all font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white p-1"
              >
                ✕
              </button>
            )}
          </div>
        </motion.div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence>
            {filteredCategories.map((catName, idx) => {
              const data = skillCategories[catName]
              const Icon = categoryIcons[catName] || Code2
              const colors = categoryColors[catName] || { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', hover: 'hover:border-cyan-400/40' }

              return (
                <motion.div
                  key={catName}
                  initial={{ opacity: 0, y: 35, scale: 0.97, filter: 'blur(5px)' }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } : { opacity: 0, y: 35, scale: 0.97, filter: 'blur(5px)' }}
                  exit={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: (idx % 3) * 0.08 }}
                  className={`glass-card p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col justify-between ${colors.hover} transition-all duration-300 group`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-2xl ${colors.bg} ${colors.text} border ${colors.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-base leading-snug group-hover:text-cyan-300 transition-colors">
                            {catName}
                          </h3>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                            {data.tag}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Skill Items */}
                    <div className="space-y-3">
                      {data.skills.map(skill => (
                        <div 
                          key={skill.name}
                          className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-semibold text-white font-mono">
                              {skill.name}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 font-normal leading-relaxed">
                            {skill.highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Empty Search Result */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            <p className="text-base mb-2">No matching technologies found for "{searchQuery}".</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery('') }}
              className="text-xs text-cyan-400 underline underline-offset-4"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Ecosystem Cloud */}
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 30, filter: 'blur(5px)' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mt-20 pt-10 border-t border-white/10 text-center"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6 font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Specialized Libraries & Micro-Frameworks
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
            {ecosystem.map(tool => (
              <span
                key={tool}
                className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium text-slate-300 glass-card border-white/5 hover:border-cyan-400/30 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
