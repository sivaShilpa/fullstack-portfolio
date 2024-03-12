import { useState, useEffect } from "react";
import "./About.css";
import "../../components/Box/Box.css";
import React from "react";
import Loading from "../../components/Loading/Loading";

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
        
        <div class="display-about">
          <div>
            <h1 class="name">About Me</h1>
          </div>
          
          <div class="bio">
            <p>{about.bioPara1}</p>
            <p>{about.bioPara2}</p>
          </div>
        </div>        
      </div>
    </div>
  );

  return about ? loaded() : <Loading />;
};

export default About;
