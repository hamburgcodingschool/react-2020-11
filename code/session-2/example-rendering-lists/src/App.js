import React from 'react';
import './App.css';

const data = [1, 2, 3, 4, 5]

function App() {
  return (
    <div className="App">
      <h2>Rendering lists using the array map function</h2>
      <code>
        data.map(item => {})
      </code>
      <ul>
        {data.map(item => {
          return (
            <li>{item}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default App;
