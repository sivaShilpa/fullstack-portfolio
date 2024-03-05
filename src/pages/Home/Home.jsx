import './Home.css'
import React from 'react'
import '../../components/Box/Box.css' 
const Home = () => {
  return (
    <div className='goldBox'>
        <div className='fullname'>
          <span className='firstName'>Shilpa</span>&nbsp;&nbsp;&nbsp;<span className='lastName'>Sivarajan</span>
        </div>
        <div className='welcomeMessage'>Welcome to my Portfolio!</div>
    </div>
  )
}

export default Home


