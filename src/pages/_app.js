import React from 'react';
import Head from 'next/head';
import {
  Container,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core';
import theme from '../theme';
import Header from '../layout/header';
import Meta from '../layout/header/meta';
import Footer from '../layout/footer';
// import { AuthProvider } from '../components/Auth/auth';

// import { Provider } from 'react-redux';
// import { useStore } from '../store';

const useStyles = makeStyles({
  main: {
    marginBottom: '40px',
    minHeight: '85vh',
  },
});

export default function MyApp(props) {
  const classes = useStyles();
  const { Component, pageProps } = props;
  // const store = useStore(pageProps.initialReduxState);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <Meta />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container className={classes.main}>
          <Component {...pageProps} />
        </Container>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}
