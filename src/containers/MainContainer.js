import { connect } from 'react-redux'
import { updateGuess } from '../actions'
import WordBlocks from '../components/WordBlocks'

const mapStateToProps = (state) => ({
  word: state.word,
  guess: state.guess
})

const mapDispatchToProps = ({updateGuess})

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WordBlocks)

export default MainContainer
