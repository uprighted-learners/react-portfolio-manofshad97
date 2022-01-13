import React from 'react';
import '../App.css';
import '../styles/navbar.css'
/*Essentially the same as footer.js */

function NavBar() {

    function scrollTo(id) {
        window.scrollTo({
            /*Get the element with the provided className using querySelector. Add in the scroll offset*/
            top: document.querySelector(id).getBoundingClientRect().top + window.pageYOffset - 75,
            behavior: "smooth"
        })
        document.getElementById("myLinks").style.display = "none";

    }

    function scrollToMobile(id) {
        window.scrollTo({
            /*Get the element with the provided className using querySelector. Add in the scroll offset*/
            top: document.querySelector(id).getBoundingClientRect().top + window.pageYOffset - 50,
            behavior: "smooth"
        })
        document.getElementById("myLinks").style.display = "none";

    }

    function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

    return (
        <div>
            <div id="nav" className="outterWrapper">

                <div className="navWrapper">
                    {/* Div that holds the social links anchor tags. Each one contains a link to a social media website and contains an svg. Target is set to _blank in order to open in a new tab when clicked. */}
                    <div className="logo">

                        <a onClick={() => {window.location.reload()}}>
                            <img className="logoIcon" src="/newlogo.svg" alt="Logo Icon" />
                        </a>
                        <img className="logoGif" src="/logoGif.gif" alt="Logo Icon" />
                        <p className='logoTitle'>Shadman</p>

                        {/* <a href="https://instagram.com" target="_blank">
                            <img className="socialIcon" src="/igicon.svg" alt="Instagram Icon" />
                        </a>

                        <a href="https://linkedin.com" target="_blank">
                            <img className="socialIcon" src="/linkedinicon.svg" alt="Linkedin Icon" />
                        </a>

                        <a href="https://github.com/manofshad97" target="_blank">
                            <img className="socialIcon" src="/githubicon.svg" alt="Github Icon" />
                        </a> */}

                    </div>

                    {/* Create a navbar div with p tags for navbar tabs. Give all p tags the same className for styling and give them an onClick to run the scrollTo function when clicked. */}
                    <div className="navLinks">
                        <p className="pageName" onClick={() => scrollTo("#home")} href="/">Home</p>
                        <p className="pageName" onClick={() => scrollTo("#about")} href="/about">About</p>
                        <p className="pageName" onClick={() => scrollTo("#projects")} href="/projects">Projects</p>
                        <p className="pageName" onClick={() => scrollTo("#workhistory")} href="/workhistory">WorkHistory</p>
                        <p className="pageName" onClick={() => scrollTo("#hobbies")} href="/hobbies">Tech Stack</p>
                        <p className="pageName" onClick={() => scrollTo("#contact")} href="/contact">Contact</p>
                    </div>
                </div>


            </div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            
            <div className="whiteSpace"></div>
            <div className="topnav">
                <a class="active"><img className="logoIcon" src="/newlogo.svg" alt="Logo Icon" /></a>
                <div id="myLinks">
                    <p className="pageName" onClick={() => scrollToMobile("#home")} href="/">Home</p>
                    <p className="pageName" onClick={() => scrollToMobile("#about")} href="/about">About</p>
                    <p className="pageName" onClick={() => scrollToMobile("#projects")} href="/projects">Projects</p>
                    <p className="pageName" onClick={() => scrollToMobile("#workhistory")} href="/workhistory">WorkHistory</p>
                    <p className="pageName" onClick={() => scrollToMobile("#hobbies")} href="/hobbies">Tech Stack</p>
                    <p className="pageName" onClick={() => scrollToMobile("#contact")} href="/contact">Contact</p>
                </div>
                <a href="javascript:void(0);" class="icon" onClick={() => myFunction()}>
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </div>




    );
}

export default NavBar;
