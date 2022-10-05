import React from 'react'
import { ColorAreaDiv } from './ColorArea.styles';

const ColorArea = ({ hex }) => {
  return (
    <ColorAreaDiv hex={hex}>Color: {hex}</ColorAreaDiv>
  )
}

export default ColorArea