import React, { useState } from "react";
import cmskills from "../images/cm-skills.png";
import TVskills from "../images/TVskills.png";

const HomePart2 = () => {
  const [ui, setUi] = useState(true);
  const [fed, setFed] = useState(false);
  const [activeUiBar, setActiveUiBar] = useState("active");
  const [activeFedBar, setActiveFedBar] = useState("");
 


  

  function activeUi() {
    setUi(true);
    setFed(false);
    setActiveUiBar("active");
    setActiveFedBar("");
  }
  function activeFed() {
    setUi(false);
    setFed(true);
    setActiveUiBar("");
    setActiveFedBar("active");
  }

  return (
    <div className="h2-container">
      <div className="skills-section">
        <h1>MY SKILLS</h1>
        <div className="skills-section-bars">
          <span
            className={`${activeUiBar}`}
            id="spanui"
            onClick={() => activeUi()}
          >
            UI / UX DESIGN
          </span>
          <span
            className={`${activeFedBar}`}
            id="spanfed"
            onClick={() => activeFed()}
          >
            FRONT-END DEVELOPMENT
          </span>
        </div>

        {ui ? (
          <div className="skills-section-content">
            <div className="text">
              <h3>
                Designing the creative and modern web pages for better user
                response.
              </h3>
              <p>
                {" "}
                I develop designs with the users in mind, creating designs for a
                better overall experience with more focus on functionality than
                just the designs.
              </p>
              <span>
                Designing Tool :- <strong>Figma</strong>
              </span><br/>
              <span>
                Designing Experience:- <strong>3months</strong>
              </span>

              <h5>-- please visit my projects --</h5>
              
              <div className="icons">
                <a href="https://www.facebook.com/floyd.manwel/">
                  <i className="fab fa-facebook" />
                </a>
                <a href="https://www.instagram.com/floydmanwel/">
                  <i className="fab fa-instagram" />
                </a>
                <a href="https://www.linkedin.com/in/floyd-manuel-dsouza-437a03196/">
                  <i className="fab fa-linkedin" />
                </a>
                <a href="https://twitter.com/FloydManuelDso1">
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://github.com/floyd-2499">
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
            <div className="image">

            <img src={TVskills} alt="ui/ux" /> 
                         
            </div>
          </div>
        ) : (
          <div className="skills-section-content">
            <div className="text">
              <h3>
                Developing custom designs using modern technologies.
              </h3>
              <p>
                I develop ideas to life through code with quality and
                craftsmanship using technologies that make it possible and use
                various technologies and make them work together to build things
                that matter.
              </p>
              <div className="skills-list">
                <div className="skills-list_left">
                    <span>SKILLS :</span>
                </div>
                <div className="skills-list_right">
                    <li>HTML</li>
                    <li>CSS (Flex, SASS)</li>
                    <li>JavaScript</li>
                    <li>React - Redux</li>
                    <li>Git</li>
                    <li>Firebase (deployment)</li>
                </div>
              </div>
              <span>
                Code Editor :- <strong>VScode</strong>
              </span>
              <br />
              <span>
                Coding Experience:- <strong>3months</strong>
              </span>
              <h5>-- please visit my projects --</h5>
              <div className="icons">
                <a href="https://www.facebook.com/floyd.manwel/">
                  <i className="fab fa-facebook" />
                </a>
                <a href="https://www.instagram.com/floydmanwel/">
                  <i className="fab fa-instagram" />
                </a>
                <a href="https://www.linkedin.com/in/floyd-manuel-dsouza-437a03196/">
                  <i className="fab fa-linkedin" />
                </a>
                <a href="https://twitter.com/FloydManuelDso1">
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://github.com/floyd-2499">
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
            <div className="image">
              <img src={cmskills} alt="Front-end" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePart2;
