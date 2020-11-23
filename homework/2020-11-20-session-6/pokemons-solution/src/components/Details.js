import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Details = ({pokemons}) => {
  const {name} = useParams()
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    const matchingPoke = pokemons.find(poke => poke.name === name)
    if (matchingPoke) {
      fetch(matchingPoke.url)
      .then(response => response.json())
      .then (data => setPokemon(data))
    }
  }, [name, pokemons])

  return (
    <div>
      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <p>Weight: {pokemon.weight}</p>
          <p>Height: {pokemon.height}</p>
        </div>
      )}
    </div>
  )
}

export default Details
