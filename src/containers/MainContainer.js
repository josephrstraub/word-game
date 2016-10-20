import React from 'react'
import { connect } from 'react-redux'
import { updateWord, startGame, onSortEnd, shuffleWord, giveHint } from '../actions'
import WordBlocks from '../components/WordBlocks'
import Definition from '../components/Definition'

const MainContainer = (props) => (
  <div>
    <WordBlocks {...props} />
    <Definition {...props} />
    <div className="button-container">
      <button onClick={props.giveHint}>hint</button>
      <button onClick={props.shuffleWord}>shuffle</button>
    </div>
  </div>
)

const mapStateToProps = (state) => {
  let { word, blocks, guess, definition, nextHint } = state
  return {word, blocks, guess, definition, nextHint }
}

const mapDispatchToProps = ({updateWord, startGame, onSortEnd, shuffleWord, giveHint })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer)
