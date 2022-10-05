import React, { useState } from 'react';
import Color from '../color/Color';
import { ColorPickerDiv } from './ColorPicker.styles';

const ColorPicker = ({ colors, handleClick }) => {


  return (
    <ColorPickerDiv>
      {colors.map((color) => (
        <Color 
          key={color.id}
          color={color}
          handleClick={handleClick}
        /> 
      ))}
    </ColorPickerDiv>
  )
}

export default ColorPicker