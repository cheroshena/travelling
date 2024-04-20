import React from 'react'
import '../'
import Card from '../Components/Card';
import Top from '../Components/Top';
import Bottom from '../Components/Bottom';
import AboutUs from '../Base/AboutUs';
import Destinations from '../Base/Destinations';
import Accomadations from '../Base/Accomadations';
import Gallery from '../Base/Gallery';
import Transportation from '../Base/Transportaion';



function Home() {
  return (

    <div>
    <Top/>
    <Transportation/>
    <Card/>
    <Accomadations/>
    <Card/>
    <Destinations/>
    <Card/>
    <AboutUs/>
    <Gallery/>
    <Card/>
    <Bottom/>
    
    </div>
  )
}

export default Home;