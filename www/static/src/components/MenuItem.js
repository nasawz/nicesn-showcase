import classNames from 'classnames';
import elementType from 'react-prop-types/lib/elementType';
import React, { PropTypes } from 'react'

const MenuItem = React.createClass({
  renderIcon(icon) {
    if (icon && icon != '') {
      return <i className="ti-layout-accordion-separated"></i>
    }
  },
  renderLabel(label) {
    if (label && label != '') {
      return <span className="label">{label}</span>
    }
  },
  render() {
    let item = this.props.item;
    let Component = 'span';
    let classes = {}
    if (item.route && item.route != '') {
      Component = 'a'
    } else {
      classes['title'] = true;
    }
    return (
      <Component href="javascript:;" className={classNames(classes)}>
        { this.renderIcon(item.icon) }
        {item.title}
        { this.renderLabel(item.label) }
      </Component>
      )
  }
})

export default MenuItem
