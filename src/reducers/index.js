import { combineReducers } from 'redux';
import words from '../mock/words'

const initialState = {
  word: words[0].word,
  guess: "",
  correctGuess: false
}

const wordsApp = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_GUESS':
      return {
        ...state,
        guess: action.guess,
        correctGuess: action.guess === state.word
      }
    case 'NEW_WORD':
      return {
        ...state,
        word: words[1].word,
        correctGuess: false
      }
    default:
      return state
  }
}

// const wordsApp = combineReducers({
//   correctGuess
// })

export default wordsApp
