import styled from 'styled-components'

export const LoginContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--background-grey)
`

export const Container = styled.div`
        width: 350px;
        height: 480px;
        border: 1px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: 3px;
        background-color: white;
        form{
            div{
                display: flex;
    justify-content: center;
            }
        }
`

export const LogoImage = styled.img`
    width: 175px;
    height: 51px;
    margin: 35px 0;
`


export const Input = styled.div`
    width: 268px;
    height: 38px;
    margin-bottom: 18px;
    border-radius: 3px;
    border: 1px solid var(--border);

    input{
        width: 100%;
        height: 100%;
        outline: none;
        background-color: var(--background-grey);
        padding-left: 15px
    }
`

export const Button = styled.button`
    color: white;
    background-color: var(--blue1);
    padding: 5px 0;
    width: 268px;
    border-radius: 4px;
    font-size: 0.91rem;
    font-weight: var(--fontWeight1);
    cursor: pointer;
    margin-bottom: 15px
`

export const RegisterContainer = styled.div`
    border: 1px solid var(--border);
    width: 350px;
    height: 63px;
    display: flex; 
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    border-radius: 3px;
    background-color: white;

        div{
            color: var(--blue1);
            font-weight: var(--fontWeight1);
            font-size: 0.87rem;
            cursor: pointer
        }
`