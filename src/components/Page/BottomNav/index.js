import React from 'react';
import {
s Container,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import Link from 'components/Link';
import styled from 'styled-components';
import theme from 'components/Page/theme';

const BottomNavData = {
  data: {
    NavData: [
      {
        id: '1',
        title: 'About us',
        link: {
          title: 'About us',
          url: '/about-us',
        },
      },
      {
        id: '2',
        title: 'Contact',
        link: {
          title: 'Contact',
          url: '/contact',
        },
      },
      {
        id: '3',
        title: 'Privacy Policy',
        link: {
          title: 'Privacy Policy',
          url: '/privacy-policy',
        },
      },
      {
        id: '4',
        title: 'Terms and Conditions',
        link: {
          title: 'Terms and Conditions',
          url: '/terms-and-conditions',
        },
      },
    ],
  },
};

const StyledBottomNav = styled.div`
  &&& {
    bottom: 0;
    top: auto;
    display: flex;
    flex-direction: row;
    background: #373a3c;
    color: #fff;
  }
`;

const StyledList = styled(List)`
  @media only screen and (min-width: ${theme.breakpoints.sm}px) {
    display: flex;
    height: 67px;
  }
`;

const BottomNav = (props) => {
  return (
    <StyledBottomNav color="primary" position="static">
      <Container>
        <StyledList>
          {BottomNavData.data.NavData.map((item) => (
            <Link {...item.link} key={item.title} noUnderline>
              <ListItem button key={item.title}>
                <ListItemText primary={item.title}>{item.title}</ListItemText>
              </ListItem>
            </Link>
          ))}
        </StyledList>
      </Container>
    </StyledBottomNav>
  );
};

export default BottomNav;
