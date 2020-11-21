/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Exercise from '.';
import * as fixtures from './fixtures' 

// const exercise = {
//   exercises: [
//     {
//       id: '1',
//       title: 'Bench Press',
//       primaryMuscle: {
//         title: 'Pectorals',
//         __typename: 'Muscle',
//       },
//       equipment: 'Bar',
//       slug: 'bench-press',
//       __typename: 'Exercise',
//     },
//     {
//       id: '2',
//       title: 'Alternating Side Lunges',
//       primaryMuscle: {
//         title: 'Gluteals',
//         __typename: 'Muscle',
//       },
//       equipment: null,
//       slug: 'alternating-side-lunges',
//       __typename: 'Exercise',
//     },
   
//   ],
// };

storiesOf('Exercise', module).add('default', () => <Exercise exercises={fixtures.exercises} />); 
