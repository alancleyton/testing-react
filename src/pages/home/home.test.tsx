import React from 'react';
import { screen, render } from '@testing-library/react';
import { Home } from './home';

describe('Home', () => {
  it('Should render correctly', () => {
    render(<Home />);
    expect(screen.getByText(/Testing React Apps/i)).toBeInTheDocument();
  });
});
