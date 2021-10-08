import React, { useState } from "react";


const HomePart1 = () => {
  const [displayInn, setDisplayInn] = useState("flex");
  const [name, setName] = useState("");
  const username = localStorage.getItem("userName");
  localStorage.setItem("userName", "Dear");


  const speech = new SpeechSynthesisUtterance();

  function getInput() {
    localStorage.setItem("username", name);
    speech.text = ` Hello ${name}, welcome to my portfolio. I'm here to assist you. Please Click on the button at the bottom-right  for further interactions. Or click on Learn More to know more about assistant. Have a great day.`;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 0;
    window.speechSynthesis.speak(speech);
    setDisplayInn("none");
  }

  function popInn() {
    return (
      <div>
        {username === "Dear" ? (
          <div className="inn" style={{ display: `${displayInn}` }}>
            <div className="inn-content">
              <i
                className="fas fa-times"
                onClick={() => setDisplayInn("none")}
              ></i>

              <div className="texts">
                <h1>Hi Dear,</h1>
                <h2>May I know your name?</h2>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value.toUpperCase());
                  }}
                  placeholder="Name..."
                />
                <button onClick={() => getInput()}>SUBMIT</button>
              </div>
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
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


      </div>

      {popInn()}
    </div>
  );
};

export default HomePart1;
