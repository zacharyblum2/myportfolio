import React from 'react';
import './about.css';

const About = () => {
  return (
    <a id="about">
        <div id="info">
          <div className="heading">
            <p class="h4">About Me</p>
          </div>
          <div className="content">
            <p>Hello, my name is Zachary Blum and I am a current UCF Honors Computer Science Major.
              I'm interested in full-stack development, with experience in frontend development. 
              I also have an interest in project management, acting as one in multiple group projects
              and using the Agile framework.
            </p>
            <p>Here are some technologies I've been working with recently:</p>
            <div class="container">
              <div class="row">
                <div class="col-sm">
                  <p>JavaScript</p>
                </div>
                <div class="col-sm">
                  <p>React</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm">
                  <p>C++</p>
                </div>
                <div class="col-sm">
                  <p>Java</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="image">
          <img src='./images/aboutme.jpg' alt="Profile Picture" style={{color: "white"}}/>
        </div>
    </a>
  )
}

export default About