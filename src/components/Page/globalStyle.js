import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  a {
    font-size: inherit;
    color: inherit;
  }
  a.no-underline {
    text-decoration: none;
  }
`;

export default GlobalStyle;
