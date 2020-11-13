import React from 'react';
import './App.css';
import colors from './colors.data'
import Circle from './components/Circle'


function App() {
  return (
    <div className="App">
      <ul>
        {colors.map(color => (
          <li>
            <Circle color={color}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
