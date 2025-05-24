import React from 'react'
import CardInfo from './info/CardInfo'

function Card({ Title, description, Image, Link }: CardInfo) {
    return (
        <div className='card'>
            <a className='card-grid' href={Link} target="_blank" rel="noopener noreferrer">
                <h1 className='card-title'>
                    {Title}
                </h1>
                <div className='center'>
                    <img className='card-image' src={Image} alt={Title + ' image'}></img>
                </div>

                <p className='card-description main-page-font'>
                    {description}
                </p>
            </a>
        </div>
    )
}

export default Card
