import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data'

const categoryColors = {
  Languages: { bg: 'rgba(99,102,241,0.12)',  border: 'rgba(99,102,241,0.3)',  text: '#818cf8' },
  Frontend:  { bg: 'rgba(56,189,248,0.1)',   border: 'rgba(56,189,248,0.25)', text: '#38bdf8' },
  Backend:   { bg: 'rgba(167,139,250,0.12)', border: 'rgba(167,139,250,0.3)', text: '#a78bfa' },
  'AI / CV': { bg: 'rgba(52,211,153,0.1)',   border: 'rgba(52,211,153,0.25)', text: '#34d399' },
  Tools:     { bg: 'rgba(251,191,36,0.1)',   border: 'rgba(251,191,36,0.25)', text: '#fbbf24' },
}

function SkillBar({ name, level, color, delay }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-[#f1f5f9] group-hover:text-white transition-colors">{name}</span>
        <span className="text-xs font-semibold" style={{ color: color.text }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
        <motion.div className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color.text}80, ${color.text})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, ease: 'easeOut', delay }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref       = useRef(null)
  const inView    = useInView(ref, { once: true, margin: '-80px' })
  const cats      = Object.keys(skills)
  const [active, setActive] = useState(cats[0])
  const color     = categoryColors[active]

  return (
    <section id="skills" ref={ref}
      className="py-28"
      style={{ background: '#060a14' }}>

      <div className="absolute inset-x-0" style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)',
      }} />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            What I Work With
          </span>
          <h2 className="section-heading">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-8">

          {/* Category tabs */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
            {cats.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`flex-shrink-0 px-5 py-3 rounded-xl text-sm font-semibold text-left
                            transition-all duration-200 whitespace-nowrap
                            ${active === cat
                              ? 'text-white border shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
                              : 'text-[#94a3b8] border border-transparent hover:text-white'}`}
                style={active === cat
                  ? { background: color.bg, borderColor: color.border }
                  : { background: 'rgba(255,255,255,0.03)' }}>
                {cat}
                <span className={`ml-2 text-xs ${active === cat ? '' : 'text-[#64748b]'}`}
                      style={active === cat ? { color: color.text } : {}}>
                  ({skills[cat].length})
                </span>
              </button>
            ))}
          </motion.div>

          {/* Skill bars */}
          <motion.div key={active}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8 grid sm:grid-cols-2 gap-6 content-start">
            {skills[active].map(({ name, level }, i) => (
              <SkillBar key={name} name={name} level={level}
                        color={color} delay={i * 0.08} />
            ))}
          </motion.div>
        </div>

        {/* All-skills chip cloud */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }} className="mt-14">
          <p className="text-center text-[#94a3b8] text-sm mb-6">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['cvzone', 'dlib', 'MediaPipe', 'DeepFace', 'Scikit-learn', 'Pandas',
              'NumPy', 'Gunicorn', 'Azure AI', 'Render', 'Netlify', 'Git'].map(t => (
              <span key={t}
                className="px-4 py-2 rounded-full text-xs font-medium text-[#94a3b8]
                           border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]
                           hover:text-white hover:border-[rgba(99,102,241,0.3)] transition-colors">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
