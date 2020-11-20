import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [joke, setJoke] = useState(null);
  const [error, setError] = useState(null);

  const loadAJoke = () => {
    setError(null);
    setJoke(null);
    axios.get('https://official-joke-api.appspot.com/random_joke').then(response => {
      // response.data contains the result from the api
      console.log(response.data);
      setJoke(response.data);
      setError(null)
    }).catch(error => {
      console.error(error);
      setError(error);
      setJoke(null);
    })
  };

  useEffect(() => {
    loadAJoke();
  }, []);

  let renderedJoke = <p>Loading...</p>;
  if (joke !== null) {
    renderedJoke = (
      <>
        <p>{joke.setup}</p>
        <p>{joke.punchline}</p>
      </>
    );
  } else if(error !== null) {
    renderedJoke = <p>{error.message}</p>
  }

  return (
    <div className="App">
      {renderedJoke}
      <button onClick={loadAJoke}>Show me another!</button>
    </div>
  );
}

export default App;
