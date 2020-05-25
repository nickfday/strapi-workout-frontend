import styled, { css } from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { useTheme } from '@material-ui/core/styles';

export const StyledAppBar = styled(AppBar)`
  background-color: red;
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
