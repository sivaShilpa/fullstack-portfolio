import "./Project.css";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import React from "react";

const Project = () => {
  const [projects, setProjects] = useState(null);
  const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch("./projects.json");

    // turn response into javascript object
    const data = await response.json();

    // set the projects state to the data
    setProjects(data);
  };

  useEffect(() => getProjectsData(), []);

  const loaded = () => {
    return projects.map((project) => (
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
            <a href={project.git}>Click here to go to my Github</a>
          </div>
        </div>
      </div>
    ));
  };

  return <div class="projectsPage">{projects ? loaded() : <Loading />}</div>;
};

export default Project;
