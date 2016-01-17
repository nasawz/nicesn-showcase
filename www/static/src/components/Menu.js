import classNames from "classnames"
import elementType from 'react-prop-types/lib/elementType'
import React, { PropTypes } from 'react'

import MenuItem from "./MenuItem.js";

const Menu = React.createClass({
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
  renderThirdItems(subs) {
    let submenus;

    let i = 0;
    submenus = subs.map((item) => {
      i++;
      return (
        <li key={i}>
                    <MenuItem item={item} />
                  </li>
        )
      })

      return (<ul>{submenus}</ul>)
    },
    renderNormalItems(subs) {

      let i = 0;
      return subs.map((item) => {
        i++;
        let classes = {}
        if (item.subs) {
          classes['has-dropdown'] = true;
          return (<li key={i} className={classNames(classes)}>
        <MenuItem item={item} />
        { this.renderThirdItems(item.subs) }
        </li>)
        }
      })

    },
    renderSubItems(subs) {
      let classes = {}
      let submenus = '';
      if (subs.type == 'mega') {
        classes['mega-menu'] = true;
        let i = 0;
        submenus = subs.datas.map((item) => {
          i++;
          return <li key={i}><ul>{ this.renderThirdItems(item)}</ul></li>
          })
        } else {
          submenus = this.renderNormalItems(subs.datas)
        }
        return (<ul className={classNames(classes)}>{submenus}</ul>)
      },
      renderItems() {
        let i = 0;
        return this.props.menus.map((item) => {
          i++;
          let classes = {}
          if (item.subs) {
            classes['has-dropdown'] = true;
            return (<li key={i} className={classNames(classes)}>
        <MenuItem item={item} />
        { this.renderSubItems(item.subs) }
        </li>)
          }
        })
      },
      render() {
        let ComponentClass = this.props.componentClass;
        return (
          <ComponentClass {...this.props} className={classNames(this.props.className, 'menu')}>
        { this.renderItems() }
      </ComponentClass>
          )
      }
    })

    export default Menu
