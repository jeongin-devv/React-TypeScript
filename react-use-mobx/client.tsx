import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { StoreProvider } from './Context';
import App from './App';
import Calculator from './Calculator';

Calculator();

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>
  , 
  document.querySelector('#root')
);