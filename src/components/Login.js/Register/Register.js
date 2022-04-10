import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, LogoImage, RegisterContainer, Input } from '../Styles'
import { FormContainer, Info, RegisterC } from './Styles'
import Logo from '../../Images/loginImg.png'
import { useAuth } from '../../../context/authContext'
import { updateProfile } from 'firebase/auth'
import { auth } from '../../../firebase'

const Register = () => {
    const navigate = useNavigate()
    const[error, setError] = useState()

    const[user, setUser] = useState({
        email: '',
        username: '',
        password: ''
    })
    const { Signup } = useAuth()

    const handleChange = ({target: {name, value}}) => {
            setUser({...user, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError('')
        try {
            await Signup(user.email, user.password, user.username)
            await updateProfile(auth.currentUser, { displayName: user.username })
            navigate('/')
        } catch (error) {   
            setError(error.message)
        }
        
    }

  return (
    <RegisterC>
         <Container>
                {error && <p>{error}</p>}
                <form onSubmit={handleSubmit}> 
                <FormContainer>
                        <div>
                            <LogoImage src={Logo} alt='Logo' />
                        </div>
                        <Info>
                            Regístrate para ver fotos y videos de tus amigos.
                        </Info>
                        <Input>
                            <input type='email'
                                   name='email'
                                   placeholder='Correo electrónico' 
                                   onChange={handleChange} />
                        </Input>
                        <Input>
                            <input type='text' 
                                name='username'
                                placeholder='Username'
                                onChange={handleChange}
                        />
                        </Input> 
                        <Input>
                            <input type='password' 
                                   name='password'
                                   placeholder='Contraseña'
                                   onChange={handleChange}
                        />
                        </Input>
                        <Button>Registrarte</Button>
                        <Info>
                            Al registrarte, aceptas nuestras Condiciones, la Política de datos y la Política de cookies.
                        </Info>
                    </FormContainer>
                </form>
            </Container>
            <RegisterContainer>
                <span>¿Tienes una cuenta?</span><div onClick={() => navigate('/login')}>Entrar</div>
            </RegisterContainer>
    </RegisterC>
  )
}

export default Register