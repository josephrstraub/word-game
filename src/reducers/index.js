import words from '../data/words.json'
import _ from 'lodash'
import { getWordChain } from '../actions'

const initialState = {
  word: null,
  definition: "",
  guess: "",
  correctGuess: false,
  selectedLetter: 0,
  wordChain: null,
  nextChain: null
}

const wordsApp = (state = initialState, action) => {
  switch (action.type) {
    case 'START_GAME':
      let word = _(words).keys().filter(word => word.length === 6).sample()
      let nextWord = _(words).keys().filter(word => word.length === 6).sample()
      return {
        ...state,
        word,
        definition: words[word],
        wordChain: getWordChain(word, 4),
        nextChain: getWordChain(nextWord, 4),
        guess: _.shuffle(word).join("")
      }
    case 'UPDATE_GUESS':
      let newGuess
      if (action.key < state.selectedLetter) {
        newGuess = state.guess.slice(0, action.key) + state.guess[state.selectedLetter] + state.guess[action.key] + state.guess.slice(action.key + 1, state.selectedLetter) + state.guess.slice(state.selectedLetter + 1)
      } else if (action.key > state.selectedLetter) {
        newGuess = state.guess.slice(0, state.selectedLetter) + state.guess.slice(state.selectedLetter + 1, action.key) + state.guess[action.key] + state.guess[state.selectedLetter] + state.guess.slice(action.key + 1)
      } else {
        return state
      }
      return {
        ...state,
        guess: newGuess,
        correctGuess: newGuess === state.word
      }
    case 'NEW_WORD':
      if ( state.wordChain.indexOf(state.word) + 1 === state.wordChain.length ) {
        wordsApp(state, {type: 'NEW_CHAIN'})
      } else {
        let newWord = state.wordChain[state.wordChain.indexOf(state.word) + 1]
        return {
          ...state,
          word: newWord,
          definition: words[newWord],
          correctGuess: false,
          guess: _.shuffle(newWord).join("")
        }
      }
    case 'NEW_CHAIN':
      console.log("NEW CHAIN is running");
      let nextChainBase = _(words).keys().filter(word => word.length === 6).sample()
      return {
        ...state,
        word: state.nextChain[0],
        definition: words[state.nextChain[0]],
        wordChain: state.nextChain,
        nextChain: getWordChain(nextChainBase, 4),
        guess: _.shuffle(state.nextChain[0]).join(""),
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
