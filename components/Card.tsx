import React from 'react'
import CardInfo from './info/CardInfo'

function Card({Title, description, Image, Link}: CardInfo) {
  return (
    <div className=''>
      <a  href={Link} target="_blank" rel="noopener noreferrer">
        <h1 className='card-title'>
            {Title}
        </h1>
        <br></br>
        <p className='card-description main-page-font'>
            {description}
        </p>
        <br></br>
        <img className='card-image' src={Image} alt={Title + ' image'}></img>
        <br></br>
      </a>
    </div>
  )
}

export default Card