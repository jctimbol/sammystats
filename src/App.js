//
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { fetchAdmissions } from './utils/api';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAdmissions().then(setData);
  }, []);

  const major = data[0].major;

  return (
  <div>
    <h1>{major}</h1>
    <ul>
      {data.map(row => {
        const admitRate = 
        row.num_admits && row.num_applicants
            ? ((row.num_admits / row.num_applicants) * 100).toFixed(1)
            : 'N/A'; // if missing data

            return (
              <li key={row.id}>
                {row.year}: {admitRate}%
              </li>
            )
      })}
    </ul>
  </div>
  );
}

export default App;
