/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ArticleList } from './list';
import { ArticleTeaser } from './teaser';
import { ArticleDetail } from './detail';
import * as mockData from './mockData.json';

storiesOf('Article', module).add('Article List', () => (
  <ArticleList {...mockData.data} />
));

storiesOf('Article', module).add('Article Teaser', () => (
  <ArticleTeaser {...mockData.data} />
));

storiesOf('Article', module).add('Article Detail', () => (
  <ArticleDetail {...mockData.data.articles[0]} />
));
