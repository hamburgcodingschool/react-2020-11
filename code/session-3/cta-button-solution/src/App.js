import React from 'react';
import './App.css';
import Button from './button/button'

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Button>Default</Button>
        </li>
        <li>
          <Button type="cancel">
            Cancel
          </Button>
        </li>
        <li>
          <Button type="abort" disabled={false}>
            Abort
          </Button>
        </li>
        <li>
          <Button type="confirm" disabled={false}>
            Confirm
          </Button>
        </li>
      </ul>
      <strong>Disabled Buttons:</strong>
      <ul>
        <li>
          <Button disabled={true}>Default</Button>
        </li>
        <li>
          <Button type="cancel" disabled={true}>
            Cancel
          </Button>
        </li>
        <li>
          <Button type="abort" disabled={true}>
            Abort
          </Button>
        </li>
        <li>
          <Button type="confirm" disabled={true}>
            Confirm
          </Button>
        </li>
      </ul>

      The following button shouldn't get applied the styles from the Button Component.<br />
      <button className="button">a HTML Button</button>
    </div>
  )
}

export default App
