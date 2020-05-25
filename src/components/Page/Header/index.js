import Nav from '../Nav';
import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NavData from 'src/util/staticData/navData';
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
  return (
    <>
      <Nav {...NavData} />
    </>
  );
};

export default Header;
