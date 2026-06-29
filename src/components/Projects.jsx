import { useState, useEffect, useRef, forwardRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { projects, projectCategories } from '../data'
import { ExternalLink, Sparkles } from 'lucide-react'

const GithubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

// 3D Tilt Card Component
const TiltCard = forwardRef(({ project, onClick }, externalRef) => {
  const internalRef = useRef(null)
  
  // Merge refs so both framer-motion and our tilt logic can access the DOM node
  const ref = externalRef || internalRef
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"])

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="relative w-full h-[400px] rounded-[2rem] glass-card cursor-pointer group"
    >
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 rounded-[2rem] overflow-hidden bg-black"
        style={{ transform: "translateZ(0px)" }}
      >
        <img 
          src={project.image || "/images/placeholder.jpg"} 
          alt={project.title}
          className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content Layer */}
      <div 
        className="absolute inset-0 p-8 flex flex-col justify-end"
        style={{ transform: "translateZ(50px)" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-white/10 text-cyan-400 backdrop-blur-md border border-white/10">
            {project.category}
          </span>
          {project.featured && (
            <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-yellow-500/10 text-yellow-400 backdrop-blur-md border border-yellow-500/20">
              <Sparkles className="w-3 h-3" /> Featured
            </span>
          )}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-300 text-sm line-clamp-2 mb-6 font-medium">
          {project.description}
        </p>

        <div className="flex items-center gap-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-400 transition-colors bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl backdrop-blur-md"
               onClick={(e) => e.stopPropagation()}>
              <GithubIcon className="w-4 h-4" /> Code
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 text-sm font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors px-4 py-2 rounded-xl"
               onClick={(e) => e.stopPropagation()}>
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
        </div>
      </div>
      
      {/* Shine Effect */}
      <div 
        className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
        style={{ transform: "translateZ(80px)" }}
      />
    </motion.div>
  )
})

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visible = filter === 'All' ? projects : projects.filter(p => p.category === filter)
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? visible : visible.slice(0, 6)

  useEffect(() => {
    setShowAll(false)
  }, [filter])

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header and Filter */}
        <div className="text-center mb-16">
          <span className="inline-block text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            My Portfolio
          </span>
          <h2 className="section-heading mb-10">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {projectCategories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                            ${filter === cat 
                              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.3)]' 
                              : 'glass-card text-slate-400 hover:text-white hover:bg-white/10'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <TiltCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        {!showAll && visible.length > 6 && (
          <div className="mt-16 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(true)}
              className="px-8 py-4 rounded-xl glass-card font-semibold text-white hover:bg-white/10 transition-all flex items-center gap-2 group"
            >
              View {visible.length - 6} More Projects
              <span className="group-hover:translate-y-1 transition-transform">↓</span>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  )
}
