import React from 'react';
import Markdown from 'components/Markdown';
import { Container, Grid } from '@material-ui/core';
import Breadcrumb from 'components/Breadcrumb';
import { ArticleDataItem } from './types';

const ArticleDetail: React.FC<ArticleDataItem> = ({ title, body }) => {
  return (
    <Container data-testid="articleDetail">
      <Grid container spacing={2} justify="space-between">
        <Grid item xs={6} md={6}>
          <h1>{title}</h1>
        </Grid>

        <Grid item xs={6} md={3}>
          <Breadcrumb
            currentTitle={title}
            previousSlug={'/articles'}
            previousTitle="Articles"
          ></Breadcrumb>
        </Grid>
      </Grid>
      <Markdown source={body} />
    </Container>
  );
};

export { ArticleDetail };
