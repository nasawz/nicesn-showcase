import classNames from "classnames"
import elementType from 'react-prop-types/lib/elementType'
import React, { PropTypes } from 'react'

const NavContainer = React.createClass({
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
    let styleObj = {
      minHeight: "55px"
    }
    return (
      <ComponentClass {...this.props} style={styleObj} className={classNames(this.props.className, 'nav-container')}>
        {this.props.children}
      </ComponentClass>
      )
  }
})

export default NavContainer
