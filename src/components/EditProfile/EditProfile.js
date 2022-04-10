import React, { useEffect, useState, useRef } from 'react'
import { Input } from '../Login.js/Styles'
import { Button, Name } from '../MyProfile/Styles'
import { Container, EditProfileContainer, FileInput, SaveButton } from './Styles'
import ProfileIcon from '../ProfileIcon/ProfileIcon'
import { Link } from 'react-router-dom'
import { updateProfile } from 'firebase/auth'
import { auth, upload } from '../../firebase'
import { useAuth } from '../../context/authContext'

const EditProfile = () => {
  const hiddenFileInput = useRef(null);
  const[users, setUsers] = useState('')
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const {user} = useAuth()



  const handleChange = (e) => {
    
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }

  const handle = event => {
    hiddenFileInput.current.click();
  };


  const handleClick = async () => {
    if(user) {
      if(users) {
        await updateProfile(auth.currentUser, { displayName: users})
      }
    upload(photo, user, setLoading);
    
    alert('Usuario editado correctamente')
    } else {
      alert('Rellena los campos')
    }
  }


  return (
    <EditProfileContainer>
      <Container>
        <div>
            <Name>
                Nombre de Usuario
            </Name>
        </div>
        <div>
          <Input>
              <input placeholder='Nombre de usuario' type='text' name='username' onChange={(e) => setUsers(e.target.value)}/>
          </Input>
        </div>
        <div>
          <Name>
              Foto de perfil
          </Name>
        </div>
        <div>
          {
            loading ? 'Cargando...' :
              <ProfileIcon alt='profileImg' iconSize='veryBig' />             
          }
        </div>
        <div>
          <Button onClick={handle}>Editar foto de perfil</Button>
          <FileInput ref={hiddenFileInput} placeholder='hola' type='file' onChange={handleChange} />
        </div>

        <div>
          <SaveButton disabled={!users && !photo} onClick={() => handleClick()}>
            Guardar
          </SaveButton>
          <Link to='/profile'>
            <Button>
              Volver
            </Button>
          </Link>
        </div>
      </Container>
    </EditProfileContainer>
  )
}

export default EditProfile