import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { education, certifications } from '../data'

function TimelineItem({ item, i, total, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.15 }}
      className="relative pl-10">

      {/* Line */}
      {i < total - 1 && (
        <div className="absolute left-[14px] top-8 bottom-0 w-px"
             style={{ background: 'linear-gradient(180deg, rgba(99,102,241,0.4), transparent)' }} />
      )}

      {/* Dot */}
      <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full flex items-center justify-center
                      border-2 border-accent bg-[#060a14]"
           style={{ boxShadow: item.current ? '0 0 12px rgba(99,102,241,0.5)' : 'none' }}>
        {item.current
          ? <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          : <span className="w-2 h-2 rounded-full bg-[#475569]" />}
      </div>

      {/* Card */}
      <div className="glass-card p-5 mb-6 hover:border-[rgba(99,102,241,0.3)] transition-all duration-300">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-semibold text-white text-base leading-snug">{item.degree}</h3>
            <p className="text-accent text-sm font-medium mt-0.5">{item.institution}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <span className="text-xs px-3 py-1 rounded-full font-medium
                             bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.2)] text-accent">
              {item.period}
            </span>
            <p className="text-[#94a3b8] text-xs mt-1.5">{item.location}</p>
          </div>
        </div>
        {item.description && (
          <p className="text-[#94a3b8] text-sm leading-relaxed mt-1">{item.description}</p>
        )}
        {item.current && (
          <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Currently Enrolled
          </div>
        )}
      </div>
    </motion.div>
  )
}

const certIcon = {
  google:    (
    <svg className="w-7 h-7" viewBox="0 0 48 48">
      <path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
      <path fill="#34A853" d="M6.306 14.691l6.571 4.819C14.655 15.108 19.001 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
      <path fill="#FBBC05" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
      <path fill="#EA4335" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
    </svg>
  ),
  github:    (
    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  ),
  microsoft: (
    <svg className="w-7 h-7" viewBox="0 0 23 23">
      <path fill="#f35325" d="M1 1h10v10H1z"/>
      <path fill="#81bc06" d="M12 1h10v10H12z"/>
      <path fill="#05a6f0" d="M1 12h10v10H1z"/>
      <path fill="#ffba08" d="M12 12h10v10H12z"/>
    </svg>
  ),
}

export default function Education() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" ref={ref}
      className="py-28"
      style={{ background: 'linear-gradient(180deg, #0c1220 0%, #060a14 100%)' }}>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-20">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Background
          </span>
          <h2 className="section-heading">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Education timeline */}
          <div>
            <motion.h3 initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="text-sm font-semibold text-[#94a3b8] uppercase tracking-widest mb-8 flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
              </svg>
              Academic Journey
            </motion.h3>
            {education.map((item, i) => (
              <TimelineItem key={i} item={item} i={i} total={education.length} inView={inView} />
            ))}
          </div>

          {/* Certifications */}
          <div>
            <motion.h3 initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.15 }}
              className="text-sm font-semibold text-[#94a3b8] uppercase tracking-widest mb-8 flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
              Certifications
            </motion.h3>

            <div className="flex flex-col gap-4">
              {certifications.map((cert, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.15 }}
                  className="glass-card p-5 flex gap-4 items-start
                             hover:border-[rgba(99,102,241,0.3)]
                             hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                             transition-all duration-300 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                       style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}30` }}>
                    {certIcon[cert.badge]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm leading-snug group-hover:text-accent transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-medium mt-1 mb-2" style={{ color: cert.color }}>
                      {cert.issuer}
                    </p>
                    <p className="text-[#94a3b8] text-xs leading-relaxed">{cert.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
