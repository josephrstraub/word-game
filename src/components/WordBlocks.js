import React, { Component } from 'react'
import WordBlock from './WordBlock'


class WordBlocks extends Component {
  componentWillReceiveProps(nextProps) {
    let { correctGuess, updateWord } = nextProps;
    if (correctGuess) {
      updateWord();
    }
  }
  dragStartHandler(key, event) {
    console.log(key);
  }
  dropHandler(key, event) {
    event.preventDefault();
    console.log(key);
  }
  dragOverHandler(key, event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move"
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
        <input type="text" onChange={updateGuess}/>
      </div>
    )
  }
}

export default WordBlocks
