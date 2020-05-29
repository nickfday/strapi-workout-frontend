import React from 'react';
import { Container, Grid } from '@material-ui/core';
import styled from 'styled-components';

import { MediaProps } from 'types/media';
import gql from 'graphql-tag';

const CtaWrapper = styled('div')<{ image: string }>`
  text-align: center;
  background: url(${({ image }) => image}) no-repeat;
  background-size: cover;
  min-height: 400px;
  width: 100%;
  display: flex;
`;

const TextArea = styled.div`
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 400px;
`;

export interface CtaBannerProps {
  ctaBanners: CtaBannerSingleProps[];
}

interface CtaBannerSingleProps {
  title: string;
  id: number;
  body: string;
  media: MediaProps;
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
    }
  }
`;

const CtaBanner: React.FC<CtaBannerProps> = (props) => {
  return (
    <Container>
      <Grid container spacing={3}>
        {props.ctaBanners.map((item) => {
          item;
          return (
            <Grid item xs={12} key={item.id}>
              <CtaBannerSingle {...item} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

const CtaBannerSingle: React.FC<CtaBannerSingleProps> = ({
  title,
  body,
  media,
}) => {
  return (
    <CtaWrapper image={media.formats.large.url}>
      <TextArea>
        <h1>{title}</h1>
        <p>{body}</p>
      </TextArea>
    </CtaWrapper>
  );
};

// CtaBanner.propTypes = {};

export default CtaBanner;
export { CTABANNER_FRAGMENT };
