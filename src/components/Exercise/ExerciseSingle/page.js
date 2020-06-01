import React from 'react';
import gql from 'graphql-tag';
import { graphql } from '@apollo/react-hoc';
import CircularProgress from '@material-ui/core/CircularProgress';
import ExerciseSingle from '.';

const PAGE_QUERY = gql`
  query exerciseSingle($slug: String) {
    exercises(where: { slug: $slug }) {
      id
      title
      primaryMuscle {
        title
        abbreviation
        bodyArea
      }
      secondaryMuscle {
        title
      }
      videoUrl
      equipment
      type
      body
      image {
        formats
        url
      }
      videoMedia {
        url
      }
      variationExercise {
        title
        slug
      }
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

  return <ExerciseSingle {...data.exercises[0]} />;
};

export default graphql(PAGE_QUERY, {
  options: (props) => ({
    variables: {
      slug: props.slug,
    },
  }),
})(Page);
