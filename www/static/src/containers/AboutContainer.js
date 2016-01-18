import React, { Component } from 'react';
import { connect } from 'react-redux'

import About from '../pages/about.jsx'
import {getProjects} from '../reducers'

function mapProps(state) {
    return {
        projects: getProjects(state)
    }
}

export default connect(mapProps)(About);
