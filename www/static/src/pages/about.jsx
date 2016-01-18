import * as Action from "../actions/actions.js";

import React, { PropTypes } from 'react'

const About = React.createClass({
  componentDidMount: function() {
    // console.log(this.props);
    this.props.dispatch(Action.getProjects());
  },
  render () {
    console.log(this.props.projects);
    return (
      <div >about</div>
    )
  }
})

export default About
