import React, { Component } from 'react'

class WordBlock extends Component {
  render() {
    let { letter, id, dragStartHandler, dragOverHandler, dropHandler } = this.props;
    return (
      <li style={{width: "10%", textAlign: "center", border: "3px solid orange"}}
        draggable="true"
        onDragStart={dragStartHandler.bind(this, id)}
        onDragOver={dragOverHandler}
        onDrop={dropHandler.bind(this, id)}>
        <h2>{letter}</h2>
      </li>
    )
  }
}

export default WordBlock
