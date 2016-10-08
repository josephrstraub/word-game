import { combineReducers } from 'redux';
import words from '../mock/words'

const initialState = {
  word: words[0].word,
  guess: "",
  correctGuess: false
}

const guess = (state = initialState.guess, action) => {
  switch (action.type) {
    case 'UPDATE_GUESS':
      return action.guess
    default:
      return state
  }
}

const word = (state = initialState.word, action) => {
  switch (action.type) {
    case 'NEW_WORD':
      return words[1].word
    default:
      return state
  }
}

const correctGuess = (state = false, action) => {
  switch (action.type) {
    case 'UPDATE_GUESS':
      if ( action.guess === word(undefined, action) ) {
        return true
      }
      return state
    default:
      return state
  }
}

const wordsApp = combineReducers({
  guess,
  word,
  correctGuess
})

export default wordsApp
