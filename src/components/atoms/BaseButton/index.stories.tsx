import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { BaseButton } from './index';

export default {
  title: 'Atoms/BaseButton',
  decorators: [withKnobs],
};

const onclick = action('clicked');

export const button = () => {
  const variant = select(
    'Variant',
    ['contained', 'outlined', 'text'],
    undefined,
  );
  const href = text('href', '');
  const color = select('Color', ['primary', 'secondary'], undefined);
  const size = select('Size', ['small', 'medium', 'large'], undefined);
  const disabled = boolean('IsDisabled', false);
  const fullWidth = boolean('FullWidth', false);
  const children = text('Text', 'サインイン');

  return (
    <BaseButton
      variant={variant}
      href={href}
      color={color}
      size={size}
      onClick={onclick}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      {children}
    </BaseButton>
  );
};
