import * as React from 'react';
import { createContext } from 'react';
import { userStore, postStore } from './Store/Store';
import { counterStore } from './Store/CounterStore';
import { Basket } from './Store/Basket';

export const storeContext = createContext({
  userStore,
  postStore,
  counterStore,
  // Basket,
})

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

export const StoreProvider: React.FC<Props> = ({children}) => {
  return(
    <storeContext.Provider value={{userStore,postStore,counterStore}}>
      {children}
    </storeContext.Provider>
  )
}