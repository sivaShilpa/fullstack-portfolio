import Navigation from '../../components/Navigation';
import './Home.css'

// import ReactDOM from 'react-dom';
var React = require('react')

function Home(props) {
  

  return <div id="home-container">
    {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
    {/* <div class="card"> */}
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
      {/* <span class="top"></span>
      <span class="right"></span>
      <span class="bottom"></span>
      <span class="left"></span> */}
    {/* </div> */}
    <Navigation />
    
  </div>
}

export default Home;

