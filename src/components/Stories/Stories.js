import React, { useEffect, useState } from 'react'
import HorizontalScroll from "react-scroll-horizontal";
import database from '../../firebase';
import Story from '../Story/Story';
import { StoriesContainer } from './Styles'

const Stories = () => {


  const[userStory, setUserStory] = useState([])

  useEffect(() => {
    database.collection('stories').onSnapshot(x => {
        setUserStory(x.docs.map(doc => ({
            stories: doc.data(),
            id: doc.id
        })))
    })
}, [])

  return (
      <StoriesContainer>
        <HorizontalScroll reverseScroll={true}>
            {
            userStory.map(s => (
              <Story id={s.id}
                     key={s.id} 
                     name={s.stories.username}
                     profileImg={s.stories.profileImg}
                     storyBorder={s.stories.storyBorder}
                     storyImg={s.stories.storyImg}
                     username={s.stories.username}
                     userStory={userStory}
              />
            ))
            }
        </HorizontalScroll>
      </StoriesContainer>
  )
}

export default Stories