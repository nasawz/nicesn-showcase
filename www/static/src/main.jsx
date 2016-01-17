// import 'babel-core/polyfill'

import React from 'react';
import ReactDOM from 'react-dom';

import Home from "./pages/home.jsx";

new Promise(resolve => {
  if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', resolve);
  } else {
    window.attachEvent('onload', resolve);
  }
}).then(() => {
  ReactDOM.render(
    <Home />,
    document.getElementById('container')
  );
});
