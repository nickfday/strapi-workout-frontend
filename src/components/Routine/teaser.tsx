import React from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import Link from 'components/Link';
import { MaterialAdvancedGridList } from 'components/MaterialUI/Layout/GridList/AdvancedGridList';
import { RoutineTypes } from './types';

const RoutineTeaser: React.FC<RoutineTypes> = ({ routines }) => {
  // set first item as featured
  routines[0]['featured'] = true;

  return (
    <Box data-testid="routineTeaser">
      <MaterialAdvancedGridList items={routines} />
      <StyledLinkWrapper>
        <Link href="/routines">
          <h3>See all routines</h3>
        </Link>
      </StyledLinkWrapper>
    </Box>
  );
};

const StyledLinkWrapper = styled.div`
  text-align: center;
`;

export { RoutineTeaser };
