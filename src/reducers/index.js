import words from '../data/words.json'
import _ from 'lodash'
import { getWordChain } from '../actions'
import { arrayMove } from 'react-sortable-hoc'


const initialState = {
  word: null,
  definition: "",
  blocks: [],
  wordChain: null,
  nextChain: null,
  nextHint: 0
}

const wordsApp = (state = initialState, action) => {
  switch (action.type) {
    case 'START_GAME':
      let word = _(words).keys().filter(word => word.length === 6).sample()
      let nextWord = _(words).keys().filter(word => word.length === 6).sample()
      return {
        ...state,
        word,
        blocks: _.shuffle(word.split("")),
        definition: words[word],
        wordChain: getWordChain(word, 4),
        nextChain: getWordChain(nextWord, 4)
      }
    case 'NEW_WORD':
      if ( state.wordChain.indexOf(state.word) + 1 === state.wordChain.length ) {
        wordsApp(state, {type: 'NEW_CHAIN'})
      } else {
        let newWord = state.wordChain[state.wordChain.indexOf(state.word) + 1]
        return {
          ...state,
          word: newWord,
          blocks: _.shuffle(newWord.split("")),
          definition: words[newWord],
          nextHint: 0
        }
      }
    case 'SHUFFLE_WORD':
      return {
        ...state,
        blocks: [
          ...state.blocks.slice(0, state.nextHint),
          ..._.shuffle(state.blocks.slice(state.nextHint))
        ]
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
        nextHint: 0
      }
    case 'ON_SORT_END':
      return {
        ...state,
        blocks: arrayMove(state.blocks, action.oldIndex, action.newIndex)
      }
    case 'GIVE_HINT':
      let hintLetter = state.word[state.nextHint]
      let oldIndex = state.blocks.indexOf(hintLetter, state.nextHint)
      return {
        ...state,
        blocks: arrayMove(state.blocks, oldIndex, state.nextHint),
        nextHint: state.nextHint + 1
      }
    default:
      return state
  }
}

export default wordsApp
