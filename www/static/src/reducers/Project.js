import Immutable from 'immutable' ;

import ActionTypes from "../constants/ActionTypes.js"

const initialState = Immutable.fromJS({
  projects:[]
});
export default function Project(state = initialState, action = null) {
  switch (action.type) {
    case ActionTypes.GET_PROJECTS:
      let nextAction = Immutable.fromJS(action);
      let rState = state.mergeDeep(nextAction);
      return  rState;
    default :
      return state
  }
}
