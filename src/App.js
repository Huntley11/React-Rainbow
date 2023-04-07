import React, { useState } from 'react'
// Make sure to import the component we just built:
import ColorBlock from './components/ColorBlock'
import ColorForm from './components/ColorForm'

let DEFAULT_COLOR = [
  'violet', 'blue',
  'lightblue', 'green',
  'greenyellow', 'yellow',
  'orange', 'red'
]

function App(){
    let [colors, setColors] = useState(DEFAULT_COLOR);

    const addToColors = newColor => {
      setColors([...colors,newColor])
    }

    let colorMap = colors.map((color, index) => {
        return (
            <ColorBlock color={color} key={index}/>
        )
    })

    return (
        <div className="App">
            {colorMap}
            <ColorForm addToColors = {addToColors}/>
        </div>
    )
}

export default App;
