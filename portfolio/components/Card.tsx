import React from 'react'
import CardInfo from './info/CardInfo'

function Card({Title, description, Image, Link}: CardInfo) {
  return (
    <div>
      <a  href={Link} target="_blank" rel="noopener noreferrer">
        <h1>
            {Title}
        </h1>
        
        <p>
            {description}
        </p>
        
        <img src={Image}></img>
      </a>
    </div>
  )
}

export default Card