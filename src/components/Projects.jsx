import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, projectCategories } from '../data'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visible = filter === 'All' ? projects : projects.filter(p => p.category === filter)
  const [activeProjectId, setActiveProjectId] = useState(visible[0]?.id)
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? visible : visible.slice(0, 6)

  useEffect(() => {
    setShowAll(false)
    if (visible.length > 0) {
      setActiveProjectId(visible[0].id)
    }
  }, [filter])

  const activeProject = visible.find(p => p.id === activeProjectId) || visible[0]

  return (
    <section id="projects" className="py-32 bg-black text-white overflow-hidden min-h-screen flex items-center">
      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12">
        {/* Header and Filter */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-10 tracking-tight text-white">Projects.</h2>
          <div className="flex flex-wrap gap-4">
            {projectCategories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-[15px] font-medium transition-all duration-300
                            ${filter === cat ? 'bg-white text-black' : 'bg-[#1d1d1f] text-[#86868b] hover:bg-[#2d2d2f] hover:text-white'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* Left Column: Pill Accordion */}
          <div className="w-full lg:w-[420px] flex flex-col gap-4 relative z-10">
            {displayedProjects.map((project) => {
              const isActive = activeProjectId === project.id;
              
              return (
                <motion.div 
                  key={project.id}
                  layout
                  onClick={() => !isActive && setActiveProjectId(project.id)}
                  className={`w-full cursor-pointer overflow-hidden transition-colors duration-300 ${isActive ? 'bg-[#1d1d1f] rounded-[32px] p-6 lg:p-8' : 'bg-[#111111] hover:bg-[#1d1d1f] rounded-full px-6 py-4 border border-[rgba(255,255,255,0.05)]'}`}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                >
                  <motion.div layout="position" className="relative z-10">
                    {isActive ? (
                      <div className="flex flex-col">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] shrink-0"></div>
                          <h3 className="font-semibold text-xl md:text-2xl text-white tracking-tight">{project.title}</h3>
                        </div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4, delay: 0.15 }}
                        >
                          <div className="flex items-center gap-2 mb-4">
                            <span className="px-3 py-1.5 rounded-md text-[11px] font-bold tracking-wider uppercase bg-[rgba(255,255,255,0.1)] text-[#a1a1a6]">
                              {project.category}
                            </span>
                            {project.featured && (
                              <span className="px-3 py-1.5 rounded-md text-[11px] font-bold tracking-wider uppercase bg-[rgba(255,255,255,0.1)] text-[#fbbf24]">
                                ⭐ Featured
                              </span>
                            )}
                          </div>
                          
                          <p className="text-[#a1a1a6] text-[15px] leading-relaxed mb-8 font-medium">
                            {project.description}
                          </p>

                          <div className="flex items-center gap-6">
                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                               className="text-sm font-medium text-white hover:opacity-80 transition-opacity flex items-center gap-2"
                               onClick={(e) => e.stopPropagation()}
                            >
                              GitHub
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                            </a>
                            {project.live && (
                              <a href={project.live} target="_blank" rel="noopener noreferrer"
                                 className="text-sm font-medium text-[#2997ff] hover:opacity-80 transition-opacity flex items-center gap-2"
                                 onClick={(e) => e.stopPropagation()}
                              >
                                Live Demo
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                              </a>
                            )}
                          </div>
                        </motion.div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full border-2 border-[#86868b] flex items-center justify-center shrink-0">
                          <svg className="w-3.5 h-3.5 text-[#86868b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                        <span className="font-semibold text-lg text-white truncate">{project.title}</span>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              )
            })}

            {!showAll && visible.length > 6 && (
              <motion.button 
                layout
                onClick={() => setShowAll(true)}
                className="mt-4 px-6 py-4 rounded-full bg-transparent border border-[rgba(255,255,255,0.2)] text-white font-medium hover:bg-[rgba(255,255,255,0.05)] transition-colors w-full lg:w-max mx-auto lg:mx-0"
              >
                View {visible.length - 6} More Projects
              </motion.button>
            )}
          </div>

          {/* Right Column: Large Image Display */}
          <div className="w-full lg:flex-1 sticky top-32">
            <div className="w-full aspect-[4/3] lg:aspect-[16/10] rounded-[40px] overflow-hidden bg-transparent relative">
              <AnimatePresence mode="wait">
                {activeProject && activeProject.image && (
                  <motion.img
                    key={activeProject.id}
                    src={activeProject.image}
                    alt={activeProject.imageAlt || activeProject.title}
                    initial={{ opacity: 0, filter: 'blur(20px)', scale: 1.1 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                    exit={{ opacity: 0, filter: 'blur(20px)', scale: 0.95 }}
                    transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute inset-0 w-full h-full object-cover rounded-[40px]"
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

