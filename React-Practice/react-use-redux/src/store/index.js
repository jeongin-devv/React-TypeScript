// import { legacy_createStore as createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter';
import authReducer from './auth';

export const INCREAMENT = 'increment'

// //리듀서를 키값을 선언해주고 여러개 넣을 수 있음
const store = configureStore({
  reducer: { 
    counter: counterReducer,
    auth: authReducer,
  }
});

export default store;

// const counterReducer = (state = initialState, action) => {
//     switch(action.type) {
//       case 'increment':
//         return {
//           counter: state.counter + 1,
//           showCounter: state.showCounter
//         }
//       case 'increase' :
//         return {
//           counter: state.counter + action.amount,
//           showCounter: state.showCounter
//         }
//       case 'decrement' :
//         return {
//           counter: state.counter - 1,
//           showCounter: state.showCounter
//         }
//       case 'toggle' :
//         return {
//           counter: state.counter,
//           showCounter: !state.showCounter
//         }
//       default : 
//         return {
//           counter: 0,
//           showCounter:false
//         }
//     }
  
//     return state;
//   };
  
//   const store = createStore(counterReducer);

//   export default store;