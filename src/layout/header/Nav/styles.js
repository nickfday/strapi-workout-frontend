import styled, { css } from 'styled-components';
import { IconButton, Typography, AppBar } from '@material-ui/core';

import { useTheme } from '@material-ui/core/styles';

export const StyledAppBar = styled(AppBar)`
  height: 67px;
`;

export const Wrapper = styled.div`
  flex-grow: 1;
`;

export const StyledTypography = styled(Typography)`
  /* flex-grow: 1; */
  a {
    color: white;
    text-decoration: none;
  }
`;
