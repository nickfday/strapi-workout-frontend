import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import GlobalStyle from './globalStyle';
import Header from './Header';
import Meta from './Meta';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

const Inner = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CssBaseline />
        <Meta />
        <Header />
        {this.props.children}
      </ThemeProvider>
    );
  }
}
