import { useState, useEffect } from 'react'
import { Box, Container } from '@mantine/core'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import GitHubStats from './components/GitHubStats'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import Devs100Card from './components/Devs100Card'
import './App.css'

/**
 * Main App Component
 * Orchestrates all portfolio sections and manages global state
 */
function App() {
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll events for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box className="app">
      <CustomCursor />
      <ScrollProgress />
      <Navbar scrolled={scrolled} />
      
      <main>
        <Hero />
        <Devs100Card />
        <About />
        <Skills />
        <Projects />
        <GitHubStats />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </Box>
  )
}

export default App