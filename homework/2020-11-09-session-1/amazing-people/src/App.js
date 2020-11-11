import React from 'react';
import './App.css';
import List from './components/list/List';
import people from './people.data'

function App() {
  return (
    <div className="App">
      <List people={people} />
    </div>
  );
}

export default App;
