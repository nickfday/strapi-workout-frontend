import React from 'react';
//import PropTypes from 'prop-types';
import {
  Wrapper,
  StyledTypography,
  StyledMenuButton,
  StyledAppBar,
} from './styles';

import { Container, Grid, Hidden } from '@material-ui/core';

import { Box, Toolbar } from '@material-ui/core';

import DesktopNav from './desktopNav';
import Drawer from '../Drawer';
import Logo from '../logo';

const Nav = (items) => {
  return (
    <Box component="nav" mb={5}>
      <StyledAppBar position="static">
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Hidden mdUp>
              <Grid item>
                <Drawer {...items} />
              </Grid>
            </Hidden>

            <Logo />

            <Hidden smDown>
              <Grid item>
                <DesktopNav {...items} />
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </StyledAppBar>
    </Box>
  );
};

// Nav.propTypes = {};

export default Nav;
