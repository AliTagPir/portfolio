import { useState } from 'react'
import PortfolioNavbar from './components/Navbar'
import Banner from './components/Banner'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div>
      <PortfolioNavbar />
      <Banner />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
