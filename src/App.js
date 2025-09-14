//
import './App.css';
import { useEffect, useState } from 'react';
import { fetchAdmissions } from './utils/api';
import MajorSelector from './components/MajorSelector';
import DataTable from './components/DataTable';
//import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Graphs from './components/Graphs';
import { useParams } from 'react-router-dom';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAdmissions().then(setData);
  }, []);

  if (!data || data.length === 0) {
    return <p>Loading...</p>;
  }

  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<MajorSelector data={data}/>} />
        <Route path="/data/:major" element={<Graphs data={data}/>}/>
      </Routes>
    </BrowserRouter>
   
  </div>
  );
}

export default App;
/*
 
    <MajorSelector data={data}/>
    <h1>{major}</h1>
     <AdmissionGraph data={data}/>
      <DataTable data={data}/>

      */