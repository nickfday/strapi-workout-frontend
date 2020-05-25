import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import gql from 'graphql-tag';
// import { HEROBANNER_FRAGMENT } from 'components/HeroBanner';

import {
  StyledWrapper,
  StyledBanner,
  StyledHeading,
  StyledVideo,
} from './styles';

// import HeroBannerFragment from './fragment.graphql';

export interface HeroBannerProps {
  title: string;
  media: {
    url: string;
  };
  video: {
    url: string;
  };
}

const HEROBANNER_FRAGMENT = gql`
  fragment HeroBanners on ComponentGlobalPageBanner {
    title
    id
    media {
      url
      formats
    }
    video {
      url
    }
  }
`;

const HeroBanner: React.FC<HeroBannerProps> = ({ title, media, video }) => {
  if (media !== null) {
    return (
      <Box mb={5} data-testid="heroBannerImage">
        <StyledWrapper>
          <StyledBanner {...media}>
            <Container>
              <Grid alignItems="center" container>
                <StyledHeading>{title}</StyledHeading>
              </Grid>
            </Container>
          </StyledBanner>
        </StyledWrapper>
      </Box>
    );
  } else {
    return (
      <Box mb={3} data-testid="heroBannerVideo">
        {/* <video src={`http://localhost:1337${video.url}`} /> */}
        <StyledVideo src={`${process.env.API_URL}${video.url}`} />
      </Box>
    );
  }
};

export default HeroBanner;
export { HEROBANNER_FRAGMENT };
