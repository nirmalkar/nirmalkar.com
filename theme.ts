// theme.ts
const lightTheme = {
  colors: {
    primary: "#F5F5F5",
    secondary: "#fff",
  },
  fonts: {
    body: "Arial, sans-serif",
    heading: "Helvetica, sans-serif",
  },
};

const darkTheme = {
  colors: {
    primary: "#121212",
    secondary: "#0000FF",
  },
  fonts: {
    body: "Verdana, sans-serif",
    heading: "Courier New, monospace",
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export type ThemeName = keyof typeof themes;
export type Theme = typeof lightTheme;
export default lightTheme;
