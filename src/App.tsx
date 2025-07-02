import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import PageShowcase from './components/PageShowcase'
import Footer from './components/Footer'
import DemoPage from './pages/DemoPage'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Routes>
        <Route path="/demo/:page" element={<DemoPage />} />
        <Route path="/" element={
          <>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Hero />
            <Features />
            <PageShowcase />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  )
}

export default App