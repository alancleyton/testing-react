import React from 'react';
import './counter.css';

export const Counter = (): JSX.Element => {
  const [count, setCount] = React.useState<number>(0);

  const decrement = (): void => {
    setCount(count - 1);
  };

  const increment = (): void => {
    setCount(count + 1);
  };

  const reset = (): void => {
    setCount(0);
  };

  return (
    <div className="counter card">
      <span className="counter display">{count}</span>

      <div className="counter buttons">
        <button className="counter button" onClick={decrement}>
          -
        </button>

        <button className="counter reset-button" onClick={reset}>
          RESET
        </button>

        <button className="counter button" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};
