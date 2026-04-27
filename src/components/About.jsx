import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile } from '../data'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut', delay } },
})

function SectionLabel({ children }) {
  return (
    <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">
      {children}
    </span>
  )
}

export default function About() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #060a14 0%, #0c1220 100%)' }}>

      {/* Subtle divider line top */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}
          className="text-center mb-20">
          <SectionLabel>Who I Am</SectionLabel>
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto mt-4">
            A builder at the intersection of AI engineering and full-stack development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Bio ── */}
          <motion.div variants={fadeUp(0.1)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            {profile.bio.map((para, i) => (
              <p key={i} className={`text-[#94a3b8] leading-relaxed text-[1.05rem] ${i < profile.bio.length - 1 ? 'mb-5' : ''}`}>
                {para}
              </p>
            ))}

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact"
                 onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                 className="px-6 py-3 rounded-full text-sm font-semibold text-white
                            bg-gradient-to-r from-accent to-accent2
                            hover:opacity-90 transition-opacity shadow-[0_0_24px_rgba(99,102,241,0.3)]">
                Let's Connect
              </a>
              <a href="/Documents/ArnavPundir_BuildingWithAI.pdf" download
                 className="px-6 py-3 rounded-full text-sm font-semibold text-[#f1f5f9]
                            border border-[rgba(99,102,241,0.35)]
                            hover:border-accent hover:bg-[rgba(99,102,241,0.08)]
                            transition-all duration-200">
                Download CV
              </a>
            </div>
          </motion.div>

          {/* ── Cards grid ── */}
          <motion.div variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                      initial="hidden" animate={inView ? 'show' : 'hidden'}
                      className="grid grid-cols-2 gap-4">

            {[
              { icon: '🎓', label: 'Education', value: 'COER University', sub: 'B.Tech CSE' },
              { icon: '📍', label: 'Location',  value: 'Roorkee, India',  sub: 'Open to remote' },
              { icon: '💼', label: 'Experience', value: '2+ Years',       sub: 'Building real systems' },
              { icon: '🔭', label: 'Focus Area', value: 'AI + Full-Stack', sub: 'CV & Web Systems' },
            ].map(({ icon, label, value, sub }) => (
              <motion.div key={label}
                variants={fadeUp(0)}
                className="glass-card p-5 hover:border-[rgba(99,102,241,0.3)] transition-all duration-300
                           hover:shadow-[0_8px_32px_rgba(99,102,241,0.12)]">
                <div className="text-2xl mb-3">{icon}</div>
                <p className="text-xs text-[#94a3b8] uppercase tracking-wide mb-1">{label}</p>
                <p className="font-semibold text-white text-sm leading-snug">{value}</p>
                <p className="text-xs text-accent mt-0.5">{sub}</p>
              </motion.div>
            ))}

            {/* What I do */}
            <motion.div variants={fadeUp(0)}
              className="col-span-2 glass-card p-5 hover:border-[rgba(99,102,241,0.3)] transition-all duration-300">
              <p className="text-xs text-[#94a3b8] uppercase tracking-wide mb-3">Core Domains</p>
              <div className="flex flex-wrap gap-2">
                {['Computer Vision', 'Face Recognition', 'YOLOv8 / Object Detection', 'Flask APIs', 'React.js', 'ML Pipelines', 'Desktop GUIs'].map(t => (
                  <span key={t}
                    className="px-3 py-1 rounded-full text-xs font-medium
                               bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.2)] text-accent">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
