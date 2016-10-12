import React, { Component } from 'react'

class WordBlock extends Component {
  render() {
    const { letter, correctGuess, id, dragStartHandler, dragEnterHandler, dropHandler } = this.props;
    return (
      <li style={{width: "10%", textAlign: "center", borderColor: correctGuess ? "green" : "orange"}}
        draggable="true"
        onDragStart={dragStartHandler.bind(this, id)}
        onDragEnter={dragEnterHandler.bind(this, id)}
        onDrop={dropHandler.bind(this, id)}>
        <h2>{letter}</h2>
      </li>
    )
  }
}

export default WordBlock
