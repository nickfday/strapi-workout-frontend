import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { ArticleList } from './list';
import { ArticleTeaser } from './teaser';
import { ArticleDetail } from './detail';
import * as mockData from './fixtures.json';

afterEach(cleanup);

describe('ArticleList', () => {
  it('renders an article list', () => {
    const { getAllByTestId } = render(<ArticleList {...mockData.data} />);
    expect(getAllByTestId('articleList')).toHaveLength(1);
  });

  it('renders an article teaser', () => {
    const { getAllByTestId } = render(<ArticleTeaser {...mockData.data} />);
    expect(getAllByTestId('articleTeaser')).toHaveLength(1);
  });

  it('renders an article detail component', () => {
    const { getAllByTestId } = render(
      <ArticleDetail {...mockData.data.articles[0]} />
    );
    expect(getAllByTestId('articleDetail')).toHaveLength(1);
    expect(document.querySelector('h1').textContent).toBe('Sample Article');
  });
});
