import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { heroBannerImageData, heroBannerVideoData } from './storiesData';
import HeroBanner from './index';

export default {
  title: 'Hero Banner',
  component: HeroBanner,
  decorators: [withKnobs],
};

export const Image = () => <HeroBanner {...heroBannerImageData} />;
export const Video = () => <HeroBanner {...heroBannerVideoData} />;
