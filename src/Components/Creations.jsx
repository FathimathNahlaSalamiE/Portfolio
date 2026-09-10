import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import '../css/creations.css'

const projects = [
  {
    number: '01',
    name: 'Thrift Store',
    description:
      'A Django-based e-commerce platform for buying and selling thrift products with role-based authentication, product management, cart functionality and online payments.',

    skills: [
      { name: 'Python', icon: 'logos:python' },
      { name: 'Django', icon: 'logos:django-icon' },
      { name: 'PostgreSQL', icon: 'logos:postgresql' },
      { name: 'Cloudinary', icon: 'simple-icons:cloudinary' },
      { name: 'Stripe', icon: 'logos:stripe' },
    ],

    github: 'https://github.com/FathimathNahlaSalamiE/ThriftStore',
    live: 'https://thriftstore-55yl.onrender.com/',
  },

  {
    number: '02',
    name: 'AI Chatbot',
    description:
      'A React-based AI chatbot interface with conversations, responsive design, Markdown responses and AI API integration.',

    skills: [
      { name: 'React', icon: 'logos:react' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'Vite', icon: 'logos:vitejs' },
      { name: 'Git', icon: 'logos:git-icon' },
      { name:'Render', icon: 'simple-icons:render'},
      {name: 'Groq API', icon: 'thesvg-color:groq'}
    ],

    github: 'https://github.com/FathimathNahlaSalamiE/chatbot',
    live: 'fathimathnahlasalamie.github.io/chatbot',
  },

  {
    number: '03',
    name: 'Fresh Mart',
    description:
      'A responsive online grocery application with authentication, category-based product browsing, cart management and online payment integration.',

    skills: [
      { name: 'Python', icon: 'logos:python' },
      { name: 'Django', icon: 'logos:django-icon' },
      { name: 'HTML', icon: 'logos:html-5' },
      { name: 'CSS', icon: 'logos:css-3' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'SQLite', icon: 'vscode-icons:file-type-sqlite' },
    ],

    github: 'https://github.com/FathimathNahlaSalamiE/freshmart',
    live: '#',
  },

  {
    number: '04',
    name: 'Student Management System',
    description:
      'A Django-based academic management platform with role-based access, student and staff dashboards, attendance, results, leave management and notifications.',

    skills: [
      { name: 'Python', icon: 'logos:python' },
      { name: 'Django', icon: 'logos:django-icon' },
      { name: 'SQLite', icon: 'vscode-icons:file-type-sqlite' },
      { name: 'HTML', icon: 'logos:html-5' },
      { name: 'CSS', icon: 'logos:css-3' },
    ],

    github: 'https://github.com/FathimathNahlaSalamiE/student_management_system',
    live: '#',
  },

  {
    number: '05',
    name: 'Coffee Website',
    description:
      'A responsive and visually appealing coffee shop website built using HTML, CSS, and JavaScript. This project was created to practice frontend web development concepts including responsive layouts, navigation, styling, images, and JavaScript-based interactions.',

    skills: [
      { name: 'HTML', icon: 'logos:html-5' },
      { name: 'CSS', icon: 'logos:css-3' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'Responsive Web Design', icon: 'mdi:responsive' },
    ],

    github: 'https://github.com/FathimathNahlaSalamiE/Coffee-website',
    live: '#',
  },

  {
    number: '06',
    name: 'Booksaw',
    description:
      'A web application for selling books online, built using Python and Django. This project demonstrates the development of a book-selling web application with Django, including application structure, database management, templates, static files, media handling, and backend functionality',

    skills: [
      { name: 'Python', icon: 'logos:python' },
      { name: 'Django', icon: 'logos:django-icon' },
      { name: 'HTML', icon: 'logos:html-5' },
      { name: 'CSS', icon: 'logos:css-3' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'SQLite', icon: 'vscode-icons:file-type-sqlite' },
    ],

    github: 'https://github.com/FathimathNahlaSalamiE/book_project',
    live: '#',
  },

]



function Creations() {

  const [startIndex, setStartIndex] = useState(0)
  const [direction, setDirection] = useState('next')

  const desktopProjects  = projects.slice(
    startIndex,
    startIndex + 3
  )


  const changeSlide = (index) => {

    if (index === startIndex) return

    setDirection(
      index > startIndex
        ? 'next'
        : 'previous'
    )

    setStartIndex(index)
  }

  // const handlePrevious = () => {
  //   setStartIndex((prev) => Math.max(prev - 1, 0));
  // };

  // const handleNext = () => {
  //   setStartIndex((prev) =>
  //     Math.min(prev + 1, projects.length - 3)
  //   );
  // };


  return (

    <section
      id="creations"
      className="creations-container"
    >

      <h1 className="creations-heading">
        My Projects
      </h1>


      {/* PROJECT VIEW */}

      {/* <div className="projects-carousel">

      <button
        className="project-arrow project-arrow-left"
        onClick={handlePrevious}
        disabled={startIndex === 0}
      >
        ←
      </button> */}

      <div className="desktop-projects">

        <div
          key={startIndex}
          className={`projects-track ${direction}`}
        >

          {projects
            .slice(startIndex, startIndex + 3)
            .map((project) => (


            <article
              className="project-card"
              key={project.number}
            >

              <span className="project-number">
                {project.number}
              </span>


              <h2>
                {project.name}
              </h2>


              <p className="project-description">
                {project.description}
              </p>


              {/* SKILLS */}

              <div className="project-skills">

                {project.skills.map((skill) => (

                  <div
                    className="project-skill"
                    key={skill.name}
                  >

                    <Icon icon={skill.icon} />

                    <span>
                      {skill.name}
                    </span>

                  </div>

                ))}

              </div>


              {/* LINKS */}

              <div className="project-links">

                {project.github !== '#' && (

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    <Icon icon="mdi:github" />

                    GitHub

                  </a>

                )}


                {project.live !== '#' && (

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    <Icon icon="mdi:open-in-new" />

                    Live Demo

                  </a>

                )}

              </div>

            </article>

          ))}

        </div>

      </div>

          <div className="mobile-projects">

  {projects.map((project) => (

    <article
      className="project-card"
      key={project.number}
    >

      <span className="project-number">
        {project.number}
      </span>

      <h2>
        {project.name}
      </h2>

      <p className="project-description">
        {project.description}
      </p>

      <div className="project-skills">

        {project.skills.map((skill) => (

          <div
            className="project-skill"
            key={skill.name}
          >

            <Icon icon={skill.icon} />

            <span>
              {skill.name}
            </span>

          </div>

        ))}

      </div>

      <div className="project-links">

        {project.github !== '#' && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mdi:github" />
            GitHub
          </a>
        )}

        {project.live !== '#' && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mdi:open-in-new" />
            Live Demo
          </a>
        )}

      </div>

    </article>

  ))}

</div>

{/* 
      <button
        className="project-arrow project-arrow-right"
        onClick={handleNext}
        disabled={startIndex >= projects.length - 3}
      >
        →
      </button>

    </div> */}


      {/* PAGINATION */}

      <div className="project-pagination">

        {Array.from({
          length: projects.length - 2
        }).map((_, index) => (

          <button
            key={index}
            className={
              startIndex === index
                ? 'pagination-dot active'
                : 'pagination-dot'
            }
            onClick={() => changeSlide(index)}
            aria-label={`Show projects ${index + 1} to ${index + 3}`}
          />

        ))}

      </div>

    </section>
  )
}


export default Creations