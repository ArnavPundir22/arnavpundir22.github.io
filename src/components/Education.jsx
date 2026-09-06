import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { education, certifications, experience } from '../data'
import { BookOpen, Award, CheckCircle2, Briefcase } from 'lucide-react'

function TimelineItem({ item, i, total, inView }) {
  const title = item.degree || item.title
  const organization = item.institution || item.company
  const descriptionLines = Array.isArray(item.description) ? item.description : [item.description]

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.15 }}
      className="relative pl-10 group">

      {/* Line */}
      {i < total - 1 && (
        <div className="absolute left-[15px] top-10 bottom-[-20px] w-px bg-gradient-to-b from-cyan-500/50 to-transparent" />
      )}

      {/* Dot */}
      <div className="absolute left-0 top-3 w-8 h-8 rounded-full flex items-center justify-center
                      border-2 border-cyan-500 bg-[#060a14] group-hover:bg-cyan-500/10 transition-colors"
           style={{ boxShadow: item.current ? '0 0 16px rgba(34,211,238,0.4)' : 'none' }}>
        {item.current || item.period?.includes('Present')
          ? <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          : <span className="w-2 h-2 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors" />}
      </div>

      {/* Card */}
      <motion.div className="glass-card p-6 mb-8 cursor-pointer rounded-[1.5rem]"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-semibold text-white text-lg leading-snug group-hover:text-cyan-400 transition-colors">{title}</h3>
            <p className="text-cyan-300 text-sm font-medium mt-1">{organization}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <span className="text-xs px-4 py-1.5 rounded-full font-bold tracking-wider uppercase
                             bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              {item.period}
            </span>
            <p className="text-slate-400 text-xs mt-2 font-medium">{item.location}</p>
          </div>
        </div>
        {descriptionLines.map((desc, idx) => (
          <p key={idx} className="text-slate-300 text-sm leading-relaxed mt-2">{desc}</p>
        ))}
        {(item.current || item.period?.includes('Present')) && (
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-xs font-bold text-green-400 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Active Role
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

const certIcon = {
  google:    (
    <svg className="w-8 h-8 drop-shadow-lg" viewBox="0 0 48 48">
      <path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
      <path fill="#34A853" d="M6.306 14.691l6.571 4.819C14.655 15.108 19.001 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
      <path fill="#FBBC05" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
      <path fill="#EA4335" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
    </svg>
  ),
  github:    (
    <svg className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  ),
  microsoft: (
    <svg className="w-8 h-8 drop-shadow-lg" viewBox="0 0 23 23">
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
    <section id="education" ref={ref} className="py-28 relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-20">
          <span className="inline-block text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Background
          </span>
          <h2 className="section-heading">
            Experience, Education & <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16">

          {/* Timeline column */}
          <div>
            {/* Leadership & Experience */}
            <motion.h3 initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-10 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Briefcase className="w-5 h-5" />
              </div>
              Leadership & Experience
            </motion.h3>
            <div className="relative mb-14">
              {experience.map((item, i) => (
                <TimelineItem key={i} item={item} i={i} total={experience.length} inView={inView} />
              ))}
            </div>

            {/* Academic Journey */}
            <motion.h3 initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-10 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <BookOpen className="w-5 h-5" />
              </div>
              Academic Journey
            </motion.h3>
            <div className="relative">
              {education.map((item, i) => (
                <TimelineItem key={i} item={item} i={i} total={education.length} inView={inView} />
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3 initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-10 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Award className="w-5 h-5" />
              </div>
              Certifications
            </motion.h3>

            <div className="flex flex-col gap-6">
              {certifications.map((cert, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.15 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card p-6 rounded-[1.5rem] flex gap-5 items-start cursor-pointer group glass-card-hover">
                  
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
                       style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30`, boxShadow: `0 0 20px ${cert.color}10` }}>
                    {certIcon[cert.badge]}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-base leading-snug group-hover:text-cyan-300 transition-colors mb-1">
                      {cert.title}
                    </h4>
                    
                    <div className="mb-3 flex items-center gap-4 flex-wrap">
                      <p className="text-sm font-semibold tracking-wide" style={{ color: cert.color }}>
                        {cert.issuer}
                      </p>
                    </div>
                    
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 font-medium">{cert.description}</p>
                    
                    {cert.verificationUrl && (
                      <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg backdrop-blur-md border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        Verify Credential
                      </a>
                    )}
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
