//
import './App.css';
import { useEffect, useState } from 'react';
import { fetchAdmissions } from './utils/api';
import AdmissionGraph from './components/AdmissionGraph';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAdmissions().then(setData);
  }, []);

  if (!data || data.length === 0) {
    return <p>Loading...</p>;
  }

  const major = data[0].major;
 
  return (
  <div>
    <h1>{major}</h1>
     <AdmissionGraph data={data}/>
    <ul>
      {data.map(row => {
        const admitRate = 
        row.num_admits && row.num_applicants
            ? ((row.num_admits / row.num_applicants) * 100).toFixed(1) + '%'
            : 'N/A'; // if missing data

            return (
              <li key={row.id}>
                {row.year}: {admitRate}
              </li>
            )
      })}
    </ul>
  </div>
  );
}

export default App;
