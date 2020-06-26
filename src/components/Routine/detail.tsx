// @ts-nocheck

import React from 'react';
import styled from 'styled-components';
import Markdown from 'components/Markdown';
import { Box, Container, Grid } from '@material-ui/core';
import Breadcrumb from 'components/Breadcrumb';
import { RoutineDataItem } from './types';
import CustomizedTables from 'components/MaterialUI/dataDisplay/table/alternateTable';
import Link from 'components/Link';
import TransitionsModal from 'components/MaterialUI/utils/modal';
import { format } from 'date-fns';

const StyledImage = styled.img`
  width: 100%;
`;

const StyledDate = styled.span`
  font-size: 16px;
  color: gray;
  font-weight: normal;
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
                <Grid container justify="space-between" alignItems="center">
                  <Grid item>
                    <div>
                      <h2>
                        {item.title}{' '}
                        <StyledDate>
                          {format(new Date(item.date), 'E H:mm a')}
                        </StyledDate>
                      </h2>
                    </div>

                    {/* {item.date} */}
                  </Grid>
                  <Grid item>
                    <TransitionsModal
                      buttonText="More Info"
                      title={item.title}
                      body={<Markdown source={item.body} />}
                    />
                  </Grid>
                </Grid>
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
