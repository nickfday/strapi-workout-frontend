import React from 'react';
import { Box, Grid } from '@material-ui/core';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { MediaProps } from 'types/media';
import gql from 'graphql-tag';

const StyledCtaWrapper = styled('div')<{
  image: string;
  backgroundPositionY: number;
}>`
  background: url(${({ image }) => image}) no-repeat;
  background-size: cover;
  min-height: 350px;
  width: 100%;

  @media (min-width: 830px) {
    background-position-y: ${(props) =>
      `${props.backgroundPositionY}px` || '0px'};
  }
`;

const StyledTextArea = styled.div`
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  display: flex;
  min-height: 350px;
  width: 60%;
  font-size: 16px;
  align-items: center;
`;

export interface CtaBannerProps {
  ctaBanners: CtaBannerSingleProps[];
}

interface CtaBannerSingleProps {
  title: string;
  id: number;
  body: string;
  media: MediaProps;
  backgroundPositionY: number;
  backgroundPositionX: number;
}

const CTABANNER_FRAGMENT = gql`
  fragment ctaBanners on ComponentGlobalCtaBanner {
    ctaBanners {
      id
      title
      body
      media {
        url
        formats
      }
      link {
        title
        url
      }
      backgroundPositionX
      backgroundPositionY
    }
  }
`;

const CtaBanner: React.FC<CtaBannerProps> = (props) => {
  return (
    <Box mb={5}>
      <Grid container spacing={3}>
        {props.ctaBanners.map((item) => {
          return (
            <Grid item xs={12} key={item.id}>
              <CtaBannerSingle {...item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

const CtaBannerSingle: React.FC<CtaBannerSingleProps> = ({
  title,
  body,
  media,
  backgroundPositionY,
}) => {
  return (
    <StyledCtaWrapper
      image={media.formats.large.url}
      backgroundPositionY={backgroundPositionY}
    >
      <StyledTextArea>
        {title && <h1>{title}</h1>}
        <div>
          <ReactMarkdown source={body} />
        </div>
      </StyledTextArea>
    </StyledCtaWrapper>
  );
};

// CtaBanner.propTypes = {};

export default CtaBanner;
export { CTABANNER_FRAGMENT };
