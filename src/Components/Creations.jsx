import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import '../css/creations.css'

import thriftstoreImage from '../Images/Nahla.png'
import freshmartImage from '../Images/Nahla.png'
import chatbotImage from '../Images/Nahla.png'


const projects = [

  {
    name: 'ThriftStore',
    image: thriftstoreImage,

    description:
      'A full-stack thrift store web application where users can browse products, manage their accounts, and purchase products online.',

    live: '#',
    github: '#',

    skills: [
      {
        name: 'Python',
        icon: 'logos:python'
      },
      {
        name: 'Django',
        icon: 'logos:django-icon'
      },
      {
        name: 'PostgreSQL',
        icon: 'logos:postgresql'
      },
      {
        name: 'Cloudinary',
        icon: 'logos:cloudinary'
      },
      {
        name: 'Stripe',
        icon: 'logos:stripe'
      },
      {
        name: 'HTML',
        icon: 'logos:html-5'
      },
      {
        name: 'CSS',
        icon: 'logos:css-3'
      },
      {
        name: 'JavaScript',
        icon: 'logos:javascript'
      }
    ]
  },


  {
    name: 'Fresh Mart',
    image: freshmartImage,

    description:
      'An online grocery shopping web application that allows users to browse grocery products and place orders through an integrated payment system.',

    live: '#',
    github: '#',

    skills: [
      {
        name: 'Python',
        icon: 'logos:python'
      },
      {
        name: 'Django',
        icon: 'logos:django-icon'
      },
      {
        name: 'SQLite',
        icon: 'vscode-icons:file-type-sqlite'
      },
      {
        name: 'Razorpay',
        icon: 'simple-icons:razorpay'
      },
      {
        name: 'HTML',
        icon: 'logos:html-5'
      },
      {
        name: 'CSS',
        icon: 'logos:css-3'
      },
      {
        name: 'JavaScript',
        icon: 'logos:javascript'
      },
      {
        name: 'Bootstrap',
        icon: 'logos:bootstrap'
      }
    ]
  },


  {
    name: 'AI Chatbot',
    image: chatbotImage,

    description:
      'A responsive chatbot interface built with React that provides an interactive conversational experience with a clean and modern UI.',

    live: '#',
    github: '#',

    skills: [
      {
        name: 'React',
        icon: 'logos:react'
      },
      {
        name: 'JavaScript',
        icon: 'logos:javascript'
      },
      {
        name: 'Vite',
        icon: 'logos:vitejs'
      },
      {
        name: 'HTML',
        icon: 'logos:html-5'
      },
      {
        name: 'CSS',
        icon: 'logos:css-3'
      },
      {
        name: 'GitHub',
        icon: 'mdi:github'
      }
    ]
  },

  {
    name: 'AI Chatbot',
    image: chatbotImage,

    description:
      'A responsive chatbot interface built with React that provides an interactive conversational experience with a clean and modern UI.',

    live: '#',
    github: '#',

    skills: [
      {
        name: 'React',
        icon: 'logos:react'
      },
      {
        name: 'JavaScript',
        icon: 'logos:javascript'
      },
      {
        name: 'Vite',
        icon: 'logos:vitejs'
      },
      {
        name: 'HTML',
        icon: 'logos:html-5'
      },
      {
        name: 'CSS',
        icon: 'logos:css-3'
      },
      {
        name: 'GitHub',
        icon: 'mdi:github'
      }
    ]
  }
  

]


function Creations() {

  const [currentPage, setCurrentPage] = useState(0)

  const projectsPerPage = 3

  const totalPages = Math.ceil(
    projects.length / projectsPerPage
  )

  const startIndex = currentPage * projectsPerPage

  const visibleProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage
  )


  return (

    <section
      id="creations"
      className="creations-container"
    >

      {/* Heading */}

      <h1 className="creations-heading">
        Creations
      </h1>


      {/* Projects */}

      <div className="projects-container">

        {visibleProjects.map((project) => (

          <div
            className="project-card"
            key={project.name}
          >

            {/* Project Image */}

            <div className="project-image">

              <img
                src={project.image}
                alt={project.name}
              />

            </div>


            {/* Project Content */}

            <div className="project-content">

              <h2>
                {project.name}
              </h2>


              <p>
                {project.description}
              </p>


              {/* Links */}

              <div className="project-links">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="mdi:github" />
                  GitHub
                </a>

              </div>


              {/* Technologies */}

              <div className="project-skills">

                {project.skills.map((skill) => (

                  <div
                    className="project-skill"
                    key={skill.name}
                    title={skill.name}
                  >

                    <Icon
                      icon={skill.icon}
                    />

                    <span>
                      {skill.name}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        ))}

      </div>


      {/* Pagination */}

      <div className="project-pagination">

        {Array.from(
          { length: totalPages },
          (_, index) => (

            <button
              key={index}
              className={
                currentPage === index
                  ? 'page-dot active'
                  : 'page-dot'
              }
              onClick={() => setCurrentPage(index)}
              aria-label={`Go to project page ${index + 1}`}
            />

          )
        )}

      </div>


    </section>
  )
}


export default Creations