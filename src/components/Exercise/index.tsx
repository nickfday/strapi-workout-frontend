import React from 'react';
import SimpleTable from './SimpleTable';
import { Container } from '@material-ui/core';

interface ExerciseProps {
  exercises: ExerciseRows[];
}

interface ExerciseRows {
  title: string;
  primaryMuscle: {
    title: string;
  };
  equipment: string;
  slug: string;
}

const Exercise: React.FC<ExerciseProps> = ({ exercises }) => {
  console.log(exercises);
  return <Container>{<SimpleTable items={exercises} />}</Container>;
};

export default Exercise;
