import React, { useState } from 'react';
import CustomizedTables from 'components/MaterialUI/dataDisplay/table/alternateTable';

import {
  Box,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@material-ui/core';
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
      <Box mb={2}>
        <TextField
          id="outlined-search"
          label="Exercise Search"
          type="search"
          variant="outlined"
          onChange={(event) => {
            setTitle(event.target.value.toLowerCase());
          }}
        />
        {/* <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            // value={age}
            // onChange={handleChange}
            label="Type"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl> */}
      </Box>

      <CustomizedTables headers={headers} rows={dynamicRows} />
    </Container>
  );
};

export default Exercise;
