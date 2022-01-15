import '../styles/profile.css'

import React, { useEffect } from 'react'

export default function Profile({scrollToMobile}) {
    


    return (
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
            aspiring software developer. <br/>I am excited to be pursing a
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
    )
}
