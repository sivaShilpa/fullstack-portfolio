import "./Project.css"
import { useState, useEffect } from "react";

function Projects(props) {
  let [isMenuOpened, setIsMenuOpened] = useState(false)
  const [projects, setProjects] = useState(null);

  const handleMenuClicked = (event) => {
    event.preventDefault()
    isMenuOpened ? setIsMenuOpened(false) : setIsMenuOpened(true)
  }

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
      <div class="card-projects">
        <div><h1>{project.name}</h1></div>
        <div><img class="project-image" src={project.image} alt="" /></div>
        <div>
          <a href={project.git}>
            <button>Github</button>
          </a>
          <a href={project.live}>
            <button>live site</button>
          </a>
        </div>
        <div><p><strong>{project.description}</strong></p></div>
      </div>
    ));
  };

  return (<div id="home-container">
    <div class="card-project">
      {projects ? loaded() : <h1>Loading...</h1>}
      <span class="top-project"></span>
      <span class="right-project"></span>
      <span class="bottom-project"></span>
      <span class="left-project"></span>
    </div>
    <nav className={isMenuOpened ? 'menu' : 'hideMenu'}>
      <a class="projects-container" href="/">Home</a>
      <a class="about-container" href="/About">About</a>
      <a class="skills-container" href="/Skills">Skills</a>
    </nav>
    <div onClick={handleMenuClicked} className='contextMenu' />
  </div>)


}

export default Projects;
