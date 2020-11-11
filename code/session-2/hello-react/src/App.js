import React from 'react';
import './App.css';
import Section from './Section';

function App(props) {
  return (
    <div>
      <Section heading="hello">
        <span style={{color: 'red'}}>text</span>
        <span style={{color: 'blue'}}>text</span>
        <span style={{color: 'pink'}}>text</span>
      </Section>
      <p>this is some text. this is some text. this is some text. this is some text</p>
    </div>
  );
}

export default App;
