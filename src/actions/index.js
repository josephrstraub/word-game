import words from '../data/words.json'
import _ from 'lodash'
const SORTED_WORDS = _(words).keys().groupBy((word) => _.sortBy(word).join('')).value()

window._ = _
window.words = words


export const updateGuess = (key) => ({
  type: 'UPDATE_GUESS',
  key
})

export const updateWord = () => ({
  type: 'NEW_WORD'
})

export const updateSelectedLetter = (key) => ({
  type: 'UPDATE_SELECTED_LETTER',
  key
})

function getAnswerPossibilties(word, hint) {
  let variants = getWordVariants(word, hint);
  return _(_.pickBy(SORTED_WORDS, (value, key) => variants.includes(key))).values().flatten().value()

}
function getWordVariants(word, choices) {
  return _(word).map((letter) => {
           return _.map(choices || 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', (replacementLetter) => _.sortBy(word.replace(letter, replacementLetter)).join(''))
         }).flatten().value()
}
// function getDefinitions(word, hint) {
//   let possibilities = getAnswerPossibilties(word, hint);
//   return _.pickBy(words, (def, word) => possibilities.includes(word));
// }
export function getWordChain(startWord, count) {
  let result = [];
  result.push(startWord);
  for (let i=0; i<count-1; i++) {
    let choices = _.without(getAnswerPossibilties(startWord), ...result);
    startWord = _.sample(choices);
    result.push(startWord);
  }
  return result;
}

export const startGame = () => {
  return ({
    type: 'START_GAME'
  })
}

window.getWordChain = getWordChain
