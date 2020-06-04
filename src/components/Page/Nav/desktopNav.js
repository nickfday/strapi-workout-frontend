import React from 'react';
import { Box, List, ListItem, ListItemText } from '@material-ui/core';
import Link from 'src/components/Link';
import styled, { css } from 'styled-components';

const StyledList = styled(List)`
  display: flex;
`;

const StyledBox = styled(Box)`
  a {
    text-decoration: none;
  }
`;

const DesktopNav = (items) => {
  return (
    <StyledList>
      {items.data.NavData.slice(1).map((item) => (
        <StyledBox key={item.title}>
          <Link {...item.link} key={item.title}>
            <ListItem button key={item.title}>
              <ListItemText primary={item.title}>{item.title}</ListItemText>
            </ListItem>
          </Link>
        </StyledBox>
      ))}
    </StyledList>
  );
};

export default DesktopNav;
