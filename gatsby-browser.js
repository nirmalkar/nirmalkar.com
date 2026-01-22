// gatsby-browser.js
import React from 'react';
import { ThemeProvider } from './src/context/themeProvider';
import { ToggleProvider } from './src/context/toggleProvider';
import { themeScript } from './src/utils/themeScript';
import './src/style/main.scss';
import theme from './theme';

export const wrapRootElement = ({ element }) => (
  <ToggleProvider>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </ToggleProvider>
);

export const onClientEntry = () => {
  // Prevent flash by applying theme immediately
  eval(themeScript);
};
