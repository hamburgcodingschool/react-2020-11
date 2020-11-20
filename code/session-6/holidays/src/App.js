import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [holidays, setHolidays] = useState(null);

  useEffect(() => {
    axios.get('/v2/publicholidays/2020/DE').then(response => {
      setHolidays(response.data);
    });
  }, []);

  return (
    <div className="App">
      { holidays && holidays.map(holiday => (
        <div>
          {holiday.name} is at {holiday.date} since {holiday.launchYear}
        </div>
      ))}
    </div>
  );
}

export default App;
