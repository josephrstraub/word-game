import React, { Component } from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import WordBlock from './WordBlock'

const SortableItem = SortableElement(({letter, isCorrect, disabled}) => (
  <li>
    <h1 style={{color: isCorrect || disabled ? "green" : "black"}}>{letter}</h1>
  </li>
))

const SortableList = SortableContainer(({blocks, word, nextHint}) => {
  let guess = blocks.join("")
  return (
    <ul>
      {blocks.map((letter, index) =>
        <SortableItem
          key={`item-${index}`}
          index={index}
          letter={letter}
          isCorrect={word === guess}
          disabled={index < nextHint} />
      )}
    </ul>
  )
})

class WordBlocks extends Component {
  componentWillMount() {
    this.props.startGame()
  }
  componentWillReceiveProps(nextProps) {
    let { word, blocks, updateWord } = nextProps;
    let guess = blocks.join("")
    if (guess === word) {
      window.setTimeout(updateWord, 1000)
    }
  }
  render() {
    let  { word, blocks, nextHint, onSortEnd } = this.props
    return (
      <div>
        <SortableList word={word} blocks={blocks} nextHint={nextHint} onSortEnd={onSortEnd} axis='x' lockAxis='x' />
      </div>
    )
  }
}

export default WordBlocks
