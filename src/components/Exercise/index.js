import React, { useState } from 'react';
import CustomizedTables from 'components/MaterialUI/dataDisplay/table/alternateTable';

import { Container, TextField } from '@material-ui/core';
import Link from 'components/Link';

const Exercise = ({ exercises }) => {
  console.log(exercises);
  const headers = ['Exercise', 'Type', 'Primary Muscle', 'Equipment'];
  const [title, setTitle] = useState('');
  const filteredExercises = [];

  exercises.map((exercise) => {
    if (exercise.title.toLowerCase().indexOf(title) === -1) {
      return false;
    }

    filteredExercises.push(exercise);
  });

  const dynamicRows = filteredExercises.map((item) => {
    return [
      <Link key={item.id} url={`exercise/${item.slug}`}>
        {item.title}
      </Link>,
      item.type.replace(/_/g, ' '),
      item.primaryMuscle.title,
      item.equipment,
    ];
  });

  return (
    <Container>
      <h1>Exercises</h1>
      <TextField
        id="outlined-search"
        label="Exercise Search"
        type="search"
        variant="outlined"
        onChange={(event) => {
          setTitle(event.target.value.toLowerCase());
        }}
      />

      <CustomizedTables headers={headers} rows={dynamicRows} />
    </Container>
  );
};

export default Exercise;
