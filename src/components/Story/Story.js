import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import database from '../../firebase'
import users from '../data/friendlyUsers'
import { StoryContainer, StoryImage, UsersContainer } from './Styles'

const Story = ({ id, name, profileImg, storyBorder, storyImg, username, userStory }) => {
  const navigate = useNavigate();

 


  const updateStory = async () => {
  

    await database.collection('stories').doc(id).update(
         {
             storyBorder: false
         } 
     ); 

     setTimeout(() => {
      database.collection('stories').doc(id).update(
        {
            storyBorder: true
        } 
    ); 
     }, 15000)
 }
  
  return (
    <StoryContainer>
            <UsersContainer key={id} active={storyBorder}>
                <div >
                  <StoryImage  src={profileImg} alt='imgStory' onClick={() => {navigate('/story', { state: {profileImg, storyImg, username} }); updateStory()} } />
                </div>
                  <span>{username.length > 10 ? username = username.substring(0, 8) + '...' : username}</span>
            </UsersContainer>
    </StoryContainer>
  )
}

export default Story