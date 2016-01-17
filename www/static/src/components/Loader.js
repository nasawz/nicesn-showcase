import classNames from "classnames"
import React, { PropTypes } from 'react'

import Col from "./Col.js";
import Row from "./Row.js";

const Loader = React.createClass({
  render() {
    return (
      <Row  className={classNames(this.props.className, 'masonry-loader fixed-center')}>
        <Col sm={12} className="text-center">
          <div className="spinner"></div>
        </Col>
      </Row>
      )
  }
})

export default Loader
