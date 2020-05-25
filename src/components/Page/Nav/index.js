import React from 'react';
//import PropTypes from 'prop-types';
import {
  Wrapper,
  StyledTypography,
  StyledMenuButton,
  StyledAppBar,
} from './styles';

import { Box, Toolbar } from '@material-ui/core';

import Drawer from '../Drawer';

const Nav = (items) => {
  return (
    <Box component="nav">
      <StyledAppBar position="static" color="primary">
        <Toolbar variant="dense">
          <Drawer {...items} />
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};

// Nav.propTypes = {};

export default Nav;
