import './Home.css'
import { useState } from 'react';
// import ReactDOM from 'react-dom';
var React = require('react')

function Home(props) {
  let [isMenuOpened, setIsMenuOpened] = useState(false)

  const handleMenuClicked = (event) => {
    event.preventDefault()
    isMenuOpened ? setIsMenuOpened(false) : setIsMenuOpened(true)
  }

  return <div id="home-container">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <div class="card">
      <div class="name-home">
      {/* <div class="first-name"> */}
      <div class="color1">Shilpa</div>
      {/* </div> */}
      &nbsp;
      {/* <div class="last-name"> */}
      <div class="color2">Siva</div>
      <div class="color3">rajan</div>
      </div>
      {/* </div> */}
      <div>
      <h1 class="welcome">Welcome to my portfolio!</h1>
      </div>
      <span class="top"></span>
      <span class="right"></span>
      <span class="bottom"></span>
      <span class="left"></span>
    </div>
    <nav className={isMenuOpened ? 'menu' : 'hideMenu'}>
      <a class="about-container" href="/About">About</a>
      <a class="skills-container" href="/Skills">Skills</a>
      <a class="projects-container" href="/Projects">Projects</a>
    </nav>
    <div onClick={handleMenuClicked} className='contextMenu' />
    
  </div>
}

export default Home;

