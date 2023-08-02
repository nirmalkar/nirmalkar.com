// theme.ts
const lightTheme = {
  colors: {
    primary: "#ffffff",
    secondary: "#fff",
    dotsColor: "#CDCDCD",
  },
};

const darkTheme = {
  colors: {
    primary: "#121212",
    secondary: "#0000FF",
    dotsColor: "#333",
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export type ThemeName = keyof typeof themes;
export type Theme = typeof lightTheme;
export default lightTheme;
