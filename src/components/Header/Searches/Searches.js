import React, { useEffect, useState } from 'react'
import { MainSearchContainer, SearchesContainer, Recent, UserContainer } from './Styles'
import users from '../../data/friendlyUsers'
import { MdClose } from 'react-icons/md'

const Searches = () => {



  return (
    <MainSearchContainer>
        <SearchesContainer>
            <Recent>
                <h4>Recientes</h4>
                <div>Borrar todo</div>
            </Recent>
            <div>
              {
                  users.slice(0, 5).map((user, id) => (
                      <UserContainer key={user.id}>
                          <img src={user.profileImg} alt='usernameImg' />
                          <div>
                              <div>{user.username}</div>
                              <div>{user.name}</div>
                          </div>
                          <MdClose font-size={23} color='var(--colorSecondary)' />
                      </UserContainer>
                  ))
              }
            </div>
        </SearchesContainer>
    </MainSearchContainer>
  )
}

export default Searches