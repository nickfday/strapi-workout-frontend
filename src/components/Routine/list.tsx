import React from 'react';
import { Container } from '@material-ui/core';
import { MaterialAdvancedGridList } from 'components/MaterialUI/Layout/GridList/AdvancedGridList';
import { RoutineTypes } from './types';

const RoutineList: React.FC<RoutineTypes> = ({ routines }) => {
  console.log(routines);
  return (
    <Container data-testid="RoutineList">
      <h1>Routines</h1>
      <MaterialAdvancedGridList items={routines} />
    </Container>
  );
};

export { RoutineList };
