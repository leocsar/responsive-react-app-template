import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './Pages/Home';
import Settings from './Pages/Settings';

interface Props {
  toggleTheme(): void;
}

const Routes: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <>
      <Route component={Home} path="/" exact />
      <Route render={props => <Settings toggleTheme={toggleTheme}/>} path="/settings" exact />
    </>
  );
};

export default Routes;
