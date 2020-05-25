/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import CustomizedTables from './alternateTable';
// import * as mockData from './mockData.json';

const session = [
  {
    title: 'Monday Week 1',
    session: [
      {
        title: 'Barbell Squat',
        sets: 5,
        reps: 5,
        exercise: {
          title: 'Barbell Squat',
          slug: 'squat',
        },
      },
      {
        title: 'Bench Press',
        sets: 5,
        reps: 5,
        exercise: {
          title: 'Bench Press',
          slug: 'bench-press',
        },
      },
      {
        title: 'Barbell Row',
        sets: 5,
        reps: 5,
        exercise: {
          title: 'Barbell Row',
          slug: 'barbell-row',
        },
      },
    ],
  },
  {
    title: 'Wednesday Week 1',
    session: [
      {
        title: 'Squat',
        sets: 5,
        reps: 5,
        exercise: {
          title: 'Barbell Squat',
          slug: 'squat',
        },
      },
      {
        title: 'Overhead Press',
        sets: 5,
        reps: 5,
        exercise: {
          title: 'Barbell Curl',
          slug: 'barbell-curl',
        },
      },
      {
        title: 'Deadlift',
        sets: 5,
        reps: 5,
        exercise: {
          title: 'Deadlift',
          slug: 'deadlift',
        },
      },
    ],
  },
  {
    title: 'Friday Week 1',
    session: [
      {
        title: 'Squat',
        sets: 5,
        reps: 5,
        exercise: {
          title: 'Barbell Squat',
          slug: 'squat',
        },
      },
      {
        title: 'Bench Press',
        sets: 5,
        reps: 5,
        exercise: {
          title: 'Bench Press',
          slug: 'bench-press',
        },
      },
      {
        title: 'Barbell Row',
        sets: 5,
        reps: 5,
        exercise: {
          title: 'Barbell Row',
          slug: 'barbell-row',
        },
      },
    ],
  },
];

const headers = ['Exercise', 'Sets', 'Reps'];

const rows = [
  ['barbell squat', 5, 5],
  ['barbell squat', 5, 5],
  ['barbell squat', 5, 5],
];

const dynamicRows = () => {
  return session[0].session.map((item) => {
    return [item.title, item.sets, item.reps];
  });
};

console.log(dynamicRows());

storiesOf('Material UI/Data Display/Table', module).add(
  'Alternate Table',
  () => <CustomizedTables headers={headers} rows={dynamicRows()} />,
);
