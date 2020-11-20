import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import List from './components/List'
import Details from './components/Details';

function App() {
  // fetch pokemons
  // store it into `pokemons` state

  return (
    <Router>
      <div className="App">
        <section className="aside">
          {/* show loading state or List all pokemons if loaded */}
          {/* <List.... */}
        </section>
        <section className="details">
          <div className="detailsContainer">
            {/* Apply Details Route here and List more infos about specific pokemon here, using the <Details /> component */}
            {/* <Route .apply.call.bind. */}
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
