import React, { useState } from 'react'
import { SuggestionsContainer, UserNameContainer, UserSuggestions } from './Styles'
import suggestionsUsers from '../data/suggestionsUsers'

const Suggestions = () => {
  const[follow, setFollow] = useState(-1)

  const handleClick = (suggestion) => {
    setFollow(currentItem => currentItem === -1 ? suggestion : -1)
  } 


  return (
    <SuggestionsContainer>
        <div>
            <div>Sugerencias para ti</div>
            <div>Ver todo</div>
        </div>

      {
        suggestionsUsers.map(suggestion => (
          <UserSuggestions key={suggestion.id}>
            <img src={suggestion.urlImg} alt='suggestions' />
              <UserNameContainer>
                <div>{suggestion.username}</div>
                <div>{suggestion.caption.length > 10 ? suggestion.caption = suggestion.caption.substring(0, 35) + '...' : suggestion.caption}</div>
              </UserNameContainer>
              <div onClick={() => handleClick(suggestion.id)}>{follow === suggestion.id ? suggestion.urlText2 : suggestion.urlText}</div>
          </UserSuggestions>
        ))
      }

    </SuggestionsContainer>
  )
}

export default Suggestions