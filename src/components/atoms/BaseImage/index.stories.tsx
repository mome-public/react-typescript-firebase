import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { BaseImage } from './index';

export default {
  title: 'Atoms/BaseImage',
  decorators: [withKnobs],
};

export const image = () => {
  const src = text('src', '');
  const alt = text('alt', '');

  return <BaseImage src={src} alt={alt} />;
};
