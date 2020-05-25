import React from 'react';
import gql from 'graphql-tag';
import { graphql } from '@apollo/react-hoc';
import CircularProgress from '@material-ui/core/CircularProgress';
import { RoutineGroup, Routine } from 'components/Routine';

// Group Page

const ROUTINE_GROUP_QUERY = gql`
  query routines {
    routines {
      id
      title
      body
      slug
    }
  }
`;

const RoutineGroupFetch = ({ data }) => {
  console.log(data);
  if (data.loading) {
    return <CircularProgress />;
  }
  if (data.error) {
    return <p>Error!</p>;
  }

  console.log(data);

  return <RoutineGroup {...data} />;
};

const RoutineGroupPage = graphql(ROUTINE_GROUP_QUERY)(RoutineGroupFetch);

const ROUTINE_SINGLE_QUERY = gql`
  query routine {
    routines {
      id
      title
      body
      slug
    }
  }
`;

export { RoutineGroupPage };

// Single Page

const RoutineSingleFetch = ({ data }) => {
  console.log(data);
  if (data.loading) {
    return <CircularProgress />;
  }
  if (data.error) {
    return <p>Error!</p>;
  }

  console.log(data);

  return <Routine {...data.routines[0]} />;
};

const RoutineSinglePage = graphql(ROUTINE_SINGLE_QUERY)(RoutineSingleFetch);

export { RoutineSinglePage };
