import { ApolloClient } from 'apollo-client';
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import introspectionQueryResultData from '../fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

// Update the GraphQL endpoint to any instance of GraphQL that you like
// const GRAPHQL_URL = process.env
//   ? process.env.API_GRAPHQL_URL
//   : 'https://strapi-workout-backend.herokuapp.com/graphql';

const GRAPHQL_URL = 'https://strapi-workout-backend.herokuapp.com/graphql';

// Update the GraphQL endpoint to any instance of GraphQL that you like
// const GRAPHQL_URL = 'http://localhost:1337/graphql';

const link = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: GRAPHQL_URL,
});

// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo(
  // You can get headers and ctx (context) from the callback params
  // e.g. ({ headers, ctx, initialState })
  ({ initialState }) =>
    new ApolloClient({
      link,
      cache: new InMemoryCache({ fragmentMatcher })
        //  rehydrate the cache using the initial data passed from the server:
        .restore(initialState || {}),
    }),
);
