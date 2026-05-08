import Navbar  from './components/Navbar'
import Hero    from './components/Hero'
import About   from './components/About'
import Skills  from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  return (
    <div style={{ background: '#060a14' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
