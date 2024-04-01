import "./Home.css";
import React from "react";
import "../../components/Box/Box.css";
import Images from "../../constants/Images";

const Home = () => {
  return (
    <div className="homePage gradientBox">
      <div className="profilePic">
        <img className="profile" src={Images.ProfilePic} alt="profile" />
      </div>
      <div className="welcomeText">
        <span className="welcomeMessage">
          Hello, I'm <span>&nbsp;</span>
        </span>
        <div className="name">Shilpa Sivarajan</div>
        <div class="icons">
          <a
            href="mailto: shilpasivarajan@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="aboutIcon"
              src={Images.Email}
              alt="Email"
              title="Email"
            ></img>
          </a>
          <a
            href="https://github.com/sivaShilpa"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="aboutIcon"
              src={Images.GitHub}
              alt="Github"
              title="GitHub"
            ></img>
          </a>
          <a
            href="https://www.linkedin.com/in/shilpa-sivarajan/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="aboutIcon"
              src={Images.LinkedIn}
              alt="Linkedin"
              title="LinkedIn"
            ></img>
          </a>
          <a href="./Resume.pdf" target="_blank" rel="noreferrer">
            <img
              class="aboutIcon"
              src={Images.Resume}
              alt="Resume"
              title="Resume"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
