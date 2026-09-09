import React from 'react'
import { Icon } from '@iconify/react'
import '../css/experience.css'


const experiences = [

  {
    role: 'AI / ML Intern',

    company: 'Cyber Intelligence Corps',

    duration: 'April 2026 – Present',

    responsibilities: [
      'Built and trained custom yolo models with Ultralytics and OpenCV using Roboflow for dataset anootaion and live webcam/video inference pipelines.',
      'Developed chatbot systems progressively — rule-based, NLTK-based NLP, and LLM-powered using OpenAI API — with intent classification, entity recognition, and conversation memory.',
      'Applied NLP preprocessing (tokenization, stop-word removal, stemming, lemmatization) and word embedding models (GloVe, FastText) across supervised and unsupervised ML tasks.',
      
    ],

    skills: [
      {
        name: 'Python',
        icon: 'logos:python'
      },
      {
        name: 'Machine Learning',
        icon: 'mdi:brain'
      },
      {
        name: 'RAG',
        icon: 'mdi:database-search-outline'
      },
      {
        name: 'LangChain',
        icon: 'simple-icons:langchain'
      },
      {
        name: 'Prompt Engineering',
        icon: 'mdi:message-processing-outline'
      },
      {
        name: 'YOLO',
        icon: 'mdi:eye-outline'
      },
      {
        name: 'OpenCV',
        icon: 'simple-icons:opencv'
      }
    ]
  },


  {
    role: 'Python Full Stack Developer Intern',

    company: 'Luminar Technolab',

    duration: 'July 2024 - March 2025',

    responsibilities: [
      'Delivered production-ready full-stack applications by developing backend logic, database design, and frontend integration using Django, Python, and REST APIs.',
      'Worked across the full development lifecycle including debugging, Git/GitHub version control, and deployment; applied OOP principles and relational database design with MySQL and PostgreSQL.',
      'Collaborated in a team environment to build and test real-world project modules, strengthening skills in agile workflows and code review practices.',
    ],

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
        name: 'Django REST Framework',
        icon: 'carbon:api'
      },
      {
        name: 'React',
        icon: 'logos:react'
      },
      {
        name: 'JavaScript',
        icon: 'logos:javascript'
      },
      {
        name: 'MySQL',
        icon: 'logos:mysql'
      },
      {
        name: 'Git',
        icon: 'logos:git-icon'
      }
    ]
  }

]


function Experience() {

  return (

    <section
      id="experience"
      className="experience-container"
    >

      <h1 className="experience-heading">
        Experience
      </h1>


      <div className="experience-grid">

        {experiences.map((experience, index) => (

          <article
            className="experience-card"
            key={index}
          > 

            {/* Number */}

            <span className="experience-number">
              0{index + 1}
            </span>


            {/* Role */}

            <h2>
              {experience.role}
            </h2>


            {/* Company */}

            <h3>
              {experience.company}
            </h3>


            {/* Duration */}

            <p className="experience-duration">
              {experience.duration}
            </p>


            {/* Responsibilities */}

            <div className="responsibilities">

              {/* <h4>
                Responsibilities
              </h4> */}

              <ul>

                {experience.responsibilities.map(
                  (responsibility, i) => (

                    <li key={i}>
                      {responsibility}
                    </li>

                  )
                )}

              </ul>

            </div>


            {/* Skills */}

            <div className="experience-skills">

              <h4>
                Skills
              </h4>


              <div className="experience-skill-list">

                {experience.skills.map((skill) => (

                  <div
                    className="experience-skill"
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

          </article>

        ))}

      </div>

    </section>
  )
}

export default Experience