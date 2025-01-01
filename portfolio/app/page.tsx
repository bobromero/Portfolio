import GetCards, { CardType } from '@/public/GetCards'
import React from 'react'

export default function Page() {
  return (
    <div>
      <h1>Robert Romero</h1>
      
      <p>I am Robert Romero and I love programming</p>

      <div>
        {GetCards(CardType.Card)}
      </div>

    </div>
  )
}
