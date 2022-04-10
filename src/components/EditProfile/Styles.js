import styled from 'styled-components'

export const EditProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    border: 1px solid var(--border);
`

export const Container = styled.div`
    border: 1px solid var(--border);
    padding: 35px;
    border-radius: 5px;
    div{
            display: flex;
            margin-bottom: 10px;
            justify-content: center
        }
`

export const SaveButton = styled.button`
    background-color: ${props => props.disabled ? '#82bfe7' : 'var(--blue1)'};
    color: white;
    padding: 5px 9px;
    border-radius: 4px;
    font-size: 0.87rem;
    font-weight: 600;
    cursor: pointer
`

export const FileInput = styled.input`
    display: none;
`
