import React from 'react';
import './App.css';
import Section from './Section';



function App(props) {

  return (
    <div className="App">
      <h1>Hello from {props.location}</h1>
      <Section text="some text"/>
      <Section text="different text"/>
    </div>
  );
}

export default App;
