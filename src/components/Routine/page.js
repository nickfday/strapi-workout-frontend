import React from 'react';
import gql from 'graphql-tag';
import { graphql } from '@apollo/react-hoc';
import CircularProgress from '@material-ui/core/CircularProgress';
// import { RoutineTeaser } from 'components/Routine';
import { RoutineDetail } from './detail';
import { RoutineTeaser } from './teaser';
import { RoutineList } from './list';

const ROUTINE_FRAGMENT = gql`
  fragment Routines on Routine {
    id
    title
    body
    slug
    media {
      url
      formats
    }
    link {
      title
      url
    }
  }
`;

// Group Page
const ROUTINE_GROUP_QUERY = gql`
  query routines {
    routines(limit: 3, sort: "created_at:desc") {
      ...Routines
    }
  }
  ${ROUTINE_FRAGMENT}
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

  return <RoutineList {...data} />;
};

const RoutineGroupPage = graphql(ROUTINE_GROUP_QUERY)(RoutineGroupFetch);

export { RoutineGroupPage };

// Single Page

const ROUTINE_SINGLE_QUERY = gql`
  query routines($slug: String) {
    routines(where: { slug: $slug }) {
      id
      title
      body
      slug
      media {
        url
        formats
      }
      link {
        title
        url
      }
      session {
        title
        session {
          title
          sets
          reps
          exercise {
            title
            slug
          }
        }
      }
    }
  }
`;

const RoutineSingleFetch = ({ data }) => {
  console.log(data);
  if (data.loading) {
    return <CircularProgress />;
  }
  if (data.error) {
    return <p>Error!</p>;
  }

  console.log(data);

  return <RoutineDetail {...data.routines[0]} />;
};

const RoutineSinglePage = graphql(ROUTINE_SINGLE_QUERY, {
  options: (props) => ({
    variables: {
      slug: props.slug,
    },
  }),
})(RoutineSingleFetch);

export { RoutineSinglePage };

// teaser

const ROUTINE_TEASER_QUERY = gql`
  query routines {
    routines(limit: 3, sort: "created_at:desc") {
      ...Routines
    }
  }
  ${ROUTINE_FRAGMENT}
`;

const RoutineTeaserFetch = ({ data }) => {
  console.log(data);
  if (data.loading) {
    return <CircularProgress />;
  }
  if (data.error) {
    return <p>Error!</p>;
  }

  console.log(data);

  return <RoutineTeaser {...data} />;
};

const RoutineTeaserPage = graphql(ROUTINE_TEASER_QUERY)(RoutineTeaserFetch);

export { RoutineTeaserPage };
