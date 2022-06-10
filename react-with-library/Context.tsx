import * as React from 'react';
import { createContext } from 'react';
import { userStore, postStore } from './Store';

export const storeContext = createContext({
  userStore,
  postStore,
})

interface Props {
  children: React.ReactElement;
}

export const StoreProvider: React.FC<Props> = ({children}) => {
  return(
    <storeContext.Provider value={{userStore,postStore}}>
      {children}
    </storeContext.Provider>
  )
}