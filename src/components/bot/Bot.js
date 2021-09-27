import React, { useState } from "react";

const Bot = (props) => {
  const { setDisplayLearnMore, contents } = props;
  const [dropdown, setDropdown] = useState("none");
  const [dropup, setDropup] = useState("block");
  const [items, setItems] = useState("flex");

  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);
  const [activeTab1, setActiveTab1] = useState("active");
  const [activeTab2, setActiveTab2] = useState("");
  const [activeTab3, setActiveTab3] = useState("");

  let username = localStorage.getItem("username");

  function clearData() {
    localStorage.clear();
    clickTab2();
    let name = " ";
    localStorage.setItem("username", name);
    window.location.reload(false);
  }

  function clickTab1() {
    setActiveTab1("active");
    setActiveTab2("");
    setActiveTab3("");
    setTab1(true);
    setTab2(false);
    setTab3(false);
  }
  function clickTab2() {
    setActiveTab1("");
    setActiveTab2("active");
    setActiveTab3("");
    setTab1(false);
    setTab2(true);
    setTab3(false);
  }
  function clickTab3() {
    setActiveTab1("");
    setActiveTab2("");
    setActiveTab3("active");
    setTab1(false);
    setTab2(false);
    setTab3(true);
  }

  function clickDropdown() {
    setDropup("block");
    setDropdown("none");
    setItems("flex");
  }
  function clickDropup() {
    setDropup("none");
    setDropdown("block");
    setItems("none");
  }
  function display() {
    if (tab1 === true) {
      return (
        <div className="right">
          <i
            className="fas fa-times"
            onClick={() => setDisplayLearnMore("none")}
          ></i>
          <h1>
            Hi {username === " " ? <span>Dear</span> : <span>{username}</span>}{" "}
            ,
          </h1>

          <p>
            {" "}
            There are certain set of questions which are programmed with
            response. In simple terms, Assistant is programmed to respond to a
            certain questions. You can pick a question from following and ask
            assistant.
          </p>
          <div className="questions">
            <h1>Questions :</h1>

            <div className="lists">
              <h2>Quick Response:</h2>
              <li>What is your name?</li>
              <li>Someething about you / about yourself.</li>
              <li>Phone number / mobile number</li>
              <li>Your mail / mail ID</li>
              <li>Resume</li>
              <h3>Redirect To Page:</h3>
              <li>About Page</li>
              <li>Contact Page</li>
              <li>Home Page</li>
            </div>
          </div>
          <div className="note">
            <p>-- NOTE --</p>
            <p>-- You can frame the questions from the above key words --</p>
            <p>-- Invalid questions? no response --</p>
          </div>
        </div>
      );
    }
    if (tab2 === true) {
      return (
        <div className="right">
          <div className="top">
            <div className="reset" onClick={() => clearData()}>
              Reset/Clear
            </div>
            <i
              className="fas fa-times"
              onClick={() => setDisplayLearnMore("none")}
            ></i>
          </div>
          <div className="message-container">
            <div className="box">
              {contents.map((chat) => {
                return chat.in === null ? (
                  <div key={chat.slno}> --No Previous Chat-- </div>
                ) : (
                  <div key={chat.slno} className="msg">
                    <div className="voiceIn">
                      <span>{chat.in}</span>
                    </div>
                    <div className="voiceOut">{chat.out}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    } else if (tab3 === true) {
      return (
        <div className="right">
          <i
            className="fas fa-times"
            onClick={() => setDisplayLearnMore("none")}
          ></i>
          <h1>
            Hi <span>{username}</span>, I’m your Assistant here
          </h1>

          <p>
            I’m just a programmed assistant to assist you in the webpage. You
            ask me questions and I run the task and give you the response. Few
            details about me,
          </p>

          <div className="questions">
            <div className="lists">
              <h2></h2>
              <li>Technology used is Javascript.</li>
              <li>No Backend is used.</li>
              <li>base source - YouTube(chatbot codes).</li>
              <li>Programmer - Floyd Manuel</li>
            </div>
          </div>
          <div className="note">
            <p>-- I’m not an A.I. --</p>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="bot-container">
      <div className="content">
        <div className="left">
          <h1>ASSISTANT</h1>
          <hr />
          <div className="drop-btns-top" onClick={() => clickDropdown()}>
            <i
              className="fas fa-sort-down"
              style={{ display: `${dropdown}` }}
            ></i>
          </div>
          <div className="navbtns" style={{ display: `${items}` }}>
            <span className={`${activeTab1}`} onClick={() => clickTab1()}>
              Questions To Ask
            </span>
            <span className={activeTab2} onClick={() => clickTab2()}>
              Recent Chat
            </span>
            <span className={activeTab3} onClick={() => clickTab3()}>
              About Assistant
            </span>
          </div>
          <hr />
          <div className="icons" style={{ display: `${items}` }}>
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
          <div className="drop-btns" onClick={() => clickDropup()}>
            <i className="fas fa-sort-up" style={{ display: `${dropup}` }}></i>
          </div>
        </div>

        {display()}
      </div>
    </div>
  );
};

export default Bot;
