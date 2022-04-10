import styled from 'styled-components'

export const UserMessagesContainer = styled.div`
        padding: 5px 0;
`

export const User = styled.div`



`


export const ProfileImage = styled.img`
        width: 56px;
        height: 56px;
        border-radius: 50%;
        object-fit: cover
`

export const PointIcon = styled.div`
        display: ${props => props.change ? 'block' : 'none'}
`