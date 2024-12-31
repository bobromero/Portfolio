import GetCards from '@/public/Cards/GetCards'
import React from 'react'

type Props = {}

function Projects({}: Props) {
  return (
    <div>
      Projects
      {GetCards()}
      </div>
  )
}

export default Projects