import React from 'react';
import '../App.css';
import '../styles/navbar.css'
/*Essentially the same as footer.js */

function NavBar() {

    function scrollTo(id) {
        window.scrollTo({
            /*Get the element with the provided className using querySelector. Add in the scroll offset*/
            top: document.querySelector(id).getBoundingClientRect().top + window.pageYOffset -75,
            behavior: "smooth"
        })

    }

    return (
        <div id="nav" className="outterWrapper">

            <div className="navWrapper">

                <div className="socialLinks">

                    <a href="https://facebook.com" target="_blank">
                        <img className="socialIcon" src="/fbicon.svg" alt="Facebook Icon" />
                    </a>

                    <a href="https://instagram.com" target="_blank">
                        <img className="socialIcon" src="/igicon.svg" alt="Instagram Icon" />
                    </a>

                    <a href="https://linkedin.com" target="_blank">
                        <img className="socialIcon" src="/linkedinicon.svg" alt="Linkedin Icon" />
                    </a>

                    <a href="https://github.com/manofshad97" target="_blank">
                        <img className="socialIcon" src="/githubicon.svg" alt="Github Icon" />
                    </a>

                </div>

                <div className="navLinks">
                    <p className="pageName" onClick={() => scrollTo("#home")} href="/">Home</p>
                    <p className="pageName" onClick={() => scrollTo("#about")} href="/about">About</p>
                    <p className="pageName" onClick={() => scrollTo("#projects")} href="/projects">Projects</p>
                    <p className="pageName" onClick={() => scrollTo("#workhistory")} href="/workhistory">WorkHistory</p>
                    <p className="pageName" onClick={() => scrollTo("#hobbies")}href="/hobbies">Hobbies</p>
                    <p className="pageName" onClick={() => scrollTo("#contact")} href="/contact">Contact</p>
                </div>
            </div>
        </div>

    );
}

export default NavBar;
