import styled from 'styled-components';


export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.8em;
    margin-bottom: 0.85em;
    @media (max-width: 768px) {
        display: none;
    }
    
    a{
        text-align: right;
        width: 100%;
        text-decoration: none;
        color: var(--blue1);
        font-weight: var(--fontWeight1);
        font-size: 0.73rem
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1em;
    max-width: 180px;

    span:nth-child(1) {
        font-weight: var(--fontWeight1);
        margin-bottom: 5px;
        color: var(--text3);
        font-size: 0.84rem;
    }
    span:nth-child(2) {
        font-weight: 400;
        color: var(--text2);
        ${'' /* font-size: 0.75rem; */}
    }
    
`