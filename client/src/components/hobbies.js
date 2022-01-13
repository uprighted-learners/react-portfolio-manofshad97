import React from 'react'
import '../App.css'
import '../styles/hobbies.css'
/*Hobbies section is made up of a main hobbies container which contqains wrappers for each player description. Each description has an image preceding it */

function Hobbies() {
  return (
    // Main hobbies container
    <div id="hobbies">
      {/* Main title on hobbies section */}
      <h1 className="hobbiesTitle">Tech Stack</h1>
      {/* Hobbies intro just below the title */}
      <h2 className="hobbiesDesc">
        Below is a display of my current full stack capabilities.
      </h2>
      <div className="mainFlex">
        <div className="skillType">
          <p>Languages</p>
        </div>
        {/* Give each hobby its own wrapper div */}
        <div className="hobbiesWrapper">
          {/* Image for Robert Lewandowski, the icon player */}
          <div className="stackContainer">
            <img className="icon" src="/jsIcon.svg" alt="js" />
            <p className="skillName">Javascript</p>
          </div>
          {/*P tag representing the player description  */}
          <div className="stackContainer">
            <img className="icon" src="/pythonIcon.svg" alt="python" />
            <p className="skillName">Python</p>
          </div>

          <div className="stackContainer">
            <img className="icon" src="/htmlIcon.svg" alt="html" />
            <p className="skillName">HTML5</p>
          </div>

          <div className="stackContainer">
            <img className="icon css" src="/cssIcon.svg" alt="css" />
            <p className="skillName">CSS3</p>
          </div>

          <div className="stackContainer">
            <img className="icon sql" src="/sqlIcon.png" alt="sql" />
            <p className="skillName sqlTitle">SQL</p>
          </div>
        </div>

        <div className="skillType">
          <p>Front End Technologies</p>
        </div>
        <div className="hobbiesWrapper">
          {/* Image for RJ Barret, the basketball player */}
          <div className="stackContainer">
            <img className="icon" src="/reactIcon.svg" alt="react" />
            <p className="skillName">React</p>
          </div>
          {/*P tag representing the player description  */}
          <div className="stackContainer">
            <img className="icon" src="/reduxIcon.svg" alt="redux" />
            <p className="skillName">Redux</p>
          </div>

          <div className="stackContainer">
            <img className="icon tailwind" src="/tailwindIcon.png" alt="tailwind" />
            <p className="skillName">Tailwind CSS</p>
          </div>

          <div className="stackContainer">
            <img className="icon mui" src="/muiIcon.png" alt="mui" />
            <p className="skillName">Material UI</p>
          </div>

          <div className="stackContainer">
            <img className="icon sass" src="/sassIcon.svg" alt="sass" />
            <p className="skillName">Sass</p>
          </div>
        </div>

        <div className="skillType">
          <p>Server Side / Database Development</p>
        </div>
        <div className="hobbiesWrapper">
          {/* Image for Saquon Barkley, the American football player*/}
          <div className="stackContainer">
            <img className="icon node" src="/nodeIcon.png" alt="node" />
            <p className="skillName nodeTitle">Nodejs</p>
          </div>
          {/*P tag representing the player description  */}
          <div className="stackContainer">
            <img className="icon" src="/expressIcon.png" alt="express" />
            <p className="skillName">Express</p>
          </div>

          <div className="stackContainer">
            <img className="icon" src="/mongoIcon.png" alt="mongo" />
            <p className="skillName">MongoDB</p>
          </div>

          <div className="stackContainer">
            <img className="icon mySQL" src="/mysqlIcon.svg" alt="mySQL" />
            <p className="skillName">mySQL</p>
          </div> 
          
        </div>

        <div className="skillType">
          <p>Other</p>
        </div>
        <div className="hobbiesWrapper">
          <div className="stackContainer">
            <img className="icon" src="/githubicon.svg" alt="github" />
            <p className="skillName">Github</p>
          </div>
          {/*P tag representing the player description  */}
          <div className="stackContainer">
            <img className="icon" src="/gitIcon.svg" alt="git" />
            <p className="skillName">Git</p>
          </div>

          <div className="stackContainer">
            <img className="icon api" src="/apiint.png" alt="api" />
            <p className="skillName">API Integration</p>
          </div>

          <div className="stackContainer">
            <img className="icon" src="/heroku.svg" alt="heroku" />
            <p className="skillName">Heroku</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hobbies
