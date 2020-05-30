import React from 'react';
import clsx from 'clsx';
import {
  Button,
  ButtonGroup,
  Container,
  Drawer,
  List,
  Grid,
  Divider,
  IconButton,
  makeStyles,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'src/components/Link';

import styled, { css } from 'styled-components';

const StyledMenuIcon = styled(MenuIcon)`
  color: #fff;
`;

const StyledHeadingContainer = styled.div`
  float: left;
`;

const StyledHeading = styled.h1`
  float: left;
`;

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const TemporaryDrawer = (items) => {
  items;
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {items.data.NavData.map((item, index) => (
          <Link {...item.link} key={item.title}>
            <ListItem button key={item.title}>
              <ListItemText primary={item.title}>{item.title}</ListItemText>
            </ListItem>
          </Link>
          // <ListItem button key={item.title}>
          //   {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
          //   <ListItemText primary={item.title} />
          // </ListItem>
        ))}
      </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <StyledHeadingContainer>
            <ButtonGroup>
              <Button
                onClick={toggleDrawer(anchor, true)}
                className="menu-toggle"
              >
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <StyledMenuIcon />
                </IconButton>
              </Button>
            </ButtonGroup>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </StyledHeadingContainer>
          <StyledHeading>Everybody Active</StyledHeading>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TemporaryDrawer;
