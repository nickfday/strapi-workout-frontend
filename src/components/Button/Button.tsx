import React from 'react';
import { Button as MaterialButton } from '@material-ui/core';
import * as Styled from './styled';

export const ButtonVariants = {
  contained: 'contained',
  outlined: 'outlined',
  text: 'text',
};

export interface ButtonProps {
  variant?: keyof typeof ButtonVariants;
}

const Button: React.FC<ButtonProps> = ({ children, variant }) => (
  <MaterialButton variant={variant}>{children}</MaterialButton>
);

export default Button;
