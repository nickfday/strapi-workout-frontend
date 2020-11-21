import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';

import CardGroup from '.';
import { cardGroupData, cardData } from './storiesData';

afterEach(cleanup);

describe('CardGroup', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<CardGroup {...cardGroupData} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the correct number of cards', () => {
    const { getAllByTestId } = render(<CardGroup {...cardGroupData} />);
    expect(getAllByTestId('card')).toHaveLength(2);
  });

  it('renders props correctly', () => {
    const { getByTestId } = render(<CardGroup {...cardData} />);
    expect(getByTestId('title').textContent).toBe('Exercises');
    expect(getByTestId('body').textContent).toBe(
      'Browse our exercise database with instructions, information and videos.',
    );
  });
});
