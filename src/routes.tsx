import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './Pages/Home';
import Settings from './Pages/Settings';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Settings} path="/settings" exact />
    </BrowserRouter>
  );
};

export default Routes;
