import React, { createContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { Theme, ThemeName } from '../../theme';
import { themes } from '../../theme';

type ThemeContextType = {
  theme: Theme;
  themeName: ThemeName;
  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: themes.light,
  themeName: 'light',
  toggleTheme: () => {
    throw new Error(
      'toggleTheme function must be overridden by a ThemeProvider',
    );
  },
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<ThemeName>(
    getUserPreferredTheme(),
  );
  const theme = themes[themeName];

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme && storedTheme in themes) {
      setThemeName(storedTheme as ThemeName);
    }
  }, []);

  function getUserPreferredTheme() {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark';
    }
    return 'light';
  }

  const toggleTheme = () => {
    const newThemeName = themeName === 'light' ? 'dark' : 'light';
    setThemeName(newThemeName);
    localStorage.setItem('theme', newThemeName);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
