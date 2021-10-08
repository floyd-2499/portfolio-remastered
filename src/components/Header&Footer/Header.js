import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Fade from "react-reveal/Fade";

import LoadingBar from "react-top-loading-bar";

const Header = () => {
  const [barsIcon, setBarsIcon] = useState("block");
  const [navs, setNavs] = useState("none");

  function bars() {
    setBarsIcon("none");
    setNavs("block");

    setTimeout(() => {
      setNavs("none")
      setBarsIcon("block");
    }, 5000);
  }
  function close() {
    setNavs("none");
    setBarsIcon("block");
  }
  return (
    <div className="header">
      <LoadingBar height={2} color="#E54B4B" progress={100} />
      <Link to="/">
        <h1 className="image">
          <span>F</span>MD
        </h1>
      </Link>

      <div className="bar">
        <i
          className="fas fa-bars"
          style={{ display: `${barsIcon}` }}
          onClick={bars}
        ></i>
      </div>

      {/* <Fade right cascade> */}
      <div className="navigation">
        <div className="close">
          <i className="fas fa-times"></i>
        </div>
        <div className="navigation-links">
          <Link to="/">HOME</Link>

          <Link to="/about">ABOUT</Link>

          <span>
            <Link to="/contact">CONTACT</Link>
          </span>

          <span>
            <Link to="/projects">PROJECTS</Link>
          </span>

          <a href="https://drive.google.com/file/d/1VAjNlZIWJfsrGC91gUlPE7kZJ62Rc8aP/view?usp=sharing">
            RESUME
          </a>
        </div>
      </div>

      <Fade right cascade>
        <div className="mob-nav" style={{ display: `${navs}` }}>
          <div className="close">
            <i className="fas fa-times" onClick={close} />
          </div>
          <div className="links">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/projects">
              <li>Projects</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <a href="https://drive.google.com/file/d/1VAjNlZIWJfsrGC91gUlPE7kZJ62Rc8aP/view?usp=sharing">
              <li>Resume</li>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Header;
