import React, { useEffect, useState } from 'react';
import './App.css';
import List from './List'

function App() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1000`)
      .then(response => response.json())
      .then(data => {
        setPokemons(data.results)
        setLoading(false)
      })
  }, [])

  return (
    <div className="App">
      {
      loading
        ? <div>loading...</div>
        : <List pokemons={pokemons} />
      }
    </div>
  );
}

export default App;
