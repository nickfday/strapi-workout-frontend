/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { MaterialAdvancedGridList } from './AdvancedGridList';
import * as mockData from './mockData.json';

storiesOf('Material UI/Layout/Grid List', module).add(
  'Advanced Grid List',
  () => <MaterialAdvancedGridList items={mockData.data.articles} />,
);
