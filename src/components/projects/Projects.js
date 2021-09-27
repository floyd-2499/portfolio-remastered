import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Header&Footer/Footer";
import Header from "../Header&Footer/Header";
import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";
import slide3 from "../images/slide3.png";
import slide4 from "../images/slide4.png";
import cmlogo from "../images/cmlogo.svg";
import tvlogo from "../images/tvlogo.svg";
import logo from "../images/logo.svg";
import project1 from "../images/project1.svg";
import project2 from "../images/project2.svg";

const Projects = () => {
  return (
    <div>
      <Header />
      <div className="pro-container">
        <div className="slider">
          <Carousel variant="dark">
            <Carousel.Item interval={900}>
              <img className="d-block w-100" src={slide2} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img className="d-block w-100" src={slide1} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img className="d-block w-100" src={slide3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img className="d-block w-100" src={slide4} alt="Second slide" />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="box">
          <img src={cmlogo} alt="country music" id="cm" />
          <p>
            An e-commerce web app featuring musical instruments such as
            Keyboard, Guitar and Drums.
          </p>
          <a href="https://country-music-bd2ef.web.app/">
            <div className="btn">View Live Project</div>
          </a>
          <span>-- July-2021 to August-2021 -- </span>

          <h3>Know more about the project...</h3>

          <div className="texts">
            <div className="rt">Technologies used: </div>
            <div className="lt">
              <li>HTML , CSS and JavaScript</li>
              <li>React - Redux (Saga)</li>
              <li>Firebase (Deployment)</li>
              <li>Figma (UI/UX Design)</li>
            </div>
          </div>
        </div>
        <img src={project1} alt="project country music" />


        <div className="box">
          <img src={tvlogo} alt="country music" id="tv"/>
          <p >
            A travel blog featuring quick details of place and pictures to
            encourage you to travel.
          </p>
          <a href="https://travel-vlog-7fb43.web.app/">
            <div className="btn">View Live Project</div>
          </a>
          <span>-- August-2021 to September-2021 -- </span>

          <h3>Know more about the project...</h3>

          <div className="texts">
            <div className="rt">Technologies used: </div>
            <div className="lt">
              <li>HTML , CSS and JavaScript</li>
              <li>React</li>
              <li>Firebase (Deployment)</li>
              <li>Figma (UI/UX Design)</li>
            </div>
          </div>
        </div>


        <img src={project2} alt="project Travel Vlog" />



        <div className="box">
          <img src={logo} alt="country music" />
          <p>A portfolio website with brief details of me and my projects.</p>
          <span>-- September-2021 -- </span>
          <h3>Know more about the project...</h3>

          <div className="texts">
            <div className="rt">Technologies used: </div>
            <div className="lt">
              <li>HTML , CSS(SASS) and JavaScript</li>
              <li>React</li>
              <li>Firebase (Deployment)</li>
              <li>Figma (UI/UX Design)</li>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
