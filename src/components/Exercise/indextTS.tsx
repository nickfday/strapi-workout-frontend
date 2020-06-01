import React from 'react';
// import SimpleTable from './SimpleTable';
// import CustomizedTables from 'components/MaterialUI/dataDisplay/table/alternateTable';

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
  const headers = ['Exercise', 'Sets', 'Reps'];
  console.log(headers);

  // const dynamicRows = (sesh: any) => {
  //   return sesh.session.map((item: any) => {
  //     return [item.title, item.sets, item.reps];
  //   });
  // };

  console.log(exercises);
  return (
    <Container>
      <h1>Exercises</h1>
      {/* <CustomizedTables headers={headers} /> */}
      {/* {<SimpleTable items={exercises} />} */}
    </Container>
  );
};

export default Exercise;
