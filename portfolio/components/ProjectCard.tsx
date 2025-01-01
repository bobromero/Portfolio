import React from 'react'
import Card from '../components/Card'
import CardInfo from './info/CardInfo'

function ProjectCard({Title, description, Image, Link}: CardInfo) {
  return (
    <div>
        
        <Card Title={Title} description={description} Link={Link} Image={Image}></Card>


    </div>
  )
}

export default ProjectCard