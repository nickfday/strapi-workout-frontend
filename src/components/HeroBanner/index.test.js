import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { heroBannerImageData, heroBannerVideoData } from './storiesData';
import HeroBanner from '.';

afterEach(cleanup);

describe('HeroBanner', () => {
  it('renders video banner without crashing', () => {
    const { getAllByTestId } = render(<HeroBanner {...heroBannerVideoData} />);
    expect(getAllByTestId('heroBannerVideo')).toHaveLength(1);
  });

  it('renders image banner without crashing', () => {
    const { getAllByTestId } = render(<HeroBanner {...heroBannerImageData} />);
    expect(getAllByTestId('heroBannerImage')).toHaveLength(1);
  });
});
