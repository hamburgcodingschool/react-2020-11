import React from 'react';
import './App.css';
import Button from './button/button'

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Button />
        </li>
        <li>
          <Button />
        </li>
        <li>
          <Button />
        </li>
        <li>
          <Button />
        </li>
      </ul>

      The following button shouldn't get applied the styles from the Button Component.<br />
      <button className="button">a HTML Button</button>
    </div>
  );
}

export default App;
