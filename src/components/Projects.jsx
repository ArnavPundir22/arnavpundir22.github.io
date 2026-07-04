import { useState, useEffect, useRef, forwardRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { projects, projectCategories } from '../data'
import { ExternalLink, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'

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
          draggable={false}
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

        <div className="flex items-center gap-4 relative z-50">
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

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const FeaturedCarousel = ({ items }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // Infinite wrap around index
  const activeIndex = ((page % items.length) + items.length) % items.length;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div 
      className="relative h-[450px] md:h-[500px] w-full flex items-center justify-center overflow-hidden perspective-1000 mb-8"
    >
      <AnimatePresence initial={false} custom={direction}>
        {items.map((project, index) => {
          // Calculate the shortest circular distance for infinite loop
          let distance = index - activeIndex;
          const half = items.length / 2;
          
          if (distance > half) {
            distance -= items.length;
          } else if (distance < -half) {
            distance += items.length;
          }

          const offset = distance;

          if (Math.abs(offset) > 3) return null; // Don't render cards too far away

          return (
            <motion.div
              key={project.id}
              className="absolute w-[90%] md:w-[70%] max-w-[600px] cursor-grab active:cursor-grabbing"
              initial={false}
              animate={{
                x: `${offset * 70}%`, // stagger horizontally
                scale: 1 - Math.abs(offset) * 0.15,
                rotateY: offset * -25, // 3D tilt towards center
                zIndex: 100 - Math.abs(offset),
                opacity: Math.abs(offset) >= 3 ? 0 : 1 - Math.abs(offset) * 0.35,
                filter: `blur(${Math.abs(offset) * 4}px)`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset: dragOffset, velocity }) => {
                // More sensitive swipe detection
                const swipe = dragOffset.x;
                if (swipe < -50 || velocity.x < -500) {
                  paginate(1);
                } else if (swipe > 50 || velocity.x > 500) {
                  paginate(-1);
                }
              }}
            >
              <div className={offset !== 0 ? "pointer-events-none" : ""}>
                <TiltCard project={project} />
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:px-12 pointer-events-none z-[200]">
        <button 
          onClick={() => paginate(-1)}
          aria-label="Previous project"
          className="w-10 h-10 md:w-14 md:h-14 rounded-full glass-card flex items-center justify-center text-white pointer-events-auto hover:bg-white/20 hover:text-cyan-300 transition-all hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(34,211,238,0.2)] border border-cyan-400/20"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button 
          onClick={() => paginate(1)}
          aria-label="Next project"
          className="w-10 h-10 md:w-14 md:h-14 rounded-full glass-card flex items-center justify-center text-white pointer-events-auto hover:bg-white/20 hover:text-cyan-300 transition-all hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(34,211,238,0.2)] border border-cyan-400/20"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 flex gap-3 z-[200]">
        {items.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to project ${idx + 1}`}
            onClick={() => {
              // Calculate the shortest path to the clicked indicator
              const currentIdx = activeIndex;
              const targetIdx = idx;
              let diff = targetIdx - currentIdx;
              
              if (diff > items.length / 2) diff -= items.length;
              if (diff < -items.length / 2) diff += items.length;
              
              paginate(diff);
            }}
            className={`h-2 rounded-full transition-all duration-500 ease-out ${idx === activeIndex ? 'w-10 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]' : 'w-2 bg-white/20 hover:bg-white/50 hover:scale-125'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter)
  
  const featured = filteredProjects.filter(p => p.featured)
  const rest = filteredProjects.filter(p => !p.featured)

  const [showGrid, setShowGrid] = useState(false)

  // Reset grid visibility when filter changes
  useEffect(() => {
    setShowGrid(false)
  }, [filter])

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
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

        {/* 3D Carousel for Featured Projects */}
        <AnimatePresence mode="wait">
          {featured.length > 0 ? (
            <motion.div 
              key={`carousel-${filter}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-24"
            >
              <FeaturedCarousel items={featured} />
            </motion.div>
          ) : (
            <motion.div 
              key={`empty-${filter}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-slate-400 py-12"
            >
              No featured projects in this category.
            </motion.div>
          )}
        </AnimatePresence>

        {/* View More Grid Toggle Button */}
        {rest.length > 0 && (
          <div className="flex justify-center mb-12 relative z-20">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowGrid(!showGrid)}
              className="px-8 py-4 rounded-xl glass-card font-semibold text-white hover:bg-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all flex items-center gap-3 group border border-white/10 bg-black/30 backdrop-blur-xl"
            >
              {showGrid ? 'Hide Other Projects' : `Show All Projects (${rest.length})`}
              <motion.span 
                animate={{ rotate: showGrid ? 180 : 0 }} 
                className="transition-transform text-cyan-400"
              >
                ↓
              </motion.span>
            </motion.button>
          </div>
        )}

        {/* Expandable Grid for Rest Projects */}
        <AnimatePresence>
          {showGrid && rest.length > 0 && (
            <motion.div
              initial={{ height: 0, opacity: 0, scale: 0.95 }}
              animate={{ height: 'auto', opacity: 1, scale: 1 }}
              exit={{ height: 0, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000 py-8">
                {rest.map((project) => (
                  <TiltCard key={project.id} project={project} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
