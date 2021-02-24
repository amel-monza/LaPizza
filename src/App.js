import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { store } from 'store';
import { HomePage } from 'pages/HomePage';
import { HOME_PAGE, MENU } from 'global/routes';

import { Provider } from 'react-redux'; 
import { Menu } from 'pages/Menu/menu';

const App = () => (
  <Router>
    <Provider store={store}>
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
    </Provider>
  </Router>
);

export default App;
