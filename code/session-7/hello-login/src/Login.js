import { useState } from 'react';

const Login = ({ onLogin }) => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const changeUsername = (event) => {
    const value = event.currentTarget.value
    setUsername(value)
  }

  const changePassword = (event) => {
    const value = event.currentTarget.value
    setPassword(value)
  }

  const handleLogin = (event) => {
    event.preventDefault();

    // TODO: do login

    const token = 'todo login and get token'

    onLogin(token);
  }

  return (
    <form>
      <h3>Username:</h3>
      <input type="text" value={username} onChange={changeUsername}/>
      <h3>Password:</h3>
      <input type="password" value={password} onChange={changePassword}/>
      <br/>
      <button type="submit" onClick={handleLogin}>Login</button>
    </form>
  );
}

export default Login;