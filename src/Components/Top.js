import React from 'react'


function Top() {
  return (
    <div className='nav-bar-wrapper'>
      <div className='logo'>
        <a href="/">Tripper</a>
      </div>
      <div className='nav-bar-item'>
        <nav id='navbar'>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a className='login-btn' href="/login">Login</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Top;