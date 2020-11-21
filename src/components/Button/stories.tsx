import React from 'react';
import { Meta } from '@storybook/react';
import * as fixtures from './fixtures';

import Button, { ButtonProps } from '.';

export default {
  title: 'Material UI/Inputs/Button',
  component: Button,
} as Meta;

export const Default = (args: ButtonProps) => (
  <Button {...args}>Button Text</Button>
);
Default.args = fixtures.buttonDefault;

export const Variant = (args: ButtonProps) => (
  <Button {...args}>Button Text</Button>
);
Variant.args = fixtures.buttonVariant;
