import {useState} from 'react';
import Login from './Login';
import './App.css';
import Content from './Content'
import AuthContext from './AuthContext'

function App() {

  const [token, setToken] = useState(null);

  const handleLogin = (token) => {
    setToken(token);
  }

  return (
    <div className="App">
      <AuthContext.Provider value={token}>
        {!token && <Login onLogin={handleLogin}/>}
        {token && <Content/>}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
