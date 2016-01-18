import Immutable from 'immutable' ;

import ActionTypes from "../constants/ActionTypes.js"

const initialState = Immutable.fromJS({
  projects:{}
});
export default function Project(state = initialState, action = null) {
  switch (action.type) {
    case ActionTypes.GET_PROJECTS:
      let rState = state.setIn(["projects"],categoryListAction.getIn(["projects"]));
      return  rState;
    default :
      return state
  }
}
