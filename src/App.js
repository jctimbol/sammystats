//
import './App.css';
import { useEffect, useState } from 'react';
import { fetchAdmissions } from './utils/api';
import AdmissionGraph from './components/AdmissionGraph';
import MajorSelector from './components/MajorSelector';
import DataTable from './components/DataTable';
import { Link } from 'react-router-dom';

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
    <MajorSelector data={data}/>
    <h1>{major}</h1>
     <AdmissionGraph data={data}/>
      <DataTable data={data}/>
  </div>
  );
}

export default App;
