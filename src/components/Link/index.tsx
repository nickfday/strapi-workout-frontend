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
  noUnderline: boolean;
}

const StyledSpan = styled.span<StyledSpanProps>`
  text-decoration: ${({ noUnderline }) => (noUnderline ? 'none' : 'underline')};
  cursor: pointer;
  font-size: inherit;
  color: inherit;
`;

const Link: React.FC<LinkProps> = ({ children, url, noUnderline }) => {
  if (typeof window !== 'undefined') {
    return (
      <NextLink href={url}>
        <StyledSpan noUnderline={noUnderline}>
          <a data-testid="anchor">{children}</a>
        </StyledSpan>
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
