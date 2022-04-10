import React from 'react'
import Cards from '../Cards/Cards'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import { HomeContainer, CardsAndSidebarContainer } from './Styles'

const Home = () => {
  

  return (
    <HomeContainer>
      <Header />
        <CardsAndSidebarContainer>
          <Cards />
          <Sidebar />
        </CardsAndSidebarContainer>
    </HomeContainer>
  )
}

export default Home