export const updateGuess = (event) => ({
  type: 'UPDATE_GUESS',
  guess: event.target.value
})

export const updateWord = () => ({
  type: 'NEW_WORD'
})
