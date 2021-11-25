/*import all components and css files*/ 
import React from 'react';
import NavBar from '../components/NavBar';
import About from '../components/about';
import Contact from '../components/contact';
import Projects from '../components/projects';
import WorkHistory from '../components/workhistory';
import Hobbies from '../components/hobbies';
import Footer from '../components/footer';
import '../App.css';
import '../styles/main.css';

function Main() {
  return (
    <div>
      {/* Navbar component */}
      <NavBar />
      {/* Intro div that holds the introductory text alongside the image of me */}
      <div id="home" className="intro mobile">
        {/* Intro text div. Holds two p tags for a line introducing myself as well as a brief description of me and my goals. */}
        <div className="introText">
          <p className="name">Hi, my name is Shadman Ahmed</p>
          <p className="description">I am an asipiring software developer. I am excited to be pursing a career in software dev leveraging various personal projects and my recent coding bootcamp experience.</p>
        </div>
        {/* Image tag holding the picture of me */}
        <img className="profileImg" src="/profilepic.jpg" alt="Profile Picture" />

      </div>
      {/* Components laid out in the order I want them while scrolling down */}
      <About />
      <Projects />
      <WorkHistory />
      <Hobbies />
      <Contact />

      <Footer />
    </div>





  );
}

export default Main;
