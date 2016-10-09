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
