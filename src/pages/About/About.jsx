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
    <div className="blueBox cardAbout">
      {/* <div className="cardContent"> */}
        <div className="profilePic">
          <img className="profile" src={Images.ProfilePic} alt="profile"/>
        </div>
        <div class="display-about">
          <div class="content-about">
            <div>
              <h1 class="name">{about.name}</h1>
            </div>
            <div class="icons">
              <a href="mailto: shilpasivarajan@gmail.com">
                <img
                  class="icon email"
                  src="https://i.imgur.com/jEAdcHu.png"
                  alt="Email icon from flaticon"
                ></img>
              </a>
              <a href="https://github.com/sivaShilpa">
                <img
                  class="icon github"
                  src="https://i.imgur.com/RhfoML7.png"
                  alt="Github"
                ></img>
              </a>
              <a href="https://www.linkedin.com/in/shilpa-sivarajan/">
                <img
                  class="icon LinkedIn"
                  src="https://i.imgur.com/omX3QDN.png"
                  alt="Linkedin"
                ></img>
              </a>
              <a href="https://docs.google.com/document/d/1qWkNKmvTF1eptLR_3_lBK2d7VzBJvYFm/edit?usp=sharing&ouid=112433273414864169801&rtpof=true&sd=true">
                <img
                  class="icon resume"
                  src="https://i.imgur.com/2GwlWib.png"
                  alt="Resume icon from flaticon"
                ></img>
              </a>
            </div>
            <div class="bio">
              <p>{about.bioPara1}</p>
              <p>{about.bioPara2}</p>
            </div>
          </div>
        {/* </div> */}
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
  );

  return about ? loaded() : <h1>Loading...</h1>;
};

export default About;
