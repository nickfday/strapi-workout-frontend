import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import theme from 'components/Page/theme';

const StyledReactMarkdown = styled(ReactMarkdown)`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    border-bottom: 2px solid black;
    display: inline-block;
  }

  img {
    width: 400px;
    margin-left: 10px;
  }
  @media only screen and (min-width: ${theme.breakpoints.sm}px) {
    img {
      float: right;
    }
  }
`;

const Markdown = ({ source }) => {
  return <StyledReactMarkdown source={source} />;
};

export default Markdown;
