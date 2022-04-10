import React from 'react'
import { Button, Container, Description, Followers, Info, InfoContainer, MyProfileContainer, Name, ProfileIconContainer, PublicationsContainer, Title, Username } from './Styles'
import ProfileIcons from '../ProfileIcon/ProfileIcon'
import { ReactComponent as Options } from "../Images/options.svg";
import { ReactComponent as Publications } from "../Images/publications.svg";
import { useAuth } from '../../context/authContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

const MyProfile = () => {
    const tab = '\u00A0'
    const {user} = useAuth()
    const { Logout, loading } = useAuth() 


    const handleLogout = async () => {
        await Logout()
    }

    if(loading) {
        return <h1>Cargando..</h1>
    }

  return (
    <MyProfileContainer>
        <Header />
        <Container>
        <InfoContainer>
            <ProfileIconContainer>
                <div>
                    <ProfileIcons iconSize='veryBig' />
                </div>
            </ProfileIconContainer>
            <Info>
                <Username>
                    <h2>{user.displayName ? user.displayName : 'default_user'}</h2>
                    <div>
                    {
                        !user.isAnonymous ?
                        <Link to='/account/edit'><Button>Editar perfil</Button></Link>
                        :
                       null
                    }
                    <Button onClick={handleLogout}>Cerrar sesión</Button>
                    </div>
                </Username>
                <Followers>

                        <div>
                            <span>0{tab}</span>publicaciones
                        </div>
                        <div>
                            <span>3{tab}</span>seguidores
                        </div>
                        <div>
                            <span>2{tab}</span>seguidos
                        </div>

                </Followers>
                <Name>{user.displayName ? user.displayName : 'default'}</Name>
            </Info>
        </InfoContainer>
            <PublicationsContainer>
                <div>
                    <Title>
                        <Publications /><span>PUBLICACIONES</span>
                    </Title>
                    <div>Aún no hay publicaciones.</div>
                    <Description>2022 INSTAGRAM DESARROLLADOR POR <span><a href='https://www.linkedin.com/in/franciscoferraro/'>FRANCISCO FERRARO</a></span></Description>
                </div>
            </PublicationsContainer>
        </Container>
    </MyProfileContainer>
  )
}

export default MyProfile