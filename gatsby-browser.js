// gatsby-browser.js
import React from "react";
import { ThemeProvider } from "./src/context/themeProvider";
import "./src/style/main.scss";
import theme from "./theme";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);
