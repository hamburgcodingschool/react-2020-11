import React, { useState, useEffect } from 'react'

const Details = () => {
  const [pokemonDetails, setPokemonsDetails] = useState(null)

  useEffect(() => {
    // get pokemons name from the url. Remember that you can use useParams from react-router-dom.
    // get pokemons url for more details from stored data in the local storage
    // find the pokemon within the array of pokemons with javascript Array.prototype.find() function
    // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/find

    // fetch more details from the pokemons API (use the url within the pokemon stored data)
    // finally set pokemonsDetails info and use it in the template.
  })

  return (
    <div>
      {pokemonDetails && (
        <div>
          <h2>{/* poke name */}</h2>
          <p>Weight: ...</p>
          <p>Height: ...</p>
        </div>
      )}
    </div>
  )
}

export default Details
