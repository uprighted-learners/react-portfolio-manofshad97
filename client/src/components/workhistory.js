import React from 'react';
import '../App.css';
import '../styles/workhistory.css';

function WorkHistory() {
  return (
    // Main work history container div
    <div id="workhistory">
      {/* Title on work history section */}
      <p className="resumeTitle">My Resume</p>

      {/* Goals heading just below the title */}
      <p className="resumeHeading">
        Goals
      </p>

      {/* The text under the Goals heading */}
      <p className="resumeDesc resumeIntro">
        I am excited to be pursing a career in software development leveraging 8+ years of tutoring, 4 years of Computer Science coursework at NYU, and my recent coding bootcamp experience. In addition to my strong technical skills I also have significant experience teaching and leading group projects.
      </p>
      {/* Education heading */}
      <p className="resumeHeading">
        Education
      </p>
      {/* Education paragraph tag that holds multiple unordered list items for prior education */}
      <p className="resumeDesc">
        <ul>
          <li className="bullet">Rigorous College Preparatory Coursework	- Bronx High School of Science (BHSS)	Jun 2015</li>
          <li className="bullet">Computer Science Coursework toward B.S.	New York University (NYU)	Sep 2015 – Dec 2020</li>
          <li className="bullet">Full Stack Web Developer (480+ hours)	Burlington Code Academy	(expected) Aug 2021</li>
        </ul>
      </p>

      {/* Work Experience heading */}
      <p className="resumeHeading">
        Work Experience
      </p>

      {/* Work experience paragraph tag that holds multiple unordered list items for prior work experience */}
      <p className="resumeDesc">
        <li className="bullet">Engineering Intern at Raasforce - Performed database management using mySQL and Amazon Redshift | May 2019 - Jan 2020</li>
        <li className="bullet">Private Tutor- College Math, Finance, and Writing Tutor | 2012 – Present</li>
        <li className="bullet">Varsity Tutors	- Math/English/Computer Science Tutor	| 2016 – 2018</li>
        <li className="bullet">Bobby’s Tutorial	- SHSAT and Algebra 2 Instructor | Summer 2017</li>
        <li className="bullet">Math Matters Tutoring Center	- SHSAT and SAT Instructor |	2015 – 2017</li>

      </p>

      {/* Technical Skills heading*/}
      <p className="resumeHeading">
        Technical Skills
      </p>

      {/* Technical skills paragraph tag that holds multiple unordered list items for various technical skills*/}
      <p className="resumeDesc">
        <li className="bullet">Languages:	JavaScript | HTML | CSS | Python</li>
        <li className="bullet">Frameworks:	Node.js | React | WebAPI</li>
        <li className="bullet">Database Management:	MySQL | MongoDB | Amazon Redshift (familiar)</li>
        <li className="bullet">Source Control:	Git | GitHub</li>
        <li className="bullet">Development:	Visual Studio | WebStorm</li>
      </p>



      {/* Anchor tag that has an href of the resume filename. Download attribute is used so that when the image is clicked, the file is downloaded */}
      <div className="resumeCenter">
        {/* P tag with instructions on how to download resume */}
        <p className="resumeHeading">Download my resume by clicking on the image below:</p>
        <a href="/shadman's_resume.docx" download>
          <img className="resumeDownload" src="/resume.png" alt="My Personal Resume Screenshot" />
        </a>
      </div>




    </div>
  );
}

export default WorkHistory;
