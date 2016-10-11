import React from 'react'
import { connect } from 'react-redux'
import { updateGuess, updateWord, updateSelectedLetter, startGame } from '../actions'
import WordBlocks from '../components/WordBlocks'
import Definition from '../components/Definition'

const MainContainer = (props) => (
  <div>
    <WordBlocks {...props}/>
    <Definition {...props}/>
  </div>
)

const mapStateToProps = (state) => {
  let { word, guess, correctGuess, definition, selectedLetter } = state
  return {word, guess, correctGuess, definition, selectedLetter}
}

const mapDispatchToProps = ({updateGuess, updateWord, updateSelectedLetter, startGame})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer)
