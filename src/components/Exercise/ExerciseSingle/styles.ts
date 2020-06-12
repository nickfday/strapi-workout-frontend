import styled from 'styled-components';
import { List } from '@material-ui/core';

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

const StyledList = styled(List)`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  max-height: 494px;
  padding: 0;
`;

export { StyledList, StyledVideo };
