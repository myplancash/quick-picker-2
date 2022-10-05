import React, { useState } from 'react';
import ColorArea from './components/color-area/ColorArea'
import ColorPicker from './components/color-picker/ColorPicker'
import RandomColor from './components/random-color/RandomColor';

function App() {
  const colors = [
    {
      id: 1,
      colorHex: '#095256',
    },
    {
      id: 2,
      colorHex: '#087f8c',
    },
    {
      id: 3,
      colorHex: '#5aaa95',
    },
    {
      id: 4,
      colorHex: '#86a873',
    },
  ]

  const [hex, setHex] = useState('#7DCEA0');


  const randomHandleClick = (e) => {
    e.preventDefault();
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    const randomColorHex = '#' + randomColor;
    setHex(randomColorHex)
  }

  const handleClick = (color) => {
    setHex(color)
  }

  return (
    <div className='App'>
      <header>
        Color Picker
      </header>
      <main>
        <ColorArea hex={hex} />      
        <ColorPicker
          colors={colors} 
          hex={hex}
          handleClick={handleClick}
        />
        <RandomColor  randomHandleClick={randomHandleClick}/>
      </main>
    </div>
  );
}

export default App;
