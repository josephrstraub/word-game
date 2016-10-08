import React, { Component } from 'react'
import WordBlock from './WordBlock'


class WordBlocks extends Component {
  componentWillReceiveProps(nextProps) {
    let { correctGuess, updateWord } = nextProps;
    if (correctGuess) {
      updateWord();
    }
  }
  render() {
    let { word, updateGuess } = this.props;
    let blocks = word.split("").map((letter, index) => <WordBlock letter={letter} key={index}/>)
    return (
      <div>
        <input type="text" onChange={updateGuess}/>
      </div>
    )
  }
}

export default WordBlocks
