import React from 'react';
import gql from 'graphql-tag';
import { graphql } from '@apollo/react-hoc';
import CircularProgress from '@material-ui/core/CircularProgress';
import ComponentBuilder from 'components/ComponentBuilder';

import { HEROBANNER_FRAGMENT } from '../components/HeroBanner';
import { CTABANNER_FRAGMENT } from '../components/CtaBanner';
import { CARD_FRAGMENT } from '../components/CardGroup';

const PAGE_QUERY = gql`
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

const simpleComponent = ({ data }) => {
  if (data.loading) {
    return <CircularProgress />;
  }
  if (data.error) {
    return <p>Error!</p>;
  }

  console.log(data.pages);

  return <ComponentBuilder {...data.pages} />;
};

export default graphql(PAGE_QUERY)(simpleComponent);
