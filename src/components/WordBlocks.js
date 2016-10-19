import React, { Component } from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import WordBlock from './WordBlock'

const SortableItem = SortableElement(({letter, isCorrect}) => <li><h1 style={{color: isCorrect ? "green" : "black"}}>{letter}</h1></li>)

const SortableList = SortableContainer(({blocks, word}) => {
  let guess = blocks.join("")
  return (
    <ul>
      {blocks.map((letter, index) =>
        <SortableItem  key={`item-${index}`} index={index} letter={letter} isCorrect={word === guess} />
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
      window.setTimeout(updateWord, 3000)
    }
  }
  render() {
    let  { word, blocks, onSortEnd } = this.props
    console.log(blocks)
    return (
      <div>
        <SortableList word={word} blocks={blocks} onSortEnd={onSortEnd} axis='x' lockAxis='x' />
      </div>
    )
  }
}

export default WordBlocks
