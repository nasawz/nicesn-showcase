import classNames from "classnames"
import elementType from 'react-prop-types/lib/elementType'
import React, { PropTypes } from 'react'

const NavUtility = React.createClass({
  propTypes: {
    /**
     * You can use a custom element for this component
     */
    componentClass: elementType
  },
  getDefaultProps: function() {
    return {
      componentClass: 'div'
    };
  },
  render() {
    let ComponentClass = this.props.componentClass;
    return (
      <ComponentClass {...this.props} className={classNames(this.props.className, 'nav-utility')}>
          {this.props.children}
      </ComponentClass>
      )
  }
})

export default NavUtility
