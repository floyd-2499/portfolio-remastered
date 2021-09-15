import React, { useState } from "react";
import Fade from "react-reveal/Fade";
// import h1pic from "../images/h1pic.svg";

const HomePart1 = () => {
  const [displayInn, setDisplayInn] = useState("block");
  const [name, setName] = useState("");

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const speech = new SpeechSynthesisUtterance();


  

  function getInput() {
    console.log(name);
    speech.text = ` Hello ${name}, welcome to my portfolio.`;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 0;
    window.speechSynthesis.speak(speech);
    setDisplayInn("none");
  }

  return (
    <div className="h1-container">
      {/* for bg @ 100% width*/}

      <div className="contents">
        <div className="contents-left">
          <span>HI! MY NAME IS</span>
          <h1>
            FLOYD MANUEL
            <br />
            DSOUZA
          </h1>
          <hr />
          <h3>Front-end Web Developer, Designer and Programmer</h3>
          <div className="contents-left_icons">
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
      

        {/* <div className="contents-right">
          <img src={h1pic} alt="main" />
        </div> */}
      </div>

      <div className="inn" style={{ display: `${displayInn}` }}>
        <i
          className="fas fa-times"
          onClick={() => {
            setDisplayInn("none") && console.log("hello");
          }}
        ></i>
        <div className="form">
          <p>May I know your name?</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <button onClick={() => getInput()}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default HomePart1;
