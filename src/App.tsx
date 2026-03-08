import './App.css'
import './styles/animations.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default App
