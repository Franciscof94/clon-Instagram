import styled from 'styled-components'

export const DirectContainer = styled.div`
    ${'' /* height: 90.7vh; */}
    background-color: var(--background-grey);
`

export const Container = styled.div`
  height: 100vh;
  padding: 79px 15px 0 15px

`

export const A = styled.div`
     max-width: 935px;
    margin: 0 auto;
    height: 85vh;
    background-color: white;
    border-radius: 5px;
    border: 1px solid var(--border);
    display: grid;
    grid-template-columns: 37% 63%;
    @media (max-width: 795px) {
        grid-template-columns: none
    }
`

export const FirstColumn = styled.div`
    border-right: 1px solid var(--border);
    @media (max-width: 795px) {
        border-right: none;
        display: ${props => props.styles ? 'none' : 'block'}
    }
`

export const Inbox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 7px;
    cursor: pointer;

    div{   
        margin-left: 6px;
        &:first-child{
            color: var(--text3);
            font-weight: 400
            font-size: 0.94rem;
            display: flex;
            align-items: center;
        }
        &:last-child{
            color: ${props => props.change ? 'var(--text3)' : 'var(--text2)'};
            font-weight: 400;
            font-size: 0.87rem
        }
    }
`

export const LastColumn = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 795px) {
        display: none;
    }


    div:nth-child(2){
        font-size: 1.37rem;
        font-weight: 200
    }

    div:nth-child(3){
        font-size: 0.87rem;
        color: var(--colorSecondary);
        margin-top: 16px
    }

    button{
        background-color: var(--blue1);
        color: var(--white);
        padding: 6px 10px;
        border-radius: 4px;
        font-weight: 500;
        font-size: 0.87rem;
        margin-top: 24px;
    }
`

export const MessageInfo = styled.div`
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center
`

export const Headerr = styled.div`
     
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
    border-bottom: 1px solid var(--border)
`

export const User = styled.div`
    font-size: 1rem;
    font-weight: var(--fontWeight1);
    display: flex;
    align-item: center
`