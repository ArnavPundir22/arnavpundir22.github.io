import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { projects, projectCategories } from '../data'

const categoryColor = {
  'AI / CV':    { bg: 'rgba(52,211,153,0.1)',   border: 'rgba(52,211,153,0.25)',  text: '#34d399' },
  'Full-Stack': { bg: 'rgba(56,189,248,0.1)',   border: 'rgba(56,189,248,0.25)', text: '#38bdf8' },
  'AI / NLP':   { bg: 'rgba(167,139,250,0.12)', border: 'rgba(167,139,250,0.3)', text: '#a78bfa' },
}

function Tag({ text }) {
  return (
    <span className="px-2.5 py-1 rounded-md text-[11px] font-medium text-[#94a3b8]
                     bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)]">
      {text}
    </span>
  )
}

function ProjectCard({ project, i }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const color  = categoryColor[project.category] || categoryColor['AI / CV']

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: 'easeOut', delay: (i % 3) * 0.1 }}
      className="glass-card flex flex-col gap-4 group overflow-hidden
                 hover:border-[rgba(99,102,241,0.3)]
                 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]
                 transition-all duration-300">

      {/* Project background image banner */}
      {project.image && (
        <div className="w-full h-44 overflow-hidden">
          <img
            src={project.image}
            alt={project.imageAlt || project.title}
            className="w-full h-full object-cover object-center
                       group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Card body */}
      <div className="p-6 flex flex-col gap-4 flex-1">

      {/* Category badge */}
      <div className="flex items-center justify-between">
        <span className="px-3 py-1 rounded-full text-[11px] font-semibold"
              style={{ background: color.bg, border: `1px solid ${color.border}`, color: color.text }}>
          {project.category}
        </span>
        {project.featured && (
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold text-[#fbbf24]
                           bg-[rgba(251,191,36,0.1)] border border-[rgba(251,191,36,0.2)]">
            ⭐ Featured
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="font-display font-semibold text-lg text-white leading-snug
                     group-hover:text-accent transition-colors duration-200">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-[#94a3b8] text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map(t => <Tag key={t} text={t} />)}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-1">
        <a href={project.github} target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-2 text-sm font-medium text-[#94a3b8]
                      hover:text-white transition-colors duration-200">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          GitHub
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 text-sm font-medium text-accent
                        hover:text-accent2 transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        )}
      </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [filter, setFilter] = useState('All')

  const visible = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" ref={ref}
      className="py-28"
      style={{ background: 'linear-gradient(180deg, #060a14 0%, #0c1220 100%)' }}>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            What I've Built
          </span>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[#94a3b8] max-w-lg mx-auto mt-4">
            End-to-end systems — from CV pipelines to full-stack web apps.
            Each project reflects real-world problem solving.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
                          ${filter === cat
                            ? 'bg-gradient-to-r from-accent to-accent2 text-white shadow-[0_0_20px_rgba(99,102,241,0.35)]'
                            : 'border border-[rgba(99,102,241,0.2)] text-[#94a3b8] hover:text-white hover:border-[rgba(99,102,241,0.4)]'}`}>
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div key={filter}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {visible.map((project, i) => (
              <ProjectCard key={project.id} project={project} i={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-14">
          <a href="https://github.com/ArnavPundir22" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-semibold text-white
                        border border-[rgba(99,102,241,0.35)]
                        hover:border-accent hover:bg-[rgba(99,102,241,0.1)]
                        transition-all duration-200">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
