import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter', () => {
  describe('Renders Counter component', () => {
    beforeEach(() => {
      render(<Counter />);
    });

    it('should render correctly', () => {
      expect(screen.getByText(/counter:/i)).toBeInTheDocument();
    });

    it('should render with counter 0 by default', () => {
      expect(screen.getByText('COUNTER: 0')).toBeInTheDocument();
    });

    describe('When decrement button is clicked', () => {
      beforeEach(() => {
        fireEvent.click(screen.getByRole('button', { name: '-' }));
      });

      it('should decrement counter', () => {
        expect(screen.getByText('COUNTER: -1')).toBeInTheDocument();
      });
    });

    describe('When increment button is clicked', () => {
      beforeEach(() => {
        fireEvent.click(screen.getByRole('button', { name: '+' }));
      });

      it('should increment counter', () => {
        expect(screen.getByText('COUNTER: 1')).toBeInTheDocument();
      });
    });

    describe('When reset button is clicked', () => {
      beforeEach(() => {
        fireEvent.click(screen.getByRole('button', { name: /reset/i }));
      });

      it('should reset counter to 0', () => {
        expect(screen.getByText('COUNTER: 0')).toBeInTheDocument();
      });
    });
  });
});
