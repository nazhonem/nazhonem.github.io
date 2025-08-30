import React from 'react';
import { render, screen } from '@testing-library/react';
import DevHome from './home';

test('renders learn react link', () => {
  render(<DevHome />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
