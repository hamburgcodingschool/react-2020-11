import {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import AuthContext from './AuthContext'

const UserProfile = () => {
  const token = useContext(AuthContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(
      'https://demo-api-react-2020.herokuapp.com/user/me',
      { headers: {Authorization: `Bearer ${token}`} }
    ).then(response => {
      const userData = response.data;
      setUser(userData);
    })
  }, [token]);

  if (!user) {
    return <div>Loading..</div>;
  }

  return <div>Username: {user.username}</div>
}

export default UserProfile;