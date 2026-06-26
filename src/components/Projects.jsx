import { useRef, useState, useEffect } from 'react'
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
                     bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] whitespace-nowrap">
      {text}
    </span>
  )
}

function ProjectLinks({ project }) {
  return (
    <div className="flex flex-wrap items-center gap-4 pt-2">
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
  )
}

function ProjectAccordionItem({ project, isActive, onClick }) {
  const color = categoryColor[project.category] || categoryColor['AI / CV']

  return (
    <div 
      className={`border-b border-[rgba(255,255,255,0.05)] last:border-0 transition-colors duration-300
                  ${isActive ? 'bg-[rgba(255,255,255,0.02)]' : 'hover:bg-[rgba(255,255,255,0.01)]'}`}
    >
      <button 
        onClick={onClick}
        className="w-full text-left py-6 px-4 md:px-6 flex items-center justify-between group focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive ? 'bg-accent scale-100' : 'bg-transparent scale-0 group-hover:scale-50 group-hover:bg-[#475569]'}`} />
          <h3 className={`font-display font-semibold text-lg md:text-xl transition-colors duration-300
                        ${isActive ? 'text-white' : 'text-[#64748b] group-hover:text-[#94a3b8]'}`}>
            {project.title}
          </h3>
        </div>
        
        {/* Plus/Minus Icon */}
        <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors duration-300
                        ${isActive ? 'border-accent text-accent bg-[rgba(99,102,241,0.1)]' : 'border-[#334155] text-[#64748b] group-hover:border-[#475569] group-hover:text-[#94a3b8]'}`}>
          {isActive ? (
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          ) : (
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-4 md:px-6 pb-8 pl-10 md:pl-12 flex flex-col gap-5">
              
              {/* Category & Featured Badges */}
              <div className="flex items-center gap-3">
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

              {/* Mobile Image (Visible only on small screens) */}
              <div className="block lg:hidden w-full h-48 sm:h-64 mt-2 rounded-xl overflow-hidden border border-[rgba(255,255,255,0.05)]">
                <img 
                  src={project.image} 
                  alt={project.imageAlt || project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description */}
              <p className="text-[#94a3b8] text-sm leading-relaxed max-w-2xl">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map(t => <Tag key={t} text={t} />)}
              </div>

              {/* Links */}
              <ProjectLinks project={project} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [filter, setFilter] = useState('All')
  const [showAll, setShowAll] = useState(false)
  
  const visible = filter === 'All' ? projects : projects.filter(p => p.category === filter)
  const displayedProjects = showAll ? visible : visible.slice(0, 6)
  
  // Track the currently active project
  const [activeProjectId, setActiveProjectId] = useState(visible[0]?.id)

  // Reset active project and showAll when filter changes
  useEffect(() => {
    setShowAll(false)
    if (visible.length > 0) {
      setActiveProjectId(visible[0].id)
    }
  }, [filter])

  const activeProject = visible.find(p => p.id === activeProjectId) || visible[0]

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
          className="flex flex-wrap justify-center gap-3 mb-16">
          {projectCategories.map(cat => (
            <motion.button key={cat} onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
                          ${filter === cat
                            ? 'bg-gradient-to-r from-accent to-accent2 text-white shadow-[0_0_20px_rgba(99,102,241,0.35)]'
                            : 'border border-[rgba(99,102,241,0.2)] text-[#94a3b8] hover:text-white hover:border-[rgba(99,102,241,0.4)]'}`}>
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Interactive Layout Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start"
        >
          
          {/* Left Column: Accordion List */}
          <div className="w-full lg:w-5/12 glass-card rounded-2xl overflow-hidden flex flex-col relative">
            {displayedProjects.map((project) => (
              <ProjectAccordionItem 
                key={project.id} 
                project={project} 
                isActive={activeProjectId === project.id}
                onClick={() => setActiveProjectId(project.id)}
              />
            ))}
            
            {visible.length === 0 && (
              <div className="py-12 text-center text-[#64748b]">
                No projects found in this category.
              </div>
            )}

            {/* Load More Button */}
            {!showAll && visible.length > 6 && (
              <div className="p-4 border-t border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.01)] flex justify-center">
                <button 
                  onClick={() => setShowAll(true)}
                  className="px-6 py-2.5 rounded-full text-sm font-medium text-accent border border-[rgba(99,102,241,0.2)]
                             hover:bg-[rgba(99,102,241,0.1)] hover:text-white transition-all duration-300"
                >
                  View {visible.length - 6} More Projects
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Animated Image Showcase (Desktop Only) */}
          <div className="hidden lg:block lg:w-7/12 sticky top-32">
            <div className="w-full aspect-[4/3] xl:aspect-[16/10] rounded-2xl overflow-hidden glass-card p-2 relative shadow-2xl bg-[rgba(255,255,255,0.02)]">
              <AnimatePresence mode="wait">
                {activeProject && activeProject.image && (
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full h-full rounded-xl overflow-hidden relative"
                  >
                    <img
                      src={activeProject.image}
                      alt={activeProject.imageAlt || activeProject.title}
                      className="w-full h-full object-cover object-center"
                    />
                    
                    {/* Subtle gradient overlay to blend into the frame */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
        </motion.div>

        {/* GitHub CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-20">
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

