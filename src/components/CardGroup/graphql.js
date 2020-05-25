import gql from 'graphql-tag';

const cardFragment = gql`
  fragment Cards on ComponentGlobalComponentBuilder {
    cards {
      id
      title
      body
      media {
        url
      }
      link {
        title
        url
      }
    }
  }
`;
export default cardFragment;
