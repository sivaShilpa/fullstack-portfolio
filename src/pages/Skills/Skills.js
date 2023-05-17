import { useState, useEffect } from "react";
import "./Skills.css"

function Skills(props) {
    let [isMenuOpened, setIsMenuOpened] = useState(false)
    const [skills, setSkills] = useState(null);

    const handleMenuClicked = (event) => {
        event.preventDefault()
        isMenuOpened ? setIsMenuOpened(false) : setIsMenuOpened(true)
    }

    const getSkillsData = async () => {

        //make api call and get response
        const response = await fetch("./skills.json");

        // turn response into javascript object
        const data = await response.json();

        // set the projects state to the data
        setSkills(data);

    };

    useEffect(() => getSkillsData(), []);

    const loaded = () => {
        return skills.map((skill) => (
            <div class="card-skills">                
                    <a href={skill.link}>
                        <img class="skill-image" src={skill.image} alt="" />
                    </a>                
            </div>
        ));
    };

    return <div id="home-container">
    <div class="skills">
        <div class="card-skill">
        {skills ? loaded() : <h1>Loading...</h1>}
            <span class="top-skill"></span>
            <span class="right-skill"></span>
            <span class="bottom-skill"></span>
            <span class="left-skill"></span> 
         </div>
        </div>
        <nav className={isMenuOpened ? 'menu' : 'hideMenu'}>
            <a class="skills-container" href="/">Home</a>
            <a class="about-container" href="/About">About</a>
            <a class="projects-container" href="/Projects">Projects</a>
        </nav>
        <div className="freepik1"> Icons made by <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
        <div onClick={handleMenuClicked} className='contextMenu' />
    </div>
}

export default Skills;
