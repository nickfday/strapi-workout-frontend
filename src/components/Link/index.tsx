import React from 'react';
import NextLink from 'next/link';

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

const Link: React.FC<LinkProps> = ({ children, url, noUnderline }) => {
  if (typeof window !== 'undefined') {
    return (
      <NextLink href={url}>
        <a className={noUnderline ? 'no-underline' : ''} data-testid="anchor">
          {children}
        </a>
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
