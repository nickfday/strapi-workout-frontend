/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ArticleList } from './list';
import { ArticleTeaser } from './teaser';
import { ArticleDetail } from './detail';
import * as fixtures from './fixtures.json';

storiesOf('Article', module).add('Article List', () => (
  <ArticleList {...fixtures.data} />
));

storiesOf('Article', module).add('Article Teaser', () => (
  <ArticleTeaser {...fixtures.data} />
));

storiesOf('Article', module).add('Article Detail', () => (
  <ArticleDetail {...fixtures.data.articles[0]} />
));
