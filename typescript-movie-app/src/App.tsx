import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Router/Home';
import Detail from './Router/Detail';

const App = () => {
  const url = () => {
    const obj = {
      home: '/',
      movie: '/movie/*',
      blank: '',
      paramId: ':id',
    };
    return obj;
  };
  const {
    home, movie, blank, paramId,
  } = url();
  return (
    <Router>
      <Routes>
        <Route path={home} element={<Home />} />
        <Route path={movie}>
          <Route path={blank} element={<Detail />} />
          <Route path={paramId} element={<Detail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
