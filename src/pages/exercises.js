import React from 'react';
import Exercise from 'components/Exercise';
import { getExercises } from '../../lib/api';

const Exercises = ({ allExercises }) => {
  return <Exercise exercises={allExercises} />;
};

export async function getStaticProps({ preview = null }) {
  const allExercises = (await getExercises(preview)) || [];

  return {
    props: { allExercises, preview },
  };
}

export default Exercises;
