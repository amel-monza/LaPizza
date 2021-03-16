import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 
import { HomePage } from './pages/HomePage/HomePage';  
import { Menu1 } from './pages/Menu/Menus';

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
        component={Menu1}
      />
      <Redirect to="/" />
    </Switch>
 
  </Router>
);

export default App;
