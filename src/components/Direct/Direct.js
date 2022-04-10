import React, { useEffect, useState } from 'react'
import { Container, DirectContainer, FirstColumn, Headerr, Inbox, LastColumn, MessageInfo, User, A } from './Styles'
import { IoIosArrowDown } from 'react-icons/io'
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { ReactComponent as NewMessage} from "../Images/newMessage.svg";
import DirectIcon from '../Images/directBig.png'
import UserMessages from './UserMessages/UserMessages';
import Message from './UserMessages/Message/Message';
import database from '../../firebase';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header/Header'


const Direct = () => {
    const[direct, setDirect] = useState(false)
    const[user, setUser] = useState([])
    const[index, setIndex] = useState([])
    const[style, setStyle] = useState(false)


    useEffect(() => {
        database.collection('messages').orderBy('timestamp', 'desc').onSnapshot(x => {
            setUser(x.docs.map(doc => ({
                messages: doc.data(),
                id: doc.id,
            })))
        })
    }, [])


  return (
    <DirectContainer>
        <Header />
        <Container>
        <A>
        <FirstColumn styles={style}>
                <Headerr>
                    <Link to='/'>
                        <MdOutlineArrowBackIos fontSize={22}/>
                    </Link>
                    <User>
                        default <IoIosArrowDown fontSize={22} /> 
                    </User>
                    <div>
                        <NewMessage />
                    </div>
                </Headerr>
                <Inbox>
                    {
                        user.map((u, i) => (
                            <UserMessages key={u.id} user={u} setIndex={setIndex} setDirect={setDirect} setStyle={setStyle}/>
                        ))  
                    }
                </Inbox>
            </FirstColumn>
            {
                
            !direct ?

            <LastColumn>
                    <MessageInfo>
                        <span><img src={DirectIcon} alt='iconDirect' /></span>
                        <div>Tus mensajes</div>
                        <div>Envía fotos y mensajes privados a un amigo o grupo.</div>
                        <button>Enviar mensaje</button>
                    </MessageInfo>
            </LastColumn>

            :

            <Message index={index} setStyle={setStyle} s={style}/>
            }
            
        </A>
        </Container>
    </DirectContainer>
  )
}

export default Direct