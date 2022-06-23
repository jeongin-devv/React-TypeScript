import React from 'react';
import CanvasComponent from './Components/Canvas/CanvasComponent';
import { StoreProvider } from './Store/StoreContext';
import './App.css';
import './Styles/CanvasStyles.css';
import ControlsComponent from './Components/Controls/ControlsComponent';

const App = () => (
  <div className="App">
    <StoreProvider>
      <CanvasComponent />
      <ControlsComponent />
    </StoreProvider>
  </div>
);

export default App;
