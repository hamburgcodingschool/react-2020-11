import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Details from './components/Details';

function App() {
  const [loading, setLoading] = useState(true)
  const pokesFromLocalStorage = JSON.parse(localStorage.getItem('pokes'))
  const [pokemons, setPokemons] = useState(pokesFromLocalStorage || [])

  const fetchPokemons = () => {

    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then(response => response.json())
      .then(data => {
        localStorage.setItem("pokes", JSON.stringify(data.results));
        setPokemons(data.results);
        setLoading(false);
      }).catch(reason => {
        setLoading(false);
        console.log(reason)
      });
  }

  useEffect(fetchPokemons, [])

  return (
    <Router>
      <div className="App">
        <section className="aside">
          {
            loading
              ? <div>loading...</div>
              : <List pokemons={pokemons} />
          }
        </section>
        <section className="details">
          <div className="detailsContainer">
            <Route path="/details/:name">
              <Details pokemons={pokemons} />
            </Route>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
