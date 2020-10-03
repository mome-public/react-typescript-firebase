import React from 'react';
import { render } from '@testing-library/react';
import { TopTemplate } from './index';

test('renders learn react link', () => {
  const { getByText } = render(<TopTemplate />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
