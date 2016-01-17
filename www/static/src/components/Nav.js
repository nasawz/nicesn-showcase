import classNames from "classnames"
import elementType from 'react-prop-types/lib/elementType'
import React, { PropTypes } from 'react'

import styleMaps from './styleMaps';

const Nav = React.createClass({
  propTypes: {
    /**
     * You can use a custom element for this component
     */
    componentClass: elementType
  },
  getDefaultProps: function() {
    return {
      componentClass: 'nav'
    };
  },
  render() {
    let ComponentClass = this.props.componentClass;

    /**
     * 生成class样式
     */
    let classes = {};
    if (this.props.mode == styleMaps.BGS.dark) {
      classes['bg-dark'] = true;
    }
    if (this.props.mode == styleMaps.BGS.transparent) {
      classes['transparent'] = true;
      classes['absolute'] = true;
    }


    return (
      <ComponentClass {...this.props} className={classNames(this.props.className, classes)}>
          {this.props.children}
      </ComponentClass>
      )
  }
})

// TODO 滚动到顶部

export default Nav
