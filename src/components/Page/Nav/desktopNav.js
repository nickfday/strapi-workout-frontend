import React from 'react';
import { Box, List, ListItem, ListItemText } from '@material-ui/core';
import Link from 'src/components/Link';
import styled, { css } from 'styled-components';

const StyledList = styled(List)`
  display: flex;
`;

const DesktopNav = (items) => {
  return (
    <StyledList>
      {items.data.NavData.slice(1).map((item) => (
        <Box key={item.title}>
          <Link {...item.link} key={item.title} noUnderline>
            <ListItem button key={item.title}>
              <ListItemText primary={item.title}>{item.title}</ListItemText>
            </ListItem>
          </Link>
        </Box>
      ))}
    </StyledList>
  );
};

export default DesktopNav;
