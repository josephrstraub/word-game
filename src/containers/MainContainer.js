import React from 'react'
import { connect } from 'react-redux'
import { updateWord, startGame, onSortEnd } from '../actions'
import WordBlocks from '../components/WordBlocks'
import Definition from '../components/Definition'

const MainContainer = (props) => (
  <div>
    <WordBlocks {...props} />
    <Definition {...props} />
  </div>
)

const mapStateToProps = (state) => {
  let { word, blocks, guess, definition } = state
  return {word, blocks, guess, definition }
}

const mapDispatchToProps = ({updateWord, startGame, onSortEnd})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer)
