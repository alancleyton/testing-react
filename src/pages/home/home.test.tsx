import React from 'react';
import { screen, render } from '@testing-library/react';
import { Home } from './home';

describe('Home', () => {
  describe('Renders home page', () => {
    beforeEach(() => {
      render(<Home />);
    });

    it('should render correctly', () => {
      expect(screen.getByText(/Testing React Apps/i)).toBeInTheDocument();
    });
  });
});
