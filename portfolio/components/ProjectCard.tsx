import React from 'react'
import Card from '../components/Card'
import CardInfo from './info/CardInfo'

function ProjectCard({Title, description, Image}: CardInfo) {
  return (
    <div>
        
        <Card Title={Title} description={description} ></Card>

        
        <img src = {Image}></img>

    </div>
  )
}

export default ProjectCard