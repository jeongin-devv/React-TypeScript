import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { StoreProvider } from './Context';
import App from './App'

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>
  , 
  document.querySelector('#root')
);