/*import all components and css files*/

import React from 'react'
import NavBar from '../components/NavBar'
import About from '../components/about'
import Contact from '../components/contact'
import Projects from '../components/projects'
import WorkHistory from '../components/workhistory'
import Hobbies from '../components/hobbies'
import Footer from '../components/footer'
import '../App.css'
import '../styles/main.css'

function Main() {

  function scrollToMobile(id) {
    window.scrollTo({
        /*Get the element with the provided className using querySelector. Add in the scroll offset*/
        top: document.querySelector(id).getBoundingClientRect().top + window.pageYOffset - 50,
        behavior: "smooth"
    })
    document.getElementById("myLinks").style.display = "none";

}

  return (
    <div>
      {/* Navbar component */}
      <NavBar />
      {/* Intro div that holds the introductory text alongside the image of me */}
      <div id="home" className="intro mobile">
        {/* Intro text div. Holds two p tags for a line introducing myself as well as a brief description of me and my goals. */}
        <div className="introText">
          <p className="name">Hi, my name is Shadman.</p>
          <p className="headerDesc">
            I build <span>user-friendly</span> and <span>accessible</span> web
            technologies.{' '}
          </p>
          <p className="description topDesc">I am a </p>
          <div className="wrapper">
            <ul className="dynamicDesc">
              <li>
                <span>motivated</span>
              </li>
              <li>
                <span>solution-oriented</span>
              </li>
              <li>
                <span>mission-driven</span>
              </li>
              <li>
                <span>collaborative</span>
              </li>
              <li>
                <span>growth-minded</span>
              </li>
            </ul>
          </div>
          <p className="description bottomDesc">
            aspiring software developer. <br></br>I am excited to be pursing a
            career in software dev leveraging various personal projects and my
            recent coding bootcamp experience.
          </p>
        </div>
        {/* Image tag holding the picture of me */}
        <img
          className="profileImg"
          src="/profilepic.jpg"
          alt="Profile Picture"
        />

        <p className="arrow" onClick={() => scrollToMobile('#about')}><img src="arrowdown.png" alt="arrow-down"/></p>
      </div>
      {/* Components laid out in the order I want them while scrolling down */}
      <About />
      <Projects />
      <WorkHistory />
      <Hobbies />
      <Contact />

      <Footer />
    </div>
  )
}

export default Main
