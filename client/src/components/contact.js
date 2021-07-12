import React from 'react';
import '../App.css';
import '../styles/contact.css';
/*Create a main contact container. Then, make an inner div containing the actual form. The 
title of the form will be in the legend. The fields class represents the textboxes. Each textbox has a label and input tag except for
the message texbox because it has a text area tag instead of input. The actions class represents the buttons. 
*/

function Contact() {
  return (
    <div id="contact">
      <div className="inner">
        <div>
          <form>
            <legend>Contact Me</legend>

            <div className="fields">


              <div className="emailname">
                <div className="nameDiv">
                  <label for="name">Name</label>
                  <input type="text" />
                </div>
                <div className="emailDiv">
                  <label for="email">Email</label>
                  <input type="text" />
                </div>
              </div>
              <div className="messageDiv">
                <label>Message</label>
                <textarea name="message" id="message" rows="6"></textarea>
              </div>
            </div>
            <ul className="actions">
              <li><button type="submit" className="submitButton">Send Message</button></li>
              <li><button type="reset">Clear</button></li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
