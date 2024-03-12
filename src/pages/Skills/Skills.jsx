import { useState, useEffect } from "react";
import "./Skills.css";
import "../../components/Box/Box.css";
import Images from "../../constants/Images";
import React from "react";
import Loading from "../../components/Loading/Loading";

const Skills = () => {
  const [skillImages, setSkillImages] = useState([]);
  const [skillTexts, setSkillTexts] = useState([]);

  const getSkillsData = async () => {
    setSkillImages(Images.SkillsImages);
    setSkillTexts(Images.SkillsTexts);
  };

  useEffect(() => {
    getSkillsData();
  }, []);

  const loaded = () => {
    return skillImages.map((skill, index) => (
      <div key={index} className="lightblueBox eachSkill">
        <img className="iconSkills" src={skill[0]} alt={skill[1]} title={skill[1]}/>
      </div>
    ));
  };

  const loaded1 = () => {
    return skillTexts.map((skill, index) => (
      <div key={index} className="lightblueBox eachSkill">
        <h2>{skill}</h2>
      </div>
    ));
  };

  return (
    <div id="skills-container">
      {skillImages.length > 0 ? loaded() : <Loading />}
      {skillTexts.length > 0 ? loaded1() : <Loading />}
    </div>
  );
};

export default Skills;
