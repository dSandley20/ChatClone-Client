import { createTheme } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9867e7',
    },
    secondary: {
      main: '#b6e767',
    },
    analogous: {
      main: '#6776e7',
      secondary: '#d867e7',
    },
    triadic: {
      main: '#e767b6',
      secondary: '#e79867',
    },
  },
  components: {},
});

export default theme;
