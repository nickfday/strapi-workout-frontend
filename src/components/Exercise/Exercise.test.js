import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Exercise from '.';

const data = [
  {
    title: 'Bench Press',
    primaryMuscle: {
      title: 'Chest',
    },
    equipment: 'Barbell',
    slug: 'bench-press',
  },
];

describe('<Exercise />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Exercise {...data} />);
    const exercise = getByTestId('Exercise');

    expect(exercise).toBeInTheDocument();
  });
});
