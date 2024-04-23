import React, { useState } from 'react'
import Backimgone from '../assets/b-img-3.jpg'
import CardLocation from '../Components/CardLoacation';


function Accomadations() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllCards, setShowAllCards] = useState(false);
  const initialCardCount = 3; 
  const totalCount = 5; 

  const [cardCount, setCardCount] = useState(initialCardCount);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchQuery);
    setSearchQuery('');
  };

  const handleLoadMore = () => {
    setShowAllCards(true);
    setCardCount(totalCount); 
  };

  const handleLoadLess = () => {
    setShowAllCards(false);
    setCardCount(initialCardCount); 
  };

  return (

    <div className='trans-page-wrappper'>
      <div className='home-image'>
        <img src={Backimgone} alt='' />
        <div className='home-content'>
          <h1>
            <span className="dot">.</span>Accommodation
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
      <div className='location-card-container'>
        {[...Array(cardCount)].map((_, index) => (
          <CardLocation key={index} />
        ))}
      </div>
      <div className='load-more-btn-wrapper'>
      {!showAllCards ? (
        <button onClick={handleLoadMore} className="load-button">
          Load More ({totalCount - initialCardCount} more)
        </button>
      ) : (
        <button onClick={handleLoadLess} className="load-button">
          Load Less
        </button>
      )}
      </div>
    </div>
  )
}

export default Accomadations;