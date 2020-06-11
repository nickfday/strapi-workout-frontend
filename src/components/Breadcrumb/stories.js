/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import * as mockData from './mockData.json';
import Breadcrumb from '.';

storiesOf('Breadcrumb', module).add('Breadcrumb', () => (
  <Breadcrumb
    currentTitle={mockData.currentTitle}
    previousTitle={mockData.previousTitle}
    previousSlug={mockData.previousSlug}
  />
));
