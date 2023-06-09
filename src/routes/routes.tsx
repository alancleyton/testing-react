import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/Home';
import CounterPage from '../pages/Counter';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/examples/counter" element={<CounterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
