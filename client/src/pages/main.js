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
import Profile from '../components/Profile'

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
    <div className='main'>
      {/* Navbar component */}
      <NavBar />
      {/* Intro div that holds the introductory text alongside the image of me */}
       <Profile {...{scrollToMobile}} />
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
