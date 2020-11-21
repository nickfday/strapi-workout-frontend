import React from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import Link from 'components/Link';
import { MaterialAdvancedGridList } from 'components/MaterialUI/Layout/GridList/AdvancedGridList';
import { ArticleTypes } from './types';

const ArticleTeaser: React.FC<ArticleTypes> = ({ articles }) => {
  // set first item as featured
  articles[0].featured = true;

  return (
    <Box mb={2} data-testid="articleTeaser">
      <MaterialAdvancedGridList items={articles} />
      <StyledLinkWrapper>
        <Link url="/articles">
          <h3>See all articles</h3>
        </Link>
      </StyledLinkWrapper>
    </Box>
  );
};

const StyledLinkWrapper = styled.div`
  text-align: center;
`;

export { ArticleTeaser };
