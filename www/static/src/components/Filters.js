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
  getInitialState: function() {
    return {
      currFilter: this.props.currFilter || 'All'
    };
  },
  getDefaultProps: function() {
    return {
      componentClass: 'ul',
      currFilter: 'All',
      filters:[
        'Demo1',
        'Demo2',
        'Demo3',
      ]
    };
  },
  changeFilter(e){
    let el = e.target;
    this.setState({
      currFilter: el.getAttribute('data-filter')
    });
  },
  renderFilter(filter,i){
    let active_classes = ''
    if (filter == this.state.currFilter) {
      active_classes = 'active'
    }
    return <li onTouchTap={this.changeFilter} key={i} data-filter={filter} className={active_classes}>{filter}</li>
  },
  render() {
    let ComponentClass = this.props.componentClass;
      let self = this;
      let i = 0;
    return (
      <ComponentClass {...this.props} className={classNames(this.props.className, 'filters floating cast-shadow mb0')}>
        { this.renderFilter(this.props.currFilter,i)}
        {
          this.props.filters.map((item) => {
            i++;
            return self.renderFilter(item,i)
        })}
      </ComponentClass>
      )
  }
})

export default Filters
