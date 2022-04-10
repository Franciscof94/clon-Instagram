import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/authContext'
import { ImageProfileContainer } from './Styles'


const ProfileIcon = ({ iconSize, selectedImage }) => {
  const {user} = useAuth()


  const [photoURL, setPhotoURL] = useState('https://developers.google.com/web/images/contributors/no-photo.jpg?hl=es');
  
   useEffect(() => {
    if (user?.photoURL) {
      setPhotoURL(user.photoURL);
    }
  }, [user])
           


  return (
    <ImageProfileContainer iconSize={iconSize} >
      <img src={photoURL}
            alt='profile'
      />
    </ImageProfileContainer>
  )
}

export default ProfileIcon