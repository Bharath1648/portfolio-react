import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './Components/Projects.jsx'
import Contact from './components/Contact.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}

export default App
