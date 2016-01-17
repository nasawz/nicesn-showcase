import classNames from 'classnames';
import elementType from 'react-prop-types/lib/elementType';
import Masonry from "Masonry";
import ReactDOM from "react-dom";
import React, { PropTypes } from 'react';

import styleMaps from './styleMaps';
import Filters from "./Filters.js";
import Loader from "./Loader.js";
import Project from "./Project.js";
import Row from "./Row.js";

const Projects = React.createClass({
  propTypes: {
    componentClass: elementType
  },
  getInitialState: function() {
    return {
      isLoaded: false
    };
  },
  getDefaultProps: function() {
    return {
      componentClass: 'section'
    };
  },
  componentDidMount: function() {
    let el = ReactDOM.findDOMNode(this.refs.masonry)
    let msnry;
    let self = this;
    setTimeout(function() {
      msnry = new Masonry(el, {
        itemSelector: '.masonry-item'
      });
      msnry.on('layoutComplete', function() {
        self.setState({
          isLoaded: true
        });
      })
      msnry.layout();
      window.msnry = msnry;
    }, 1500);
  },
  render() {
    let ComponentClass = this.props.componentClass;
    let classes = {};
    if (this.props.mode == styleMaps.BGS.dark) {
      classes['bg-dark'] = true;
    }
    if (this.props.mode == styleMaps.BGS.transparent) {
      classes['transparent'] = true;
      classes['absolute'] = true;
    }
    classes['projects'] = true;
    classes['p0'] = true;

    let loader_classes = ''
    let project_classes = ''
    let masonry_classes={}
    if (this.state.isLoaded) {
      loader_classes ='fadeOut'
      project_classes ='fadeIn'
      masonry_classes['fadeIn']=true
    }
    return (
      <ComponentClass {...this.props} className={classNames(this.props.className, classes)}>
            <Filters data={this.props.filter_data} />
            <Loader className={loader_classes} />
            <Row ref="masonry" className={classNames("masonry masonryFlyIn fadeIn", masonry_classes)} >
              <Project className={project_classes} />
              <Project className={project_classes} />
              <Project className={project_classes} />
              <Project className={project_classes} />
              <Project className={project_classes} />
              <Project className={project_classes} />
              <Project className={project_classes} />
              <Project className={project_classes} />
              <Project className={project_classes} />
              <Project className={project_classes} />
              <Project className={project_classes} />
            </Row>
      </ComponentClass>
      )
  }
})

// var elem = document.querySelector('.grid');
// var msnry = new Masonry( elem, {
//   // options
//   itemSelector: '.grid-item',
//   columnWidth: 200
// });

export default Projects
