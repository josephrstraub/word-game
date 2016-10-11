import React from 'react'

const Definition = ({ definition, word }) => {
  definition = definition.replace(RegExp(word, "ig"), "________")
  return <h2 style={{textAlign: "center"}}>{definition}</h2>
}

export default Definition
