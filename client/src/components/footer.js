import React from 'react';
import '../App.css';
import '../styles/footer.css';
/*Create a footer similar to the navbar using an outter wrapper and a footerwrapper. A social links div contains all the a tags for the socials. 
A copyright div was also created. It contains a span with copyright information. All nav links are p tags
with the same class and an onClick property that runs the scrollTo function when clicked  */

function Footer() {

    function scrollTo(id) {
        window.scrollTo({
            /*Get the element with the provided className using querySelector. Add in the scroll offset. Set the scroll behavior to smooth for a more smooth scrolling experience*/
            top: document.querySelector(id).getBoundingClientRect().top + window.pageYOffset -75,
            behavior: "smooth"
        })

    }

    return (
        // Outter wrapper div
        <div id="footer" className="outterWrapper">
            
            <div className="footerWrapper">
                {/* Div that holds the social links anchor tags. Each one contains a link to a social media website and contains an svg. Target is set to _blank in order to open in a new tab when clicked. */}
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

                {/* Copyright div that just holds a span with text */}
                <div className="copyright">
                    <span>Contact: shadman559@hotmail.com | &copy; COPYRIGHT Shadman Ahmed 2021 | All Rights Reserved.</span>
                </div>

                {/* Have a navbar div apart of the footer as well. Give all p tags the same classname for styling and give them an onClick to run the scrollTo function when clicked. */}
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

export default Footer;
