import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Container, Grid } from '@material-ui/core';
import Breadcrumb from 'components/Breadcrumb';
import { ArticleDataItem } from './types';

const StyledImage = styled.img`
  float: right;
  margin-left: 10px;
`;

const ArticleDetail: React.FC<ArticleDataItem> = ({ title, body, media }) => {
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
      <StyledImage src={media.formats.small.url} />
      <ReactMarkdown source={body} />
    </Container>
  );
};

export { ArticleDetail };
