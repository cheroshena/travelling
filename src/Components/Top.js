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
            <li><a href="/transportation">Transportation</a></li>
            <li><a href="/destination">Destination</a></li>
            <li><a href="/accomadation">Accommodation</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a className='login-btn' href="/login">Login</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Top;