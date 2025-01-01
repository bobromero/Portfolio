import GetCards, { CardType } from '@/public/GetCards'
import React from 'react'

type Props = {}

function Projects({}: Props) {
  var cards = GetCards(CardType.Project)
  return (
    <div>
      <h1>Projects</h1>
      <div>
        {cards}
      </div>
    </div>
  )
}

export default Projects