import {useState} from 'react';
import axios from 'axios';

const Login = ({onLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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

    axios.post(
      'https://demo-api-react-2020.herokuapp.com/login',
      {username, password}
    ).then(response => {
      const {token} = response.data;
      onLogin(token);
    })
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