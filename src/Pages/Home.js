import React, { useState } from 'react'
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
  const [visibleCards, setVisibleCards] = useState(3); // State to manage the number of visible cards
  const totalCards = 4; // Total number of cards available

  // const loadMoreCards = () => {
  //   setVisibleCards(prevCount => Math.min(prevCount + 3, totalCards)); // Increase the number of visible cards by 3, but not more than totalCards
  // };

  const handleViewAllClickTrans = () => {
    window.location.href = "/transportation";
  };

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
          <button>Get Started</button>
        </div>
      </div>
      <div className='transportation-wrapper'>
        <div className='title-trans'>
          <h1>Transportation</h1>
          <div className='card-items-trans'>
            {/* Only display the first 'visibleCards' number of cards */}
            {[...Array(visibleCards)].map((_, index) => (
              <Card key={index} />
            ))}
          </div>
          <div className='Button-view-all'>
            {/* Show the 'Load More' button if there are more than 3 cards */}
            {visibleCards < totalCards ? <button className='view-all-trans' onClick={handleViewAllClickTrans}>Load More</button> : null}
          </div>
        </div>
      </div>
      <Accomadations />
      <Destinations />
      <AboutUs />
      <Gallery />
    </div>
  )
}

export default Home;