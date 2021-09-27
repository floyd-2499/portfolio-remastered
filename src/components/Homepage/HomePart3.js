import React from "react";
import cmlogo from "../images/cmlogo.svg";
import tvlogo from "../images/tvlogo.svg";
import { Link } from "react-router-dom";

const HomePart3 = () => {
  return (
    <div className="h3-container">
      <h1>MY WORKS</h1>
      <div className="box">
        <div className="main">
          <img src={cmlogo} alt="country music logo" />
          <p>
            An e-commerce web app featuring musical instruments such as
            Keyboard, Guitar and Drums.
          </p>
        </div>
        <div className="btn">
          <a href="/projects#cm">
            <button>Info</button>
          </a>
          <a href="https://country-music-bd2ef.web.app/">
            <button>View Project</button>
          </a>
        </div>
      </div>
      <hr />
      <br />
      <div className="box">
        <div className="main">
          <img src={tvlogo} alt="travel vlog logo" />
          <p>
            A travel blog featuring quick details of place and pictures to
            encourage you to travel.
          </p>
        </div>
        <div className="btn">
          <a href="/projects#tv">
            <button>Info</button>
          </a>
          <a href="https://travel-vlog-7fb43.web.app/">
            <button>View Project</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePart3;
