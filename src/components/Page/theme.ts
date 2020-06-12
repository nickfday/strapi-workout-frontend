import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    appDrawer: {
      width: React.CSSProperties['width']
      breakpoint: Breakpoint
    }
  }

    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
      breakpoints?: {
        xs: number
      }
    }

export default createMuiTheme({
  palette: { primary: { main: '#373A3C' } },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    mobile: 320,
  },
  typography: {
    fontSize: 16,
  },
});
