/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Exercise from '.';

const exercise = {
  exercises: [
    {
      id: '1',
      title: 'Bench Press',
      primaryMuscle: {
        title: 'Pectorals',
        __typename: 'Muscle',
      },
      equipment: 'Bar',
      slug: 'bench-press',
      __typename: 'Exercise',
    },
    {
      id: '2',
      title: 'Alternating Side Lunges',
      primaryMuscle: {
        title: 'Gluteals',
        __typename: 'Muscle',
      },
      equipment: null,
      slug: 'alternating-side-lunges',
      __typename: 'Exercise',
    },
    {
      id: '3',
      title: 'Angled Leg Press',
      primaryMuscle: {
        title: 'Quadriceps',
        __typename: 'Muscle',
      },
      equipment: null,
      slug: 'angled-leg-press',
      __typename: 'Exercise',
    },
    {
      id: '4',
      title: 'Back Extension',
      primaryMuscle: {
        title: 'Gluteals',
        __typename: 'Muscle',
      },
      equipment: null,
      slug: 'back-extension',
      __typename: 'Exercise',
    },
    {
      id: '5',
      title: 'Barbell Curl',
      primaryMuscle: {
        title: 'Gluteals',
        __typename: 'Muscle',
      },
      equipment: null,
      slug: 'barbell-curl',
      __typename: 'Exercise',
    },
    {
      id: '6',
      title: 'Barbell Lunges',
      primaryMuscle: {
        title: 'Gluteals',
        __typename: 'Muscle',
      },
      equipment: 'Bar',
      slug: 'barbell-lunges',
      __typename: 'Exercise',
    },
    {
      id: '7',
      title: 'Barbell Pullover',
      primaryMuscle: {
        title: 'Pectorals',
        __typename: 'Muscle',
      },
      equipment: 'Bar',
      slug: 'barbell-pullover',
      __typename: 'Exercise',
    },
    {
      id: '8',
      title: 'Barbell Row',
      primaryMuscle: {
        title: 'Latissimus Dorsi',
        __typename: 'Muscle',
      },
      equipment: 'Bar',
      slug: 'barbell-row',
      __typename: 'Exercise',
    },
    {
      id: '9',
      title: 'Barbell Shrugs',
      primaryMuscle: {
        title: 'Trapezius',
        __typename: 'Muscle',
      },
      equipment: 'Bar',
      slug: 'barbell-shrugs',
      __typename: 'Exercise',
    },
    {
      id: '10',
      title: 'Barbell Squat',
      primaryMuscle: {
        title: 'Quadriceps',
        __typename: 'Muscle',
      },
      equipment: 'Bar',
      slug: 'squat',
      __typename: 'Exercise',
    },
    {
      id: '11',
      title: 'Barbell Tricep Extensions (Skull Crushers)',
      primaryMuscle: {
        title: 'Triceps',
        __typename: 'Muscle',
      },
      equipment: null,
      slug: 'barbell-tricep-extensions',
      __typename: 'Exercise',
    },
    {
      id: '12',
      title: 'Behind-the-neck Lat Pulldown',
      primaryMuscle: {
        title: 'Latissimus Dorsi',
        __typename: 'Muscle',
      },
      equipment: null,
      slug: 'behind-the-neck-lat-pulldown',
      __typename: 'Exercise',
    },
    {
      id: '13',
      title: 'Bench Dips',
      primaryMuscle: {
        title: 'Triceps',
        __typename: 'Muscle',
      },
      equipment: null,
      slug: 'bench-dips',
      __typename: 'Exercise',
    },
    {
      id: '14',
      title: 'Bent-over lateral raises',
      primaryMuscle: {
        title: 'Deltoids',
        __typename: 'Muscle',
      },
      equipment: null,
      slug: 'bent-over-lateral-raises',
      __typename: 'Exercise',
    },
    {
      id: '15',
      title: 'Bridging',
      primaryMuscle: {
        title: 'Gluteals',
        __typename: 'Muscle',
      },
      equipment: null,
      slug: 'bridging',
      __typename: 'Exercise',
    },
    {
      id: '16',
      title: 'Burpee',
      primaryMuscle: {
        title: 'Quadriceps',
        __typename: 'Muscle',
      },
      equipment: null,
      slug: 'burpee',
      __typename: 'Exercise',
    },
    {
      id: '17',
      title: 'Cable Adductions',
      primaryMuscle: {
        title: 'Adductors',
        __typename: 'Muscle',
      },
      equipment: 'Cable_Pulley',
      slug: 'cable-adductions',
      __typename: 'Exercise',
    },
    {
      id: '18',
      title: 'Cable Back Kicks',
      primaryMuscle: {
        title: 'Gluteals',
        __typename: 'Muscle',
      },
      equipment: 'Cable_Pulley',
      slug: 'cable-back-kicks',
      __typename: 'Exercise',
    },
    {
      id: '19',
      title: 'Cable Crossover Flys',
      primaryMuscle: {
        title: 'Pectorals',
        __typename: 'Muscle',
      },
      equipment: null,
      slug: 'cable-crossover-flys',
      __typename: 'Exercise',
    },
    {
      id: '21',
      title: 'Cable crunches',
      primaryMuscle: {
        title: 'Rectus abdominis',
        __typename: 'Muscle',
      },
      equipment: 'Cable_Pulley',
      slug: 'cable-crunches',
      __typename: 'Exercise',
    },
    {
      id: '22',
      title: 'Cable hip adductiions',
      primaryMuscle: {
        title: 'Gluteals',
        __typename: 'Muscle',
      },
      equipment: null,
      slug: null,
      __typename: 'Exercise',
    },
    {
      id: '23',
      title: 'Chin-up',
      primaryMuscle: {
        title: 'Latissimus Dorsi',
        __typename: 'Muscle',
      },
      equipment: null,
      slug: 'chin-up',
      __typename: 'Exercise',
    },
    {
      id: '24',
      title: 'Close-Grip Bench Press',
      primaryMuscle: {
        title: 'Triceps',
        __typename: 'Muscle',
      },
      equipment: 'Bar',
      slug: null,
      __typename: 'Exercise',
    },
    {
      id: '25',
      title: 'Close-grip Lat Pulldown',
      primaryMuscle: {
        title: 'Latissimus Dorsi',
        __typename: 'Muscle',
      },
      equipment: 'Machine',
      slug: 'close-grip-lat-pulldown',
      __typename: 'Exercise',
    },
    {
      id: '26',
      title: 'Concentration Dumbell Curl',
      primaryMuscle: {
        title: 'Biceps',
        __typename: 'Muscle',
      },
      equipment: 'Dumbbell',
      slug: 'concentration-dumbell-curl',
      __typename: 'Exercise',
    },
    {
      id: '27',
      title: 'Crunches',
      primaryMuscle: {
        title: 'Rectus abdominis',
        __typename: 'Muscle',
      },
      equipment: null,
      slug: 'crunches',
      __typename: 'Exercise',
    },
  ],
};

storiesOf('Exercise', module).add('default', () => <Exercise {...exercise} />);
