import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
          path={HOME_PAGE}
          component={HomePage}
        />
        <Route
          exact
          path={MENU}
          component={Menu}
        />
         
      </Switch>
    </Provider>
  </Router>
);

export default App;
