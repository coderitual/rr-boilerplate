import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import App from './App';

test('App renders correctly', () => {
  const { container, getByText } = render(<App />);
  expect(container.firstChild).toMatchSnapshot();

  expect(container.firstChild).toHaveClass('app');

  fireEvent.click(getByText('Hello world'));
  expect(container.firstChild).toMatchSnapshot();
});
