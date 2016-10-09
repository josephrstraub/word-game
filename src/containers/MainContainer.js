import { connect } from 'react-redux'
import { updateGuess, updateWord, updateSelectedLetter } from '../actions'
import WordBlocks from '../components/WordBlocks'

const mapStateToProps = (state) => ({
  word: state.word,
  guess: state.guess,
  correctGuess: state.correctGuess
})

const mapDispatchToProps = ({updateGuess, updateWord, updateSelectedLetter})

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WordBlocks)

export default MainContainer
