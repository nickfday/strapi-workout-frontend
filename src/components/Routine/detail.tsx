// @ts-nocheck

import React from 'react';
import styled from 'styled-components';
import Markdown from 'components/Markdown';
import { Box, Container, Grid } from '@material-ui/core';
import Breadcrumb from 'components/Breadcrumb';
import { RoutineDataItem } from './types';
import CustomizedTables from 'components/MaterialUI/dataDisplay/table/alternateTable';
import Link from 'components/Link';

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
      return [
        <Link key={item.id} url={`/exercise/${item.exercise.slug}`}>
          {item.exercise.title}
        </Link>,
        ,
        item.sets,
        item.reps,
      ];
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
        <Markdown source={body} />

        <Grid container spacing={4}>
          {session.map((item) => {
            return (
              <Grid key={item.title} item xs={12} md={4}>
                <h2>{item.title}</h2>
                <CustomizedTables headers={headers} rows={dynamicRows(item)} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export { RoutineDetail };
