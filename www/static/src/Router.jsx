import createBrowserHistory from 'history/lib/createBrowserHistory'
import React from 'react';
import { Router, Route, Link, IndexRoute, useRouterHistory } from "react-router";

import About from "./pages/about.jsx";
import Container from "./Container.jsx";
import Empty from "./Empty.jsx";

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
      component: About
    },
    {
      path: '*',
      component: Empty
    }
  ]
}

let definedRouter = <Router history={appHistory} routes={rootRoute} />

module.exports = definedRouter
