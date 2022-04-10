import styled from 'styled-components'

export const ImageProfileContainer = styled.div`
    img{
        border-radius: 50%;
        height: ${props => props.iconSize === 'big' ? '56px' : props.iconSize === 'small' ? '24px' : props.iconSize === 'veryBig' ? '150px' : ''};
        width: ${props => props.iconSize === 'big' ? '56px' : props.iconSize === 'small' ? '24px' : props.iconSize === 'veryBig' ? '150px' : ''};
    }

    
`