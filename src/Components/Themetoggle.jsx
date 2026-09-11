import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import '../css/themetoggle.css'

function Themetoggle() {

  //set night theme
  const [isDay, setIsDay] = useState(() => {
    return localStorage.getItem('theme') === 'day'
  })

  //set day theme
  //   const [isDay, setIsDay] = useState(() => {
  //   const savedTheme = localStorage.getItem('theme')

  //   if (savedTheme) {
  //     return savedTheme === 'day'
  //   }

  //   return true // Day mode by default
  // })

  useEffect(() => {
    if (isDay) {
      document.documentElement.classList.add('day-mode')
      localStorage.setItem('theme', 'day')
    } else {
      document.documentElement.classList.remove('day-mode')
      localStorage.setItem('theme', 'night')
    }
  }, [isDay])

  const toggleTheme = () => {
    setIsDay(prev => !prev)
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDay ? 'Switch to night mode' : 'Switch to day mode'}
    >
      <Icon
        icon={isDay ? 'solar:moon-bold' : 'solar:sun-bold'}
      />
    </button>
  )
}

export default Themetoggle