import React from 'react';
import Index from './Pages/Login/Login';
import Screening from './Components/Screening/Screening';
import StatusBar from './Components/StatusBar/StatusBar';
import './App.css';

const App = () => (
  <div className="App">
    <StatusBar />
    <Index />
    <Screening />
  </div>
);

export default App;
