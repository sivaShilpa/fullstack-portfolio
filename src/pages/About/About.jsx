import { useState, useEffect } from "react";
import "./About.css";
import "../../components/Box/Box.css";
import React from "react";
import Images from "../../constants/Images";

const About = () => {
  const [about, setAbout] = useState(null);

  const getAboutData = async () => {
    // make api call and get response
    const response = await fetch("./about.json");
    // turn response into javascript object
    const data = await response.json();
    // set the about state to the data
    setAbout(data);
  };

  useEffect(() => {
    getAboutData();
  }, []);

  const loaded = () => (
    <div className="aboutPage">
      <div className="blueBox cardAbout">
        <div className="profilePic">
          <img className="profile" src={Images.ProfilePic} alt="profile" />
        </div>
        <div class="display-about">
          <div>
            <h1 class="name">{about.name}</h1>
          </div>
          <div class="icons">
            <a href="mailto: shilpasivarajan@gmail.com" target="_blank" rel="noreferrer">
              <img
                class="aboutIcon"
                src={Images.Email}
                alt="Email"
                title="Email"
              ></img>
            </a>
            <a href="https://github.com/sivaShilpa" target="_blank" rel="noreferrer">
              <img
                class="aboutIcon"
                src={Images.GitHub}
                alt="Github"
                title="GitHub"
              ></img>
            </a>
            <a href="https://www.linkedin.com/in/shilpa-sivarajan/" target="_blank" rel="noreferrer">
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
          <div class="bio">
            <p>{about.bioPara1}</p>
            <p>{about.bioPara2}</p>
          </div>
        </div>
        {/* <div className="freepik">
        {" "}
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          {" "}
          Freepik{" "}
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com'
        </a>
      </div> */}
      </div>
    </div>
  );

  return about ? loaded() : <h1>Loading...</h1>;
};

export default About;
