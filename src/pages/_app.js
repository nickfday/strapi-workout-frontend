import React from 'react';
import Head from 'next/head';
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from '../theme';
import Header from '../layout/header';
import Meta from '../layout/header/meta';
import Footer from '../layout/footer';

export default function MyApp(props) {
  const { Component, pageProps } = props;

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
        <Container>
          <Component {...pageProps} />
        </Container>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}
