import React from 'react'
import Posts from '../Posts/Posts'
import Stories from '../Stories/Stories'
import { CardsContainer } from './Styles'

const Cards = () => {
  return (
    <CardsContainer>
      <div>
        <Stories />
        <Posts />
      </div>
    </CardsContainer>
  )
}

export default Cards