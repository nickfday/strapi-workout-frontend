import { createMuiTheme } from '@material-ui/core/styles';

const palette = { primary: { main: '#373A3C' } };
const themeName = 'Outer Space Razzmatazz Peafowl';
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    mobile: 320,
  },
};

// declare module "@material-ui/core/styles/createBreakpoints"
// {
//   interface BreakpointOverrides
//   {
//     xs: true; // removes the `xs` breakpoint
//     sm: true;
//     md: true;
//     lg: true;
//     xl: true;
//     tablet: true; // adds the `tablet` breakpoint
//     laptop: true;
//     desktop: true;
//   }
// }

export default createMuiTheme({ palette, themeName, breakpoints });
