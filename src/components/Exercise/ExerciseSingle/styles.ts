import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const StyledVideo = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  padding-bottom: calc(var(--aspect-ratio, 0.5625) * 100%);
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const StyledGrid = styled(Grid)`
  padding: 0;
  display: flex;
  flex-direction: column;
  max-height: 510px;
`;

export { StyledVideo, StyledGrid };
