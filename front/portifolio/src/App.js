import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Grid } from '@mui/material';
import Skills from './Skills';
import ProfessionalExperience from './ProfessionalExperience';
import AccountMenu from './AccountMenu';
import { useEffect } from 'react';
import { getContacts } from './service';
import { ContactRegister } from './pages/ContactRegister';
import { GuestRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';


function App() {
  useEffect(()=>{
    getContacts()
  },[])
  return (
    <BrowserRouter>
      <GuestRoutes/>
      </BrowserRouter>
  );
}

export default App;
