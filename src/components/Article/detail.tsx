import React from 'react';
import Markdown from 'components/Markdown';
import { Box, Grid } from '@material-ui/core';
import Breadcrumb from 'components/Breadcrumb';
import { ArticleDataItem } from './types';

const ArticleDetail: React.FC<ArticleDataItem> = ({ title, body }) => {
  return (
    <Box data-testid="articleDetail">
      <Grid container spacing={2} justify="space-between">
        <Grid item xs={6}>
          <h1>{title}</h1>
        </Grid>

        <Grid item xs={6}>
          <Breadcrumb
            currentTitle={title}
            previousSlug={'/articles'}
            previousTitle="Articles"
          ></Breadcrumb>
        </Grid>
      </Grid>
      <Markdown source={body} />
    </Box>
  );
};

export { ArticleDetail };
