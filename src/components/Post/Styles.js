import styled from 'styled-components'


export const PostContainer = styled.div`
    border: 1px solid var(--border);
    margin-bottom: 25px;
    background-color: var(--white);
`

export const PostHeader = styled.div`
    div{
        display: flex;
        align-items: center;
        padding: 10px;

        img{
            width: 32px;
            height: 32px;
            border-radius: 50%;
            object-fit: cover
        }

        div{
            font-weight: var(--fontWeight1);
            margin-bottom: 5px;
            color: var(--text3);
            font-size: 0.87rem;
        }
    }
`

export const PostedImage = styled.div`
    img{
        width: 100%
    }
    
`

export const PostIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px;
   div{
       display: flex;
       align-items: center;
       div:first-child{
           padding-right: 12px;
           cursor: pointer;
       };
   }
`

export const CommentIcon = styled.div`
    padding-right: 15px
`

export const SendIcon = styled.div`

`

export const NumberOfLikes = styled.div`
    font-weight: var(--fontWeight1);
    margin-bottom: 5px;
    color: var(--text3);
    font-size: 0.87rem;
    margin-left: 13px
`

export const CaptionContainer = styled.div`
    h4{
        strong{
            font-weight: var(--fontWeight1);
            margin-bottom: 5px;
            color: var(--text3);
            font-size: 0.87rem;
        }
    }

`

export const FormContainer = styled.div`
        height: 55px;
        border-top: 1px solid var(--border);
        background: white;
        display: flex;
        align-items: center;
        div{
            margin-left: 15px
        }
    
    input{
        width: 92%;
        height: 45px;
        outline: none;
        border: none;
        padding-left: 15px
    }
`

export const Button = styled.button`
    background-color: var(--white);
    color: ${props => props.disabled ? '#CDEAFD' : 'var(--blue1)'};
    font-size: 0.87rem;
    line-height: 18px;
    font-weight: var(--fontWeight1);
    margin-right: 15px;
    cursor: pointer
`

export const CommentContainer = styled.div`
    margin: 0 0 15px 12px;

    div:last-child{

        h4{
            span{
                font-weight: var(--fontWeight1);
                margin-bottom: 5px;
                color: var(--text3);
                font-size: 0.87rem;
            }
        }
            
    }
            
`
