import React, { FC, ReactNode } from 'react';
import Button from '@material-ui/core/Button';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  fullWidth?: boolean;
};

const BaseButton: FC<Props> = ({
  children,
  onClick,
  href = '',
  variant = 'contained',
  color = 'primary',
  size = 'large',
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

export default BaseButton;
