import React from 'react';
import gql from 'graphql-tag';
import { graphql } from '@apollo/react-hoc';
import CircularProgress from '@material-ui/core/CircularProgress';
import Exercise from 'components/Exercise';

const EXERICSE_QUERY = gql`
  query exercises {
    exercises {
      id
      title
      primaryMuscle {
        title
      }
      equipment
      slug
    }
  }
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

  return <Exercise {...data} />;
};

export default graphql(EXERICSE_QUERY)(Page);
