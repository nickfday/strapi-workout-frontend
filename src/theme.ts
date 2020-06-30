import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: { primary: { main: '#373A3C' } },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      // mobile: 320,
    },
  },
  typography: {
    fontSize: 16,
  },

  overrides: {
    MuiCssBaseline: {
      '@global': {
        a: {
          textDecoration: 'none',
          fontSize: 'inherit',
          color: 'inherit',
        },
      },
    },
  },
});
