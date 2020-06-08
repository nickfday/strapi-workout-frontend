import React from 'react';
import { getExercises } from '../../lib/api';
import Exercise from 'components/Exercise';

const Exercises = (allExercises) => {
  const exercises = {
    exercises: allExercises,
  };
  console.log(...exercises.exercises.allExercises);
  return <Exercise exercises={exercises.exercises.allExercises} />;
};

export async function getStaticProps({ preview = null }) {
  const allExercises = (await getExercises(preview)) || [];
  console.log(allExercises);
  return {
    props: { allExercises, preview },
  };
}

export default Exercises;
