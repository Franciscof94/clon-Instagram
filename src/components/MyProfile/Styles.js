import styled from 'styled-components'

export const MyProfileContainer = styled.div`
    background-color: var(--background-grey);
    height: 100vh;
`

export const Container = styled.div`
        max-width: 935px;
        @media (max-width: 795px) {
               max-width: 400px
        }
        margin: 0 auto;  
        padding-top: 55px;  
`

export const InfoContainer = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    padding: 22px 0;
    @media (max-width: 795px) {
        grid-template-columns: 30% 70%;
        position: relative
    }
`

export const ProfileIconContainer = styled.div` 
    div{
        margin-left: 35px;
        @media (max-width: 795px) {
        margin-left: 20px
    }
        img{
            @media (max-width: 795px) {
                width: 98px;
                height: 98px
        }
        }
    }
        
`

export const Info = styled.div`
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 2em;
    div{
        display: flex;
        justify-content: spac-between;
        display: flex;
        span{
            font-weight: var(--fontWeight1);

        }
    }


`

export const Username = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 795px) {
        flex-direction: column;
        align-items: start;
    }
    h2{
        font-size: 1.75rem;
        line-height: 32px;
        font-weight: 300
    }

   
    }
`

export const Followers = styled.div`
    @media (max-width: 795px) {
        position: absolute;
        left: 0;
        bottom: 5px;
    }
   div{
     padding-right: 19px; 

    @media (max-width: 795px) {
        padding-left: 17px;
    }
   }
`


export const Name = styled.div`
    font-weight: var(--fontWeight1);
    font-size: 1rem;
`

export const Button = styled.button`
    border: 1px solid var(--border);
    background-color: transparent;
    margin: 0 11px 0 8px;
    @media (max-width: 795px) {
        margin: 9px 11px 0 0;
    }
    padding: 5px 9px;
    border-radius: 4px;
    font-size: 0.87rem;
    font-weight: 600;
    cursor: pointer
}
`

export const PublicationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    border-top: 1px solid var(--border);
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 12px;
    }
`

export const Title = styled.div`
    font-weight: 500;
    font-size: 0.9rem;
    width: 141px;
    border-top: 1px solid black
`

export const Description = styled.div`
    font-size: 0.78rem;
    font-weight: 500;
    color: var(--colorSecondary);
    span{
        color: var(--text1)
    }
`