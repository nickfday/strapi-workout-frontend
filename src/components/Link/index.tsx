import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

export interface LinkProps {
  url: string;
  title?: string;
  noUnderline?: boolean;
}

declare global {
  interface Window {
    next: object;
  }
}

interface StyledSpanProps {
  noUnderline?: boolean;
}

const StyledLink = styled.a<StyledSpanProps>`
  text-decoration: ${({ noUnderline }) => (noUnderline ? 'none' : 'underline')};
  cursor: pointer;
  font-size: inherit;
  color: inherit;
`;

const Link: React.FC<LinkProps> = ({ children, url, noUnderline }) => {
  if (typeof window !== 'undefined') {
    return (
      <NextLink href={url} passHref>
        <StyledLink noUnderline={noUnderline} data-testid="anchor">
          {children}
        </StyledLink>
      </NextLink>
    );
  } else {
    return (
      <a data-testid="anchor" href={url}>
        {children}
      </a>
    );
  }
};

export default Link;
