import styled from 'styled-components'

export const StoryContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%
    
`

export const UsersContainer = styled.div`
    margin: 1em 0.5em;
    text-align: center;
    width: 100%;
    
    div{
        border-radius: 50%;
        padding: 2px;
        background: ${props => props.active ? 'linear-gradient(200deg, #da3394 25%, #e03c67 50%, #f3753b 75%, #f99b4a 100%);' : 'var(--borderHistory)' };

    }

    span{
        letter-spacing: .01em;
        max-width: 74px;
        color: var(--colorLetter1);
        font-size: 0.71rem;
    }
    
`

export const StoryImage = styled.img`
        height: var(--iconSizeBig);
        width: var(--iconSizeBig);
        border-radius: 50%;
        display: block;
        object-fit: cover;
        border: 2px solid var(--white);
        cursor: pointer;
`   
    