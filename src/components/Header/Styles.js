import styled from "styled-components";

export const MainHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid var(--border);
    position: fixed;
    width: 100%;
    background-color: white;
    z-index: 150;
`

export const HeaderContainer = styled.div`
    max-width: 975px;
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 150;
    a:first-child{
        display: flex
    }
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: end;
    cursor: pointer;
`

export const InputContainer = styled.div`
    position: relative;
    margin-left: 11em;
    @media (max-width: 643px) {
        display: none;
    }

    input {
        background: var(--backgroundInput);
        width: 268px;
        height: 36px;
        border-radius: 6px;
        border: none;
        outline: none;
        padding-left: 16px;
        ::placeholder{
            color: var(--colorSecondary);
            font-size: 0.9rem;
            font-weight: 300;
        }
    },

`

export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    & > * {
        margin: 0 12px;
        cursor: pointer;
    }
`

export const HomeIcon = styled.div`
     @media (max-width: 795px) {
        display: none;
    }
`

export const InboxIcon = styled.div`

`

export const ExploreIcon = styled.div`
    @media (max-width: 795px) {
        display: none;
    }
`

export const SearchContainer = styled.div`
  
            display: flex;
            align-items: center;
            position: absolute;
            left: 14px;
            top: 9px;
            span{
                margin-left: 6px;
                color: var(--colorSecondary);
                font-size: 0.9rem;
                font-weight: 300;
            }
    
`

export const CloseSearch = styled.div`
    position: relative;
    &:nth-child(1) {
        position: absolute;
        right: 1vw;
        top: 9px;
        cursor: pointer
    }
`

