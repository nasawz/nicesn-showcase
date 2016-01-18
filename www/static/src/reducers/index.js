import { combineReducers } from 'redux'

import Project from './Project.js'

export default combineReducers({
    Project
})

export function getProjects(state) {
    return state.Project
}
