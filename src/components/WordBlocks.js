import React, { Component } from 'react'
import WordBlock from './WordBlock'


class WordBlocks extends Component {
  constructor() {
    super();
    this.dragStartHandler = this.dragStartHandler.bind(this);
    this.dropHandler = this.dropHandler.bind(this);
    this.dragOverHandler = this.dragOverHandler.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    let { correctGuess, updateWord } = nextProps;
    if (correctGuess) {
      updateWord();
    }
  }
  dragStartHandler(key, event) {
    console.log(key);
    console.log(this.props);
    this.props.updateSelectedLetter(key);
  }
  dropHandler(key, event) {
    event.preventDefault();
    this.props.updateGuess(key);
  }
  dragOverHandler(event) {
    event.preventDefault();
  }
  render() {
    let { guess, updateGuess } = this.props;
    let blocks = guess.split("").map((letter, index) => (
      <WordBlock letter={letter} key={index} id={index} dragStartHandler={this.dragStartHandler}
        dropHandler={this.dropHandler} dragOverHandler={this.dragOverHandler}/>
    ))
    return (
      <div>
        <ul style={{display: "flex", listStyleType: "none", padding: "0"}}>{blocks}</ul>
      </div>
    )
  }
}

export default WordBlocks
