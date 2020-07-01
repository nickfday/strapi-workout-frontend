import React from 'react';
import {
  Appbar,
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import Link from 'components/Link';
import styled from 'styled-components';
import theme from '../../theme';

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
  @media only screen and (min-width: ${theme.breakpoints.values.sm}px) {
    display: flex;
    height: 67px;
  }
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: row;
  }
`;

const Footer = (props) => {
  return (
    <StyledBottomNav color="primary" position="static">
      <Container>
        <StyledList>
          <StyledBox>
            {BottomNavData.data.NavData.map((item) => (
              <Link {...item.link} key={item.title}>
                <ListItem button key={item.title}>
                  <ListItemText primary={item.title}>{item.title}</ListItemText>
                </ListItem>
              </Link>
            ))}
          </StyledBox>
        </StyledList>
      </Container>
    </StyledBottomNav>
  );
};

export default Footer;
