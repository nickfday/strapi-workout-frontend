import React from 'react';
import { Box } from '@material-ui/core';
import { MaterialAdvancedGridList } from 'components/MaterialUI/Layout/GridList/AdvancedGridList';
import { RoutineTypes } from './types';

const RoutineList: React.FC<RoutineTypes> = ({ routines }) => {
  return (
    <Box data-testid="RoutineList">
      <h1>Routines</h1>
      <MaterialAdvancedGridList items={routines} />
    </Box>
  );
};

export { RoutineList };
