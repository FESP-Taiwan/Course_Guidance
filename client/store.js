// @flow
/* eslint global-require: 0 */

import thunk from 'redux-thunk';
import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import fetchMiddleware from 'redux-middleware-fetch';
import reducers from './reducers/index';

declare var module: {
  hot: {
    accept: (path: ?string, callback: ?() => void) => void
  }
}

/* eslint-enable */
export const history = createHistory();

const storeComposeArray = [applyMiddleware(
  thunk,
  routerMiddleware(history),
  fetchMiddleware,
)];

export const store = createStore(
  reducers,
  {},
  compose(...storeComposeArray),
);

if (module.hot) {
  module.hot.accept('./reducers', () => store.replaceReducer(require('./reducers/index.js').default));
}
