import React, {useState} from 'react';
import './App.css';
import colors from './colors.data'
import Circle from './components/Circle'

function App() {
  const [componentManagedColors, setComponentManagedColors] = useState(colors) // the value given to useState is the default value

  function addRandom(event) {
    // generate random color
    const color = '#' + Math.random().toString(16).substr(2,6)

    // copy the "componentManagedColors" into an new array, (because React doesn't allow direct mutations of states)
    const newColors = [...componentManagedColors]

    // add our new generated color to the copied array
    newColors.push(color)

    // Call the setter function "setComponentManagedColors()" from state, to update the "componentManagedColors".
    // With the call of "setComponentManagedColors()" the "componentManagedColors" gets updated.
    // And, React is taking care about re-rendering our component view in the browser.
    setComponentManagedColors(newColors)
  }

  return (
    <div className="App">
      <button onClick={addRandom}>Add Random</button>
      <ul>
        {
            // here we want to use our "componentManagedColors" state
            componentManagedColors.map((color, index) => (
            <li key={index}>
              <Circle color={color}/>
            </li>
          ))
        }
      </ul>

    </div>
  );
}

export default App
