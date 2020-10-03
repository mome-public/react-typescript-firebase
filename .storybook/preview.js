import { configure, addParameters } from '@storybook/react';
import '../src/assets/css/common.scss';

addParameters({
  backgrounds: [
    { name: 'Default', value: '#feefec', default: true },
    { name: 'White', value: '#fff' },
  ],
});

configure(
  require.context('../src/components', true, /\.stories\.tsx$/),
  module,
);
