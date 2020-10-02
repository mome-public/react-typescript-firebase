import { configure, addDecorator } from '@storybook/react';

import '../src/index.css';
import '../src/assets/css/common.scss';

const req = require.context('../src/components', true, /.(story|stories).tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
