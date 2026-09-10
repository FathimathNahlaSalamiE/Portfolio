import React from 'react'
import '../css/backtotop.css'

function Backtotop({ visible }) {

  const goToFront = () => {
    document.getElementById('front')?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <button
      className={`back-to-top ${visible ? 'show' : ''}`}
      onClick={goToFront}
      aria-label="Back to front page"
    >
      ↑
    </button>
  )
}

export default Backtotop