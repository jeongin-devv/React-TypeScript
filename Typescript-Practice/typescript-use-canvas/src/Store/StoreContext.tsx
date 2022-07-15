import React, { createContext, useMemo } from 'react';
import { canvasStore } from './CanvasStore';

export const storeContext = createContext({
  canvasStore,
});

interface Props {
  children : React.ReactElement | React.ReactElement[];
}

export const StoreProvider: React.FC<Props> = ({ children }) => {
  const value = useMemo(() => ({
    canvasStore,
  }), []);
  return (
    <storeContext.Provider value={value}>
      {children}
    </storeContext.Provider>
  );
};
