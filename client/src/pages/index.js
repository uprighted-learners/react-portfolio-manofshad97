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
import '../styles/index.css';

function Index() {
  return (
    <div>
      <NavBar />

      <div id="home" className="intro">
        <div className="introText">
          <p className="name">Hi, my name is Shadman Ahmed</p>
          <p className="description">I am an asipiring software developer. I am excited to be pursing a career in software dev leveraging various personal projects and my recent coding bootcamp experience.</p>
        </div>
        <img className="profileImg" src="/profilepic.jpg" alt="Profile Picture" />

      </div>

      <About />
      <Projects />
      <WorkHistory />
      <Hobbies />
      <Contact />

      <Footer />
    </div>





  );
}

export default Index;
