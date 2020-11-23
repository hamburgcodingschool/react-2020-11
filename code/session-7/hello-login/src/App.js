import Login from './Login';
import './App.css';

function App() {

  const handleLogin = (token) => {
    alert('Login with token='+token);
  }

  return (
    <div className="App">
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
