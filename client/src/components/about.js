import React from 'react';
import '../App.css';
import '../styles/about.css';
/*Create an about wrapper div and place it in the main about container div. Then create a p tag containing the title and 
a p tag containing the about me description 
*/


function About() {
  
  return (
    <div id="about">
      {/* Represents the beavis gif. Gave it a classname of gif so it can be styled later */}
      <img className="gif" src="/computergif.gif" alt="Computer Gif" />
      {/* about wrapper div */}
      <div className="aboutWrapper">
         {/*About Me title  */}
        <p className="aboutTitle">
          About Me
        </p>
        {/* About Me description */}
        <p className="aboutDesc">
          I was born and raised in New York City. Growing up as a kid, I always had a love for technology. I loved working with computers and learning about how they operate. Thankfully my highschool offered numerous courses that were related to computer science or programming. I was able to grow a real interest in coding during my junior year of high school when I joined The Future Programmers of America club. This club started off with teaching me Python but also introduced me to various web development technlogies and languages. It was not until a year ago that I really gained a newfound love for developing web applications. I began to teach myself HTML, CSS, and Javascript. I even learned some parts of React on my own. Using this knowledge, I built two projects from scratch, one of them being with a colleague. The first project is a website that has trending music from various hip hop artists. I developed this with a friend from college. Afterwards, I built a mock modern restaurant website from scratch. Even though building both of these websites seemed tedious, I was able to expand my programming knowledge greatly just by researching topics that were related to my project.
          

        </p>
      </div>

    </div>
  );
}

export default About;
