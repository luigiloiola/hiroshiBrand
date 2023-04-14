import React from 'react'

function Cards(props) {
  return (
    <li className='video-card'>
        <div className='thumbnail'>
            <img></img>
            <svg></svg>
        </div>
        <div className='card-title'>
            <span className='title-english'></span>
            <span className='title-japanise'></span>
            <span className='card-year'></span>
        </div>
    </li>
  )
}

export default Cards
