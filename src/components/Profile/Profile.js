import React, { useState } from 'react'
import { ProfileContainer, TextContainer  } from './Styles'
import ProfileIcon from '../ProfileIcon/ProfileIcon'
import { useAuth } from '../../context/authContext'


const Profile = ({ username,
                   caption, 
                   urlText, 
                   iconSize, 
                   captionSize,}) => {

   const {user} = useAuth()
  
  return (
    <ProfileContainer>
        <ProfileIcon
          iconSize={iconSize}
        />
        <TextContainer className="textContainer">
            <span className="accountName">{user.displayName ? user.displayName : username}</span>
            <span className={`caption ${captionSize}`}>{user.displayName ? '_' + user.displayName : 'default'}</span>
        </TextContainer>
          <a href="/" >{urlText}</a>
    </ProfileContainer>
  )
}

export default Profile