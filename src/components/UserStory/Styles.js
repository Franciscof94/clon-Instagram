import styled from 'styled-components'

export const UserStoryContainer = styled.div`
        background-color: #1a1a1a;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100vh;
        z-index: 500;

        img{
                height: 630px;
                width: 354px;
                object-fit: cover;
                border-radius: 8px;
                @media (max-width: 795px) {
                width: 100%;
                }
        }
`

export const User = styled.div`
        display: grid;
        grid-template-columns: 38% 30% 32%;
        @media (max-width: 795px) {
        grid-template-columns: none
        }
`

export const Logo = styled.div`
        margin: 25px;
         @media (max-width: 795px) {
        display: none;
        } 
        img{
                width: 103px;
                height: 29px;
                cursor: pointer;
        }
`

export const Story = styled.div`
  
    
`

export const CloseIcon = styled.div`
        display: flex;
        justify-content: end;
        margin: 25px;
        @media (max-width: 795px) {
                position: absolute;
                top: 72px;
                right: 5px;
        }
      
`

export const UserData = styled.div`
        color: var(--white);
        height: 100vh;
        display: flex;
        align-items: center;
`

export const Username = styled.div`
        position: absolute;
        top: 5px;
        margin: 18px 11px;
        @media (max-width: 795px) {
        margin: 85px 11px
        }

        div{
           display: flex;
           align-items: center;
           padding: 0 6px;
        

                img{
                width: 35px;
                height: 35px;
                object-fit: cover;
                border-radius: 50%;    
             }
             div:nth-child(2){
                font-size: 14px;
                font-weight: 400;
                line-height: 18px;
           }
           div:last-child{
                   opacity: 0.5;
                   font-weight: 400;
                   font-size: 0.87rem
           }
        }
`

