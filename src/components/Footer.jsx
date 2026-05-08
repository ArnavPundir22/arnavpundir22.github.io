export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[rgba(99,102,241,0.1)] py-10"
            style={{ background: '#060a14' }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display text-xl font-bold">
            <span className="text-accent">Ar</span>
            <span className="text-white">nav</span>
            <span className="text-accent2">.</span>
          </span>
          <span className="text-[#475569] text-sm">— Portfolio {year}</span>
        </div>

        <p className="text-[#475569] text-sm">
          Built with React · Tailwind CSS · Framer Motion
        </p>

        <div className="flex items-center gap-3">
          {[
            { href: 'https://github.com/ArnavPundir22', label: 'GitHub', icon: (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            )},
            { href: 'https://www.linkedin.com/in/arnav-pundir128ap', label: 'LinkedIn', icon: (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            )},
            { href: 'mailto:arnavp128@gmail.com', label: 'Email', icon: (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            )},
          ].map(({ href, label, icon }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
               rel="noopener noreferrer" aria-label={label}
               className="w-9 h-9 rounded-full flex items-center justify-center
                          border border-[rgba(99,102,241,0.2)] text-[#475569]
                          hover:text-accent hover:border-accent
                          transition-colors duration-200">
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
