// @ts-nocheck

import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Box, Container, Grid } from '@material-ui/core';
import Breadcrumb from 'components/Breadcrumb';
import { RoutineDataItem } from './types';
import CustomizedTables from 'components/MaterialUI/dataDisplay/table/alternateTable';

const StyledImage = styled.img`
  width: 100%;
`;

const RoutineDetail: React.FC<RoutineDataItem> = ({
  title,
  body,
  media,
  session,
}) => {
  const headers = ['Exercise', 'Sets', 'Reps'];

  const dynamicRows = (sesh: any) => {
    return sesh.session.map((item: any) => {
      return [item.title, item.sets, item.reps];
    });
  };

  return (
    <Container data-testid="routineDetail">
      <Grid container spacing={2} justify="space-between">
        <Grid>
          <h1>{title}</h1>
        </Grid>

        <Grid>
          <Breadcrumb
            currentTitle={title}
            previousSlug={'/routines'}
            previousTitle="Routines"
          ></Breadcrumb>
        </Grid>
      </Grid>

      <Grid container spacing={2} justify="space-between">
        <Grid md={7}>
          <ReactMarkdown source={body} />
        </Grid>
        <Grid md={4}>
          <Box mt={2}>
            <StyledImage src={media.formats.small.url} />
          </Box>
        </Grid>

        <Grid xs={12}>
          <Box>
            {session.map((item) => {
              return (
                <div key={item.title}>
                  <h2>{item.title}</h2>
                  <CustomizedTables
                    headers={headers}
                    rows={dynamicRows(item)}
                  />
                </div>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export { RoutineDetail };
