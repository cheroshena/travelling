import React from 'react'
import image1 from '../assets/b-img-2.jpg'


function Card() {
  return (

    <div className="card">
      <div className="card-header">
        <img src={image1} />
      </div>
      <div className="title-rating">
        <h2>Yala Ride</h2>
        <div className="rating">
          <span className="star">&#9733;</span>
          <p className='rating-number'>3.5</p>
        </div>
      </div>
      <div className='card-middle'>
        <p>8 days of Walking & Trekking</p>
      </div>


      <div className="card-body">

        <div className="image-group">
          <img src={image1}/>
          <h3>2 Hotel</h3>
        </div>
        <div className="image-group">
          <img src={image1}/>
          <h3>1 Transfers</h3>
        </div>
        <div className="image-group">
          <img src={image1}/>
          <h3>4 Activites</h3>
        </div>

        <div className='card-guidlines'>

        </div>
      </div>
    </div>
  )
}

export default Card;