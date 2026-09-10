import './App.css'
import { useState,useEffect } from 'react'
import Naav from './Components/Naav.jsx'
import Social from './Components/Social.jsx'
import Backtotop from './Components/Backtotop.jsx'
import Home from './Components/Home.jsx'
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


  return (
    <>
      <Naav />
      <Social />
      <Backtotop visible={showBacktotop} />
      <Front />
      {/* <Home /> */}
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
