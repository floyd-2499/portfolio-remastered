import React from "react";
import Footer from "../Header&Footer/Footer";
import Header from "../Header&Footer/Header";
import Floyd from "../images/Floyd.png";

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <div className="abt-container">
        <div className="media">
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
        <div className="image">
          <div className="frame"></div>
          <img src={Floyd} alt="My pic" />
        </div>
        <div className="text">
          <h1>ABOUT ME</h1>

          <div className="image-last">
            <img src={Floyd} alt="My pic" />
          </div>

          <h2>Hi, I’m Floyd Manuel</h2>
          <p>
            I am a UX / UI designer and developer with hands-on experience in
            building web apps and websites from scratch from initial designs to
            development and all the way to hosting a complete production-ready
            software in a custom-configured server.
          </p>

          <a href="https://drive.google.com/file/d/1VAjNlZIWJfsrGC91gUlPE7kZJ62Rc8aP/view?usp=sharing">
            {/* <div class="main_btn"><a href="/Chat-bot codes/chatbot-codes.html">Download Resume</a></div> */}

            <button className="resume">
              <a href="https://drive.google.com/file/d/1VAjNlZIWJfsrGC91gUlPE7kZJ62Rc8aP/view?usp=sharing">
                Download Resume
              </a>
            </button>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
