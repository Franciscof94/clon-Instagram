import React, { useState } from 'react'
import database from '../../firebase'
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Button, CaptionContainer, CommentContainer, CommentIcon, FormContainer, NumberOfLikes, PostContainer, PostedImage, PostHeader, PostIcons, SendIcon } from './Styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { ReactComponent as Comment } from "../Images/comment.svg";
import { ReactComponent as Send } from "../Images/send.svg";
import { ReactComponent as Save } from "../Images/save.svg";
import { ReactComponent as Emoticon } from "../Images/emoticon.svg";
import { MdVerified } from 'react-icons/md'
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

const Post = ({imgsrc, profileImg, username, caption, numberOfLike, like, key, id}) => {
    const[comment, setComment] = useState('')
    const tab = '\u00A0';
    const[liked, setLiked] = useState(false)
    const {user} = useAuth()


    const[post, setPost] = useState({
        liked: like,
        bookmarked: false,
        showCommentInput: false,
        comments: []
    })
    

    if(id) {
        database.collection('posts').doc(id)
            .collection('comments').orderBy('timestamp', 'asc').onSnapshot(
                (snapshot) => {
                    setPost({
                        comments: snapshot.docs.map(
                            (doc) => ({
                                comment: doc.data(),
                                id: doc.id
                            })
                        )
                        
                    })
                    
                }
            )
    } 


    const addComment = (e) => {
        e.preventDefault();
        
         if(!comment) return; 

        database.collection('posts').doc(id).collection('comments').add(
            {
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                text: comment,
            }
            
        );
        setComment('')
    }


    
    const addLike = async () => {

        await database.collection('posts').doc(id).update(
            {
                numberOfLike: numberOfLike + 1,
                like: true
            }
            
        ); 
        
    }

    const removeLike = async () => {

       await database.collection('posts').doc(id).update(
            {
                numberOfLike: numberOfLike - 1,
                like: false
            }
            
        ); 
        
    }


  return (
    <PostContainer>
        <PostHeader>
            <div>
                <img src={profileImg} alt='profileImg' />
                <div>{username}</div>
                <MdVerified color='var(--blue1)' fontSize={19}/>
            </div>
        </PostHeader>

        <PostedImage>
            <img src={imgsrc} alt='postImg' />
        </PostedImage>

        <PostIcons>
            <div>
                {
                    !liked && !like ? 
                    <div>
                        <MdFavoriteBorder fontSize={28} onClick={() =>  {addLike(); setLiked(true)}} />
                    </div> 
                    
                    : 
                    
                    <div>
                        <MdFavorite fontSize={28} color='#ED4956' onClick={() => {removeLike(); setLiked(false)}} />
                    </div>
                }
                <CommentIcon>
                    <Comment />
                </CommentIcon>
                <SendIcon>
                    <Send />
                </SendIcon>
                
            </div>
            <Save />
        </PostIcons>
        
        
  
        <NumberOfLikes>
           <div>{numberOfLike}<span>{tab}Me gusta</span></div>
        </NumberOfLikes>

        <CommentContainer>

        <CaptionContainer>
                <h4><strong>{username}<MdVerified color='var(--blue1)' fontSize={19}/></strong>{tab}{tab}{caption}</h4>
        </CaptionContainer>

        
            <div>
                {
                post.comments.map((comment, id) => (
                    <h4 key={id}>
                    <span>{user.displayName ? user.displayName : 'default'}</span>
                    {tab} {tab} 
                    {comment.comment.text}
                    </h4>
                )) 
                
                } 
            </div>
          
        </CommentContainer>
    

        <form>
            <FormContainer>
                <div>
                    <Emoticon />
                </div>
                <input  onChange={(e) => setComment(e.target.value)} placeholder='Añade un comentario...' />
                <Button disabled={!comment}  onClick={(e) => addComment(e)}>Publicar</Button>
            </FormContainer>
        </form>

  
    </PostContainer>
  )
}

export default Post
