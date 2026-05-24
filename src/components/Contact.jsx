import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const FORM_ENDPOINT = 'https://formsubmit.co/arnavp128@gmail.com'

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    label: 'Email', value: 'arnavp128@gmail.com', href: 'mailto:arnavp128@gmail.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      </svg>
    ),
    label: 'Phone', value: '+91 70606 75133', href: 'tel:+917060675133',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
    label: 'GitHub', value: 'ArnavPundir22', href: 'https://github.com/ArnavPundir22',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn', value: 'arnav-pundir128ap', href: 'https://www.linkedin.com/in/arnav-pundir128ap',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    label: 'Location', value: 'Roorkee, India', href: null,
  },
]

export default function Contact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [status, setStatus] = useState(null)

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
      if (res.ok) { setStatus('success'); form.reset() }
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  const inputBase = `w-full px-4 py-3 rounded-xl text-[#f1f5f9] text-sm outline-none
    bg-[rgba(255,255,255,0.04)] border border-[rgba(99,102,241,0.15)]
    placeholder:text-[#475569] transition-all duration-200
    focus:border-accent focus:bg-[rgba(99,102,241,0.06)]
    focus:shadow-[0_0_0_3px_rgba(99,102,241,0.12)]`

  return (
    <section id="contact" ref={ref}
      className="py-28"
      style={{ background: '#060a14' }}>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Let's Talk
          </span>
          <h2 className="section-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-[#94a3b8] max-w-md mx-auto mt-4">
            Open to freelance projects, internships, and collaboration opportunities.
            Drop me a message and I'll get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-10">

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="glass-card p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-[#94a3b8] mb-2 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input type="text" name="name" required placeholder="John Doe" className={inputBase} />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#94a3b8] mb-2 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input type="email" name="email" required placeholder="john@example.com" className={inputBase} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#94a3b8] mb-2 uppercase tracking-wide">
                  Subject
                </label>
                <input type="text" name="subject" required placeholder="Project idea / Opportunity / Collaboration" className={inputBase} />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#94a3b8] mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea name="message" required rows={5}
                  placeholder="Tell me about your project, idea, or opportunity..."
                  className={`${inputBase} resize-none`} />
              </div>

              <motion.button type="submit" disabled={status === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 py-3.5 px-8 rounded-xl font-semibold text-white
                           bg-gradient-to-r from-accent to-accent2
                           hover:opacity-90 disabled:opacity-60
                           transition-all duration-200 shadow-[0_0_30px_rgba(99,102,241,0.35)]">
                {status === 'loading' ? (
                  <><svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg> Sending…</>
                ) : (
                  <><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg> Send Message</>
                )}
              </motion.button>

              {status === 'success' && (
                <p className="text-center text-emerald-400 text-sm font-medium">
                  ✓ Message sent! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-center text-red-400 text-sm">
                  Something went wrong. Please email me directly at arnavp128@gmail.com
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col gap-3">

            <div className="glass-card p-6 mb-2">
              <h3 className="font-semibold text-white mb-1">Available for</h3>
              <div className="flex flex-col gap-2 mt-3">
                {['Freelance Projects', 'Internships', 'Full-time Roles (post 2028)', 'Open Source Collaboration'].map(item => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-[#94a3b8]">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {contactInfo.map(({ icon, label, value, href }) => {
              const Component = href ? motion.a : motion.div
              const props   = href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {}
              return (
                <Component key={label} {...props}
                  whileHover={href ? { y: -4, scale: 1.02, borderColor: 'rgba(99,102,241,0.35)', backgroundColor: 'rgba(99,102,241,0.05)' } : undefined}
                  className={`glass-card p-4 flex items-center gap-4 transition-all duration-200
                              ${href ? 'cursor-pointer' : ''}`}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                                  bg-[rgba(99,102,241,0.12)] border border-[rgba(99,102,241,0.2)] text-accent">
                    {icon}
                  </div>
                  <div>
                    <p className="text-[#94a3b8] text-xs mb-0.5">{label}</p>
                    <p className="text-white text-sm font-medium">{value}</p>
                  </div>
                </Component>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
