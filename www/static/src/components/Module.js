import classNames from "classnames"
import elementType from 'react-prop-types/lib/elementType'
import React, { PropTypes } from 'react'

import styleMaps from './styleMaps';

const Module = React.createClass({
  propTypes: {
    /**
     * Hide column
     *
     * on Extra small devices Phones
     *
     * adds class `hidden-xs`
     */
    xsVisible: React.PropTypes.bool,
    /**
     * Hide column
     *
     * on Small devices Tablets
     *
     * adds class `hidden-sm`
     */
    smVisible: React.PropTypes.bool,
    /**
     * Hide column
     *
     * on Medium devices Desktops
     *
     * adds class `hidden-md`
     */
    mdVisible: React.PropTypes.bool,
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


    /**
     * 生成class样式
     */
    Object.keys(styleMaps.SIZES).forEach(key => {
      let size = styleMaps.SIZES[key];
      let prop = size;
      let classPart = size + '-';

      classes['visible-' + size] = this.props[size + 'Visible'];


    }, this);

    classes['module'] = true;
    classes[this.props.direction] = this.props.direction;
    classes['widget-handle'] = this.props.widget;
    return (
      <ComponentClass {...this.props} className={classNames(this.props.className, classes)}>
          {this.props.children}
      </ComponentClass>
      )
  }
})

export default Module
