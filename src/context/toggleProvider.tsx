import { debounce } from 'lodash';
import React, { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';

interface ToggleContextType {
  isToggled: boolean;
  toggle: () => void;
}

export const ToggleContext = createContext<ToggleContextType | undefined>(
  undefined,
);

interface ToggleProviderProps {
  children: ReactNode;
}

export const ToggleProvider: React.FC<ToggleProviderProps> = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);

  const debouncedToggle = useCallback(
    debounce(() => {
      setIsToggled((prevState) => !prevState);
    }, 300), // 300ms debounce
    [],
  );

  const toggle = () => {
    debouncedToggle();
  };

  return (
    <ToggleContext.Provider value={{ isToggled, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const useToggle = (): ToggleContextType => {
  const context = useContext(ToggleContext);
  if (context === undefined) {
    throw new Error('useToggle must be used within a ToggleProvider');
  }
  return context;
};
