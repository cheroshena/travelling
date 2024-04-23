import React from 'react'
import Backimgone from '../assets/b-img-3.jpg'

function Accomadations() {
  return (

    <div>
      <div className='home-image'>
        <img src={Backimgone} alt='' />
        <div className='home-content'>
          <h1>
            <span className="dot">.</span>Accommodation
          </h1>
        </div>
      </div>

    </div>
  )
}

export default Accomadations;