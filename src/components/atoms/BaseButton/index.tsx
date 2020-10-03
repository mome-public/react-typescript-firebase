import React, { FC, ReactNode } from 'react';
import Button from '@material-ui/core/Button';

type Props = {
  children?: ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  href?: string;
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
};

export const BaseButton: FC<Props> = ({
  children,
  variant = 'contained',
  href = '',
  color = 'primary',
  size = 'large',
  onClick,
  disabled = false,
  fullWidth = false,
}) => {
  return href ? (
    <Button
      href={href}
      color={color}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      {children}
    </Button>
  ) : (
    <Button
      variant={variant}
      fullWidth={fullWidth}
      color={color}
      size={size}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
