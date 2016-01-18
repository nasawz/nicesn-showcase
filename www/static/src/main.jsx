// import 'babel-core/polyfill'

import injectTapEventPlugin from 'react-tap-event-plugin';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import definedRouter from './Router.jsx';
import reducer from './reducers'
import Home from "./pages/home.jsx";

injectTapEventPlugin();

const middleware = process.env.NODE_ENV === 'production' ?
    [thunk] :
    [thunk, logger()];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const store = createStoreWithMiddleware(reducer);

window.mr_navScrolled = false;

new Promise(resolve => {
  if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', resolve);
  } else {
    window.attachEvent('onload', resolve);
  }
}).then(() => {
  ReactDOM.render(
    <Provider store={store}>
      {definedRouter}
    </Provider>,
    document.getElementById('container')
  );
});
