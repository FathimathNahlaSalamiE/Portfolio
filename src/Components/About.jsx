import React from 'react'
import '../css/about.css'

import myimage from '../Images/nahlaimage.jpg'

const About = () => {

  return (
    <section id="about" className="about-container">

      {/* Heading */}
      <h1 className="about-heading">
        ABOUT ME
      </h1>


      {/* About Content */}
      <div className="about-content">

        {/* LEFT — ABOUT TEXT */}
        <div className="about-text">

          <h2>Hello,</h2>

          <p>
            I am an enthusiastic and detail-oriented Full Stack 
          Web Developer with a strong foundation in designing, developing, and
          maintaining scalable web applications. Proficient in Python frameworks like Django for back-end
          development and experienced in
          front-end technologies such as
          HTML, CSS, JavaScript, and React.
          Skilled in database management
          with MySQL. Interested in contributing to dynamic teams and solving
          real-world problems with innovative and efficient solutions.
          </p>

        </div>


        {/* RIGHT — PHOTO */}
        <div className="about-photo">

          <img
            src={myimage}
            alt="Fathimath Nahla Salami E"
          />

        </div>

      </div>

    </section>
  )
}

export default About