import React, { useEffect, useState } from 'react'
import { PostsContainer } from './Styles'

import database from '../../firebase'
import Post from '../Post/Post'

const Posts = () => {
const [posts, setPosts] = useState([])


    useEffect(() => {
        database.collection('posts').orderBy('timestamp', 'desc').onSnapshot(x => {
            setPosts(x.docs.map(doc => ({
                posts: doc.data(),
                id: doc.id
            })))
        })
    }, [])



    
  return (
    <PostsContainer>
        {
          posts.map(ele => (
            <Post imgsrc={ele.posts.imageSrc}
                  profileImg={ele.posts.profileImg}
                  username={ele.posts.username}
                  caption={ele.posts.caption}
                  numberOfLike={ele.posts.numberOfLike}
                  like={ele.posts.like}
                  key={ele.id}
                  id={ele.id}
            />
          ))  
        }
    </PostsContainer>
  )
}

export default Posts