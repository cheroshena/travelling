import React from 'react'
import '../Styles/Style.css'
import Card from '../Components/Card';
import AboutUs from '../Base/AboutUs';
import Destinations from '../Base/Destinations';
import Accomadations from '../Base/Accomadations';
import Gallery from '../Base/Gallery';
import Transportation from '../Base/Transportaion';
import Backimgone from '../assets/b-img-1.jpg'
import Top from '../Components/Top';


function Home() {
  return (

    <div className='home-wrapper'>
      <div className='home-image'>
        <img src={Backimgone} alt='' />
        <div className='home-content'>
        <h1>
        <span className="dot">.</span>Plan 
        <span className="dot">.</span>Explore
        <span className="dot">.</span>Rest
        </h1>
        
          <p>This is a paragraph describing your website or company.</p>
          <button>Get Started</button>
        </div>
      </div>
      <div className='transportation-wrapper'>
        <div className='title-trans'>
          <h1>Transportation</h1>
          <div className='card-items-trans'>
          <Card />
          <Card />
          <Card />
          </div>
          
        </div>
      </div>
      <Transportation />
      
      <Accomadations />
      
      <Destinations />
      
      <AboutUs />
      <Gallery />
      
    </div>
  )
}

export default Home;