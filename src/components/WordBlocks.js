import React from 'react'
import WordBlock from './WordBlock'

const WordBlocks = ({ word, updateGuess }) => {
  let blocks = word.split("").map((letter, index) => <WordBlock letter={letter} key={index}/>)
  return (
    <div>
      <input type="text" onChange={updateGuess}/>
    </div>
  )
}

export default WordBlocks
