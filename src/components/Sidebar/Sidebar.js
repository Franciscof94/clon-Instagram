import React from 'react'
import Sticky from "react-sticky-el";
import Profile from '../Profile/Profile'
import Suggestions from '../Suggestions/Suggestions';
import { SidebarContainer } from './Styles'

const Sidebar = () => {
  return (
    <Sticky topOffset={-80}>
        <SidebarContainer>
            <Profile
                username='default_user'
                caption='default'
                urlText='Cambiar'
                iconSize="big"
            />
            <Suggestions />
        </SidebarContainer>
    </Sticky>
  )
}

export default Sidebar