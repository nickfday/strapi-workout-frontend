import { PropsWithChildren } from 'react';
import { LinkProps } from '.';

export const linkDefault: PropsWithChildren<LinkProps> = {
  href: 'http://www.google.com',
  children: 'a link'
};
