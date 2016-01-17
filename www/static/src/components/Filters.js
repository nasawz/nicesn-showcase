import classNames from "classnames"
import elementType from 'react-prop-types/lib/elementType'
import React, { PropTypes } from 'react'

const Filters = React.createClass({
  propTypes: {
    /**
     * You can use a custom element for this component
     */
    componentClass: elementType
  },
  getDefaultProps: function() {
    return {
      componentClass: 'ul'
    };
  },
  render() {
    let ComponentClass = this.props.componentClass;
    return (
      <ComponentClass {...this.props} className={classNames(this.props.className, 'filters floating cast-shadow mb0')}>
        <li data-filter="all" className="active">All</li>
        <li data-filter="Demo1" className="">Demo1</li>
        <li data-filter="Demo2" className="">Demo2</li>
      </ComponentClass>
      )
  }
})

export default Filters
