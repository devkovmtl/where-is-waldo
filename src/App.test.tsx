import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe.skip('<App />', () => {
  test.skip('renders learn react link', () => {
    render(<App />);
    const h1Element = screen.queryByText('Find Waldo !');
    expect(h1Element).toBeInTheDocument();
  });
});
