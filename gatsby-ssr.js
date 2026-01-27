// gatsby-ssr.js
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

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="theme-script"
      dangerouslySetInnerHTML={{ __html: themeScript }}
    />,
    // Google Fonts optimization with preconnect
    <link
      key="preconnect-google-fonts"
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />,
    <link
      key="preconnect-fonts-gstatic"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />,
    // Google Fonts stylesheet
    <link
      key="google-fonts"
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&family=Abril+Fatface:wght@400&display=swap"
      rel="stylesheet"
      media="print"
      onLoad="this.media='all'"
    />,
  ]);
};
