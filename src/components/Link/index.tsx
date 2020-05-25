import React from 'react';
import NextLink from 'next/link';

export interface LinkProps {
  url: string;
  title?: string;
}

declare global {
  interface Window {
    next: object;
  }
}

const Link: React.FC<LinkProps> = ({ children, url }) => {
  if (typeof window.next !== 'undefined') {
    return (
      <NextLink href={url}>
        <a data-testid="anchor">{children}</a>
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
