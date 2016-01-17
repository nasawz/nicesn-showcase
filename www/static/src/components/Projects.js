import classNames from 'classnames';
import elementType from 'react-prop-types/lib/elementType';
import JQuery from "JQuery";
import Masonry from "Masonry";
import ReactDOM from "react-dom";
import React, { PropTypes } from 'react';

import styleMaps from './styleMaps';
import Filters from "./Filters.js";
import Loader from "./Loader.js";
import Project from "./Project.js";
import Row from "./Row.js";

let mr_scrollTop = 0
let mr_floatingProjectSections;

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
    addEventListener('scroll', function() {
        mr_scrollTop = window.pageYOffset;
    }, false);
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
      self.setupFloatingProjectFilters()
      self.updateFloatingFilters()
      window.addEventListener("scroll", self.updateFloatingFilters, false);
    }, 1500);
  },
  setupFloatingProjectFilters(){
      let section = JQuery(ReactDOM.findDOMNode(this))
      mr_floatingProjectSections = [];
      mr_floatingProjectSections.push({
            section: section.get(0),
            outerHeight: section.outerHeight(),
            elemTop: section.offset().top,
            elemBottom: section.offset().top + section.outerHeight(),
            filters: section.find('.filters.floating'),
            filersHeight: section.find('.filters.floating').outerHeight(true)
        });
  },
  updateFloatingFilters(){
    let l = mr_floatingProjectSections.length;
    while (l--) {
        var section = mr_floatingProjectSections[l];

        if ((section.elemTop < mr_scrollTop) && typeof window.mr_variant == "undefined" ) {
            section.filters.css({
                position: 'fixed',
                top: '16px',
                bottom: 'auto'
            });
            if (window.mr_navScrolled) {
                section.filters.css({
                    transform: 'translate3d(-50%,48px,0)'
                });
            }
            if (mr_scrollTop > (section.elemBottom - 70)) {
                section.filters.css({
                    position: 'absolute',
                    bottom: '16px',
                    top: 'auto'
                });
                section.filters.css({
                    transform: 'translate3d(-50%,0,0)'
                });
            }
        } else {
            section.filters.css({
                position: 'absolute',
                transform: 'translate3d(-50%,0,0)'
            });
        }
    }
  },
  renderProjects(project_classes){
    let i = 0;
    return this.props.projects.map((item) => {
      i++;
      if (item.filters =='') {

      }
      return <Project key={i} item={item} className={project_classes} />
    })
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
              { this.renderProjects(project_classes) }
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
