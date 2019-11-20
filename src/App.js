import React from 'react';

import { history } from './services/router/routerHistory-service'
import './App.css';

import Index from './components/atm/index';
import Account from './components/atm/account';

const App = props => {
  return (  
    <Router>
    <Index default path="/index" />
    <Account path="/account" />
  </Router>
);
}

export default App;

