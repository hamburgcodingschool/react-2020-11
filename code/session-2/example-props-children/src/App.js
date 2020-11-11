import React from 'react';
import appStyle from './App.module.css';
import Box from './Box';


function App() {
  return (
    <div className={appStyle.App}>

      <Box>
        <h2>Headline of the Box</h2>
        <p>The box contains some text....</p>
      </Box>

      <Box>
        Hallo
      </Box>
    </div>
  );
}

export default App;
