import React, { useEffect, useState } from 'react'
import { UserStoryContainer, Story, CloseIcon, Logo, UserData, User, Username } from './Styles'
import logo from '../Images/logoWhite.png'
import ProfileIcons from '../ProfileIcon/ProfileIcon'
import { CgClose } from 'react-icons/cg'
import { useLocation, useNavigate } from 'react-router-dom'

const UserStory = () => {

  const navigate = useNavigate();


  const {state}  = useLocation();
  
  console.log(state)
    
  /* useEffect(() => {
      setTimeout(() => {
          navigate('/')
      }, 9000)
  }, )
 */


  return (
    <UserStoryContainer>
          <User>
          <Logo>
            <img src={logo} alt='Logo' onClick={() => navigate('/')} />
          </Logo>
        
          <Story>
            <div></div>
            <UserData>
              <img src={state.storyImg} alt='' />
              <Username>
                <div>
                    <img src={state.profileImg} alt='profileImg' />
                    <div>{state.username}</div>
                    <div>11 min</div>
                </div>
              </Username>
            </UserData>
          </Story>
          <CloseIcon>
            <CgClose color='white' font-size={30} onClick={() => navigate('/')} cursor='pointer' />
          </CloseIcon>
        </User>
    </UserStoryContainer>
  )
}

export default UserStory