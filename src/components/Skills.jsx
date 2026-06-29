import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data'
import { Code2, Server, Database, BrainCircuit, Wrench, Layers } from 'lucide-react'

// Map categories to specific styles and icons
const categoryMeta = {
  Languages: { 
    icon: Code2,
    gradient: 'from-blue-400 to-cyan-400',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    border: 'border-blue-500/20'
  },
  Frontend: { 
    icon: Layers,
    gradient: 'from-cyan-400 to-teal-400',
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    border: 'border-cyan-500/20'
  },
  Backend: { 
    icon: Server,
    gradient: 'from-purple-400 to-pink-400',
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    border: 'border-purple-500/20'
  },
  'AI / CV': { 
    icon: BrainCircuit,
    gradient: 'from-green-400 to-emerald-400',
    bg: 'bg-green-500/10',
    text: 'text-green-400',
    border: 'border-green-500/20'
  },
  Tools: { 
    icon: Wrench,
    gradient: 'from-orange-400 to-amber-400',
    bg: 'bg-orange-500/10',
    text: 'text-orange-400',
    border: 'border-orange-500/20'
  },
}

function SkillBar({ name, level, meta, delay }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{name}</span>
        <span className={`text-xs font-bold ${meta.text}`}>{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden backdrop-blur-sm border border-white/5">
        <motion.div className={`h-full rounded-full bg-gradient-to-r ${meta.gradient} relative`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}>
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        </motion.div>
      </div>
    </div>
  )
}

export default function Skills() {
  const ref       = useRef(null)
  const inView    = useInView(ref, { once: true, margin: '-80px' })
  const ObjectKeys = Object.keys(skills)
  // Ensure we only use categories that exist in our meta mapping, default to first available if needed
  const cats = ObjectKeys.filter(key => categoryMeta[key])
  
  const [active, setActive] = useState(cats.length > 0 ? cats[0] : '')
  
  if (cats.length === 0) return null; // Fallback if data structure changes

  const activeMeta = categoryMeta[active]

  return (
    <section id="skills" ref={ref} className="py-28 relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            What I Work With
          </span>
          <h2 className="section-heading">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">

          {/* Category tabs */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 hide-scrollbar">
            {cats.map(cat => {
              const meta = categoryMeta[cat]
              const Icon = meta.icon
              const isActive = active === cat

              return (
                <motion.button key={cat} onClick={() => setActive(cat)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex-shrink-0 flex items-center gap-3 px-5 py-4 rounded-2xl text-sm font-semibold text-left
                              transition-all duration-300 whitespace-nowrap border
                              ${isActive 
                                ? `bg-white/10 ${meta.border} shadow-[0_0_20px_rgba(255,255,255,0.05)]` 
                                : 'bg-white/5 border-transparent hover:bg-white/10'}`}
                >
                  <div className={`p-2 rounded-xl transition-colors duration-300 ${isActive ? meta.bg : 'bg-white/5'}`}>
                    <Icon className={`w-5 h-5 ${isActive ? meta.text : 'text-slate-400'}`} />
                  </div>
                  <div>
                    <div className={isActive ? 'text-white' : 'text-slate-400'}>{cat}</div>
                    <div className={`text-[10px] uppercase tracking-wider mt-0.5 ${isActive ? meta.text : 'text-slate-500'}`}>
                      {skills[cat].length} Skills
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </motion.div>

          {/* Skill bars */}
          <motion.div key={active}
            initial={{ opacity: 0, y: 20, scale: 0.98 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="glass-card p-8 rounded-[2rem] grid sm:grid-cols-2 gap-x-12 gap-y-8 content-start min-h-[400px]">
            {skills[active].map(({ name, level }, i) => (
              <SkillBar key={name} name={name} level={level}
                        meta={activeMeta} delay={i * 0.1} />
            ))}
          </motion.div>
        </div>

        {/* All-skills chip cloud */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }} className="mt-20">
          <p className="text-center text-slate-400 text-sm font-medium uppercase tracking-widest mb-8">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['cvzone', 'dlib', 'MediaPipe', 'DeepFace', 'Scikit-learn', 'Pandas',
              'NumPy', 'Gunicorn', 'Azure AI', 'Render', 'Netlify', 'Git'].map(t => (
              <motion.span key={t}
                whileHover={{ y: -3, scale: 1.05 }}
                className="px-5 py-2.5 rounded-xl text-sm font-medium text-slate-300 cursor-default
                           glass-card hover:text-white hover:border-cyan-500/30 hover:bg-cyan-500/10 
                           transition-all duration-300">
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
