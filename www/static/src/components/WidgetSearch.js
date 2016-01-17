import React, { PropTypes } from 'react'

import Module from "./Module.js";

const WidgetSearch = React.createClass({
  render() {
    return (<Module className="search-widget-handle"  direction="left" widget>
      <div className="search">
        <i className="ti-search" style={{
        width: "20px",
        height: "20px"
      }}></i>
        <span className="title">
            搜索
        </span>
      </div>
      <div className="function">
        <form className="search-form">
          <input type="text" placeholder="请输入关键字" />
        </form>
      </div>
    </Module>)
  }
})

export default WidgetSearch
