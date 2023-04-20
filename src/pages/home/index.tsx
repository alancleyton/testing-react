import React from 'react';
import ReactIcon from '../../../public/react.svg';
import './styles.css';

const Home = (): JSX.Element => {
  return (
    <main className="home">
      <header className="home-header">
        <img className="home-header-icon" src={ReactIcon} alt="React" />
        <h2 className="home-header-heading">Testing React Apps</h2>
      </header>
    </main>
  );
};

export default Home;
