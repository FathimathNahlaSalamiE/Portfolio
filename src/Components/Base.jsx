import React from 'react'
import { Icon } from '@iconify/react'
import '../css/base.css'

const skillGroups = [
  {
    number: '01',
    title: 'Programming',
    skills: [
      {
        name: 'Python',
        icon: 'logos:python'
      },
      {
        name: 'JavaScript',
        icon: 'logos:javascript'
      },
      {
        name: 'SQL',
        icon: 'mdi:database-outline'
      },
      {
        name: 'OOP',
        icon: 'carbon:code'
      },
      // {
      //   name:'HTML5',
      //   icon:'simple-icons:html5'
      // },
      // {
      //   name:'CSS3',
      //   icon:'simple-icons:css3'
      // }
    ]
  },

  {
    number: '02',
    title: 'Frontend',
    skills: [
      {
        name: 'HTML5',
        icon: 'logos:html-5'
      },
      {
        name: 'CSS3',
        icon: 'logos:css-3'
      },
      {
        name: 'JavaScript',
        icon: 'logos:javascript'
      },
      {
        name: 'React',
        icon: 'logos:react'
      },
      {
        name: 'Bootstrap',
        icon: 'logos:bootstrap'
      },
      {
        name: 'Responsive Design',
        icon: 'mdi:responsive'
      }
    ]
  },

  {
    number: '03',
    title: 'Backend',
    skills: [
      {
        name: 'Django',
        icon: 'logos:django-icon'
      },
      {
        name: 'Django REST Framework',
        icon: 'carbon:api'
      },
      {
        name: 'REST API',
        icon: 'carbon:api-1'
      },
      {
        name: 'MySQL',
        icon: 'logos:mysql'
      },
      {
        name: 'PostgreSQL',
        icon: 'logos:postgresql'
      },
      {
        name: 'SQLite',
        icon: 'vscode-icons:file-type-sqlite'
      },
      {
        name: 'JWT',
        icon: 'mdi:shield-key-outline'
      }
    ]
  },

  {
    number: '04',
    title: 'AI / ML',
    skills: [
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
      },
      {
        name: 'Computer Vision',
        icon: 'mdi:camera-outline'
      }
    ]
  },

  {
    number: '05',
    title: 'Tools & Technologies',
    skills: [
      {
        name: 'Git',
        icon: 'logos:git-icon'
      },
      {
        name: 'GitHub',
        icon: 'mdi:github'
      },
      {
        name: 'VS Code',
        icon: 'logos:visual-studio-code'
      },
      {
        name: 'Postman',
        icon: 'logos:postman-icon'
      },
      {
        name: 'Roboflow',
        icon: 'simple-icons:roboflow'
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
        name: 'Razorpay',
        icon: 'simple-icons:razorpay'
      },
      {
        name: 'Render',
        icon: 'simple-icons:render'
      },
    ]
  }
]


function Base() {

  return (
    <section id="base" className="base-container">

      <h1 className="base-heading">
        My Skills
      </h1>


      <div className="skill-layout">

        {skillGroups.map((group) => (

          <div
            className="skill-group"
            key={group.number}
          >

            <span className="skill-number">
              {group.number}
            </span>


            <h2>
              {group.title}
            </h2>


            <div className="skills">

              {group.skills.map((skill) => (

                <div
                  className="skill"
                  key={skill.name}
                >

                  <Icon
                    icon={skill.icon}
                    className="skill-icon"
                  />

                  <span>
                    {skill.name}
                  </span>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Base