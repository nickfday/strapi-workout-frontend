import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import {
  Wrapper,
  StyledTypography,
  StyledMenuButton,
  StyledAppBar,
} from './styles';

import { Container, Grid, Hidden, Menu, MenuItem } from '@material-ui/core';

import { Box, Toolbar } from '@material-ui/core';

import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

import DesktopNav from './desktopNav';
import Drawer from '../Drawer';
import Logo from '../logo';
// import Login from './login';
// import Logout from 'src/components/Auth/Logout';
import Link from 'src/components/Link';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(1),
  },
  gridItem: {
    flexGrow: 1,
  },
  menu: {
    padding: '20px',
  },
}));

const Nav = (items) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const isMenuOpen = Boolean(anchorEl);
  const classes = useStyles();

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
              <Grid item className={classes.gridItem}>
                <DesktopNav {...items} />
              </Grid>
            </Hidden>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              className={classes.menuButton}
            >
              <AccountCircle />
            </IconButton>
          </Grid>
        </Container>
      </StyledAppBar>

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        classes={classes.menu}
      >
        <MenuItem>
          <Link url="/login">Login</Link>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Nav;
