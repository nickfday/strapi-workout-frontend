import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { ArticleList } from './list';
import { ArticleTeaser } from './teaser';
import { ArticleDetail } from './detail';
import * as mockData from './mockData.json';

afterEach(cleanup);

describe('ArticleList', () => {
  it('renders an routine list', () => {
    const { getAllByTestId } = render(<ArticleList {...mockData.data} />);
    expect(getAllByTestId('routineList')).toHaveLength(1);
  });

  it('renders an routine teaser', () => {
    const { getAllByTestId } = render(<ArticleTeaser {...mockData.data} />);
    expect(getAllByTestId('routineTeaser')).toHaveLength(1);
  });

  it('renders an routine detail component', () => {
    const { getAllByTestId } = render(
      <ArticleDetail {...mockData.data.routines[0]} />
    );
    expect(getAllByTestId('routineDetail')).toHaveLength(1);
    expect(document.querySelector('h1').textContent).toBe('Sample Routine');
  });
});
