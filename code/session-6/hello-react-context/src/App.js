import {useContext} from 'react';
import './App.css';
import ExampleContext from './ExampleContext'

const ChildComponentOne = () => {
  const contextValue = useContext(ExampleContext);
  return <div>
    I'm child component one and my context value is <code>{contextValue}</code>.
  </div>
}

const ChildComponentTwo = () => {
  const contextValue = useContext(ExampleContext);
  return <div>
    I'm child component two and my context value is <code>{contextValue}</code>.
  </div>
}


function App() {
  return (
    <ExampleContext.Provider value={'outer value'}>
      <div className="App">
        <ChildComponentOne/>
        <ExampleContext.Provider value={'another value'}>
          <div>
            <div>
              <ChildComponentTwo/>
            </div>
          </div>
        </ExampleContext.Provider>
      </div>
    </ExampleContext.Provider>
  );
}

export default App;
