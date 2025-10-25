// gatsby-ssr.js
import React from 'react';
import { ThemeProvider } from './src/context/themeProvider';
import { ToggleProvider } from './src/context/toggleProvider';
import './src/style/main.scss';
import theme from './theme';

export const wrapRootElement = ({ element }) => (
  <ToggleProvider>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </ToggleProvider>
);
