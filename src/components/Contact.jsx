import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { profile } from '../data'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  ArrowUpRight, 
  ExternalLink,
  MessageSquare
} from 'lucide-react'

const FORM_ENDPOINT = `https://formsubmit.co/${profile.email}`

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const LinkedInIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-60px' })
  const [status, setStatus] = useState(null)
  const [copied, setCopied] = useState(false)
  const [localTime, setLocalTime] = useState('')

  // Compute Indian Standard Time (UTC+5:30) for Roorkee, India
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true,
        }).format(new Date())
        setLocalTime(timeStr)
      } catch {
        setLocalTime('11:00 AM IST')
      }
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    setStatus('loading')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyles = `w-full px-4 py-3 rounded-xl text-slate-100 outline-none
    bg-white/[0.04] border border-white/10
    placeholder:text-slate-500 transition-all duration-200
    focus:border-cyan-400 focus:bg-white/[0.07]
    focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)] font-mono text-base sm:text-sm`

  return (
    <section id="contact" ref={ref} className="py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

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
            <span>Initiate Communication</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 25, filter: 'blur(5px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 25, filter: 'blur(5px)' }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5"
          >
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 25, filter: 'blur(5px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 25, filter: 'blur(5px)' }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Available for software engineering roles, high-throughput backend contracts, computer vision systems, and technical leadership opportunities.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
          
          {/* LEFT: INTERACTIVE CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: 'blur(6px)' }}
            animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: -40, filter: 'blur(6px)' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="glass-card p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-white/5">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <h3 className="font-display text-lg font-bold text-white">
                Direct Dispatch Channel
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Alex Mercer"
                    className={inputStyles}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="alex@company.com"
                    className={inputStyles}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Topic / Opportunity Type
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Internship / Full-Stack Project / D-Coders Collaboration"
                  className={inputStyles}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Project Scope or Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about what you're building, technical requirements, or role details..."
                  className={`${inputStyles} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-black bg-cyan-400 hover:bg-cyan-300 disabled:opacity-60 transition-all duration-200 shadow-[0_0_25px_rgba(34,211,238,0.35)] flex items-center justify-center gap-2 cursor-pointer"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span>Transmitting Dispatch...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Direct Message</span>
                  </>
                )}
              </motion.button>

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Message delivered successfully. I'll get back to you within 24 hours!</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-mono">
                  Could not submit directly. Please email me at <a href={`mailto:${profile.email}`} className="text-cyan-400 underline">{profile.email}</a>.
                </div>
              )}
            </form>
          </motion.div>


          {/* RIGHT: CONNECTIVITY MATRIX & QUICK COPY */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: 'blur(6px)' }}
            animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: 40, filter: 'blur(6px)' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="space-y-6"
          >
            {/* Quick 1-Click Copy Pill Card */}
            <div className="glass-card p-5 sm:p-7 rounded-2xl sm:rounded-[2rem] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  1-Click Email Copier
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active Inbox
                </span>
              </div>

              <div className="flex items-center justify-between gap-2 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-black/40 border border-white/10 mb-3 min-w-0">
                <span className="font-mono text-xs sm:text-sm text-white truncate min-w-0">
                  {profile.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-mono font-semibold transition-all flex items-center gap-1.5 flex-shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.3)] active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-black" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                Prefers asynchronous email for initial discussions and recruiter inquiries.
              </p>
            </div>

            {/* Live Location & Local Time Card */}
            <div className="glass-card p-5 sm:p-6 rounded-2xl sm:rounded-[2rem] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Base Location</div>
                  <div className="text-sm font-bold text-white">{profile.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pl-0 sm:pl-4 border-t sm:border-t-0 sm:border-l border-white/5 pt-3 sm:pt-0">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Current Local Time</div>
                  <div className="text-sm font-bold font-mono text-cyan-300 h-5 overflow-hidden flex items-center">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={localTime}
                        initial={{ opacity: 0, y: 8, filter: 'blur(2px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -8, filter: 'blur(2px)' }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {localTime || 'IST (UTC+5:30)'}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Connect Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* GitHub */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-colors">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">GitHub</div>
                    <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                      @ArnavPundir22
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-2xl border border-white/10 hover:border-blue-400/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">LinkedIn</div>
                    <div className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors">
                      arnav-pundir128ap
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>

              {/* Phone */}
              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                className="glass-card p-4 rounded-2xl border border-white/10 hover:border-emerald-400/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Phone & WhatsApp</div>
                    <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {profile.phone}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </a>

              {/* D-Coders Squad */}
              <a
                href={profile.dcoders}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-2xl border border-white/10 hover:border-purple-400/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Leadership</div>
                    <div className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                      dcoderssquad.com
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
              </a>
            </div>

            {/* Scope pill */}
            <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] text-xs font-mono text-slate-400">
              <span className="text-cyan-400 font-semibold">Immediate Availability:</span> Actively accepting high-impact AI/ML engineering, Full-Stack development contracts, and competitive hackathon projects.
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}
