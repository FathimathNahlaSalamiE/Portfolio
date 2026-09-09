import './App.css'
import Naav from './Components/Naav.jsx'
import Home from './Components/Home.jsx'
import Front from './Components/Front.jsx'
import Social from './Components/Social.jsx'
import About from './Components/About.jsx'
import Base from './Components/Base.jsx'
import Creations from './Components/Creations.jsx'
import Degree from './Components/Degree.jsx'
import Experience from './Components/Experience.jsx'

function App() {

  return (
    <>
      <Naav />
      <Social />
      <Front />
      {/* <Home /> */}
      <About />
      <Base />
      <Creations />
      <Experience />
      <Degree />
    </>
  )
}

export default App
