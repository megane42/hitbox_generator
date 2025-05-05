import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
  typography: {
    fontFamily: 'Yu Mincho',
    h1: {
      fontFamily: 'Instrument Serif, Yu Mincho',
      fontSize: '2rem',
      fontWeight: 400,
      letterSpacing: '16px',
      lineHeight: '1.5',
    },
    h2: {
      fontFamily: 'Instrument Serif, Yu Mincho',
      fontSize: '1.5rem',
      fontWeight: 400,
      letterSpacing: '16px',
    },
  },
});

export default theme; 