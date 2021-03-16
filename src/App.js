import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 
import { HomePage } from './pages/HomePage/HomePage';  
import MENU from './global/routes';
import { Menu } from './pages/Menu/Menu';

const App = () => (
  <Router>
    
    <Switch>
      <Route
        exact
        path="/"
        component={HomePage}
      />
      <Route
        exact
        path={MENU}
        component={Menu}
      />
      <Redirect to="/" />
    </Switch>
 
  </Router>
);

export default App;
