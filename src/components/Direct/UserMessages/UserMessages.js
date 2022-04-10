import { User } from '../Styles'
import { PointIcon, ProfileImage, UserMessagesContainer } from './Styles'
import { VscDebugBreakpointData } from 'react-icons/vsc'
import { useState } from 'react'


const UserMessages = ({ user, setIndex, setDirect, setStyle }) => {

    const handleClick = (userId) => {
      setIndex(userId)
      setDirect(true)
      setStyle(true)
    }

  return (
    <UserMessagesContainer onClick={() => handleClick(user)}>
            <User>
              <ProfileImage src={user.messages.img} alt='imgProfile' />
                <div>
                    <div>{user.messages.username}</div>
                    <div>{user.messages.message.length > 27 ? user.messages.message.substring(0, 27) + '...' : user.messages.message}</div>
                </div>
                <PointIcon><VscDebugBreakpointData color='var(--blue1)' /></PointIcon>
            </User> 
    </UserMessagesContainer>
  )
}

export default UserMessages