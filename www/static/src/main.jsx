// import 'babel-core/polyfill'

import React from 'react';
import ReactDOM from 'react-dom';

import Button from "./components/react-nicesn/src/Button.js";

// import bootstrapUtils, { bsStyles, bsSizes, bsClass } from './components/react-nicesn/src/utils/bootstrapUtils.js';


// /components/react-nicesn/src/utils/bootstrapUtils.js



new Promise(resolve => {
  if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', resolve);
  } else {
    window.attachEvent('onload', resolve);
  }
}).then(() => {
  ReactDOM.render(
    <div>
      <Button>Default</Button>
      <Button active>Default</Button>
      <Button disabled>disabled</Button><br />
      <Button block>block</Button>
      <Button bsStyle="filled">filled</Button>
      <Button bsStyle="filled" active>filled</Button>
      <Button bsStyle="filled" disabled>filled</Button><br />
      <Button bsStyle="rounded">rounded</Button>
      <Button bsStyle="rounded" active>rounded</Button>
      <Button bsStyle="rounded" disabled>rounded</Button>
      <Button bsStyle="icon">
        <i className="ti-arrow-up"></i>
      </Button>
      { /*
        */ }
    </div>,
    document.getElementById('container')
  );
});
