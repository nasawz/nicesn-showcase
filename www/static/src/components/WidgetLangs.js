import React, { PropTypes } from 'react'

import Module from "./Module.js";

const WidgetLangs = React.createClass({

  renderOthers(others) {
    let i = 0;
    return others.map((item) => {
      i++;
      return (<li key={i}><a href="javascript:;">{item.title}</a></li>)
      })
    },
    render() {
      let curr = {};
      let others = [];
      this.props.langs.map((lang) => {
        if (lang.curr) {
          curr = lang
        } else {
          others.push(lang)
        }
      })
      return (<Module className="language"  direction="left" widget>
      <ul className="menu">
        <li className="has-dropdown">
          <a href="javascript:;">{curr.title}</a>
          <ul>
            { this.renderOthers(others) }
          </ul>
        </li>
      </ul>

    </Module>)
    }
  })

  export default WidgetLangs
