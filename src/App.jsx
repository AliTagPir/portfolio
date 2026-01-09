import { useState } from 'react'
import PortfolioNavbar from './components/Navbar'
import Banner from './components/Banner'
import Experience from './components/Experience'
import Projects from './components/Projects'

import Contact from './components/Contact'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div>
      <PortfolioNavbar />
      <Banner />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
