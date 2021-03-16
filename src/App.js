import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 
import { HomePage } from '../src/pages/Menu/Menu';  
import { Menu } from '../src/pages/HomePage/HomePage';

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
        path="/menu"
        component={Menu}
      />
      <Redirect to="/" />
    </Switch>
 
  </Router>
);

export default App;
