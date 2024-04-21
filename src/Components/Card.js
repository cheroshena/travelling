import React from 'react'
import image1 from '../assets/b-img-2.jpg'
import Car from '../assets/car.png'
import Hotel from '../assets/hotel.png'
import Walking from '../assets/walking.png'


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
          <img className='icon-card' src={Hotel} />
          <h3>2 Hotel</h3>
        </div>
        <div className="image-group">
          <img src={Car} />
          <h3>1 Transfers</h3>
        </div>
        <div className="image-group">
          <img src={Walking} />
          <h3>4 Activites</h3>
        </div>



      </div>
      <div className='card-guidlines'>
        <ul>
          <li>Long title or description should not affect card width</li>
          <li>Card height should remain consistent</li>
          <li>New solution needed to prevent card resizing</li>
        </ul>
      </div>
      <div className='price-card'>
      $12,000  <span className="label-price">Per Adult</span>
      </div>
    </div>
  )
}

export default Card;