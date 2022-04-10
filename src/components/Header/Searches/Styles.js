import styled from 'styled-components'

export const MainSearchContainer = styled.div`
        width: 375px;
        height: 362px;
        background-color: var(--white);
        z-index: 58;
        position:absolute;
        left: 0;
        right: 0;
        margin: auto;
        top: 61px;
        border-radius: 6px;
        padding-top: 12px;
        box-shadow: 0 0 5px 1px rgb(215 215 215 / 98%);
        position: fixed
`

export const SearchesContainer = styled.div`
    width: 100%;
    padding: 0 16px
`

export const Recent = styled.div`
    display: flex;
    justify-content: space-between;

    h4{
        color: var(--colorLetter1);
        font-size: 1rem;
        line-height: 24px;
        font-weight: var(--fontWeight1);

    }

    div{
        font-weight: var(--fontWeight1);
        font-size: 0.87rem;
        color: var(--blue1);

    }

`

export const UserContainer = styled.div`
    display: grid;
    grid-template-columns: 59px 263px 20px;
    align-items: center;
    margin: 11px 0;

    img{
        height: 46px;
        width: 46px;
        border-radius: 50%;
        object-fit: cover
    }

    div{
        &:nth-child(1) {
            color: var(--text3);
            font-size: 0.87rem;
            line-height: 18px;
            font-weight: var(--fontWeight1)
        }
        &:nth-child(2){
            font-size: 0.87rem;
            line-height: 18px;
            font-weight: 400;
            color: var(--text2)
        }
    }
`