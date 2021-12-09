import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';

import Nav from './Nav';
import Card from './Card';

function App() {
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    const fetchApod = () => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=wfaHMjFCSRHiCgOJuqu8GwMu5kBx51lah26EIr7T')
      .then(res => setPhoto(res.data))
      .catch(err => console.log(err));
    }

    fetchApod();
  }, [])

  return (
    <div className='App'>
      <div className='container'>
        < Nav photo={photo} />
        < Card photo={photo} />
      </div>
    </div>
  );
}

export default App;
