import React from 'react'
import CardInfo from './info/CardInfo'

function Card({Title, description}: CardInfo) {
  return (
    <div>
        <h1>
            {Title}
        </h1>
        
        <p>
            {description}
        </p>
        

    </div>
  )
}

export default Card