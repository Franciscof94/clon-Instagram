import styled from 'styled-components'

export const SuggestionsContainer = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
        margin-top: 1.25em;

        div{
            display: flex;
            justify-content: space-between;
            font-size: 0.8em;
            font-weight: 500;
            color: var(--colorSecondary);
            margin-bottom: 0.82em;
                &:nth-child(1) {
                    min-width: 200px;
                    font-size: 0.8rem;
                    font-weight: var(--fontWeight1);
                    margin-bottom: 8px;
                }
                &:nth-child(2){
                    text-align: right;
                    color: var(--colorLetter1);
                    font-size: 0.75rem
                }
        }
`

export const UserSuggestions = styled.div`
    img{
        display: block;
        height: 32px;
        width: 32px;
        border-radius: 50%;
        object-fit: cover
    }

    div{
        color: var(--blue1);
        fontWeight1: var(--fontWeight1);
        font-size: 0.75rem;
        line-height: 16px;
        margin: auto 0;
    }
`


export const UserNameContainer = styled.div`
        display: flex;
        flex-direction: column;

        div:nth-child(1){
            color: var(--colorLetter1);
            font-size: 0.82rem;
            font-weight: var(--fontWeight1);
            line-height: 15px
        }
        div:nth-child(2){
            font-size: 0.73rem;
            color: var(--colorSecondary)
        }

`