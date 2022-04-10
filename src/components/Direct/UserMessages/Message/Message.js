import React, { useState } from 'react'
import { AddImgContainer, Arrow, Container, EmoticonContainer, Header, InputContainer, LikeContainer, MessageContainer, MessageSent, UserMessage } from './Styles'
import { ReactComponent as Emoticon } from "../../../Images/emoticon.svg";
import { ReactComponent as AddImg } from "../../../Images/addImg.svg";
import { MdFavoriteBorder } from 'react-icons/md'
import database from '../../../../firebase';
import firebase from "firebase/compat/app";
import { MdOutlineArrowBackIos } from 'react-icons/md';

const Message = ({ index, setStyle, s }) => {
  const[message, setMessage] = useState('')
  const[addMessage, setAddMessage] = useState({
    messages: [],
  })



  if(index.id) {
    database.collection('messages').doc(index.id)
        .collection('usermessages').orderBy('timestamp', 'asc').onSnapshot(
            (snapshot) => {
                setAddMessage({
                    messages: snapshot.docs.map(
                        (doc) => ({
                            message: doc.data(),
                            id: doc.id,
                        })
                    )
                    
                })
                
            }
        )
} 


  const add = (e) => {
    e.preventDefault();

     if(index.id) {

      database.collection('messages').doc(index.id).collection('usermessages').add(
        {
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            text: message,
        }
        
    );
    setMessage('')
     }

}


  return (
    <MessageContainer s={s} >
        <Header>
            <Arrow onClick={() => setStyle(false)}><MdOutlineArrowBackIos fontSize={22} /></Arrow>
            <img src={index.messages.img} alt='userImg' />
            <div>{index.messages.username}</div> 
        </Header>
        <Container>
          <div>
            <UserMessage>
              <img src={index.messages.img} alt='userImg' />
              <span>{index.messages.message}</span>
            </UserMessage>
            <MessageSent>
              {
                addMessage.messages.map(m => (
                  <div key={m.id}>
                    <div>{m.message.text}</div>
                  </div>
                ))
              }
            </MessageSent>
          </div>
          <InputContainer>
          <div>
          <form onSubmit={add}>
            <input type='text' placeholder='Envía un mensaje...'  onChange={(e) => setMessage(e.target.value)} />
                <div>
                    <EmoticonContainer>
                      <Emoticon />
                    </EmoticonContainer>
                    <AddImgContainer>
                        <AddImg />
                    </AddImgContainer>
                    <LikeContainer>
                        <MdFavoriteBorder fontSize={27}/>
                    </LikeContainer>
                </div>
          </form>
          </div>
          </InputContainer>
        </Container>
    </MessageContainer>
  )
}

export default Message