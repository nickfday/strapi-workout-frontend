import React from 'react';
import { Meta } from '@storybook/react';
import * as fixtures from './fixtures';

import Link, { LinkProps } from '.';

export default {
  title: 'Components/Link',
  component: Link
} as Meta;

export const Default = (args: LinkProps) => <Link {...args} />;
Default.args = fixtures.linkDefault;
