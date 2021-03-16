import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 
import { HomePage } from 'pages/HomePage/HomePage';  
import { Menu } from 'pages/Menu/Menu';

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
