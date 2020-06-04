import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import Page from '../components/Page';
// import { withApollo } from '../../lib/apollo';

import withData from '../util/apollo-client';

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
    );
  }
}

// Wraps all components in the tree with the data provider
export default withData(MyApp, { ssr: false });
// export default withApollo({ ssr: true })(MyApp);
