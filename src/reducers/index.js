import words from '../mock/words'
import _ from 'lodash'

const initialState = {
  word: words[0].word,
  guess: _.shuffle( words[0].word.split("") ).join(""),
  correctGuess: false,
  selectedLetter: 0
}

const wordsApp = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_GUESS':
    let newGuess
    if (action.key < state.selectedLetter) {
      newGuess = state.guess.slice(0, action.key) + state.guess[state.selectedLetter] + state.guess[action.key] + state.guess.slice(action.key + 1, state.selectedLetter) + state.guess.slice(state.selectedLetter + 1)
    } else {
      newGuess = state.guess.slice(0, state.selectedLetter) + state.guess.slice(state.selectedLetter + 1, action.key) + state.guess[action.key] + state.guess[state.selectedLetter] + state.guess.slice(action.key + 1)
    }
      return {
        ...state,
        guess: newGuess,
        correctGuess: newGuess === state.word
      }
    case 'NEW_WORD':
      return {
        ...state,
        word: words[1].word,
        correctGuess: false
      }
    case 'UPDATE_SELECTED_LETTER':
      return {
        ...state,
        selectedLetter: action.key
      }
    default:
      return state
  }
}

export default wordsApp
