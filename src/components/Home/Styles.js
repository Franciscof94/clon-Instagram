import styled from 'styled-components'

export const HomeContainer = styled.div`
        background-color: var(--background-grey);

        ${'' /* div{
            display: flex;
            justify-content: left;
            margin: 0 auto;
            max-width: 935px;
        } */}
       
`

export const CardsAndSidebarContainer = styled.section`
        display: flex;
        max-width: 975px;
        @media (max-width: 795px) {
        max-width: 392px;
        }
        margin: 0 auto;
        padding: 0 20px
`