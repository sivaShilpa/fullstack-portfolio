import "./Project.css";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import React from "react";
import Carousel from "../../components/Carousel/Carousel";

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
    return <Carousel projects={projects} />;
  };

  return <div class="projectsPage">{projects ? loaded() : <Loading />}</div>;
};

export default Project;
