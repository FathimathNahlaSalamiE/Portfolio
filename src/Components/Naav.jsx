import React from 'react'
import '../css/naav.css'

const navItems = [
  { letter: 'A', label: 'About', link: '#about' },
  { letter: 'B', label: 'Base', link: '#base' },
  { letter: 'C', label: 'Creations', link: '#creations' },
  { letter: 'D', label: 'Degree', link: '#degree' },
  { letter: 'E', label: 'Experience', link: '#experience' },
  { letter: 'F', label: 'Find me', link: '#find-me' },
]

function Naav() {
  return (
    <nav className="side-navbar">

      {navItems.map((item) => (
        <a
          key={item.letter}
          href={item.link}
          className="nav-item"
          style={{ '--characters': item.label.length }}
        >
          <span className="letter">
            {item.letter}
          </span>

          <span className="label">
            {item.label}
          </span>
        </a>
      ))}

    </nav>
  )
}

export default Naav