import createBrowserHistory from 'history/lib/createBrowserHistory'
import React from 'react';
import { Router, Route, Link, IndexRoute, useRouterHistory } from "react-router";

import AboutContainer from "./containers/AboutContainer.js";
import Container from "./Container.jsx";
import Empty from "./Empty.jsx";

// import About from "./pages/about.jsx";

const createAppHistory = useRouterHistory(createBrowserHistory);
const appHistory = createAppHistory({
  queryKey: false
});

const rootRoute = {
  childRoutes: [
    {
      path: '/',
      onEnter: function(nextState, replace) {
        replace('/about')
      }
    },
    {
      path: '/about',
      component: AboutContainer
    },
    {
      path: '*',
      component: Empty
    }
  ]
}

let definedRouter = <Router history={appHistory} routes={rootRoute} />

module.exports = definedRouter
