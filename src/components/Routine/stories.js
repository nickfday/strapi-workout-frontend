/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { RoutineList } from './list';
import { RoutineTeaser } from './teaser';
import { RoutineDetail } from './detail';
import * as mockData from './mockData.json';

storiesOf('Routine', module).add('Routine List', () => (
  <RoutineList {...mockData.data} />
));

storiesOf('Routine', module).add('Routine Teaser', () => (
  <RoutineTeaser {...mockData.data} />
));

storiesOf('Routine', module).add('Routine Detail', () => (
  <RoutineDetail {...mockData.data.routines[0]} />
));
