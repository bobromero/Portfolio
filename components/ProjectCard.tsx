import React from 'react'
import { CardInfo } from './info/CardInfo'

function ProjectCard({ Title, description, Image, Link }: CardInfo) {
    return (
        <div className='project-card'>
            <a className='project-card-grid' href={Link} target="_blank" rel="noopener noreferrer">
                <h1 className='card-title'>
                    {Title}
                </h1>

                <p className='card-description main-page-font'>
                    {description}
                </p>

                <div className='flex justify-center '>
                    <img className='project-card-image' src={Image}></img>

                </div>
            </a>
        </div>
    )
}

export default ProjectCard
