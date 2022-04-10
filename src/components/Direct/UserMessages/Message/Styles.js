import styled from 'styled-components'

export const MessageContainer = styled.div`
    display: ${props => props.s ? 'block' : 'none'}
`

export const Container = styled.div`
        height: 73vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid var(--border);
    padding-left: 19px;

    img{
        width: 24px;
        height: 24px;
        object-fit: cover;
        border-radius: 50%;
        margin: 0 8px
    }
`

export const Arrow = styled.div`
    display: none;
    @media (max-width: 795px) {
        display: block;
    }

`

export const UserMessage = styled.div`
    display: flex;
    align-items: end;
    margin: 18px;

    img{
        width: 24px;
        height: 24px;
        object-fit: cover;
        border-radius: 50%;
        margin-right: 6px
    }
        
        span{
            border: 1px solid var(--border);
            padding: 13px;
            max-width: 236px;
            min-height: 44px;
            border-radius: 30px;
            font-weight: 400;
            font-size: 0.87rem
        }
`

export const MessageSent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    margin: 15px;

    div{
        display: flex;
        align-items: end;
        padding: 3px;

        img{
            width: 24px;
            height: 24px;
            object-fit: cover;
            border-radius: 50%;
        }
        div{
            background-color: var(--backgroundInput);
            max-width: 236px;
            border-radius: 30px;
            padding: 13px;
            min-height: 44px;
        }
    }
`

export const InputContainer = styled.div`
    min-height: 44px;
    border: 1px solid var(--border);
    position: relative;
    margin: 0 15px;
    border-radius: 30px;

        input{
            width: 100%;
            outline: none;
            border: none;   
            height: 44px;  
            padding-left: 50px;
            border-radius: 25px
        }
`

export const EmoticonContainer = styled.div`
    position: absolute;
    left: 12px;
    top: 10px
`

export const AddImgContainer = styled.div`
    position: absolute;
    right: 53px;
    top: 10px
`

export const LikeContainer = styled.div`
    position: absolute;
    right: 12px;
    top: 10px
`