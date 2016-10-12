import React, { Component } from 'react'
import WordBlock from './WordBlock'


class WordBlocks extends Component {
  constructor() {
    super()
    this.dragStartHandler = this.dragStartHandler.bind(this)
    this.dropHandler = this.dropHandler.bind(this)
    this.dragEnterHandler = this.dragEnterHandler.bind(this)
  }
  componentWillMount() {
    this.props.startGame()
  }
  componentWillReceiveProps(nextProps) {
    let { correctGuess, updateWord } = nextProps;
    if (correctGuess) {
      window.setTimeout(updateWord, 3000)
    }
  }
  dragStartHandler(key, event) {
    console.log(this.props)
    this.props.updateSelectedLetter(key)
  }
  dropHandler(key, event) {
    event.preventDefault()
    this.props.updateGuess(key)
  }
  dragEnterHandler(key, event) {
    event.preventDefault()
    this.props.updateGuess(key)
  }
  render() {
    let { guess, correctGuess, hoverIndex } = this.props;

    let blocks = guess.split("").map((letter, index) => (
      <WordBlock letter={letter} correctGuess={correctGuess} key={index} id={index} dragStartHandler={this.dragStartHandler}
        dropHandler={this.dropHandler} dragEnterHandler={this.dragEnterHandler}/>
    ))
    return (
      <div>
        <ul style={{display: "flex", listStyleType: "none", justifyContent: "center", padding: "0"}}>{blocks}</ul>
      </div>
    )
  }
}

export default WordBlocks
