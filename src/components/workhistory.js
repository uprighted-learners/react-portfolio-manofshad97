import React from 'react';
import '../App.css';
import '../styles/workhistory.css';

function WorkHistory() {
  return (
    <div id="workhistory">
      <p className="resumeTitle">My Resume</p>

      <p className="resumeHeading">
        Goals
      </p>

      <p className="resumeDesc resumeIntro">
        I am excited to be pursing a career in software development leveraging 8+ years of tutoring, 2 years of Computer Science coursework at NYU, and my recent coding bootcamp experience. In addition to my strong technical skills I also have significant experience teaching and leading group projects.
      </p>

      <p className="resumeHeading">
        Education
      </p>

      <p className="resumeDesc">
        <ul>
          <li className="bullet">Rigorous College Preparatory Coursework	- Bronx High School of Science (BHSS)	Jun 2015</li>
          <li className="bullet">Computer Science Coursework toward B.S.	New York University (NYU)	Sep 2015 – May 2017</li>
          <li className="bullet">Full Stack Web Developer (480+ hours)	Burlington Code Academy	(expected) Aug 2021</li>
        </ul>
      </p>

      <p className="resumeHeading">
        Work Experience
      </p>

      <p className="resumeDesc">
        <li className="bullet">Engineering Intern at Raasforce - Performed database management using mySQL and Amazon Redshift | May 2019 - Jan 2020</li>
        <li className="bullet">Private Tutor- College Math, Finance, and Writing Tutor | 2012 – Present</li>
        <li className="bullet">Varsity Tutors	- Math/English/Computer Science Tutor	| 2016 – 2018</li>
        <li className="bullet">Bobby’s Tutorial	- SHSAT and Algebra 2 Instructor | Summer 2017</li>
        <li className="bullet">Math Matters Tutoring Center	- SHSAT and SAT Instructor |	2015 – 2017</li>

      </p>

      <p className="resumeHeading">
        Technical Skills
      </p>

      <p className="resumeDesc">
        <li className="bullet">Languages:	JavaScript | HTML | CSS | Python</li>
        <li className="bullet">Frameworks:	Node.js | React | MongoDB | WebAPI</li>
        <li className="bullet">Database Management:	MySQL | Amazon Redshift (familiar)</li>
        <li className="bullet">Source Control:	Git | GitHub</li>
        <li className="bullet">Development:	Visual Studio | WebStorm</li>
      </p>



      <p className="resumeHeading">Download my resume by clicking on the image below:</p>
      
      <a href="/SAResume.docx" download>
        <img className="resumeDownload" src="/resume.png" alt="My Personal Resume Screenshot" />
      </a>

      

    </div>
  );
}

export default WorkHistory;
