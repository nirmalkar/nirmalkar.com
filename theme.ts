// theme.ts
const lightTheme = {
  colors: {
    primary: "#ffffff",
    secondary: "#E5E4E2",
    oppositePrimary: "#121212",
    oppositeSecondary: "#222",
  },
};

const darkTheme = {
  colors: {
    primary: "#121212",
    secondary: "#222",
    oppositePrimary: "#ffffff",
    oppositeSecondary: "#E5E4E2",
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export type ThemeName = keyof typeof themes;
export type Theme = typeof lightTheme;
export default lightTheme;
