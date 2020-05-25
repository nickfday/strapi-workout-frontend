import React, { Component } from 'react';
import styled, { injectGlobal, createGlobalStyle } from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

const StyledPage = styled.div`
  background: white;
  color: ${(props) => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
  a {
    font-size: inherit;
    text-decoration: none;
    color: inherit;
  }
`;

export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CssBaseline />
        <StyledPage>
          <Meta />
          <Header />
          {this.props.children}
        </StyledPage>
      </ThemeProvider>
    );
  }
}
