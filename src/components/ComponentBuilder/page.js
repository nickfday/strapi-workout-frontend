import React from 'react';
import gql from 'graphql-tag';
import { graphql } from '@apollo/react-hoc';
import CircularProgress from '@material-ui/core/CircularProgress';
import ComponentBuilder from 'components/ComponentBuilder';
import { HEROBANNER_FRAGMENT } from 'components/HeroBanner';
import { CTABANNER_FRAGMENT } from 'components/CtaBanner';
import { CARD_FRAGMENT } from 'components/CardGroup';

const HOMEPAGE_QUERY = gql`
  query page($id: ID!) {
    page(id: $id) {
      id
      slug
      components {
        ...HeroBanners
        ...ctaBanners
        ...cards
      }
    }
  }

  ${HEROBANNER_FRAGMENT}
  ${CTABANNER_FRAGMENT}
  ${CARD_FRAGMENT}
`;

const Page = ({ data }) => {
  console.log(data);
  if (data.loading) {
    return <CircularProgress />;
  }
  if (data.error) {
    return <p>Error!</p>;
  }

  console.log(data);

  return <ComponentBuilder {...data.page} />;
};

export default graphql(HOMEPAGE_QUERY, {
  options: (props) => ({
    variables: {
      id: props.id,
    },
  }),
})(Page);
