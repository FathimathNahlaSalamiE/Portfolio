import React from 'react'
import { Icon } from '@iconify/react'
import '../css/findme.css'

function Findme() {

  return (
    <section id="find-me" className="contact-container">

      <h1 className="contact-heading">
        Find Me
      </h1>


      <div className="contact-content">

        {/* LEFT SIDE */}

        <div className="contact-intro">
{/* 
          <span className="contact-number">
            06
          </span> */}

          <h2>
            Let's build
            <br />
            something together.
          </h2>

          <p>
            Have a project, opportunity, or just want to
            connect? Feel free to reach out.
          </p>

        </div>


        {/* RIGHT SIDE */}

        <div className="contact-details">

          {/* EMAIL */}

          <a
            href="mailto:nahlasalami321@gmail.com"
            className="contact-item"
          >

            <Icon icon="mdi:email-outline" />

            <div>
              <span>Email</span>
              <p>nahlasalami321@gmail.com</p>
            </div>

          </a>


          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/in/fathimathnahlasalamie"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >

            <Icon icon="mdi:linkedin" />

            <div>
              <span>LinkedIn</span>
              <p>LinkedIn Profile</p>
            </div>

          </a>


          {/* GITHUB */}

          <a
            href="https://github.com/FathimathNahlaSalamiE"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >

            <Icon icon="mdi:github" />

            <div>
              <span>GitHub</span>
              <p>GitHub Profile</p>
            </div>

          </a>


          {/* LOCATION */}

          <div className="contact-item location">

            <Icon icon="mdi:map-marker-outline" />

            <div>
              <span>Location</span>
              <p>Sharjah, United Arab Emirates</p>
            </div>

          </div>

        </div>

      </div>


      {/* FOOTER */}

      <div className="contact-footer">

        <span>
          © {new Date().getFullYear()} Fathimath Nahla Salami E
        </span>

        <span>
          Available for opportunities
        </span>

      </div>

    </section>
  )
}

export default Findme