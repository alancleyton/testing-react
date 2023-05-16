import React from 'react';
import Counter from '../../components/counter';
import './counter-page.css';

export const CounterPage = (): JSX.Element => {
  return (
    <div className="CounterPage" data-testid="CounterPage">
      <Counter />
    </div>
  );
};
