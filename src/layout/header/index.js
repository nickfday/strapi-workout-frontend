import Link from 'next/link';
import styled from 'styled-components';
// import Router from 'next/router';
import NavData from 'src/util/staticData/navData';
import { makeStyles } from '@material-ui/core/styles';
import Nav from './Nav';

const useStyles = makeStyles((theme) => ({
  header: {
    background: 'red',
  },
}));

// import NProgress from 'nprogress';

// Router.onRouteChangeStart = () => {
//   ('onRouteChangeStart Triggered');
//   NProgress.start();
// };

// Router.onRouteChangeComplete = () => {
//   ('onRouteChangeComplete Triggered');
//   NProgress.done();
// };
// Router.onRouteChangeError = () => {
//   ('onRouteChangeError Triggered');
//   NProgress.done();
// };

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Nav {...NavData} />
    </div>
  );
};

export default Header;
