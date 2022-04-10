import { Button, Container, LoginContainer, LogoImage, RegisterContainer, Input } from './Styles'
import Logo from '../Images/loginImg.png'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import { useState } from 'react'
import { auth } from '../../firebase'
import {  onAuthStateChanged, signInAnonymously } from 'firebase/auth'

const Login = () => {
    const navigate = useNavigate()

    

    const { Login } = useAuth();
    const[error, setError] = useState()

    const[user, setUser] = useState({
        email: '',
        password: ''
    })


    const handleChange = ({target: {name, value}}) => {
            setUser({...user, [name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        console.log('funciona')
        try {
            await Login(user.email, user.password)
            navigate('/')
        } catch (error) {   
            setError(error.message)
        }
        
    }

    const anonymous = () => {
        signInAnonymously(auth)
        .then(() => {
            navigate('/')
        })
        .catch((error) => {
            console.log(error.code)
            console.log(error.message)
        })
    }

    return (
        <LoginContainer>

            <Container>
                <form onSubmit={handleSubmit}> 
                    <div>
                        <LogoImage src={Logo} alt='Logo' />
                    </div>
                    <Input>
                        <input type='text' 
                               placeholder='Correo electrónico'
                               onChange={handleChange}
                               name='email'
                        />
                    </Input>
                    <Input>
                        <input type='password' 
                               placeholder='Contraseña'
                               onChange={handleChange}
                               name='password'
                        />
                    </Input>
                    <Button>Iniciar sesión</Button>
                </form>
                    <Button onClick={() => anonymous()}>Ingresar como anónimo</Button>
            </Container>
            <RegisterContainer>
                <span>¿No tienes una cuenta?</span><div onClick={() => navigate('/signup')}>Regístrate</div>
            </RegisterContainer>
                
        </LoginContainer>
    )
}

export default Login