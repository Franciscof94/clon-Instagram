import React, { useEffect, useState } from 'react'
import { HeaderContainer, IconsContainer, InputContainer, LogoContainer, MainHeader, CloseSearch, SearchContainer, ExploreIcon, HomeIcon, InboxIcon } from './Styles'
import Logo from '../Images/Logo.png'
import { ReactComponent as Home } from "../Images/home.svg";
import { ReactComponent as HomeWhite } from "../Images/homeWhite.svg";
import { ReactComponent as InboxWhite } from "../Images/inboxWhite.svg";
import { ReactComponent as Inbox } from "../Images/inbox.svg";
import { ReactComponent as Add } from "../Images/add.svg";
import { ReactComponent as Explore } from "../Images/explore.svg";
import { ReactComponent as Notifications } from "../Images/notifications.svg";
import ProfileIcons from '../ProfileIcon/ProfileIcon';
import { BiSearch } from 'react-icons/bi'
import { TiDelete } from 'react-icons/ti'
import Searches from './Searches/Searches';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import database from '../../firebase';


const Header = () => {
    const[input, setInput] = useState(false)

    const location = useLocation()
    const l = location.pathname
  

  return (

    <MainHeader>
        <HeaderContainer>
            <Link to='/'>
                <LogoContainer>
                        <img src={Logo} alt='Logo' />
                </LogoContainer>
            </Link>
            <InputContainer>
                <div>
                     {
                         input !== true ?  
                        <SearchContainer>
                            <BiSearch fontSize={18} color='var(--colorSecondary)' />
                            <span>Busca</span>
                        </SearchContainer> : <CloseSearch>
                                                <TiDelete color='#CFCFCF' font-size={19} onClick={() => setInput(false)} />
                                             </CloseSearch>
                     }
                </div>
                <input type='text' onClick={() => setInput(true)} placeholder={input === true ? 'Busca' : ''} />
            </InputContainer>
            <IconsContainer>
                    {
                        l  === '/' ? 
                        <HomeIcon>
                            <Home />
                        </HomeIcon>
                        
                        :
                        <Link to='/'>
                            <HomeIcon><HomeWhite /></HomeIcon>
                        </Link>
                    }            

                
                    {
                        l === '/direct/inbox' ?
                        <InboxIcon>
                            <Inbox />
                        </InboxIcon>
                        :
                        <InboxIcon>
                        <Link to='/direct/inbox'>
                           <InboxWhite />
                        </Link>
                        </InboxIcon>
                    }
                
                <div>
                    <Add />
                </div>
                <ExploreIcon>
                    <Explore />
                </ExploreIcon>
                <div>
                    <Notifications />
                </div>
                <Link to='/profile'><ProfileIcons iconSize='small' /></Link>
            </IconsContainer>
        </HeaderContainer>
        {input === true ? <Searches /> : null}
    </MainHeader>

  )
}

export default Header