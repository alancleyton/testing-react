import React from 'react';
import { render, screen } from '@testing-library/react';
import { CounterPage } from './CounterPage';

describe('CounterPage', () => {
  describe('Renders counter page', () => {
    beforeEach(() => {
      render(<CounterPage />);
    });

    it('should render correctly', () => {
      expect(screen.getByTestId('CounterPage')).toBeInTheDocument();
    });
  });
});
