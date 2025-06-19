import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Naav from './Components/Naav.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Naav />
    <Home />
  </StrictMode>,
)
