import { createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
      light: '#d3d6da'
    },
    text: {
      primary: '#000000',
      secondary: '#ffffff'
    },
    secondary: {
      dark: '#c9b458',
      light: '#6aaa64',
      main: '#787c7e',
    },

    background: {
      paper: '#ffffff',
      default: '#ffffff'
    }
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
      light: '#818384'
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff'
    },
    secondary: {
      dark: '#b59f3b',
      light: '#538d4e',
      main: '#3a3a3c',
    },

    background: {
      paper: '#121213',
      default: '#121213'
    },
  },
});

export default function Theme() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  console.log("DarkMode:", prefersDarkMode)
  return (prefersDarkMode ? darkTheme : lightTheme)
}
