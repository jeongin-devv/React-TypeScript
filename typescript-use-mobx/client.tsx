import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import { StoreProvider } from './Context';
import App from './App';
// import Calculator from './Calculator';
import Basket from './Store/Basket';
import Counter from './Components/Counter';
// Calculator();
Basket();

// ReactDOM.render(
//   <StoreProvider>
//     <App />
//   </StoreProvider>
//   , 
//   document.querySelector('#root')
// );

createRoot(document.querySelector('#root')!).render(
  <StoreProvider>
    <App />
    <Counter />
  </StoreProvider>
);