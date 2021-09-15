import React from "react";
import logo from "../images/logo.svg";
// import Fade from "react-reveal/Fade";

const Header = () => {
  return (
    <div className="header">
      <div className="image">
      <img src={logo} alt="logo" />
      </div>
      

      {/* <Fade right cascade> */}
        <div className="navigation">
          <i className="fas fa-bars"></i>
          <div className="navigation-links">
            <a href="/">HOME</a>
            <a href="/">ABOUT</a>
            <a href="/">CONTACT</a>
            <a href="/">PROJECTS</a>
            <a href="/">RESUME</a>
          </div>
        </div>
      {/* </Fade> */}
    </div>
  );
};

export default Header;
