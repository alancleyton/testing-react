import React from 'react';
import Counter from '../../components/Counter';
import './CounterPage.css';

export const CounterPage = (): JSX.Element => {
  return (
    <div className="CounterPage" data-testid="CounterPage">
      <Counter />
    </div>
  );
};
