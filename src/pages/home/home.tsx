import React from 'react';
import ReactIcon from '../../../public/react.svg';
import './home.css';

export const Home = (): JSX.Element => {
  return (
    <main className="HomePage">
      <header className="HomePage__header">
        <figure className="HomePage__icon">
          <img src={ReactIcon} alt="ReactJs" />
        </figure>
        <h2 className="HomePage__heading">Testing React Apps</h2>
      </header>
    </main>
  );
};
