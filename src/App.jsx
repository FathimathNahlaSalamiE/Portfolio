import './App.css'
import { useState,useEffect } from 'react'
import Naav from './Components/Naav.jsx'
import Social from './Components/Social.jsx'
import Backtotop from './Components/Backtotop.jsx'
import Themetoggle from './Components/Themetoggle.jsx'
import Front from './Components/Front.jsx'
import About from './Components/About.jsx'
import Base from './Components/Base.jsx'
import Creations from './Components/Creations.jsx'
import Degree from './Components/Degree.jsx'
import Experience from './Components/Experience.jsx'
import Findme from './Components/Findme.jsx'

function App() {

  const [showBacktotop, setShowBacktotop] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setShowBacktotop(true)
      } else {
        setShowBacktotop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])

   // Cursor effect
  useEffect(() => {
  const handleMouseMove = (e) => {
    document.documentElement.style.setProperty(
      '--mouse-x',
      `${e.clientX}px`
    )

    document.documentElement.style.setProperty(
      '--mouse-y',
      `${e.clientY}px`
    )
  }

  window.addEventListener('mousemove', handleMouseMove)

  return () => {
    window.removeEventListener('mousemove', handleMouseMove)
  }
}, [])


  return (
    <>
    <Themetoggle />
      <Naav />
      <Social />
      <Backtotop visible={showBacktotop} />
      <Front />
      <About />
      <Base />
      <Creations />
      <Experience />
      <Degree />
      <Findme/>
    </>
  )
}

export default App
