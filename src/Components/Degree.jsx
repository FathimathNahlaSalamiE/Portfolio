import React from 'react'
import '../css/degree.css'

const education = [
  {
    course: 'Bachelor of Technology',
    field: 'Computer Science and Engineering',
    college: 'APJ Abdul Kalam Technological University, Kerala',
    year: '2020 – 2024',
    // grade: 'CGPA: 6.68'
  }
]

function Degree() {

  return (
    <section id="degree" className="degree-container">

      <h1 className="degree-heading">
        Degree
      </h1>


      <div className="education-list">

        {education.map((item, index) => (

          <div
            className="education-card"
            key={index}
          >

            {/* <span className="education-number">
              01
            </span> */}


            <div className="education-main">

              <h2>
                {item.course}
              </h2>

              <h3>
                {item.field}
              </h3>

              <p className="college">
                {item.college}
              </p>

              <div className="education-meta">

                <span>
                  {item.year}
                </span>

                <span>
                  {item.grade}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Degree