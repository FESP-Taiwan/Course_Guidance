// @flow

import React from 'react';
import { MemoryRouter, Router } from 'react-router';
import {
  Switch,
  Route,
} from 'react-router-dom';
import debug from 'debug';
import { hot } from 'react-hot-loader';
import { StyleRoot } from 'radium';
import { Provider } from 'react-redux';
import MainBoard from './containers/MainBoard';

// Containers

// Debug mode
if (process.env.NODE_ENV !== 'production') {
  debug.enable('EZWeb:*');
}

const styles = {
  root: {
    width: '100%',
    height: '100%',
    display: 'block',
    position: 'relative',
  },
};

function App({
  store,
  history,
}: any) {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <StyleRoot style={styles.root}>
          <Router history={history}>
            <Switch>
              <Route path="/" render={() => (<MainBoard store={store} />)} />
            </Switch>
          </Router>
        </StyleRoot>
      </MemoryRouter>
    </Provider>
  );
}

export default hot(module)(App);
