import React from 'react';
import { Container } from '@material-ui/core';
import { MaterialAdvancedGridList } from 'components/MaterialUI/Layout/GridList/AdvancedGridList';
import { ArticleTypes } from './types';

const ArticleList: React.FC<ArticleTypes> = ({ articles }) => {
  articles[0]['featured'] = true;

  return (
    <Container data-testid="articleList">
      <h1>Articles</h1>
      <MaterialAdvancedGridList items={articles} />
    </Container>
  );
};

export { ArticleList };
