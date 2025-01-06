import ProjectCard from '@/components/ProjectCard'
import GetCards, { CardType } from '@/public/GetCards'
import React from 'react'


function Projects() {
  const cards = GetCards(CardType.Project)
  return (
    <div className='projects-page'>
      <h1 id='projects-header'>Projects</h1>
      <div id='projects-grid'>
          <ProjectCard Title='My Itch.io page' description='Here is where my finished games reside right now' Image='https://raw.githubusercontent.com/bobromero/Portfolio/70888cfef0fc80c74a57362cebba788cc440983c/public/itchio.svg' Link='https://rromero123102.itch.io/'></ProjectCard>


        {cards}
      </div>
    </div>
  )
}

export default Projects