import logo from './logo.svg';
import './App.css';

import { Grid } from '@mui/material';

import { useEffect } from 'react';
import { getContacts } from './service';
import { ContactRegister } from './pages/ContactRegister';
import { GuestRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';


function App() {
  useEffect(()=>{
    //getContacts()
  },[])
  return (
    <BrowserRouter>
      <GuestRoutes/>
      </BrowserRouter>
  );
}

export default App;
