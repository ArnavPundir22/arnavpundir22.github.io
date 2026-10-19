import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { education, certifications, experience, openSource } from '../data'
import { 
  Award, 
  CheckCircle2, 
  Briefcase, 
  GitPullRequest, 
  GraduationCap, 
  ExternalLink,
  Sparkles,
  MapPin
} from 'lucide-react'

// Official brand SVG icons for verified certifications
const CertBadges = {
  google: (
    <svg className="w-6 h-6" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
      <path fill="#34A853" d="M6.306 14.691l6.571 4.819C14.655 15.108 19.001 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
      <path fill="#FBBC05" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
      <path fill="#EA4335" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
    </svg>
  ),
  github: (
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  ),
  microsoft: (
    <svg className="w-6 h-6" viewBox="0 0 23 23" aria-hidden="true">
      <path fill="#f35325" d="M1 1h10v10H1z"/>
      <path fill="#81bc06" d="M12 1h10v10H12z"/>
      <path fill="#05a6f0" d="M1 12h10v10H1z"/>
      <path fill="#ffba08" d="M12 12h10v10H12z"/>
    </svg>
  ),
}

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-60px' })
  const [activeTab, setActiveTab] = useState('all')

  return (
    <section id="education" ref={ref} className="py-32 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: -20, filter: 'blur(4px)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trajectory & Credentials</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 25, filter: 'blur(5px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 25, filter: 'blur(5px)' }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5"
          >
            Experience, Leadership & <span className="gradient-text">Certifications</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 25, filter: 'blur(5px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 25, filter: 'blur(5px)' }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed"
          >
            A track record of technical community leadership, open-source competitive rankings, and verified industry achievements.
          </motion.p>
        </div>

        {/* Dual Layout: Experience & Impact (Left) + Verified Credentials (Right) */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: CAREER & LEADERSHIP JOURNEY */}
          <div className="space-y-12">
            
            {/* 1. Leadership & Industry Roles */}
            <div>
              <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-white/5">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold font-display uppercase tracking-wider text-white">
                  Technical Leadership & Experience
                </h3>
              </div>

              <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-2.5 before:top-3 before:bottom-3 before:w-px before:bg-gradient-to-b before:from-cyan-400/50 before:via-blue-500/20 before:to-transparent">
                {experience.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -35, filter: 'blur(5px)' }}
                    animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: -35, filter: 'blur(5px)' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
                    className="relative group"
                  >
                    {/* Node Dot */}
                    <div className="absolute -left-[24px] sm:-left-[30px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_12px_rgba(34,211,238,0.6)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    </div>

                    <div className="glass-card p-4 sm:p-6 rounded-2xl border border-white/10 group-hover:border-cyan-400/40 transition-all duration-300">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </h4>
                        <span className="text-xs font-mono px-2.5 sm:px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 whitespace-nowrap">
                          {item.period}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-slate-400 mb-4 font-medium">
                        <span className="text-cyan-300 font-semibold">{item.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {item.location}
                        </span>
                      </div>

                      <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                        {item.description.map((line, lIdx) => (
                          <li key={lIdx} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1 flex-shrink-0">›</span>
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 2. Open-Source Contributions */}
            {openSource && openSource.length > 0 && (
              <div>
                <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-white/5">
                  <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <GitPullRequest className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold font-display uppercase tracking-wider text-white">
                    Open Source Track Record
                  </h3>
                </div>

                <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-2.5 before:top-3 before:bottom-3 before:w-px before:bg-gradient-to-b before:from-purple-400/50 before:via-purple-500/20 before:to-transparent">
                  {openSource.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -35, filter: 'blur(5px)' }}
                      animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: -35, filter: 'blur(5px)' }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 + idx * 0.1 }}
                      className="relative group"
                    >
                      {/* Node Dot */}
                      <div className="absolute -left-[24px] sm:-left-[30px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-purple-400 flex items-center justify-center shadow-[0_0_12px_rgba(168,85,247,0.6)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      </div>

                      <div className="glass-card p-4 sm:p-6 rounded-2xl border border-white/10 group-hover:border-purple-400/40 transition-all duration-300">
                        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                          <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                            {item.role}
                          </h4>
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                            {item.rank && (
                              <span className="text-xs font-mono px-2.5 sm:px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 font-semibold whitespace-nowrap">
                                {item.rank}
                              </span>
                            )}
                            <span className="text-xs font-mono px-2.5 sm:px-3 py-1 rounded-full bg-white/5 text-slate-400 border border-white/10 whitespace-nowrap">
                              {item.period}
                            </span>
                          </div>
                        </div>

                        <div className="text-xs text-purple-300 font-semibold mb-4">
                          {item.organization}
                        </div>

                        <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                          {item.description.map((line, lIdx) => (
                            <li key={lIdx} className="flex items-start gap-2">
                              <span className="text-purple-400 mt-1 flex-shrink-0">›</span>
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Academic Foundation */}
            <div>
              <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-white/5">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold font-display uppercase tracking-wider text-white">
                  Academic Foundation
                </h3>
              </div>

              <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2 sm:before:left-2.5 before:top-3 before:bottom-3 before:w-px before:bg-gradient-to-b before:from-cyan-400/30 before:via-cyan-500/10 before:to-transparent">
                {education.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -35, filter: 'blur(5px)' }}
                    animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: -35, filter: 'blur(5px)' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 + idx * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute -left-[24px] sm:-left-[30px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-500/40 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
                    </div>

                    <div className="glass-card p-4 sm:p-6 rounded-2xl border border-white/5 group-hover:border-cyan-400/30 transition-all duration-300">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {item.degree}
                        </h4>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/10 whitespace-nowrap">
                          {item.period}
                        </span>
                      </div>

                      <div className="text-xs text-cyan-300/80 mb-2 font-medium">
                        {item.institution} • {item.location}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>


          {/* RIGHT COLUMN: VERIFIED CERTIFICATIONS & HONORS */}
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/5">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold font-display uppercase tracking-wider text-white">
                  Verified Industry Credentials
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {certifications.length} verified
              </span>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 35, filter: 'blur(5px)' }}
                  animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: 35, filter: 'blur(5px)' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 + idx * 0.08 }}
                  className="glass-card p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Subtle ambient accent corner */}
                  <div 
                    className="absolute -right-10 -bottom-10 w-28 h-28 rounded-full blur-[40px] pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ background: cert.color }}
                  />

                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* Brand Icon Box */}
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex-shrink-0 flex items-center justify-center border transition-transform duration-300 group-hover:scale-105"
                      style={{ 
                        background: `${cert.color}15`, 
                        borderColor: `${cert.color}35`,
                        boxShadow: `0 0 15px ${cert.color}10` 
                      }}
                    >
                      {CertBadges[cert.badge] || <Award className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />}
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                          {cert.title}
                        </h4>
                      </div>

                      <div className="flex items-center gap-2 mb-2">
                        <span 
                          className="text-xs font-semibold tracking-wide"
                          style={{ color: cert.color }}
                        >
                          {cert.issuer}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          Verified
                        </span>
                      </div>

                      <p className="text-slate-400 text-xs leading-relaxed mb-3 font-normal">
                        {cert.description}
                      </p>

                      {cert.verificationUrl && (
                        <a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 py-1 transition-colors"
                        >
                          <span>Verify Credential</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick summary note */}
            <div className="mt-8 p-5 rounded-2xl border border-white/5 bg-white/[0.02] text-xs text-slate-400 leading-relaxed font-mono">
              <span className="text-cyan-400 font-semibold">Credential Integrity:</span> All certifications and program rankings include direct issuer links, verified badges, or verifiable repository logs.
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
