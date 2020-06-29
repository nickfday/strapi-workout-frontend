import React from 'react';
import NextLink from 'next/link';

declare global {
  interface Window {
    next: object;
  }
}

export interface LinkProps {
  url: string;
  title?: string;
}

const Link: React.FC<LinkProps> = ({ children, url }) => {
  if (typeof window !== 'undefined') {
    return (
      <NextLink href={url} passHref>
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
