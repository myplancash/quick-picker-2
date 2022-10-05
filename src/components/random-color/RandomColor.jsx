import { RandomButton } from "./RandomColor.styles";


const RandomColor = ({randomHandleClick}) => {
  return (
    <RandomButton onClick={randomHandleClick}>
      Randomly change color
    </RandomButton>
  )
}

export default RandomColor