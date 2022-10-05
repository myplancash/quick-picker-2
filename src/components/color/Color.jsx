import { ColorDiv, RandomColor } from './Color.styles';


const Color = ({ color, handleClick }) => {
  const { colorHex } = color;
  return (
    <>
      <ColorDiv onClick={() => handleClick(colorHex)}  
        color={colorHex}
        htmlFor='inputColor'
      >{colorHex}</ColorDiv>
    </>
  )
}

export default Color