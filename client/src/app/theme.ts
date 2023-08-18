import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        tertiary: Palette['primary'];
    }
  
    interface PaletteOptions {
        tertiary: PaletteOptions['primary'];
    }
}

const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
    palette: {
      mode: 'light',
      primary: {
        main: '#bd4f3e',
        contrastText: '#ffeb87'
      },
      secondary: {
        main: '#496eb8',
      },
      tertiary: {
        main: '#52944d',
      },
      text: {
        // primary: '#ffc812',
        primary: '#000',
        secondary: '#ffe666'
      },
      background: {
        default: '#f7f2ec',
        paper: '#f7f2ec'
        // default: '#edd7c0',
        // paper: '#ede2d3'
      }
    },
  });

export default theme;