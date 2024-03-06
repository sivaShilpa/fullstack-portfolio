import React from "react";
import "./ProjectCard.css";
const ProjectCard = ({ project }) => {
  return (
    <div class="card-projects purpleBox">
      <div className="projectImg">
        <img class="project-image" src={project.image} alt="project" />
      </div>
      <div className="projectContent">
        <div className="project-name">
          <h1>{project.name}</h1>
        </div>
        <div className="project-desc">
          <p>
            <strong>{project.description}</strong>
          </p>
        </div>
        <div className="link">
          <a href={project.git} target="_blank" rel="noreferrer">
            Click here to go to my Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
