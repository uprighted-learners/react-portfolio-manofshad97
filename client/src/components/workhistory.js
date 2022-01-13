import React from 'react'
import '../App.css'
import '../styles/workhistory.css'

function WorkHistory() {
  function expand(id) {
    let element = document.querySelector(id)
    element.classList.toggle('fullHeight')
    let elementSign = document.querySelector(id + 'Sign')
    elementSign.innerText = elementSign.innerText == '-' ? '+' : '-'
  }

  return (
    // Main work history container div
    <div id="workhistory">
      {/* Title on work history section */}
      <p className="resumeTitle">My Resume</p>
      <div className="innerFlex">
        <div className="left">
          {/* Goals heading just below the title */}
          <p className="resumeHeading">
            <span id="goalsSign" onClick={() => expand('#goals')}>
              -
            </span>{' '}
            Goals
          </p>

          {/* The text under the Goals heading */}
          <p id="goals" className="resumeDesc resumeIntro fullHeight">
            I am excited to be pursing a career in software development
            leveraging 8+ years of tutoring, 4 years of Computer Science
            coursework at NYU, and my recent coding bootcamp experience.
          </p>
          {/* Education heading */}
          <p className="resumeHeading">
            <span id="educationSign" onClick={() => expand('#education')}>
              -
            </span>{' '}
            Education
          </p>
          {/* Education paragraph tag that holds multiple unordered list items for prior education */}
          <p id="education" className="resumeDesc fullHeight">
            <ul>
              <li className="bullet">
                Rigorous College Preparatory Coursework - Bronx High School of
                Science (BHSS) Jun 2015
              </li>
              <li className="bullet">
                Computer Science Coursework toward B.S. New York University
                (NYU) Sep 2015 – Dec 2020
              </li>
              <li className="bullet">
                Full Stack Web Developer (480+ hours) Burlington Code Academy
                (expected) Aug 2021
              </li>
            </ul>
          </p>

          {/* Work Experience heading */}
          <p className="resumeHeading">
            <span id="experienceSign" onClick={() => expand('#experience')}>
              -
            </span>{' '}
            Work Experience
          </p>

          {/* Work experience paragraph tag that holds multiple unordered list items for prior work experience */}
          <p id="experience" className="resumeDesc fullHeight">
            <ul>
              <li className="bullet">
                Engineering Intern at Raasforce - Performed database management
                using mySQL and Amazon Redshift | May 2019 - Jan 2020
              </li>
              <li className="bullet">
                Private Tutor- College Math, Finance, and Writing Tutor | 2012 –
                Present
              </li>
              <li className="bullet">
                Varsity Tutors - Math/English/Computer Science Tutor | 2016 –
                2018
              </li>
              <li className="bullet">
                Bobby’s Tutorial - SHSAT and Algebra 2 Instructor | Summer 2017
              </li>
              <li className="bullet">
                Math Matters Tutoring Center - SHSAT and SAT Instructor | 2015 –
                2017
              </li>
            </ul>
          </p>

          {/* Technical Skills heading*/}
          <p className="resumeHeading">
            <span id="skillsSign" onClick={() => expand('#skills')}>
              -
            </span>{' '}
            Technical Skills
          </p>

          {/* Technical skills paragraph tag that holds multiple unordered list items for various technical skills*/}
          <p id="skills" className="resumeDesc fullHeight">
            <ul>
              <li className="bullet">
                Languages: JavaScript | HTML | CSS | Python
              </li>
              <li className="bullet">Frameworks: Node.js | React | WebAPI</li>
              <li className="bullet">
                Database Management: MySQL | MongoDB | Amazon Redshift
                (familiar)
              </li>
              <li className="bullet">Source Control: Git | GitHub</li>
              <li className="bullet">Development: Visual Studio | WebStorm</li>
            </ul>
          </p>

          {/* Anchor tag that has an href of the resume filename. Download attribute is used so that when the image is clicked, the file is downloaded */}
          <div className="resumeCenter">
            {/* P tag with instructions on how to download resume */}
            <p className="resumeHeading">
              Download my resume by clicking on the button below:
            </p>
            <a className="downloadButton" href="/shadman's_resume.docx" download>
              Download Resume
            </a>
          </div>
        </div>
        <div className="right">
          <img className="officeGif" src="officework.gif" />
          <p className='rightText'>
            I have experience with multiple languages.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WorkHistory
