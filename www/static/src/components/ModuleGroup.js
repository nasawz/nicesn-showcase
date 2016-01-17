import classNames from "classnames"
import elementType from 'react-prop-types/lib/elementType'
import React, { PropTypes } from 'react'

const ModuleGroup = React.createClass({
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
    let classes = {};

    classes['module-group'] = true;
    classes[this.props.direction] = this.props.direction;

    return (
      <ComponentClass {...this.props} className={classNames(this.props.className, classes)}>
          {this.props.children}
      </ComponentClass>
      )
  }
})

export default ModuleGroup
