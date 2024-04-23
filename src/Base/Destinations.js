import React, { useState } from 'react'
import Backimgone from '../assets/b-img-4.jpg'

function Destinations() {

  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(searchQuery);

    setSearchQuery('');
  };

  return (

    <div>
      <div className='home-image'>
        <img src={Backimgone} alt='' />
        <div className='home-content'>
          <h1>
            <span className="dot">.</span>Destinations
          </h1>
        </div>
      </div>
      <form className="search-container" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Enter your journey point"
          value={searchQuery}
          onChange={handleChange}

        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  )
}

export default Destinations;