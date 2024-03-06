import "./Home.css";
import React from "react";
import "../../components/Box/Box.css";
const Home = () => {
  return (
    <div className="homePage">
      <div className="goldBox welcomeText">
        <span className="welcomeMessage">Welcome to </span>
        <div>
          <span className="firstName">
            <span>&nbsp;</span>Shilpa
          </span>
          <span className="lastName">'s</span>
        </div>
        <span className="welcomeMessage"><span>&nbsp;</span>Portfolio!</span>
      </div>
    </div>
  );
};

export default Home;
