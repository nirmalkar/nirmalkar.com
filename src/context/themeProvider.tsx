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
    // Only access localStorage in browser environment
    if (typeof window === 'undefined' || !window.localStorage) {
      return;
    }

    const storedTheme = localStorage.getItem('theme');
    if (storedTheme && storedTheme in themes) {
      setThemeName(storedTheme as ThemeName);
    }
  }, []);

  useEffect(() => {
    // Only set CSS custom properties in browser environment
    if (typeof document === 'undefined') {
      return;
    }

    // Set CSS custom properties based on the current theme
    const root = document.documentElement;
    const customProperties = {
      '--about-bg': themeName === 'light'
        ? 'rgba(229, 228, 226, 0.1)'
        : 'rgba(34, 34, 34, 0.3)',
      '--about-border': themeName === 'light'
        ? 'rgba(18, 18, 18, 0.1)'
        : 'rgba(229, 228, 226, 0.1)',
      '--about-text': theme.colors.oppositePrimary,
      '--about-text-secondary': themeName === 'light'
        ? 'rgba(18, 18, 18, 0.8)'
        : 'rgba(229, 228, 226, 0.9)',
      '--about-accent': themeName === 'light'
        ? 'rgba(18, 18, 18, 0.2)'
        : 'rgba(229, 228, 226, 0.3)',
      '--about-stat-bg': themeName === 'light'
        ? 'rgba(229, 228, 226, 0.2)'
        : 'rgba(34, 34, 34, 0.4)',
      '--about-stat-hover': themeName === 'light'
        ? 'rgba(229, 228, 226, 0.3)'
        : 'rgba(34, 34, 34, 0.6)',
    };

    Object.entries(customProperties).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
  }, [themeName, theme.colors.oppositePrimary]);

  function getUserPreferredTheme() {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') {
      return 'light';
    }

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

    // Check if we're in a browser environment before using localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('theme', newThemeName);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
