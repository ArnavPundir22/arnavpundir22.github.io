import { useState, useEffect, lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LoadingScreen from './components/LoadingScreen'
import ScrollPath from './components/ScrollPath'

// Code-split below-the-fold sections for instant first paint and 0ms main thread blocking
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Education = lazy(() => import('./components/Education'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
  const [loadBelowFold, setLoadBelowFold] = useState(false)

  useEffect(() => {
    const triggerLoad = () => setLoadBelowFold(true)

    // Trigger on any user interaction
    window.addEventListener('load-below-fold', triggerLoad)
    window.addEventListener('scroll', triggerLoad, { once: true, passive: true })
    window.addEventListener('pointerdown', triggerLoad, { once: true, passive: true })
    window.addEventListener('keydown', triggerLoad, { once: true, passive: true })
    window.addEventListener('wheel', triggerLoad, { once: true, passive: true })
    window.addEventListener('touchstart', triggerLoad, { once: true, passive: true })

    // Also trigger if user clicks any internal anchor link
    const handleAnchorClick = (e) => {
      if (e.target.closest('a[href^="#"]')) {
        triggerLoad()
      }
    }
    document.addEventListener('click', handleAnchorClick)

    // Watch a sentinel element right below the Hero section
    let observer
    const sentinel = document.getElementById('below-fold-sentinel')
    if (sentinel && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting) {
          triggerLoad()
        }
      }, { rootMargin: '300px' })
      observer.observe(sentinel)
    }

    return () => {
      if (observer) observer.disconnect()
      window.removeEventListener('scroll', triggerLoad)
      window.removeEventListener('pointerdown', triggerLoad)
      window.removeEventListener('keydown', triggerLoad)
      window.removeEventListener('wheel', triggerLoad)
      window.removeEventListener('touchstart', triggerLoad)
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return (
    <div className="relative min-h-screen text-slate-100">
      <div className="aurora-bg"></div>
      {loadBelowFold && <ScrollPath />}

      <Navbar />
      <main className="relative z-10 flex flex-col">
        <Hero />
        <div id="below-fold-sentinel" className="h-1 w-full pointer-events-none" />
        <Suspense fallback={<div className="min-h-[50vh]" />}>
          {loadBelowFold && (
            <>
              <About />
              <Skills />
              <Projects />
              <Education />
              <Contact />
            </>
          )}
        </Suspense>
      </main>
      <Suspense fallback={null}>
        {loadBelowFold && <Footer />}
      </Suspense>
    </div>
  )
}
