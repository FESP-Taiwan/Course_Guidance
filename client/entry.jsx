// @flow
/* eslint global-require: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import {
  store,
  history,
} from './store.js';
import App from './App.jsx';

(async () => {
  const root = document.getElementById('root');

  if (root) {
    ReactDOM.render(
      <App store={store} history={history} />,
      root,
    );
  }
})();
